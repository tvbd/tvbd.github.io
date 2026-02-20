const video = document.getElementById("video");
const videoLogoWatermark = document.getElementById("videoLogoWatermark");

/* UI */
const loading = document.getElementById("loading");
const noSignal = document.getElementById("noSignal");
const noSignalText = document.getElementById("noSignalText");

const infoBar = document.getElementById("infoBar");
const infoLogo = document.getElementById("infoLogo");
const infoTitle = document.getElementById("infoTitle");
const infoSub = document.getElementById("infoSub");
const playIcon = document.getElementById("playIcon");
const muteIcon = document.getElementById("muteIcon");
const favIcon = document.getElementById("favIcon");
const fullscreenIcon = document.getElementById("fullscreenIcon");

const guide = document.getElementById("guide");
const catPanel = document.getElementById("catPanel");
const grid = document.getElementById("grid");
const search = document.getElementById("search");
const guideCloseBtn = document.getElementById("btnCloseGuide");

const settingsOverlay = document.getElementById("settingsOverlay");
const resolutionList = document.getElementById("resolutionList");
const audioList = document.getElementById("audioList");
const serverList = document.getElementById("serverList");

const serverOverlay = document.getElementById("serverOverlay");
const serverOptions = document.getElementById("serverOptions");
const serverChannelName = document.getElementById("serverChannelName");
const serverCloseBtn = document.getElementById("btnCloseServer");

/* Package Overlay */
const packageOverlay = document.getElementById("packageOverlay");
const pkgGrid = document.getElementById("pkgGrid");
const pkgStatus = document.getElementById("pkgStatus");
const pkgCodeInput = document.getElementById("pkgCodeInput");


/* Players */
let shakaP = null;

/* State */
let currentIndex = 0;
let currentSourceIndex = 0;

/* Guide state */
let categories = [];
let currentCat = "All";
let filteredIndexes = [];
let focusCatIndex = 0;
let focusTileIndex = 0;

/* Overlay state */
let isFullscreen = false;
let serverFocusIndex = 0;


/* Packages */
const PACKAGE_ORDER = ["150","250","500"];
let unlockedTier = localStorage.getItem("unlockedTier") || "150";
let activePackage = localStorage.getItem("activePackage") || "150";

function getDeviceId(){
  let id = localStorage.getItem("deviceId");
  if(!id){
    id = Math.random().toString(36).slice(2);
    localStorage.setItem("deviceId", id);
  }
  return id;
}

function getChannelPackages(ch){
  const p = ch.package;
  if(Array.isArray(p)) return p;
  if(typeof p === "string" && p) return [p];
  return ["150"]; // default basic
}

function canSelectPackage(pkg){
  return PACKAGE_ORDER.indexOf(pkg) <= PACKAGE_ORDER.indexOf(unlockedTier);
}

function countChannelsForPackage(pkg){
  let c = 0;
  for(const ch of channels){
    if(getChannelPackages(ch).includes(pkg)) c++;
  }
  return c;
}

/* Favorites */
const FAV_KEY = "tplay_favs_v1";
function loadFavs(){ try{ return new Set(JSON.parse(localStorage.getItem(FAV_KEY)||"[]")); }catch{ return new Set(); } }
function saveFavs(set){ localStorage.setItem(FAV_KEY, JSON.stringify([...set])); }
let favs = loadFavs();

/* Info bar hide timer */
let infoHideTimer = null;

/* Double click timers */
let okClickTimer = null;
let backClickTimer = null;
const DOUBLE_CLICK_DELAY = 400;

/* ===================== Logo Control Functions ===================== */
function showLogo() {
  videoLogoWatermark.classList.remove('hidden');
}

function hideLogo() {
  videoLogoWatermark.classList.add('hidden');
}

/* ===================== Server Selection Functions ===================== */
function toggleServerOverlay(force) {
  const wantOpen = (typeof force === 'boolean') ? force : !serverOverlay.classList.contains('show');
  
  if (wantOpen) {
    if (settingsOverlay.classList.contains('show')) toggleSettings(false);
    if (guide.classList.contains('show')) toggleGuide(false);
  }
  
  serverOverlay.classList.toggle('show', wantOpen);
  
  if (wantOpen) {
    loadServerOptions();
    serverFocusIndex = currentSourceIndex;
    updateServerFocus();
  }
}

/* ===================== Package Functions ===================== */
function togglePackageOverlay(force){
  const wantOpen = (typeof force === 'boolean') ? force : !packageOverlay.classList.contains('show');

  if(wantOpen){
    if (settingsOverlay.classList.contains('show')) toggleSettings(false);
    if (guide.classList.contains('show')) toggleGuide(false);
    if (serverOverlay.classList.contains('show')) toggleServerOverlay(false);
  }

  packageOverlay.classList.toggle('show', wantOpen);
  if(wantOpen) renderPackageOverlay();
}

