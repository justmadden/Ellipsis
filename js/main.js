$('.header-scroll').on('click',function () {
    var destination=$('.about').offset().top;
    $('body').animate({scrollTop:destination+50},1000);
})


$(window).load(function () {
  $(".loader").delay(400).fadeOut("slow");
  $(".header-text").animated("lightSpeedIn", "fadeOut");

  $(".header-caption").animated("lightSpeedIn", "fadeOut");
  $(".header-logo").animated("lightSpeedIn", "fadeIn");
  $(".service-content").animated("flipInY", "fadeIn");
  $(".about-content").animated("flipInY", "fadeIn");
  $(".whatwedo-item").animated("flipInY", "fadeIn");
  $(".contact-content").animated("flipInY", "fadeIn");
  //swing
});
