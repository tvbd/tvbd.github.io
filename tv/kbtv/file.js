 const db = {
     "notice": "WELCOME TO KB TV PRO - SYSTEM ONLINE IPTV ",
     "watermark_text": "KB TV PRO ",
     "watermark_color": "#ff0000",
     "playlist_url": "https://raw.githubusercontent.com/tvbd/m3uplayer/refs/heads/main/m3u/nexgen.m3u"
 };
 const player = videojs('vid', {
     html5: {
         hls: {
             overrideNative: true
         }
     }
 });
