 function ntos(n){
    n=n.toString(16);
    if (n.length == 1) n="0"+n;
    n="%"+n;
    return unescape(n);
    }
    var digitArray = new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f');
    function toHex(n){
    var result = ''
    var start = true;
    for (var i=32; i>0;){
    i-=4;
    var digit = (n>>i) & 0xf;
    if (!start || digit != 0){
    start = false;
    result += digitArray[digit];
    }
    }
    return (result==''?'0':result);
    }
    function pad(str, len, pad){
    var result = str;
    for (var i=str.length; i<len; i++){
    result = pad + result;
    }
    return result;
    }
    var hexv = {
    "00":0,"01":1,"02":2,"03":3,"04":4,"05":5,"06":6,"07":7,"08":8,"09":9,"0A":10,"0B":11,"0C":12,"0D":13,"0E":14,"0F":15,
    "10":16,"11":17,"12":18,"13":19,"14":20,"15":21,"16":22,"17":23,"18":24,"19":25,"1A":26,"1B":27,"1C":28,"1D":29,"1E":30,"1F":31,
    "20":32,"21":33,"22":34,"23":35,"24":36,"25":37,"26":38,"27":39,"28":40,"29":41,"2A":42,"2B":43,"2C":44,"2D":45,"2E":46,"2F":47,
    "30":48,"31":49,"32":50,"33":51,"34":52,"35":53,"36":54,"37":55,"38":56,"39":57,"3A":58,"3B":59,"3C":60,"3D":61,"3E":62,"3F":63,
    "40":64,"41":65,"42":66,"43":67,"44":68,"45":69,"46":70,"47":71,"48":72,"49":73,"4A":74,"4B":75,"4C":76,"4D":77,"4E":78,"4F":79,
    "50":80,"51":81,"52":82,"53":83,"54":84,"55":85,"56":86,"57":87,"58":88,"59":89,"5A":90,"5B":91,"5C":92,"5D":93,"5E":94,"5F":95,
    "60":96,"61":97,"62":98,"63":99,"64":100,"65":101,"66":102,"67":103,"68":104,"69":105,"6A":106,"6B":107,"6C":108,"6D":109,"6E":110,"6F":111,
    "70":112,"71":113,"72":114,"73":115,"74":116,"75":117,"76":118,"77":119,"78":120,"79":121,"7A":122,"7B":123,"7C":124,"7D":125,"7E":126,"7F":127,
    "80":128,"81":129,"82":130,"83":131,"84":132,"85":133,"86":134,"87":135,"88":136,"89":137,"8A":138,"8B":139,"8C":140,"8D":141,"8E":142,"8F":143,
    "90":144,"91":145,"92":146,"93":147,"94":148,"95":149,"96":150,"97":151,"98":152,"99":153,"9A":154,"9B":155,"9C":156,"9D":157,"9E":158,"9F":159,
    "A0":160,"A1":161,"A2":162,"A3":163,"A4":164,"A5":165,"A6":166,"A7":167,"A8":168,"A9":169,"AA":170,"AB":171,"AC":172,"AD":173,"AE":174,"AF":175,
    "B0":176,"B1":177,"B2":178,"B3":179,"B4":180,"B5":181,"B6":182,"B7":183,"B8":184,"B9":185,"BA":186,"BB":187,"BC":188,"BD":189,"BE":190,"BF":191,
    "C0":192,"C1":193,"C2":194,"C3":195,"C4":196,"C5":197,"C6":198,"C7":199,"C8":200,"C9":201,"CA":202,"CB":203,"CC":204,"CD":205,"CE":206,"CF":207,
    "D0":208,"D1":209,"D2":210,"D3":211,"D4":212,"D5":213,"D6":214,"D7":215,"D8":216,"D9":217,"DA":218,"DB":219,"DC":220,"DD":221,"DE":222,"DF":223,
    "E0":224,"E1":225,"E2":226,"E3":227,"E4":228,"E5":229,"E6":230,"E7":231,"E8":232,"E9":233,"EA":234,"EB":235,"EC":236,"ED":237,"EE":238,"EF":239,
    "F0":240,"F1":241,"F2":242,"F3":243,"F4":244,"F5":245,"F6":246,"F7":247,"F8":248,"F9":249,"FA":250,"FB":251,"FC":252,"FD":253,"FE":254,"FF":255
    };
    function decodeanc(str){
    str = str.toUpperCase().replace(new RegExp("s/[^0-9A-Z]//g"));
    var result = "";
    var nextchar = "";
    for (var i=0; i<str.length; i++){
    nextchar += str.charAt(i);
    if (nextchar.length == 2){
    result += ntos(hexv[nextchar]);
    nextchar = "";
    }
    }
    return result;
    }
    
    
    
    var img_player = document.querySelectorAll('#anc_data img')[0].src
