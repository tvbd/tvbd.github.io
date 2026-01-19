// ============================================
// OPTIMIZED CONFIGURATION
// ============================================
const CONFIG = {
    AVAILABLE_LISTS: ['channels.js', 'ch2.js'],
    INITIAL_LIST_FILE: 'channels.js',
    SIDEBAR_TIMEOUT_MS: 600000,
    OSD_TIMEOUT_MS: 3000,
    
    // Quality settings
    DEFAULT_QUALITY: 'auto',
    QUALITY_LEVELS: ['auto', '1080', '720', '480', '360'],
    
    // Fixed HLS config - Removed conflicting liveSyncDurationCount/liveMaxLatencyDurationCount
    HLS_CONFIG: {
        enableWorker: true,
        enableSoftwareAES: true,
        
        // Buffer optimization - FIXED: Removed conflicting count properties
        maxBufferLength: 60,
        maxMaxBufferLength: 120,
        backBufferLength: 30,
        liveSyncDuration: 10,           // Use duration only (not count)
        liveMaxLatencyDuration: 30,     // Use duration only (not count)
        
        // Network timeouts
        fragLoadingTimeOut: 20000,
        manifestLoadingTimeOut: 20000,
        levelLoadingTimeOut: 20000,
        
        // Stall recovery
        highBufferWatchdogPeriod: 2,
        nudgeOffset: 0.1,
        nudgeMaxRetry: 3,
        maxFragLookUpTolerance: 0.2,
        
        // Live stream optimization
        liveDurationInfinity: false,
        enableDateRangeMetadataCues: false,
        enableCEA708Captions: false,
        enableWebVTT: false,
        
        // Quality switching
        startLevel: -1,
        capLevelToPlayerSize: false,
        capLevelOnFPSDrop: false,
        fpsDroppedMonitoringPeriod: 5000,
        fpsDroppedMonitoringThreshold: 0.2,
        
        // Audio settings
        audioPreference: 'original',
        enableAudioTrackPreload: true,
        autoStartLoad: true,
        startPosition: -1,
        audioTrackSelectionMode: 'default',
        enableWebAudio: false,
        audioCodecPreference: 'mp4a.40.2,mp4a.40.5',
        
        // Buffer management
        maxBufferSize: 60 * 1000 * 1000,
        maxBufferHole: 0.5,
        stretchShortVideoTrack: false,
        forceKeyFrameOnDiscontinuity: true
    },
    
    // Network settings
    NETWORK_CONFIG: {
        MAX_RETRIES: 3,
        RETRY_DELAY: 1000
    }
};

// ============================================
// GLOBAL STATE
// ============================================
const State = {
    appStarted: false,
    sidebarVisible: false,
    currentIndex: 0,
    currentListFile: CONFIG.INITIAL_LIST_FILE,
    rawChannels: [],
    currentQuality: CONFIG.DEFAULT_QUALITY,
    currentSourceIndex: 0,
    currentPlayerType: null,
    isBuffering: false,
    
    timers: {
        sidebar: null,
        osd: null,
        loading: null,
        bufferMonitor: null
    },
    
    save: function(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {}
    },
    
    load: function(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            return null;
        }
    },
    
    clearTimers: function() {
        for (const timer in this.timers) {
            if (this.timers[timer]) {
                clearTimeout(this.timers[timer]);
                clearInterval(this.timers[timer]);
            }
        }
    }
};

// UI References
const UI = {
    sidebar: document.getElementById('sidebar'),
    channelList: document.getElementById('channel-list'),
    video: document.getElementById('main-video'),
    iframe: document.getElementById('main-iframe'),
    loadingScreen: document.getElementById('loading-screen'),
    loadingDetails: document.getElementById('loading-details'),
    loadingType: document.getElementById('loading-type'),
    loadingSource: document.getElementById('loading-source'),
    osd: document.getElementById('osd'),
    initLoading: document.getElementById('init-loading'),
    initStatus: document.getElementById('init-status'),
    listBtn1: document.getElementById('list-btn-1'),
    listBtn2: document.getElementById('list-btn-2'),
    qualityBtn: document.getElementById('quality-btn'),
    currentQualityDisplay: document.getElementById('current-quality-display'),
    qualitySelector: document.getElementById('quality-selector'),
    sidebarToggle: document.getElementById('sidebar-toggle')
};

// ============================================
// OPTIMIZED PLAYER FUNCTIONS
// ============================================
let hls = null;
let shakaPlayer = null;
let currentSource = null;
let bufferMonitorInterval = null;

