var $ = require('jquery');
window.$ = $;

$(document).ready(function(){

  // Animation hamburger
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $("#nav-left").slideToggle(1500);
    $("#nav-right").slideToggle(1500);
    $("#line1").toggleClass("line-white");
    $("#line2").toggleClass("line-white");
    $("#line1").toggleClass("line-black");
    $("#line2").toggleClass("line-black");
  });

  $(".btn-nav").click(function(){
    $(".hamburger").toggleClass("is-active");
    $("#line1").toggleClass("line-white");
    $("#line2").toggleClass("line-white");
    $("#line1").toggleClass("line-black");
    $("#line2").toggleClass("line-black");
    $("#nav-left").slideToggle();
    $("#nav-right").slideToggle();
  });


  $(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
        $('#footer-scroll').addClass('hidden');
    }
    if ($(window).scrollTop() <= 100) {
      $('#footer-scroll').removeClass('hidden');
  }
})
  
});