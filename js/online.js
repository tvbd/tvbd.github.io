function sc_online_t(id, label, fcolor) {
    var info;
    var d = document;
    var ref =  "" + d.referrer;
    var url =  "" + window.location;
    ref = ref.substring(0, 600);
    url = url.substring(0, 300);

    if (encodeURIComponent) {
        info = '&ua=' + encodeURIComponent(navigator.userAgent);
        info = info + '&url=' + encodeURIComponent(url);
        info = info + '&ref=' + encodeURIComponent(ref);
    } else {
        info = '&ua=' + escape(navigator.userAgent);
        info = info + '&url=' + escape(url);
        info = info + '&ref=' + escape(ref);
    }

    info = info + '&sw=' + screen.width;
    info = info + '&sh=' + screen.height;
    info = info + '&rand=' + Math.round(100 * Math.random());
    info = info + '&label=' + label;
    info = info + '&fcolor=' + fcolor;

    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = "async";
    ga.src = "//service.supercounters.com/fc.php?id=" + id + "&w=1&v=1" + info;
	var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(ga, a);
}

function sc_onlinetext(id, out) {
    var a = document.createElement("a");
    
    
    
    a.innerHTML = out;

    ct_insert(a, "supercounters.com/ssl/online_t.js");
}

function ct_insert(c, d) {
    var a = document.getElementsByTagName("script");
    for (var b = 0; b < a.length; b++) {
        if (a[b].src.indexOf(d) > 0) {		
            a[b].parentNode.insertBefore(c, a[b].nextSibling)
        }
    }
}
