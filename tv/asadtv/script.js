const supabaseUrl = 'https://dnelzlyuhhxloysstnlg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZWx6bHl1aGh4bG95c3N0bmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NTM4MjAsImV4cCI6MjA4MTQyOTgyMH0.jYdJM1FTJja_A5CdTN3C3FWlKd_0E1JgHyaM4767SLc';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

let hls, player;
let channels = [];
let currentChannelIndex = 0;
let touchStartX = 0;
let wasFullscreen = false; // Track fullscreen state across channel changes
let bitrateMeter = null; // For tracking network bitrate

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupKeyboard();
    setupSwipeControls();
});

async function initApp() {
    loadNotice();
    fetchChannels();
}

async function loadNotice() {
    const { data } = await _supabase.from('settings').select('value').eq('key', 'main_notice').maybeSingle();
    if (data?.value) {
        const noticeBar = document.getElementById('notice-bar');
        if (noticeBar) {
            noticeBar.classList.remove('hidden');
            document.getElementById('notice-text').innerText = data.value;
        }
    }
}

async function fetchChannels() {
    let { data } = await _supabase.from('channels').select('*').order('created_at', { ascending: true });
    channels = data || [];
    if (channels.length > 0) {
        displayChannels(channels);
        playChannel(channels[0].url, channels[0].name, channels[0].type || 'm3u8');
    }
}

function displayChannels(channels) {
    const container = document.getElementById('channels-list');
    container.innerHTML = channels.map(ch => `
        <div class="channel-card" onclick="playChannel('${ch.url}', '${ch.name}', '${ch.type || 'm3u8'}', this)" data-name="${ch.name}">
            <div class="channel-thumb">
                <img src="${ch.logo || 'https://via.placeholder.com/90'}" alt="${ch.name}">
                <div class="playing-overlay"><i class="fas fa-play"></i></div>
            </div>
            <div class="channel-info"><h4>${ch.name}</h4></div>
        </div>
    `).join('');
}

window.playChannel = function(url, name, type, element) {
    // Store fullscreen state before changing channel
    wasFullscreen = !!document.fullscreenElement;
    if (wasFullscreen && document.exitFullscreen) {
        document.exitFullscreen();
    }
    
    currentChannelIndex = channels.findIndex(ch => ch.url === url);
    
    const wrapper = document.querySelector('.player-wrapper');
    document.getElementById('stream-title').innerText = name;
    
    document.querySelectorAll('.channel-card').forEach(c => c.classList.remove('active'));
    if (element) {
        element.classList.add('active');
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (player) player.destroy();
    if (hls) hls.destroy();

    if (type === 'youtube') {
        wrapper.innerHTML = `<iframe src="https://www.youtube.com/embed/${url}?autoplay=1&mute=0" frameborder="0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen style="width:100%; height:100%; aspect-ratio:16/9; border-radius:20px;"></iframe>`;
        setTimeout(() => {
            const iframe = wrapper.querySelector('iframe');
            enableMobileFullscreen(iframe);
            if (wasFullscreen) {
                reenterFullscreen(wrapper);
            }
        }, 0);
        return;
    } 
    else if (type === 'iframe') {
        wrapper.innerHTML = url.includes('<iframe') ? url : `<iframe src="${url}" frameborder="0" allow="autoplay" allowfullscreen style="width:100%; height:100%; aspect-ratio:16/9; border-radius:20px;"></iframe>`;
        setTimeout(() => {
            const iframe = wrapper.querySelector('iframe');
            enableMobileFullscreen(iframe);
            if (wasFullscreen) {
                reenterFullscreen(wrapper);
            }
        }, 0);
        return;
    }

    wrapper.innerHTML = '<video id="player" controls playsinline autoplay></video>';
    const video = document.getElementById('player');
    // try to start with sound (unmuted). Browsers may block autoplay with sound.
    video.muted = false;
    enableMobileFullscreen(video);

    const defaultOptions = {
        autoplay: true,
        muted: false,
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'pip', 'fullscreen'],
        settings: ['quality', 'speed'],
    };

    if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            // Limit qualities to max height 720
            const MAX_HEIGHT = 7200;
            // Build list of allowed quality heights (unique, sorted)
            const allowedHeights = Array.from(new Set(hls.levels.filter(l => l.height && l.height <= MAX_HEIGHT).map(l => l.height))).sort((a,b) => a - b);
            const availableQualities = [0, ...allowedHeights];
            defaultOptions.quality = {
                default: 0,
                options: availableQualities,
                forced: true,
                onChange: (q) => {
                    if (q === 0) {
                        hls.currentLevel = -1; // auto
                    } else {
                        // find first level index matching the chosen height
                        const idx = hls.levels.findIndex(l => l.height === q);
                        if (idx !== -1) hls.currentLevel = idx;
                    }
                }
            };

            // Enforce initial cap: choose the highest level index with height <= MAX_HEIGHT
            let maxAllowedIndex = -1;
            for (let i = hls.levels.length - 1; i >= 0; i--) {
                const h = hls.levels[i].height;
                if (!h || h <= MAX_HEIGHT) { maxAllowedIndex = i; break; }
            }
            if (maxAllowedIndex >= 0) {
                hls.currentLevel = maxAllowedIndex;
            } else {
                hls.currentLevel = -1;
            }
            player = new Plyr(video, defaultOptions);
            if (wasFullscreen) {
                reenterFullscreen(wrapper);
            }
            video.play().catch(() => console.log("Autoplay blocked"));
        });
    } else {
        video.src = url;
        player = new Plyr(video, defaultOptions);
        video.play().catch(() => console.log("Autoplay blocked"));
    }
};

