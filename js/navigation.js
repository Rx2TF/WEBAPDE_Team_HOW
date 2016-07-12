function load(page) {
    $("#mainContent").load(page);
    if(page == "doctors.html"){
        console.log(page);
        $('select').material_select();
    }
}