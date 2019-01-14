<script src="https://code.jquery.com/jquery-2.1.4.js"></script>
<script type="text/javascript" src="//res.cloudinary.com/vuvanhoan/raw/upload/v1489653278/clappr.livengon_nptbxu.js"></script>
<!--script type="text/javascript" src="//cdn.jsdelivr.net/clappr/latest/clappr.min.js"></script-->
<meta name="referrer" content="no-referrer">
<title>Tv Sports - Exclusive Sports Channels</title>
</head>
<body>
<div style="width: 100%;">
<div id="player"></div>
</div>
<script>
function getParam ( sname )
{
  var params = location.search.substr(location.search.indexOf("?")+1);
  var sval =  params.replace("sv=", "");
  
  return sval;
}
var sv = getParam("sv");

</script>
<script>
  var responseText = ''+sv+'';
  urlArry = responseText.split(',');
  start = true;
  num_of_urlArry = urlArry.length;
  index_of_urlArry = 0;
</script>
<script>
 if (navigator.userAgent.match(/Android/i) ||
             navigator.userAgent.match(/webOS/i) ||
             navigator.userAgent.match(/iPhone/i) ||
             navigator.userAgent.match(/iPod/i) ||
             navigator.userAgent.match(/iPad/i) ||
             navigator.userAgent.match(/Blackberry/i)){
    document.write("\<video style=\"z-index:2;width:100%;height:250;background-color:#000;-o-object-fit:fill;object-fit:fill\"  controls=\"controls\" autoplay=\"true\" preload=\"auto\" height=\"auto\" src=\""+urlArry[0]+"\"\>\<\/video\>");
    }else{
 player = new Clappr.Player({
        source: ""+sv+"",
                 parentId: '#player',
                 width: '100%', height: "100%",
                 hideMediaControl: true,
        watermark: "https://3.bp.blogspot.com/-7SK6MIIqmQo/WwaYuIwVinI/AAAAAAAAA5U/Z5LagaPtaLMFY6wtBoez8bZUkZhWQ-69wCPcBGAYYCw/s1600/LogoMakr_4vPbcY.png",
        position: 'bottom-right',
                 autoPlay: true,

      events: {
       onError : function (event) {
        if(start == true)
        {
         index_of_urlArry = index_of_urlArry + 1;
         
         if(index_of_urlArry <= num_of_urlArry){
          reLoad(urlArry[index_of_urlArry]);
         }

 } else{ reLoad(urlArry[index_of_urlArry]);}},
       onBuffer: function (event){
        playing = false;
        setTimeout(function(){
         if(playing == false){
          if(start == true){
           index_of_urlArry = index_of_urlArry + 1;
         
           if(index_of_urlArry <= num_of_urlArry){
            reLoad(urlArry[index_of_urlArry]);
           }
          }else{
           reLoad(urlArry[index_of_urlArry]);
          }
         }
        },20000);
        
       },
       onPlay: function (event){
        start = false;
        playing = true;
        
       }
      }
     });
}
 </script>
</body>