/* Swipe for channel change (works in fullscreen too) */
function setupSwipeControls() {
    const wrapper = document.querySelector('.player-wrapper');
    wrapper.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    wrapper.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchEndX - touchStartX;

        if (Math.abs(diff) > 60 && channels.length > 1) {
            if (diff > 0) {
                // Swipe right → previous channel
                currentChannelIndex = (currentChannelIndex - 1 + channels.length) % channels.length;
            } else {
                // Swipe left → next channel
                currentChannelIndex = (currentChannelIndex + 1) % channels.length;
            }
            const ch = channels[currentChannelIndex];
            playChannel(ch.url, ch.name, ch.type || 'm3u8');
        }
    }, { passive: true });
}

function getPlayerElement() {
    const video = document.getElementById('player');
    if (video) return video;
    const iframe = document.querySelector('.player-wrapper iframe');
    return iframe || null;
}
function reenterFullscreen(wrapper) {
    setTimeout(async () => {
        try {
            if (!document.fullscreenElement && wrapper && (wrapper.requestFullscreen || wrapper.webkitRequestFullscreen)) {
                if (wrapper.requestFullscreen) {
                    await wrapper.requestFullscreen();
                } else if (wrapper.webkitRequestFullscreen) {
                    await wrapper.webkitRequestFullscreen();
                }
                // Lock orientation if on mobile
                if (window.innerWidth <= 768 && screen.orientation?.lock) {
                    await screen.orientation.lock('landscape').catch(() => {});
                }
            }
        } catch (err) {
            console.log("Failed to re-enter fullscreen:", err);
        }
    }, 100);
}

function setupKeyboard() {
    const handler = e => {
        if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
        if (channels.length === 0) return;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            currentChannelIndex = (currentChannelIndex + 1) % channels.length;
            const ch = channels[currentChannelIndex];
            playChannel(ch.url, ch.name, ch.type || 'm3u8');
        } 
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            currentChannelIndex = (currentChannelIndex - 1 + channels.length) % channels.length;
            const ch = channels[currentChannelIndex];
            playChannel(ch.url, ch.name, ch.type || 'm3u8');
        }
    };

    // Use capture phase so keys are handled even when player element has focus (fullscreen)
    window.addEventListener('keydown', handler, true);
}

function enableMobileFullscreen(video) {
    if (!video) return;

    // Allow clicking the player (video or iframe) or its wrapper to enter fullscreen on mobile
    const target = video;
    const enterFs = async () => {
        if (window.innerWidth <= 768 && !document.fullscreenElement) {
            try {
                if (target.requestFullscreen) await target.requestFullscreen();
                else if (target.webkitRequestFullscreen) await target.webkitRequestFullscreen();

                if (screen.orientation?.lock) {
                    await screen.orientation.lock('landscape').catch(() => {});
                }
            } catch (err) {
                console.log("Fullscreen failed:", err);
            }
        }
    };

    target.addEventListener('click', enterFs, { passive: true });

    // Also allow tapping the surrounding wrapper to trigger fullscreen
    const wrapper = document.querySelector('.player-wrapper');
    if (wrapper && wrapper !== target) wrapper.addEventListener('click', enterFs, { passive: true });
}

// Auto fullscreen on rotation to landscape
window.addEventListener("orientationchange", async () => {
    const player = getPlayerElement();
    if (!player) return;

    if (window.matchMedia("(orientation: landscape)").matches && !document.fullscreenElement) {
        try {
            const target = (player.requestFullscreen || player.webkitRequestFullscreen) ? player : document.querySelector('.player-wrapper');
            if (target?.requestFullscreen) await target.requestFullscreen();
            else if (target?.webkitRequestFullscreen) await target.webkitRequestFullscreen();

            if (screen.orientation?.lock) {
                await screen.orientation.lock('landscape').catch(() => {});
            }
        } catch (err) {
            console.log("Auto fullscreen failed:", err);
        }
    }
});

// Unlock orientation when exit fullscreen
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && screen.orientation?.unlock) {
        screen.orientation.unlock();
    }
});

window.filterChannels = function() {
    const input = document.getElementById('channelSearch').value.toLowerCase();
    document.querySelectorAll('.channel-card').forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(input) ? 'flex' : 'none';
    });
};
async function dataloop() {
  const { data: users, error: usersError } = await _supabase
    .from('user_stats')
    .select('username, total_seconds')
    .eq('username', '1') 

  if (usersError) {
    console.error('Select Error:', usersError)
    return
  }

  if (!users || users.length === 0) {
    console.warn('No user found')
    return
  }

  const currentSeconds = users[0].total_seconds

  const { data: updatedUser, error: updateError } = await _supabase
    .from('user_stats')
    .update({ total_seconds: currentSeconds + 1 })
    .eq('username', '1') 
    .select()

  if (updateError) {
    console.error('Update Error:', updateError)
    return
  }

  console.log('Updated User:', updatedUser)
}

setInterval(dataloop, 1000)