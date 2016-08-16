var ajaxResult;
var dataObject;

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
}
function setRightDockContents(data){
    $("#rd-name").html(data.name);
    $("#rd-inf-address").html(data.address);
    $("#rd-inf-hotline").html(data.hotline);
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