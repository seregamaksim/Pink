$(".main-nav__button").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("main-nav__button--active");
    $(".main-nav").toggleClass("main-nav--active");
    $(".main-nav__list").toggleClass("main-nav__list--active");
});