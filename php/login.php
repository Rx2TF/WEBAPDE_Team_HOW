<?php
	require_once "php/model.php";
	$uName = $_POST["username"];
	$pWord = $_POST["password"];
	
	if(isValidUser($uName, $pWord)){
		session.start();
		echo json.encode(getUser($uName, $pWord));
	}
	else {
		echo "fail";
	}
?>