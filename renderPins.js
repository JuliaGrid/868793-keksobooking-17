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

var errorHandler = function (errorMessage) {
  /*var fragment = document.createDocumentFragment();
  fragment.appendChild(errorTemplate);
  map.appendChild(fragment);*/

  var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: #f0f0eb; border: 1px solid #dededa';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '24px';

    node.textContent = "Ближайшие обявления не загружены. Ошибка: "
    + errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
};

  window.load(successHandler, errorHandler);
};
})();
