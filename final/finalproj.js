$(document).ready(function() {
    $("#btn1").click(function(){
        $("#chart").show();
    });
    $("#btn2").click(function(){
        $("#chart").hide();
    });
    $("#btn3").click(function(){
        $("#splasher2").fadeIn();
    });
    $("#btn4").click(function(){
        $("#splasherr2").fadeOut();
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
    center: [10.48882027639122, 5.1028811094342392], 
    zoom: 2,
    layers: [grayscale,]});

// Create menu items

function getColor(value) {
    return value > 6.5 ? '#006d2c':
           value > 5 ? '#2ca25f':
            value > 2 ? '#66c2a4':
           value > 0 ? '#b2e2e2':
                         '#edf8fb';
}
function getColor1(value) {
    return value > 2 ? '#006d2c':
           value > 1.5 ? '#2ca25f':
            value > 1 ? '#66c2a4':
           value > 0 ? '#b2e2e2':
                         '#edf8fb';
}
function getColor2(value) {
    return value > 1.3 ? '#006d2c':
           value > 0.7 ? '#2ca25f':
            value > 0.2 ? '#66c2a4':
           value > 0 ? '#b2e2e2':
                         '#edf8fb';
}
function getColor3(value) {
    return value > 0.8? '#006d2c':
           value > 0.6 ? '#2ca25f':
            value > 0.4 ? '#66c2a4':
           value > 0 ? '#b2e2e2':
                         '#edf8fb';
}
function getColor4(value) {
    return value > 0.8 ? '#006d2c':
           value > 0.6 ? '#2ca25f':
            value > 0.4 ? '#66c2a4':
           value > 0 ? '#b2e2e2':
                         '#edf8fb';
}
function getColor5(value) {
    return value > 0.46 ? '#006d2c':
           value > 0.25 ? '#2ca25f':
            value > 0.15 ? '#66c2a4':
           value > 0 ? '#b2e2e2':
                         '#edf8fb';
}
function getColor6(value) {
    return value > 0.5 ? '#006d2c':
           value > 0.3 ? '#2ca25f':
            value > 0.15 ? '#66c2a4':
           value > 0 ? '#b2e2e2':
                         '#edf8fb';
}
function style(feature){
    return {
        fillColor: getColor(feature.properties.Happines_2),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}
function style1(feature){
    return {
        fillColor: getColor1(feature.properties.Explain_17),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

function style2(feature){
    return {
        fillColor: getColor2(feature.properties.Explain_18),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}
function style3(feature){
    return {
        fillColor: getColor3(feature.properties.Explain_19),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}
function style4(feature){
    return {
        fillColor: getColor4(feature.properties.Explain_20),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}
function style5(feature){
    return {
        fillColor: getColor5(feature.properties.Explain_21),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}
function style6(feature){
    return {
        fillColor: getColor6(feature.properties.Explain_22),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}
 

function highlightFeature(e) {
    // Get access to the feature that was hovered through e.target
    var feature = e.target;

    // Set a thick grey border on the feature as mouseover effect
    // Adjust the values below to change the highlighting styles of features on mouseover
    // Check out https://leafletjs.com/reference-1.3.4.html#path for more options for changing style
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    // Bring the highlighted feature to front so that the border doesn’t clash with nearby states
    // But not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }propcircles.remove(mymap);
    propcircles.addTo(mymap);
}
var currentLayerID = 1846;
function resetHighlight(e) {
    
    hap.resetStyle(e.target) ;
   gdp.resetStyle(e.target);
   soc.resetStyle(e.target);
    hel.resetStyle(e.target);
   fre.resetStyle(e.target); 
     gen.resetStyle(e.target);
    per.resetStyle(e.target);
 propcircles.remove(mymap);
    propcircles.addTo(mymap);
}
 
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature, // Do what defined by the highlightFeature function on mouseover
        mouseout: resetHighlight,    // Do what defined by the resetHighlight function on mouseout
    });
}
var hap; // define a variable to make the geojson layer accessible for the function to use   
            function getRadius(area) {
  var radius = Math.sqrt(area/Math.PI);
  return radius * .01;
}
var propcircles = new L.geoJson(pointdata, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Country: <b>'+feature.properties.Country+ '</b></br>' +
                                   'GDP(MD): '+feature.properties.GDP_MD+'</p>');
    },
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
          fillColor: "#920101", 
          color: '#920101',
          weight: 2,       
          radius: getRadius(feature.properties.GDP_MD),
          fillOpacity: .35,
          
      }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: '#2D8F4E'});

            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: '#920101'});  
            }
    });
  }
}).addTo(mymap);

