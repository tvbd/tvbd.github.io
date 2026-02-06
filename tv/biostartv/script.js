const urls = [
  "https://raw.githubusercontent.com/IPTVFlixBD/Fancode-BD/refs/heads/main/playlist.m3u",
  "https://raw.githubusercontent.com/biostartvworld/playlist/refs/heads/main/playlist.m3u",
  "https://raw.githubusercontent.com/sm-monirulislam/RoarZone-Auto-Update-playlist/refs/heads/main/RoarZone.m3u"
];

let channels = [];
let activeCat = "All";
let currentChannel = null;
let hls = null;
let levels = [];
let currentLevel = -1;

const video = document.getElementById("video");
const list = document.getElementById("list");
const category = document.getElementById("category");
const left = document.getElementById("left");
const backBtn = document.getElementById("backBtn");
const currentLogo = document.getElementById("currentLogo");
const currentName = document.getElementById("currentName");
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const btnPlay = document.getElementById("btnPlay");
const btnMute = document.getElementById("btnMute");
const btnFull = document.getElementById("btnFull");
const btnHd = document.getElementById("btnHd");
const btnShare = document.getElementById("btnShare");
const vol = document.getElementById("vol");

const wrap = video.parentElement;

btnPlay.onclick = () => video.paused ? (video.play(), btnPlay.innerText = "⏸") : (video.pause(), btnPlay.innerText = "▶");
btnMute.onclick = () => { vol.style.display = vol.style.display === "block" ? "none" : "block"; video.muted = !video.muted; btnMute.innerText = video.muted ? "🔇" : "🔊"; };
vol.oninput = e => { video.volume = e.target.value; video.muted = false; };
btnFull.onclick = () => document.fullscreenElement ? document.exitFullscreen() : wrap.requestFullscreen();
btnShare.onclick = () => currentChannel && navigator.clipboard.writeText(location.origin + "/?id=" + currentChannel.id);
btnHd.onclick = () => {
  if (!hls || !levels.length) return;
  currentLevel++;
  if (currentLevel >= levels.length) { hls.currentLevel = -1; btnHd.innerText = "AUTO"; currentLevel = -1; }
  else { hls.currentLevel = levels[currentLevel].index; btnHd.innerText = levels[currentLevel].height + "p"; }
};

