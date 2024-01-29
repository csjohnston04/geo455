//Create the map variable

var mymap = L.map("map", {
    center: [44.404149979424794, -89.71446645123868], 
    zoom: 3
 
});

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1

}).addTo(mymap);






   
//set up icon variables







// Create custom popups with images

//datapoints
 coords = [
    [42.57421086971436, -87.81806516047004],
      [43.08527730681396, -87.89737607209247],
      [43.810743623347584, -91.23381281749492]
 ];

 coords1 = [
    [42.57421086971436, -87.81806516047004],
      [43.08527730681396, -87.89737607209247],
      [43.810743623347584, -91.23381281749492]
 ];

// Set up landmark variables and individual landmarks
var loc = L.layerGroup();

L.marker(coords[0]).addTo(loc);

L.marker(coords[1]).addTo(loc);

L.marker(coords[2]).addTo(loc);



loc.addTo(mymap);


//add lines

var line = L.polyline(coords, {color: "red", weight: 7}).bindPopup("Travel Path");
line.addTo(mymap);

//add scale bar
 L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap);




// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
     };

var overlays = {
    'Where ive lived':loc,
    'Travel Path':line,
};

//Create the menu
 
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);

//create minimap
var miniMap= new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'),{
                                  toggleDisplay: true,
                                  minimized: true,
                                  position: 'bottomleft'
                                   }).addTo(mymap);

var popup = L.popup();
function onMapclick(e){
    popup
    .setLatLng(e.latlng)
    .setContent(
    "You clicked the map at -<br>"+"<b>long:</b>" +e.latlng.lng+"<b>lat:</b>" +e.latlng.lat).openOn(mymap);}

mymap.addEventListener("click",onMapclick)
// Add Navigation Buttons
L.easyButton(('1 height=50%'), function(btn, map){
    map.setView(coords[0], 15);
}).addTo(mymap);
L.easyButton(('2 height=50%'), function(btn, map){
    map.setView(coords[1], 15);
}).addTo(mymap);
L.easyButton(('3 height=50%'), function(btn, map){
    map.setView(coords[2], 15);
}).addTo(mymap);
L.easyButton(('4 height=50%'), function(btn, map){
    map.setView(coords[3], 15);
}).addTo(mymap);
L.easyButton(('5 height=50%'), function(btn, map){
    map.setView(coords[4], 15);
}).addTo(mymap);
L.easyButton(('6 height=50%'), function(btn, map){
    map.setView(coords[5], 15);
}).addTo(mymap);
L.easyButton(('7 height=50%'), function(btn, map){
    map.setView(coords[6], 15);
}).addTo(mymap);

L.easyButton(('<img src="images/globe_icon.png", height=85%>'), function(btn, map){
    map.setView([6.794952075439587, 20.91148703911037], 3);
}).addTo(mymap);

// Make International Space Station (ISS) marker with a custom icon
  var issIcon = L.icon({
    iconUrl: 'images/iss200.png',
    iconSize: [80, 52],
    iconAnchor: [25, 16]
  });
  var marker = L.marker([0, 0], {icon: issIcon}).addTo(mymap);


// Call the ISS real time data URL
  var api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

  var firstTime = true;

// Update the Lat/long based on the updated reading everytime
  async function getISS() {
    var response = await fetch(api_url);
    var data = await response.json();
    var { latitude, longitude } = data;

// Change the marker location based on the updated reading but keep the map view in default center
    marker.setLatLng([latitude, longitude]);
    if (firstTime) {
      mymap.setView([6.794952075439587, 20.91148703911037], 3);
      firstTime = false;
    }
    document.getElementById('lat').textContent = latitude.toFixed(3);
    document.getElementById('lon').textContent = longitude.toFixed(3);
  }

  getISS();

  setInterval(getISS, 1000);
