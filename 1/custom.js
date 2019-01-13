jwplayer.key="cbPZjCLEJ+O5oZl0AvaDQqyb50+ydDAD5kEqJuS10Zg=";

jwplayer("vplayer").setup({
			playlist: "https://tvbd.github.io/1/playlist.rss",
			width: '100%',
			preload: "none",
			primary: "html5",
			stretching: "exactfit",
			aspectratio: "16:9",
			cast: {}
		});
		var jw_retry_count = 0;
		jwplayer().onError(function() {
			if (jw_retry_count < 6) {
				setTimeout(function() {
					jw_retry(jwplayer("vplayer").getPlaylistItem()["file"]);
				}, 2000);
			}
		});

		jwplayer().on('ready',function(){
			var myVideos = jwplayer().getPlaylist();
			for (var i = 0; i < myVideos.length; i++) {
			//put the code to get your rating here
			document.getElementById('listbar').innerHTML += '<li><a herf=# onClick="jwplayer().playlistItem(' + i + ');jwplayer().play(true);"><img src=' + myVideos[i].image + '></a></li>';
	} 
});
	
