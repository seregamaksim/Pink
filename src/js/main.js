$(".owl-carousel").owlCarousel({
    nav: false,
    loop: true,
    center: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
            center: true,
            loop: true
        },
        660: {
            items: 1,
            center: true,
            loop: true
        },
        1200: {
            items: 1,
            center: true,
            loop: true
        }
    }
});
$(".slider__arrow-right").on("click", function(){
    $(".owl-carousel").trigger("next.owl.carousel");
});
$(".slider__arrow-left").on("click", function(){
    $(".owl-carousel").trigger("prev.owl.carousel");
});

$(".main-nav__button").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("main-nav__button--active");
    $(".main-nav").toggleClass("main-nav--active");
    $(".main-nav__list").toggleClass("main-nav__list--active");
});