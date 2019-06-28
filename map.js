'use strict';

(function () {
var adForm = document.querySelector('.ad-form');

var mapOpen = function() {
  map.classList.remove('map--faded');
}

var formEnable = function() {
  adForm.classList.remove('ad-form--disabled');
}

mapPin.addEventListener('click', function() {
  mapOpen();
  formEnable();
});
})();
