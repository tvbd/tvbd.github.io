$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
        {
            name: 'Channel 1',
            autoplay: true,
            sources: [
                {src: 'http://172.28.28.112/live/antbd1001/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 2',
            sources: [
                {src: 'http://172.28.28.112/live/antbd1002/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 3',
            sources: [
                {src: 'http://172.28.28.112/live/antbd1003/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 4',
            sources: [
                {src: 'http://172.28.28.112/live/antbd1004/index.m3u8', type: 'application/x-mpegURL'},
            ]
		},
		{
            name: 'Channel 5',
            sources: [
                {src: 'http://172.28.28.112/live/antbd1005/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		{
            name: 'Channel 6',
            sources: [
                {src: 'http://172.28.28.112/live/antbd1006/index.m3u8', type: 'application/x-mpegURL'},
            ]
        }]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});