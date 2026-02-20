(() => {
  const byId = (id) => document.getElementById(id);

  const video = byId("videoPlayer");
  const grid = byId("channelGrid");
  const filterRow = document.querySelector(".filter-row");
  const searchInput = byId("searchInput");
  const searchPopup = byId("searchPopup");
  const searchPopupList = byId("searchPopupList");

  const nowPlayingName = byId("nowPlayingName");
  const nowPlayingCategory = byId("nowPlayingCategory");
  const streamStatus = byId("streamStatus");
  const bufferingOverlay = byId("bufferingOverlay");
  const streamSummary = byId("streamSummary");
  const viewerCountChip = byId("viewerCountChip");
  const metaNotice = byId("metaNotice");
  const channelCountLabel = byId("channelCountLabel");
  const playerPanel = document.querySelector(".player-panel");
  const commentsPanel = document.querySelector(".comments-panel");

  if (!video || !grid || !filterRow || !searchInput || !streamStatus || !bufferingOverlay) {
    return;
  }

  let channels = [];
  let categories = ["All"];
  let hls = null;
  let activeCategory = "All";
  let searchQuery = "";
  let popupMatches = [];
  let popupActiveIndex = -1;
  let currentChannelId = "";
  let liveViewerCount = 0;
  let seekLockTime = 0;
  let seekGuardReady = false;
  let isSeekResetting = false;

  const MOBILE_BREAKPOINT = 680;
  const MOBILE_CHANNEL_LIMIT = 18;
  let mobileShowAllChannels = false;

  const esc = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const priority = (channel) => {
    const parsed = Number.parseInt(channel?.priority, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : Number.MAX_SAFE_INTEGER;
  };

  const sortChannels = (list) =>
    [...list].sort((a, b) => {
      const diff = priority(a) - priority(b);
      return diff !== 0 ? diff : String(a.name || "").localeCompare(String(b.name || ""));
    });

  function setStatus(text) {
    streamStatus.textContent = text;
    streamStatus.setAttribute("aria-label", `Stream status: ${text}`);
  }

  function setNotice(text, tone = "default") {
    if (!metaNotice) return;
    metaNotice.classList.remove("text-secondary", "text-success", "text-danger");
    metaNotice.classList.add(tone === "success" ? "text-success" : tone === "error" ? "text-danger" : "text-secondary");
    metaNotice.textContent = text;
  }

  function setViewerCount(count) {
    if (!viewerCountChip) return;
    const safe = Number.isFinite(count) && count >= 0 ? count : 0;
    liveViewerCount = safe;
    const label = safe === 1 ? "1 person watching" : `${safe} people watching`;
    viewerCountChip.textContent = label;
    viewerCountChip.setAttribute("aria-label", `Live viewer count: ${label}`);
  }

  function detectClientCountryHint() {
    try {
      const timeZone = String(Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
      if (timeZone === "asia/dhaka") {
        return "BD";
      }
    } catch (_error) {
      // Ignore timezone detection issues.
    }

    const languagePool = [];
    if (Array.isArray(navigator.languages)) {
      languagePool.push(...navigator.languages);
    }
    if (navigator.language) {
      languagePool.push(navigator.language);
    }

    for (const language of languagePool) {
      const normalized = String(language || "").trim();
      if (!normalized) {
        continue;
      }
      if (/(-|_)bd\b/i.test(normalized)) {
        return "BD";
      }
    }

    return "";
  }

  function summary(channel) {
    const map = {
      News: "Rolling headlines and live reports updated in real time.",
      Sports: "Live sports coverage with commentary and match updates.",
      Entertainment: "Continuous entertainment stream with trending segments.",
      Movies: "Always-on movie programming for long-form viewing.",
      Music: "Live music channel with nonstop curated playlists.",
      Kids: "Family-friendly live lineup with safe programming."
    };
    return map[channel.category] || "Always-on live stream with curated programming for this channel.";
  }

  function notifyChannelChange(channel) {
    window.liveTvCurrentChannel = { id: channel.id, name: channel.name };
    window.dispatchEvent(new CustomEvent("livetv:channel-change", { detail: { id: channel.id, name: channel.name } }));
  }

  function setBufferingState(isBuffering) {
    bufferingOverlay.classList.toggle("hidden", !isBuffering);
  }

  function syncChatHeightToPlayer() {
    if (!playerPanel || !commentsPanel) return;
    const isDesktop = window.matchMedia("(min-width: 1200px)").matches;
    if (!isDesktop) {
      commentsPanel.style.height = "";
      return;
    }
    const playerHeight = Math.round(playerPanel.getBoundingClientRect().height);
    commentsPanel.style.height = `${Math.max(420, playerHeight)}px`;
  }

  function isFullscreenActive() {
    return Boolean(
      document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
    );
  }

  function applyVideoFitMode() {
    const isMobile = window.matchMedia("(max-width: 767.98px)").matches;
    const fit = isFullscreenActive() || isMobile ? "contain" : "cover";
    video.style.objectFit = fit;
  }

  function destroyHls() {
    if (hls) {
      hls.destroy();
      hls = null;
    }
  }

  function categoryButtonClass(active) {
    return active ? "category-btn btn btn-sm btn-primary" : "category-btn btn btn-sm btn-outline-light";
  }

  function channelCardClass(active) {
    return [
      "channel-card btn w-100 text-start p-0 overflow-hidden rounded-3 border",
      active ? "active border-info-subtle" : "border-secondary-subtle"
    ].join(" ");
  }

  function renderFilters() {
    filterRow.innerHTML = categories
      .map((category) => `<button type="button" class="${categoryButtonClass(category === activeCategory)}" data-category="${esc(category)}">${esc(category)}</button>`)
      .join("");
  }

  function isMobileViewport() {
    return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
  }

  function resetMobileChannelViewState() {
    mobileShowAllChannels = !isMobileViewport() || Boolean(searchQuery) || activeCategory !== "All";
  }

  function filteredChannels() {
    return channels.filter((channel) => {
      const categoryMatch = activeCategory === "All" || channel.category === activeCategory;
      const blob = `${channel.name} ${channel.category} ${channel.country || ""}`.toLowerCase();
      return categoryMatch && blob.includes(searchQuery);
    });
  }

  function renderChannels() {
    const list = filteredChannels();
    const shouldLimitForMobile =
      isMobileViewport() &&
      !mobileShowAllChannels &&
      !searchQuery &&
      activeCategory === "All" &&
      list.length > MOBILE_CHANNEL_LIMIT;
    const visibleList = shouldLimitForMobile ? list.slice(0, MOBILE_CHANNEL_LIMIT) : list;

    if (channelCountLabel) {
      if (!list.length) {
        channelCountLabel.textContent = "0 channels";
      } else if (shouldLimitForMobile) {
        channelCountLabel.textContent = `Showing ${visibleList.length} of ${list.length} channels`;
      } else {
        channelCountLabel.textContent = `${list.length} channels`;
      }
    }

    if (!list.length) {
      grid.innerHTML =
        '<div class="col-12"><div class="alert alert-secondary mb-0 py-2" role="status">No channels match your current search or filters.</div></div>';
      return;
    }

    const cardsMarkup = visibleList
      .map((channel) => {
        const active = channel.id === currentChannelId;
        return `
          <div class="col">
            <button
              type="button"
              role="listitem"
              class="${channelCardClass(active)}"
              data-channel-id="${esc(channel.id)}"
              aria-label="Play channel ${esc(channel.name)}"
              aria-pressed="${active ? "true" : "false"}"
            >
              <img class="channel-thumb" src="${esc(channel.thumbnail)}" alt="${esc(channel.name)} thumbnail" loading="lazy" decoding="async" />
              <div class="p-2">
                <h3 class="h6 fs-6 mb-1 text-light">${esc(channel.name)}</h3>
                <p class="small text-secondary mb-0">${esc(channel.category)}${channel.country ? ` | ${esc(channel.country)}` : ""}</p>
              </div>
            </button>
          </div>
        `;
      })
      .join("");

    const moreButtonMarkup = shouldLimitForMobile
      ? `
        <div class="col-12 pt-1">
          <button type="button" data-action="show-more-channels" class="btn btn-outline-info w-100">
            Show ${list.length - visibleList.length} more channels
          </button>
        </div>
      `
      : "";

    grid.innerHTML = `${cardsMarkup}${moreButtonMarkup}`;
  }

  function getPopupMatches(query) {
    if (!query) return [];
    return channels.filter((channel) => `${channel.name} ${channel.category} ${channel.country || ""}`.toLowerCase().includes(query)).slice(0, 8);
  }

  function closeSearchPopup() {
    searchPopup.classList.add("hidden");
    searchInput.setAttribute("aria-expanded", "false");
    searchInput.removeAttribute("aria-activedescendant");
    popupActiveIndex = -1;
  }

  function updatePopupActiveItem() {
    const items = searchPopupList.querySelectorAll(".search-popup-item");
    items.forEach((item, index) => {
      const active = index === popupActiveIndex;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
      if (active) {
        searchInput.setAttribute("aria-activedescendant", item.id);
      }
    });
    if (popupActiveIndex < 0) {
      searchInput.removeAttribute("aria-activedescendant");
    }
  }

  function renderSearchPopup() {
    popupMatches = getPopupMatches(searchQuery);
    if (!searchQuery) {
      closeSearchPopup();
      return;
    }

    if (!popupMatches.length) {
      searchPopupList.innerHTML =
        '<div class="px-3 py-2 small text-secondary" role="status">No matching channels found.</div>';
      searchPopup.classList.remove("hidden");
      searchInput.setAttribute("aria-expanded", "true");
      return;
    }

    searchPopupList.innerHTML = popupMatches
      .map((channel, index) => {
        const id = `searchPopupOption-${index}`;
        const meta = `${channel.category}${channel.country ? ` | ${channel.country}` : ""}`;
        return `
          <button id="${esc(id)}" type="button" role="option" class="search-popup-item w-100 text-start px-3 py-2" data-channel-id="${esc(channel.id)}" aria-selected="false">
            <div class="d-flex justify-content-between gap-2">
              <span class="fw-semibold">${esc(channel.name)}</span>
              <span class="small text-secondary">${esc(meta)}</span>
            </div>
          </button>
        `;
      })
      .join("");

    searchPopup.classList.remove("hidden");
    searchInput.setAttribute("aria-expanded", "true");
    popupActiveIndex = -1;
  }

  function updateMeta(channel) {
    if (nowPlayingName) nowPlayingName.textContent = channel.name;
    if (nowPlayingCategory) nowPlayingCategory.textContent = channel.category || "General";
    if (streamSummary) streamSummary.textContent = summary(channel);
    setViewerCount(liveViewerCount);
  }

  function handleHlsFatalError(data) {
    if (!hls || !data || !data.fatal) return;
    if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
      setStatus("Network issue, retrying...");
      hls.startLoad();
      return;
    }
    if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
      setStatus("Recovering media...");
      hls.recoverMediaError();
      return;
    }
    setBufferingState(false);
    setStatus("Stream error");
    destroyHls();
  }

  function attemptAutoPlay() {
    const promise = video.play();
    if (!promise || typeof promise.catch !== "function") {
      setStatus("Live");
      return;
    }
    promise
      .then(() => setStatus("Live"))
      .catch(() => setStatus("Tap play to start"));
  }

  function loadChannel(channel) {
    if (!channel) return;
    currentChannelId = channel.id;
    liveViewerCount = 0;
    seekLockTime = 0;
    seekGuardReady = false;
    isSeekResetting = false;
    updateMeta(channel);
    notifyChannelChange(channel);
    renderChannels();
    setStatus("Loading...");
    setNotice(`Switched to ${channel.name}.`);

    try {
      const url = new URL(window.location.href);
      url.searchParams.set("channel", channel.id);
      window.history.replaceState({}, "", url.toString());
    } catch (_error) {
      // Ignore URL update issues.
    }

    setBufferingState(true);
    destroyHls();
    video.pause();
    video.removeAttribute("src");
    video.load();
    syncChatHeightToPlayer();

    const streamUrl = String(channel.playbackUrl || "").trim();
    if (!streamUrl) {
      setBufferingState(false);
      setStatus("Stream unavailable");
      setNotice("This channel is missing a playable stream URL.", "error");
      return;
    }

    if (window.Hls && Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90,
        liveDurationInfinity: true
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        attemptAutoPlay();
      });
      hls.on(Hls.Events.ERROR, (_, data) => handleHlsFatalError(data));
      return;
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
      video.addEventListener(
        "loadedmetadata",
        () => {
          attemptAutoPlay();
        },
        { once: true }
      );
      video.load();
      return;
    }

    setBufferingState(false);
    setStatus("HLS unsupported");
    alert("This browser does not support HLS playback.");
  }

  async function fetchChannels() {
    const headers = {};
    const countryHint = detectClientCountryHint();
    if (countryHint) {
      headers["X-Client-Country"] = countryHint;
    }

    const response = await fetch("/tv.json", {
      cache: "no-store",
      headers
    });
    if (!response.ok) throw new Error("Failed to fetch channels");
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  }

  function initialChannel() {
    const id = new URLSearchParams(window.location.search).get("channel");
    if (!id) return channels[0] || null;
    return channels.find((channel) => channel.id === id) || channels[0] || null;
  }

  function bindEvents() {
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;
    video.controlsList = "nodownload noplaybackrate noremoteplayback";
    video.disablePictureInPicture = true;
    applyVideoFitMode();

    ["loadstart", "waiting", "stalled"].forEach((name) => video.addEventListener(name, () => setBufferingState(true)));
    ["playing", "canplay"].forEach((name) =>
      video.addEventListener(name, () => {
        setBufferingState(false);
        if (name === "playing") setStatus("Live");
      })
    );

    video.addEventListener("playing", () => {
      seekGuardReady = true;
    });
    video.addEventListener("pause", () => {
      if (!video.ended) setStatus("Paused");
    });
    video.addEventListener("error", () => {
      setBufferingState(false);
      setStatus("Playback error");
    });
    video.addEventListener("timeupdate", () => {
      if (video.seeking || isSeekResetting) return;
      seekLockTime = video.currentTime;
    });
    video.addEventListener("seeking", () => {
      if (!seekGuardReady || isSeekResetting) return;
      isSeekResetting = true;
      try {
        video.currentTime = seekLockTime;
      } catch (_error) {
        // Ignore seek reset errors.
      }
      requestAnimationFrame(() => {
        isSeekResetting = false;
      });
      setStatus("Live");
    });
    video.addEventListener("loadedmetadata", () => syncChatHeightToPlayer());
    video.addEventListener("webkitbeginfullscreen", () => {
      video.style.objectFit = "contain";
    });
    video.addEventListener("webkitendfullscreen", () => {
      applyVideoFitMode();
    });

    searchInput.addEventListener("input", (event) => {
      searchQuery = event.target.value.trim().toLowerCase();
      resetMobileChannelViewState();
      renderChannels();
      renderSearchPopup();
    });

    searchInput.addEventListener("focus", () => {
      if (searchQuery) renderSearchPopup();
    });

    searchInput.addEventListener("keydown", (event) => {
      if (searchPopup.classList.contains("hidden")) return;
      if (event.key === "ArrowDown") {
        if (!popupMatches.length) return;
        event.preventDefault();
        popupActiveIndex = (popupActiveIndex + 1) % popupMatches.length;
        updatePopupActiveItem();
        return;
      }
      if (event.key === "ArrowUp") {
        if (!popupMatches.length) return;
        event.preventDefault();
        popupActiveIndex = popupActiveIndex <= 0 ? popupMatches.length - 1 : popupActiveIndex - 1;
        updatePopupActiveItem();
        return;
      }
      if (event.key === "Enter" && popupActiveIndex >= 0 && popupActiveIndex < popupMatches.length) {
        event.preventDefault();
        loadChannel(popupMatches[popupActiveIndex]);
        closeSearchPopup();
      }
      if (event.key === "Escape") {
        event.preventDefault();
        closeSearchPopup();
      }
    });

    searchPopup?.addEventListener("mousedown", (event) => {
      const item = event.target.closest(".search-popup-item");
      if (!item) return;
      event.preventDefault();
      const channel = channels.find((entry) => entry.id === item.dataset.channelId);
      loadChannel(channel);
      closeSearchPopup();
    });

    filterRow.addEventListener("click", (event) => {
      const button = event.target.closest(".category-btn");
      if (!button) return;
      activeCategory = button.dataset.category || "All";
      resetMobileChannelViewState();
      renderFilters();
      renderChannels();
    });

    grid.addEventListener("click", (event) => {
      const showMoreButton = event.target.closest("button[data-action='show-more-channels']");
      if (showMoreButton) {
        mobileShowAllChannels = true;
        renderChannels();
        return;
      }
      const card = event.target.closest(".channel-card");
      if (!card) return;
      const channel = channels.find((entry) => entry.id === card.dataset.channelId);
      loadChannel(channel);
    });

    window.addEventListener("livetv:viewer-count", (event) => {
      const roomId = String(event.detail?.roomId || "");
      const count = Number.parseInt(event.detail?.count, 10);
      if (!Number.isFinite(count) || count < 0) return;
      if (roomId && currentChannelId && roomId !== currentChannelId) return;
      setViewerCount(count);
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".search-area") && !event.target.closest("#searchPopup")) {
        closeSearchPopup();
      }
    });

    window.addEventListener("resize", () => {
      applyVideoFitMode();
      resetMobileChannelViewState();
      renderChannels();
      syncChatHeightToPlayer();
    });
    document.addEventListener("fullscreenchange", applyVideoFitMode);
    document.addEventListener("webkitfullscreenchange", applyVideoFitMode);
    document.addEventListener("mozfullscreenchange", applyVideoFitMode);
    document.addEventListener("MSFullscreenChange", applyVideoFitMode);
  }

  async function init() {
    try {
      channels = sortChannels(await fetchChannels());
      categories = ["All", ...new Set(channels.map((channel) => channel.category).filter(Boolean))];
      resetMobileChannelViewState();
      renderFilters();
      renderChannels();
      bindEvents();
      syncChatHeightToPlayer();

      if (!channels.length) {
        setStatus("No channels");
        setNotice("No channels are available yet.", "error");
        return;
      }

      setViewerCount(0);
      loadChannel(initialChannel());
    } catch (_error) {
      setStatus("Unable to load channels");
      setNotice("Could not load stream data. Please try again.", "error");
      grid.innerHTML = '<div class="col-12"><div class="alert alert-danger mb-0 py-2">Unable to load channels from server.</div></div>';
    }
  }

  init();
})();
