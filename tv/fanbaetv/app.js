// ===== CONFIGURATION =====
const FANCODE_URL = "https://raw.githubusercontent.com/munim-sah75/Cofs_TV/refs/heads/main/fancode.m3u";

const SOURCES = [
    { url: FANCODE_URL, priority: 1, isLive: true },
    { url: "https://raw.githubusercontent.com/munim-sah75/Cofs_TV/refs/heads/main/fancode.m3u", priority: 1 },
    { url: "https://sonamul4545.vercel.app/siyam3535.m3u", priority: 3 },
    { url: "https://raw.githubusercontent.com/sm-monirulislam/RoarZone-Auto-Update-playlist/refs/heads/main/RoarZone.m3u", priority: 2 }
];

const TEAM_PATTERNS = {
    'CSK': { name: 'CSK', type: 'ipl', icon: 'fa-cricket-bat-ball' },
    'MI': { name: 'MI', type: 'ipl', icon: 'fa-cricket-bat-ball' },
    'RCB': { name: 'RCB', type: 'ipl', icon: 'fa-cricket-bat-ball' },
    'KKR': { name: 'KKR', type: 'ipl', icon: 'fa-cricket-bat-ball' },
    'DC': { name: 'DC', type: 'ipl', icon: 'fa-cricket-bat-ball' },
    'SRH': { name: 'SRH', type: 'ipl', icon: 'fa-cricket-bat-ball' },
    'PBKS': { name: 'PBKS', type: 'ipl', icon: 'fa-cricket-bat-ball' },
    'RR': { name: 'RR', type: 'ipl', icon: 'fa-cricket-bat-ball' },
    'GT': { name: 'GT', type: 'ipl', icon: 'fa-cricket-bat-ball' },
    'LSG': { name: 'LSG', type: 'ipl', icon: 'fa-cricket-bat-ball' },
    'IPL': { name: 'IPL', type: 'ipl', icon: 'fa-trophy' },
    'IND': { name: 'IND', type: 'cricket', icon: 'fa-flag' },
    'INDIA': { name: 'IND', type: 'cricket', icon: 'fa-flag' },
    'PAK': { name: 'PAK', type: 'cricket', icon: 'fa-flag' },
    'AUS': { name: 'AUS', type: 'cricket', icon: 'fa-flag' },
    'ENG': { name: 'ENG', type: 'cricket', icon: 'fa-flag' },
    'SA': { name: 'SA', type: 'cricket', icon: 'fa-flag' },
    'NZ': { name: 'NZ', type: 'cricket', icon: 'fa-flag' },
    'T20': { name: 'T20', type: 'cricket', icon: 'fa-cricket-bat-ball' },
    'ODI': { name: 'ODI', type: 'cricket', icon: 'fa-cricket-bat-ball' },
    'WORLD CUP': { name: 'WC', type: 'wc', icon: 'fa-trophy' },
    'WC': { name: 'WC', type: 'wc', icon: 'fa-trophy' },
    'EPL': { name: 'EPL', type: 'football', icon: 'fa-futbol' },
    'UCL': { name: 'UCL', type: 'football', icon: 'fa-trophy' },
    'FIFA': { name: 'FIFA', type: 'football', icon: 'fa-futbol' },
};

const STORAGE_KEYS = {
    favorites: 'iptv_favorites',
    history: 'iptv_history',
    volume: 'iptv_volume',
    theme: 'iptv_theme'
};

// ===== STATE =====
let allChannels = [];
let filteredChannels = [];
let favorites = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.favorites) || '[]'));
let history = JSON.parse(localStorage.getItem(STORAGE_KEYS.history) || '[]');
let currentChannel = null;
let currentIndex = -1;
let hls = null;
let controlsTimeout = null;
let statsInterval = null;
let playStartTime = null;
let loadProgress = 0;
let autoPlayAttempt = 0;
let isOverlayHidden = false;

// ===== ELEMENTS =====
const video = document.getElementById('videoPlayer');
const playerWrapper = document.getElementById('playerWrapper');
const videoContainer = document.getElementById('videoContainer');
const channelsGrid = document.getElementById('channelsGrid');
const searchInput = document.getElementById('searchInput');
const groupFilter = document.getElementById('groupFilter');
const sortFilter = document.getElementById('sortFilter');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    initEventListeners();
    await loadAllPlaylists();
    hideLoading();
    autoPlayFirstChannel();
});

