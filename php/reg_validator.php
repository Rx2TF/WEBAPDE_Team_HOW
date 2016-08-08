<?php
	$servername = "localhost";
    $username = "root";
    $password = "root";
    $db = "mediwhere";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $db);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

	$sql = "SELECT DISTINCT(email) FROM users WHERE email ='".$_POST["email"]."'";
	$result = $conn->query($sql);
	echo json_encode($result);
	if(mysqli_fetch_array($result) == null) {
		echo $result;
		if($_POST["password"] == $_POST["pcheck"]){
			echo "accepted";
			$insertsql = 'INSERT INTO `mediwhere`.`users`(email,pword,first_name,last_name)  VALUES ("'.$_POST["email"].'","'.$_POST["fname"].'","'.$_POST["lname"].'","'.$_POST["password"].'");';
			$conn->query($insertsql);
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