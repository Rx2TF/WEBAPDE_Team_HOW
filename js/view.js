var ajaxResult;
var dataObject;
var map;
var window = false;
var infoWindow;
var infoWindow2;
var latitude;
var longitude;
var addMarker = null;
var ldid;
var rdid;
var currHospital; 
function initialize() {
    var properties = {
        center: new google.maps.LatLng(14.5994146,121.03688929999998),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("googleMap"), properties);
    
    infoWindow = new google.maps.InfoWindow();
	infoWindow2 = new google.maps.InfoWindow();

	google.maps.event.addListener(map, 'click', function(event) {
		if(addMarker != null){
			addMarker.setMap(null);
		}
		addMarker = new google.maps.Marker({position: event.latLng, map: map});
		
		/*var infoWindowAddHospital = 
			"<div id='infw-header' onclick=" + '"load(' + "'addHospital.php')" + '">Add Hospital Here</div>';*/
		
		google.maps.event.addListener(addMarker, 'click', function() {
			//infoWindow.setContent(infoWindowAddHospital);
            //infoWindow.open(map, this);
			latitude = addMarker.getPosition().lat();
			longitude = addMarker.getPosition().lng();
			load('addHospital.php');
        });
		
		/*google.maps.event.addListener(infoWindowAddHospital, 'domready', function() {
        var iwOuter = $('.gm-style-iw2');
        var iwBackground = iwOuter.prev();
        iwBackground.children(':nth-child(2)').css({'display' : 'none'});
        iwBackground.children(':nth-child(4)').css({'display' : 'none'});
        var iwCloseBtn = iwOuter.next();
        iwCloseBtn.css({
        right:'58px', 
        top: '3px', 
        border: '7px',})
		});*/
		
	});
	
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

function changeLDock(){
	$("#leftDock").html('<button id="ld-close" onclick="closeLeftDock()" class="mdl-button mdl-js-button mdl-js-ripple-effect"><i class="material-icons">close</i></button>');
	console.log(ldid);
	doctors.forEach(function(doctor){
		if(doctor.hospitalid == ldid){
			console.log(doctor);
			var currentdoc = 
			'<div class="mdl-card mdl-shadow--2dp card card-doctor">' +
			'<div class="mdl-card__title">' +
			'<img src="'+ doctor.url +'">' +
			'</div>' +
			'<div class="mdl-card__supporting-text">' +
			'<h4>' + doctor.lname + ',' + doctor.fname + '</h4>' +
			'<h5>' + doctor.special + '</h5>' +
			'<p> Contact Details : ' + doctor.contact + '</p>' +
			'</div></div>';
			
			document.getElementById("leftDock").innerHTML += currentdoc;
		}
		
	});
	
}

function changeRDock(){
	console.log(rdid);
	$("#rightDock").html('<button id="rd-close" onclick="closeRightDock()" class="mdl-button mdl-js-button mdl-js-ripple-effect"><i class="material-icons">close</i></button>');
	doctors.forEach(function(doctor){
		if(doctor.hospitalid == rdid){
			console.log(doctor);
			var currentdoc = 
			'<div class="mdl-card mdl-shadow--2dp card card-doctor">' +
			'<div class="mdl-card__title">' +
			'<img src="'+ doctor.url +'">' +
			'</div>' +
			'<div class="mdl-card__supporting-text">' +
			'<h4>' + doctor.lname + ',' + doctor.fname + '</h4>' +
			'<h5>' + doctor.special + '</h5>' +
			'<p> Contact Details : ' + doctor.contact + '</p>' +
			'</div></div>';
			
			document.getElementById("rightDock").innerHTML += currentdoc;
		}
		
	});
	
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
	ldid = data.id;
	var html_left = '<div id="ld-header" class="d-header">' +
                            '<div id="ld-title" class="d-title">' +
                                '<h1 id="ld-name">Name Here</h1>' +
                            '</div>' +
                            '<button id="ld-close" onclick="closeLeftDock()" class="mdl-button mdl-js-button mdl-js-ripple-effect">' +
                             '   <i class="material-icons">close</i>' +
                            '</button>' +
                        '</div>' +
                        '<div id="ld-information">' +
                         '   <table>' +
                          '      <tr>' +
                            "        <th><i class='material-icons'>place</i></th> " +
                              '      <td id="ld-inf-address">Address</td>' +
                              '  </tr>' +
                              '  <tr>' +
                               '     <th><i class="material-icons">local_phone</i></th>' +
                                '    <td id="ld-inf-hotline">Contact Number</td>' +
                                '</tr>' +
                            '</table>' +
                            '<button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="changeLDock()">' +
                             "   <i class='material-icons'>assignment_ind</i> " +
                               ' <span id="ld-inf-doctors">Doctors</span>' +
                            '</button>' +
                            '<button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="changeLDock()">' +
                             "   <i class='material-icons'>local_hospital</i> " +
                               ' <span id="ld-inf-services">Services</span>' +
                            '</button>' +
                            '<table class="dock-rating-table">' +
                             '   <tr>' +
                              '      <th>Accessibility</th>' +
                               '     <td id="ld-inf-accessibility">' +
                                   ' </td>' +
                                '</tr>' +
                                '<tr>' +
                                 '   <th>Affordability</th>' +
                                  '  <td id="ld-inf-affordability">' +
                                   ' </td>' +
                                '</tr>' +
                                '<tr>' +
                                 '   <th>Ambiance</th>' +
                                  '  <td id="ld-inf-ambiance">' +
                                   ' </td>' +
                                '</tr>' +
                            '</table>' +
                        '</div>';
	
	$("#leftDock").html(html_left);
    $("#ld-name").html(data.name);
    $("#ld-inf-address").html(data.address);
    $("#ld-inf-hotline").html(data.hotline);
    $("#ld-inf-accessibility").html(numberToStar(data.accessibility));
    $("#ld-inf-affordability").html(numberToStar(data.affordability));
    $("#ld-inf-ambiance").html(numberToStar(data.ambiance));
}
function setRightDockContents(data){
	rdid = data.id;
	var html_right =	'<div id="rd-header" class="d-header">' +
                     '       <div id="rd-title" class="d-title">' +
                      '          <h1 id="rd-name">Name Here</h1>' +
                       '     </div>' +
                        '    <button id="rd-close" onclick="closeRightDock()" class="mdl-button mdl-js-button mdl-js-ripple-effect">' +
                         '       <i class="material-icons">close</i>' +
                          '  </button>' +
                       ' </div>' +
                        '<div id="rd-information">' +
                         '   <table>' +
                          '      <tr>' +
                           "         <th><i class='material-icons'>place</i></th> "+
                             '       <td id="rd-inf-address">Address</td>' +
                              '  </tr>' +
                               ' <tr>' +
                                '    <th><i class="material-icons">local_phone</i></th>' +
                                 '   <td id="rd-inf-hotline">Contact Number</td>' +
                               ' </tr>' +
                           ' </table>' +
                            '<button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="changeRDock()" >' +
                             "   <i class='material-icons'>assignment_ind</i>" +
                             '   <span id="rd-inf-doctors">Doctors</span>' +
                            '</button>' +
                           ' <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="changeRDock()">' +
                            "    <i class='material-icons'>local_hospital</i> " +
                              '  <span id="rd-inf-services">Services</span>' +
                            '</button>' +
                            '<table class="dock-rating-table">' +
                             '   <tr>' +
                              '      <th>Accessibility</th>' +
                               '     <td id="rd-inf-accessibility">' +
                               '     </td>' +
                                '</tr>' +
                                '<tr>' +
                                 '   <th>Affordability</th>' +
                                  '  <td id="rd-inf-affordability">' +
                                   ' </td>' +
                                '</tr>' +
                                '<tr>' +
                                 '   <th>Ambiance</th>' +
                                  '  <td id="rd-inf-ambiance">' +
                                 '   </td>' +
                               ' </tr>' +
                           ' </table>' +
                       ' </div>' +
                    '</div>';
	$("#rightDock").html(html_right);
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
		'<img src="'+ doctor.url +'">' +
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

function displayHospitals(){
	hospitals.forEach(function(hospital){
		console.log(hospital);
		var hotline = 
		'<div class="mdl-card mdl-shadow--2dp card"  id="'+ hospital.id +'" onclick=load("hospital_editor.php")>' +
		'<div class="mdl-card__title">' +
		'<h2 class="mdl-card__title-text">' + hospital.name + '</h2>' +
		'</div>' +
		'<div class="mdl-card__supporting-text">'  +
		hospital.address +
		'</div>'+
		'<div class="mdl-card__supporting-text">'  +
		'<i class="material-icons">phone</i> '  + hospital.hotline +
		'</div></div> ';
		document.getElementById("contflex2").innerHTML += hotline;
	});
	
}

function  passhospitalID(id){
	currHospital = id;
}
function displayHospitalNames(){
	var c = 0;
	var addname = '<option value="selection_main" id="drop_down_hospital">Select Hospital</option>';
	document.getElementById("hospitalname").innerHTML += addname;
	hospital_names.forEach(function(hospital_name){
		console.log(hospital_name);
		var currentname = 
		'<option value="' + hospital_name.name +  '">' +
		hospital_name.name +
		'</option>';
		document.getElementById("hospitalname").innerHTML += currentname;
		c++;
	});
	
}

function signin(){
	console.log("yey");
	var form = $("#signin-form").serializeArray();
	console.log(form);
	$.ajax({
		url: "php/login.php",
		type: "POST",
		data: form,
		success: function(userExist){
			 if (userExist) {
				 console.log("Login successful!");
				 $.ajax({
					 url: "php/startSession.php",
					 type: "POST"
				 });
				 //console.log("redirecting...");
				 //window.location = "index.php";
			}
			else{
				console.log("Invalid username / password.");
			}
		}
	});
}
