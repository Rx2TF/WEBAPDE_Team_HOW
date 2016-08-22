<?php
	require_once "controller.php";
	
	$sql = "SELECT DISTINCT(email) FROM users WHERE email ='".$_POST["email"]."'";
	$result = $conn->query($sql);
	echo json_encode($result);
	if(mysqli_fetch_array($result) == null) {
		if($_POST["password"] == $_POST["pcheck"]){
			echo "accepted";
			addUser($_POST["email"],$_POST["password"],$_POST["fname"],$_POST["lname"]);
			header("Location: ../");
			die();
		} 
		else{
			header("Location: ../");
			die();
		}
	}
	else{
		header("Location: ../");
		die();
	}
?>