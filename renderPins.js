'use strict';

(function () {
var pinsTemplate = document.querySelector('#pin')
.content;
var errorTemplate = document.querySelector('#error')
.content;



var renderPins = function (pin) {
  var pinElement = pinsTemplate.cloneNode(true);

  pinElement.querySelector('img').src = pin.author.avatar;
  pinElement.querySelector('img').alt = pin.offer.type;
  pinElement.querySelector('button').style.left = pin.location.x + 'px';
  pinElement.querySelector('button').style.top = pin.location.y + 'px';

  return pinElement;
}

  window.renderPinsOnMap = function () {
  var successHandler = function (pins) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < pins.length; i++){
    fragment.appendChild(renderPins(pins[i]));
  }

  map.appendChild(fragment);
};

var errorHandler = function () {
  var fragment = document.createDocumentFragment();
  fragment.appendChild(errorTemplate);
  map.appendChild(fragment);
};

  window.load(successHandler, errorHandler);
};
})();
