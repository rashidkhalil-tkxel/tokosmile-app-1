$(".hambergur").on("click", () => {
  $(".fullscreen").removeClass("reverse_anim").toggleClass("active");
});

$(".close").on("click", () => {
  $(".fullscreen").toggleClass("reverse_anim");
});
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
if (/windows phone/i.test(userAgent)) { $('body').addClass('windows'); }
else if (/android/i.test(userAgent)) { $('body').addClass('android'); }
else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  var ver = iOSversion();
  console.log("iOSversion",ver);
  localStorage.setItem("version",ver);
  if(ver == 'iOS 8 and up'){
    $('body').addClass('ios-7'); 
  }
   $('body').addClass('ios'); 
   $('body').addClass('ios-devices'); 
   console.log("ios")
  }

  function iOSversion() {
 
      if (window.indexedDB) { return 'iOS 8 and up'; }
      if (window.SpeechSynthesisUtterance) { return 'iOS 7'; }
      if (window.webkitAudioContext) { return 'iOS 6'; }
      if (window.matchMedia) { return 'iOS 5'; }
      if (window.history && 'pushState' in window.history) { return 'iOS 4'; }
      return 'iOS 3 or earlier';
    
  
    return 'Not an iOS device';
  }
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header__top").addClass("nav__active");
    } else {
      $(".header__top").removeClass("nav__active");
    }
  });
});
window.dispatchEvent(new Event('resize'));
// $('.carousel').carousel(0);
//  $('.carousel').carousel('pause');
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