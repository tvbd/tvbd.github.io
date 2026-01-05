// Initialize Clappr player
    var player = new Clappr.Player({
        source: "F92YWxIZTO0UOezeus/fet-1/playlist.m3u8",
        parentId: "#player",
        autoPlay: true,
        mute: false,
        height: '100%',
        width: '100%',
        disableVideoTagContextMenu: true,
    });

    // Function to change channel with retry logic
    function changeChannel(url, channelCard) {
        const overlayMessage = document.getElementById('overlay-message');
        overlayMessage.textContent = '১০ সেকেন্ড অপেক্ষা করুন চ্যানেল টি চালু হচ্ছে......';
        overlayMessage.style.display = 'flex';

        player.load(url);

        let streamStarted = false;
        const maxRetryDuration = 60000; // 60 seconds
        const retryStartTime = Date.now();

        // Remove previous listeners to avoid stacking
        player.off(Clappr.Events.PLAYER_ERROR);
        player.off(Clappr.Events.PLAYER_PLAY);

        // On successful play
        player.once(Clappr.Events.PLAYER_PLAY, function () {
            streamStarted = true;
            overlayMessage.style.display = 'none';
        });

        // On error, retry for 60 seconds
        player.on(Clappr.Events.PLAYER_ERROR, function (error) {
            if (streamStarted) return;

            const elapsed = Date.now() - retryStartTime;
            if (elapsed < maxRetryDuration) {
                console.warn("Stream error, retrying...", error);
                setTimeout(() => player.load(url), 2000); // retry every 2s
            } else {
                overlayMessage.textContent = 'Error: Stream not available. Please try another channel.';
            }
        });

        // Call backend to notify play attempt
        const streamName = url.split('/')[3];
        fetch(`http://100.100.100.100/play-channel/${streamName}`)
            .then(response => response.json())
            .then(data => console.log("Play-channel API response:", data))
            .catch(error => console.error("Error calling play-channel API:", error));

        // Highlight the active channel card
        document.querySelectorAll('.channel-card').forEach(card => {
            card.classList.remove('active');
        });
        channelCard.classList.add('active');

        // Scroll to selected card
        channelCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Scrollable tab setup
    function setupTabScrolling() {
        const tabsContainer = document.querySelector('.category-tabs-scroll');
        const leftButton = document.querySelector('.scroll-button.left');
        const rightButton = document.querySelector('.scroll-button.right');

        leftButton.addEventListener('click', () => {
            tabsContainer.scrollBy({ left: -200, behavior: 'smooth' });
        });

        rightButton.addEventListener('click', () => {
            tabsContainer.scrollBy({ left: 200, behavior: 'smooth' });
        });

        tabsContainer.addEventListener('scroll', () => {
            const scrollLeft = tabsContainer.scrollLeft;
            const scrollWidth = tabsContainer.scrollWidth;
            const clientWidth = tabsContainer.clientWidth;

            leftButton.style.display = scrollLeft > 0 ? 'flex' : 'none';
            rightButton.style.display = scrollLeft < (scrollWidth - clientWidth - 1) ? 'flex' : 'none';
        });

        tabsContainer.dispatchEvent(new Event('scroll'));
    }

    // Show channels under selected category
    function showChannels(categoryName, channels) {
        const channelsContainer = document.getElementById('channels-container');
        channelsContainer.innerHTML = '';

        channels.forEach(channel => {
            const channelCard = document.createElement('div');
            channelCard.className = 'channel-card';
            channelCard.onclick = () => changeChannel(channel.url, channelCard);

            channelCard.innerHTML = `
                <img src="${channel.image}" alt="${channel.channel_name}">
                <div class="channel-info">
                    <div class="channel-name">${channel.channel_name}</div>
                    <div class="channel-category">${categoryName}</div>
                </div>
            `;

            channelsContainer.appendChild(channelCard);
        });

        // Auto-select the first channel
        if (channels.length > 0) {
            const firstChannelCard = channelsContainer.querySelector('.channel-card');
            changeChannel(channels[0].url, firstChannelCard);
        }
    }

    // Fetch categories and channels
    fetch('http://103.60.204.26/tv-server')
        .then(response => response.json())
        .then(data => {
            const categoryTabs = document.getElementById('category-tabs');
            let firstCategory = true;

            for (const category in data) {
                if (data.hasOwnProperty(category)) {
                    const tab = document.createElement('div');
                    tab.className = 'category-tab';
                    if (firstCategory) {
                        tab.classList.add('active');
                        firstCategory = false;
                    }
                    tab.textContent = category.charAt(0).toUpperCase() + category.slice(1);

                    tab.addEventListener('click', function () {
                        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                        this.classList.add('active');
                        showChannels(category, data[category]);
                    });

                    categoryTabs.appendChild(tab);
                }
            }

            // Auto-select first category
            if (Object.keys(data).length > 0) {
                const firstCategoryKey = Object.keys(data)[0];
                showChannels(firstCategoryKey, data[firstCategoryKey]);
            }

            setupTabScrolling();
        })
        .catch(error => {
            console.error('Error fetching playlist:', error);
            document.getElementById('channels-container').innerHTML =
                '<div style="padding: 20px; text-align: center; color: #606060;">Error loading channels. Please try again later.</div>';
        });