// FIXED HLS PLAYER - Config error resolved
async function playHls(source, channel) {
    if (!Hls.isSupported()) {
        showOSD('HLS not supported, trying iframe...', 2000);
        return await playIframe(source, channel);
    }
    
    try {
        cleanupPlayers();
        
        console.log('Initializing HLS with fixed settings...');
        
        hls = new Hls(CONFIG.HLS_CONFIG);
        
        // Monitor buffer health
        startBufferMonitor();
        
        hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
            console.log(`Manifest loaded: ${data.levels.length} quality levels`);
            
            // Start with medium quality for better buffering
            if (hls.levels && hls.levels.length > 1) {
                const startLevel = Math.floor(hls.levels.length / 2);
                hls.currentLevel = startLevel;
                console.log(`Starting at quality level: ${startLevel}`);
            }
            
            // Check for audio tracks
            if (hls.audioTracks && hls.audioTracks.length > 0) {
                console.log(`Audio tracks available: ${hls.audioTracks.length}`);
                
                // Select default audio track
                for (let i = 0; i < hls.audioTracks.length; i++) {
                    const track = hls.audioTracks[i];
                    console.log(`Audio track ${i}: ${track.name || 'unknown'} (${track.lang || 'unknown'})`);
                    if (track.default) {
                        hls.audioTrack = i;
                        console.log(`Selected default audio track: ${i}`);
                        break;
                    }
                }
                
                // If no default, select first track
                if (hls.audioTrack === -1 && hls.audioTracks.length > 0) {
                    hls.audioTrack = 0;
                }
            }
            
            hideLoading();
            UI.video.style.display = 'block';
            UI.iframe.style.display = 'none';
            
            // Setup audio
            UI.video.muted = false;
            UI.video.volume = 1.0;
            
            // Try to play with audio
            const playPromise = UI.video.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Autoplay started successfully');
                    showOSD(`${channel.name} - Playing`, 2000);
                    State.isBuffering = false;
                }).catch(e => {
                    console.warn('Autoplay blocked:', e.message);
                    
                    // Fallback: muted autoplay
                    UI.video.muted = true;
                    UI.video.play().then(() => {
                        showPlayOverlay();
                        showOSD(`${channel.name} - Tap to unmute`, 3000);
                    }).catch(() => {
                        showPlayOverlay();
                        showOSD(`${channel.name} - Tap to play`, 3000);
                    });
                });
            }
        });
        
        // Audio events
        hls.on(Hls.Events.AUDIO_TRACKS_UPDATED, (event, data) => {
            console.log(`Audio tracks updated: ${data.audioTracks.length}`);
        });
        
        hls.on(Hls.Events.AUDIO_TRACK_SWITCHED, (event, data) => {
            console.log(`Audio track switched to: ${data.id}`);
        });
        
        hls.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
            console.log(`Quality switched to level: ${data.level}`);
        });
        
        hls.on(Hls.Events.FRAG_BUFFERED, (event, data) => {
            if (State.isBuffering) {
                State.isBuffering = false;
                hideOSD();
            }
        });
        
        // ERROR HANDLING WITH BUFFER STALL RECOVERY
        hls.on(Hls.Events.ERROR, (event, data) => {
            console.error('HLS error:', data.type, data.details);
            
            if (data.fatal) {
                switch(data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        console.error('Fatal network error');
                        showOSD('Network error, trying next source...', 2000);
                        tryNextSource(channel);
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.error('Fatal media error');
                        
                        // Handle buffer stalled errors
                        if (data.details === 'bufferStalledError' || data.details === 'bufferSeekOverHole') {
                            console.log('Attempting stall recovery...');
                            
                            // Strategy 1: Try to nudge playback
                            try {
                                const currentTime = UI.video.currentTime;
                                UI.video.currentTime = currentTime + 0.2;
                                console.log(`Nudged from ${currentTime} to ${UI.video.currentTime}`);
                            } catch (e) {}
                            
                            // Strategy 2: Reduce quality
                            if (hls.levels && hls.levels.length > 1 && hls.currentLevel > 0) {
                                hls.currentLevel = hls.currentLevel - 1;
                                console.log(`Reduced quality to level: ${hls.currentLevel}`);
                            }
                            
                            // Strategy 3: Recover after delay
                            setTimeout(() => {
                                try {
                                    hls.recoverMediaError();
                                } catch (e) {
                                    console.error('Recovery failed:', e);
                                    tryNextSource(channel);
                                }
                            }, 500);
                            
                            // If still stuck, try next source
                            setTimeout(() => {
                                if (UI.video.readyState < 3 || UI.video.paused) {
                                    console.log('Still stalled, trying next source');
                                    tryNextSource(channel);
                                }
                            }, 3000);
                            
                        } else {
                            // Standard recovery for other media errors
                            try {
                                hls.recoverMediaError();
                            } catch (e) {
                                console.error('Recovery failed, trying next source');
                                tryNextSource(channel);
                            }
                        }
                        break;
                    default:
                        console.error('Unhandled fatal error');
                        tryNextSource(channel);
                        break;
                }
            } else {
                // Non-fatal errors
                switch(data.details) {
                    case 'bufferStalledError':
                        console.warn('Buffer stalled (non-fatal)');
                        State.isBuffering = true;
                        showOSD('Buffering...', 1000);
                        
                        // Try to help buffering
                        if (hls.levels && hls.currentLevel > 0) {
                            setTimeout(() => {
                                if (State.isBuffering) {
                                    hls.currentLevel = hls.currentLevel - 1;
                                    console.log(`Reduced quality to help buffering: level ${hls.currentLevel}`);
                                }
                            }, 1500);
                        }
                        break;
                        
                    case 'fragParsingError':
                    case 'manifestParsingError':
                        console.warn('Parsing error, attempting recovery');
                        break;
                        
                    case 'bufferSeekOverHole':
                        console.warn('Buffer hole detected');
                        break;
                }
            }
        });
        
        // Load source
        console.log(`Loading HLS source: ${source.url}`);
        hls.loadSource(source.url);
        hls.attachMedia(UI.video);
        
        return true;
    } catch (error) {
        console.error('HLS init error:', error);
        showOSD('HLS failed, trying iframe...', 2000);
        return await playIframe(source, channel);
    }
}

