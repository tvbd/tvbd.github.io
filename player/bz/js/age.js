/*
 *  Copyright (c) 2013 Funny or Die, Inc.
 *  http://www.funnyordie.com
 *
 * https://github.com/funnyordie/videojs-ageGate/blob/master/LICENSE
 */

(function(window, videojs) {
  'use strict';
  var defaults = {
    minDate: null,
   
  },
  givenDate = null,

  ageGate = function(options) {
    var player = this,
        settings = videojs.mergeOptions(defaults, options),
        minDate = settings['minDate'],
        promptMessage = settings['promptMessage'],
        deniedMessage = settings['deniedMessage'],
        today = new Date();


    ageGate = {
      drawGate: function() {
        var gate = document.createElement('div');
        gate.id = 'vjs-age-gate';

        var title = document.createElement('h3');
        title.innerHTML = promptMessage;


        var days = document.createElement('select');
        days.id = 'vjs-age-gate-day';
        var day = document.createElement('option');
        day.text = 'DD';
        day.value = '';
        days.appendChild(day);
        for (var i = 1; i <= 31; i++) {
          day = document.createElement('option');
          day.value = i;
          day.text = i;
          days.appendChild(day);
        }

        var months = document.createElement('select');
        months.id = 'vjs-age-gate-month';
        var month = document.createElement('option');
        month.text = 'MM';
        month.value = '';
        months.appendChild(month);
        for (var i = 1; i <= 12; i++) {
          month = document.createElement('option');
          month.value = i;
          month.text = i;
          months.appendChild(month);
        }

        var years = document.createElement('select');
        years.id = 'vjs-age-gate-year';
        var year = document.createElement('option');
        year.text = 'YYYY';
        year.value = '';
        years.appendChild(year);
        for (var i = today.getFullYear(); i > 1900; i--) {
          year = document.createElement('option');
          year.value = i;
          year.text = i;
          years.appendChild(year);
        }

        var submit = document.createElement('input');
        submit.id = 'vjs-age-gate-submit';
        submit.type = 'submit';
        submit.value = 'ENTER';
        submit.onclick = function() {
          if (ageGate.validateFields()) {
            ageGate.setGivenDate();
            ageGate.verifyDate();
          }
        }

        var errorMessage = document.createElement('div');
        errorMessage.id = 'vjs-age-gate-error-message';


        gate.appendChild(title);
        gate.appendChild(errorMessage);
        gate.appendChild(months);
        gate.appendChild(days);
        gate.appendChild(years);
        gate.appendChild(submit);

        player.el().appendChild(gate);
      },
      validateFields: function() {
        if ((document.getElementById('vjs-age-gate-year').value === '') ||
            (document.getElementById('vjs-age-gate-month').value === '') ||
            (document.getElementById('vjs-age-gate-day').value === ''))
        {

          var error = document.getElementById('vjs-age-gate-error-message');
          error.style.display = 'block';
          return false;
        }
        return true;
      },
      setGivenDate: function() {
        if (givenDate === null)
          givenDate = new Date();

        givenDate.setFullYear(document.getElementById('vjs-age-gate-year').value, document.getElementById('vjs-age-gate-month').value, document.getElementById('vjs-age-gate-day').value);

        if (typeof window.localStorage !== 'undefined') {
          localStorage.setItem('givenDate', JSON.stringify(givenDate));
        }
      },
      verifyDate: function() {
        player.el().removeChild(document.getElementById('vjs-age-gate'));
        if (givenDate <= minDate) {
          player.play();
          return
        }

        var denied = document.createElement('div');
        denied.id = 'vjs-age-gate-fail-verification';

        var title = document.createElement('h4');
        title.innerHTML = deniedMessage;

        denied.appendChild(title);
        player.el().appendChild(denied);
      }
    }

    player.on('play', function() {
      if ((typeof minDate === 'undefined') || (minDate == null)) {
        return;
      }

      if ((givenDate === null) && (typeof window.localStorage !== 'undefined')) {
        var d = JSON.parse(localStorage.getItem('givenDate'));
        if (d !== null)
          givenDate = new Date(d);
      }

      if ((givenDate !== null) && (!isNaN(givenDate.getTime())) && (givenDate <= minDate)) {
        return;
      }

      player.pause();
      ageGate.drawGate();

    });
  }

  videojs.plugin('ageGate', ageGate);
}(window, window.videojs));
