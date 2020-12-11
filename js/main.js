(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle'); // NodeList
  const $toggleBtn = document.getElementById('toggle-btn');

  $toggleBtn.addEventListener('click', function () {
    toggleElemennts();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      // Off toggle element
      offElements();
    }
  });

  function toggleElemennts() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }
})(window, document);
