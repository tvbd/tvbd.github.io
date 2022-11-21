$(document).ready(function () {
    var player = videojs('video');
player.playlist([
        { name: 'Sports 18', autoplay: true, sources: [ {src: 'http://172.17.50.112/live/antbd1001/index.m3u8', type: 'application/x-mpegURL'},] },
        { name: 'T-Sports 1', sources: [  {src: 'http://172.17.50.112/live/antbd1002/index.m3u8', type: 'application/x-mpegURL'}, ] },
        { name: 'GTV1', sources: [ {src: 'http://172.17.50.112/live/antbd1004/index.m3u8', type: 'application/x-mpegURL'}, ] },
	{ name: 'T-Sports2', sources: [ {src: 'http://30.30.30.30/live/skyfeed1005/index.m3u8', type: 'application/x-mpegURL'}, ] },
	{ name: 'GTV2', sources: [ {src: 'http://30.30.30.30/live/skyfeed2001/index.m3u8', type: 'application/x-mpegURL'}, ] },
        { name: 'GTV3', sources: [ {src: 'http://30.30.30.30/live/skyfeed1006/index.m3u8', type: 'application/x-mpegURL'}, ] },	
        { name: 'GTV4', sources: [ {src: 'http://30.30.30.30/live/skyfeed2001/index.m3u8', type: 'application/x-mpegURL'},] },
	{ name: 'T-Sports3', sources: [ {src: 'http://30.30.30.30/live/skyfeed2002/index.m3u8', type: 'application/x-mpegURL'},] },
        { name: 'T-Sports4', sources: [ {src: 'http://172.16.128.2:8081/live/sky1010/playlist.m3u8', type: 'application/x-mpegURL'},] },
        { name: 'T-Sports5', sources: [ {src: 'http://172.16.128.2:8081/live/sky2002/playlist.m3u8', type: 'application/x-mpegURL'},] },
	{ name: 'GTV5', sources: [ {src: 'http://172.16.128.2:8081/live/sky1011/playlist.m3u8', type: 'application/x-mpegURL'},] },
	{ name: 'GTV6', sources: [ {src: 'http://172.16.128.2:8081/live/sky2001/playlist.m3u8', type: 'application/x-mpegURL'},] },
	   ]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