hap = L.geoJson(data, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.country 
           + '<p style="color:purple">' + layer.feature.properties.Happines_2.toString() + ' Happiness Score';       
}).addTo(mymap);

gdp = L.geoJson(data, {
    style:style1,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.country 
           + '<p style="color:purple">' + layer.feature.properties.Explain_17.toString() + ' Explained due to GDP';       
}).addTo(mymap);

soc = L.geoJson(data, {
    style:style2,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.country 
           + '<p style="color:purple">' + layer.feature.properties.Explain_18.toString() + ' Explained due to Social Support';       
}).addTo(mymap);

hel = L.geoJson(data, {
    style:style3,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.country 
           + '<p style="color:purple">' + layer.feature.properties.Explain_19.toString() + ' Explained due to Healthy Life Expectancy ';       
}).addTo(mymap);

fre = L.geoJson(data, {
    style:style4,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.country 
           + '<p style="color:purple">' + layer.feature.properties.Explain_20.toString() + ' Explained due to Freedom to Make Decisions';       
}).addTo(mymap);

gen = L.geoJson(data, {
    style:style5,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.country 
           + '<p style="color:purple">' + layer.feature.properties.Explain_21.toString() + ' Explained due to Generosity';       
}).addTo(mymap);

per = L.geoJson(data, {
    style:style6,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.country 
           + '<p style="color:purple">' + layer.feature.properties.Explain_22.toString() + ' Explained due to Perceptions of corruption';       
}).addTo(mymap);


mymap.on('baselayerchange', function (e) {
   currentLayerID = e.layer._leaflet_id;
   if (currentLayerID === 400) { current= "Happiness"; }  
   else if (currentLayerID === 641) {current= "GPD Per Capita";}
   else if (currentLayerID === 882) {current= "Social Support"; }
    else if (currentLayerID === 1123)  {current= "Healthy Life Expectancy"; }
    else if (currentLayerID === 1364)  {current= "Freedom to Make Decisions"; }
      else if (currentLayerID === 1605)  {current= "Generosity";}
      else if (currentLayerID === 1846) {current= "Perceptions of corruption";}
    console.log(currentLayerID);
    legend.remove(mymap);
    legend.addTo(mymap);
 propcircles.remove(mymap);
    propcircles.addTo(mymap);
});



var legend = L.control({position: 'bottomright'}); // Try the other three corners if you like.

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'legend')
         // The break values to define the intervals of population, note we begin from 0 here

     if (currentLayerID === 400) { grades = [ 2.5, 4.5, 5.6,6.6];}  
   else if (currentLayerID === 641) {grades = [ 0, 1, 1.5,2];}
   else if (currentLayerID === 882) {grades = [ 0, 1, 1.5,2];}
    else if (currentLayerID === 1123)  {grades = [ 0, 1, 1.5,2];}
    else if (currentLayerID === 1364)  {grades = [ 0, 1, 1.5,2];}
      else if (currentLayerID === 1605)  {grades = [ 0, 1, 1.5,2];}
      else if (currentLayerID === 1846) {grades = [ 0, 0.15, 0.3,0.6];}
    
    div.innerHTML = '<b>Happiness </b>'; // The legend title (HTML-based)

    // Loop through our the classes and generate a label with a color box for each interval.
    // If you are creating a choropleth map, you DO NOT need to change lines below.
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<br><i style="background:' + getColor(grades[i] + 1) + '"></i>' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(mymap);
var baseLayers = {
    'Grayscale': grayscale,
    
	};

var overlays = {'Happiness': hap,
               'GDP per Capita' : gdp,
               'Social Support' : soc,
               'Healthy Life Expectancy' : hel,
               'Freedom to make Decisions' : fre,
               'Generosity': gen,
               'Perceptions of Corruption' : per,
               };
var prop = {'GDP': propcircles}


L.control.layers(overlays,prop, {collapsed: false}).addTo(mymap);




