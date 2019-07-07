$.ajaxSetup({cache : false});

if((bowser.opera && bowser.version < 15) ||
    (bowser.msie && bowser.version < 10)) {
    $('body').html('Your Browser is not supported, please use a modern browser');
}
var Cookie = {
    remove : function (cookieName) {
        document.cookie = cookieName+'=; expires='+new Date().toGMTString();
    },

    set : function (cookieName, cookieValue, seconds) {
        document.cookie = cookieName+'='+cookieValue+'; expires='+new Date(Date.now()+(seconds*1000)).toGMTString();
    },

    get : function (cookieName) {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].replace(/^\s+|\s+$/gm,'');;
            var cookieParts = cookie.split('=');
            if((cookieParts[0] == cookieName) && (cookieParts[1] != undefined)){
                return cookieParts[1];
            }
        }
    }
}

var App = {};

App.currentTVGuide = [];
App.selectedChannel = undefined;
App.tvGuideIndex = undefined;

App.setDisplayedEPGProg = function(index) {
    App.tvGuideIndex = index;
    var prog = App.currentTVGuide[index];
    console.log(prog.images);
    var startDate = new Date(prog.startdatetime * 1000);
    var endDate = new Date(prog.enddatetime * 1000);

    var startMinutes = startDate.getMinutes();
    if(startMinutes < 10) startMinutes = '0' + startMinutes;
    var endMinutes = endDate.getMinutes();
    if(endMinutes < 10) endMinutes = '0' + endMinutes;

    $('.epg-program-name').text(prog.programme_name);
    $('.epg-program-synopsis').text(prog.programme_description);
    $('.epg-program-times').text(startDate.getHours() + ':' + startMinutes + ' - ' + endDate.getHours() + ':' + endMinutes);

   
    if(prog.images[0] !== undefined) {
        $('.epg-program-image-container').show();
        $('.epg-text').removeClass('noimage');
        $('.epg-program-image').attr('src', prog.images[0].url);
    } else {
        $('.epg-text').addClass('noimage');
        $('.epg-program-image-container').hide();
    }

    if(index === 0) {
        $('.epg-nav-button.prev').hide();
    } else {
        $('.epg-nav-button.prev').show();
    } 

    if(index === (App.currentTVGuide.length - 1)){
        $('.epg-nav-button.next').hide();
    } else {
        $('.epg-nav-button.next').show();
    }

    



};


App.Filmon = (function() {

    var session_key;
    var session_key_time = 0;

    var startSession = function(cb) {
        get('init', function(data) {
            console.log(data);
            session_key = data.session_key;
            session_key_time = Date.now();
            cb();
        });
        return;
    }

    var sendRequest = function(path, cb) {
        data = {};
        if(session_key !== undefined)
            data.session_key = session_key;

        $.get('http://www.filmon.com/tv/api/' + path, data, cb, 'json');
    };

    var get = function(path, cb) {
        console.log(Date.now() - session_key_time);
        if((session_key === undefined || (Date.now() - session_key_time) >= 200000)
            && path !== 'init'
        ) {
            startSession(function() {
                sendRequest(path, cb);
            });
        } else {
            sendRequest(path, cb);
        }
    };

    return {

        get : function(path, cb) {              
            get(path, cb);
        }

    };



})();

(function(){

    $('.channel-group-toggle').on('click', function(e){
        e.preventDefault();
        var cl = $(this).parent().find('.channel-list'); 
        cl.slideToggle();
        $('.channel-list').not(cl).slideUp(0);
        $('html, body').animate({
                scrollTop: $(this).offset().top
        }, 1000);
    });

    $('.channel-list-link').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        $('.epg-container').hide();
        App.selectedChannel = $this;
        App.tvGuideIndex = undefined;
        var scrolling = " scrolling=";
        var style = " style=";
        var isMobile = window.matchMedia("(max-width: 800px)").matches;
        $('.selected').removeClass('selected');
        $this.parent().addClass('selected');
        if(window.location.pathname !== 'http://livesports-server.co/') {
            document.title = $this.text();

        }
        console.log($('.stream-container').html());
        if(($.trim($('.stream-container').html()) !== "") || isMobile) {
            history.replaceState({}, document.title, $this.attr('href'));
        }

        scrolling += (($(this).data('provider-id') === 2) && isMobile) ?  '"auto" ' : "no ";
        style += (($(this).data('provider-id') === 2) && isMobile) ?  '"height:400px;" ' : '""';
        $('.stream-container').removeClass('epg-player');
        $('.channel-watch-container .window-bar-icon').attr('src', $(this).find('.channel-listing-icon').attr('src'));
        $('.channel-watch-container .window-bar-title').text($this.find('.channel-name').text());
        $('.channel-watch-container .stream-container').html('<iframe allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen ' + style + scrolling + ' src="'+ $this.data('channel-location')+'"></iframe>');
        $('.channel-watch-container').show();


        if($(this).data('provider-id') === 1) {
            
            App.Filmon.get('tvguide/' + $(this).data('filmon-id'), function(data) {
                App.currentTVGuide = [];
                var now = Date.now();

                $.each(data, function(key, value) {
                    
                    if(App.currentTVGuide.length >= 10)
                        return false;

                    if((value.enddatetime * 1000) > now) {
                        App.currentTVGuide.push(value);

                    }
                });

                if(App.currentTVGuide[0] !== undefined) {
                    App.setDisplayedEPGProg(0);

                    if((Cookie.get('hideEpg') === undefined) || isMobile) {
                        $('.stream-container').addClass('epg-player');
                        $('.epg-container').show();
                    } else {
                        $('.epg-show-button').show();
                    }
                } 


            });
        } else {
            $('.epg-show-button').hide();
        }
            
        

    });


    $('.epg-nav-button.change').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('prev')) {
            App.setDisplayedEPGProg(App.tvGuideIndex - 1);
        } else {
            App.setDisplayedEPGProg(App.tvGuideIndex + 1);
        }
    });

    $('.channel-watch-container .window-bar-close').on('click', function(e) {
        e.preventDefault();
        $('.channel-watch-container .stream-container').html("");
        $('.channel-watch-container').hide();
    });

    $('.epg-show-button').click(function(e) {
        e.preventDefault();
        $(this).hide();
        Cookie.remove('hideEpg');
        $('.stream-container').addClass('epg-player');
        $('.epg-container').show();
        $('.stream-container').html($('.stream-container').html());
    });

    $('.epg-nav-button.toggle').on('click', function(e) {

        e.preventDefault();
        Cookie.set('hideEpg', '1', 86400);
        $('.stream-container').removeClass('epg-player');
        $('.stream-container').html($('.stream-container').html());
        $('.epg-container').hide();
        $('.epg-show-button').show().css('display', 'block');
    });

    var isHome = (window.location.pathname === 'http://livesports-server.co/');
    var isMobile = window.matchMedia("(max-width: 800px)").matches;
    if(!(isMobile && isHome)){
        var selectedLink = $('.selected').find('.channel-list-link').click();
        $('.selected').parent().slideDown(1500, function() {
            $('html, body').animate({
                    scrollTop: selectedLink.offset().top - 30
            }, 2000);
        });
    }
})();