function renderPackageOverlay(){
  const pkgs = [
    { id:"150", name:"Basic", logo:"https://i.postimg.cc/RCnCv14W/T-Play.png" },
    { id:"250", name:"Standard", logo:"https://i.postimg.cc/RCnCv14W/T-Play.png" },
    { id:"500", name:"Premium", logo:"https://i.postimg.cc/RCnCv14W/T-Play.png" },
  ];

  pkgGrid.innerHTML = "";
  for(const p of pkgs){
    const locked = !canSelectPackage(p.id);
    const card = document.createElement("div");
    card.className = "pkgCard" + (activePackage === p.id ? " active" : "");
    const count = countChannelsForPackage(p.id);

    card.innerHTML = `
      <div class="pkgTop">
        <div class="pkgLeft">
          <img class="pkgLogo" src="${p.logo}" alt="">
          <div style="min-width:0">
            <div class="pkgName">${p.name}</div>
            <div class="pkgMeta">${count} channels</div>
          </div>
        </div>
        <div class="pkgLock">${locked ? "🔒" : "✓"}</div>
      </div>
      <div class="pkgMeta" style="margin-top:8px">${p.id}+ Package</div>
    `;

    card.onclick = () => {
      if(!canSelectPackage(p.id)){
        alert("This package requires an access code.");
        return;
      }
      activePackage = p.id;
      localStorage.setItem("activePackage", activePackage);
      buildGrid();
      renderPackageOverlay();
    };

    pkgGrid.appendChild(card);
  }

  pkgStatus.textContent =
    unlockedTier === "150" ? "Access: Basic (Free)" :
    unlockedTier === "250" ? "Access: Standard" :
    "Access: Premium";
}

function applyAccessCode(){
  const code = (pkgCodeInput.value || "").trim();
  const entry = (typeof ACCESS_CODES !== "undefined") ? ACCESS_CODES[code] : null;

  if(!entry){
    alert("Invalid code");
    return;
  }

  const deviceId = getDeviceId();
  entry.devices = Array.isArray(entry.devices) ? entry.devices : [];
  entry.maxDevices = entry.maxDevices || 5;

  if(!entry.devices.includes(deviceId)){
    if(entry.devices.length >= entry.maxDevices){
      alert("Device limit reached (max 5).");
      return;
    }
    entry.devices.push(deviceId);
  }

  unlockedTier = entry.tier;
  activePackage = entry.tier;

  localStorage.setItem("unlockedTier", unlockedTier);
  localStorage.setItem("activePackage", activePackage);

  buildGrid();
  renderPackageOverlay();
  alert("Access granted.");
}

function logoutAccess(){
  unlockedTier = "150";
  activePackage = "150";
  localStorage.setItem("unlockedTier", unlockedTier);
  localStorage.setItem("activePackage", activePackage);
  buildGrid();
  renderPackageOverlay();
}


function loadServerOptions() {
  serverOptions.innerHTML = '';
  const ch = channels[currentIndex];
  serverChannelName.textContent = `${currentIndex+1}. ${ch.name || "Unknown"}`;
  
  const sources = ch.sources || [];
  
  if (sources.length === 0) {
    const noOpt = document.createElement('div');
    noOpt.className = 'noOptions';
    noOpt.textContent = 'No servers available';
    serverOptions.appendChild(noOpt);
    return;
  }
  
  sources.forEach((source, index) => {
    const option = document.createElement('div');
    option.className = `serverOption ${index === currentSourceIndex ? 'active' : ''}`;
    option.dataset.index = index;
    
    const sourceName = source.name || `Server ${index + 1}`;
    const sourceType = source.type ? ` (${source.type.toUpperCase()})` : '';
    const sourceStats = source.quality ? ` • ${source.quality}` : '';
    
    option.innerHTML = `
      <div>
        <div class="serverLabel">${sourceName}${sourceType}</div>
      </div>
      <div class="serverValue">${index === currentSourceIndex ? '✓' : ''}</div>
    `;
    
    option.onclick = () => selectServer(index);
    serverOptions.appendChild(option);
  });
}

function updateServerFocus() {
  const options = serverOptions.querySelectorAll('.serverOption');
  options.forEach((option, index) => {
    option.classList.remove('active');
    if (index === serverFocusIndex) {
      option.classList.add('active');
      // Scroll into view
      const container = serverOptions;
      const optionRect = option.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      if (optionRect.top < containerRect.top) {
        option.scrollIntoView({behavior: 'smooth', block: 'start'});
      } else if (optionRect.bottom > containerRect.bottom) {
        option.scrollIntoView({behavior: 'smooth', block: 'end'});
      }
    }
  });
}

