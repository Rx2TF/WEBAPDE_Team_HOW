function load(page) {
    $(".page-content").load(page);
}
function dockLeft(){
    if($('#leftDock').hasClass('ld-hide')) {
        $('#leftDock').removeClass('ld-hide').addClass('ld-show');
    }
    infoWindow.close();
}
function dockRight() {
    if($('#rightDock').hasClass('rd-hide')) {
        $('#rightDock').removeClass('rd-hide').addClass('rd-show');
    }
    if($('#googleMap').hasClass('gm-rd-hide')) {
        $('#googleMap').removeClass('gm-rd-hide').addClass('gm-rd-show');
        console.log("fck");
    }
    infoWindow.close();
}