function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function initEventListeners() {
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('shortcutsBtn').addEventListener('click', () => toggleModal('shortcutsModal'));
    
    document.getElementById('playPauseBtn').addEventListener('click', togglePlay);
    document.getElementById('muteBtn').addEventListener('click', toggleMute);
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
    document.getElementById('statsBtn').addEventListener('click', toggleStats);
    document.getElementById('prevBtn').addEventListener('click', playPrevious);
    document.getElementById('nextBtn').addEventListener('click', playNext);
    
    // Click on video to toggle overlay
    video.addEventListener('click', toggleOverlayHide);
    videoContainer.addEventListener('click', (e) => {
        if (e.target === videoContainer) toggleOverlayHide();
    });
    
    const volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.value = localStorage.getItem(STORAGE_KEYS.volume) || 80;
    video.volume = volumeSlider.value / 100;
    volumeSlider.addEventListener('input', (e) => {
        video.volume = e.target.value / 100;
        localStorage.setItem(STORAGE_KEYS.volume, e.target.value);
        updateVolumeIcon();
    });
    
    video.addEventListener('play', () => {
        document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-pause"></i>';
        playStartTime = Date.now();
    });
    video.addEventListener('pause', () => {
        document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-play"></i>';
    });
    video.addEventListener('timeupdate', updateTimeDisplay);
    video.addEventListener('waiting', () => showPlayerState('loading'));
    video.addEventListener('playing', () => hidePlayerStates());
    
    playerWrapper.addEventListener('mousemove', showControls);
    playerWrapper.addEventListener('mouseleave', hideControls);
    playerWrapper.addEventListener('touchstart', handleTouch);
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });
    
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.view));
    });
    
    searchInput.addEventListener('input', debounce(applyFilters, 300));
    groupFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);
    
    document.addEventListener('keydown', handleKeyboard);
    
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('visible');
        });
    });
    
    window.addEventListener('online', () => updateConnectionStatus(true));
    window.addEventListener('offline', () => updateConnectionStatus(false));
}

// ===== TOGGLE OVERLAY HIDE =====
function toggleOverlayHide() {
    isOverlayHidden = !isOverlayHidden;
    if (isOverlayHidden) {
        playerWrapper.classList.add('hide-overlay');
    } else {
        playerWrapper.classList.remove('hide-overlay');
        showControls();
    }
}

function handleTouch(e) {
    if (isOverlayHidden) {
        e.preventDefault();
        toggleOverlayHide();
    } else {
        showControls();
    }
}

// ===== AUTO PLAY FIRST CHANNEL =====
function autoPlayFirstChannel() {
    if (allChannels.length === 0) {
        showToast('No channels available', 'error');
        return;
    }
    
    autoPlayAttempt = 0;
    tryAutoPlay(0);
}

function tryAutoPlay(index) {
    if (index >= allChannels.length) {
        showToast('All channels failed to load', 'error');
        showPlayerState('error');
        document.getElementById('errorMessage').textContent = 'No working channels found';
        return;
    }
    
    autoPlayAttempt = index;
    const channel = allChannels[index];
    
    currentChannel = channel;
    currentIndex = index;
    
    document.getElementById('nowPlayingLogo').src = channel.logo;
    document.getElementById('nowPlayingName').textContent = channel.name;
    
    let metaText = '';
    if (channel.isFancode && channel.teams && channel.teams.length > 0) {
        metaText = channel.teams.map(t => t.name).join(' vs ');
    }
    document.getElementById('nowPlayingMeta').textContent = metaText;
    
    showPlayerState('loading');
    loadStreamWithFallback(channel.url, index);
}

