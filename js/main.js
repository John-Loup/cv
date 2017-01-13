// SCROLL TRIGGERED ITEMS
// --------------------------------------------

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        // Check
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// --------------------------------------------
// FIXED NAVBAR

var navBar = document.querySelector("nav");
var jlp = document.querySelector("#scrollTo");

function fixNav() {
    var windowHeight = document.body.clientHeight,
        currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

    navBar.className = (currentScroll >= windowHeight - navBar.offsetHeight) ? "fixed" : "";
    jlp.className = (currentScroll >= windowHeight - navBar.offsetHeight) ? "fixed2" : "";
}

addEventListener("scroll", fixNav, false);

// --------------------------------------------
// SMOOTH SCROLL

$('.scrollTo').on('click', function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 750);
    return false;
});

$('.scrollTo2').on('click', function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 750);
    return false;
});

$('#scrollTo').on('click', function () {
    var tgt2 = $(this).attr('href');
    $('html, body').animate({scrollTop: $(tgt2).offset().top}, 750);
    return false;
});

// --------------------------------------------
// PARALLAX

var introBG = document.querySelector('.parallax');

window.addEventListener('scroll', doParallax);
function doParallax() {
    var positionY = (window.pageYOffset) / 3;

    introBG.style.backgroundPosition = "center -" + positionY + "px";
}

// --------------------------------------------
// TEXTILLATE

$('.tlt').textillate({
    in: {
        effect: 'rollIn',
        shuffle: true,
        delay: 100
    }
});

// ---------------------------------------------
// SIDEBAR

var button = document.querySelector('.respMenu');
var sidebar = document.querySelector('#sidebar');
var sidebarOpen = false;

button.addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    sidebar.classList.add('sidebar');
    sidebarOpen = true;
});

document.body.addEventListener('click', function () {
    if (sidebarOpen) {
        sidebar.classList.remove('sidebar');
        sidebarOpen = false;
    }
});
