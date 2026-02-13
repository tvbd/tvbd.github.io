 const firebaseConfig = { apiKey: "AIzaSyCJeCM2sWUY8izlm6Z_T7u4goeRCOxZnaY", authDomain: "livefy-9623e.firebaseapp.com", databaseURL: "https://livefy-9623e-default-rtdb.firebaseio.com", projectId: "livefy-9623e", storageBucket: "livefy-9623e.appspot.com", messagingSenderId: "211410916294", appId: "1:211410916294:web:660f3dfc6ede9a862718c7", measurementId: "G-87CYDP39Q2" };
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    
    const video = document.getElementById('video');
    let player = null; 
    let hls = null;

    let dynamicMatchesData = [], currentFilter = 'all', lastLiveCount = 0;
    const serverButtonsContainer = document.getElementById('server-buttons'), errorMessageBox = document.getElementById('error-message-box'), livefyTextAnimator = document.getElementById('livefy-text-animator'), alertModal = document.getElementById('alert-modal');
    const notificationBell = document.getElementById('notification-bell'), notificationPanel = document.getElementById('notification-panel'), notificationCount = document.getElementById('notification-count'), notificationList = document.getElementById('notification-list');
    
    function initializePlayer() {
        if (player) {
            player.destroy();
        }
        player = new Plyr(video, {
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
            settings: ['quality', 'speed', 'loop'],
        });
        
        player.on('waiting', showLoading);
        player.on('playing', showWatermark);
        player.on('pause', hideWatermark);
        player.on('ended', hideWatermark);
        player.on('error', (event) => {
             console.error("Plyr Error:", event.detail.plyr.source);
             showMessage("Playback Error", "Stream is offline or unavailable.");
        });
    }

    function fetchSettings() { database.ref('settings').on('value', (snapshot) => { const data = snapshot.val(); if (data) { const updateTextContent = document.getElementById('update-text-content'); if (updateTextContent) { updateTextContent.innerText = data.welcomeMessage || 'Welcome to Livefy TV!'; } document.getElementById('alert-title-container').innerText = data.alertTitle || 'Alert'; document.getElementById('alert-message-container').innerText = data.alertMessage || 'Please be careful.'; const telegramLink = data.telegramLink || '#'; ['telegram-link', 'telegram-link-channels', 'telegram-link-highlights', 'telegram-link-playlist'].forEach(id => document.getElementById(id).href = telegramLink); } }); }
    function fetchBanners() { database.ref('banners').on('value', (snapshot) => { const data = snapshot.val(); if (data) { updateBanner('home-banner-top', data.homeTop); updateBanner('home-banner-bottom', data.homeBottom); updateBanner('channels-banner', data.channels); updateBanner('highlights-banner', data.highlights); } }); }
    function updateBanner(elementId, bannerData) { const bannerElement = document.getElementById(elementId); if (bannerElement && bannerData) { const link = bannerElement.querySelector('a'); const img = bannerElement.querySelector('img'); link.href = bannerData.targetUrl || '#'; img.src = bannerData.imageUrl || 'https://placehold.co/600x100/111/fff?text=Ad+Space'; img.onerror = () => { img.src = 'https://placehold.co/600x100/111/fff?text=Ad+Error'; }; } }
    
    function fetchMatches() {
        database.ref('matches').on('value', (snapshot) => {
            const container = document.getElementById('match-list-container');
            container.innerHTML = '';
            dynamicMatchesData = [];
            const matches = snapshot.val();
            if (matches) {
                const matchesArray = Object.keys(matches).map(id => ({ id, ...matches[id] }));
                matchesArray.sort((a, b) => (a.order || 0) - (b.order || 0));
                matchesArray.forEach(match => {
                    dynamicMatchesData.push({ id: match.id, start: moment(match.startTime), end: moment(match.endTime) });
                    const matchCard = document.createElement('div');
                    matchCard.className = 'match-card';
                    matchCard.id = `match-card-${match.id}`;
                    matchCard.dataset.servers = JSON.stringify(match.servers || []);
                    matchCard.addEventListener('click', () => openMatchChannels(JSON.parse(matchCard.dataset.servers)));
                    matchCard.innerHTML = `<div class="match-title">${match.title || ''}</div><div class="team"><div><img src="${match.team1Logo || ''}" alt="${match.team1Name}" onerror="this.onerror=null; this.src='https://placehold.co/55x55/222/fff?text=T1';"><div class="team-name">${match.team1Name || 'Team 1'}</div></div><div class="match-info"><div class="match-status-wrapper"><div class="time" id="time${match.id}">${moment(match.startTime).format('hh:mm A')}</div><div class="date" id="date${match.id}">${moment(match.startTime).format('DD/MM/YYYY')}</div><div id="live${match.id}" class="live-animation hidden">LIVE</div><div id="countdown${match.id}" class="countdown-text hidden"></div><div id="fulltime${match.id}" class="full-time-text hidden">FULL TIME</div></div></div><div><img src="${match.team2Logo || ''}" alt="${match.team2Name}" onerror="this.onerror=null; this.src='https://placehold.co/55x55/222/fff?text=T2';"><div class="team-name">${match.team2Name || 'Team 2'}</div></div></div><div class="match-category">${match.categoryName || ''}</div>`;
                    container.appendChild(matchCard);
                });
            }
            checkMatchStatus();
            filterMatches(currentFilter);
        });
    }

    function checkMatchStatus() {
        const now = moment();
        let liveCount = 0, upcomingCount = 0, recentCount = 0;
        const liveMatchesForPanel = [];
        dynamicMatchesData.forEach(match => {
            const cardEl = document.getElementById(`match-card-${match.id}`);
            if (!cardEl) return;
            const [timeEl, dateEl, liveEl, countdownEl, fulltimeEl] = ['time', 'date', 'live', 'countdown', 'fulltime'].map(id => cardEl.querySelector(`#${id}${match.id}`));
            [timeEl, dateEl, liveEl, countdownEl, fulltimeEl].forEach(el => el?.classList.add('hidden'));
            cardEl.classList.remove('live', 'upcoming', 'recent'); 
            if (now.isBetween(match.start, match.end)) {
                liveEl?.classList.remove('hidden'); cardEl.classList.add('live'); cardEl.style.order = -1; liveCount++;
                liveMatchesForPanel.push({ id: match.id, servers: JSON.parse(cardEl.dataset.servers), team1Name: cardEl.querySelectorAll('.team-name')[0].textContent, team2Name: cardEl.querySelectorAll('.team-name')[1].textContent, team1Logo: cardEl.querySelector('img').src, title: cardEl.querySelector('.match-title').textContent });
            } else if (now.isBefore(match.start)) {
                const diff = moment.duration(match.start.diff(now));
                let countdownText = '';
                if (diff.asDays() >= 1) { countdownText = `${Math.floor(diff.asDays())}d ${diff.hours()}h`; } else if (diff.asHours() >= 1) { countdownText = `${Math.floor(diff.asHours())}h ${diff.minutes()}m`; } else { countdownText = `${diff.minutes()}m ${diff.seconds()}s`; }
                if (countdownEl) { countdownEl.textContent = countdownText; countdownEl.classList.remove('hidden'); }
                timeEl?.classList.remove('hidden'); dateEl?.classList.remove('hidden');
                cardEl.classList.add('upcoming'); cardEl.style.order = 0; upcomingCount++;
            } else { fulltimeEl?.classList.remove('hidden'); cardEl.classList.add('recent'); cardEl.style.order = 1; recentCount++; }
            applyMatchFilter(cardEl);
        });
        updateTabCounters({ all: dynamicMatchesData.length, live: liveCount, upcoming: upcomingCount, recent: recentCount });
        updateNotificationPanel(liveCount, liveMatchesForPanel);
    }

    function fetchLiveChannels() { database.ref('liveChannels').on('value', (snapshot) => { const container = document.getElementById('channel-grid-container'); container.innerHTML = ''; const channels = snapshot.val() || {}; Object.values(channels).forEach(channel => { const channelItem = document.createElement('div'); channelItem.className = 'channel-item'; channelItem.dataset.category = (channel.categoryName || 'All').trim().toLowerCase(); channelItem.dataset.channel = JSON.stringify([{ name: channel.name, url: channel.streamUrl }]); channelItem.addEventListener('click', () => openMatchChannels(JSON.parse(channelItem.dataset.channel))); channelItem.innerHTML = `<img src="${channel.logoUrl}" alt="${channel.name}" class="channel-logo" onerror="this.onerror=null; this.src='https://placehold.co/60x45/222/fff?text=...';"><span class="channel-name">${channel.name}</span><div class="play-overlay"><i class="fas fa-play play-icon"></i></div>`; container.appendChild(channelItem); }); }); }
    function fetchHighlights() { database.ref('highlights').on('value', (snapshot) => { const container = document.getElementById('highlights-container'); container.innerHTML = ''; const highlights = snapshot.val() || {}; Object.values(highlights).forEach(highlight => { const highlightCard = document.createElement('div'); highlightCard.className = 'highlight-card'; highlightCard.dataset.category = (highlight.categoryName || 'All').trim().toLowerCase(); highlightCard.dataset.highlight = JSON.stringify([{ name: highlight.title, url: highlight.videoUrl }]); highlightCard.addEventListener('click', () => openMatchChannels(JSON.parse(highlightCard.dataset.highlight))); highlightCard.innerHTML = `<img src="${highlight.thumbnailUrl}" alt="Highlight"><div class="info"><strong>${highlight.title}</strong><p style="color:#aaa; font-size: 12px;">${highlight.description}</p></div>`; container.appendChild(highlightCard); }); }); }
    function populateCategoryTabs(categoryPath, containerId, filterFunction) { const tabsContainer = document.getElementById(containerId); database.ref(categoryPath).on('value', (snapshot) => { tabsContainer.innerHTML = ''; const allBtn = document.createElement('button'); allBtn.className = 'tab-btn active-tab'; allBtn.innerText = 'ALL'; allBtn.onclick = () => filterFunction('All', allBtn); tabsContainer.appendChild(allBtn); const categories = snapshot.val() || {}; Object.values(categories).forEach(cat => { const catBtn = document.createElement('button'); catBtn.className = 'tab-btn'; catBtn.innerText = cat.name; catBtn.onclick = () => filterFunction(cat.name, catBtn); tabsContainer.appendChild(catBtn); }); filterFunction('All', allBtn); }); }
    function filterChannelsByCategory(category, clickedButton) { const processedCategory = category.trim().toLowerCase(); document.querySelectorAll('#channel-category-tabs .tab-btn').forEach(btn => btn.classList.remove('active-tab')); clickedButton.classList.add('active-tab'); document.querySelectorAll('#sports-channels-section .channel-item').forEach(item => { item.style.display = (processedCategory === 'all' || item.dataset.category === processedCategory) ? 'flex' : 'none'; }); }
    function filterHighlightsByCategory(category, clickedButton) { const processedCategory = category.trim().toLowerCase(); document.querySelectorAll('#highlight-category-tabs .tab-btn').forEach(btn => btn.classList.remove('active-tab')); clickedButton.classList.add('active-tab'); document.querySelectorAll('.highlight-card').forEach(item => { item.style.display = (processedCategory === 'all' || item.dataset.category === processedCategory) ? 'flex' : 'none'; }); }
    function showAlert() { alertModal.style.display = 'flex'; }
    function closeAlert() { alertModal.style.display = 'none'; }
    window.onclick = function(event) { if (event.target == alertModal) closeAlert(); if (!notificationBell.contains(event.target)) notificationPanel.classList.remove('show'); }
    
    function showMessage(title, message) { document.getElementById('video-container-wrapper').style.display = 'none'; document.getElementById('controls-area').style.display = 'none'; document.getElementById('error-title').textContent = title; document.getElementById('error-text').textContent = message; errorMessageBox.style.display = 'block'; livefyTextAnimator.style.display = 'none'; }
    function hideMessage() { errorMessageBox.style.display = 'none'; document.getElementById('video-container-wrapper').style.display = 'block'; document.getElementById('controls-area').style.display = 'block'; }
    
    function loadVideoSource(videoSrc) {
        hideMessage();
        showLoading();

        if (!videoSrc) {
            showMessage("Error", "No stream link found.");
            return;
        }

        if (hls) {
            hls.destroy();
            hls = null;
        }

        const isM3U8 = videoSrc.toLowerCase().endsWith('.m3u8');

        if (isM3U8 && Hls.isSupported()) {
            
            const hlsConfig = {
                maxBufferLength: 30,
                liveSyncDurationCount: 3,
                liveMaxLatencyDurationCount: 5,
                fragLoadingMaxRetry: 4,
                manifestLoadingMaxRetry: 2,
                fragLoadingRetryDelay: 1000,
                abrEwmaFastLive: 3.0,
                abrEwmaSlowLive: 9.0,
            };
            
            hls = new Hls(hlsConfig);
            hls.loadSource(videoSrc);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                const qualityOptions = data.levels.map((level, index) => `<option value="${index}">${level.height}p</option>`).join('');
                document.getElementById('quality-select').innerHTML = `<option value="-1">Auto</option>${qualityOptions}`;
                document.getElementById('quality-selector-container').classList.remove('hidden');
            });

            document.getElementById('quality-select').onchange = (e) => {
                hls.currentLevel = parseInt(e.target.value);
            };
            
            hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            if (data.details === Hls.ErrorDetails.MANIFEST_LOAD_ERROR || data.details === Hls.ErrorDetails.FRAG_LOAD_ERROR) {
                                 showMessage("Network Issue", "Reconnecting to the stream...");
                                 hls.startLoad();
                            } else {
                                 showMessage("Playback Error", "This stream is currently offline or unavailable.");
                            }
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            hls.recoverMediaError();
                            break;
                        default:
                            showMessage("Playback Error", "This stream is currently offline or unavailable.");
                            break;
                    }
                }
            });

            player.source = { type: 'video', sources: [{ src: videoSrc, type: 'application/x-mpegURL' }] };

        } else {
            video.src = videoSrc;
            player.source = { type: 'video', sources: [{ src: videoSrc, type: 'video/mp4' }] };
            document.getElementById('quality-selector-container').classList.add('hidden');
        }

        player.play().catch(e => console.warn("Autoplay was blocked."));
    }

    function openMatchChannels(channelsData) { document.getElementById('video-player').style.display = 'flex'; serverButtonsContainer.innerHTML = ''; hideMessage(); if (!channelsData || channelsData.length === 0) { showMessage("Error", "No channels found."); return; } channelsData.forEach(channel => { const button = document.createElement('button'); button.className = 'server-button'; button.textContent = channel.name; button.onclick = () => selectServer(channel.url, button); serverButtonsContainer.appendChild(button); }); selectServer(channelsData[0].url, serverButtonsContainer.querySelector('.server-button')); }
    function selectServer(serverSrc, clickedButton) { document.querySelectorAll('.server-button').forEach(btn => btn.classList.remove('active-server')); if (clickedButton) clickedButton.classList.add('active-server'); loadVideoSource(serverSrc); }
    
    function closeVideo() {
        document.getElementById('video-player').style.display = 'none';
        if (player) { player.stop(); }
        if (hls) { hls.destroy(); hls = null; }
        video.src = '';
    }
    
    function showTab(sectionIdToShow, clickedElement) { document.querySelectorAll('.content > div[id$="-section"]').forEach(section => section.classList.add('hidden')); document.getElementById(sectionIdToShow)?.classList.remove('hidden'); document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active')); clickedElement.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    function updateClock() { const now = new Date(); const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }); const dateString = now.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }); const html = `<span style="font-size: 14px; display: block;">${timeString}</span> <span class="date-text">${dateString}</span>`; document.querySelectorAll('.datetime-box').forEach(el => el.innerHTML = html); }
    function showLoading() { livefyTextAnimator.textContent = 'LIVEFY TV - LOADING...'; livefyTextAnimator.classList.add('is-loading'); livefyTextAnimator.style.display = 'block'; }
    function showWatermark() { livefyTextAnimator.textContent = 'LIVEFY TV'; livefyTextAnimator.classList.remove('is-loading'); livefyTextAnimator.style.display = 'block'; }
    function hideWatermark() { livefyTextAnimator.style.display = 'none'; }
    function updateTabCounters(counts) { ['all', 'live', 'upcoming', 'recent'].forEach(type => document.getElementById(`count-${type}`).textContent = counts[type]); }
    function applyMatchFilter(cardEl) { cardEl.style.display = (currentFilter === 'all' || cardEl.classList.contains(currentFilter)) ? 'block' : 'none'; }
    function filterMatches(filter, clickedButton) { currentFilter = filter; document.querySelectorAll('#match-tabs-container .tab-btn').forEach(btn => btn.classList.remove('active-tab')); if (clickedButton) clickedButton.classList.add('active-tab'); else document.querySelector('#match-tabs-container .tab-btn').classList.add('active-tab'); document.querySelectorAll('.match-card').forEach(applyMatchFilter); }
    function updateNotificationPanel(liveCount, liveMatches) { notificationCount.textContent = liveCount; notificationCount.classList.toggle('visible', liveCount > 0); if (liveCount > lastLiveCount) { const bellIcon = notificationBell.querySelector('.fa-bell'); bellIcon.classList.add('shake'); setTimeout(() => bellIcon.classList.remove('shake'), 500); } lastLiveCount = liveCount; notificationList.innerHTML = liveMatches.length > 0 ? liveMatches.map(match => `<li class="notification-item" onclick='openMatchChannels(${JSON.stringify(match.servers)}); notificationPanel.classList.remove("show");'><img src="${match.team1Logo}" alt=""><div class="info"><div class="teams">${match.team1Name} vs ${match.team2Name}</div><div class="title">${match.title}</div></div><div class="live-dot"></div></li>`).join('') : `<div class="no-notifications">No matches are live right now.</div>`; }
    function getAttribute(line, attributeName) { const regex = new RegExp(`${attributeName}="([^"]*)"`, 'i'); const match = line.match(regex); return match ? match[1] : ''; }
    function parseM3U(m3uText) { const lines = m3uText.split('\n'); const groupedChannels = {}; for (let i = 0; i < lines.length; i++) { if (lines[i].startsWith('#EXTINF')) { const infoLine = lines[i]; const streamUrl = lines[i + 1]?.trim(); if (infoLine && streamUrl) { const logo = getAttribute(infoLine, 'tvg-logo'); let group = getAttribute(infoLine, 'group-title') || 'All Channels'; const name = infoLine.split(',').pop().trim(); const channelInfo = { logo, group, name, url: streamUrl }; if (!groupedChannels[channelInfo.group]) { groupedChannels[channelInfo.group] = []; } groupedChannels[channelInfo.group].push(channelInfo); } } } return groupedChannels; }
    function filterPlaylistByCategory(category, clickedButton) { const processedCategory = category.trim().toLowerCase(); document.querySelectorAll('#playlist-category-tabs .tab-btn').forEach(btn => btn.classList.remove('active-tab')); clickedButton.classList.add('active-tab'); document.querySelectorAll('#playlist-grid-container .channel-item').forEach(item => { item.style.display = (processedCategory === 'all' || item.dataset.category === processedCategory) ? 'flex' : 'none'; }); }
    function displayPlaylistChannels(groupedChannels) { const gridContainer = document.getElementById('playlist-grid-container'); const tabsContainer = document.getElementById('playlist-category-tabs'); gridContainer.innerHTML = ''; tabsContainer.innerHTML = ''; if(Object.keys(groupedChannels).length === 0){ gridContainer.innerHTML = '<p style="text-align:center; color: var(--text-dark);">Playlist is empty or not set by the admin.</p>'; return; } const allBtn = document.createElement('button'); allBtn.className = 'tab-btn active-tab'; allBtn.innerText = 'ALL'; allBtn.onclick = () => filterPlaylistByCategory('all', allBtn); tabsContainer.appendChild(allBtn); for (const groupTitle in groupedChannels) { const catBtn = document.createElement('button'); catBtn.className = 'tab-btn'; catBtn.innerText = groupTitle; catBtn.onclick = (e) => filterPlaylistByCategory(groupTitle, e.currentTarget); tabsContainer.appendChild(catBtn); groupedChannels[groupTitle].forEach(channel => { const channelItem = document.createElement('div'); channelItem.className = 'channel-item'; channelItem.dataset.category = groupTitle.trim().toLowerCase(); channelItem.dataset.channel = JSON.stringify([{ name: channel.name, url: channel.url }]); channelItem.addEventListener('click', () => openMatchChannels(JSON.parse(channelItem.dataset.channel))); channelItem.innerHTML = `<img src="${channel.logo}" alt="${channel.name}" class="channel-logo" onerror="this.onerror=null; this.src='https://placehold.co/60x45/222/fff?text=...';"><span class="channel-name">${channel.name}</span><div class="play-overlay"><i class="fas fa-play play-icon"></i></div>`; gridContainer.appendChild(channelItem); }); } filterPlaylistByCategory('all', allBtn); }
    async function loadPlaylist(url) { const container = document.getElementById('playlist-grid-container'); const categoryTabs = document.getElementById('playlist-category-tabs'); container.innerHTML = '<p style="text-align:center; color: var(--primary-color);">Loading playlist...</p>'; categoryTabs.innerHTML = ''; try { const response = await fetch(url); if (!response.ok) throw new Error(`Network response was not ok, status: ${response.status}`); const m3uText = await response.text(); const groupedChannels = parseM3U(m3uText); displayPlaylistChannels(groupedChannels); } catch (error) { console.error('Failed to load playlist:', error); container.innerHTML = `<p style="text-align:center; color: var(--live-red);">Failed to load playlist. Please check the URL and network connection.</p>`; } }
    function selectPlaylist(url, clickedButton) { document.querySelectorAll('#main-playlist-tabs .tab-btn').forEach(btn => btn.classList.remove('active-tab')); clickedButton.classList.add('active-tab'); loadPlaylist(url); }
    function fetchAndSetupPlaylist() { const playlistsRef = database.ref('settings/playlists'); playlistsRef.on('value', (snapshot) => { const playlists = snapshot.val(); const playlistNavBottom = document.getElementById('nav-playlist'); const playlistNavPopup = document.getElementById('popup-nav-playlist'); const mainPlaylistTabsContainer = document.getElementById('main-playlist-tabs'); mainPlaylistTabsContainer.innerHTML = ''; if (playlists && Array.isArray(playlists) && playlists.length > 0) { playlistNavBottom.classList.remove('hidden'); playlistNavPopup.classList.remove('hidden'); playlists.forEach(playlist => { const tabBtn = document.createElement('button'); tabBtn.className = 'tab-btn'; tabBtn.innerText = playlist.name; tabBtn.onclick = () => selectPlaylist(playlist.url, tabBtn); mainPlaylistTabsContainer.appendChild(tabBtn); }); if (mainPlaylistTabsContainer.firstChild) { selectPlaylist(playlists[0].url, mainPlaylistTabsContainer.firstChild); } } else { playlistNavBottom.classList.add('hidden'); playlistNavPopup.classList.add('hidden'); displayPlaylistChannels({}); } }); }
    function setupAppDownloadModal() { const modal = document.getElementById('app-download-modal'); const closeBtn = document.querySelector('.app-modal-close-btn'); const closeModal = () => { modal.style.display = 'none'; sessionStorage.setItem('appModalClosed', 'true'); }; if (sessionStorage.getItem('appModalClosed') !== 'true') { setTimeout(() => { modal.style.display = 'flex'; }, 1500); } closeBtn.addEventListener('click', closeModal); document.querySelector('.app-download-button').addEventListener('click', () => { setTimeout(closeModal, 500); }); window.addEventListener('click', (event) => { if (event.target == modal) { closeModal(); } }); }
    
    document.addEventListener('DOMContentLoaded', () => { 
        fetchSettings(); fetchBanners(); fetchMatches(); fetchLiveChannels(); fetchHighlights(); fetchAndSetupPlaylist(); 
        populateCategoryTabs('liveChannelCategories', 'channel-category-tabs', filterChannelsByCategory); 
        populateCategoryTabs('highlightCategories', 'highlight-category-tabs', filterHighlightsByCategory); 
        initializePlayer();
        updateClock(); setInterval(updateClock, 1000); setInterval(checkMatchStatus, 1000); 
        showTab('home-section', document.getElementById('nav-home')); 
        filterMatches('all'); 
        notificationBell.addEventListener('click', e => { e.stopPropagation(); notificationPanel.classList.toggle('show'); }); 
        const threeDotMenu = document.getElementById('three-dot-menu'), sidePopup = document.getElementById('side-popup'), popupOverlay = document.getElementById('popup-overlay'), closePopupBtn = document.getElementById('close-popup-btn'); 
        function openPopup() { sidePopup.classList.add('show'); popupOverlay.classList.add('show'); } 
        function closePopup() { sidePopup.classList.remove('show'); popupOverlay.classList.remove('show'); } 
        threeDotMenu.addEventListener('click', openPopup); closePopupBtn.addEventListener('click', closePopup); popupOverlay.addEventListener('click', closePopup); 
        document.getElementById('popup-nav-home').addEventListener('click', () => { showTab('home-section', document.getElementById('nav-home')); closePopup(); }); 
        document.getElementById('popup-nav-channels').addEventListener('click', () => { showTab('sports-channels-section', document.getElementById('nav-channels')); closePopup(); }); 
        document.getElementById('popup-nav-highlights').addEventListener('click', () => { showTab('highlights-section', document.getElementById('nav-highlights')); closePopup(); }); 
        document.getElementById('popup-nav-playlist').addEventListener('click', () => { showTab('playlist-section', document.getElementById('nav-playlist')); closePopup(); }); 
        
        document.getElementById('popup-nav-about').addEventListener('click', () => {
            document.querySelectorAll('.content > div[id$="-section"]').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById('about-us-section').classList.remove('hidden');
            
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

            window.scrollTo({ top: 0, behavior: 'smooth' });
            closePopup(); 
        });
        
        setupAppDownloadModal(); 
    });