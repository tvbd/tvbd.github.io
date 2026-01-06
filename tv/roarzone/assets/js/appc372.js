document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('channelSearch');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const channels = document.querySelectorAll('.channel-card');
    const playerWrapper = document.getElementById('playerWrapper');
    const playerFrame = document.getElementById('playerFrame');

    // --- Search Functionality ---
    searchInput.addEventListener('input', function (e) {
        const term = e.target.value.toLowerCase();
        filterChannels(term, getCurrentCategory());
    });

    // --- Category Filtering ---
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            filterChannels(searchInput.value.toLowerCase(), category);
        });
    });

    function getCurrentCategory() {
        const activeBtn = document.querySelector('.category-btn.active');
        return activeBtn ? activeBtn.dataset.category : '*';
    }

    function filterChannels(searchTerm, category) {
        const favorites = JSON.parse(localStorage.getItem('tv_favorites') || '[]');

        channels.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const tags = card.dataset.tags.toLowerCase();
            const stream = card.dataset.stream;

            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = category === '*' ||
                (category === 'favorites' ? favorites.includes(stream) : tags.includes(category.replace('.', '')));

            if (matchesSearch && matchesCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // --- Player Interaction ---
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    window.playChannel = function (streamName) {
        // FIRST: Scroll to top immediately (before loading)
        window.scrollTo({ top: 0, behavior: 'instant' });

        // THEN: Load the stream
        playerFrame.src = 'player.html?stream=' + streamName;

        // Only send unmute on desktop, not mobile
        // Mobile plays muted to prevent pause issues
        if (!isMobile) {
            playerFrame.onload = function () {
                setTimeout(function () {
                    try {
                        playerFrame.contentWindow.postMessage({ action: 'unmute' }, '*');
                    } catch (e) {
                        console.log("Could not send unmute message:", e);
                    }
                }, 500);
            };
        }
    };

    // --- PIP on Scroll (Desktop Only) ---
    if (!isMobile) {
        let pipActivated = false;
        window.addEventListener('scroll', () => {
            const triggerPoint = 400;
            const isPlaying = playerFrame.getAttribute('src') && playerFrame.getAttribute('src') !== '';

            if (window.scrollY > triggerPoint && isPlaying && !pipActivated) {
                try {
                    playerFrame.contentWindow.postMessage({ action: 'enterPIP' }, '*');
                    pipActivated = true;
                } catch (e) {
                    console.log("Could not send PIP message:", e);
                }
            } else if (window.scrollY <= triggerPoint && pipActivated) {
                try {
                    playerFrame.contentWindow.postMessage({ action: 'exitPIP' }, '*');
                    pipActivated = false;
                } catch (e) {
                    console.log("Could not exit PIP:", e);
                }
            }
        });
    }
});
