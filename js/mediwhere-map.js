var map;

function initialize() {
var mapProp = {
    center:new google.maps.LatLng(14.5994146,121.03688929999998),
    zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map=new google.maps.Map(document.getElementById("gMap"),mapProp);

var sjmc = {lat: 14.606804, lng: 121.023479}; <!-- San Juan Medical Center Coords -->
var smpch = {lat: 14.59911613, lng: 121.03168309}; <!-- St. Martin de Porres Charity Hospital Coords -->
var csmc = {lat: 14.597604, lng: 121.045845}; <!-- Cardinal Santos Medical Center Coords -->

var sjmcmarker = new google.maps.Marker({position: sjmc, map: map, title: 'San Juan Medical Center'});
var smpchmarker = new google.maps.Marker({position: smpch, map: map, title: 'St. Martin de Porres Charity Hospital'});
var csmcmarker = new google.maps.Marker({position: csmc, map: map, title: 'Cardinal Santos Medical Center'});
}

google.maps.event.addDomListener(window, 'load', initialize);