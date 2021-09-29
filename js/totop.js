$(window).scroll(function() {
    $(window).scrollTop() > $(window).height()*0.5 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});

$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 1000, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});

$("#homelogo").click(function() {
    $("html, body").animate({
        scrollTop: $(window).height()
    }, 1000, null);
    return false;
});

$("#main-navigation li a").on("click", function() {
    var p = this;
    $("#main-navigation li a").each(function() {
        this.color = this == p ? '#1fa0ae' : '#333';
    });
    console.log('click');
});