var ancplayer = {
	load: {
		'width': '100%',
		'height': '100%',
		'player': '',
		'proxy': '/',
		'skin': '/',
		'getlink': '',
		'imgload': '',
		'autoplay': 'false',
		'embedplay': '0',
		'site': '/hdtvbd.blogspot.com/'
	},
	sv: {
		'list_sv': 
'anc.gn,12.1.1.3,liveonlinetv247.info,c247.to,anc.go,rtmp,anc.in,youtube.com,anc.tv,anc.hd,arembed.com,anc.mb,bdtv.live',
       'ten_sv':
      'Grind:,Bdix-AM:,Tv247:,c247:,Embed:,RTMP:,CricHD:,Youtube:,Html5:,Bio-HD:,ARM:,Mobile:,BDTV',}
}


function ancMedia() {
  url = window.location.href,
  home = ancplayer.load.site, 
  server_i = [0];
    part = new Array; 
  sv = ancplayer.sv.list_sv.split(",");
  tensv = ancplayer.sv.ten_sv.split(",");
  width = ancplayer.load.width;
  height = ancplayer.load.height;
  player = ancplayer.load.player;
  proxy = ancplayer.load.proxy;
  skin = ancplayer.load.skin;
  imgload = ancplayer.load.imgload; 
  tmget = ancplayer.load.getlink; 
  auto = ancplayer.load.autoplay;
  eauto = ancplayer.load.embedplay;

	var $_  = function(x){return document.getElementById(x);}
    this.fu  = function (x, y, z) {
		if (y == null && z == null) {
			return document.getElementById(x).innerHTML;
		} else { if (y != null && z == null) 
		       { document.getElementById(x).innerHTML = y }
		  else { document.getElementById(x).style[z] = y }
		}
	};

	this.read = function () {
		b = this.fu("anc_data"),
		c = '<div id="b_data" style="display:none !important;">',
		d = '</div>',
		b = b.replace(/\<id\>/gi, c),
		b = b.replace(/\<\/id\>/gi, d);
		b = b.replace(/\[id\]/gi, c),
		b = b.replace(/\[\/id\]/gi, d),
		this.fu("anc_data", b);
		if(b.indexOf("anc*") != -1){
		b = this.fu("b_data");
		b = b.replace("anc*","");
		b = b.substring(0,b.length);
	    b = decodeanc(b);
		if(b.indexOf("|") <= 0) {b = ";" + b + "|" };
	}	else{b = this.fu("b_data"); if(b.indexOf("|") <= 0) {b = ";" + b + "|" };}
		return  b
	};
	
data = this.read();
  
l_spi = data.split("|").length; 
l_spk = function(x) {return data.split("|")[x].split(";").length;};
d_spi = function(x) {return data.split("|")[x];};
d_spk = function(x, y) {return data.split("|")[x].split(";")[y];};
pc = ["0","a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s"];

  svt = "";
  svx = 0;


this.setCookie = function(c_name,value,exdays) {
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
};
this.getCookie = function(c_name) {
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++){
x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
x=x.replace(/^\s+|\s+$/g,"");
if (x==c_name){return unescape(y);}}
};
  
this.Play = function() {
for(var s = 0;s < tensv.length ;s++) {var svr = tensv[s].split(".")[0];if(svr == ""){svr = home;}part[s] = '<li id="sev_'+s+'" class="sev" style="font-size: 15px;margin-bottom: 15px;">'+svr+' <li><li class="clear"></li>' }
for (var i = 0; i < l_spi -1; i++) {
for (var j = 0; j < l_spk(i); j++) 
{ name = d_spk(i, 0); link = d_spk(i, j);
name = 2 == l_spk(i) ? d_spk(i, 0) : name == d_spk(i + 1, 0) || !Number(name) ? name + pc[j] : name + pc[j];

for(var s = 0;s < sv.length; s++) {
//if(d_spk(0, 1).indexOf(sv[s]) != -1) { this.setCookie("ancplayer", s , 365); }
if (d_spk(0, 1).indexOf(sv[s]) != -1) {this.setCookie("_ancServer", s, 365); }
if(link.indexOf(sv[s]) != -1) { 
if(sv[s]) {data_out = '<li class="ep"><a class="a_tap" id="ep_'+i+'" href="?xem='+s+'-'+i+'-'+j+'" title="'+name+' - '+home+'" >'+name+'</a></li>' } 
part[s] += data_out } } } }

for(var s = 0;s < sv.length; s++) {
if(part[s].indexOf(home) != -1) {
svt += '<ul id="server_'+svx+'" > '+part[s]+' <div class="clear"></div></ul>';		
server_i[s] = svx.toString();
svx++
}}

svt = '<div id="list_tap"> '+svt+' <div class="clear"></div></div><div class="clear"></div>';

this.fu("anc_tp", svt);
this.getUrl()
};