// BUFFER MONITOR
function startBufferMonitor() {
    stopBufferMonitor();
    
    bufferMonitorInterval = setInterval(() => {
        if (!UI.video || !UI.video.buffered || UI.video.buffered.length === 0) {
            return;
        }
        
        const currentTime = UI.video.currentTime;
        const buffered = UI.video.buffered;
        const lastRange = buffered.length - 1;
        const bufferedEnd = buffered.end(lastRange);
        const bufferAhead = bufferedEnd - currentTime;
        
        // Detect potential stalls
        if (bufferAhead < 1.5 && UI.video.readyState < 3) {
            console.warn('Low buffer warning:', bufferAhead.toFixed(2), 'seconds');
            
            if (!State.isBuffering) {
                State.isBuffering = true;
                showOSD('Buffering...', 500);
            }
            
            // Auto-quality reduction if buffer is critically low
            if (bufferAhead < 0.5 && hls && hls.levels && hls.currentLevel > 0) {
                console.log('Critical buffer, reducing quality...');
                hls.currentLevel = Math.max(0, hls.currentLevel - 1);
            }
        } else if (bufferAhead > 3) {
            State.isBuffering = false;
        }
    }, 2000);
}

function stopBufferMonitor() {
    if (bufferMonitorInterval) {
        clearInterval(bufferMonitorInterval);
        bufferMonitorInterval = null;
    }
}

// DRM PLAYER
async function playDrm(source, channel) {
    try {
        cleanupPlayers();
        
        if (!shaka.Player.isBrowserSupported()) {
            showOSD('DRM not supported, trying fallback...', 2000);
            const iframeSource = channel.sources.find(s => !s.drm);
            if (iframeSource) {
                return await playIframe(iframeSource, channel);
            }
            return false;
        }
        
        shakaPlayer = new shaka.Player(UI.video);
        
        // Enhanced config with buffer optimization
        const config = {
            drm: {
                clearKeys: {},
                retryParameters: {
                    maxAttempts: 2,
                    baseDelay: 1000,
                    backoffFactor: 2
                }
            },
            streaming: {
                bufferingGoal: 15,
                rebufferingGoal: 5,
                bufferBehind: 15,
                ignoreTextStreamFailures: true,
                preferredAudioChannelCount: 2,
                startAtSegmentBoundary: false,
                jumpLargeGaps: true,
                smallGapLimit: 0.5,
                lowLatencyMode: false,
                disableAudioOnPlaybackError: false
            },
            manifest: {
                dash: {
                    ignoreMinBufferTime: false,
                    autoCorrectDrift: true
                }
            },
            abr: {
                enabled: true,
                defaultBandwidthEstimate: 500000,
                switchInterval: 2,
                bandwidthUpgradeTarget: 0.95,
                bandwidthDowngradeTarget: 0.9,
                restrictions: {
                    minWidth: 426,
                    minHeight: 240
                }
            }
        };
        
        if (source.drm && source.drm.kid && source.drm.key && 
            source.drm.kid.length > 10 && source.drm.key.length > 10) {
            config.drm.clearKeys = {
                [source.drm.kid]: source.drm.key
            };
        } else {
            console.warn('Invalid DRM keys, trying fallback');
            throw new Error('Invalid DRM keys');
        }
        
        shakaPlayer.configure(config);
        
        // Audio track selection
        shakaPlayer.addEventListener('trackschanged', () => {
            const tracks = shakaPlayer.getVariantTracks();
            console.log(`DRM: Available tracks: ${tracks.length}`);
            
            // Try to select best audio
            const audioLanguages = shakaPlayer.getAudioLanguages();
            if (audioLanguages.length > 0) {
                const preferredLang = 'en' || audioLanguages[0];
                shakaPlayer.selectAudioLanguage(preferredLang);
                console.log(`Selected audio language: ${preferredLang}`);
            }
        });
        
        // Error handling
        shakaPlayer.addEventListener('error', (event) => {
            console.error('Shaka playback error:', event.detail);
            
            if (event.detail.severity === 2) {
                showOSD('DRM error, switching source...', 2000);
                const nextSourceIndex = State.currentSourceIndex + 1;
                if (nextSourceIndex < channel.sources.length) {
                    setTimeout(() => playStream(channel, nextSourceIndex), 1000);
                }
            }
        });
        
        // Setup audio
        UI.video.muted = false;
        UI.video.volume = 1.0;
        
        // Load stream
        await shakaPlayer.load(source.url);
        
        hideLoading();
        UI.video.style.display = 'block';
        UI.iframe.style.display = 'none';
        
        // Try to play
        try {
            await UI.video.play();
            console.log('DRM playback started');
            showOSD(`${channel.name} - DRM`, 2000);
            return true;
        } catch (playError) {
            console.warn('DRM autoplay blocked:', playError);
            
            // Fallback strategies
            UI.video.muted = true;
            try {
                await UI.video.play();
                showPlayOverlay();
                showOSD(`${channel.name} - Tap to unmute`, 3000);
                return true;
            } catch (mutedError) {
                showPlayOverlay();
                showOSD(`${channel.name} - Tap to play`, 3000);
                return true;
            }
        }
        
    } catch (error) {
        console.error('DRM playback error:', error);
        
        let errorMsg = 'DRM playback failed';
        if (error.code === 6002) errorMsg = 'Manifest parsing failed';
        else if (error.code === 6006) errorMsg = 'License request failed';
        else if (error.message.includes('CORS')) errorMsg = 'CORS error';
        
        showOSD(`${errorMsg}, trying next...`, 3000);
        
        const nextSourceIndex = State.currentSourceIndex + 1;
        if (nextSourceIndex < channel.sources.length) {
            setTimeout(() => playStream(channel, nextSourceIndex), 1000);
        } else {
            showError(errorMsg);
        }
        
        return false;
    }
}

// IFRAME PLAYER
async function playIframe(source, channel) {
    try {
        cleanupPlayers();
        
        hideLoading();
        UI.iframe.style.display = 'block';
        UI.video.style.display = 'none';
        
        // Set iframe poster
        setIframePoster(channel);
        
        UI.iframe.src = source.url;
        
        showOSD(`${channel.name} - External`, 2000);
        return true;
    } catch (error) {
        console.error('Iframe error:', error);
        return false;
    }
}

