var $ = jQuery; 
 function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#beez_fixed_nw').offset().top;
    if (window_top > div_top) {
        $('#beez_fixed').addClass('fix');
        $('#beez_fixed_nw').height($('#beez_fixed').outerHeight());
    } else {
        $('#beez_fixed').removeClass('fix');
        $('#beez_fixed_nw').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});