$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
        {
            name: 'Ptv',
            autoplay: true,
            sources: [
                {src: 'http://11plus.live/live/ptv/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'TSports',
            sources: [
                {src: 'http://11plus.live/live/tsports/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Star Sports 1',
            sources: [
                {src: 'http://11plus.live/live/stersports1hd/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
  {
            name: 'Star Sports 1',
            autoplay: true,
            sources: [
                {src: 'http://172.17.50.112/live/fifa2022/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Star Sports 1',
            autoplay: true,
            sources: [
                {src: 'http://172.17.50.112/live/antbd1001/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'TSports',
            sources: [
                {src: 'http://172.17.50.112/live/antbd1002/index.m3u8', type: 'application/x-mpegURL'},
            ]
                }
		]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
