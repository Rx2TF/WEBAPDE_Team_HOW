doctors.forEach(function(doctor){
	console.log(doctor);
	var doc = 
	'<div class="mdl-card mdl-shadow--2dp card card-doctor">' +
    '<div class="mdl-card__title">' +
    '<img src="http://i.imgur.com/JCTUA5k.jpg?1">' +
    '</div>' +
    '<div class="mdl-card__supporting-text">' +
    '<h4>' + doctor.lname + ',' + doctor.fname + '</h4>' +
    '<h5>' + doctor.special + '</h5>' +
    '<p>' + doctor.contact + '</p>' +
    '</div></div>';
	
	document.getElementById("contf").innerHTML += doc;
});