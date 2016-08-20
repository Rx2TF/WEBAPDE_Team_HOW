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
		<script>
			componentHandler.upgradeAllRegistered();
			displayDoctors();
		</script>
</div>