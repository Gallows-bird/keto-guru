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
  $('.inst__list').slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: $('.inst__slider-left-arrow'),
    nextArrow: $('.inst__slider-right-arrow'),
    mobileFirst: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        adaptiveHeight: true
      }
    }, {
      breakpoint: 979,
      settings: {
        slidesToShow: 3,
        adaptiveHeight: true
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
      $('#calcTotal1, #calcTotal2, #calcTotal3').fadeOut().promise().done(function () {
        $('#calcTotal3').fadeIn();
      });
    }

    if (BMI > 18 && BMI < 25) {
      $('#calcTotal1, #calcTotal2, #calcTotal3').fadeOut().promise().done(function () {
        $('#calcTotal2').fadeIn();
      });
    }

    if (BMI < 18) {
      $('#calcTotal1, #calcTotal2, #calcTotal3').fadeOut().promise().done(function () {
        $('#calcTotal1').fadeIn();
      });
    }

    BMI = null;
  });
  $(".components__tab-item").click(function () {
    if ($(this).hasClass('active')) {
      return;
    } else {
      $(this).text('-');
      $(this).addClass('active').siblings().removeClass('active').text('+');
      $('.components__item').removeClass('active').eq($(this).index()).addClass('active');
    }
  });
});