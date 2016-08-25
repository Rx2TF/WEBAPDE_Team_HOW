<!DOCTYPE HTML>
<?php
	require_once "php/model.php";
?>
<script>
	var doctors = 
	<?php	
		echo json_encode(getAllDoctors());
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