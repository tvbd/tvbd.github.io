 const playlistList = document.getElementById('playlistList');
        const modal = document.getElementById('modal');
        const backdrop = document.getElementById('backdrop');
        const searchInput = document.getElementById('searchInput');
        const themeToggle = document.getElementById('themeToggle');

        const defaultServers = [
            { id: 's1', name: "Live Sports Global", url: "Sports.m3u", type: "default" },
            { id: 's2', name: "Entertainment HD", url: "All.m3u", type: "default" },
            { id: 's3', name: "International Radio", url: "FMRadio.m3u", type: "default" }
        ];

        themeToggle.onclick = () => {
            const current = document.body.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', target);
            themeToggle.innerHTML = target === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        };

        function render(filter = '') {
            const saved = JSON.parse(localStorage.getItem('user_playlists')) || [];
            const all = [...defaultServers, ...saved];
            const filtered = all.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
            
            playlistList.innerHTML = '';
            document.getElementById('count').innerText = `${filtered.length} Playlists`;

            if (filtered.length === 0) {
                playlistList.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-folder-open"></i>
                        <p>No results found for your search.</p>
                    </div>`;
                return;
            }

            filtered.forEach((p, index) => {
                const div = document.createElement('div');
                div.className = 'playlist-item';
                div.style.animationDelay = `${index * 0.08}s`;
                div.innerHTML = `
                    <div class="playlist-icon"><i class="fas fa-play"></i></div>
                    <div class="playlist-info" onclick="window.location.href='video.html?playlist=${encodeURIComponent(p.url)}'">
                        <div class="playlist-name">${p.name}</div>
                        <span class="badge ${p.type === 'default' ? 'badge-official' : 'badge-user'}">
                            ${p.type === 'default' ? '<i class="fas fa-shield-alt"></i> Official' : '<i class="fas fa-user"></i> Personal'}
                        </span>
                    </div>
                    <div class="actions">
                        ${p.type !== 'default' ? `
                            <div class="del-btn" onclick="deleteItem('${p.id}')">
                                <i class="fas fa-trash-alt"></i>
                            </div>` : '<i class="fas fa-check-circle" style="color:var(--accent); padding:8px; opacity:0.6; font-size: 1.1rem;"></i>'}
                    </div>
                `;
                playlistList.appendChild(div);
            });
        }

        function deleteItem(id) {
            if(confirm("Are you sure you want to remove this playlist?")) {
                let saved = JSON.parse(localStorage.getItem('user_playlists')) || [];
                saved = saved.filter(x => x.id !== id);
                localStorage.setItem('user_playlists', JSON.stringify(saved));
                render(searchInput.value);
            }
        }

        searchInput.oninput = (e) => render(e.target.value);

        document.getElementById('addBtn').onclick = () => {
            modal.style.display = 'block';
            backdrop.style.display = 'block';
        };

        backdrop.onclick = () => {
            modal.style.display = 'none';
            backdrop.style.display = 'none';
            document.getElementById('pForm').reset();
            document.getElementById('fileDisplay').innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Select M3U File';
        };

        document.getElementById('pFile').onchange = (e) => {
            if(e.target.files.length > 0) {
                document.getElementById('fileDisplay').innerText = "Selected: " + e.target.files[0].name;
                if(!document.getElementById('pName').value) {
                    document.getElementById('pName').value = e.target.files[0].name.replace('.m3u','');
                }
            }
        };

        document.getElementById('pForm').onsubmit = (e) => {
            e.preventDefault();
            const url = document.getElementById('pUrl').value;
            const name = document.getElementById('pName').value;
            const file = document.getElementById('pFile').files[0];

            let newEntry = { id: Date.now().toString(), name: name, type: 'user' };

            if (file) {
                newEntry.url = URL.createObjectURL(file);
            } else if (url) {
                newEntry.url = url;
            } else {
                alert("Please provide a link or a file.");
                return;
            }

            const saved = JSON.parse(localStorage.getItem('user_playlists')) || [];
            saved.push(newEntry);
            localStorage.setItem('user_playlists', JSON.stringify(saved));
            
            render();
            backdrop.onclick();
        };

        document.addEventListener('DOMContentLoaded', () => render());