function selectServer(index) {
  if (index === currentSourceIndex) {
    toggleServerOverlay(false);
    return;
  }
  
  currentSourceIndex = index;
  const ch = channels[currentIndex];
  const source = ch.sources?.[index];
  const sourceName = source?.name || `Server ${index + 1}`;
  
  setBadge(`Switching to ${sourceName}...`, 'warn');
  toggleServerOverlay(false);
  
  // Reload the source
  showLoading(true);
  setTimeout(() => {
    loadSource(currentSourceIndex).then(success => {
      if (success) {
        showLoading(false);
        updateNowPlayingUI();
        setBadge(`Switched to ${sourceName}`, 'live');
      } else {
        setBadge(`Failed to switch server`, 'err');
      }
    });
  }, 300);
}

serverCloseBtn.onclick = function() {
  toggleServerOverlay(false);
};

/* ===================== Fullscreen Functions ===================== */
function toggleFullscreen() {
  if (!isFullscreen) {
    const container = document.querySelector('.video-container');
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }
    fullscreenIcon.className = "fas fa-compress";
    isFullscreen = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    fullscreenIcon.className = "fas fa-expand";
    isFullscreen = false;
  }
  showInfoBar(true, 8000);
}

document.addEventListener('fullscreenchange', () => {
  isFullscreen = !!document.fullscreenElement;
  fullscreenIcon.className = isFullscreen ? "fas fa-compress" : "fas fa-expand";
  if(isFullscreen){
    showLogo();
  }
});

/* ===================== Settings Functions ===================== */
function toggleSettings(force) {
  const wantOpen = (typeof force === 'boolean') ? force : !settingsOverlay.classList.contains('show');
  
  if(wantOpen && guide.classList.contains('show')) {
    toggleGuide(false);
    setTimeout(() => {
      settingsOverlay.classList.toggle('show', true);
      loadAvailableResolutions();
      loadAudioTracks();
      loadServerSources();
      showInfoBar(true, 8000);
    }, 200);
    return;
  }
  
  settingsOverlay.classList.toggle('show', wantOpen);
  
  if(wantOpen) {
    loadAvailableResolutions();
    loadAudioTracks();
    loadServerSources();
    showInfoBar(true, 8000);
  }
}

function loadAvailableResolutions() {
  resolutionList.innerHTML = '';
  
  let qualities = [];
  
  if (shakaP) {
    const tracks = shakaP.getVariantTracks();
    qualities = tracks.map(track => ({
      id: track.id,
      label: track.height ? `${track.height}p` : `${Math.round(track.bandwidth/1000)}kbps`,
      height: track.height,
      selected: track.active
    }));
  }
  
  // If no dynamic qualities found
  if (qualities.length === 0) {
    const noOpt = document.createElement('div');
    noOpt.className = 'noOptions';
    noOpt.textContent = 'No resolution options available';
    resolutionList.appendChild(noOpt);
    return;
  }
  
  // Add Auto option first
  const autoOption = document.createElement('div');
  autoOption.className = `settingsOption active`; // Always active for Shaka
  autoOption.innerHTML = `
    <div class="optionLabel">Auto (Best)</div>
    <div class="optionValue">✓</div>
  `;
  autoOption.onclick = () => {
    if (shakaP) {
      shakaP.configure('abr.enabled', true);
      setBadge(`Resolution: Auto`, 'live');
    }
    toggleSettings(false);
  };
  resolutionList.appendChild(autoOption);
  
  // Add available qualities
  qualities.forEach(quality => {
    const option = document.createElement('div');
    option.className = `settingsOption ${quality.selected ? 'active' : ''}`;
    option.innerHTML = `
      <div class="optionLabel">${quality.label}</div>
      <div class="optionValue">${quality.selected ? '✓' : ''}</div>
    `;
    option.onclick = () => selectResolution(quality.id, quality.label);
    resolutionList.appendChild(option);
  });
}

function selectResolution(id, label) {
  if (shakaP) {
    const tracks = shakaP.getVariantTracks();
    const track = tracks.find(t => t.id === id);
    if (track) {
      shakaP.configure('abr.enabled', false);
      shakaP.selectVariantTrack(track, true);
    }
  }
  
  setBadge(`Resolution: ${label}`, 'live');
  toggleSettings(false);
}

