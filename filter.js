

(function () {
  var housingType = document.querySelector('#housing-type');

  window.updatePins = function (pins) {
  var sameTypePins = pins.filter(function (it) {
    if(housingType.options[housingType.selectedIndex].value != 'any')
    return it.offer.type === housingType.options[housingType.selectedIndex].value;
    else return pins
  });

  render(sameTypePins);
}

 housingType.addEventListener('change', function() {
  updatePins(pins);
 })

})();
