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



