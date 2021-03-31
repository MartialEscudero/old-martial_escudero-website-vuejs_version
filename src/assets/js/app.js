var $ = require('jquery');
window.$ = $;

$(document).ready(function(){

  // Animation hamburger
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $("#nav-left").slideToggle(2000);
    $("#nav-right").slideToggle(2000);
    $("#line1").toggleClass("bg-gray-900");
    $("#line2").toggleClass("bg-gray-900");
  });

  $(".btn-nav").click(function(){
    $(".hamburger").toggleClass("is-active");
    $("#line1").toggleClass("bg-gray-900");
    $("#line2").toggleClass("bg-gray-900")
    $("#nav-left").slideToggle();
    $("#nav-right").slideToggle();
  });
  
});