var hospitals = [];
var map;
var window = false;
function initialize() {
    var properties = {
        center: new google.maps.LatLng(14.5994146,121.03688929999998),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("googleMap"), properties);

    //Replace with script
    var sjmc = {lat: 14.606804, lng: 121.023479}; <!-- San Juan Medical Center Coords -->
    var smpch = {lat: 14.59911613, lng: 121.03168309}; <!-- St. Martin de Porres Charity Hospital Coords -->
    var csmc = {lat: 14.597604, lng: 121.045845}; <!-- Cardinal Santos Medical Center Coords -->

    var sjmcmarker = new google.maps.Marker({position: sjmc, map: map, title: 'San Juan Medical Center'});
    var smpchmarker = new google.maps.Marker({position: smpch, map: map, title: 'St. Martin de Porres Charity Hospital'});
    var csmcmarker = new google.maps.Marker({position: csmc, map: map, title: 'Cardinal Santos Medical Center'});



    var sjmccontent = '<div id="sjmccont">'
                                +'<p id="sjmcheader">San Juan Medical Center</p>'
                                +'<div id="sjmc-info">'
                                +'<p>Location : N Domingo St, San Juan, Metro Manila, Philippines</p>'
                                /*+'<h6>Services</h6><p>General Medicine<br>Orthopedic Surgery<br>Otolaryngology<br>OB Gynecology<br>Dermatology<br>Emergency Service<br>'
                                                                +'Dental Services<br>General Surgery<br>Ophthalmology<br>Anaesthesia<br>Pediatrics<br>Out-Patient Department<br>'
                                                                +'Medical Social Service</p>'
                                +'<h6>Facilities</h6><p>Emergency Room<br>Doctor’s/Consultation Office<br>Clinical Laboratory<br>X-Ray Facility<br>Dental Room<br>'
                                                                +'Pharmacy<br>Labor Room<br>Delivery Room<br>Operating Room<br>Recovery Room<br>Intensive Care Units<br>'
                                                                +'Medical Records Room<br>Dietary Room</p>'*/
                                +'</div>'
                                +'</div>';

    var sjmcinfowindow = new google.maps.InfoWindow({
            content: sjmccontent
            });
            
    sjmcmarker.addListener('click', function() {
        sjmcinfowindow.open(map, sjmcmarker);
        });

        
        
    var smpchcontent = '<div id="smpchcont">'
                                +'<p id="smpchheader">St. Marvin de Porres Charity Hospital</p>'
                                +'<div id="smpch-info">'
                                +'<p>Location : 70 A. Bonifacio St., San Juan, Metro Manila, Philippines</p>'
                                /*+'<h6>Services</h6><p>General Medicine<br>Orthopedic Surgery<br>Otolaryngology<br>OB Gynecology<br>Dermatology<br>Emergency Service<br>'
                                                                +'Dental Services<br>General Surgery<br>Ophthalmology<br>Anaesthesia<br>Pediatrics<br>Out-Patient Department<br>'
                                                                +'Medical Social Service</p>'
                                +'<h6>Facilities</h6><p>Emergency Room<br>Doctor’s/Consultation Office<br>Clinical Laboratory<br>X-Ray Facility<br>Dental Room<br>'
                                                                +'Pharmacy<br>Labor Room<br>Delivery Room<br>Operating Room<br>Recovery Room<br>Intensive Care Units<br>'
                                                                +'Medical Records Room<br>Dietary Room</p>'*/
                                +'</div>'
                                +'</div>';
                                
    var smpchinfowindow = new google.maps.InfoWindow({
            content: smpchcontent
            });
                        
    smpchmarker.addListener('click', function() {
        smpchinfowindow.open(map, smpchmarker);
        });



    var csmccontent = '<div id="csmccont">'
                                +'<p id="csmcheader">Cardinal Santos Medical Center</p>'
                                +'<div id="csjmc-info">'
                                +'<p>Location : 10 Wilson St. Greenhills West, San Juan City, Metro Manila, Philippines</p>'
                                /*+'<h6>Services</h6><p>Anaesthology<br>Dental Services<br>Obstetrics and Gynecology<br>Ophthalmology<br>Pathology<br>Pediatrics<br>'
                                                                +'Radiology<br>Rehabilitation<br>Surgery<br>Bone Densitometry<br>Endoscopy<br>MRI<br>Cardio-Neuro-Pulmonary Services<br>'
                                                                +'Hemodialysis<br>Marine Medical Services</p>'
                                +'<h6>Facilities</h6><p>Emergency Room<br>Doctor’s/Consultation Office<br>Clinical Laboratory<br>X-Ray Facility<br>Dental Room<br>'
                                                                +'Pharmacy<br>Labor Room<br>Delivery Room<br>Operating Room<br>Recovery Room<br>Intensive Care Units<br>'
                                                                +'Medical Records Room<br>Dietary Room<br>Cancer Center<br>Eye Center<br>Hand Center<br>Pathology and Laboratory<br>'
                                                                +'Cardiac Catheterization Laboratory<br>Womens Care<br>Lactation Room<br>Rehabilitation Center<br>Researcg Center<br>'
                                                                +'Urology and Stone Center<br>Wellness Center<br>Philippine Gamma Knife</p>'*/
                                +'</div>'
                                +'</div>';

    var csmcinfowindow = new google.maps.InfoWindow({
            content: csmccontent
            });
        
    csmcmarker.addListener('click', function() {
        csmcinfowindow.open(map, csmcmarker);
        });
        
        
    google.maps.event.addListener(sjmcinfowindow, 'domready', function() {
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
    
    google.maps.event.addListener(smpchinfowindow, 'domready', function() {
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
    
    google.maps.event.addListener(csmcinfowindow, 'domready', function() {
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
    //End replace

}

function loadMap() {
    var loadScript = document.createElement("script");
    loadScript.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDd4GzSji1O65dMpVDE9CbqADLSYfqErt0&callback=initialize";
    document.body.appendChild(loadScript);
}

function loadHospital() {
    hospitals.push();
}

console.log("mediwhere-map.js end");
google.maps.event.addDomListener(window, 'load', initialize);