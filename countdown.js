(function () {
  'use strict';

  var el = document.querySelector('[data-countdown]');
  if (!el) return;

  var startStr = el.getAttribute('data-target-start');
  var endStr = el.getAttribute('data-target-end');
  if (!startStr) return;

  var start = new Date(startStr);
  var end = endStr ? new Date(endStr) : null;
  if (isNaN(start.getTime())) return;

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function setHTML(parts) {
    // parts: array of [num, unitLabel] tuples
    var html = '';
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      html += '<span class="cd-num">' + p[0] + '</span><span class="cd-unit">' + p[1] + '</span>';
    }
    el.innerHTML = html;
  }

  function update() {
    var now = new Date();
    var diff = start.getTime() - now.getTime();

    if (diff > 0) {
      var totalSec = Math.floor(diff / 1000);
      var days = Math.floor(totalSec / 86400);
      var hours = Math.floor((totalSec % 86400) / 3600);
      var minutes = Math.floor((totalSec % 3600) / 60);
      var seconds = totalSec % 60;

      el.classList.remove('is-live', 'is-ended');

      if (days >= 1) {
        setHTML([[days, '日'], [pad(hours), '時間'], [pad(minutes), '分'], [pad(seconds), '秒']]);
      } else {
        setHTML([[pad(hours), '時間'], [pad(minutes), '分'], [pad(seconds), '秒']]);
      }
      return;
    }

    if (end && now < end) {
      el.classList.remove('is-ended');
      el.classList.add('is-live');
      el.textContent = '開催中 — Have fun!';
      return;
    }

    el.classList.remove('is-live');
    el.classList.add('is-ended');
    el.textContent = '終了しました。ありがとうございました。';
  }

  update();
  setInterval(update, 1000);
})();