function loadStreamWithFallback(url, index) {
    if (hls) {
        hls.destroy();
        hls = null;
    }
    
    let hasStarted = false;
    let errorTimeout;
    
    // Set timeout for stream to start
    errorTimeout = setTimeout(() => {
        if (!hasStarted) {
            console.log(`Channel ${index + 1} timeout, trying next...`);
            tryAutoPlay(index + 1);
        }
    }, 8000); // 8 second timeout
    
    if (url.includes('.m3u8') || url.includes('m3u8')) {
        if (Hls.isSupported()) {
            hls = new Hls({
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90
            });
            
            hls.loadSource(url);
            hls.attachMedia(video);
            
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                hasStarted = true;
                clearTimeout(errorTimeout);
                video.play().catch(e => console.log('Autoplay blocked'));
                hidePlayerStates();
                updateQualityBadge();
                updateChannelUI();
                showToast(`Playing: ${currentChannel.name}`, 'success');
            });
            
            hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    clearTimeout(errorTimeout);
                    console.log(`Channel ${index + 1} error, trying next...`);
                    tryAutoPlay(index + 1);
                }
            });
            
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = url;
            video.addEventListener('loadeddata', () => {
                hasStarted = true;
                clearTimeout(errorTimeout);
                video.play();
                hidePlayerStates();
                updateChannelUI();
            }, { once: true });
            
            video.addEventListener('error', () => {
                clearTimeout(errorTimeout);
                tryAutoPlay(index + 1);
            }, { once: true });
        }
    } else {
        video.src = url;
        video.addEventListener('loadeddata', () => {
            hasStarted = true;
            clearTimeout(errorTimeout);
            video.play();
            hidePlayerStates();
            updateChannelUI();
        }, { once: true });
        
        video.addEventListener('error', () => {
            clearTimeout(errorTimeout);
            tryAutoPlay(index + 1);
        }, { once: true });
    }
}

function updateChannelUI() {
    document.querySelectorAll('.channel-card').forEach(card => {
        card.classList.remove('active', 'playing');
    });
    
    if (currentChannel) {
        const activeCard = document.querySelector(`[data-id="${currentChannel.id}"]`);
        if (activeCard) {
            activeCard.classList.add('active', 'playing');
        }
        addToHistory(currentChannel);
    }
}

// ===== DATA LOADING =====
async function loadAllPlaylists() {
    const totalSources = SOURCES.length;
    let loadedSources = 0;
    
    const promises = SOURCES.map(source =>
        fetch(source.url)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.text();
            })
            .then(text => {
                parseM3U(text, source.priority, source.isLive || false, source.url);
                loadedSources++;
                updateLoadProgress((loadedSources / totalSources) * 100);
            })
            .catch(err => {
                console.error('Failed to load:', source.url, err);
                loadedSources++;
                updateLoadProgress((loadedSources / totalSources) * 100);
            })
    );
    
    await Promise.all(promises);
    
    allChannels.sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        return a.name.localeCompare(b.name);
    });
    
    filteredChannels = [...allChannels];
    updateGroups();
    renderChannels();
    updateCounts();
}

function updateLoadProgress(percent) {
    loadProgress = percent;
    document.getElementById('loaderProgress').style.width = percent + '%';
}

function parseM3U(data, priority, isLiveSource, sourceUrl) {
    const lines = data.split(/\r?\n/);
    let channel = {};
    const isFancode = sourceUrl === FANCODE_URL;
    
    lines.forEach(line => {
        line = line.trim();
        
        if (line.startsWith('#EXTINF:')) {
            channel = { 
                priority, 
                id: generateId(),
                isLive: isLiveSource || isFancode,
                isFancode: isFancode
            };
            
            const logoMatch = line.match(/tvg-logo="([^"]*)"/);
            channel.logo = logoMatch ? logoMatch[1] : '';
            
            const groupMatch = line.match(/group-title="([^"]*)"/);
            channel.group = groupMatch ? groupMatch[1] : 'Uncategorized';
            
            channel.name = line.split(',').pop().trim();
            
            if (isFancode) {
                channel.teams = detectTeams(channel.name);
            } else {
                channel.teams = [];
            }
            
        } else if (line && !line.startsWith('#')) {
            channel.url = line;
            
            if (!allChannels.some(c => c.url === channel.url)) {
                if (!channel.logo) {
                    channel.logo = `https://via.placeholder.com/80x50/1a1a2e/ffffff?text=${encodeURIComponent(channel.name.charAt(0))}`;
                }
                allChannels.push(channel);
            }
        }
    });
}

