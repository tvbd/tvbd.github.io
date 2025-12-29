// Automatic DRM detection from combined URL
        function autoDetectDRM() {
            const fullUrl = document.getElementById('videoUrl').value.trim();
            
            if (fullUrl.includes('drmLicense=')) {
                try {
                    const licensePart = fullUrl.split('drmLicense=')[1];
                    const [kid, key] = licensePart.split(':');
                    
                    if (kid && key) {
                        // Extract clean key value (removing any trailing parameters)
                        const cleanKey = key.split('&')[0].split('?')[0];
                        
                        document.getElementById('keyId').value = kid;
                        document.getElementById('keyValue').value = cleanKey;
                        
                        // Visual feedback
                        document.getElementById('keyId').classList.add('border-cyan-500/50');
                        document.getElementById('keyValue').classList.add('border-cyan-500/50');
                    }
                } catch (e) {
                    console.error("DRM parsing failed");
                }
            }
        }

        function generatePlayer() {
            const rawUrl = document.getElementById('videoUrl').value.trim();
            if (!rawUrl) {
                alert("⚠️ Please enter a Stream URL first!");
                return;
            }

            // Clean the URL (Removing the DRM parameters from the main stream link)
            const cleanStreamUrl = rawUrl.split('?')[0];

            // Setup Base Path
            const currentPath = window.location.pathname;
            const dirPath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
            const baseUrl = window.location.origin + dirPath + 'player.html';

            // Prepare Parameters
            const params = new URLSearchParams({
                url: cleanStreamUrl,
                keyId: document.getElementById('keyId').value.trim(),
                keyValue: document.getElementById('keyValue').value.trim(),
                logo: encodeURIComponent(document.getElementById('logoUrl').value.trim()),
                logoOpacity: document.getElementById('logoOpacity').value,
                wm: encodeURIComponent(document.getElementById('wmText').value.trim()),
                wmOpacity: document.getElementById('wmOpacity').value,
                logoOn: document.getElementById('logoUrl').value.trim() ? '1' : '0',
                wmOn: document.getElementById('wmText').value.trim() ? '1' : '0'
            });

            const finalEmbedUrl = baseUrl + '?' + params.toString();

            // Update UI & Preview
            document.getElementById('embed-url').value = finalEmbedUrl;
            document.getElementById('previewPlaceholder').style.display = 'none';
            document.getElementById('previewIframe').src = finalEmbedUrl;
            
            // Update Status Indicator
            const statusDot = document.querySelector('#statusIndicator div');
            const statusText = document.querySelector('#statusIndicator span');
            statusDot.className = "w-2 h-2 rounded-full bg-green-500 animate-pulse";
            statusText.textContent = "Loading Stream";
            statusText.className = "text-[10px] uppercase text-green-500 font-bold";
        }

        function copyLink(btn) {
            const copyText = document.getElementById("embed-url");
            if (!copyText.value) return;
            
            copyText.select();
            document.execCommand("copy");
            
            const originalText = btn.innerHTML;
            btn.innerHTML = "Copied!";
            btn.classList.replace('bg-cyan-600', 'bg-green-600');
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.replace('bg-green-600', 'bg-cyan-600');
            }, 2000);
        }

        function resetForm() {
            if(confirm("Clear all settings?")) {
                document.querySelectorAll('input').forEach(i => {
                    i.value = '';
                    i.classList.remove('border-cyan-500/50');
                });
                document.getElementById('logoOpacity').value = '90';
                document.getElementById('wmOpacity').value = '75';
                document.getElementById('previewIframe').src = 'about:blank';
                document.getElementById('previewPlaceholder').style.display = 'flex';
                
                const statusDot = document.querySelector('#statusIndicator div');
                const statusText = document.querySelector('#statusIndicator span');
                statusDot.className = "w-2 h-2 rounded-full bg-gray-600";
                statusText.textContent = "Standby";
                statusText.className = "text-[10px] uppercase text-gray-500";
            }
        }