// Try next source
function tryNextSource(channel) {
    if (State.currentSourceIndex < channel.sources.length - 1) {
        State.currentSourceIndex++;
        showOSD(`Trying source ${State.currentSourceIndex + 1}...`, 1500);
        setTimeout(() => {
            playStream(channel, State.currentSourceIndex);
        }, 800);
    } else {
        showError('All sources failed');
    }
}

// Detect player type
function detectPlayerType(source) {
    const url = source.url.toLowerCase();
    
    // DASH detection
    if (url.includes('.mpd')) {
        return source.drm ? 'drm' : 'skip';
    }
    
    // HLS detection
    if (url.includes('.m3u8')) {
        return 'hls';
    }
    
    // DRM detection
    if (source.drm && source.drm.kid && source.drm.key) {
        return 'drm';
    }
    
    return 'iframe';
}

// Main stream player
async function playStream(channel, sourceIndex = 0) {
    if (!channel || !channel.sources || channel.sources.length === 0) {
        showError('No stream sources');
        return false;
    }
    
    const source = channel.sources[sourceIndex];
    if (!source || !source.url) {
        showError('Invalid stream source');
        return false;
    }
    
    currentSource = source;
    State.currentSourceIndex = sourceIndex;
    State.currentPlayerType = detectPlayerType(source);
    
    // Skip DASH without DRM
    if (State.currentPlayerType === 'skip') {
        console.log('Skipping non-DRM DASH stream');
        if (sourceIndex < channel.sources.length - 1) {
            return await playStream(channel, sourceIndex + 1);
        } else {
            showError('No playable sources');
            return false;
        }
    }
    
    showLoading(`Loading ${source.name}...`);
    updateLoadingDetails(State.currentPlayerType, source.name);
    
    cleanupPlayers();
    
    try {
        let result = false;
        
        switch(State.currentPlayerType) {
            case 'hls':
                result = await playHls(source, channel);
                break;
            case 'drm':
                result = await playDrm(source, channel);
                break;
            case 'iframe':
                result = await playIframe(source, channel);
                break;
            default:
                result = await playIframe(source, channel);
        }
        
        if (!result && sourceIndex < channel.sources.length - 1) {
            return await playStream(channel, sourceIndex + 1);
        }
        
        return result;
    } catch (error) {
        console.error('Playback error:', error);
        
        if (sourceIndex < channel.sources.length - 1) {
            return await playStream(channel, sourceIndex + 1);
        }
        
        showError('All sources failed');
        return false;
    }
}

// Cleanup players
function cleanupPlayers() {
    stopBufferMonitor();
    
    // Cleanup HLS
    if (hls) {
        try {
            hls.destroy();
        } catch (e) {}
        hls = null;
    }
    
    // Cleanup Shaka
    if (shakaPlayer) {
        try {
            shakaPlayer.destroy();
        } catch (e) {}
        shakaPlayer = null;
    }
    
    // Reset video
    if (UI.video) {
        UI.video.pause();
        UI.video.src = '';
        UI.video.style.display = 'none';
        UI.video.muted = false;
        UI.video.volume = 1.0;
    }
    
    // Reset iframe
    if (UI.iframe) {
        UI.iframe.src = 'about:blank';
        UI.iframe.style.display = 'none';
    }
    
    State.isBuffering = false;
}

// ============================================
// CHANNEL MANAGEMENT
// ============================================
function loadChannelList(listFile) {
    console.log(`Loading: ${listFile}`);
    
    showLoading('Loading channels...');
    
    // Remove existing script
    const existingScript = document.querySelector(`script[src="${listFile}"]`);
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.src = listFile;
    
    script.onload = () => {
        setTimeout(() => {
            let channels = [];
            
            if (listFile === 'ch2.js' && window.rawChannels2) {
                channels = convertToNewStructure(window.rawChannels2);
            } else if (listFile === 'channels.js' && window.rawChannels) {
                channels = convertToNewStructure(window.rawChannels);
            }
            
            if (channels.length > 0) {
                State.rawChannels = channels;
                State.currentListFile = listFile;
                
                renderChannelList();
                
                // Update active list button
                document.querySelectorAll('.list-btn').forEach(btn => btn.classList.remove('active'));
                if (listFile === 'channels.js' && UI.listBtn1) UI.listBtn1.classList.add('active');
                if (listFile === 'ch2.js' && UI.listBtn2) UI.listBtn2.classList.add('active');
                
                // Play last watched or first channel
                const lastIndex = parseInt(State.load(`last_channel_${listFile}`)) || 0;
                playChannel(Math.min(lastIndex, channels.length - 1));
                
                hideLoading();
            } else {
                showError('No channels found');
            }
        }, 100);
    };
    
    script.onerror = () => {
        showError(`Failed to load ${listFile}`);
    };
    
    document.head.appendChild(script);
}

function convertToNewStructure(oldChannels) {
    return oldChannels.map(channel => {
        if (channel.sources) return channel;
        
        return {
            name: channel.name || '',
            sources: [{
                name: "Main Source",
                url: channel.stream || channel.url || '',
                type: "hls"
            }],
            img: channel.logo || channel.img || '',
            category: channel.group || channel.category || 'General',
            description: channel.description || ''
        };
    });
}

