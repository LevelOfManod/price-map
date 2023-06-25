
var latitude = 48.806412;
var longitude = 3.074664;

var myMap = L.map('map').setView([latitude, longitude], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(myMap);

var latLong = [{
  "lat": latitude,
  "lng": longitude,
}];

var latLong2 = [{
  "lat": latitude,
  "lng": longitude,
}];

var latLong3 = [{
  "lat": latitude,
  "lng": longitude,
}];

var latLong4 = [{
  "lat": latitude,
  "lng": longitude,
}];

var latLong5 = [{
  "lat": latitude,
  "lng": longitude,
}];

var latLong6 = [{
  "lat": latitude,
  "lng": longitude,
}];

var latLong7 = [{
  "lat": latitude,
  "lng": longitude,
}];

var circle = L.circle(latLong[0], {
  color: 'rgba(0, 0, 0, 1)',
  fillColor: 'rgba(153, 204, 51, 0)',
  fillOpacity: 1,
  radius: 5000,
  weight: 1,
}).addTo(myMap);

var isClicked = false;
circle.on('click', function() {
  isClicked = !isClicked;
  if (isClicked) {
    document.querySelector('.z1').style.backgroundColor = 'rgba(153, 204, 51, 0.5)';
    document.querySelector('.z1').style.border = '1px solid rgba(0, 0, 0, 0.5)';
  } else {
    document.querySelector('.z1').style.backgroundColor = '';
    document.querySelector('.z1').style.border = '';
  }
});

circle.on('mouseover', function() {
  document.querySelector('.z1').classList.add('highlight');
});
circle.on('mouseout', function() {
  if (!isClicked) {
    document.querySelector('.z1').classList.remove('highlight');
  }
});





var circle2 = L.circle(latLong2[0], {
  color: 'rgba(0, 0, 0, 1)',
  fillColor: 'rgba(153, 204, 51, 0)',
  fillOpacity: 1,
  radius: 10000,
  weight: 1,
}).addTo(myMap);



var isClicked2 = false;
circle2.on('click', function() {
  isClicked2 = !isClicked2;
  if (isClicked2) {
    document.querySelector('.z2').style.backgroundColor = 'rgba(153, 204, 51, 0.5)';
    document.querySelector('.z2').style.border = '1px solid rgba(0, 0, 0, 0.5)';
  } else {
    document.querySelector('.z2').style.backgroundColor = '';
    document.querySelector('.z2').style.border = '';
  }
});
circle2.on('mouseover', function() {
  document.querySelector('.z2').classList.add('highlight');
});
circle2.on('mouseout', function() {
  document.querySelector('.z2').classList.remove('highlight');
});







var circle3 = L.circle(latLong3[0], {
  color: 'rgba(0, 0, 0, 1)',
  fillColor: 'rgba(153, 204, 51, 0)',
  fillOpacity: 1,
  radius: 15000,
  weight: 1,
}).addTo(myMap);

var isClicked3 = false;
circle3.on('click', function() {
  isClicked3 = !isClicked3;
  if (isClicked3) {
    document.querySelector('.z3').style.backgroundColor = 'rgba(153, 204, 51, 0.5)';
    document.querySelector('.z2').style.border = '1px solid rgba(0, 0, 0, 0.5)';
  } else {
    document.querySelector('.z3').style.backgroundColor = '';
    document.querySelector('.z3').style.border = '';
  }
});
circle3.on('mouseover', function() {
  document.querySelector('.z3').classList.add('highlight');
});
circle3.on('mouseout', function() {
  document.querySelector('.z3').classList.remove('highlight');
});

var circle4 = L.circle(latLong4[0], {
  color: 'rgba(0, 0, 0, 1)',
  fillColor: 'rgba(153, 204, 51, 0)',
  fillOpacity: 1,
  radius: 25000,
  weight: 1,
}).addTo(myMap);

var isClicked4 = false;
circle4.on('click', function() {
  isClicked4 = !isClicked4;
  if (isClicked4) {
    document.querySelector('.z4').style.backgroundColor = 'rgba(153, 204, 51, 0.5)';
    document.querySelector('.z4').style.border = '1px solid rgba(0, 0, 0, 0.5)';
  } else {
    document.querySelector('.z4').style.backgroundColor = '';
    document.querySelector('.z4').style.border = '';
  }
});
circle4.on('mouseover', function() {
  document.querySelector('.z4').classList.add('highlight');
});
circle4.on('mouseout', function() {
  document.querySelector('.z4').classList.remove('highlight');
});






var circle5 = L.circle(latLong5[0], {
  color: 'rgba(0, 0, 0, 1)',
  fillColor: 'rgba(153, 204, 51, 0)',
  fillOpacity: 1,
  radius: 35000,
  weight: 1,
}).addTo(myMap);

var isClicked5 = false;
circle5.on('click', function() {
  isClicked5 = !isClicked5;
  if (isClicked5) {
    document.querySelector('.z5').style.backgroundColor = 'rgba(153, 204, 51, 0.5)';
    document.querySelector('.z5').style.border = '1px solid rgba(0, 0, 0, 0.5)';
  } else {
    document.querySelector('.z5').style.backgroundColor = '';
    document.querySelector('.z5').style.border = '';
  }
});
circle5.on('mouseover', function() {
  document.querySelector('.z5').classList.add('highlight');
});
circle5.on('mouseout', function() {
  document.querySelector('.z5').classList.remove('highlight');
});







var circle6 = L.circle(latLong6[0], {
  color: 'rgba(0, 0, 0, 1)',
  fillColor: 'rgba(153, 204, 51, 0.3)',
  fillOpacity: 1,
  radius: 50000,
  weight: 1,
}).addTo(myMap);

var isClicked6 = false;
circle6.on('click', function() {
  isClicked6 = !isClicked6;
  if (isClicked6) {
    document.querySelector('.z6').style.backgroundColor = 'rgba(153, 204, 51, 0.5)';
    document.querySelector('.z6').style.border = '1px solid rgba(0, 0, 0, 0.5)';
  } else {
    document.querySelector('.z6').style.backgroundColor = '';
    document.querySelector('.z6').style.border = '';
  }
});
circle6.on('mouseover', function() {
  document.querySelector('.z6').classList.add('highlight');
});
circle6.on('mouseout', function() {
  document.querySelector('.z6').classList.remove('highlight');
});





var circle7 = L.circle(latLong6[0], {
  color: 'none',
  fillColor: 'rgba(153, 204, 51, 0.0)',
  fillOpacity: 1,
  radius: 100000000000000,
  weight: 1,
}).addTo(myMap);

var isClicked7 = false;
circle7.on('click', function() {
  isClicked7 = !isClicked7;
  if (isClicked7) {
    document.querySelector('.z7').style.backgroundColor = 'rgba(153, 204, 51, 0.5)';
    document.querySelector('.z7').style.border = '1px solid rgba(0, 0, 0, 0.5)';
  } else {
    document.querySelector('.z7').style.backgroundColor = '';
    document.querySelector('.z7').style.border = '';
  }
});
circle7.on('mouseover', function() {
  document.querySelector('.z7').classList.add('highlight');
});
circle7.on('mouseout', function() {
  document.querySelector('.z7').classList.remove('highlight');
});

circle6.bringToFront();
circle5.bringToFront();
circle4.bringToFront();
circle3.bringToFront();
circle2.bringToFront();
circle.bringToFront();

myMap.panTo([latitude, longitude]);