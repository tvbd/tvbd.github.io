
        // Protection Scripts
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showProtectionWarning();
            return false;
        });

        document.addEventListener('keydown', function(e) {
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'C') ||
                (e.ctrlKey && e.key === 'U') ||
                (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                (e.ctrlKey && e.shiftKey && e.key === 'K')
            ) {
                e.preventDefault();
                showProtectionWarning();
                return false;
            }
        });

        function detectDevTools() {
            const widthThreshold = window.outerWidth - window.innerWidth > 160;
            const heightThreshold = window.outerHeight - window.innerHeight > 160;

            if (widthThreshold || heightThreshold) {
                showProtectionWarning();
            }
        }

        function showProtectionWarning() {
            const overlay = document.getElementById('protectionOverlay');
            overlay.style.display = 'block';

            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1500);
        }

        setInterval(detectDevTools, 1000);

        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });

        document.addEventListener('dragstart', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        });

        // Global Variables
        const video = document.getElementById("liveVideo");
        const muteBtn = document.getElementById("muteBtn");
        const playPauseBtn = document.getElementById("playPauseBtn");
        const volumeSlider = document.getElementById("volumeSlider");
        const qualityMenu = document.getElementById("qualityMenu");
        const sourceMenu = document.getElementById("sourceMenu");
        const channelList = document.getElementById("channelList");
        const channelSearch = document.getElementById("channelSearch");
        const posterImage = document.getElementById("posterImage");
        const loadingOverlay = document.getElementById("loadingOverlay");
        const errorMessage = document.getElementById("errorMessage");
        const errorText = document.getElementById("errorText");
        const channelCount = document.getElementById("channelCount");

        let hls;
        let shakaPlayer;
        let zoomIndex = 0;
        const zoomModes = ["fill", "cover", "contain"];
        let currentChannelUrl = null;
        let currentChannelIndex = 0;
        let isPlaying = false;
        let currentCategory = 'all';
        let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        let currentBackupIndex = 0;
        let currentBackupSources = [];
        let filteredChannels = [];
        let channelMap = new Map();

        // Shaka Player Initialization
        function initShakaPlayer() {
            if (!shaka.Player.isBrowserSupported()) {
                console.error('Shaka Player is not supported in this browser');
                return null;
            }

            const player = new shaka.Player(video);

            player.configure({
                drm: {
                    servers: {
                        'com.widevine.alpha': '',
                        'com.microsoft.playready': '',
                        'org.w3.clearkey': ''
                    }
                },
                streaming: {
                    bufferingGoal: 30,
                    rebufferingGoal: 15,
                    bufferBehind: 30
                }
            });

            player.addEventListener('error', (event) => {
                console.error('Shaka Player error:', event.detail);
                showError('DRM playback error: ' + event.detail.message);
            });

            return player;
        }

        // Load DRM Source
        async function loadDrmSource(source) {
            try {
                loadingOverlay.style.display = "flex";
                errorMessage.style.display = "none";

                if (!shakaPlayer) {
                    shakaPlayer = initShakaPlayer();
                    if (!shakaPlayer) {
                        throw new Error('Shaka Player initialization failed');
                    }
                }

                if (source.drm) {
                    await shakaPlayer.configure({
                        drm: {
                            clearKeys: {
                                [source.drm.kid]: source.drm.key
                            }
                        }
                    });
                }

                await shakaPlayer.load(source.url);

                loadingOverlay.style.display = "none";
                errorMessage.style.display = "none";

                await video.play();

            } catch (error) {
                console.error('Error loading DRM content:', error);
                showError('Failed to load DRM content: ' + error.message);
                loadingOverlay.style.display = "none";
            }
        }

        // Cleanup Players
        function cleanupPlayers() {
            if (hls) {
                hls.destroy();
                hls = null;
            }

            if (shakaPlayer) {
                shakaPlayer.unload();
                shakaPlayer.destroy();
                shakaPlayer = null;
            }

            video.src = "";
            video.load();
        }

        // Initialize Player
        function initPlayer() {
            volumeSlider.addEventListener("input", function() {
                video.volume = this.value;
                if (video.volume == 0) {
                    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                } else {
                    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                }
            });

            video.addEventListener("play", function() {
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                isPlaying = true;
                posterImage.style.display = "none";
            });

            video.addEventListener("pause", function() {
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                isPlaying = false;
            });

            video.addEventListener("waiting", function() {
                loadingOverlay.style.display = "flex";
            });

            video.addEventListener("playing", function() {
                loadingOverlay.style.display = "none";
                errorMessage.style.display = "none";
            });

            video.addEventListener("error", function() {
                loadingOverlay.style.display = "none";
                showError("Failed to play this source. Trying backup...");
                tryNextBackup();
            });

            channelSearch.addEventListener("input", function() {
                filterChannels();
            });

            qualityMenu.addEventListener("change", function() {
                if (hls) {
                    hls.currentLevel = parseInt(this.value);
                }
            });

            sourceMenu.addEventListener("change", function() {
                loadSource(parseInt(this.value));
            });

            loadChannels();

            if (channels.length > 0) {
                loadChannel(0);
            }
        }

        // Load Channels List
        function loadChannels() {
            channelList.innerHTML = "";
            filteredChannels = channels.filter(channel =>
                currentCategory === 'all' || channel.category === currentCategory
            );

            filteredChannels.forEach((channel, index) => {
                const channelItem = document.createElement("div");
                channelItem.className = "channel-item";
                channelItem.setAttribute("data-category", channel.category);

                const hasDrm = channel.sources.some(source => source.drm);
                const drmBadge = hasDrm ? '<span class="drm-badge"></span>' : '';

                channelItem.innerHTML = `
                    <div class="channel-item-img">
                        <img src="${channel.img}" alt="${channel.name}">
                        ${drmBadge}
                        <span class="channel-item-live">Live</span>
                    </div>
                `;
                channelItem.addEventListener("click", () => {
                    loadChannel(index);
                });

                channelItem.title = channel.name;

                channelList.appendChild(channelItem);
                channelMap.set(index, channelItem);
            });

            channelCount.textContent = `${filteredChannels.length} channels`;
        }

        // Filter by Category
        function filterCategory(category, event) {
            document.querySelectorAll('.category-bar button').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            currentCategory = category;
            loadChannels();
        }

        // Filter Channels by Search
        function filterChannels() {
            const searchTerm = channelSearch.value.toLowerCase();
            document.querySelectorAll(".channel-item").forEach(item => {
                const name = item.title.toLowerCase();
                if (name.includes(searchTerm)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        }

        // Load Channel (AD SYSTEM REMOVED)
        function loadChannel(index) {
            document.querySelectorAll(".channel-item").forEach(item => {
                item.classList.remove("active");
            });

            if (channelMap.has(index)) {
                channelMap.get(index).classList.add("active");
            }

            const channel = filteredChannels[index];
            currentChannelIndex = index;
            currentBackupSources = channel.sources;
            currentBackupIndex = 0;

            sourceMenu.innerHTML = "";
            channel.sources.forEach((source, i) => {
                const option = document.createElement("option");
                option.value = i;
                option.textContent = source.name + (source.drm ? " (DRM)" : "");
                sourceMenu.appendChild(option);
            });

            loadSource(0);
        }

        // Load Source
        function loadSource(sourceIndex) {
            cleanupPlayers();

            const source = currentBackupSources[sourceIndex];
            currentChannelUrl = source.url;
            currentBackupIndex = sourceIndex;

            loadingOverlay.style.display = "flex";
            errorMessage.style.display = "none";

            if (source.type === 'dash' && source.drm) {
                loadDrmSource(source);
                return;
            }

            if (Hls.isSupported() && !isIOS) {
                hls = new Hls({
                    maxBufferLength: 30,
                    backBufferLength: 30,
                    enableWorker: true,
                    lowLatencyMode: true,
                    abrEwmaDefaultEstimate: 500000,
                    abrEwmaSlowVoD: 30000
                });

                hls.loadSource(source.url);
                hls.attachMedia(video);

                hls.on(Hls.Events.MANIFEST_PARSED, function() {
                    populateQualityMenu();
                    video.play().catch(e => {
                        console.error("Failed to autoplay:", e);
                        loadingOverlay.style.display = "none";
                    });
                });

                hls.on(Hls.Events.ERROR, function(event, data) {
                    console.error("HLS error:", data);
                    if (data.fatal) {
                        switch(data.type) {
                            case Hls.ErrorTypes.NETWORK_ERROR:
                                showError("Network error. Trying backup source...");
                                tryNextBackup();
                                break;
                            case Hls.ErrorTypes.MEDIA_ERROR:
                                showError("Media error. Trying backup source...");
                                hls.recoverMediaError();
                                break;
                            default:
                                showError("Unrecoverable error. Trying backup source...");
                                tryNextBackup();
                                break;
                        }
                    }
                });
            } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = source.url;
                video.addEventListener("loadedmetadata", function() {
                    video.play().catch(e => {
                        console.error("Failed to autoplay:", e);
                        loadingOverlay.style.display = "none";
                    });
                });
            } else {
                showError("Your browser doesn't support HLS playback.");
            }
        }

        // Try Next Backup Source
        function tryNextBackup() {
            currentBackupIndex++;
            if (currentBackupIndex < currentBackupSources.length) {
                loadSource(currentBackupIndex);
            } else {
                showError("Trial Over, Watch 500+ channels on our app. 📲t.me/tplaybd");
            }
        }

        // Populate Quality Menu
        function populateQualityMenu() {
            if (!hls) return;

            qualityMenu.innerHTML = "";
            const autoOption = document.createElement("option");
            autoOption.value = -1;
            autoOption.textContent = "Auto";
            qualityMenu.appendChild(autoOption);

            if (hls.levels && hls.levels.length > 1) {
                hls.levels.forEach((level, index) => {
                    const option = document.createElement("option");
                    option.value = index;
                    option.textContent = level.height + "p";
                    qualityMenu.appendChild(option);
                });

                hls.on(Hls.Events.LEVEL_SWITCHED, function(event, data) {
                    qualityMenu.value = data.level;
                });
            } else {
                qualityMenu.style.display = "none";
            }
        }

        // Control Functions
        function togglePlayPause() {
            if (video.paused) {
                video.play().catch(e => console.error("Failed to play:", e));
            } else {
                video.pause();
            }
        }

        function toggleMute() {
            video.muted = !video.muted;
            if (video.muted) {
                muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                volumeSlider.value = 0;
            } else {
                muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                volumeSlider.value = video.volume;
            }
        }

        function cycleZoom() {
            zoomIndex = (zoomIndex + 1) % zoomModes.length;
            video.style.objectFit = zoomModes[zoomIndex];

            if (document.fullscreenElement) {
                const fullscreenVideo = document.fullscreenElement.querySelector('video') || document.fullscreenElement;
                fullscreenVideo.style.objectFit = zoomModes[zoomIndex];
            }
        }

        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                video.requestFullscreen().catch(err => console.error("Fullscreen error:", err));
            } else {
                document.exitFullscreen();
            }
        }

        function requestFullscreen() {
            video.webkitEnterFullscreen();
        }

        function togglePiP() {
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture().catch(err => console.error("PiP error:", err));
            } else if (document.pictureInPictureEnabled) {
                video.requestPictureInPicture().catch(err => console.error("PiP error:", err));
            }
        }

        function nextChannel() {
            const nextIndex = (currentChannelIndex + 1) % filteredChannels.length;
            loadChannel(nextIndex);
        }

        function prevChannel() {
            const prevIndex = (currentChannelIndex - 1 + filteredChannels.length) % filteredChannels.length;
            loadChannel(prevIndex);
        }

        function showError(message) {
            errorText.textContent = message;
            errorMessage.style.display = "block";
        }

        // Initialize player when page loads
        window.addEventListener("load", initPlayer);

        // Handle fullscreen changes
        document.addEventListener("webkitfullscreenchange", function() {
            if (document.webkitFullscreenElement) {
                video.style.objectFit = "contain";
            } else {
                video.style.objectFit = zoomModes[zoomIndex];
            }
        });

        document.addEventListener('fullscreenchange', () => {
            const isFull = !!document.fullscreenElement;
            if (isFull) {
                const fullscreenVideo = document.fullscreenElement.querySelector('video') || document.fullscreenElement;
                fullscreenVideo.style.objectFit = zoomModes[zoomIndex];
            } else {
                video.style.objectFit = zoomModes[zoomIndex];
            }
        });

        // iOS specific setup
        if (isIOS) {
            document.querySelectorAll(".ios-fullscreen-btn").forEach(btn => {
                btn.style.display = "flex";
            });

            document.querySelectorAll(".control-btn:not(.ios-fullscreen-btn)").forEach(btn => {
                btn.style.display = "none";
            });

            video.setAttribute("playsinline", "true");
            video.setAttribute("webkit-playsinline", "true");
        }
