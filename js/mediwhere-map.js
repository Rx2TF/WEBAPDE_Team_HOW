var map;
var window = false;
var infoWindow;

function initialize() {
    var properties = {
        center: new google.maps.LatLng(14.5994146,121.03688929999998),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("googleMap"), properties);
    
    infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(infoWindow, 'domready', function() {
        var iwOuter = $('.gm-style-iw');
        var iwBackground = iwOuter.prev();
        iwBackground.children(':nth-child(2)').css({'display' : 'none'});
        iwBackground.children(':nth-child(4)').css({'display' : 'none'});
        var iwCloseBtn = iwOuter.next();
        iwCloseBtn.css({
        right:'58px', 
        top: '3px', 
        border: '7px',})
    });

    // Add markers and content for each hospital in hospitals[]
    hospitals.forEach(function(hospital) {
        console.log(hospital);
        var hospitalPosition = {
            lat: parseFloat(hospital.lat),
            lng: parseFloat(hospital.lng)
        }
        console.log("lat" + hospital.lat);
        console.log(hospitalPosition);
        var hospitalMarker = new google.maps.Marker({
            position: hospitalPosition,
            map: map,
            title: hospital.name
        });

        var infoWindowContent =
            "<div id='infw-header'>" +
                hospital.name +
            "</div>" +
            "<div class='infw-info'>" +
                "<p id='infw-address'>" +
                    "<i class='material-icons'>place</i> " +
                    hospital.address +
                "</p>" +
                "<table>" +
                    "<tr>" +
                        "<th>Accessiblity</th>" +
                        "<td id='infw-accessbility'>" + numberToStar(parseFloat(hospital.accessibility)) +"</td>" +
                    "</th>" +
                    "<tr>" +
                        "<th>Affordability</th>" +
                        "<td id='infw-afforability'>" + numberToStar(parseFloat(hospital.affordability)) +"</td>" +
                    "</th>" +
                    "<tr>" +
                        "<th>Ambiance</th>" +
                        "<td id='infw-ambiance'>" + numberToStar(parseFloat(hospital.ambiance)) +"</td>" +
                    "</th>" +
                "</table>" +
                "<div>" +
                    "<button onclick='dockLeft()' class='mdl-button mdl-js-button mdl-js-ripple-effect'><i class='material-icons'>first_page</i>Dock Left</button>" +
                    "<button onclick='dockRight()' class='mdl-button mdl-js-button mdl-js-ripple-effect'>Dock Right<i class='material-icons'>last_page</i></button>" +
                "</div>" +
            "</div>";
        google.maps.event.addListener(hospitalMarker, 'click', function() {
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map, this);
        });
    }, this);
}

function loadMap() {
    var loadScript = document.createElement("script");
    loadScript.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDd4GzSji1O65dMpVDE9CbqADLSYfqErt0&callback=initialize";
    document.body.appendChild(loadScript);
}

function numberToStar(rating){
    var fullStars = Math.floor(rating);
    var halfStars = Math.ceil(rating) - rating;
    var emptyStars = 5 - fullStars - Math.ceil(halfStars);
    var html = "";

    for(i = 0; i < fullStars; i++){
        html = html.concat("<i class='material-icons'>star</i>");
    }
    if(halfStars) {
        html = html.concat("<i class='material-icons'>star_half</i>");
    }
    for(i = 0; i < emptyStars; i++){
        html = html.concat("<i class='material-icons'>star_border</i>");
    }
    return html;
}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(document.getElementById('googleMap'), "bounds_changed", function() {
    alert("boo");
    var curCenter = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(curCenter);
});