function loadAudioTracks() {
  audioList.innerHTML = '';
  
  let audioTracks = [];
  
  if (shakaP) {
    const tracks = shakaP.getAudioLanguages && shakaP.getAudioLanguages();
    if (tracks && tracks.length > 0) {
      audioTracks = tracks.map((lang, index) => ({
        id: index,
        label: lang ? ` ${lang.toUpperCase()}` : 'Unknown',
        selected: index === 0 // Default to first
      }));
    }
  }
  
  // If no audio tracks found
  if (audioTracks.length === 0) {
    const noOpt = document.createElement('div');
    noOpt.className = 'noOptions';
    noOpt.textContent = 'No audio language options';
    audioList.appendChild(noOpt);
    return;
  }
  
  audioTracks.forEach(track => {
    const option = document.createElement('div');
    option.className = `settingsOption ${track.selected ? 'active' : ''}`;
    option.innerHTML = `
      <div class="optionLabel">${track.label}</div>
      <div class="optionValue">${track.selected ? '✓' : ''}</div>
    `;
    option.onclick = () => selectAudioTrack(track.id, track.label);
    audioList.appendChild(option);
  });
}

function selectAudioTrack(id, label) {
  if (shakaP && shakaP.selectAudioLanguage) {
    const tracks = shakaP.getAudioLanguages && shakaP.getAudioLanguages();
    if (tracks && tracks[id]) {
      shakaP.selectAudioLanguage(tracks[id]);
    }
  }
  
  setBadge(`Audio: ${label}`, 'live');
  toggleSettings(false);
}

function loadServerSources() {
  serverList.innerHTML = '';
  
  const ch = channels[currentIndex];
  const sources = ch.sources || [];
  
  // If no multiple sources
  if (sources.length <= 1) {
    const noOpt = document.createElement('div');
    noOpt.className = 'noOptions';
    noOpt.textContent = 'Only one server available';
    serverList.appendChild(noOpt);
    return;
  }
  
  sources.forEach((source, index) => {
    const option = document.createElement('div');
    option.className = `settingsOption ${index === currentSourceIndex ? 'active' : ''}`;
    const sourceName = source.name || `Server ${index + 1}`;
    const sourceType = source.type ? ` (${source.type.toUpperCase()})` : '';
    option.innerHTML = `
      <div class="optionLabel">${sourceName}${sourceType}</div>
      <div class="optionValue">${index === currentSourceIndex ? '✓' : ''}</div>
    `;
    option.onclick = () => selectServerSource(index, sourceName);
    serverList.appendChild(option);
  });
}

function selectServerSource(index, name) {
  currentSourceIndex = index;
  setBadge(`Switched to ${name}`, 'live');
  toggleSettings(false);
  
  // Reload the source
  showLoading(true);
  setTimeout(() => {
    loadSource(currentSourceIndex).then(success => {
      if (success) {
        showLoading(false);
        updateNowPlayingUI();
      }
    });
  }, 300);
}

document.getElementById("btnCloseSettings").onclick = function() {
  toggleSettings(false);
};

/* ===================== Guide Close Button Function ===================== */
guideCloseBtn.onclick = function() {
  toggleGuide(false);
};

guideCloseBtn.addEventListener("touchstart", function(e) {
  e.stopPropagation(); // Prevent event bubbling
  toggleGuide(false);
}, {passive: true});

/* ===================== Init ===================== */
window.addEventListener("load", () => {
  if(typeof channels === "undefined" || !channels.length){
    console.error("channels not found in main.js");
    return;
  }

  // auto mute OFF
  video.muted = false;
  video.volume = 1;

  // buttons (for mouse users)
  document.getElementById("btnPrev").onclick = prevChannel;
  document.getElementById("btnNext").onclick = nextChannel;
  document.getElementById("btnGuide").onclick = () => toggleGuide();
  document.getElementById("btnPlay").onclick = togglePlay;
  document.getElementById("btnMute").onclick = toggleMute;
  document.getElementById("btnFullscreen").onclick = toggleFullscreen;
  document.getElementById("btnSettings").onclick = () => toggleSettings();
  document.getElementById("btnPackage").onclick = () => togglePackageOverlay();
  document.getElementById("btnFav").onclick = toggleFavCurrent;
  document.getElementById("btnClosePackage").onclick = () => togglePackageOverlay(false);
  document.getElementById("btnApplyPkgCode").onclick = applyAccessCode;
  document.getElementById("btnLogoutPkg").onclick = logoutAccess;

  // guide search
  search.addEventListener("input", () => { 
    focusTileIndex = 0; 
    buildGrid(); 
    updateGridFocus();
  });

  buildCategories();

  // Start with logo hidden
  hideLogo();

  const saved = localStorage.getItem("lastChannel");
  playChannel(saved ? +saved : 0);
});

