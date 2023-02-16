// Create custom popups with images
var greatwallPopup = "Great Wall of China<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20090529_Great_Wall_8185.jpg/256px-20090529_Great_Wall_8185.jpg' alt='great wall wiki' width='150px'/>";

var ChichenItzaPopup = "Chichen-Itza<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/003_El_Castillo_o_templo_de_Kukulkan._Chich%C3%A9n_Itz%C3%A1%2C_M%C3%A9xico._MPLC.jpg/256px-003_El_Castillo_o_templo_de_Kukulkan._Chich%C3%A9n_Itz%C3%A1%2C_M%C3%A9xico._MPLC.jpg' alt='Chichen-Itza wiki' width='150px'/>";

var PetraPopup = "Petra<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/The_Monastery%2C_Petra%2C_Jordan8.jpg/256px-The_Monastery%2C_Petra%2C_Jordan8.jpg' alt='Petra wiki' width='150px'/>";

var MachuPichuPopup = "Machu Pichu<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/256px-Machu_Picchu%2C_Peru.jpg' alt='MachuPichu wiki' width='150px'/>";

var ChristtheRedeemerPopup = "Christ the Redeemer<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg/256px-Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg' alt='Christ the Redeemer wiki' width='150px'/>";

var ColosseumPopup = "Colosseum<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg/256px-Colosseum_in_Rome-April_2007-1-_copie_2B.jpg' alt='Colosseum wiki' width='150px'/>";

var TajMahalPopup = "Taj Mahal<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/256px-Taj-Mahal.jpg' alt='Taj Mahal wiki' width='150px'/>";

var customOptions ={'maxWidth': '150','className' : 'custom'};

// Set up landmark variables and individual landmarks
var landmarks = L.layerGroup();

var greatwall = L.marker([40.43208734303398, 116.570439270903]).bindPopup(greatwallPopup, customOptions).addTo(landmarks);

var Chichen = L.marker([20.6793437423211, -88.56829451227937]).bindPopup(ChichenItzaPopup, customOptions).addTo(landmarks);

var Petra = L.marker([30.328713676465735, 35.44444802834926]).bindPopup(PetraPopup, customOptions).addTo(landmarks);

var Machu = L.marker([-13.162932251747211, -72.54500581780444]).bindPopup(MachuPichuPopup, customOptions).addTo(landmarks);

var Christ = L.marker([22.951728275037908, -43.210412100446604]).bindPopup(ChristtheRedeemerPopup, customOptions).addTo(landmarks);

var Coll = L.marker([41.89040186252818, 12.492252355598225]).bindPopup(ColosseumPopup, customOptions).addTo(landmarks);

var Taj = L.marker([27.175354762373193, 78.04214219760772]).bindPopup(TajMahalPopup, customOptions).addTo(landmarks);





//Set up the baselayers and WMS layer

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
});

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});

var topo = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'SRTM30-Colored-Hillshade'
});

//Create the map variable

var mymap = L.map("map", {
    center: [6.794952075439587, 20.91148703911037], 
    zoom: 3,
    layers: [grayscale, landmarks]});

// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
    "Hillshade": topo,
    };

var overlays = {'Landmarks': landmarks};

//Create the menu
 
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);
