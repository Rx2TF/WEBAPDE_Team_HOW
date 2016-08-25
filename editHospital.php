<?php
	require_once "php/model.php";
?>
<script>
	var hospitals = 
	<?php	
		echo json_encode(getAllHospitals());
	?>;
	console.log(hospitals);
    componentHandler.upgradeAllRegistered();
</script>
<div class="content-flex" id="contflex2">
		<script>
			componentHandler.upgradeAllRegistered();
			displayHospitals();
		</script>
</div>