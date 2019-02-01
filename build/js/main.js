"use strict";

// Hamburger Menu
$(function () {
  $("#dl-menu").dlmenu({
    animationClasses: {
      classin: "dl-animate-in-5",
      classout: "dl-animate-out-5"
    }
  });
}); // Slick Slider

$(document).ready(function () {
  $(".slider__box").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: false,
    prevArrow: false,
    fade: true,
    cssEase: "linear",
    nextArrow: false
  });
}); // Animations on scroll

$(".js--wp-1").waypoint(function (direction) {
  $(".js--wp-1").addClass("animated fadeIn");
}, {
  offset: "50%"
});
$(".js--wp-2").waypoint(function (direction) {
  $(".js--wp-2").addClass("animated pulse");
}, {
  offset: "50%"
});
$(".js--wp-3").waypoint(function (direction) {
  $(".js--wp-3").addClass("animated fadeInUp");
}, {
  offset: "50%"
});