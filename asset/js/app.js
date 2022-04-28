"use strict";

$(document).ready(function () {
  $('.slider__box').slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    prevArrow: $('.slider-left-arrow'),
    nextArrow: $('.slider-right-arrow'),
    mobileFirst: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 979,
      settings: {
        slidesToShow: 3
      }
    }]
  });
  $('#calcTotal1, #calcTotal2').hide();
  $('#calcBtn').click(function () {
    event.preventDefault();
    var weight = $('#calcWeight').val();
    var height = $('#calcHeight').val() / 100;
    var BMI = Math.round(weight / Math.pow(height, 2));

    if (BMI > 25) {
      $('#calcTotal1, #calcTotal2, #calcTotal3').hide();
      $('#calcTotal3').show();
    }

    if (BMI > 18 && BMI < 25) {
      $('#calcTotal1, #calcTotal2, #calcTotal3').hide();
      $('#calcTotal2').show();
    }

    if (BMI < 18) {
      $('#calcTotal1, #calcTotal2, #calcTotal3').hide();
      $('#calcTotal1').show();
    }

    BMI = null;
  });
});