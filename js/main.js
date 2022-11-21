$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
        {
            name: 'Channel 1',
            autoplay: true,
            sources: [
                {src: 'http://172.17.50.112/live/antbd1001/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 2',
            sources: [
                {src: 'http://172.17.50.112/live/antbd1002/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 3',
            sources: [
                {src: 'https://livecdn.fptplay.net/hda2/natgeohd_vhls.smil/chunklist_b5000000.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 4',
            sources: [
                {src: 'http://172.17.50.112/live/antbd1004/index.m3u8', type: 'application/x-mpegURL'},
            ]
		},
		{
            name: 'Channel 5',
            sources: [
                {src: 'https://livecdn.fptplay.net/hda2/animalplanet_hls.smil/chunklist.m3u8', type: 'application/x-mpegURL'},
            ]
        	},
		 {
            name: 'Channel 6',
            sources: [
                {src: 'http://221.120.204.4/zee-tv-LOCKLE/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        	},
		{
            name: 'Channel 7',
            sources: [
                {src: 'http://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/9XM-audio_208482_und=208000-video=877600.m3u8', type: 'application/x-mpegURL'},
            ]
                },
		{
            name: 'Channel 8',
            sources: [
                {src: 'https://livecdn.fptplay.net/hda1/hbo_hls.smil/chunklist.m3u8', type: 'application/x-mpegURL'},
            ]
                }
		]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
