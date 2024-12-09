
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('header').addClass("sticky");
        $('header').addClass("transition-transform");
        $('header').addClass("duration-900");
    }
    else {
        $('header').removeClass("sticky");
    }
})