this.getUrl = function() {
  String.prototype.GetPart = function(dcmm) {
    var vltn = new RegExp("(^|&)" + dcmm + "=([^&]*)(&|$)");
    var clgt = this.substr(this.indexOf("?") + 1).match(vltn);
    if (clgt != null) {
      return unescape(clgt[2]);
    }
    return null;
  };
  


	//if(part_Url == null) { part_Url = ""+laylinksv+"-0-1" }
    part_Url = url.GetPart("xem");
    if(part_Url == null) { part_Url = this.getCookie("_ancServer") + "-0-1" }	
    part_Url = part_Url.split("-");
    pserver = part_Url[0];
    pepisode = part_Url[1];
    pelink = part_Url[2];
	
    var bh = this.fu("server_0");
    var bj = this.fu("server_" + server_i[pserver]);
    this.fu("server_" + server_i[pserver], bh);
    this.fu("server_0", bj);
	document.getElementById("ep_" + pepisode).className = "tap_active";
	document.getElementById("sev_" + pserver).className = "sv_active";

	if (!d_spk(pepisode, pelink)) {window.location.href = url.split("?")[0];} 
	else {this.load(d_spk(pepisode, pelink));}
		
  };
  
this.load = function(x) {	

if(x.indexOf(sv[0]) != -1){x = x.replace(/anc\.gn\/http/gi,"http");obj = DBOj(x)[0];} //grind
if(x.indexOf(sv[1]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[1]} //amrtv
if(x.indexOf(sv[2]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[2]} //tv247
if(x.indexOf(sv[3]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[3]} //c247
if(x.indexOf(sv[4]) != -1){x = x.replace(/anc\.go\/http/gi,"http");obj = DBOj(x)[4];} //embed
if(x.indexOf(sv[5]) != -1){x = x.replace(/rtmp\/http/gi,"rtmp");obj = DBOj(x)[5];} //live RTMP
if(x.indexOf(sv[6]) != -1){x = x.replace(/anc\.in\/http/gi,"");obj = DBOj(x)[6];} //crichd
if(x.indexOf(sv[7]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[7]} //tutbelive
if(x.indexOf(sv[8]) != -1){x = x.replace(/anc\.tv\/http/gi,"http"); obj = DBOj(x)[8]} // htm5
if(x.indexOf(sv[9]) != -1){x = x.replace(/anc\.hd\/http/gi,"http"); obj = DBOj(x)[9]} //bio jw
if(x.indexOf(sv[10]) != -1){x = x.replace(/\#sub=/gi,"&sub="); obj = DBOj(x)[10]} //arem
if(x.indexOf(sv[11]) != -1){x = x.replace(/anc\.mb\/http/gi,"http"); obj = DBOj(x)[12]} //mble
if(x.indexOf(sv[12]) != -1){x = x.replace(/anc\.mb\/http/gi,"http"); obj = DBOj(x)[1]} //mble
this.fu("anc_pl", obj)
}; 
   
var DBOj = function(x){	
rut = '<iframe width="100%" height="'+height+'" src="';
qua = '<div id="logoplayer"></div><';
	return obj = [
	// 0 -.load. 
'<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><object data="//www.hlsplayer.net/player/grindplayer/GrindPlayer.swf" id="playerayer" height="'+width+'" id="player" style="visibility: visible;" type="application/x-shockwave-flash" width="'+width+'"><param value="true" name="allowFullScreen"><param value="always" name="allowScriptAccess"><param value="opaque" name="wmode"><param value="autoPlay=true&amp;src='+x+'&amp;streamType=live&amp;scaleMode=letterbox&amp;plugin_hls=//www.hlsplayer.net/player/grindplayer/flashlsOSMF.swf&amp;hls_debug=false&amp;hls_debug2=false&amp;hls_minbufferlength=-1&amp;hls_lowbufferlength=2&amp;hls_maxbufferlength=60&amp;hls_startfromlowestlevel=false&amp;hls_seekfromlowestlevel=false&amp;hls_live_flushurlcache=false&amp;hls_seekmode=ACCURATE&amp;hls_capleveltostage=false&amp;hls_maxlevelcappingmode=downscale" name="flashvars" id="playerayer"></object></div></div> ',

// 1 grind

     '<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe width="100%" height="100%" src='+x+'  scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe></div></div>',

//2 livetv247
  '<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe  src='+x+'?width=650&height=480  scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe> </div></div>',

//3 c247
  '<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe width="100%" height="100%" src='+x+'&vw=670&vh=380&domain=cdn11.crichd.in scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe></div></div>',

//4 embed

'<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe id="playerayer"  src='+x+' autoplay='+auto+'" width="100%" height="100%" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" frameborder="0"scrolling="no"/></iframe>',

//5 RTMP		
'<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><object data="//www.hlsplayer.net/player/grindplayer/GrindPlayer.swf" id="playerayer" height="'+width+'" id="player" style="visibility: visible;" type="application/x-shockwave-flash" width="'+width+'"><param value="true" name="allowFullScreen"><param value="always" name="allowScriptAccess"><param value="opaque" name="wmode"><param value="autoPlay=true&amp;src='+x+'&amp;streamType=live&amp;scaleMode=letterbox&amp;plugin_hls=//www.hlsplayer.net/player/grindplayer/flashlsOSMF.swf&amp;hls_debug=false&amp;hls_debug2=false&amp;hls_minbufferlength=-1&amp;hls_lowbufferlength=2&amp;hls_maxbufferlength=60&amp;hls_startfromlowestlevel=false&amp;hls_seekfromlowestlevel=false&amp;hls_live_flushurlcache=false&amp;hls_seekmode=ACCURATE&amp;hls_capleveltostage=false&amp;hls_maxlevelcappingmode=downscale" name="flashvars"></object></div></div> ',

//5 crichd
'<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe width="100%" height="100%" src="http://tvsportsbd.blogspot.com/p/cric.html?sv='+x+'"  scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe></div></div>',

//6	youtube
  '<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe width="100%" height="100%" src=http://tvsportsbd.blogspot.com/p/utube-live.html?sv='+x+' scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe></div></div>',

//7 html5
'<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe width="100%" height="100%" src=http://tvsportsbd.blogspot.com/p/html5.html?sv='+x+'  scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe></div></div>',

//8 bio jw 8 player
  '<div class="tbn_css_frame_wrap"><div class="tbn_css_frame_wrap_inner bottomshadows"><iframe width="100%" height="100%" src=http://tvsportsbd.blogspot.com/p/1sports-player.html?sv='+x+'   scrolling="no" frameborder="0" allowfullscreen="true"></iframe></div></div>',

  
//9 arembed ebay

'<div class="tbn_css_frame_wrap"> <div class="tbn_css_frame_wrap_inner bottomshadows"><iframe width="100%" height="100%" src="'+x+'&vw=720&vh=400" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe></div></div>',
 


//10

 '<div id="logoplayer"></div><object type="application/x-shockwave-flash"  id="StrobeMediaPlayback" name="StrobeMediaPlayback" data="http://www.ciesm.org/marine/congresses/podcasts/Marseille/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf" width="'+width+'" align="middle" height="'+height+'"><param name="quality" value="high"><param name="bgcolor" value="#000000"><param name="allowscriptaccess" value="sameDomain"><param name="allowfullscreen" value="true"><param name="flashvars" value="src='+x+'&amp;streamType=live&amp;autoPlay=true&amp;controlBarAutoHide=true&amp;controlBarPosition=bottom"></object>',
			


//11 mbl
  '<div class="tbn_css_frame_wrap"><div class="tbn_css_frame_wrap_inner bottomshadows"><video id="example-video" class="video-js vjs-default-skin" controls="controls" width="100%" height="320">'+x+' </video></div></div>',


//5
  '<iframe width="100%" height="100%" src=http://moviehdbd.000webhostapp.com/tv/go.php?='+x+'  scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe>',
//6	youtube
  '<iframe width="100%" height="100%" src=http://tvsportsbd.blogspot.com/p/utube-live.html?sv='+x+' scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe>',

//7
      '<iframe id="playerayer"  src='+x+'&server=1&width=100%&height=415.59999999999997 width="100%" height="415.9999999" "autoplay='+auto+' type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" frameborder="0"/></iframe>',



//9 livetv24

  '<div id="logoplayer"></div><iframe width="100%" height="100%" src=http://moviehdbd.000webhostapp.com/tv/all.php?url='+x+'  scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe>',

//10 hightlight

  '<div id="logoplayer"></div><iframe width="100%" height="100%" src=http://moviehdbd.000webhostapp.com/utv.php?url='+x+'  scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe>',

//11 p3g
  '<div id="logoplayer"></div>',

//12 fb


'<div class="fb-video" data-href='+x+' data-width="auto" data-show-text="false"></div>',


//14
  '<div id="logoplayer"></div><iframe width="100%" height="100%" src="http://www.liveonlinetv247.info/embed/'+x+'?width=700&height=410" scrolling="no" frameborder="0" allowfullscreen="true" id="playerayer"></iframe>',

 
 
];
}}
var M = new ancMedia; M.Play();
    
    
       
