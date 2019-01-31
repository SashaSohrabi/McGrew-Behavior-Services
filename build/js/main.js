"use strict";

// Hamburger Menu
$(function () {
  $("#dl-menu").dlmenu({
    animationClasses: {
      classin: "dl-animate-in-5",
      classout: "dl-animate-out-5"
    }
  });
});
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
});