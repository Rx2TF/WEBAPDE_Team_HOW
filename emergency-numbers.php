<!DOCTYPE HTML>
<?php 
    require_once "php/mysqli_connector.php";
?>

<script>
	var contacts = 
	<?php
		 
		 
		 $sql = "SELECT hospitalid, hospital_name , hotline FROM hospital ORDER BY hospital_name ASC";
		 $result = $conn->query($sql);
		 $contacts = array();
		 while($row = mysqli_fetch_array($result)) {
			 $contact = array("name" => $row["hospital_name"],
			 "hotline" => $row["hotline"]);
			 $contacts[] = $contact;
		 }
		 
		 echo json_encode($contacts);
		 
		?>;
		console.log(contacts);
        componentHandler.upgradeAllRegistered();
</script>
<div class="content-flex" id="contflex">
    <!--<div class="mdl-card mdl-shadow--2dp card">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">San Juan Medical Center</h2>
        </div>
        <div class="mdl-card__supporting-text">
            <i class="material-icons">phone</i> (02) 724 3266
        </div>
    </div>
    <div class="mdl-card mdl-shadow--2dp card">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Cardinal Santos Medical Center</h2>
        </div>
        <div class="mdl-card__supporting-text">
            <i class="material-icons">phone</i> (02) 727 0001
        </div>
    </div>
    <div class="mdl-card mdl-shadow--2dp card">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">St. Martin de Porres Charity Hospital</h2>
        </div>
        <div class="mdl-card__supporting-text">
            <i class="material-icons">phone</i> (072) 307 4143
        </div>
    </div>
        <div class="mdl-card mdl-shadow--2dp card">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Transcare Emergency Medical Services</h2>
        </div>
        <div class="mdl-card__supporting-text">
            <i class="material-icons">phone</i> +63(2)703 4805
        </div>
    </div>-->
	<script src="js/emergency.js"></script>
	
	
</div>