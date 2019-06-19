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

var renderPins = function (pin){
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
