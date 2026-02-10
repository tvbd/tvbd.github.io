 // JW Player instance reference
    let jwInstance = null;

    const listBar = document.getElementById("listbar");
    const title = document.getElementById("now-playing-title");
    const playerDiv = document.getElementById("main-player");
    const search = document.getElementById("channel-search");
    const tabs = document.querySelectorAll(".cat-tab");
    let items = [];
    let activeCategory = "all";

    fetch("tv.json")
    .then(r => r.json())
    .then(data => {
        data.channels.forEach((ch, i) => {
			if (ch.status === "hidden") return;
            const li = document.createElement("li");
            li.className = "channel-item";
            li.dataset.name = ch.name.toLowerCase();
            li.dataset.category = ch.category;
            li.innerHTML = `
                <div class="logo-wrapper">
                    <img src="${ch.logo}" class="channel-logo">
                </div>
                <div class="channel-name">${ch.name}</div>
            `;
            li.onclick = () => {
                // Load new stream in JW Player
                if (jwInstance) {
                    jwInstance.load([{ file: ch.url }]);
                    jwInstance.play();
                } else {
                    // First time: setup the player
                    jwInstance = jwplayer("main-player").setup({
                        file: ch.url,
                        width: "100%",
                        height: "100%",
                        autostart: false,
						mute: false
                        // Add hlsjsConfig if needed for better HLS handling
                        // hlsjsConfig: { }
                    });
                }
                title.innerText = ch.name;
                document.querySelectorAll(".channel-item").forEach(x => x.classList.remove("active"));
                li.classList.add("active");
                if (window.innerWidth < 992) window.scrollTo({ top: 0, behavior: "smooth" });
            };
            listBar.appendChild(li);
            items.push(li);
        });
        if (items.length > 0) items[0].click(); // Auto-select first channel
    });

    function filterChannels() {
        const q = search.value.toLowerCase();
        items.forEach(i => {
            const matchName = i.dataset.name.includes(q);
            const matchCat = (activeCategory === "all" || i.dataset.category === activeCategory);
            i.style.display = (matchName && matchCat) ? "flex" : "none";
        });
    }
    search.addEventListener("input", filterChannels);
    tabs.forEach(tab => {
        tab.onclick = () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeCategory = tab.dataset.type;
            filterChannels();
        };
    });