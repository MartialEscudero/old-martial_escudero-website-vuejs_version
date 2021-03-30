var $ = require('jquery');
window.$ = $;

$(document).ready(function(){

  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });

});