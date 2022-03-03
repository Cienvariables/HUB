$(document).ready(function () {
    // detectar scroll
    $(window).scroll(function () {
        var scroll = $ ("html").scrollTop();
        if (scroll > 140) {
            $("header").addClass("bGrey");
        } else {
            $("header").removeClass("bGrey");
        }
    })
})


