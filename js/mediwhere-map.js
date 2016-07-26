function initialize() {
    var properties = {
        center: new google.maps.LatLng(14.5994146,121.03688929999998),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), properties);
}

function loadMap() {
    var loadScript = document.createElement("script");
    loadScript.src = "http://maps.googleapis.com/maps/api/js?initialize";
    document.body.appendChild(loadScript);
}

google.maps.event.addDomListener(window, 'load', initialize);