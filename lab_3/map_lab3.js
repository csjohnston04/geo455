var mymap = L.map("map").setView([46.65515269578446, 8.708739314558096], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3Nqb2huc3RvbjQyMSIsImEiOiJjbDBpZjYzNzMwMjFtM3JvYWpwamJkNTUzIn0.kAKegbwLXXbPh5YXW9BwGQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon11 = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon12 = L.icon({
    iconUrl: 'images/icon_12.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});






var zurich = L.marker([47.37707, 8.53956], {icon: myIcon1}).bindPopup("<b>Zurich").addTo(mymap);
var Lausanne = L.marker([46.51960001, 6.632219971], {icon: myIcon2}).bindPopup("<b>Lausanne").addTo(mymap);
var Geneva = L.marker([46.20832999, 6.142749981], {icon: myIcon3}).bindPopup("<b>Geneva").addTo(mymap);
var Montreux = L.marker([46.43169001, 6.910439982], {icon: myIcon4}).bindPopup("<b>Montreux").addTo(mymap);
var Chateau = L.marker([46.41414001, 6.927529982], {icon: myIcon5}).bindPopup("<b>Chateau").addTo(mymap);
var Vevey = L.marker([46.46227999, 6.84297003671], {icon: myIcon6}).bindPopup("<b>Vevey").addTo(mymap);
var Bern = L.marker([46.94842997, 7.440460014], {icon: myIcon7}).bindPopup("<b>Bern").addTo(mymap);
var Lucerne = L.marker([47.04953998, 8.304370002], {icon: myIcon8}).bindPopup("<b>Lucerne").addTo(mymap);
var Interlaken = L.marker([46.68450003, 7.85349002], {icon: myIcon9}).bindPopup("<b>Interlaken").addTo(mymap);
var Jungfrau = L.marker([46.53678, 7.96223000738], {icon: myIcon10}).bindPopup("<b>Jungfrau").addTo(mymap);
var Zermatt = L.marker([46.02415998, 7.748410039], {icon: myIcon11}).bindPopup("<b>Zermatt").addTo(mymap);
var Moritz = L.marker([46.49704997, 9.838159986], {icon: myIcon12}).bindPopup("<b>St. Moritz").addTo(mymap);