var ajaxResult;
var dataObject;
var map;
var window = false;
var infoWindow;
var infoWindow2;
var latitude;
var longitude;

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
		marker = new google.maps.Marker({position: event.latLng, map: map});
		
		var infoWindowNewContent = '<div class="contents">'+
'<div class="mw-container-small2 mdl-card mdl-shadow--2dp">'+
 '   <div class="mdl-card__title">'+
  '      <h2 class="mdl-card__title-text">Add Hospital</h2>'+
   ' </div>'+
    '<form action="php/add_hospital.php" id="addhospital-form" method="POST">'+
     '   <div class="mdl-card__supporting-text">'+
      '      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
       '         <input class="mdl-textfield__input" type="text" id="givenName"  name="fname"required>'+
        '        <label class="mdl-textfield__label" for="givenName" >Name of Hospital</label>'+
         '   </div>'+
          '  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
           '     <input class="mdl-textfield__input" type="text" id="LastName" name="lname" required>'+
            '    <label class="mdl-textfield__label" for="lastName" >Address</label>'+
            '</div>'+

			'<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
             '   <input class="mdl-textfield__input" type="number" id="password" name="password" required>'+
              '  <label class="mdl-textfield__label" for="password">Contact Number</label>'+
               ' <span class="mdl-textfield__error">Enter a valid contact number.</span>'+
            '</div>'+
			
            '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
             '   <label class="mdl-textfield__label" for="check" >Check Available Services of the Hospital</label>'+
            '</div>'+
			
            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">'+
             '   <input type="checkbox" id="checkbox-1" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Anesthesiology</span>'+
            '</label>'+
            
            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">'+
             '   <input type="checkbox" id="checkbox-2" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Bariatric and Metabolic</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-3">'+
             '   <input type="checkbox" id="checkbox-3" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Cardiology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-4">'+
             '   <input type="checkbox" id="checkbox-4" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">CT Scan and Ultrasound</span>'+
            '</label>'+
            
            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-5">'+
             '   <input type="checkbox" id="checkbox-5" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Dermatology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-6">'+
             '   <input type="checkbox" id="checkbox-6" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Dental Medicine</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-7">'+
             '   <input type="checkbox" id="checkbox-7" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Diabetology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-8">'+
             '   <input type="checkbox" id="checkbox-8" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Endocrinology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-9">'+
             '   <input type="checkbox" id="checkbox-9" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">ENT</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-10">'+
             '   <input type="checkbox" id="checkbox-10" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Gastroenterology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-11">'+
             '   <input type="checkbox" id="checkbox-11" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">General Surgery</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-12">'+
             '   <input type="checkbox" id="checkbox-12" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Hematology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-13">'+
             '   <input type="checkbox" id="checkbox-13" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Hepatobiliary Surgery</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-14">'+
             '   <input type="checkbox" id="checkbox-14" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Infectious Diseases</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-15">'+
             '   <input type="checkbox" id="checkbox-15" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Intensive Care</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-16">'+
             '   <input type="checkbox" id="checkbox-16" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Neonatology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-17">'+
             '   <input type="checkbox" id="checkbox-17" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Neurology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-18">'+
             '   <input type="checkbox" id="checkbox-18" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Nephrology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-19">'+
             '   <input type="checkbox" id="checkbox-19" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Nutrition Dietetics</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-20">'+
             '   <input type="checkbox" id="checkbox-20" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Obstetrics and Gynecology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-21">'+
             '   <input type="checkbox" id="checkbox-21" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Oncology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-22">'+
             '   <input type="checkbox" id="checkbox-22" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Ophthalmology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-23">'+
             '   <input type="checkbox" id="checkbox-23" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Othopedic</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-24">'+
             '   <input type="checkbox" id="checkbox-24" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Pediatrics</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-25">'+
             '   <input type="checkbox" id="checkbox-25" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Plastic Surgery</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-26">'+
             '   <input type="checkbox" id="checkbox-26" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Psychiatry</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-27">'+
             '   <input type="checkbox" id="checkbox-27" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Pulmonology</span>'+
            '</label>'+
            
            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-28">'+
             '   <input type="checkbox" id="checkbox-28" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Rheumatology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-29">'+
             '   <input type="checkbox" id="checkbox-29" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Thoracic and Cardiovascular</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-30">'+
             '   <input type="checkbox" id="checkbox-30" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Urology</span>'+
            '</label>'+

            '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-31">'+
             '   <input type="checkbox" id="checkbox-31" class="mdl-checkbox__input">'+
              '  <span class="mdl-checkbox__label">Vitreo - Retina</span>'+
            '</label>'+
        '</div>'+
        '<div class="mdl-card__actions mdl-card--border">'+
		'	<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="confirm">'+
		'		Add'+
		'	</button>'+
        '</div>'+
    '</form>'+
'<div>'+
'</div>';
		
		google.maps.event.addListener(marker, 'click', function() {
            infoWindow2.setContent(infoWindowNewContent);
            infoWindow2.open(map, this);
        });
	});
	
	 google.maps.event.addListener(infoWindow2, 'domready', function() {
        var iwOuter = $('.gm-style-iw2');
        var iwBackground = iwOuter.prev();
        iwBackground.children(':nth-child(2)').css({'display' : 'none'});
        iwBackground.children(':nth-child(4)').css({'display' : 'none'});
        var iwCloseBtn = iwOuter.next();
        iwCloseBtn.css({
        right:'58px', 
        top: '3px', 
        border: '7px',})
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
		'<option value="' + hospital_name.name +  '">' +
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