function renderChannelList() {
    if (!UI.channelList || !State.rawChannels.length) return;
    
    UI.channelList.innerHTML = '';
    
    const channelsByCategory = {};
    State.rawChannels.forEach((channel, index) => {
        const category = channel.category || 'General';
        if (!channelsByCategory[category]) {
            channelsByCategory[category] = [];
        }
        channelsByCategory[category].push({ ...channel, index });
    });
    
    for (const category in channelsByCategory) {
        const categoryTitle = document.createElement('li');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = `${category.toUpperCase()} (${channelsByCategory[category].length})`;
        UI.channelList.appendChild(categoryTitle);
        
        channelsByCategory[category].forEach(channelData => {
            const channelItem = createChannelElement(channelData, channelData.index);
            UI.channelList.appendChild(channelItem);
        });
    }
    
    updateChannelCount();
    highlightCurrentInSidebar();
}

function createChannelElement(channel, index) {
    const li = document.createElement('li');
    li.id = `ch-${index}`;
    li.className = 'channel-item';
    li.tabIndex = 0;
    li.setAttribute('data-index', index);
    
    if (index === State.currentIndex) {
        li.classList.add('selected');
    }
    
    const logoUrl = channel.img || channel.logo || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNGRjAwMDAiIHJ4PSI4Ii8+PHRleHQgeD0iMjUiIHk9IjI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5UVjwvdGV4dD48L3N2Zz4=';
    
    const img = document.createElement('img');
    img.src = logoUrl;
    img.alt = channel.name;
    img.loading = 'lazy';
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'channel-name';
    nameSpan.textContent = channel.name;
    
    // Playing indicator
    const playingIndicator = document.createElement('div');
    playingIndicator.className = 'playing-indicator';
    
    // Stream type badge
    const badge = document.createElement('span');
    badge.className = 'channel-badge';
    
    const firstSource = channel.sources[0];
    const playerType = detectPlayerType(firstSource);
    
    switch(playerType) {
        case 'hls':
            badge.textContent = 'HLS';
            badge.classList.add('badge-hls');
            break;
        case 'drm':
            badge.textContent = 'DRM';
            badge.classList.add('badge-drm');
            break;
        case 'iframe':
            badge.textContent = 'iFrame';
            badge.classList.add('badge-iframe');
            break;
        default:
            badge.textContent = 'Unknown';
    }
    
    li.appendChild(playingIndicator);
    li.appendChild(img);
    li.appendChild(nameSpan);
    li.appendChild(badge);
    
    li.addEventListener('click', () => {
        playChannel(index);
        hideSidebar();
    });
    
    li.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            playChannel(index);
            hideSidebar();
        }
    });
    
    return li;
}

// ============================================
// CHANNEL SWITCHING
// ============================================
function playChannel(index, showSidebarAfter = false) {
    if (!State.rawChannels.length) {
        showError('No channels available');
        return;
    }
    
    index = Math.max(0, Math.min(index, State.rawChannels.length - 1));
    State.currentIndex = index;
    
    State.save(`last_channel_${State.currentListFile}`, index.toString());
    
    const channel = State.rawChannels[index];
    
    // Update UI
    document.querySelectorAll('.channel-item').forEach(el => el.classList.remove('selected'));
    const selectedEl = document.getElementById(`ch-${index}`);
    if (selectedEl) selectedEl.classList.add('selected');
    
    // Play channel
    playStream(channel, 0);
    
    if (showSidebarAfter) {
        showSidebar();
    } else {
        hideSidebar();
    }
}

function nextChannel() {
    if (!State.rawChannels.length) return;
    const nextIndex = (State.currentIndex + 1) % State.rawChannels.length;
    playChannel(nextIndex);
}

function prevChannel() {
    if (!State.rawChannels.length) return;
    const prevIndex = (State.currentIndex - 1 + State.rawChannels.length) % State.rawChannels.length;
    playChannel(prevIndex);
}

// ============================================
// UI CONTROLS - FIXED SIDEBAR FUNCTIONS
// ============================================
function showLoading(message) {
    if (UI.loadingScreen) {
        UI.loadingScreen.style.display = 'flex';
        if (message && UI.loadingScreen.querySelector('div')) {
            UI.loadingScreen.querySelector('div').textContent = message;
        }
        
        // Auto-hide after 20 seconds
        State.timers.loading = setTimeout(() => {
            hideLoading();
            showError('Loading timeout');
        }, 20000);
    }
}

function hideLoading() {
    if (UI.loadingScreen) {
        UI.loadingScreen.style.display = 'none';
    }
    clearTimeout(State.timers.loading);
}

function updateLoadingDetails(type, source) {
    if (UI.loadingType) UI.loadingType.textContent = type.toUpperCase();
    if (UI.loadingSource) UI.loadingSource.textContent = source;
}

function showError(message) {
    console.error('Error:', message);
    showOSD(`Error: ${message}`, 30);
    hideLoading();
}

function showOSD(text, duration = 2000) {
    if (UI.osd) {
        UI.osd.textContent = text;
        UI.osd.style.display = 'block';
        
        clearTimeout(State.timers.osd);
        State.timers.osd = setTimeout(() => {
            hideOSD();
        }, duration);
    }
}

function hideOSD() {
    if (UI.osd) {
        UI.osd.style.display = 'none';
    }
}

function showSidebar() {
    if (UI.sidebar) {
        UI.sidebar.classList.add('active');
        State.sidebarVisible = true;
        
        highlightCurrentInSidebar();
        
        clearTimeout(State.timers.sidebar);
        State.timers.sidebar = setTimeout(() => {
            hideSidebar();
        }, CONFIG.SIDEBAR_TIMEOUT_MS);
    }
}

function hideSidebar() {
    if (UI.sidebar) {
        UI.sidebar.classList.remove('active');
        State.sidebarVisible = false;
        clearTimeout(State.timers.sidebar);
    }
}

function toggleSidebar() {
    if (State.sidebarVisible) {
        hideSidebar();
    } else {
        showSidebar();
    }
}