function detectTeams(name) {
    const upperName = name.toUpperCase();
    const detected = [];
    
    const vsMatch = upperName.match(/(\w+)\s*(?:VS|V\/S|V)\s*(\w+)/i);
    if (vsMatch) {
        const team1 = TEAM_PATTERNS[vsMatch[1]];
        const team2 = TEAM_PATTERNS[vsMatch[2]];
        if (team1) detected.push(team1);
        if (team2) detected.push(team2);
    }
    
    for (const [pattern, info] of Object.entries(TEAM_PATTERNS)) {
        if (upperName.includes(pattern) && !detected.some(d => d.name === info.name)) {
            detected.push(info);
            if (detected.length >= 2) break;
        }
    }
    
    return detected;
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// ===== RENDERING =====
function renderChannels() {
    const grid = channelsGrid;
    grid.innerHTML = '';
    
    if (filteredChannels.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <i class="fas fa-search"></i>
                <p>No channels found</p>
            </div>
        `;
        return;
    }
    
    const fragment = document.createDocumentFragment();
    
    filteredChannels.forEach((ch, index) => {
        const card = document.createElement('div');
        card.className = `channel-card priority-${ch.priority} fade-in`;
        if (currentChannel && currentChannel.url === ch.url) {
            card.classList.add('active', 'playing');
        }
        card.dataset.index = index;
        card.dataset.id = ch.id;
        
        const isFav = favorites.has(ch.url);
        
        let badgesHTML = '';
        if (ch.isFancode) {
            badgesHTML = '<span class="badge-live">LIVE</span>';
            if (ch.teams && ch.teams.length > 0) {
                ch.teams.forEach(team => {
                    badgesHTML += `<span class="badge-team badge-${team.type}"><i class="fas ${team.icon}"></i>${team.name}</span>`;
                });
            }
        }
        
        card.innerHTML = `
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${ch.url}', this)">
                <i class="fas fa-heart"></i>
            </button>
            <div class="priority-indicator"></div>
            <div class="channel-logo-wrapper">
                <img class="channel-logo" src="${ch.logo}" alt="${ch.name}" loading="lazy" 
                     onerror="this.src='https://via.placeholder.com/80x50/1a1a2e/666?text=TV'">
            </div>
            <div class="channel-info">
                <div class="channel-name" title="${ch.name}">${ch.name}</div>
                <div class="channel-badges">${badgesHTML}</div>
            </div>
        `;
        
        card.addEventListener('click', () => playChannel(ch, index));
        fragment.appendChild(card);
    });
    
    grid.appendChild(fragment);
}

function updateGroups() {
    const groups = [...new Set(allChannels.map(c => c.group))].sort();
    groupFilter.innerHTML = '<option value="all">All Groups</option>';
    
    groups.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g;
        opt.textContent = g;
        groupFilter.appendChild(opt);
    });
}

function updateCounts() {
    document.getElementById('allCount').textContent = allChannels.length;
    document.getElementById('favCount').textContent = favorites.size;
}

// ===== PLAYBACK =====
function playChannel(channel, index) {
    if (currentChannel && currentChannel.url === channel.url) return;
    
    currentChannel = channel;
    currentIndex = index;
    
    document.querySelectorAll('.channel-card').forEach(card => {
        card.classList.remove('active', 'playing');
    });
    
    const activeCard = document.querySelector(`[data-id="${channel.id}"]`);
    if (activeCard) {
        activeCard.classList.add('active', 'playing');
    }
    
    document.getElementById('nowPlayingLogo').src = channel.logo;
    document.getElementById('nowPlayingName').textContent = channel.name;
    
    let metaText = '';
    if (channel.isFancode && channel.teams && channel.teams.length > 0) {
        metaText = channel.teams.map(t => t.name).join(' vs ');
    }
    document.getElementById('nowPlayingMeta').textContent = metaText;
    
    showPlayerState('loading');
    loadStream(channel.url);
    addToHistory(channel);
    
    // Reset overlay hide state
    isOverlayHidden = false;
    playerWrapper.classList.remove('hide-overlay');
    
    showToast(`Playing: ${channel.name}`, 'success');
}

function loadStream(url) {
    if (hls) {
        hls.destroy();
        hls = null;
    }
    
    if (url.includes('.m3u8') || url.includes('m3u8')) {
        if (Hls.isSupported()) {
            hls = new Hls({
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90
            });
            
            hls.loadSource(url);
            hls.attachMedia(video);
            
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch(e => console.log('Autoplay blocked'));
                hidePlayerStates();
                updateQualityBadge();
            });
            
            hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    handleStreamError(data.details);
                }
            });
            
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = url;
            video.play().catch(e => console.log('Autoplay blocked'));
        }
    } else {
        video.src = url;
        video.play().catch(e => console.log('Autoplay blocked'));
    }
}

function handleStreamError(details) {
    console.error('Stream error:', details);
    showPlayerState('error');
    document.getElementById('errorMessage').textContent = `Error: ${details}`;
    showToast('Stream failed', 'error');
}

function retryStream() {
    if (currentChannel) {
        showPlayerState('loading');
        setTimeout(() => loadStream(currentChannel.url), 500);
    }
}

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function toggleMute() {
    video.muted = !video.muted;
    updateVolumeIcon();
}

function updateVolumeIcon() {
    const icon = document.querySelector('#muteBtn i');
    if (video.muted || video.volume === 0) {
        icon.className = 'fas fa-volume-mute';
    } else if (video.volume < 0.5) {
        icon.className = 'fas fa-volume-down';
    } else {
        icon.className = 'fas fa-volume-up';
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        playerWrapper.requestFullscreen().catch(err => {
            showToast('Fullscreen not available', 'warning');
        });
    } else {
        document.exitFullscreen();
    }
}

function playNext() {
    if (filteredChannels.length === 0) return;
    const nextIndex = (currentIndex + 1) % filteredChannels.length;
    playChannel(filteredChannels[nextIndex], nextIndex);
}

function playPrevious() {
    if (filteredChannels.length === 0) return;
    const prevIndex = currentIndex <= 0 ? filteredChannels.length - 1 : currentIndex - 1;
    playChannel(filteredChannels[prevIndex], prevIndex);
}

// ===== PLAYER STATES =====
function showPlayerState(state) {
    hidePlayerStates();
    const el = document.getElementById(`player${state.charAt(0).toUpperCase() + state.slice(1)}`);
    if (el) el.classList.remove('hidden');
}

function hidePlayerStates() {
    document.querySelectorAll('.player-state').forEach(el => el.classList.add('hidden'));
}

// ===== STATS =====
function toggleStats() {
    const overlay = document.getElementById('statsOverlay');
    overlay.classList.toggle('visible');
    
    if (overlay.classList.contains('visible')) {
        statsInterval = setInterval(updateLiveStats, 1000);
    } else {
        clearInterval(statsInterval);
    }
}

function updateLiveStats() {
    if (!hls) return;
    
    const level = hls.levels[hls.currentLevel];
    if (level) {
        document.getElementById('statRes').textContent = `${level.width}x${level.height}`;
        document.getElementById('statBitrate').textContent = Math.round(level.bitrate / 1000) + ' kbps';
    }
    
    if (video.buffered.length > 0) {
        const buffered = video.buffered.end(video.buffered.length - 1) - video.currentTime;
        document.getElementById('statBuffer').textContent = buffered.toFixed(1) + 's';
    }
}

function updateQualityBadge() {
    if (!hls) return;
    const level = hls.levels[hls.currentLevel];
    if (level) {
        let quality = 'SD';
        if (level.height >= 2160) quality = '4K';
        else if (level.height >= 1080) quality = 'FHD';
        else if (level.height >= 720) quality = 'HD';
        document.getElementById('qualityBadge').textContent = quality;
    }
}

// ===== TIME DISPLAY =====
function updateTimeDisplay() {
    if (!playStartTime) return;
    const elapsed = Math.floor((Date.now() - playStartTime) / 1000);
    const hours = Math.floor(elapsed / 3600);
    const minutes = Math.floor((elapsed % 3600) / 60);
    const seconds = elapsed % 60;
    document.getElementById('timeDisplay').textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// ===== CONTROLS VISIBILITY =====
function showControls() {
    if (isOverlayHidden) return;
    playerWrapper.classList.add('controls-visible');
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(hideControls, 3000);
}

function hideControls() {
    if (!video.paused && !isOverlayHidden) {
        playerWrapper.classList.remove('controls-visible');
    }
}

// ===== FAVORITES =====
function toggleFavorite(url, btn) {
    if (favorites.has(url)) {
        favorites.delete(url);
        btn.classList.remove('active');
        showToast('Removed from favorites', 'warning');
    } else {
        favorites.add(url);
        btn.classList.add('active');
        showToast('Added to favorites', 'success');
    }
    
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify([...favorites]));
    updateCounts();
}

// ===== HISTORY =====
function addToHistory(channel) {
    history = history.filter(h => h.url !== channel.url);
    history.unshift({ ...channel, watchedAt: Date.now() });
    history = history.slice(0, 20);
    localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history));
}

// ===== TABS =====
function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    
    switch (tab) {
        case 'all':
            filteredChannels = [...allChannels];
            break;
        case 'favorites':
            filteredChannels = allChannels.filter(c => favorites.has(c.url));
            break;
        case 'history':
            filteredChannels = history.filter(h => allChannels.some(c => c.url === h.url));
            break;
    }
    
    applyFilters();
}

// ===== VIEW TOGGLE =====
function switchView(view) {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    channelsGrid.className = `channels-grid ${view}-view`;
}

// ===== FILTERS =====
function applyFilters() {
    const search = searchInput.value.toLowerCase();
    const group = groupFilter.value;
    const sort = sortFilter.value;
    
    const currentTab = document.querySelector('.tab.active').dataset.tab;
    let baseList;
    
    switch (currentTab) {
        case 'favorites':
            baseList = allChannels.filter(c => favorites.has(c.url));
            break;
        case 'history':
            baseList = history.filter(h => allChannels.some(c => c.url === h.url));
            break;
        default:
            baseList = [...allChannels];
    }
    
    let results = baseList.filter(ch => {
        const matchesSearch = ch.name.toLowerCase().includes(search);
        const matchesGroup = group === 'all' || ch.group === group;
        return matchesSearch && matchesGroup;
    });
    
    results.sort((a, b) => {
        switch (sort) {
            case 'name': return a.name.localeCompare(b.name);
            default: return a.priority - b.priority || a.name.localeCompare(b.name);
        }
    });
    
    filteredChannels = results;
    renderChannels();
}

// ===== THEME =====
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEYS.theme, next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ===== KEYBOARD SHORTCUTS =====
function handleKeyboard(e) {
    if (e.target.tagName === 'INPUT') return;
    
    switch (e.key.toLowerCase()) {
        case ' ':
            e.preventDefault();
            togglePlay();
            break;
        case 'm':
            toggleMute();
            break;
        case 'f':
            toggleFullscreen();
            break;
        case 'arrowup':
            e.preventDefault();
            video.volume = Math.min(1, video.volume + 0.1);
            document.getElementById('volumeSlider').value = video.volume * 100;
            break;
        case 'arrowdown':
            e.preventDefault();
            video.volume = Math.max(0, video.volume - 0.1);
            document.getElementById('volumeSlider').value = video.volume * 100;
            break;
        case 'n':
            playNext();
            break;
        case 'b':
            playPrevious();
            break;
        case 's':
            toggleStats();
            break;
        case '/':
            e.preventDefault();
            searchInput.focus();
            break;
        case 'escape':
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('visible'));
            if (isOverlayHidden) toggleOverlayHide();
            break;
    }
}

// ===== CONNECTION STATUS =====
function updateConnectionStatus(online) {
    const dot = document.getElementById('connectionDot');
    const text = document.getElementById('connectionText');
    
    if (online) {
        dot.classList.remove('offline');
        text.textContent = 'Online';
    } else {
        dot.classList.add('offline');
        text.textContent = 'Offline';
        showToast('You are offline', 'error');
    }
}

// ===== MODALS =====
function toggleModal(id) {
    document.getElementById(id).classList.toggle('visible');
}

// ===== LOADING =====
function hideLoading() {
    updateLoadProgress(100);
    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.add('hidden');
    }, 600);
}

// ===== TOAST =====
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-circle'
    };
    
    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ===== UTILITIES =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}