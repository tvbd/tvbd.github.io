        const video = document.getElementById('video');
        let hls = new Hls();

        function playNow(url, name, el) {
            if(!url) return;
            document.getElementById('now-p').innerText = name.toUpperCase();
            document.querySelectorAll('.ch-card').forEach(c => c.classList.remove('active-play'));
            if(el) el.classList.add('active-play');

            // HLS ENGINE LOGIC (এটি সব m3u8 লিঙ্ক চালাবে)
            if (Hls.isSupported()) {
                hls.destroy(); // পুরনো লিঙ্ক ক্লিয়ার করবে
                hls = new Hls({
                    enableWorker: true,
                    lowLatencyMode: true,
                    backBufferLength: 90
                });
                hls.loadSource(url);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, function() {
                    video.play().catch(e => {
                        console.log("Autoplay blocked, user must click play.");
                    });
                });
                
                // এরর ফিক্সিং (লিঙ্ক অফ থাকলে ৫ সেকেন্ড পর পর ট্রাই করবে)
                hls.on(Hls.Events.ERROR, function (event, data) {
                    if (data.fatal) { hls.recoverMediaError(); }
                });
            } 
            // সাফারী বা আইফোনের জন্য ডিফল্ট সাপোর্ট
            else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = url;
                video.addEventListener('loadedmetadata', function() {
                    video.play();
                });
            }
        }

        // পিআইপি মোড
        async function togglePiP() {
            try {
                if (video !== document.pictureInPictureElement) {
                    await video.requestPictureInPicture();
                } else {
                    await document.exitPictureInPicture();
                }
            } catch (e) { alert("PiP Mode Error."); }
        }

        // ক্যাটাগরি ফিল্টার
        function filterCat(cat, btn) {
            document.querySelectorAll('.cat-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.channel-item').forEach(item => {
                const itemCat = item.getAttribute('data-category');
                item.style.display = (cat === 'all' || itemCat === cat) ? 'flex' : 'none';
            });
        }

        // পেজ লোড হলে প্রথম চ্যানেল চালানো
        window.onload = () => { if(document.querySelector('.ch-card')) document.querySelector('.ch-card').click(); }