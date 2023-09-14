$(document).ready(function () {
    var player = videojs('video');
player.playlist([
        { name: 'Star sports 1', autoplay: true, sources: [ {src: 'http://172.17.50.112/live/antbd1001/index.m3u8', type: 'application/x-mpegURL'},] },
        { name: 'T-Sports1', sources: [  {src: 'http://172.17.50.112/live/antbd1002/index.m3u8', type: 'application/x-mpegURL'}, ] },
        { name: 'T-Sports2', sources: [ {src: 'http://103.118.76.146:1935/dhakacdn/tsports.stream/playlist.m3u8', type: 'application/x-mpegURL'}, ] },
	{ name: 'GTV', sources: [ {src: 'http://103.118.76.146:1935/dhakacdn/gtv.stream/playlist.m3u8', type: 'application/x-mpegURL'}, ] },
        { name: 'Starsports1 tamil', sources: [ {src: 'http://20.2.72.221/asiacup/index.m3u8', type: 'application/x-mpegURL'}, ] },		
        { name: 'T-Sports3', sources: [ {src: 'http://11plus.live/live/tsports/index.m3u8', type: 'application/x-mpegURL'}, ] },
        { name: 'T-Sports5', sources: [ {src: 'http://172.16.128.2:8081/live/sky2002/playlist.m3u8', type: 'application/x-mpegURL'}, ] },
	{ name: 'GTV4', sources: [ {src: 'http://172.16.128.2:8081/live/sky1011/playlist.m3u8', type: 'application/x-mpegURL'}, ] },
	{ name: 'GTV5', sources: [ {src: 'http://172.16.128.2:8081/live/sky2001/playlist.m3u8', type: 'application/x-mpegURL'}, ] },
	   ]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
