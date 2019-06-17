 var mapfaded = document.querySelector('.map--faded');

mapfaded.classList.remove("map--faded");

var map = document.querySelector('.map');


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
      x: '200px',
      y: '150px'
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
      x: '150px',
      y: '250px'
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
      x: '200px',
      y: '150px'
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
      x: '400px',
      y: '400px'
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
      x: '350px',
      y: '550px'
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
      x: '50px',
      y: '500px'
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
      x: '300px',
      y: '570px'
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
      x: '460px',
      y: '150px'
    }
  }
]



var renderPins = function (pin){
  var pinElement = pinsTemplate.cloneNode(true);

  pinElement.querySelector('img').src = pin.author.avatar;
  pinElement.querySelector('button').style.left = pin.location.x;
  pinElement.querySelector('button').style.top = pin.location.y;

  return pinElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < pins.length; i++){
  fragment.appendChild(renderPins(pins[i]));
}

map.appendChild(fragment);
