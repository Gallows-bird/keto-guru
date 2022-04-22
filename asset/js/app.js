"use strict";

$(document).ready(function () {
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