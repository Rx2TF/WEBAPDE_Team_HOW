<?php
	require_once "controller.php";
	
	$sql = "SELECT DISTINCT(email) FROM users WHERE email ='".$_POST["email"]."'";
	$result = $conn->query($sql);
	echo json_encode($result);
	if(mysqli_fetch_array($result) == null) {
		if($_POST["password"] == $_POST["pcheck"]){
			echo "<script type='text/javascript'>alert('User Added!');</script>";
			addUser($_POST["email"],$_POST["password"],$_POST["fname"],$_POST["lname"]);
			header("Location: ../");
			die();
		} 
		else{
			echo  "<script type='text/javascript'>alert('Password do not match!');</script>";
			die();
		}
	}
	else{
		echo  "<script type='text/javascript'>alert('Email already used!');</script>";
		die();
	}
?>