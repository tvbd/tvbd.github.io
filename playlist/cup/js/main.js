$(document).ready(function () {
    var player = videojs('video');
player.playlist([
        
{ name: 'Ptv',           autoplay: true, sources: [ {src: 'http://11plus.live/live/ptv/index.m3u8', type: 'application/x-mpegURL'},]},
{ name: 'TSports',       autoplay: true, sources: [ {src: 'http://11plus.live/live/tsports/index.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Star Sports 1', autoplay: true, sources: [ {src: 'http://11plus.live/live/stersports1hd/index.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Star sports 1', autoplay: true, sources: [ {src: 'http://172.17.50.112/live/fifa2022/index.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Star sports 1', autoplay: true, sources: [ {src: 'http://172.17.50.112/live/antbd1001/index.m3u8', type: 'application/x-mpegURL'},] },
{ name: 'TSports',       autoplay: true, sources: [ {src: 'http://172.17.50.112/live/antbd1002/index.m3u8', type: 'application/x-mpegURL'}, ] },	
{ name: 'T-Sports',      autoplay: true, sources: [ {src: 'https://ott.sonyplex.com:444/play/y4ypVArrswAkLijdKS_tnhhIvk9niht3vh2W4ClrIzo/m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'GTV',           autoplay: true, sources: [ {src: 'https://ott.sonyplex.com:444/play/V7bMhseWvzq2L18X8hGbefmhw9o1yNtqn1S2CY6Yyi8/m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'GTV',           autoplay: true, sources: [ {src: 'http://103.175.242.10:8080/live/gtv/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'GTV',           autoplay: true, sources: [ {src: 'http://103.175.242.10:8080/live/gtv/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'TSports',       autoplay: true, sources: [ {src: 'http://test-otv1.ftpbd.net/streams/115/index.m3u8', type: 'application/x-mpegURL'}, ] },
{ name: 'Star sports 1', autoplay: true, sources: [ {src: 'http://test-otv1.ftpbd.net/streams/110/index.m3u8', type: 'application/x-mpegURL'}, ] },

]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
