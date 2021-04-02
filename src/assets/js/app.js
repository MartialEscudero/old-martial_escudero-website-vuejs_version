var $ = require('jquery');
window.$ = $;
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

$(document).ready(function(){

  // Animation hamburger
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".logo").toggleClass("hidden");
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