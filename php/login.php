<?php
	require_once "php/model.php";
	$uName = $_POST["username"];
	$pWord = $_POST["password"];
	
	echo isValidUser($uName, $pWord);
		
?>