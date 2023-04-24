$(".hambergur").on("click", () => {
  $(".fullscreen").removeClass("reverse_anim").toggleClass("active");
});

$(".close").on("click", () => {
  $(".fullscreen").toggleClass("reverse_anim");
});

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header__top").addClass("nav__active");
    } else {
      $(".header__top").removeClass("nav__active");
    }
  });
});
AOS.init({
  once: true,
});

console.log("testing");
$('.center').slick({
  dots: true,
  centerMode: false,
  infinite: true,
  slidesToShow: 4,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
]
});