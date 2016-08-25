<?php
	require_once "php/model.php";
	$uName = $_POST["username"];
	$pWord = $_POST["password"];
	
	session_start();
	
	$user = getUser($uName, $pWord);
	
	$_SESSION["firstname"] = $user.["fname"];
	$_SESSION["lastname"] = $user.["lname"];
	$_SESSION["email"] = $user.["username"];
	$_SESSION["admin"] = $user.["admin"];
	echo "SUCCESS";
		
?>