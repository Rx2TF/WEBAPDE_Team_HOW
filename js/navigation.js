function load(page) {
    $(".page-content").load(page);
}
function dockLeft(hospital_id){
    console.log(hospital_id);
    if($('#leftDock').hasClass('ld-hide')) {
        $('#leftDock').removeClass('ld-hide').addClass('ld-show');
    }
    if($('#googleMap').hasClass('gm-ld-hide')) {
        $('#googleMap').removeClass('gm-ld-hide').addClass('gm-ld-show');
    }
    infoWindow.close();
}
function dockRight(hospital_id) {
    if($('#rightDock').hasClass('rd-hide')) {
        $('#rightDock').removeClass('rd-hide').addClass('rd-show');
    }
    if($('#googleMap').hasClass('gm-rd-hide')) {
        $('#googleMap').removeClass('gm-rd-hide').addClass('gm-rd-show');
    }
    infoWindow.close();
}