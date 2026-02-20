(() => {
  const commentForm = document.getElementById("commentForm");
  const commentNameInput = document.getElementById("commentName");
  const commentTextInput = document.getElementById("commentText");
  const commentsFeed = document.getElementById("commentsFeed");
  const commentStatus = document.getElementById("commentStatus");
  const chatViewerCount = document.getElementById("chatViewerCount");
  const chatChannelLabel = document.getElementById("chatChannelLabel");
  const totalOnlineUsersChip = document.getElementById("totalOnlineUsersChip");
  const submitButton = commentForm?.querySelector("button[type='submit']");

  if (!commentForm || !window.io) {
    return;
  }

  const NAME_STORAGE_KEY = "livetv.comment.name";
  const MAX_RENDERED_COMMENTS = 140;
  const defaultRoom = "lobby";
  const SEND_ACK_TIMEOUT_MS = 4500;
  const defaultSubmitLabel = submitButton?.textContent?.trim() || "Send";
  const statusBaseClasses = ["comment-status", "mt-2", "small", "text-secondary"];
  const statusTypeClasses = {
    success: ["text-success"],
    error: ["text-danger"]
  };

  let activeRoom = defaultRoom;
  let activeChannelName = "Lobby";
  let submitSequence = 0;
  let activeSubmitToken = 0;
  let submitAckTimeoutId = 0;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function normalizeRoom(value) {
    const room = String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-_]/g, "")
      .slice(0, 80);
    return room || defaultRoom;
  }

  function setStatus(message, type = "") {
    commentStatus.textContent = message;
    commentStatus.className = statusBaseClasses.join(" ");
    if (type && statusTypeClasses[type]) {
      commentStatus.classList.remove("text-secondary");
      commentStatus.classList.add(...statusTypeClasses[type]);
    }
  }

  function updateRoomLabel() {
    chatChannelLabel.textContent = `Room: ${activeChannelName}`;
  }

  function updateTotalOnlineUsers(count) {
    if (!totalOnlineUsersChip) {
      return;
    }
    const parsed = Number.parseInt(count, 10);
    const safeCount = Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
    totalOnlineUsersChip.textContent = `${safeCount} online`;
    totalOnlineUsersChip.setAttribute("aria-label", `Total online users: ${safeCount}`);
  }

  function formatTime(isoDate) {
    const value = new Date(isoDate);
    if (Number.isNaN(value.getTime())) {
      return "";
    }
    return value.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function renderEmptyState(message = "No comments yet. Be the first to comment.") {
    commentsFeed.innerHTML = `<div class="comment-empty px-3 py-4 text-center small text-secondary">${escapeHtml(message)}</div>`;
  }

  function createCommentNode(comment) {
    const wrapper = document.createElement("article");
    wrapper.className = "comment-item px-1 py-2";
    wrapper.innerHTML = `
      <div class="comment-head mb-1 d-flex align-items-center justify-content-between gap-2">
        <span class="comment-name fw-semibold text-light">${escapeHtml(comment.name || "Guest")}</span>
        <span class="comment-time small text-secondary">${escapeHtml(formatTime(comment.createdAt))}</span>
      </div>
      <p class="comment-message m-0 small text-light">${escapeHtml(comment.message || "")}</p>
    `;
    return wrapper;
  }

  function appendComment(comment, shouldScroll = true) {
    const emptyState = commentsFeed.querySelector(".comment-empty");
    if (emptyState) {
      emptyState.remove();
    }

    commentsFeed.appendChild(createCommentNode(comment));
    while (commentsFeed.children.length > MAX_RENDERED_COMMENTS) {
      commentsFeed.removeChild(commentsFeed.firstChild);
    }

    if (shouldScroll) {
      commentsFeed.scrollTop = commentsFeed.scrollHeight;
    }
  }

  function renderHistory(comments) {
    commentsFeed.innerHTML = "";
    if (!Array.isArray(comments) || !comments.length) {
      renderEmptyState();
      return;
    }

    comments.forEach((comment) => appendComment(comment, false));
    commentsFeed.scrollTop = commentsFeed.scrollHeight;
  }

  function clearSubmitAckTimeout() {
    if (submitAckTimeoutId) {
      window.clearTimeout(submitAckTimeoutId);
      submitAckTimeoutId = 0;
    }
  }

  function setSubmitting(isSubmitting) {
    if (submitButton) {
      submitButton.disabled = isSubmitting;
      submitButton.textContent = isSubmitting ? "Sending..." : defaultSubmitLabel;
      submitButton.setAttribute("aria-busy", isSubmitting ? "true" : "false");
    }
  }

  const savedName = localStorage.getItem(NAME_STORAGE_KEY);
  if (savedName) {
    commentNameInput.value = savedName;
  }

  const socket = io();

  function joinRoom(nextRoomId, channelName = "") {
    activeRoom = normalizeRoom(nextRoomId);
    activeChannelName = String(channelName || "Lobby").trim() || "Lobby";
    updateRoomLabel();
    renderEmptyState("Loading comments...");
    window.dispatchEvent(
      new CustomEvent("livetv:viewer-count", {
        detail: { roomId: activeRoom, count: 0 }
      })
    );

    if (socket.connected) {
      socket.emit("comment:join", { roomId: activeRoom });
      setStatus(`Connected to ${activeChannelName} chat.`, "success");
    }
  }

  socket.on("connect", () => {
    setStatus(`Connected to ${activeChannelName} chat.`, "success");
    socket.emit("comment:join", { roomId: activeRoom });
  });

  socket.on("disconnect", () => {
    activeSubmitToken = 0;
    clearSubmitAckTimeout();
    setSubmitting(false);
    setStatus("Disconnected. Reconnecting...", "error");
  });

  socket.on("users:total", (payload = {}) => {
    updateTotalOnlineUsers(payload?.count);
  });

  socket.on("comment:history", (payload) => {
    const roomId = normalizeRoom(payload?.roomId);
    if (roomId !== activeRoom) {
      return;
    }
    renderHistory(payload?.comments || []);
  });

  socket.on("comment:new", (comment) => {
    const roomId = normalizeRoom(comment?.roomId);
    if (roomId !== activeRoom) {
      return;
    }
    appendComment(comment, true);
  });

  socket.on("comment:viewers", (payload) => {
    const roomId = normalizeRoom(payload?.roomId);
    if (roomId !== activeRoom) {
      return;
    }
    const count = Number.parseInt(payload?.count, 10);
    const safeCount = Number.isFinite(count) && count > 0 ? count : 0;
    chatViewerCount.textContent = `${safeCount} online`;
    window.dispatchEvent(
      new CustomEvent("livetv:viewer-count", {
        detail: { roomId, count: safeCount }
      })
    );
  });

  commentNameInput.addEventListener("change", () => {
    const nextName = commentNameInput.value.trim().slice(0, 40);
    commentNameInput.value = nextName;
    if (nextName) {
      localStorage.setItem(NAME_STORAGE_KEY, nextName);
    }
  });

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (submitButton?.disabled) {
      return;
    }

    const name = commentNameInput.value.trim().slice(0, 40);
    const message = commentTextInput.value.trim().replace(/\s+/g, " ").slice(0, 280);

    if (!name) {
      setStatus("Please enter your name first.", "error");
      commentNameInput.focus();
      return;
    }

    if (!message) {
      setStatus("Please write a comment message.", "error");
      commentTextInput.focus();
      return;
    }

    if (!socket.connected) {
      setStatus("Chat is reconnecting. Please wait and try again.", "error");
      return;
    }

    commentNameInput.value = name;
    localStorage.setItem(NAME_STORAGE_KEY, name);

    const currentSubmitToken = ++submitSequence;
    activeSubmitToken = currentSubmitToken;
    setSubmitting(true);
    setStatus("Sending comment...");

    commentTextInput.value = "";
    commentTextInput.focus();

    clearSubmitAckTimeout();
    submitAckTimeoutId = window.setTimeout(() => {
      if (activeSubmitToken !== currentSubmitToken) {
        return;
      }
      activeSubmitToken = 0;
      setSubmitting(false);
      if (!commentTextInput.value.trim()) {
        commentTextInput.value = message;
      }
      setStatus("Network is slow. You can try sending again.", "error");
    }, SEND_ACK_TIMEOUT_MS);

    socket.emit(
      "comment:send",
      { roomId: activeRoom, name, message },
      (result = {}) => {
        if (activeSubmitToken !== currentSubmitToken) {
          return;
        }

        activeSubmitToken = 0;
        clearSubmitAckTimeout();
        setSubmitting(false);
        if (!result.ok) {
          if (!commentTextInput.value.trim()) {
            commentTextInput.value = message;
          }
          commentTextInput.focus();
          setStatus(result.message || "Failed to send comment.", "error");
          return;
        }

        setStatus("Comment posted.", "success");
      }
    );
  });

  window.addEventListener("livetv:channel-change", (event) => {
    const channelId = event.detail?.id;
    const channelName = event.detail?.name;
    joinRoom(channelId, channelName);
  });

  if (window.liveTvCurrentChannel?.id) {
    activeRoom = normalizeRoom(window.liveTvCurrentChannel.id);
    activeChannelName = String(window.liveTvCurrentChannel.name || "Lobby");
  }

  updateRoomLabel();
  renderEmptyState("Connecting to chat...");
})();
