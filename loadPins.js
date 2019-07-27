'use strict';

(function () {

  window.load = function (URL, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError(xhr.status);
      }
    });

    xhr.send();

  };
})();
