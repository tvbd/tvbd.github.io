function 
loadJS(url){
  const s=document.createElement("script");
  s.src=url;
  s.defer=true;
  document.head.appendChild(s);
}

loadJS("https://cdn.jsdelivr.net/npm/@clappr/player@latest/dist/clappr.min.js");
loadJS("https://cdn.jsdelivr.net/npm/hls.js@latest");


function ljs(u){var s=document.createElement("script");s.src=u;s.defer=true;document.head.appendChild(s)}
function lcss(u){var l=document.createElement("link");l.rel="stylesheet";l.href=u;document.head.appendChild(l)}

ljs("https://cdn.jsdelivr.net/npm/hls.js@latest")
ljs("https://cdn.jsdelivr.net/npm/dashjs@latest/dist/dash.all.min.js")
ljs("https://vjs.zencdn.net/8.10.0/video.min.js")

lcss("https://vjs.zencdn.net/8.10.0/video-js.css")
lcss("https://eamintalukdar.pages.dev/bdixtv/css/bootstrap.min.css")
lcss("https://eamintalukdar.pages.dev/bdixtv/css/style.css")

function loadScript(u){
  return new Promise(r=>{
    const s=document.createElement("script");
    s.src=u;
    s.onload=r;
    document.head.appendChild(s);
  });
}

Promise.all([
  loadScript("https://cdn.jsdelivr.net/npm/@clappr/player@latest/dist/clappr.min.js"),
  loadScript("https://cdn.jsdelivr.net/npm/hls.js@latest")
]).then(()=>window.CLAPPR_READY=true);

const urls=[
"/playlist.m3u"
];

let channels = [];
let player = null;
let userInteracted = false;


/***********************
 USER INTERACTION DETECT
************************/

document.addEventListener("click",()=>{
  userInteracted = true;
  if(player){
    try{
      player.unmute();
      player.setVolume(100);
      player.play();
    }catch(e){}
  }
});



/***********************
 LOAD & PARSE PLAYLIST
************************/
Promise.all(urls.map(u=>fetch(u).then(r=>r.text()))).then(txts=>{
  txts.forEach(t=>{
    let l=t.split("\n");
    for(let i=0;i<l.length;i++){
      if(l[i].startsWith("#EXTINF")){
        let name=l[i].split(",").pop();
        let logo=(l[i].match(/tvg-logo="(.*?)"/)||[])[1]
          || "https://thebengalee.com/wp-content/uploads/2025/12/Biostar_TV-removebg-preview-1.webp";
        let cat=(l[i].match(/group-title="(.*?)"/)||[])[1] || "Others";
        let stream=l[i+1];
        if(stream && stream.startsWith("http")){
          channels.push({name,logo,cat,stream});
        }
      }
    }
  });
  renderCategory();
  renderList(channels);
});


/***********************
 CATEGORY RENDER
************************/
function renderCategory(){
  const b=document.getElementById("category");
  b.innerHTML="";
  ["All",...new Set(channels.map(c=>c.cat))].forEach(c=>{
    let d=document.createElement("div");
    d.className="catBtn";
    d.innerText=c;
    d.onclick=()=>renderList(c==="All"?channels:channels.filter(x=>x.cat===c));
    b.appendChild(d);
  });
}


/***********************
 CHANNEL LIST
************************/
function renderList(arr){
  const b=document.getElementById("list");
  b.innerHTML="";
  arr.forEach(c=>{
    let d=document.createElement("div");
    d.className="channelItem";
    d.innerHTML=`<img src="${c.logo}">`;
    d.onclick=()=>play(c,d);
    b.appendChild(d);
  });
}


