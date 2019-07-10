'use strict';

(function() {
window.map = document.querySelector('.map');
window.mapPin = document.querySelector('.map__pin--main');

var address = document.querySelector('#address');

var coordinatesPut = function() {
  var coordinates = mapPin.getBoundingClientRect();
  address.value = coordinates.left + ", " + coordinates.bottom;
}

var typeOptions = document.querySelector('#type');

var changePrice = function() {
  var selectedType = typeOptions.options[typeOptions.selectedIndex].value;
  if (selectedType === 'bungalo') {
    document.querySelector('#price').min = '0';
    document.querySelector('#price').placeholder = '0';
  }else if (selectedType === 'flat'){
    document.querySelector('#price').min = '1000';
    document.querySelector('#price').placeholder = '1000';
  }else if (selectedType === 'house'){
    document.querySelector('#price').min = '5000';
    document.querySelector('#price').placeholder = '5000';
  }else if (selectedType === 'palace'){
    document.querySelector('#price').min = '10000';
    document.querySelector('#price').placeholder = '10000';
  }
}

typeOptions.addEventListener('change', function() {
  changePrice();
});

var timeIn = document.querySelector('#timein');
var timeOut = document.querySelector('#timeout');

var changeTimeOut = function() {
    timeOut.options[timeIn.selectedIndex].selected = true;
}

var changeTimeIn = function() {
    timeIn.options[timeOut.selectedIndex].selected = true;
}

timeIn.addEventListener('change', function() {
  changeTimeOut();
});

timeOut.addEventListener('change', function() {
  changeTimeIn();
});

var imgPin = mapPin.querySelector('img');

mapPin.addEventListener('mousedown', function(evt) {

  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    mapPin.style.top = (mapPin.offsetTop - shift.y) + 'px';
    mapPin.style.left = (mapPin.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
   upEvt.preventDefault();

   coordinatesPut();

   document.removeEventListener('mousemove', onMouseMove);
   document.removeEventListener('mouseup', onMouseUp);
 };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
})
})();
