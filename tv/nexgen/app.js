   const player = videojs('iptv-player', { fluid: false, liveui: true });
        let allData = {};
        
        // --- লোগো ম্যাপ (প্রয়োজনীয়) ---
        const logoMap = {
            "GTV": "https://upload.wikimedia.org/wikipedia/en/2/20/GTVBangladeshLogo.png"
        };
        const nameCorrection = {
            "jumuna": "JAMUNA TV", "jamuna": "JAMUNA TV",
            "somoy": "SOMOY TV", "somoy tv": "SOMOY TV",
            "t sports": "T SPORTS", "tsports": "T SPORTS",
            "g tv": "GTV", "gazi tv": "GTV",
            "channel 24": "CHANNEL 24", "atn news": "ATN NEWS",
            "star jalsha": "STAR JALSHA", "zee bangla": "ZEE BANGLA"
        };
        const vipList = ["T SPORTS", "GTV", "JAMUNA TV", "SOMOY TV", "EKATTOR TV", "INDEPENDENT TV", "CHANNEL 24", "STAR JALSHA"];

        async function init() {
            try {
                const res = await fetch('https://v1.nexgenbd.shop/fetch_m3u.php');
                const text = await res.text();
                parseM3U(text);
            } catch (err) { console.error(err); }
        }

        function cleanName(name) {
            let n = name.toLowerCase().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF])/g, '')
                        .replace(/hd|sd|live|tv|bd|\[.*?\]|\(.*?\)|-|\|/gi, '').trim();
            for (let key in nameCorrection) if (n.includes(key)) return nameCorrection[key];
            return n.toUpperCase();
        }

        function parseM3U(data) {
            const lines = data.split('\n');
            allData = {};

            for (let i = 0; i < lines.length; i++) {
                if (lines[i].startsWith('#EXTINF')) {
                    const info = lines[i];
                    const url = lines[i + 1]?.trim();
                    if (!url || !url.startsWith('http')) continue;

                    let rawName = info.split(',')[1]?.trim() || "Unknown";
                    let finalName = cleanName(rawName);
                    if (finalName.length < 2) continue;

                    let logoMatch = info.match(/tvg-logo="([^"]+)"/);
                    let playlistLogo = logoMatch ? logoMatch[1] : '';
                    let mapLogo = logoMap[finalName];
                    let finalLogo = mapLogo ? mapLogo : playlistLogo;
                    if(!finalLogo) finalLogo = `https://via.placeholder.com/50?text=${finalName[0]}`;

                    if (!allData[finalName]) {
                        allData[finalName] = { name: finalName, logo: finalLogo, originalLogo: playlistLogo, urls: [] };
                    }
                    if(!allData[finalName].urls.includes(url)) allData[finalName].urls.push(url);
                }
            }
            filterData('all');
        }

        function getPriority(name) {
            for (let i = 0; i < vipList.length; i++) {
                if (name.includes(vipList[i])) return i;
            }
            return 999;
        }

        window.filterData = (cat) => {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                if(btn.innerText.toLowerCase().includes(cat === 'all' ? 'vip' : cat)) btn.classList.add('active-tab');
                else btn.classList.remove('active-tab');
            });

            const container = document.getElementById('channel-grid');
            container.innerHTML = '';
            
            let channels = Object.values(allData);

            if (cat === 'sports') channels = channels.filter(c => c.name.match(/SPORTS|CRICKET|FOOTBALL|GTV|BPL/));
            else if (cat === 'news') channels = channels.filter(c => c.name.match(/NEWS|SOMOY|JAMUNA|EKATTOR|24|INDEPENDENT|BTV/));
            else if (cat === 'indian') channels = channels.filter(c => c.name.match(/JALSHA|ZEE|COLORS|SONY|STAR/));
            else if (cat === 'kids') channels = channels.filter(c => c.name.match(/CARTOON|NICK|DISNEY|KIDS/));

            channels.sort((a, b) => {
                let pA = getPriority(a.name);
                let pB = getPriority(b.name);
                if (pA !== pB) return pA - pB;
                return a.name.localeCompare(b.name);
            });

            channels.forEach(ch => {
                const div = document.createElement('div');
                div.className = 'channel-card';
                div.innerHTML = `
                    <div class="logo-wrapper">
                        <img src="${ch.logo}" 
                             onerror="this.onerror=null; this.src='${ch.originalLogo}'; if(this.src=='${ch.originalLogo}') this.src='https://via.placeholder.com/50?text=${ch.name[0]}';"
                             alt="${ch.name}">
                    </div>
                    <div class="ch-name">${ch.name}</div>
                `;
                div.onclick = () => playChannel(ch, div);
                container.appendChild(div);
            });
        }

        function playChannel(ch, el) {
            document.getElementById('playing-title').innerText = ch.name;
            const sDiv = document.getElementById('server-options');
            sDiv.innerHTML = '';
            
            player.pause();
            player.src({ type: 'application/x-mpegURL', src: ch.urls[0] });
            player.ready(() => { player.play().catch(e => console.log(e)); });

            ch.urls.forEach((url, i) => {
                let btn = document.createElement('button');
                btn.className = 'srv-btn ml-1';
                btn.innerText = `S${i+1}`;
                btn.onclick = () => {
                    player.src({ type: 'application/x-mpegURL', src: url });
                    player.play();
                    document.querySelectorAll('.srv-btn').forEach(b => b.classList.remove('srv-active'));
                    btn.classList.add('srv-active');
                };
                sDiv.appendChild(btn);
                if(i===0) btn.classList.add('srv-active');
            });

            document.querySelectorAll('.channel-card').forEach(c => c.classList.remove('selected-card'));
            el.classList.add('selected-card');
        }

        document.getElementById('search').oninput = (e) => {
            let val = e.target.value.toUpperCase();
            document.querySelectorAll('.channel-card').forEach(card => {
                card.style.display = card.innerText.toUpperCase().includes(val) ? 'flex' : 'none';
            });
        };

        init();