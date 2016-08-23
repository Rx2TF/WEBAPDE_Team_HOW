var ajaxResult;
var dataObject;
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
        var hospitalPosition = {
            lat: parseFloat(hospital.lat),
            lng: parseFloat(hospital.lng)
        }
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
                "<table>" +
                    "<tr>" +
                        "<th><i class='material-icons'>place</i></th>" +
                        "<td id='infw-accessbility'>" + hospital.address +"</td>" +
                    "</th>" +
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
                    "<button onclick='dockLeft(" + hospital.id + ")' class='mdl-button mdl-js-button mdl-js-ripple-effect'><i class='material-icons'>first_page</i>Dock Left</button>" +
                    "<button onclick='dockRight(" + hospital.id + ")' class='mdl-button mdl-js-button mdl-js-ripple-effect'>Dock Right<i class='material-icons'>last_page</i></button>" +
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

function load(page) {
    $(".page-content").load(page);
}
function dockLeft(hospital_id){
    if($('#leftDock').hasClass('ld-hide')) {
        $('#leftDock').removeClass('ld-hide').addClass('ld-show');
    }
    if($('#googleMap').hasClass('gm-ld-hide')) {
        $('#googleMap').removeClass('gm-ld-hide').addClass('gm-ld-show');
    }
    infoWindow.close();
    getHospital(hospital_id, "left");
}
function closeLeftDock() {
    if($('#leftDock').hasClass('ld-show')) {
        $('#leftDock').removeClass('ld-show').addClass('ld-hide');
    }
    if($('#googleMap').hasClass('gm-ld-show')) {
        $('#googleMap').removeClass('gm-ld-show').addClass('gm-ld-hide');
    }    
}
function closeRightDock() {
    if($('#rightDock').hasClass('rd-show')) {
        $('#rightDock').removeClass('rd-show').addClass('rd-hide');
    }
    if($('#googleMap').hasClass('gm-rd-show')) {
        $('#googleMap').removeClass('gm-rd-show').addClass('gm-rd-hide');
    }    
}
function dockRight(hospital_id) {
    if($('#rightDock').hasClass('rd-hide')) {
        $('#rightDock').removeClass('rd-hide').addClass('rd-show');
    }
    if($('#googleMap').hasClass('gm-rd-hide')) {
        $('#googleMap').removeClass('gm-rd-hide').addClass('gm-rd-show');
    }
    infoWindow.close();
    getHospital(hospital_id, "right");
}
function setLeftDockContents(data){
    $("#ld-name").html(data.name);
    $("#ld-inf-address").html(data.address);
    $("#ld-inf-hotline").html(data.hotline);
    $("#ld-inf-accessibility").html(numberToStar(data.accessibility));
    $("#ld-inf-affordability").html(numberToStar(data.affordability));
    $("#ld-inf-ambiance").html(numberToStar(data.ambiance));
}
function setRightDockContents(data){
    $("#rd-name").html(data.name);
    $("#rd-inf-address").html(data.address);
    $("#rd-inf-hotline").html(data.hotline);
    $("#rd-inf-accessibility").html(numberToStar(data.accessibility));
    $("#rd-inf-affordability").html(numberToStar(data.affordability));
    $("#rd-inf-ambiance").html(numberToStar(data.ambiance));
}
function getHospital(hospital_id, dock) {
    var hospital;
    $.post("php/get_hospital.php", {id : hospital_id}, function(result){
        setResult(result, dock);
    });
}
function setResult(result, dock) {
    ajaxResult = result;
    dataObject = JSON.parse(ajaxResult);
    console.log(ajaxResult);
    if(dock == "left"){
        setLeftDockContents(dataObject);
    }
    else if(dock == "right"){
        setRightDockContents(dataObject);
    }
}
function displayDoctors(){
	
	doctors.forEach(function(doctor){
		console.log(doctor);
		var currentdoc = 
		'<div class="mdl-card mdl-shadow--2dp card card-doctor">' +
		'<div class="mdl-card__title">' +
		'<img src="http://i.imgur.com/JCTUA5k.jpg?1">' +
		'</div>' +
		'<div class="mdl-card__supporting-text">' +
		'<h4>' + doctor.lname + ',' + doctor.fname + '</h4>' +
		'<h5>' + doctor.special + '</h5>' +
		'<p> Contact Details : ' + doctor.contact + '</p>' +
		'</div></div>';
		
		document.getElementById("contflex1").innerHTML += currentdoc;
	});
	
}

function displayEmergency(){
	
	contacts.forEach(function(contact){
		console.log(contact);
		var hotline = 
		'<div class="mdl-card mdl-shadow--2dp card">' +
		'<div class="mdl-card__title">' +
		'<h2 class="mdl-card__title-text">' + contact.name + '</h2>' +
		'</div>' +
		'<div class="mdl-card__supporting-text">'  +
		'<i class="material-icons">phone</i> '  + contact.hotline +
		'</div></div> ' ;
		
		document.getElementById("contflex").innerHTML += hotline;
	});
	
}

function displayHospitalNames(){
	var c = 0;
	var addname = '<option value="selection_main" id="drop_down_hospital">Select Hospital</option>';
	document.getElementById("hospitalname").innerHTML += addname;
	hospital_names.forEach(function(hospital_name){
		console.log(hospital_name);
		var currentname = 
		'<option value="option' + c +  '">' +
		hospital_name.name +
		'</option>';
		document.getElementById("hospitalname").innerHTML += currentname;
		c++;
	});
	
}

function setCookie(){
	
}

function checkAdminPriv() {
    var type=getCookie("type");
    if (type == "admin") {
        var visible = '<style>  #visible {visibility : visible;}  <style>';
		document.getElementById("visible").innerHTML += currentname;
    } 
	else {
		var visible = '<style>  #visible {visibility : hidden;}  <style>';
		document.getElementById("visible").innerHTML += currentname;
  
    }
}

function delCookie(){
	
}