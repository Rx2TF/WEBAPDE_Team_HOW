<?php
	require_once "controller.php";
	addDoctor($_POST["fname"],$_POST["lname"],$_POST["hospitalname"],$_POST["specialty"],$_POST["contactno"]);
?>