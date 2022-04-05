$(document).ready(function() {
    $("#btn1").click(function(){
        $("#splasher1").show();
    });
    $("#btn2").click(function(){
        $("#splasher1").hide();
    });
    $("#btn3").click(function(){
        $("#splasher2").fadeIn();
    });
    $("#btn4").click(function(){
        $("#splasher2").fadeOut();
    });
});

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});



//Create the map variable

var mymap = L.map("map", {
    center: [37, -95], 
    zoom: 4,
    layers: [grayscale,]});

// Create menu items
var baseLayers = {
    'Grayscale': grayscale
    
    };


var myIcon = L.icon({
    iconUrl:'myIcon.png',
    iconSize:[20, 20],
    iconAnchor:[2.5, 2.5],
    popupAnchor:[0, -11],
});

var cities = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Major_Cities/FeatureServer/0',
    pointToLayer: function (geojson, latlng) {
            return L.marker(latlng, {
              icon: myIcon
            });
          }
        }).addTo(mymap);



cities.bindPopup(function (layer) {
        return L.Util.template(
          "<p><strong>{NAME}</strong>, {ST}</p>",
          layer.feature.properties
        );
      });

var wildfireRisk = L.esri.dynamicMapLayer({
    url: 'https://maps7.arcgisonline.com/arcgis/rest/services/USDA_USFS_2014_Wildfire_Hazard_Potential/MapServer',
    // server response content type can be either 'json' (default) or 'image'
    f: 'image'
  }).addTo(mymap);
wildfireRisk.bindPopup(function (error, featureCollection) {
    if (error || featureCollection.features.length === 0) {
      return false;
    } else {
      return 'Risk Level: ' + featureCollection.features[0].properties.CLASS_DESC;
    }
  });
var overlays = {'Cities': cities,
               'wildfireRisk': wildfireRisk };
var layerControl = L.control.layers(grayscale, overlays, {collapsed: false}).addTo(mymap);