function highlightCurrentInSidebar() {
    const items = document.querySelectorAll('.channel-item');
    items.forEach(item => item.classList.remove('selected'));
    
    const currentItem = document.getElementById(`ch-${State.currentIndex}`);
    if (currentItem) {
        currentItem.classList.add('selected');
        // Smooth scroll to center
        setTimeout(() => {
            currentItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

function showPlayOverlay() {
    // Remove existing overlay
    const existingOverlay = document.getElementById('play-overlay');
    if (existingOverlay) existingOverlay.remove();
    
    const overlay = document.createElement('div');
    overlay.id = 'play-overlay';
    overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        cursor: pointer;
    `;
    
    /*
	overlay.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="font-size: 50px; margin-bottom: 10px;">▶️</div>
            <div style="font-size: 24px; margin-bottom: 10px;">Tap to Play</div>
            <div style="font-size: 16px; opacity: 0.8; margin-bottom: 5px;">Audio may require user interaction</div>
        </div>
    `;
	*/
    
    overlay.addEventListener('click', async () => {
        try {
            // Try unmuted play first
            UI.video.muted = false;
            UI.video.volume = 1.0;
            
            await UI.video.play();
            console.log('Manual playback started');
            overlay.remove();
            
            showOSD('Playing', 1500);
            
        } catch (e) {
            console.warn('Manual play failed:', e);
            
            // Fallback to muted play
            UI.video.muted = true;
            try {
                await UI.video.play();
                showOSD('Playing (muted)', 2000);
                overlay.remove();
            } catch (mutedError) {
                console.error('Muted play also failed:', mutedError);
            }
        }
    });
    
    document.getElementById('player-container').appendChild(overlay);
}

function updateChannelCount() {
    if (!State.rawChannels) return;
    
    const totalSpan = document.getElementById('total-channels');
    if (totalSpan) {
        totalSpan.textContent = State.rawChannels.length;
    }
}

// ============================================
// SIDEBAR MANAGEMENT - FIXED
// ============================================
function initializeSidebar() {
    console.log('Initializing sidebar...');
    
    // Ensure sidebar toggle exists
    if (UI.sidebarToggle) {
        UI.sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Sidebar toggle clicked');
            toggleSidebar();
        });
    } else {
        console.error('Sidebar toggle not found');
    }
    
    // Add close button event
    const closeBtn = document.getElementById('sidebar-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Sidebar close clicked');
            hideSidebar();
        });
    }
    
    // Add search functionality
    const searchInput = document.getElementById('channel-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            filterChannels(searchTerm);
        });
    }
    
    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (State.sidebarVisible && 
            !UI.sidebar.contains(e.target) && 
            !e.target.closest('#sidebar-toggle')) {
            hideSidebar();
        }
    });
}

function filterChannels(searchTerm) {
    if (!UI.channelList) return;
    
    const items = UI.channelList.querySelectorAll('.channel-item');
    let visibleCount = 0;
    
    items.forEach(item => {
        const channelName = item.querySelector('.channel-name')?.textContent.toLowerCase() || '';
        const shouldShow = searchTerm === '' || channelName.includes(searchTerm);
        
        item.style.display = shouldShow ? 'flex' : 'none';
        if (shouldShow) visibleCount++;
    });
}

// ============================================
// QUALITY CONTROLS
// ============================================
function setupQualityControls() {
    if (UI.qualityBtn) {
        UI.qualityBtn.addEventListener('click', toggleQualitySelector);
    }
    
    if (UI.qualitySelector) {
        const qualityBtns = UI.qualitySelector.querySelectorAll('.quality-btn');
        qualityBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const quality = e.target.getAttribute('data-quality');
                setQuality(quality);
            });
        });
    }
}

function toggleQualitySelector() {
    if (UI.qualitySelector) {
        if (UI.qualitySelector.style.display === 'flex') {
            hideQualitySelector();
        } else {
            showQualitySelector();
        }
    }
}

