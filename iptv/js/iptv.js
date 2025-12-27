   
                async function loadDefaultFallback() {
            const defaultUrl = "https://raw.githubusercontent.com/MRM3UK/New-try/refs/heads/main/fanzone.m3u";
            console.log('Loading default fallback playlist:', defaultUrl);
            const success = await fetchPlaylist(defaultUrl, false, "Default Playlist");
            if (success && playlistItems.length > 0) {
                setTimeout(() => {
                    videovisible();
                    initializePlayer();
                    displayPlaylist(playlistItems);
                }, 1000);
            } else {
                // If even fallback fails, just show the UI empty
                videovisible();
                initializePlayer();
            }
        }
     
           
          let playlistItems = [];
        let currentPlayingUrl = '';
        let currentView = 'playlist';
        let currentFilter = 'all';
        let currentCategory = 'All'; // New variable for category filter
        let resyncInterval = null;
        let hideIconsTimeout = null;
        let isStreamPlaying = false;

        function videovisible() {
            console.log('Hiding loading screen and showing app...');
            const loading = document.getElementById('loading');
            loading.style.display = 'none';
        }

        function showNotification(message, duration = 3000) {
            console.log('Showing notification:', message);
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.classList.add('show');
            notification.style.animation = `fadeIn 0.3s`;
            setTimeout(() => {
                notification.style.animation = `fadeOut 0.3s`;
                setTimeout(() => {
                    notification.classList.remove('show');
                    notification.style.animation = '';
                }, 300);
            }, duration);
        }

        function clearNotification() {
            const notification = document.getElementById('notification');
            notification.classList.remove('show');
            notification.style.animation = '';
        }

        function showBottomIcons() {
            const icons = document.querySelectorAll('.theme-toggle, .favorite-toggle, .history-toggle, .fullscreen-toggle, .settings-toggle, .app-info-toggle');
            icons.forEach(icon => icon.classList.add('visible'));
            clearTimeout(hideIconsTimeout);
            hideIconsTimeout = setTimeout(hideBottomIcons, 3000);
        }

        function hideBottomIcons() {
            const icons = document.querySelectorAll('.theme-toggle, .favorite-toggle, .history-toggle, .fullscreen-toggle, .settings-toggle, .app-info-toggle');
            icons.forEach(icon => icon.classList.remove('visible'));
        }

        function toggleSidebar() {
            console.log('Toggle sidebar clicked');
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('open');
        }

        function toggleAppInfo() {
            const panel = document.getElementById('app-info-panel');
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        }

        function generateQRCode(address) {
            const qrCodeContainer = document.getElementById('qr-code');
            qrCodeContainer.innerHTML = '';
            try {
                QRCode.toDataURL(address, { width: 200, errorCorrectionLevel: 'H' }, (err, url) => {
                    if (err) {
                        console.error('QR code generation error:', err);
                        qrCodeContainer.innerHTML = `<p style="color: #ff4444;">Failed to generate QR code. Please copy the address manually: ${address}</p>`;
                    } else {
                        const img = document.createElement('img');
                        img.src = url;
                        qrCodeContainer.appendChild(img);
                    }
                });
            } catch (error) {
                console.error('QR code generation error:', error);
                qrCodeContainer.innerHTML = `<p style="color: #ff4444;">Failed to generate QR code. Please copy the address manually: ${address}</p>`;
            }
        }

        function showPopupPage(page) {
            document.querySelectorAll('.popup-page').forEach(p => p.classList.remove('active'));
            const popupPage = document.getElementById(`${page}-page`);
            popupPage.classList.add('active');
            document.getElementById('app-info-panel').style.display = 'none';
        }

        function closePopup() {
            document.querySelectorAll('.popup-page').forEach(p => p.classList.remove('active'));
        }

        const cryptoData = {
            'BTC': 'Knock_to_github',
            'ETH': 'Knock_to_github',
            'USDT': 'Knock_to_github',
            'BNB': 'Knock_to_github',
            'SOL': 'Knock_to_github',
            'XRP': 'Knock_to_github',
            'ADA': 'Knock_to_github',
            'DOGE': 'Knock_to_github',
            'TRX': 'Knock_to_github',
            'PI': 'Knock_to_github'
        };

        async function loadLastPlaylist() {
            console.log('Starting loadLastPlaylist...');
            const lastPlaylist = JSON.parse(localStorage.getItem('lastPlaylist') || '{}');
            console.log('lastPlaylist from localStorage:', lastPlaylist);

            if (lastPlaylist && lastPlaylist.source) {
                console.log('Found lastPlaylist, attempting to load...');
                try {
                    showNotification('Loading last playlist...');
                    const success = await fetchPlaylist(lastPlaylist.source, true, lastPlaylist.name);
                    if (success && playlistItems.length > 0) {
                        showNotification(`Playlist loaded: ${lastPlaylist.name}`);
                        videovisible();
                        initializePlayer();
                        renderCategories(); // Render categories
                        displayPlaylist(playlistItems);
                    } else {
                        throw new Error('No valid channels loaded');
                    }
                } catch (error) {
                    console.error('Load last playlist error:', error);
                    showNotification(`Load failed: ${error.message}`);
                    loadDefaultFallback();
                }
            } else {
                console.log('No lastPlaylist found, loading default fallback');
                loadDefaultFallback();
            }
        }

        async function fetchPlaylist(url, isUserUploaded = false, sourceName = '') {
            console.log('Fetching playlist:', url);
            toggleSpinner(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const text = await response.text();
                const success = await parsePlaylist(text, url.split('.').pop().toLowerCase(), url, isUserUploaded, sourceName);
                if (!success) {
                    throw new Error('Failed to parse playlist');
                }
                return true;
            } catch (error) {
                console.error('Fetch error:', error);
                showNotification(`Upload failed: ${error.message}`);
                return false;
            } finally {
                toggleSpinner(false);
            }
        }

        async function parsePlaylist(text, extension, source, isUserUploaded = false, sourceName = '') {
            console.log('Parsing playlist, extension:', extension);
            toggleSpinner(true);
            try {
                playlistItems = [];
                currentCategory = 'All'; // Reset category on new playlist

              if (extension === 'm3u') {
                    const lines = text.split('\n');
                    let currentItem = null;
                    for (const line of lines) {
                        if (line.startsWith('#EXTINF')) {
                            const nameMatch = line.match(/,(.+)/);
                            const logoMatch = line.match(/tvg-logo="([^"]+)"/);
                            // Capture Group Title
                            const groupMatch = line.match(/group-title="([^"]+)"/);
                            
                            currentItem = {
                                name: nameMatch ? nameMatch[1].trim() : 'Unknown',
                                logo: logoMatch ? logoMatch[1] : '//i.imgur.com/jaWTUdA.png',
                                url: '',
                                source: source,
                                group: groupMatch ? groupMatch[1].trim() : 'Others', // Store group
                                isOnline: false
                            };
                        } else if (line && !line.startsWith('#') && currentItem) {
                            currentItem.url = line.trim();
                            playlistItems.push(currentItem);
                            currentItem = null;
                        }
                    }
                } 
              
              else if (extension === 'json') {
                    const data = JSON.parse(text);
                    data.forEach(item => {
                        playlistItems.push({
                            name: item.name || 'Unknown',
                            logo: item.logo || '//i.imgur.com/jaWTUdA.png',
                            url: item.url || '',
                            source: source,
                            group: item.group || item.category || 'Others', // Store group
                            isOnline: false
                        });
                    });
                } 
              
              else if (extension === 'txt') {
                    const lines = text.split('\n');
                    lines.forEach(line => {
                        if (line.trim()) {
                            playlistItems.push({
                                name: line.trim(),
                                logo: '//i.imgur.com/jaWTUdA.png',
                                url: line.trim(),
                                source: source,
                                group: 'Others', // Default group for TXT
                                isOnline: false
                            });
                        }
                    });
                }

              else  if (extension === 'm3u8') {
                    const lines = text.split('\n');
                    let currentItem = null;
                    for (const line of lines) {
                        if (line.startsWith('#EXTINF')) {
                            const nameMatch = line.match(/,(.+)/);
                            const logoMatch = line.match(/tvg-logo="([^"]+)"/);
                            // Capture Group Title
                            const groupMatch = line.match(/group-title="([^"]+)"/);
                            
                            currentItem = {
                                name: nameMatch ? nameMatch[1].trim() : 'Unknown',
                                logo: logoMatch ? logoMatch[1] : '//i.imgur.com/jaWTUdA.png',
                                url: '',
                                source: source,
                                group: groupMatch ? groupMatch[1].trim() : 'Others', // Store group
                                isOnline: false
                            };
                        } else if (line && !line.startsWith('#') && currentItem) {
                            currentItem.url = line.trim();
                            playlistItems.push(currentItem);
                            currentItem = null;
                        }
                    }
                } 
              
              
              
                const statusChecks = playlistItems.map(async item => {
                    item.isOnline = await checkLinkStatus(item.url);
                    return item;
                });
                await Promise.all(statusChecks);

                if (isUserUploaded) {
                    addToHistory(source, sourceName);
                }
                currentView = 'playlist';
                currentFilter = 'all';
                updateChannelStatus();
                if (playlistItems.length > 0) {
                    showNotification(`Playlist uploaded: ${sourceName}`);
                    playChannel(playlistItems[0].url);
                    if (resyncInterval) {
                        clearInterval(resyncInterval);
                    }
                    startBackgroundResync();
                    resyncInterval = setInterval(startBackgroundResync, 5 * 60 * 1000);
                    renderCategories(); // Update slider after parsing
                    return true;
                }
                showNotification('No valid channels loaded');
                return false;
            } catch (error) {
                console.error('Parse error:', error);
                showNotification(`Upload failed: ${error.message}`);
                return false;
            } finally {
                toggleSpinner(false);
            }
        }

        // --- NEW FUNCTION: Render Category Slider ---
        function renderCategories() {
            const slider = document.getElementById('category-slider');
            slider.innerHTML = '';
            
            // Extract unique categories
            const groups = ['All', ...new Set(playlistItems.map(item => item.group || 'Others'))].sort();
            
            groups.forEach(group => {
                const btn = document.createElement('button');
                btn.className = `category-btn ${group === currentCategory ? 'active' : ''}`;
                btn.textContent = group;
                btn.onclick = () => filterByCategory(group);
                slider.appendChild(btn);
            });
        }

        // --- NEW FUNCTION: Filter by Category ---
        function filterByCategory(category) {
            currentCategory = category;
            
            // Update button visual state
            const buttons = document.querySelectorAll('.category-btn');
            buttons.forEach(btn => {
                if (btn.textContent === category) btn.classList.add('active');
                else btn.classList.remove('active');
            });

            displayPlaylist(playlistItems);
        }

        function toggleSpinner(show) {
            const spinner = document.getElementById('global-loading');
            if (show) {
                spinner.classList.add('active');
                setTimeout(() => {
                    spinner.classList.remove('active');
                }, 5000);
            } else {
                spinner.classList.remove('active');
            }
        }

        async function checkLinkStatus(url) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 3000); 
                const response = await fetch(url, {
                    method: 'HEAD',
                    signal: controller.signal
                }).catch(() => null);
                
                clearTimeout(timeoutId);

                if (!response || !response.ok) {
                    return false;
                }
                return true;
            } catch (error) {
                return false;
            }
        }

        async function startBackgroundResync() {
            if (playlistItems.length > 0 && playlistItems.filter(item => !item.isOnline).length > 0) {
                await resyncOfflineChannels(true);
            }
        }

        async function resyncOfflineChannels(background = false) {
            if (!background) {
                toggleSpinner(true);
            }
            try {
                const offlineItems = playlistItems.filter(item => !item.isOnline);
                const statusChecks = offlineItems.map(async item => {
                    item.isOnline = await checkLinkStatus(item.url);
                    return item;
                });
                await Promise.all(statusChecks);
                displayPlaylist(playlistItems);
                updateChannelStatus();
                if (!background) showNotification('Resync completed');
            } finally {
                if (!background) {
                    toggleSpinner(false);
                }
            }
        }

        function updateChannelStatus() {
            const total = playlistItems.length;
            const online = playlistItems.filter(item => item.isOnline).length;
            const offline = total - online;
            document.getElementById('total-channels').textContent = total;
            document.getElementById('online-channels').textContent = online;
            document.getElementById('offline-channels').textContent = offline;
        }

        function filterChannels(filter) {
            currentFilter = filter;
            const buttons = document.querySelectorAll('.status-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.status-btn[onclick="filterChannels('${filter}')"]`).classList.add('active');
            displayPlaylist(playlistItems);
        }

        function addToHistory(source, sourceName) {
            let history = JSON.parse(localStorage.getItem('playlistHistory') || '[]');
            if (!history.some(h => h.source === source)) {
                history.push({
                    name: sourceName || 'unknown.m3u',
                    source: source,
                    date: new Date().toLocaleString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    })
                });
                localStorage.setItem('playlistHistory', JSON.stringify(history));
            }
            localStorage.setItem('lastPlaylist', JSON.stringify({ source, name: sourceName || 'unknown.m3u' }));
        }

        function toggleFavorites() {
            if (currentView === 'favorites') {
                currentView = 'playlist';
                loadPlaylist();
            } else {
                currentView = 'favorites';
                loadFavorites();
            }
        }

        function toggleHistory() {
            if (currentView === 'history') {
                currentView = 'playlist';
                loadPlaylist();
            } else {
                currentView = 'history';
                loadHistory();
            }
        }

        function loadHistory() {
            const history = JSON.parse(localStorage.getItem('playlistHistory') || '[]');
            displayHistory(history);
        }

        function deleteAllHistory() {
            localStorage.setItem('playlistHistory', '[]');
            localStorage.removeItem('lastPlaylist');
            if (resyncInterval) {
                clearInterval(resyncInterval);
                resyncInterval = null;
            }
            if (currentView === 'history') {
                loadHistory();
            }
            showNotification('History deleted');
        }

        function displayHistory(items) {
            const playlistContainer = document.getElementById('playlist-items');
            playlistContainer.innerHTML = '';
            items.forEach(item => {
                const div = document.createElement('div');
                div.className = 'playlist-item';
                div.innerHTML = `
                    <span>${item.name} (${item.date})</span>
                    <button class="delete-btn" data-source="${item.source}">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="reload-btn" data-source="${item.source}">
                        <i class="fas fa-redo"></i>
                    </button>
                `;
                div.querySelector('.reload-btn').onclick = () => {
                    fetchPlaylist(item.source, true, item.name).then(success => {
                        if (success) {
                            currentView = 'playlist';
                            displayPlaylist(playlistItems);
                        }
                    });
                };
                div.querySelector('.delete-btn').onclick = () => deleteFromHistory(item.source);
                playlistContainer.appendChild(div);
            });
        }

        function deleteFromHistory(source) {
            let history = JSON.parse(localStorage.getItem('playlistHistory') || '[]');
            history = history.filter(h => h.source !== source);
            localStorage.setItem('playlistHistory', JSON.stringify(history));
            const lastPlaylist = JSON.parse(localStorage.getItem('lastPlaylist') || '{}');
            if (lastPlaylist.source === source) {
                localStorage.removeItem('lastPlaylist');
                if (resyncInterval) {
                    clearInterval(resyncInterval);
                    resyncInterval = null;
                }
            }
            loadHistory();
            showNotification('History entry deleted');
        }

        function addToFavorites(item) {
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            if (!favorites.some(f => f.url === item.url)) {
                favorites.push(item);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                showNotification(`Added to favorites: ${item.name}`);
            }
        }

        function removeFromFavorites(item) {
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            favorites = favorites.filter(f => f.url !== item.url);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            showNotification(`Removed from favorites: ${item.name}`);
        }

        function loadFavorites() {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            displayPlaylist(favorites);
        }

        function loadPlaylist() {
            displayPlaylist(playlistItems);
        }

        function displayPlaylist(items, isHistory = false) {
            console.log('Displaying playlist with Category:', currentCategory);
            const playlistContainer = document.getElementById('playlist-items');
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            playlistContainer.innerHTML = '';

            let filteredItems = items;
            
            // Only apply filters if we are in main playlist view
            if (currentView === 'playlist' && !isHistory) {
                // 1. Filter by Status (Online/Offline)
                if (currentFilter === 'online') {
                    filteredItems = items.filter(item => item.isOnline);
                } else if (currentFilter === 'offline') {
                    filteredItems = items.filter(item => !item.isOnline);
                }
                
                // 2. Filter by Category
                if (currentCategory !== 'All') {
                    filteredItems = filteredItems.filter(item => (item.group || 'Others') === currentCategory);
                }
            }

            filteredItems.forEach(item => {
                const div = document.createElement('div');
                div.className = `playlist-item ${item.url === currentPlayingUrl ? 'playing' : ''}`;
                const isFavorite = favorites.some(f => f.url === item.url);
                div.innerHTML = `
                    <img src="${item.logo}" alt="${item.name}" onerror="this.src='//i.imgur.com/jaWTUdA.png'" />
                    <span>
                        ${item.name} 
                        <small>${item.group || 'Others'} • ${item.isOnline ? 'Online' : 'Offline'}</small>
                    </span>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-url="${item.url}">
                        <i class="fas fa-heart"></i>
                    </button>
                `;
                div.onclick = (e) => {
                    if (!e.target.closest('.favorite-btn') && !e.target.closest('.delete-btn')) {
                        playChannel(item.url);
                    }
                };
                div.querySelector('.favorite-btn').onclick = () => {
                    if (isFavorite) {
                        removeFromFavorites(item);
                    } else {
                        addToFavorites(item);
                    }
                    if (currentView === 'favorites') {
                        loadFavorites();
                    } else if (currentView === 'playlist') {
                        displayPlaylist(items, isHistory);
                    }
                };
                playlistContainer.appendChild(div);
            });
        }

        async function playChannel(url) {
            console.log('Playing channel:', url);
            toggleSpinner(true);
            clearNotification();
            isStreamPlaying = false;
            const item = playlistItems.find(item => item.url === url);
            if (item && !item.isOnline) {
                item.isOnline = await checkLinkStatus(url);
                if (!item.isOnline) {
                    showNotification('Channel offline, trying fallback.');
                    const video = document.getElementById('player');
                    const source = video.getElementsByTagName('source')[0];
                    source.src = 'https://live.tsports.com/mobile_hls/tsports_live_1/playlist.m3u8';
                    video.load();
                    video.play().then(() => {
                        isStreamPlaying = true;
                        clearNotification();
                        toggleSpinner(false);
                    }).catch(err => {
                        console.error('Playback error:', err);
                        toggleSpinner(false);
                    });
                    initializePlayer();
                    currentPlayingUrl = source.src;
                    displayPlaylist(playlistItems);
                    return;
                }
                displayPlaylist(playlistItems);
            }

            currentPlayingUrl = url;
            try {
                const video = document.getElementById('player');
                const source = video.getElementsByTagName('source')[0];
                source.src = url;
                video.load();
                video.play().then(() => {
                    isStreamPlaying = true;
                    clearNotification();
                    toggleSpinner(false);
                }).catch(err => {
                    console.error('Playback error:', err);
                    toggleSpinner(false);
                });
                initializePlayer();
                if (currentView === 'playlist') {
                    displayPlaylist(playlistItems);
                } else if (currentView === 'favorites') {
                    loadFavorites();
                }
            } catch (error) {
                console.error('Play channel error:', error);
                showNotification('Failed to play channel. Using fallback.');
                const video = document.getElementById('player');
                const source = video.getElementsByTagName('source')[0];
                source.src = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
                video.load();
                video.play().then(() => {
                    isStreamPlaying = true;
                    clearNotification();
                    toggleSpinner(false);
                }).catch(err => {
                    console.error('Playback error:', err);
                    toggleSpinner(false);
                });
                initializePlayer();
                currentPlayingUrl = source.src;
                if (currentView === 'playlist') {
                    displayPlaylist(playlistItems);
                } else if (currentView === 'favorites') {
                    loadFavorites();
                }
            }
        }

        function searchChannels() {
            const query = document.getElementById('channel-search').value.toLowerCase();
            const items = document.querySelectorAll('.playlist-item');
            items.forEach(item => {
                const name = item.querySelector('span').textContent.toLowerCase();
                item.style.display = name.includes(query) ? 'flex' : 'none';
            });
        }

        async function uploadPlaylist() {
            console.log('Uploading playlist from sidebar');
            toggleSpinner(true);
            showNotification('Uploading playlist...');
            try {
                const fileInput = document.getElementById('sidebar-file-upload');
                const urlInput = document.getElementById('sidebar-url-upload').value.trim();
                let sourceName = '';

                if (fileInput.files.length > 0) {
                    sourceName = fileInput.files[0].name;
                } else if (urlInput) {
                    try {
                        const url = new URL(urlInput);
                        sourceName = url.pathname.split('/').pop() || 'unknown.m3u';
                    } catch {
                        sourceName = urlInput.split('/').pop() || 'unknown.m3u';
                    }
                }

                if (fileInput.files.length > 0) {
                    const file = fileInput.files[0];
                    const extension = file.name.split('.').pop().toLowerCase();
                    if (['m3u', 'json', 'txt,m3u8'].includes(extension)) {
                        const text = await file.text();
                        parsePlaylist(text, extension, urlInput || file.name, true, sourceName);
                        setTimeout(() => {
                            videovisible();
                            initializePlayer();
                            renderCategories();
                            displayPlaylist(playlistItems);
                        }, 3000);
                    } else {
                        showNotification('Upload failed: Unsupported file format');
                    }
                } else if (urlInput) {
                    await fetchPlaylist(urlInput, true, sourceName);
                    setTimeout(() => {
                        videovisible();
                        initializePlayer();
                        renderCategories();
                        displayPlaylist(playlistItems);
                    }, 3000);
                } else {
                    showNotification('Please select a file or enter a URL');
                }
            } catch (error) {
                console.error('Upload error:', error);
                showNotification(`Upload failed: ${error.message}`);
            } finally {
                toggleSpinner(false);
            }
        }

        async function loadDefaultPlaylist() {
            const url = document.getElementById('sidebar-default-playlist').value;
            if (url) {
                const sourceName = new URL(url).pathname.split('/').pop() || 'default.m3u';
                showNotification('Uploading playlist...');
                await fetchPlaylist(url, false, sourceName);
                setTimeout(() => {
                    videovisible();
                    initializePlayer();
                    renderCategories();
                    displayPlaylist(playlistItems);
                }, 3000);
            }
        }

        function initializePlayer() {
            console.log('Initializing player');
            const video = document.querySelector('#player');
            const source = video.getElementsByTagName('source')[0].src;
            const options = {};
            video.onerror = () => {
                video.poster = '//i.imgur.com/1hiDhP0.gif';
                console.error('Video error: Unable to load the video source');
            };

            if (Hls.isSupported()) {
                const config = { maxMaxBufferLength: 100 };
                const hls = new Hls(config);
                hls.loadSource(source);
                hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                    const levels = hls.levels.map(level => level.height);
                    options.quality = {
                        default: levels[0],
                        options: levels,
                        forced: true,
                        onChange: quality => {
                            hls.levels.forEach((level, index) => {
                                if (level.height === quality) {
                                    hls.currentLevel = index;
                                }
                            });
                        }
                    };
                    new Plyr(video, options);
                });
                hls.on(Hls.Events.ERROR, (event, data) => {
                    console.error('HLS error:', data);
                });
                hls.on(Hls.Events.LEVEL_LOADED, () => {
                    isStreamPlaying = true;
                    clearNotification();
                    toggleSpinner(false);
                });
                hls.attachMedia(video);
                window.hls = hls;
            } else {
                new Plyr(video, options);
            }
        }

        function toggleTheme() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme') || 'dark';
            html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
            document.querySelector('.theme-toggle i').className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }

        function toggleFullscreen() {
            const videoContainer = document.getElementById('video-container');
            if (!document.fullscreenElement) {
                videoContainer.requestFullscreen().then(() => {
                    document.querySelector('.fullscreen-toggle i').className = 'fas fa-compress';
                }).catch(err => console.error('Fullscreen error:', err));
            } else {
                document.exitFullscreen().then(() => {
                    document.querySelector('.fullscreen-toggle i').className = 'fas fa-expand';
                }).catch(err => console.error('Exit fullscreen error:', err));
            }
        }

        function toggleSettings() {
            const settingsPanel = document.getElementById('settings-panel');
            settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block';
        }

        document.addEventListener('click', (event) => {
            const settingsPanel = document.getElementById('settings-panel');
            const settingsToggle = document.querySelector('.settings-toggle');
            const appInfoPanel = document.getElementById('app-info-panel');
            const appInfoToggle = document.querySelector('.app-info-toggle');
            if (!settingsPanel.contains(event.target) && !settingsToggle.contains(event.target)) {
                settingsPanel.style.display = 'none';
            }
            if (!appInfoPanel.contains(event.target) && !appInfoToggle.contains(event.target)) {
                appInfoPanel.style.display = 'none';
            }
        });

        function showShortcuts() {
            showNotification(
                'Keyboard Shortcuts:\n' +
                '- Arrow Right: Next channel\n' +
                '- Arrow Left: Previous channel\n' +
                '- Arrow Up: Volume up\n' +
                '- Arrow Down: Volume down\n' +
                '- F: Toggle full screen',
                5000
            );
        }

        function updateTimeDisplay() {
            const now = new Date();
            const options = { hour: 'numeric', minute: 'numeric', hour12: true };
            const time = now.toLocaleTimeString('en-US', options);
            const date = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
            document.getElementById('time-display').textContent = `${time} ${date}`;
        }

        function showTimeDisplay() {
            const timeDisplay = document.getElementById('time-display');
            updateTimeDisplay();
            timeDisplay.style.display = 'block';
            setTimeout(() => {
                timeDisplay.style.display = 'none';
            }, 5000);
        }

        document.getElementById('video-container').addEventListener('mousemove', showBottomIcons);
        document.getElementById('video-container').addEventListener('touchstart', () => {
            showTimeDisplay();
            showBottomIcons();
        });

        document.getElementById('app').addEventListener('mousemove', showBottomIcons);
        document.getElementById('app').addEventListener('touchstart', showBottomIcons);

        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOM loaded');
            document.querySelector('.sidebar-toggle').addEventListener('click', toggleSidebar);
            
           // Load the last playlist on page load, or a default one if none exists
            loadLastPlaylist();

            document.getElementById('about-page').innerHTML = `
                <div class="popup-content">
                    <button class="close-btn" onclick="closePopup()">×</button>
                    <h2>About XNIPTV</h2>
                    <p>XNIPTV is a cutting-edge IPTV player designed to deliver seamless live TV streaming to users worldwide. Our mission is to provide a free, user-friendly platform that supports a wide range of playlists and streaming protocols, including HLS and DASH. Key features include real-time channel status checks, favorites management, viewing history, and cross-device compatibility. Developed by SK, XNIPTV is committed to enhancing your entertainment experience with modern design and robust functionality.</p>
                    <p><strong>Version:</strong> 1.0.0<br><strong>Contact:</strong> support@XNIPTV.com</p>
                </div>
            `;
            document.getElementById('uses-page').innerHTML = `
                <div class="popup-content">
                    <button class="close-btn" onclick="closePopup()">×</button>
                    <h2>Uses & Disclaimer</h2>
                    <p>XNIPTV is a free IPTV player intended for personal use. Users are responsible for sourcing their own M3U playlists or streaming URLs. XNIPTV does not host, distribute, or endorse any content streamed through Circle TV. We are not liable for the legality, quality, or availability of streamed content. Use of Circle TV is at your own risk, and no warranties, express or implied, are provided. By using Circle TV, you agree to comply with all applicable laws and regulations.</p>
                    <p><strong>Disclaimer:</strong> XNIPTV TV is provided "as is is not responsible for any damages or losses resulting from its use. For support, contact support@XNIPTV.com.</p>
                </div>
            `;
            document.getElementById('donate-page').innerHTML = `
                <div class="popup-content">
                    <button class="close-btn" onclick="closePopup()">×</button>
                    <h2>Donate to XNIPTV</h2>
                    <p>Your support helps keep Circle TV free and innovative. Donate using cryptocurrency to contribute to our development.</p>
                    <select id="crypto-select">
                        ${Object.keys(cryptoData).map(coin => `<option value="${coin}">${coin}</option>`).join('')}
                    </select>
                    <div id="qr-code"></div>
                    <input type="text" id="crypto-address" readonly>
                </div>
            `;
            document.getElementById('crypto-select').addEventListener('change', (e) => {
                const address = cryptoData[e.target.value];
                document.getElementById('crypto-address').value = address;
                generateQRCode(address);
            });

            const cryptoSelect = document.getElementById('crypto-select');
            const defaultAddress = cryptoData[cryptoSelect.value];
            document.getElementById('crypto-address').value = defaultAddress;
            generateQRCode(defaultAddress);
        });

        document.addEventListener('keydown', (event) => {
            const video = document.getElementById('player');
            const currentIndex = playlistItems.findIndex(item => item.url === currentPlayingUrl);

            switch (event.key) {
                case 'ArrowRight':
                    event.preventDefault();
                    if (currentIndex < playlistItems.length - 1) {
                        playChannel(playlistItems[currentIndex + 1].url);
                    }
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    if (currentIndex > 0) {
                        playChannel(playlistItems[currentIndex - 1].url);
                    }
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    video.volume = Math.min(video.volume + 0.1, 1);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    video.volume = Math.max(video.volume - 0.1, 0);
                    break;
                case 'f':
                case 'F':
                    event.preventDefault();
                    toggleFullscreen();
                    break;
            }
        });

        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;
        let lastTap = 0;

        document.getElementById('video-container').addEventListener('touchstart', (event) => {
            touchStartX = event.changedTouches[0].screenX;
            touchStartY = event.changedTouches[0].screenY;
            const currentTime = new Date().getTime();
            if (currentTime - lastTap < 300) {
                toggleFullscreen();
            }
            lastTap = currentTime;
        });

        document.getElementById('video-container').addEventListener('touchend', (event) => {
            touchEndX = event.changedTouches[0].screenX;
            touchEndY = event.changedTouches[0].screenY;
            handleSwipe();
        });

        function handleSwipe() {
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            const video = document.getElementById('player');
            const currentIndex = playlistItems.findIndex(item => item.url === currentPlayingUrl);

            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    if (currentIndex > 0) {
                        playChannel(playlistItems[currentIndex - 1].url);
                    }
                } else {
                    if (currentIndex < playlistItems.length - 1) {
                        playChannel(playlistItems[currentIndex + 1].url);
                    }
                }
            } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
                if (deltaY > 0) {
                    video.volume = Math.max(video.volume - 0.1, 0);
                } else {
                    video.volume = Math.min(video.volume + 0.1, 1);
                }
            }
        }    
     
 
