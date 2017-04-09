$(document).ready(function() {
    // Dropdown
    // $('.dropdown-button').dropdown({
    //     inDuration: 300,
    //     outDuration: 225,
    //     constrain_width: false, // Does not change width of dropdown to that of the activator
    //     hover: false, // Activate on hover
    //     gutter: 0, // Spacing from edge
    //     belowOrigin: false // Displays dropdown below the button
    // });
    $('.dropdown-button').dropdown({
        hover: true,
        gutter: 0, // Spacing from edge
        belowOrigin: true
    });
});

// sticky navigation bar
if ($('body').has('navbar')) {
    var targetPos = $('#navigation').offset().top;

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > targetPos) {
            $('#navigation').addClass('fixed-nav');
        } else {
            $('#navigation').removeClass('fixed-nav');
        }
    });

    $(window).resize(function() {
        targetPos = $('#navigation').offset().top;
    });
}