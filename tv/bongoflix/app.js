 window.addEventListener('load', function() {
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 600);
        }, 1500); 
    });

    function openTab(evt, catId) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        evt.currentTarget.classList.add('active');
        document.querySelectorAll('.channel-grid').forEach(g => g.classList.remove('active'));
        document.getElementById(catId).classList.add('active');
    }

    function loadChannel(id, el) {
        document.querySelectorAll('.channel-card').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
        document.getElementById('tvPlayer').src = "https://tv.roarzone.info/player.php?stream=edge2/" + id;
    }

    window.onload = function() {
        setTimeout(() => {
            const firstChannel = document.querySelector('.item-box');
            if(firstChannel) firstChannel.click();
        }, 1000);
    };