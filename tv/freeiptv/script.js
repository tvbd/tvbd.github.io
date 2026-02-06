const m3uUrl = "https://raw.githubusercontent.com/rsfjbd/Mix-Playlist/refs/heads/main/rsbd.m3u";
let clapprPlayer;

window.addEventListener('load', function() {
    fetchM3U();
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.style.display = 'none';
    }, 2000); 
});

function initPlayer(url) {
    if (clapprPlayer) clapprPlayer.destroy();
    clapprPlayer = new Clappr.Player({
        source: url,
        parentId: "#player",
        width: '100%',
        height: '100%',
        autoPlay: true,
        mute: false, 
        mimeType: "application/x-mpegURL"
    });
}

async function fetchM3U() {
    try {
        const response = await fetch(m3uUrl);
        const data = await response.text();
        parseM3U(data);
    } catch (error) { console.error("M3U Fetch Error:", error); }
}

function parseM3U(content) {
    const lines = content.split('\n');
    let channels = {};
    let currentGroup = "Others";

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line.startsWith('#EXTINF:')) {
            let groupMatch = line.match(/group-title="([^"]+)"/);
            currentGroup = groupMatch ? groupMatch[1] : "Others";
            let logoMatch = line.match(/tvg-logo="([^"]+)"/);
            let logo = logoMatch ? logoMatch[1] : "https://i.postimg.cc/VN3yWtJs/20260104-125226.png";
            let name = line.split(',').pop();
            let url = lines[i + 1] ? lines[i + 1].trim() : "";
            if (url && url.startsWith('http')) {
                if (!channels[currentGroup]) channels[currentGroup] = [];
                channels[currentGroup].push({ name, logo, url });
            }
        }
    }
    renderUI(channels);
}

function renderUI(data) {
    let tabHtml = '';
    let channelHtml = '';
    let first = true;

    Object.keys(data).forEach((group, index) => {
        let catId = `cat_${index}`;
        tabHtml += `<div class="tab-btn ${first ? 'active' : ''}" onclick="openTab(event, '${catId}')">${group}</div>`;
        channelHtml += `<div id="${catId}" class="channel-grid ${first ? 'active' : ''}">`;
        data[group].forEach(ch => {
            channelHtml += `
                <div class="channel-card" onclick="loadStream('${ch.url}', this)">
                    <div class="logo-wrapper">
                        <div class="inner-card">
                            <img src="${ch.logo}" onerror="this.src='https://i.postimg.cc/VN3yWtJs/20260104-125226.png'">
                        </div>
                    </div>
                    <div class="channel-name">${ch.name}</div>
                </div>`;
        });
        channelHtml += `</div>`;
        first = false;
    });

    document.getElementById('tabList').innerHTML = tabHtml;
    document.getElementById('channelContainer').innerHTML = channelHtml;

    setTimeout(() => {
        const firstCard = document.querySelector('.channel-grid.active .channel-card');
        if (firstCard) firstCard.click();
    }, 1000);
}

function openTab(evt, catId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    evt.currentTarget.classList.add('active');
    document.querySelectorAll('.channel-grid').forEach(g => g.classList.remove('active'));
    document.getElementById(catId).classList.add('active');
    document.getElementById('channelContainer').scrollTop = 0;
}

function loadStream(url, el) {
    document.querySelectorAll('.channel-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    initPlayer(url);
}
