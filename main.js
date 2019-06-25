'use strict';

var map = document.querySelector('.map');
var mapPin = document.querySelector('.map__pin--main');
var adForm = document.querySelector('.ad-form');
var address = document.querySelector('#address');
var coordinates = mapPin.getBoundingClientRect();

var pinsTemplate = document.querySelector('#pin')
.content;

var pins = [
  {
    author: {
      avatar: 'img/avatars/user01.png'
    },
    offer: {
      type: 'palace'
    },
    location: {
      x: '130px',
      y: '420px'
    }
  },

  {
    author: {
      avatar: 'img/avatars/user02.png'
    },
    offer: {
      type: 'flat'
    },
    location: {
      x: '205px',
      y: '210px'
    }
  },

  {
    author: {
      avatar: 'img/avatars/user03.png'
    },
    offer: {
      type: 'house'
    },
    location: {
      x: '280px',
      y: '435px'
    }
  },

  {
    author: {
      avatar: 'img/avatars/user04.png'
    },
    offer: {
      type: 'bungalo'
    },
    location: {
      x: '490px',
      y: '510px'
    }
  },

  {
    author: {
      avatar: 'img/avatars/user05.png'
    },
    offer: {
      type: 'flat'
    },
    location: {
      x: '85px',
      y: '575px'
    }
  },

  {
    author: {
      avatar: 'img/avatars/user06.png'
    },
    offer: {
      type: 'house'
    },
    location: {
      x: '240px',
      y: '575px'
    }
  },

  {
    author: {
      avatar: 'img/avatars/user07.png'
    },
    offer: {
      type: 'bungalo'
    },
    location: {
      x: '390px',
      y: '195px'
    }
  },

  {
    author: {
      avatar: 'img/avatars/user08.png'
    },
    offer: {
      type: 'palace'
    },
    location: {
      x: '430px',
      y: '390px'
    }
  }
]


var mapOpen = function() {
  map.classList.remove('map--faded');
}

var formEnable = function() {
  adForm.classList.remove('ad-form--disabled');
}

var coordinatesPut = function() {
  address.value = coordinates.left + ", " + coordinates.bottom;
}

mapPin.addEventListener('click', function() {
  mapOpen();
  formEnable();
  coordinatesPut();
});

var renderPins = function (pin) {
  var pinElement = pinsTemplate.cloneNode(true);

  pinElement.querySelector('img').src = pin.author.avatar;
  pinElement.querySelector('img').alt = pin.offer.type;
  pinElement.querySelector('button').style.left = pin.location.x;
  pinElement.querySelector('button').style.top = pin.location.y;

  return pinElement;
}



var fragment = document.createDocumentFragment();
for (var i = 0; i < pins.length; i++){
  fragment.appendChild(renderPins(pins[i]));
}

map.appendChild(fragment);


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
