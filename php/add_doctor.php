<?php
	require_once "model.php";
	addDoctor($_POST["fname"],$_POST["lname"],$_POST["hospitalname"],$_POST["specialty"],$_POST["contactno"]);
?>