/* ===================== Playback core ===================== */
function clamp(n,a,b){ return Math.max(a, Math.min(b,n)); }

function showLoading(on){
  loading.classList.toggle("show", !!on);
  if(on){
    showInfoBar(true, 10000);
  }
}
function showNoSignal(on, msg){
  noSignal.classList.toggle("show", !!on);
  if(msg) noSignalText.textContent = msg;
}

async function cleanupPlayers(){
  if(shakaP){ 
    try{ 
      await shakaP.destroy(); 
    }catch(e){ 
      console.warn("Shaka cleanup error:", e); 
    }
    shakaP = null; 
  }
  try{ 
    video.removeAttribute("src"); 
    video.load(); 
  }catch(e){
    console.warn("Video cleanup error:", e);
  }
}

function isDash(src){
  const url = src?.url || "";
  return src?.type === "dash" || src?.type === "hls" || (typeof url === "string" && (url.includes(".mpd") || url.includes(".m3u8")));
}

async function playChannel(index){
  hideLogo();
  
  currentIndex = clamp(index, 0, channels.length-1);
  localStorage.setItem("lastChannel", String(currentIndex));
  currentSourceIndex = 0;

  // UI updates
  updateNowPlayingUI();
  buildGrid();

  showNoSignal(false);
  showLoading(true);
  showInfoBar(true, 10000);

  await tryLoadSourceLoop();
}

async function tryLoadSourceLoop(){
  const ch = channels[currentIndex];
  const sources = ch.sources || [];

  if(!sources.length){
    await failAllSources("No sources. Switching next channel…");
    return;
  }

  while(currentSourceIndex < sources.length){
    const ok = await loadSource(currentSourceIndex);
    if(ok){
      showLoading(false);
      showNoSignal(false);
      setBadge("LIVE", "live");
      return;
    }
    currentSourceIndex++;
  }

  await failAllSources("Switching next channel…");
}

async function loadSource(srcIdx){
  const ch = channels[currentIndex];
  const src = (ch.sources || [])[srcIdx];

  if(!src || !src.url) return false;

  setBadge(`Loading ${src.name || ("Server " + (srcIdx+1))}…`, "warn");
  showLoading(true);
  showNoSignal(false);
  hideLogo();

  await cleanupPlayers();

  try{
    // Check if Shaka Player is supported
    if(!shaka.Player.isBrowserSupported()) {
      throw new Error("Shaka Player not supported in this browser");
    }

    // Always use Shaka Player for both DASH and HLS
    shaka.polyfill.installAll();
    shakaP = new shaka.Player(video);

    // Configure for better compatibility
    const config = {
      drm: { 
        clearKeys: {}
      },
      streaming: {
        bufferingGoal: 30,
        rebufferingGoal: 10,
        bufferBehind: 30,
        ignoreTextStreamFailures: true,
        smallGapLimit: 2.0,
        jumpLargeGaps: true
      },
      abr: {
        enabled: true,
        defaultBandwidthEstimate: 5000000
      }
    };

    // Add DRM if available
    if(src.drm?.kid && src.drm?.key){
      config.drm.clearKeys[src.drm.kid] = src.drm.key;
    }

    await shakaP.configure(config);

    // Load the stream
    await shakaP.load(src.url);

    // Try to play
    try{
      video.muted = false;
      await video.play();
      updateMuteIcon();
      updatePlayIcon();
      setTimeout(() => showLogo(), 500);
      return true;
    }catch(err){
      console.warn("Autoplay with sound blocked:", err);
      video.muted = true;
      updateMuteIcon();
      await video.play().catch(()=>{});
      setBadge("Muted. Press OK to unmute", "warn");
      updatePlayIcon();
      setTimeout(() => showLogo(), 500);
      return true;
    }

  }catch(e){
    console.warn("Source failed:", srcIdx, e);
    setBadge(`Source failed → trying next`, "warn");
    return false;
  }
}

async function failAllSources(msg){
  showLoading(false);
  showNoSignal(true, msg);
  setBadge("NO SIGNAL", "err");
  hideLogo();

  await new Promise(r => setTimeout(r, 1600));
  showNoSignal(false);
  await (async ()=>{ nextChannel(); })();
}