function slug(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-");}
function parseM3U(txt){txt.split(/\r?\n/).forEach((l,i,a)=>{if(l.startsWith("#EXTINF")){const name=l.split(",").pop().trim();const logo=(l.match(/tvg-logo="(.*?)"/)||[])[1]||"";const cat=(l.match(/group-title="(.*?)"/)||[])[1]||"Others";const stream=(a[i+1]||"").trim();const id=slug(name);if(stream.startsWith("http")&&!channels.find(x=>x.id===id)) channels.push({id,name,logo,cat,stream});}});}
function renderCategory(){const cats=["All",...new Set(channels.map(c=>c.cat))];category.innerHTML="";cats.forEach(c=>{const d=document.createElement("div");d.className="catBtn"+(c===activeCat?" active":"");d.innerText=c;d.onclick=()=>{activeCat=c;renderCategory();renderList(c==="All"?channels:channels.filter(x=>x.cat===c));};category.appendChild(d);});}
function renderList(arr){list.innerHTML="";arr.forEach(c=>{const d=document.createElement("div");d.className="channelItem"+(currentChannel&&currentChannel.id===c.id?" active":"");d.innerHTML=`<img src="${c.logo}">`;d.onclick=()=>playChannel(c);list.appendChild(d);});}
function destroy(){if(hls){hls.destroy();hls=null;}video.pause();video.removeAttribute("src");video.load();}

const spinner = document.createElement("div");
Object.assign(spinner.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",border:"5px solid rgba(255,255,255,0.3)",borderTop:"5px solid #fff",borderRadius:"50%",width:"50px",height:"50px",animation:"spin 1s linear infinite",zIndex:"9999",display:"none"});
wrap.appendChild(spinner);
const style = document.createElement("style");
style.innerHTML=`@keyframes spin {0%{transform:translate(-50%,-50%) rotate(0deg);}100%{transform:translate(-50%,-50%) rotate(360deg);}}`;
document.head.appendChild(style);

const watermark = document.createElement("div");
watermark.innerHTML = `<img src="https://thebengalee.com/wp-content/uploads/2025/12/Biostar_TV-removebg-preview-1.webp" style="width:70px;height:70px;">`;
Object.assign(watermark.style,{position:"absolute",right:"5px",bottom:"2px",zIndex:"7",opacity:"0.9",filter:"drop-shadow(0 6px 12px rgba(0,0,0,.8))",pointerEvents:"none"});
wrap.appendChild(watermark);

function playChannel(c){
  currentChannel=c;
  left.style.display="flex";
  currentLogo.src=c.logo;
  currentName.innerText=c.name;
  destroy();
  spinner.style.display="block";

  if(video.canPlayType("application/vnd.apple.mpegurl")){
    video.src=c.stream;
    video.play().catch(()=>{});
    video.oncanplay = ()=>spinner.style.display="none";
  } else if(Hls.isSupported()){
    hls = new Hls();
    hls.loadSource(c.stream);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,()=>{levels=hls.levels.map((l,i)=>({height:l.height,index:i})).filter(l=>l.height);hls.currentLevel=-1;btnHd.innerText="AUTO";video.play().catch(()=>{});});
    hls.on(Hls.Events.LEVEL_SWITCHED,()=>spinner.style.display="none");
    hls.on(Hls.Events.FRAG_BUFFERED,()=>spinner.style.display="none");
  }
  renderList(activeCat==="All"?channels:channels.filter(x=>x.cat===activeCat));
}

backBtn.onclick=()=>{destroy();left.style.display="none";backBtn.style.display="none";};
searchBtn.onclick=()=>{searchBox.style.display=searchBox.style.display==="block"?"none":"block";searchInput.focus();};
searchInput.onkeyup=()=>{const q=searchInput.value.toLowerCase();const base=activeCat==="All"?channels:channels.filter(c=>c.cat===activeCat);renderList(base.filter(c=>c.name.toLowerCase().includes(q)));};

let controlTimer=null;
const controls=document.getElementById("controls");
function showControls(){controls.style.display="flex";clearTimeout(controlTimer);controlTimer=setTimeout(()=>{controls.style.display="none";},2000);}
video.parentElement.addEventListener("mousemove",showControls);
video.parentElement.addEventListener("touchstart",showControls);
video.parentElement.onclick=()=>{controls.style.display="flex";};

const timeBox=document.createElement("div");
Object.assign(timeBox.style,{position:"absolute",top:"1px",right:"1px",background:"rgba(0,0,0,0.5)",color:"#fff",padding:"5px 9px",borderRadius:"10px",fontFamily:"Arial,sans-serif",fontSize:"7px",fontWeight:"bold",zIndex:"9999",whiteSpace:"nowrap",textAlign:"center"});
wrap.appendChild(timeBox);
setInterval(()=>{
  const now=new Date();
  let hours=now.getHours();const minutes=now.getMinutes().toString().padStart(2,'0');const seconds=now.getSeconds().toString().padStart(2,'0');
  const ampm=hours>=12?'PM':'AM';hours=hours%12||12;
  const timeStr=`${hours.toString().padStart(2,'0')}:${minutes}:${seconds} ${ampm}`;
  const day=now.toLocaleDateString('en-US',{weekday:'long'});
  const date=now.toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'});
  timeBox.innerText=`${timeStr} | ${day} | ${date}`;
},1000);



Promise.all(urls.map(u=>fetch(u).then(r=>r.text()))).then(r=>{
  r.forEach(parseM3U);
  renderCategory();
  renderList(channels);
  const cid=new URLSearchParams(window.location.search).get("id");
  if(cid){
    const ch=channels.find(x=>x.id===cid);
    if(ch){
      document.querySelectorAll("body>*").forEach(e=>{if(!e.contains(video)) e.style.display="none";});
      Object.assign(wrap.style,{position:"fixed",inset:"0",width:"100%",height:"100%",background:"#000"});
      document.getElementById("list").style.display="none";
      document.getElementById("category").style.display="none";
      backBtn.style.display="none";
      video.muted=false;
      video.autoplay=true;
      playChannel(ch);
    }
  }
});
