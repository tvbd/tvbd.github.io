const channels = [
             { 
                name: "Sangsad TV", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/news/bd-sangsad.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/RVR9YF6Y/sangsad.jpg", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "BTV", 
                sources: [
                    { name: "Server 1", url: "https://bongoflixbd.top/stream.php?id=a0e6e9b6-b20b-4f54-82d6-881bef762cfd&e.m3u8" },
                    { name: "Server 2", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/nzQXt33R/btv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh"
            },
            { 
                name: "BTV Chattogram", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/news/btv-chattagram.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/mgvdN3ZW/btv-cht.jpg", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Somoy TV", 
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/news/somoy-tv/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/HsVVr6FH/somoy-tv.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Jamuna Television", 
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/news/jamuna-tv/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/dtR7Gh4t/jamuna-tv.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Independent TV",
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/news/independent-tv/index.m3u8" },
                    { name: "Server 3", url: "https://bongoflixbd.top/stream.php?id=22f28ae5-8c15-4904-b9f6-70bbd94cbc43&e.m3u8" },

                ], 
                img: "https://i.postimg.cc/3rL7TH81/Independent-TV.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Channel 24",
                sources: [
                    { name: "Server 1", url: "https://ch24cdn.ncare.live/channel24/ch24office/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/news/channel-24/index.m3u8" },
                    { name: "Server 3", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/QdqkCSFX/channel-24.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "News 24",
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/news/news-24/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/bNJny8Qw/news-24.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Ekhon",
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/bangladesh/ekhontv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/KcHxyPzx/ekhon.jpg", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Ekattor Television",
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/news/ekattor-tv/index.m3u8" },
                    { name: "Server 3", url: "https://bongoflixbd.top/stream.php?id=1a7a1365-ae2c-470f-9fb2-25c6e83bb108&e.m3u8" },
                ], 
                img: "https://i.postimg.cc/jjtWwrG9/ekattor-tv.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "ATN News",
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/news/atn-news/index.m3u8" },
                    { name: "Server 2", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/ZRFCxYdp/atn-news.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "DBC News",
                sources: [
                    { name: "Server 1", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/dbcnews.stream/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/cJGD5HdQ/dbc.jpg", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "News18 Bangla", 
                sources: [
                    { name: "Server 1", url: "https://n18syndication.akamaized.net/bpk-tv/News18_Bangla_NW18_MOB/output01/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/Dydmbp8n/news18-bangla.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "ABP Ananda", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/abp-ananda/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/HjGW7XCJ/abp-ananda.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "Zee 24 Ghanta", 
                sources: [
                    { name: "Server 1", url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-zee24ghantaa-xiaomi/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/pdgPSKps/zee-24ghanta.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "Kolkata TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt01.tangotv.in/KOLKATATV/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/mkVfbs7P/kolkatatv.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "WION", 
                sources: [
                    { name: "Server 1", url: "https://d7x8z4yuq42qn.cloudfront.net/index_1.m3u8" }
                ], 
                img: "https://i.postimg.cc/ZKqXrCqn/wion.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Al Jazeera", 
                sources: [
                    { name: "Server 1", url: "https://live-hls-web-aje-fa.thehlive.com/AJE/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/50TpLNKY/aljazeera.jpg", 
                category: "News",
                description: "Qatar"
            },
            {
                name: "BBC News", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/news/bbc-news/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/bdix/news/bbc-news/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/s2679ZP4/bbc.jpg", 
                category: "News",
                description: "London"
            },
            {
                name: "Duronto",
                sources: [
                    { name: "Server 1", url: "https://tvsen4.aynaott.com/durontotv/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/4xgPNDrf/duronto.jpg", 
                category: "Kids",
                description: "Bangladesh"
            },
            {
                name: "Rongeen TV",
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/1029/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/Z5bg3drK/rongeen.jpg", 
                category: "Kids",
                description: "India"
            },
            {
                name: "Sony Yay",
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sonyyay&e=.m3u8" },
                ], 
                img: "https://i.postimg.cc/1413YzhR/yay.jpg", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Discovery Kids", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoverykids2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "601f58d4b7094d2baf78c85d1d9cb6c9",
                            key: "609e0cc03198455fa36fd2cc3e7f940d"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/Gt38t22F/d-kids.jpg", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Pogo", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=pogo_sd&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/L5tFKBL4/pogo.jpg", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Cartoon Network", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=cartoon_network_sd&e=.m3u8" },
                    { name: "Server 2", url: "https://vodzong.mjunoon.tv:8087/streamtest/cartoon-network-87/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/d1K0Drvh/Cn.png", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Cartoon Network HD+", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=cartoon_network_hd&e=.m3u8" },                ], 
                img: "https://i.postimg.cc/d06FD9xw/cnhd.jpg", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Minimax", 
                sources: [
                    { name: "Server 1", url: "https://vodzong.mjunoon.tv:8087/streamtest/disckids-157-1/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/xC2TbNWn/minimax.jpg", 
                category: "Kids",
                description: "India"
            },
            {
                name: "Animax",
                sources: [
                    { name: "Server 1", url: "https://amg02159-kcglobal-amg02159c1-samsung-in-521.playouts.now.amagi.tv/playlist/amg02159-kcglobal-animax-samsungin/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/8PQrRLN8/Animax.png", 
                category: "Kids",
                description: "Asia"
            },
            { 
                name: "Zoo Moo",
                sources: [
                    { name: "Server 1", url: "https://cdn.skygo.mn/live/disk1/Zoomoo/HLSv3-FTA/Zoomoo.m3u8" },
                ], 
                img: "https://i.postimg.cc/3J0Thmrb/zoo-moo.jpg", 
                category: "Kids",
                description: "Southeast Asia"
            },
            { 
                name: "24/7 Motu Patlu", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/motu-patlu/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/sgxQd9gz/motu-patlu.jpg", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "24/7 Ninja Hattori", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/ninja-hattori/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/Kz0h2LzX/ninja-hattori.jpg", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "24/7 Doraemon", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/doraemon/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/7hrsjZ1v/doraemon.jpg", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "24/7 Oggy and the Cockroaches", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/oggy-and-the-cockroaches/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/25T1j5cX/oggy2.jpg", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "24/7 Gopal Bhar", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/gopal-bhar/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/Pxj1jp7M/gopal-bhar.jpg", 
                category: "Kids",
                description: "Bengali"
            },
            { 
                name: "24/7 Bantul The Great", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/bantul-the-great/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/X7pGtkJb/bantul.jpg", 
                category: "Kids",
                description: "Bengali"
            },
            { 
                name: "Music India", 
                sources: [
                    { name: "Server 1", url: "https://cdn-2.pishow.tv/live/226/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/QNYG5Kz9/music-india.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "9XM", 
                sources: [
                    { name: "Server 1", url: "https://wiselp.wiseplayout.com/9XM/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/Wb8VmBjp/9xm.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "9X Jalwa", 
                sources: [
                    { name: "Server 1", url: "https://wiselp.wiseplayout.com/9X_Jalwa/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/h4VgFtZS/9x-jalwa.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Deewana", 
                sources: [
                    { name: "Originals", url: "https://tplay.live/originals/deewana/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/9Q7G21N6/Deewana.png", 
                category: "Music",
                description: "Asia"
            },
            { 
                name: "Mastiii", 
                sources: [
                    { name: "Server 1", url: "https://d1taaads3ztvmu.cloudfront.net/120723/mastii/chunklist.m3u8" }
                ], 
                img: "https://i.postimg.cc/L4f6PQnh/mastiii.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Show Box", 
                sources: [
                    { name: "Originals", url: "https://epiconvh.akamaized.net/live/showbox/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/Vsppw3V5/sb-music.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "B4U Music", 
                sources: [
                    { name: "Server 1", url: "https://cdnb4u.wiseplayout.com/B4U_Music/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/mrvFm9CF/B4-U-Music.png", 
                category: "Music",
                description: "India"
            },
            { 
                name: "yrf MUSIC", 
                sources: [
                    { name: "Server 1", url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/pdHkcC7q/yrf-music.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "NH BollyRaga", 
                sources: [
                    { name: "Server 1", url: "https://cc-up9j649x4thrj.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-up9j649x4thrj/SBUM/RunnTV/BollyRaga_IN/BollyRaga_IN.m3u8" }
                ], 
                img: "https://i.postimg.cc/7PmcCFcy/nh-bollyraga.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Bengali Beats", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/tplay/playout/209587/master.m3u8" },
                    { name: "Server 2", url: "https://live20.bozztv.com/giatvplayout7/giatv-209587/tracks-v1a1/mono.ts.m3u8" }
                ], 
                img: "https://i.postimg.cc/jSLNzXgM/Bengali-Beats.png", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Music Bangla", 
                sources: [
                    { name: "Server 1", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/musicbangla2025.stream/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/8kRX8jMd/music-bangla.jpg", 
                category: "Music",
                description: "Bangladesh"
            },
            { 
                name: "Dhoom Music Bangla", 
                sources: [
                    { name: "Server 1", url: "https://cdn-1.pishow.tv/live/1456/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/26RpwgN5/dmb-music.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Sangeet Bangla", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/1143/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/NGy2zxLw/sangeet-bangla.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Sangeet Bhojpuri", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/1293/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/yYgHbgfn/sangeet-bhojpuri-1.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Saga Music Haryanvi", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/saga-music-haryanvi/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/P5RRD2bM/saga-har.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Oxygen Music", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/tplay/playout/209901/master.m3u8" },
                    { name: "Server 2", url: "https://live20.bozztv.com/giatvplayout7/giatv-209901/tracks-v1a1/mono.ts.m3u8" }
                ], 
                img: "https://i.postimg.cc/8z1kS0G5/Oxygen-Music.jpg", 
                category: "Music",
                description: "Asia"
            },
            { 
                name: "VEVO", 
                sources: [
                    { name: "Server 1", url: "https://amg00056-amg00056c9-rakuten-fr-3243.playouts.now.amagi.tv/playlist/amg00056-vevotvfast-vevopopfr-rakutenfr/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/65xcYwPj/vevo-music.jpg", 
                category: "Music",
                description: "World"
            },
            { 
                name: "Deluxe Music", 
                sources: [
                    { name: "Server 1", url: "https://sdn-global-live-streaming-packager-cache.3qsdn.com/13456/13456_264_live.m3u8" }
                ], 
                img: "https://i.postimg.cc/9F9d3TyJ/d-music.jpg", 
                category: "Music",
                description: "World"
            },
            { 
                name: "K Pop", 
                sources: [
                    { name: "Server 1", url: "https://live20.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/wMrpYMsN/kpop-music.jpg", 
                category: "Music",
                description: "World"
            },
            { 
                name: "24/7 Coke Studio Bangla", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/music/coke-studio-bangla/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/jj5QHB7R/csb.jpg", 
                category: "Music",
                description: "Bangladesh"
            },
            { 
                name: "24/7 Wind of Change", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/music/wind-of-change/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/HnyQPzkF/wind-of-change.jpg", 
                category: "Music",
                description: "Bangladesh"
            },
            { 
                name: "24/7 Dance Performance", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/music/dance-performance/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/QMQsqnGY/dance.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "24/7 Bhojpuri Songs", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/music/bhojpuri/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/mk6mMRdL/bhojpuri.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "24/7 Adnan Sami", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/music/adnan-sami/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/SxVJGs6X/adnan-sami.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "24/7 Bollywood Movies", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/movies/bollywood-movies/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/HsvPf09Y/bollywood.jpg", 
                category: "Movie",
                description: "Hindi"
            },
            { 
                name: "24/7 Dubbed Movies", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/movies/dubbed-movies/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/DZmhKfbK/dubbed.jpg", 
                category: "Movie",
                description: "Hindi"
            },
            { 
                name: "24/7 Bangla Movies", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/movies/bangla-movies/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/7YR2vbGk/bm.jpg", 
                category: "Movie",
                description: "Bengali"
            },
            { 
                name: "Sanonda", 
                sources: [
                    { name: "Playlist", url: "https://live.sanonda.tv/sanonda/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/TwTnMYrW/sananda.jpg", 
                category: "Movie",
                description: "Bengali"
            },
            { 
                name: "Cine Jomjomat", 
                sources: [
                    { name: "Playlist", url: "https://amg13779-amg13779c1-amgplt0173.playout.now3.amagi.tv/playlist/amg13779-amg13779c1-amgplt0173/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/sxWcXTg4/cj.jpg", 
                category: "Movie",
                description: "Bengali"
            },
            { 
                name: "Zee Bangla Sonar", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeebanglacinema/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "fbbfd9ce4bbe4d818b16df7dfe89f05b",
                            key: "1e96d0f88ef740e982d6f6105721c8bc"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/GmzS2s5Y/zbs.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Zee Bollywood", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeebollywood/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "e61523260c614746b25b9a5523fe9a39",
                            key: "72ddbf37f76f49acbb8e140e7279e7a1"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/DzCBJpYs/z-bollywood.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Zee Cine Classic", 
                sources: [
                    { name: "Playlist", url: "https://amg00862-amg00862c8-amgplt0173.playout.now3.amagi.tv/playlist/amg00862-amg00862c8-amgplt0173/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/fLtknF8d/zcc.jpg", 
                category: "Movie",
                description: "Hindi"
            },
            { 
                name: "Zee South Flix", 
                sources: [
                    { name: "Playlist", url: "https://amg00862-amg00862c9-amgplt0173.playout.now3.amagi.tv/playlist/amg00862-amg00862c9-amgplt0173/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/JhBW1LCf/zsf.jpg", 
                category: "Movie",
                description: "Hindi"
            },
            { 
                name: "Zee Cinema", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeecinema/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "43513b13f4b542e39c9265921dfc1726",
                            key: "b0b2678bcd274c37b888a6c987d502ed"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/k47QtjRg/zc.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "& Pictures HD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andpictures/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "8dea532cabfe4f71ba20f62310e7949f",
                            key: "7a214a974e4f4d1d9bb66364d5f0cb92"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/g22ZV7bZ/pictures.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Goldmines", 
                sources: [
                    { name: "Server 1", url: "https://cdn-2.pishow.tv/live/1459/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/VLCpyP4j/pishow-1459.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Goldmines Movies", 
                sources: [
                    { name: "Server 1", url: "https://cdn-2.pishow.tv/live/1461/master.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/d66J-MMZ06-55gkF5maclPGB5f5j1L0SAs3iWnl3lhoswlWrJ67wD2a3mZGkgHgt-W3kMrIT=s900-c-k-c0x00ffffff-no-rj", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Goldmines Bollywood", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/GOLDMINESBOLLYWOOD/index.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/BMAiZnOGPMbMXWFW-lYwgp1-qJD6iPbBtB6YS3Kyr9lPM1jlegCl83vHjyasFEjPJrBYAsaeLQ=s900-c-k-c0x00ffffff-no-rj", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Sony Max", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sony_max_hd&e=.m3u8" },
                ], 
                img: "https://i.postimg.cc/Z55d92mk/sony-max.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Sony Max 2", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sonymax_2&e=.m3u8" },
                ], 
                img: "https://i.postimg.cc/DyM2gMGR/max2.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Bollywood HD", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-hd/manifest.m3u8" },
                ], 
                img: "https://i.postimg.cc/xCNC6b26/Bollywood-HD.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Bollywood Classic", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-classic/manifest.m3u8" },
                ], 
                img: "https://i.postimg.cc/13Sq4MQs/Bollywood-Classic.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Shemaroo Bollywood", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/shemaroo-bollywood/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/0NW9N0WT/Shemaroo-Bollywood.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "NH BollyFlix", 
                sources: [
                    { name: "Server 1", url: "https://cc-r5hupcym5oehh.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-r5hupcym5oehh/SBUM/RunnTV/BollyFlix_IN/BollyFlix_IN.m3u8" },
                ], 
                img: "https://i.postimg.cc/DfH3xWQ4/nh-bolly-flix.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "South Station", 
                sources: [
                    { name: "Server 1", url: "https://cc-yw7ztecy8do3q.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-yw7ztecy8do3q/SS_IN.m3u8" },
                ], 
                img: "https://i.postimg.cc/FF8V2XHs/ss.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "The Movie Club", 
                sources: [
                    { name: "Server 1", url: "https://sis-global.prod.samsungtv.plus/v1/tvpprd/sc-mp2ar4ca425xo.m3u8" },
                ], 
                img: "https://i.postimg.cc/bvZJXWvK/tmc.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "All Time Movies ", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/ALLTIMEMOVIES/index.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/U4INXhwmEUOABHoemQBpI6C9t4jb9iBmDvZ3ZT3lAb9Au_jVl32NL8XDpy-9cBjRJ2LP69Ovzg=s160-c-k-c0x00ffffff-no-rj", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "B4U Movies", 
                sources: [
                    { name: "Server 1", url: "https://cdnb4u.wiseplayout.com/B4U_Movies/master.m3u8" },
                    { name: "Server 2", url: "https://amg00877-b4unew-amg00877c2-xiaomi-in-5489.playouts.now.amagi.tv/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/tgwF8wQJ/B4-U-Movies.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "B4U Kadak", 
                sources: [
                    { name: "Server 1", url: "https://cdnb4u.wiseplayout.com/B4U_Kadak/master.m3u8" },
                    { name: "Server 2", url: "https://amg00877-b4unew-amg00877c4-xiaomi-in-5473.playouts.now.amagi.tv/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/zvnwCjQB/B4-U-Kadak.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "B4U Bhojpuri", 
                sources: [
                    { name: "Server 1", url: "https://cdnb4u.wiseplayout.com/B4U_Bhojpuri/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/CxJNrcxn/B4-U-Bhojpuri.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Bhojpuri Cinema", 
                sources: [
                    { name: "Server 1", url: "https://live-bhojpuri.akamaized.net/liveabr/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/1z2YMvvc/Bhojpuri-Cinema.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Zee BollyMovies", 
                sources: [
                    { name: "Server 1", url: "https://amg17931-zee-amg17931c8-samsung-th-6526.playouts.now.amagi.tv/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/pTPpbML6/zee-bollymovies.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "& Flix", 
                sources: [
                    { name: "Server 1", url: "https://edge3-moblive.yuppcdn.net/drm/smil:nflixdrm.smil/chunklist_b996000.m3u8" },
                ], 
                img: "https://i.postimg.cc/NfBgbv0y/flix.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Movies Now HD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "40f019b86241d23ef075633fd7f1e927",
                            key: "058dec845bd340178a388edd104a015e"
                        }
                    }
                ], 
                img: "https://d229kpbsb5jevy.cloudfront.net/timesplay/content/common/logos/channel/logos/wthfwe.jpeg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "MNX HD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://times-ott-live.akamaized.net/mnxhd_wv_drm/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "40f019b86241d23ef075633fd7f1e927",
                            key: "058dec845bd340178a388edd104a015e"
                        }
                    }
                ], 
                img: "https://d229kpbsb5jevy.cloudfront.net/timesplay/content/common/logos/channel/logos/vunjev.jpeg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Sony Pix", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sonypix_hd&e=.m3u8" },
                ], 
                img: "https://i.postimg.cc/tggwMqHB/pix.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "MIX Hollywood", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-hwc.myco.io/MixTV/hls/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/KvFqjytv/mix-h.jpg", 
                category: "Movie",
                description: "World"
            },
            { 
                name: "Lotus Macau", 
                sources: [
                    { name: "Server 1", url: "https://cdn.skygo.mn/live/disk1/Lotus/HLSv3-FTA/Lotus.m3u8" },
                ], 
                img: "https://i.postimg.cc/6q0JD7ZB/lotus-macau.png", 
                category: "Movie",
                description: "China"
            },
            { 
                name: "Best Action", 
                sources: [
                    { name: "Best-Action", url: "https://streams2.sofast.tv/ptnr-yupptv/title-BEST_ACTION_YUPPTV/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/9a4a5412-ca99-48d3-9013-d1811b95b9d2/manifest.m3u8" },
                ], 
                img: "https://i.postimg.cc/ncHCB2vs/best-action.png", 
                category: "Movie",
                description: "World"
            },
            { 
                name: "Star Jalsha", 
                sources: [
                    { name: "Server 1", url: "https://tvsen1.aynaott.com/gUX8BJmNc2yF/index.m3u8" },
                    { name: "Server 2", url: "https://live.mncdn.shop/f07177e9-d1a9-48b4-8e2e-1718d098bbfb/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/WpQ9PsZ3/star-jalsha.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Zee Bangla", 
                sources: [
                    { 
                        name: "SD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeebangla/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "1df83e058b864da896c9288eef63b113",
                            key: "fc32f26239054b56aab48225305598fe"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/wj9Q6Mj6/zee-bangla.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Colors Bangla", 
                sources: [
                    { name: "Server 1", url: "https://tvsen3.aynaott.com/u3LkNQ7UHhFX/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/vTQZ4Jg6/colors-bangla.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Sun Bangla", 
                sources: [
                    { name: "Server 1", url: "https://smart.bengaldigital.live/sun-bangla-paid/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://i.postimg.cc/Yqvwd2HC/sun-bangla.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Enterr10 Bangla", 
                sources: [
                    { name: "Server 1", url: "https://live-bangla.akamaized.net/liveabr/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/50rsyVks/enter10-bangla.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Ruposhi Bangla", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/1039/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/8c1LTnTZ/ruposhi-bangla.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "DD Bangla", 
                sources: [
                    { name: "Server 1", url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/7ff57cc9046b4c188b51a0d506f36e7f/index.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/jJxkTYCjjCHI1_OB6NK8G1n4vu-EIOj8gaPTxbnFA9tO_jkWJdCfUZy23fVCQtthdW9Nf8Et=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Khushboo Bangla", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/1473/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/brJdCXyf/khushboo-bangla.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Sony Aath", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sonyaath&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/y8WtVLd6/sony-aath.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Akash Aath", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/969/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/WzkcbSSJ/akash-aath.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "R Plus Gold", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/RPLUSGOLD/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/fbWdLj4y/rplusgold.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Star Plus", 
                sources: [
                    { name: "Server 1", url: "https://live.mncdn.shop/74524e79-5f3a-4824-8202-b9e346acb9a4/index.m3u8" },
                    
                ], 
                img: "https://i.postimg.cc/htNZQ0x0/Star-Plus.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Zee TV", 
                sources: [
                    { 
                        name: "HD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeetv/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "ed068cf84f0640ccbc7c0e395c0a272e",
                            key: "bb722190f2bb446391020411a7d0828b"
                        }
                    }
                ], 
                img: "https://preview.redd.it/zee-tv-new-logo-v0-rdavl0od4j5f1.jpeg?auto=webp&s=23fc180397ed9368e1b7e637e5c6a6d350647b1f", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "And TV", 
                sources: [
                    { 
                        name: "DRM Source", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andtv/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "26df86eeebb04d7fbc45c948f76e81fd",
                            key: "5f3a23f1a73c4c96ababce5fffe7b06b"
                        }
                    }
                ], 
                img: "https://yt3.googleusercontent.com/6Hg2El_eMujZPFE550K1xXmX1h7s8QR-ZtylPKLHulf-UBUWmPFWG7SMSl-XNYFtlWlWpeuu=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Anmol TV", 
                sources: [
                    { 
                        name: "SD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeeanmol/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "4023613457774cbeb71a62c339970e63",
                            key: "1c3e9fce5f014542be9cd1f749181204"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/Jnd9k7Cy/anmol-tv.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Zing", 
                sources: [
                    { 
                        name: "SD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zing/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "f0fb14eebe474a6ab74c8301d55a7224",
                            key: "f9f8b2e30704458b8db844a285ce32be"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/cCn5tQc5/zing.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Colors", 
                sources: [
                    { name: "Server 1", url: "https://streamer2.nexgen.bz/COLORS/index.m3u8" },
                    
                ], 
                img: "https://i.postimg.cc/vBL4YjR8/colors.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Sony Sab", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sonysab_hd&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/kMQ4KLhT/sab.jpg", 
                category: "Entertainment",
                description: "Bangladesh"
            },
            { 
                name: "Sony Entertainment", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sonyentertainmnt_hd&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/ydq1SThV/set.jpg", 
                category: "Entertainment",
                description: "Bangladesh"
            },
            { 
                name: "DD National", 
                sources: [
                    { name: "Server 1", url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/40492a64c1db4a1385ba1a397d357d3a/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/PrVcPf1R/DD-National.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Dangal", 
                sources: [
                    { name: "Server 1", url: "https://live-dangal.akamaized.net/liveabr/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/Hk2rQKsR/Dangal.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Dangal 2", 
                sources: [
                    { name: "Server 1", url: "https://live-dangal2.akamaized.net/liveabr/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/HWyjSjkQ/Dangal-2.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Abzy Dhakad", 
                sources: [
                    { name: "Server 1", url: "https://d2lk5u59tns74c.cloudfront.net/out/v1/4fe6ab07a13543d6bdb2ec63b3e2df44/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/Yq9H0sLb/Abzy-Dhakad.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Bollywood Masala", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-masala/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/d1VDH0pY/Bollywood-Masala.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "24/7 CID Bengali", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/mix/cid-bengali.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/nz4WS5nT/cid-bengali.jpg", 
                category: "Entertainment",
                description: "Bengali"
            },
            { 
                name: "24/7 Crime Patrol Bengali", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/mix/crime-patrol-bengali.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/FFSwCT9W/crime-patrol.jpg", 
                category: "Entertainment",
                description: "Bengali"
            },
            { 
                name: "24/7 Humayun Ahmed", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/mix/humayun-ahmed/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/mZ7yRY36/ha24-7.jpg", 
                category: "Entertainment",
                description: "Bengali"
            },
            { 
                name: "RTV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/rtv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/Qxh9wGTV/rtv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Mohona Television", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/mohona.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/vBTXWxQF/mohona.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Desh TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/deshtv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/kG5Zpp8y/deshtv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Deepto TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/deeptotv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/m2tN6sc9/deepto-tv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Green TV", 
                sources: [
                    { name: "Playlist", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/chunks.m3u8" }
                ], 
                img: "https://media.licdn.com/dms/image/v2/D560BAQHElejP-dKJhg/company-logo_200_200/company-logo_200_200/0/1667384842286/green_tv_digital_logo?e=2147483647&v=beta&t=W0t2EpmzgDhkORaqs2SaZt0-LaRukY7CzF82EmhnAK8", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Boishakhi TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/boishakhitv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/rFWQgTRD/boishakhi.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "SATV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/satv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/02nTdDvr/satv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Bangla TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/banglatv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/L4bfq0Ys/bangla-tv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Ananda TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/anandatv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/tJZFsRyZ/anandatv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Bijoy TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/bijoytv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/sggs7Tv2/bijoytv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Asian TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/asiantv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/021TdcXS/asian.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Nexus TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/nexustv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/nLFqtbRY/nexustv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Channel 9", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/channel9.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/76Xhyb76/channel-9.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Channel i", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/channeli.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/4NzjyVPN/channel-i.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Channel S", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/channels.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/nL8s287H/channel-s.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Ekushey ETV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/ekusheytv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/c4f9c3vr/ekusheetv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Global TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/globaltv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/SKncg0gg/globaltv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Maasranga", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/maasranga.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/h41QbPKw/maasranga.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "SRK TV", 
                sources: [
                    { name: "Playlist", url: "https://srknowapp.ncare.live/srktvhlswodrm/srktv.stream/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://yt3.googleusercontent.com/HWEDk9BVcD7TT3VpzVdkVqJkLkyi7WRq7KduIaFdb-y5Bh7mZdfD3A8yxCFsz7OHcubTZv21=s900-c-k-c0x00ffffff-no-rj", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "GTV", 
                sources: [
                    { name: "Playlist", url: "https://tvsen6.aynaott.com/gtvhdforgame/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/yNLC1Rfw/gtv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "My TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/mytv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/k4cM8GWx/mytv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "NTV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/ntv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/xjZDZLjt/ntvbd.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Live 1", 
                sources: [
                    { name: "Server 1", url: "https://tvsen1.aynaott.com/YNMn5kZz8aLm/tracks-v1a1/mono.ts.m3u8" },
                    { name: "Server 2", url: "https://sdmmt162.provegooott.com/1_.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywSEQroGG4RHEkDjj2LYZYVS_DEoZEB5wjw&s", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Live 2", 
                sources: [
                    { name: "Server 1", url: "https://ayna.linkchur.top/apis/ayna/stream.php?id=fc95d30e-5323-4c12-bb38-7a1e3f04acc2&e=.m3u8" },
                    { name: "Server 2", url: "https://edge1-moblive.yuppcdn.net/drm/smil:peosports1drm.smil/index.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywSEQroGG4RHEkDjj2LYZYVS_DEoZEB5wjw&s", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Live 3", 
                sources: [
                    { name: "Server 1", url: "https://live-en.aisports.cc/moviebox/device01/playlist.m3u8" },
                    { name: "Server 2", url: "https://sdmmt162.provegooott.com/2_.m3u8" },
                    { name: "Server 3", url: "https://tgn.bozztv.com/eshgtv-dvrfl05/gin-ariana/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywSEQroGG4RHEkDjj2LYZYVS_DEoZEB5wjw&s", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "TNT Sports 1", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "d0f2e5c39e70c18f29bf77768a1ad89a",
                            key: "d6853c51fcf37a18905f0609972395d7"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/m2zr04T2/tnt1.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "TNT Sports 2", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "9f51f3dc6313ac8bc668e2d9d1c04dfa",
                            key: "74bc63e5a193454a91ca494975db33f9"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/cCVdsK0P/tnt2.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "TNT Sports 3", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "a93c1cbfdccd23233bac13540c693e7f",
                            key: "2f6ab2e6693eb847eff3c9da8f9d01fc"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/Bvq4Qffp/tnt3.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "TNT Sports 4", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "192b1115da041585c77200128549efa1",
                            key: "634e10efe4abbb14be400a3ccbac0258"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/SQwXQRTK/tnt4.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Ten Cricket", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://edge4-moblive.yuppcdn.net/drm2/smil:tencricketdrm1.smil/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "9872e439f21f4a299cab249c6554daa3",
                            key: "0cdfcfe0d0f1fbe100554ce3ef4c4665"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/fTNwg9q7/ten-cric.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "T Sports", 
                sources: [
                    { name: "Server 1", url: "https://live.mncdn.shop/fc95d30e-5323-4c12-bb38-7a1e3f04acc2/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/DZbVq4jM/t-sports.jpg", 
                category: "Sports",
                description: "Bangladesh"
            },
            { 
                name: "DD Sports", 
                sources: [
                    { name: "Server 1", url: "https://bongoflixbd.top/stream.php?id=3b238911-d385-406a-b936-07550f30a4f3&e.m3u8" }
                ], 
                img: "https://i.postimg.cc/WzT8m77f/dd-sports.jpg", 
                category: "Sports",
                description: "Bangladesh"
            },
            { 
                name: "Sony Sports 1", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sony_sports_1_hd&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/mg0RC192/ten1.jpg", 
                category: "Sports",
                description: "India"
            },
            { 
                name: "Sony Sports 2", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sony_sports_2_hd&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/y8SC16G7/ten2.jpg", 
                category: "Sports",
                description: "India"
            },
            { 
                name: "Sony Sports 3", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sony_sports_3_hd&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/152bjh3Y/ten3.jpg", 
                category: "Sports",
                description: "India"
            },
            { 
                name: "Sony Sports 5", 
                sources: [
                    { name: "Server 1", url: "https://allottplay.com/tv/toffee/live.php?id=sony_sports_5_hd&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/qqgZ1jVH/ten5.jpg", 
                category: "Sports",
                description: "India"
            },
            { 
                name: "Star Sports", 
                sources: [
                    { name: "Server 1", url: "https://live.mncdn.shop/3ac46078-2bf0-4998-a021-37b459e09fba/index.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7ffw6x-c0JnBVjcBdy3rnCfjKpWUhYHWGMqzL4Ch7JLNO6T8VEV-vpLJ7aenFoMytjc&usqp=CAU", 
                category: "Sports",
                description: "India"
            },
            { 
                name: "Star Sports Select", 
                sources: [
                    { name: "Server 1", url: "https://live.mncdn.shop/594809c8-574e-46cf-a3e5-26e0bec1fe33/index.m3u8" }
                ], 
                img: "data:image/jpeg;base64,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", 
                category: "Sports",
                description: "India"
            },
            { 
                name: "Willow", 
                sources: [
                    { name: "Server 1", url: "https://fl1.moveonjoy.com/WILLOW_CRICKET/index.m3u8" },
                    { name: "Server 2", url: "https://amg01269-amg01269c1-sportstribal-emea-5204.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg01269-willowtvfast-willowplus-sportstribalemea/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/L4b8S5Df/willow.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "WWE Network", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc106wh3yw)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "00208c93f4358213b52220898b962385",
                            key: "8ae6063167228e350dd132d4a1573102"
                        }
                    }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/en/8/8c/WWE_Network_logo.jpeg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Animal Planet", 
                sources: [
                    { name: "Server 1", url: "https://vodzong.mjunoon.tv:8087/streamtest/Animal-Planet-158-3/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/RFm9McDx/animal-planet.png", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "Discovery", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoverychannel2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "b70a8cf9450c4d6484b4ac4d3c6761c0",
                            key: "0908be844260409cbac180bf0181da40"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/SjFpx6XX/discovery.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "History", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",
                        type: "dash",
                        drm: {
                            kid: "a7724b7ca2604c33bb2e963a0319968a",
                            key: "6f97e3e2eb2bade626e0281ec01d3675"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/LsC3pgKH/history.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "TLC", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoverykids2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "601f58d4b7094d2baf78c85d1d9cb6c9",
                            key: "609e0cc03198455fa36fd2cc3e7f940d"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/63p7Yght/tlc-1.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Travelxp", 
                sources: [
                    { name: "Server 1", url: "https://travelxp-travelxp-1-eu.rakuten.wurl.tv/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/zGdP4tPR/travelxp.png", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "Food Food", 
                sources: [
                    { name: "https://mumt03.tangotv.in/FOODFOOD/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/SRRYryQS/foodfood.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Peace TV", 
                sources: [
                    { name: "Server 1", url: "https://dzkyvlfyge.erbvr.com/PeaceTvBangla/index.m3u8" },
                ], 
                img: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jzxlzmgwj9tfpyv8ldpf", 
                category: "Religious",
                description: "World"
            },
            { 
                name: "Madani Bangla", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/bangladesh/madanibangla.index.m3u8" },
                ], 
                img: "https://i.postimg.cc/BvfMPnSP/madani-bangla.jpg", 
                category: "Religious",
                description: "World"
            },
            { 
                name: "Ilm TV", 
                sources: [
                    { name: "Originals", url: "https://tplay.live/originals/ilm-tv/index.m3u8" }
                ],
                img: "https://i.postimg.cc/tTkx4MWv/ilm.jpg", 
                category: "Religious",
                description: "Asia"
            },
            { 
                name: "Islam Bangla", 
                sources: [
                    { name: "Server 1", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/islamchbangla.stream/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhxUqZi3tzsjdt5rn7AWyC2CQgH8z14fd2g&s", 
                category: "Religious",
                description: "World"
            },
            { 
                name: "Shquran Tv", 
                sources: [
                    { name: "Server 1", url: "https://live.kwikmotion.com/sharjahtvquranlive/shqurantv.smil/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/g03Jqxvn/sharjahtvquranlive.jpg", 
                category: "Religious",
                description: "World"
            },
            { 
                name: "Om Bangla", 
                sources: [
                    { name: "Originals", url: "https://tplay.live/originals/om-bangla/index.m3u8" }
                ],
                img: "https://i.postimg.cc/jjmyWm0m/om-bangla-2.jpg", 
                category: "Religious",
                description: "Asia"
            },
            { 
                name: "24/7 Bangla Kirtan", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/mix/bangla-kirtan/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/QMtrZNRk/bangla-kirtan.jpg", 
                category: "Religious",
                description: "Bengali"
            },
        ];