/* ===================== UI helpers ===================== */
function showInfoBar(sticky=false, timeout=8000){
  infoBar.classList.add("show");
  clearTimeout(infoHideTimer);
  infoHideTimer = setTimeout(()=>infoBar.classList.remove("show"), sticky ? 8000 : timeout);
}
function setBadge(text, kind){
  const base = channelSubText();
  infoSub.innerHTML = escapeHtml(base) + ` <span class="badge ${kind||"warn"}">${escapeHtml(text)}</span>`;
  showInfoBar(true, 8000);
}
function channelSubText(){
  const ch = channels[currentIndex];
  const cat = ch.category || "General";
  const desc = ch.description ? ` • ${ch.description}` : "";
  const src = ch.sources?.[currentSourceIndex];
  const sname = src?.name ? ` • ${src.name}` : (ch.sources?.length ? ` • Server ${currentSourceIndex+1}` : "");
  return `${cat}${desc}${sname}`;
}
function escapeHtml(s){
  return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

function updateNowPlayingUI(){
  const ch = channels[currentIndex];
  infoLogo.src = ch.img || "";
  infoTitle.textContent = `${currentIndex+1}. ${ch.name || "Unknown"}`;
  infoSub.textContent = channelSubText();

  updateFavIcon();
  updatePlayIcon();
  updateMuteIcon();
}

/* ===================== Controls ===================== */
function togglePlay(){
  if(video.paused) {
    video.play().catch(()=>{});
    showLogo();
  }
  else {
    video.pause();
  }
  updatePlayIcon();
  showInfoBar(true, 8000);
}
function updatePlayIcon(){
  playIcon.className = video.paused ? "fas fa-play" : "fas fa-pause";
}

function toggleMute(){
  video.muted = !video.muted;
  updateMuteIcon();
  showInfoBar(true, 8000);
}
function updateMuteIcon(){
  muteIcon.className = video.muted ? "fas fa-volume-mute" : "fas fa-volume-up";
}

function nextChannel(){
  const playable = getPlayableIndexes();
  if(!playable.length) return;
  let pos = playable.indexOf(currentIndex);
  if(pos === -1) pos = 0;
  pos = (pos + 1) % playable.length;
  playChannel(playable[pos]);
}

function getPlayableIndexes(){
  const idxs = [];
  for(let i=0;i<channels.length;i++){
    const pkgs = getChannelPackages(channels[i]);
    if(pkgs.includes(activePackage)) idxs.push(i);
  }
  return idxs;
}

function prevChannel(){
  const playable = getPlayableIndexes();
  if(!playable.length) return;
  let pos = playable.indexOf(currentIndex);
  if(pos === -1) pos = 0;
  pos = (pos - 1 + playable.length) % playable.length;
  playChannel(playable[pos]);
}

/* ===================== Favorites ===================== */
function updateFavIcon(){
  const ch = channels[currentIndex];
  const on = favs.has(ch.name);
  favIcon.style.color = on ? "#ffd54a" : "#fff";
  document.getElementById("btnFav").classList.toggle("starOn", on);
}
function toggleFavCurrent(){
  const ch = channels[currentIndex];
  if(!ch?.name) return;
  if(favs.has(ch.name)) favs.delete(ch.name);
  else favs.add(ch.name);
  saveFavs(favs);
  updateFavIcon();
  buildGrid();
  showInfoBar(true, 8000);
}
function toggleFavByChannelIndex(idx){
  const ch = channels[idx];
  if(!ch?.name) return;
  if(favs.has(ch.name)) favs.delete(ch.name);
  else favs.add(ch.name);
  saveFavs(favs);
  updateFavIcon();
  buildGrid();
}

/* ===================== Guide (left overlay) ===================== */
function toggleGuide(force){
  const wantOpen = (typeof force === "boolean") ? force : !guide.classList.contains("show");
  
  if(wantOpen && settingsOverlay.classList.contains('show')) {
    toggleSettings(false);
    setTimeout(() => {
      guide.classList.toggle('show', true);
      focusCatIndex = categories.indexOf(currentCat);
      if(focusCatIndex < 0) focusCatIndex = 0;

      buildCategoriesUI();
      buildGrid();

      const pos = filteredIndexes.indexOf(currentIndex);
      focusTileIndex = pos >= 0 ? pos : 0;
      updateGridFocus();

      setTimeout(()=>search.focus(), 50);
    }, 200);
    return;
  }
  
  guide.classList.toggle('show', wantOpen);

  if(wantOpen){
    focusCatIndex = categories.indexOf(currentCat);
    if(focusCatIndex < 0) focusCatIndex = 0;

    buildCategoriesUI();
    buildGrid();

    // Find current channel in filtered list
    const pos = filteredIndexes.indexOf(currentIndex);
    focusTileIndex = pos >= 0 ? pos : 0;
    updateGridFocus();

    setTimeout(()=>search.focus(), 50);
  }else{
    search.blur();
  }
  showInfoBar(true, 8000);
}

function buildCategories(){
  const set = new Set(channels.map(c => c.category || "General"));
  categories = ["★ Favorites", "All", ...[...set].sort()];
  currentCat = "All";
  focusCatIndex = categories.indexOf(currentCat);
  buildCategoriesUI();
}
function buildCategoriesUI(){
  catPanel.innerHTML = "";
  categories.forEach((c, idx) => {
    const d = document.createElement("div");
    d.className = "catItem" + (idx===focusCatIndex ? " focus" : "");
    d.textContent = c;
    d.onclick = () => {
      focusCatIndex = idx;
      currentCat = categories[focusCatIndex];
      focusTileIndex = 0;
      buildCategoriesUI();
      buildGrid();
      updateGridFocus();
    };
    catPanel.appendChild(d);
  });
}
function getFilteredIndexes(){
  const q = (search.value || "").trim().toLowerCase();
  const isFav = currentCat === "★ Favorites";
  const isAll = currentCat === "All";

  const idxs = [];
  for(let i=0;i<channels.length;i++){
    const ch = channels[i];
    const cat = ch.category || "General";
    
    // First check category filter
    if(isFav && !favs.has(ch.name)) continue;
    if(!isFav && !isAll && cat !== currentCat) continue;


    // Package filter
    const pkgs = getChannelPackages(ch);
    if(!pkgs.includes(activePackage)) continue;
    // Then check search filter
    if(q){
      const hay = `${i+1} ${ch.name||""} ${cat} ${ch.description||""}`.toLowerCase();
      if(!hay.includes(q)) continue;
    }
    idxs.push(i);
  }
  return idxs;
}

function updateGridFocus(){
  const tiles = grid.querySelectorAll(".tile");
  tiles.forEach((tile, idx) => {
    tile.classList.remove("focus");
    if(idx === focusTileIndex){
      tile.classList.add("focus");
      // Scroll into view
      const container = grid;
      const tileRect = tile.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      if (tileRect.top < containerRect.top) {
        tile.scrollIntoView({behavior: 'smooth', block: 'start'});
      } else if (tileRect.bottom > containerRect.bottom) {
        tile.scrollIntoView({behavior: 'smooth', block: 'end'});
      }
    }
  });
}

function buildGrid(){
  filteredIndexes = getFilteredIndexes();
  if(focusTileIndex >= filteredIndexes.length){
    focusTileIndex = Math.max(0, filteredIndexes.length - 1);
  }

  grid.innerHTML = "";

  filteredIndexes.forEach((chIdx, tileIdx) => {
    const ch = channels[chIdx];
    const favOn = favs.has(ch.name);

    const tile = document.createElement("div");
    tile.className = "tile logoOnly" + (tileIdx === focusTileIndex ? " focus" : "");
    tile.dataset.channelIndex = chIdx; // Add data attribute for easy access

    tile.onclick = () => {
      focusTileIndex = tileIdx;
      updateGridFocus();
      toggleGuide(false);
      playChannel(chIdx);
    };

    tile.innerHTML = `
      <img class="logo" src="${ch.img || ""}" alt="${escapeHtml(ch.name || "")}">
      <button class="favBtn ${favOn ? "on":""}" title="Favorite">
        <i class="fas fa-star"></i>
      </button>
    `;

    const favBtn = tile.querySelector(".favBtn");
    favBtn.onclick = (e) => {
      e.stopPropagation();
      toggleFavByChannelIndex(chIdx);
    };

    grid.appendChild(tile);
  });

  updateGridFocus();
}

/* ===================== Keyboard / Remote ===================== */
document.addEventListener("keydown", (e) => {
  const inSearch = (document.activeElement === search);
  const guideOpen = guide.classList.contains("show");
  const packageOpen = packageOverlay.classList.contains("show");
  const settingsOpen = settingsOverlay.classList.contains("show");
  const serverOpen = serverOverlay.classList.contains("show");
  
  if (inSearch) {
    if (e.key === "Enter") {
      e.preventDefault();
      search.blur();
      if (filteredIndexes.length > 0 && focusTileIndex < filteredIndexes.length) {
        const chIdx = filteredIndexes[focusTileIndex];
        toggleGuide(false);
        setTimeout(() => {
          playChannel(chIdx);
        }, 100);
      }
      return;
    }
    return;
  }

  // Server Overlay- navigation
  if (serverOpen) {
    if (["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(e.key)) {
      e.preventDefault();
      
      switch(e.key) {
        case "ArrowUp":
          serverFocusIndex = Math.max(0, serverFocusIndex - 1);
          updateServerFocus();
          break;
          
        case "ArrowDown":
          const options = serverOptions.querySelectorAll('.serverOption');
          serverFocusIndex = Math.min(options.length - 1, serverFocusIndex + 1);
          updateServerFocus();
          break;
          
        case "Enter":
          if (serverFocusIndex >= 0) {
            selectServer(serverFocusIndex);
          }
          break;
          
        case "Escape":
          toggleServerOverlay(false);
          break;
      }
      return;
    }
  }

  // Prevent default for arrow keys to avoid scrolling
  if(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter", "Escape", "f", "F", "s", "S", "g", "G"].includes(e.key)) {
    e.preventDefault();
  }

  /* ---- Simple Remote Mapping ---- */
  switch(e.key){
    case "ArrowLeft":
      if(!guideOpen && !settingsOpen && !serverOpen){
        prevChannel();
      } else if (guideOpen) {
        // Guide open: LEFT for category navigation (previous category)
        focusCatIndex = Math.max(0, focusCatIndex-1);
        currentCat = categories[focusCatIndex];
        focusTileIndex = 0;
        buildCategoriesUI();
        buildGrid();
        updateGridFocus();
      }
      break;

    case "ArrowRight":
      if(!guideOpen && !settingsOpen && !serverOpen){
        nextChannel();
      } else if (guideOpen) {
        // Guide open: RIGHT for category navigation (next category)
        focusCatIndex = Math.min(categories.length-1, focusCatIndex+1);
        currentCat = categories[focusCatIndex];
        focusTileIndex = 0;
        buildCategoriesUI();
        buildGrid();
        updateGridFocus();
      }
      break;

    case "ArrowUp":
      if(!guideOpen && !settingsOpen && !serverOpen){
        toggleGuide(true); // Open Guide
      } else if (guideOpen) {
        // Guide open: UP for tile navigation (previous row)
        const cols = Math.max(1, Math.floor(grid.clientWidth / 240));
        focusTileIndex = Math.max(0, focusTileIndex - cols);
        updateGridFocus();
      }
      break;

    case "ArrowDown":
      if(!guideOpen && !settingsOpen && !serverOpen){
        // Down Arrow now opens server selection
        toggleServerOverlay(true);
      } else if (guideOpen) {
        // Guide open: DOWN for tile navigation (next row)
        const cols = Math.max(1, Math.floor(grid.clientWidth / 240));
        focusTileIndex = Math.min(filteredIndexes.length-1, focusTileIndex + cols);
        updateGridFocus();
      }
      break;

    case "Enter":
      if(!guideOpen && !settingsOpen && !serverOpen){
        // Single click: Play/Pause
        if(okClickTimer){
          clearTimeout(okClickTimer);
          okClickTimer = null;
          // Double click: Toggle Favorite
          toggleFavCurrent();
          setBadge("Favorite updated", "live");
        } else {
          okClickTimer = setTimeout(() => {
            togglePlay();
            okClickTimer = null;
          }, DOUBLE_CLICK_DELAY);
        }
      } else if (guideOpen) {
        // Guide open: Enter to select channel
        if(filteredIndexes.length > 0 && focusTileIndex < filteredIndexes.length){
          const chIdx = filteredIndexes[focusTileIndex];
          console.log("Playing channel:", chIdx + 1, channels[chIdx]?.name);
          toggleGuide(false);
          setTimeout(() => {
            playChannel(chIdx);
          }, 100);
        }
      }
      break;

    case "Escape":
      if(backClickTimer){
        clearTimeout(backClickTimer);
        backClickTimer = null;
        if(confirm("Exit T Play?")){
          window.close();
        }
      } else {
        backClickTimer = setTimeout(() => {
          if(settingsOverlay.classList.contains("show")){
            toggleSettings(false);
          } else if(guide.classList.contains("show")){
            toggleGuide(false);
          } else if(serverOverlay.classList.contains("show")){
            toggleServerOverlay(false);
          } else if(infoBar.classList.contains("show")){
            infoBar.classList.remove("show");
          }
          backClickTimer = null;
        }, DOUBLE_CLICK_DELAY);
      }
      break;
      
    case "f":
    case "F":
      toggleFullscreen();
      break;
      
    case "s":
    case "S":
      toggleSettings();
      break;
      
    case "g":
    case "G":
      if(!settingsOverlay.classList.contains("show") && !serverOverlay.classList.contains("show")) {
        toggleGuide();
      }
      break;
  }
});

video.addEventListener("play", () => {
  updatePlayIcon();
  showLogo();
});

video.addEventListener("pause", () => {
  updatePlayIcon();
});

video.addEventListener('waiting', () => {
  hideLogo();
});

video.addEventListener('playing', () => {
  showLogo();
});

video.addEventListener("click", () => showInfoBar(true, 2400));
video.addEventListener("touchstart", () => showInfoBar(true, 2400), {passive:true});