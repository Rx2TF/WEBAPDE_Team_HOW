<!DOCTYPE HTML>
<?php 
    require_once "php/controller.php";
?>
<script src="js/view.js"></script>
<script>
	var contacts = 
	<?php
		 echo json_encode(getAllHotlines());
	?>;
	console.log(contacts);
    componentHandler.upgradeAllRegistered();
</script>
<div class="content-flex" id="contflex">
	<script>
		displayEmergency();
	</script>
</div>