function showQualitySelector() {
    if (UI.qualitySelector) {
        UI.qualitySelector.style.display = 'flex';
        
        const qualityBtns = UI.qualitySelector.querySelectorAll('.quality-btn');
        qualityBtns.forEach(btn => {
            const quality = btn.getAttribute('data-quality');
            if (quality === State.currentQuality) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}

function hideQualitySelector() {
    if (UI.qualitySelector) {
        UI.qualitySelector.style.display = 'none';
    }
}

function setQuality(quality) {
    if (!CONFIG.QUALITY_LEVELS.includes(quality)) return;
    
    State.currentQuality = quality;
    State.save('preferred_quality', quality);
    
    // Update display
    if (UI.currentQualityDisplay) {
        UI.currentQualityDisplay.textContent = quality === 'auto' ? 'Auto' : `${quality}p`;
    }
    
    showOSD(`Quality: ${quality === 'auto' ? 'Auto' : `${quality}p`}`);
    hideQualitySelector();
    
    // Apply to HLS player
    if (hls && hls.levels && State.currentQuality !== 'auto') {
        const targetHeight = parseInt(State.currentQuality);
        
        // Find the closest level
        let bestLevel = -1;
        for (let i = hls.levels.length - 1; i >= 0; i--) {
            if (hls.levels[i].height <= targetHeight) {
                bestLevel = i;
                break;
            }
        }
        
        if (bestLevel !== -1) {
            hls.currentLevel = bestLevel;
            console.log(`Set quality to level ${bestLevel} (${hls.levels[bestLevel].height}p)`);
        }
    }
}

// ============================================
// LIST SWITCHING
// ============================================
function switchChannelList(direction) {
    const currentIndex = CONFIG.AVAILABLE_LISTS.indexOf(State.currentListFile);
    let newIndex;
    
    if (direction === 'next') {
        newIndex = (currentIndex + 1) % CONFIG.AVAILABLE_LISTS.length;
    } else {
        newIndex = (currentIndex - 1 + CONFIG.AVAILABLE_LISTS.length) % CONFIG.AVAILABLE_LISTS.length;
    }
    
    const newList = CONFIG.AVAILABLE_LISTS[newIndex];
    console.log(`Switching to: ${newList}`);
    loadChannelList(newList);
    showOSD(`List: ${newList === 'channels.js' ? 'Mixed' : 'HLS/DASH'}`);
}

// ============================================
// KEYBOARD CONTROLS
// ============================================
function handleKeyDown(e) {
    if (!State.appStarted) return;
    
    const key = e.key;
    
    // Prevent default for control keys
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
         'PageUp', 'PageDown', 'Enter', ' ', 'Escape', '+', '-', '='].includes(key)) {
        e.preventDefault();
    }
    
    // Channel switching
    if ((key === 'PageUp' || key === '-') && !State.sidebarVisible) {
        prevChannel();
        return;
    }
    
    if ((key === 'PageDown' || key === '+' || key === '=') && !State.sidebarVisible) {
        nextChannel();
        return;
    }
    
    // Other controls
    switch(key) {
        case 'Enter':
        case ' ':
            toggleSidebar();
            break;
            
        case 'Escape':
            hideSidebar();
            hideQualitySelector();
            break;
            
        case 'q':
        case 'Q':
            toggleQualitySelector();
            break;
            
        case 'l':
        case 'L':
            switchChannelList('next');
            break;
    }
}

// ============================================
// INITIALIZATION - FIXED
// ============================================
async function initializeApp() {
    console.log('🚀 Initializing TV Player...');
    
    if (UI.initStatus) {
        UI.initStatus.textContent = 'Loading players...';
    }
    
    // Initialize sidebar FIRST
    initializeSidebar();
    
    // Setup list buttons
    if (UI.listBtn1) {
        UI.listBtn1.addEventListener('click', () => {
            console.log('List 1 button clicked');
            switchChannelList('prev');
        });
    }
    if (UI.listBtn2) {
        UI.listBtn2.addEventListener('click', () => {
            console.log('List 2 button clicked');
            switchChannelList('next');
        });
    }
    
    // Setup quality controls
    setupQualityControls();
    
    // Load players
    const [hlsLoaded, shakaLoaded] = await Promise.allSettled([
        loadHlsJs(),
        loadShakaPlayer()
    ]);
    
    console.log(`Players: HLS=${hlsLoaded.status === 'fulfilled'}, Shaka=${shakaLoaded.status === 'fulfilled'}`);
    
    // Setup event listeners
    document.addEventListener('keydown', handleKeyDown);
    
    // Load saved quality
    const savedQuality = State.load('preferred_quality');
    if (savedQuality && CONFIG.QUALITY_LEVELS.includes(savedQuality)) {
        setQuality(savedQuality);
    }
    
    // Hide initial loading
    if (UI.initStatus) {
        UI.initStatus.textContent = 'Ready!';
    }
    
    setTimeout(() => {
        if (UI.initLoading) {
            UI.initLoading.style.display = 'none';
        }
        
        State.appStarted = true;
        console.log('Loading initial channel list:', CONFIG.INITIAL_LIST_FILE);
        loadChannelList(CONFIG.INITIAL_LIST_FILE);
        
    }, 800);
}

// Player loaders
async function loadHlsJs() {
    return new Promise((resolve) => {
        if (window.Hls) {
            console.log('HLS.js already loaded');
            resolve(true);
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.4.12/dist/hls.min.js';
        script.crossOrigin = 'anonymous';
        
        script.onload = () => {
            console.log('✅ HLS.js loaded');
            resolve(true);
        };
        
        script.onerror = () => {
            console.warn('❌ HLS.js load failed');
            resolve(false);
        };
        
        document.head.appendChild(script);
    });
}

async function loadShakaPlayer() {
    return new Promise((resolve) => {
        if (window.shaka) {
            console.log('Shaka Player already loaded');
            resolve(true);
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.7.12/shaka-player.ui.js';
        script.crossOrigin = 'anonymous';
        
        script.onload = () => {
            console.log('✅ Shaka Player loaded');
            resolve(true);
        };
        
        script.onerror = () => {
            console.warn('❌ Shaka Player load failed');
            resolve(false);
        };
        
        document.head.appendChild(script);
    });
}

// ============================================
// START THE APP
// ============================================
document.addEventListener('DOMContentLoaded', initializeApp);

// Cleanup on unload
window.addEventListener('beforeunload', () => {
    State.clearTimers();
    cleanupPlayers();
});

// Auto-quality adjustment based on buffer
function autoAdjustQualityBasedOnBuffer() {
    if (!hls || !hls.levels || hls.levels.length < 2) return;
    
    if (State.isBuffering && hls.currentLevel > 0) {
        console.log('Auto-reducing quality due to buffering');
        hls.currentLevel = hls.currentLevel - 1;
    }
}

// Buffer monitor calls this periodically
setInterval(() => {
    if (State.isBuffering) {
        autoAdjustQualityBasedOnBuffer();
    }
}, 3000);
</script>

<script>
/* ===== ENHANCED TV CONTROL PATCH ===== */

function resetSidebarAutoHide() {
    clearTimeout(State.timers.sidebar);
    State.timers.sidebar = setTimeout(() => {
        hideSidebar();
    }, 5000);
}

// Enhanced key handling
document.addEventListener('keydown', function (e) {
    if (!State.appStarted) return;

    const key = e.key;

    if (State.sidebarVisible) {
        resetSidebarAutoHide();
    }

    // Channel Up / Down
    if (['ArrowDown','ChannelUp','MediaTrackNext','PageUp','+','='].includes(key)) {
        e.preventDefault();
        nextChannel();
        return;
    }
    if (['ArrowUp','ChannelDown','MediaTrackPrevious','PageDown','-'].includes(key)) {
        e.preventDefault();
        prevChannel();
        return;
    }

    // List switch
    if (key === 'ArrowRight') {
        e.preventDefault();
        switchChannelList('next');
        return;
    }
    if (key === 'ArrowLeft') {
        e.preventDefault();
        switchChannelList('prev');
        return;
    }

    // Enter / OK
    if (key === 'Enter' || key === ' ') {
        e.preventDefault();
        State.sidebarVisible ? hideSidebar() : showSidebar();
        return;
    }

    // Back
    if (key === 'Backspace' || key === 'BrowserBack') {
        e.preventDefault();
        hideSidebar();
        return;
    }

    // Quality menu
    if (key === 'q' || key === 'Q') {
        e.preventDefault();
        toggleQualitySelector();
        return;
    }
});

// Interaction keeps sidebar alive
['click','touchstart','pointerdown'].forEach(evt => {
    document.addEventListener(evt, () => {
        if (State.sidebarVisible) resetSidebarAutoHide();
    }, { passive: true });
});

// Sidebar touch/swipe support
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Horizontal swipe detection
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0 && State.sidebarVisible) {
            // Swipe left - hide sidebar
            hideSidebar();
        } else if (diffX < 0 && !State.sidebarVisible) {
            // Swipe right - show sidebar
            showSidebar();
        }
    }
});
</script>
<script>
/* ===== ENHANCED TV CONTROL PATCH ===== */

