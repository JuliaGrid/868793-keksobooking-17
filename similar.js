/*(function () {

  window.renderPinsOnMap = function() {
  window.pins = [];

  var successHandler = function (data) {
  pins = data;
  window.render(pins);
};

var errorHandler = function (errorMessage) {
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

  var URL = 'https://js.dump.academy/keksobooking/data';
  window.load(URL, successHandler, errorHandler);
}
})(); */
