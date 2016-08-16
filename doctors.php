<!DOCTYPE HTML>
<?php
	require_once "php/mysqli_connector.php";
?>
<script>
	var doctors = 
	<?php	
		$sql = "SELECT * FROM doctors";
		$result = $conn->query($sql);
		$doctors = array();
		while($row = mysqli_fetch_array($result)) {
			$doctor = array("lname" => $row["last_name"],
			 "fname" => $row["first_name"],
			 "special" => $row["special"],
			 "contact" => $row["contact"]);
			 $doctors[] = $doctor;
		}
		echo json_encode($doctors);
		
	?>;
	console.log(doctors);
    componentHandler.upgradeAllRegistered();
</script>
<!--<div>
	
		<select>
			<option value="OB Gynecology">OB Gynecology</option>
			<option value="Othopedic">Orthopedic</option>
			<option value="General Surgery">General Surgery</option>
		</select>

</div>-->
<div class="content-flex" id="contflex1">

    <!-- <div class="mdl-card mdl-shadow--2dp card card-doctor">
        <div class="mdl-card__title">
            <img src="http://i.imgur.com/JCTUA5k.jpg?1">
        </div>
        <div class="mdl-card__supporting-text">
            <h4>Sabayton, Jun</h4>
            <h5>OBGYN</h5>
            <p>"Magnanakaw ako, para sainyo"</p>
        </div>
    </div>
    <div class="mdl-card mdl-shadow--2dp card card-doctor">
        <div class="mdl-card__title">
            <img src="http://i.imgur.com/JCTUA5k.jpg?1">
        </div>
        <div class="mdl-card__supporting-text">
            <h4>Sabayton, Jun</h4>
            <h5>OBGYN</h5>
            <p>"Magnanakaw ako, para sainyo"</p>
        </div>
    </div>
    <div class="mdl-card mdl-shadow--2dp card card-doctor">
        <div class="mdl-card__title">
            <img src="http://i.imgur.com/JCTUA5k.jpg?1">
        </div>
        <div class="mdl-card__supporting-text">
            <h4>Sabayton, Jun</h4>
            <h5>OBGYN</h5>
            <p>"Magnanakaw ako, para sainyo"</p>
        </div>
    </div>-->
	
	
	
	</script>
		<script>componentHandler.upgradeAllRegistered();</script>
		<script src="js/doctors.js"></script>
</div>