function resetSidebarAutoHide() {
    clearTimeout(State.timers.sidebar);
    State.timers.sidebar = setTimeout(() => {
        hideSidebar();
    }, 5000);
}

// Enhanced key handling
document.removeEventListener('keydown', handleKeyDown);
document.addEventListener('keydown', function (e) {
    if (!State.appStarted) return;

    const key = e.key;

    if (State.sidebarVisible) {
        resetSidebarAutoHide();
    }

    // Channel Up / Down
    if (['ArrowDown','ChannelUp','MediaTrackNext','PageUp','+','='].includes(key)) {
        nextChannel();
        return;
    }
    if (['ArrowUp','ChannelDown','MediaTrackPrevious','PageDown','-'].includes(key)) {
        prevChannel();
        return;
    }

    // List switch
    if (key === 'ArrowRight') {
        switchChannelList('next');
        return;
    }
    if (key === 'ArrowLeft') {
        switchChannelList('prev');
        return;
    }

    // Enter / OK
    if (key === 'Enter' || key === ' ') {
        State.sidebarVisible ? hideSidebar() : showSidebar();
        return;
    }

    // Back
    if (key === 'Backspace' || key === 'BrowserBack') {
        hideSidebar();
        return;
    }
});

// Interaction keeps sidebar alive
['click','touchstart','pointerdown'].forEach(evt => {
    document.addEventListener(evt, () => {
        if (State.sidebarVisible) resetSidebarAutoHide();
    }, { passive: true });
});

// Auto-quality adjustment based on buffer
function autoAdjustQualityBasedOnBuffer() {
    if (!hls || !hls.levels || hls.levels.length < 2) return;
    
    if (State.isBuffering && hls.currentLevel > 0) {
        console.log('Auto-reducing quality due to buffering');
        hls.currentLevel = hls.currentLevel - 1;
    }
}

// Buffer monitor calls this periodically
setInterval(() => {
    if (State.isBuffering) {
        autoAdjustQualityBasedOnBuffer();
    }
}, 3000);

// Add this function to handle iframe poster
function setIframePoster(channel) {
    // Create a transparent/loading image overlay for iframe
    const iframeContainer = document.getElementById('player-container');
    
    // Remove existing iframe poster if any
    const existingPoster = document.getElementById('iframe-poster');
    if (existingPoster) existingPoster.remove();
    
    // Create poster for iframe
    const iframePoster = document.createElement('div');
    iframePoster.id = 'iframe-poster';
    iframePoster.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;
        color: white;
        text-align: center;
        padding: 20px;
    `;
    
    // Channel logo or default image
    const logoUrl = channel?.img || channel?.logo || '';
    
    iframePoster.innerHTML = `
        ${logoUrl ? `<img src="${logoUrl}" alt="${channel?.name || 'Channel'}" style="width: 100px; height: 100px; object-fit: contain; margin-bottom: 20px; background: white; border-radius: 10px; padding: 5px;">` : ''}
        <div style="font-size: 28px; font-weight: bold; margin-bottom: 10px;">${channel?.name || 'Loading Stream...'}</div>
        <div style="font-size: 18px; color: #ccc; margin-bottom: 20px;">Loading external player...</div>
        <div style="font-size: 14px; color: #888;">If the stream doesn't load, try refreshing</div>
        <div style="margin-top: 20px; width: 50px; height: 50px; border: 4px solid #333; border-top: 4px solid var(--red); border-radius: 50%; animation: spin 1s linear infinite;"></div>
    `;
    
    iframeContainer.appendChild(iframePoster);
    
    // Remove poster when iframe loads
    if (UI.iframe) {
        UI.iframe.addEventListener('load', () => {
            setTimeout(() => {
                if (iframePoster.parentNode) {
                    iframePoster.style.opacity = '0';
                    setTimeout(() => {
                        if (iframePoster.parentNode) {
                            iframePoster.remove();
                        }
                    }, 300);
                }
            }, 1000); // Remove after 1 second
        });
    }
}