/***********************
 PLAY CHANNEL (MAIN FIX)
************************/
function play(c, el){
  if(!window.CLAPPR_READY) return;

  document.querySelectorAll(".channelItem").forEach(x=>x.classList.remove("active"));
  el.classList.add("active");

  document.getElementById("left").style.display="flex";
  document.getElementById("backBtn").style.display="block";

  document.getElementById("currentLogo").src=c.logo;
  document.getElementById("currentName").innerText=c.name;
  document.getElementById("posterImg").src=c.logo;
  document.getElementById("poster").style.display="flex";

  if(player){
    player.destroy();
    player=null;
  }

  player = new Clappr.Player({
    source: c.stream,
    parentId: "#player",
    width: "100%",
    height: "100%",
    autoPlay: true,
    mute: !userInteracted,   // 🔑 policy safe
    volume: 100,
    playback:{
      playInline:true,
      autoPlay:true
    },
    events:{
      onReady:()=>{
        try{
          player.play();
          if(userInteracted){
            player.unmute();
            player.setVolume(100);
          }
        }catch(e){}
      },
      onPlay:()=>{
        document.getElementById("poster").style.display="none";
        if(userInteracted){
          try{
            player.unmute();
            player.setVolume(100);
          }catch(e){}
        }
      }
    }
  });

window.scrollTo({top:0,behavior:"smooth"});
}




/***********************
 BACK BUTTON
************************/
function goBack(){
  if(player){
    player.destroy();
    player=null;
  }
  document.getElementById("left").style.display="none";
  document.getElementById("backBtn").style.display="none";
}


/***********************
 SEARCH
************************/
function toggleSearch(){
  let s=document.getElementById("searchBox");
  s.style.display=s.style.display==="block"?"none":"block";
}

function searchChannel(){
  let q=document.getElementById("searchInput").value.toLowerCase();
  renderList(channels.filter(c=>c.name.toLowerCase().includes(q)));
}

document.addEventListener("DOMContentLoaded",()=>{

  // CREATE TIME/DAY/DATE BOX
  const timeBox = document.createElement("div");
  timeBox.id = "timeBox";
  timeBox.style.position = "fixed"; // scroll-friendly
  timeBox.style.top = "20px";
  timeBox.style.right = "20px";
  timeBox.style.background = "rgba(0,0,0,0.5)";
  timeBox.style.color = "#fff";
  timeBox.style.padding = "10px 9px";
  timeBox.style.borderRadius = "10px";
  timeBox.style.fontFamily = "Arial, sans-serif";
  timeBox.style.fontSize = "9px";  // front aro boro
  timeBox.style.fontWeight = "bold";
  timeBox.style.zIndex = "9999";
  timeBox.style.cursor = "default";
  timeBox.style.whiteSpace = "nowrap";
  timeBox.style.overflow = "hidden";
  timeBox.style.textAlign = "center";
  document.body.appendChild(timeBox);

  // FUNCTION TO GET CURRENT TIME, DAY, DATE
  const updateTime = ()=>{
    const now = new Date();

    // Time with AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // convert 0 -> 12
    const timeStr = `${hours.toString().padStart(2,'0')}:${minutes}:${seconds} ${ampm}`;

    // Day
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    // Date
    const date = now.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });

    // Combine
    timeBox.innerText = `${timeStr} | ${day} | ${date}`;
  }

  // Update every second
  setInterval(updateTime,1000);
  updateTime(); // initial call

  // FUNCTION TO UPDATE POSITION (relative to video if playing)
  function updateTimeBoxPosition(){
    const leftDiv = document.getElementById("left"); // main video left box
    const playerBox = document.getElementById("player");
    if(leftDiv && leftDiv.style.display !== "none" && playerBox){
      // playing channel → position relative to video box
      const rect = playerBox.getBoundingClientRect();
      timeBox.style.top = (rect.top + 20)+"px";
      timeBox.style.right = (window.innerWidth - rect.right + 20)+"px";
      timeBox.style.position = "fixed"; // scroll-friendly
    } else {
      // no playing → top-right fixed
      timeBox.style.top = "20px";
      timeBox.style.right = "20px";
      timeBox.style.position = "fixed";
    }
  }

  // Update position on scroll & resize
  window.addEventListener("scroll", updateTimeBoxPosition);
  window.addEventListener("resize", updateTimeBoxPosition);

  // Observe for channel play changes
  const observer = new MutationObserver(updateTimeBoxPosition);
  observer.observe(document.body,{subtree:true, childList:true, attributes:true});

});
