<?php
	session_start();
	
	$username = $_POST["email"];
	$password = $_POST["password"];

	$conn = mysql_connect("localhost", "root", "root");
	mysql_select_db("mediwhere",$conn);
	$queryStatement = "SELECT * FROM users WHERE email = '".$username."'AND pword = '".$password."'";
	$result = mysql_query($queryStatement);
	$row = mysql_fetch_array($result);
	if(is_array($row)){
		$_SESSION["username"] = $row[email];
		$_SESSION["admin"] = $row[admin];
		$_SESSION["last_name"] = $row[last_name];
		$_SESSION["first_name"] = $row[first_name];
	}
	if(isset($_SESSION["username"])) {
		header("Location: ../index.php");
	}
	/**if (isset($_POST['submit'])) {
		$_SESSION['user']=$_POST["email"];
		
		if (empty($_POST['email']) || empty($_POST['password'])) {
			
		}
		else
		{
			$username = $_POST["email"];
			$password = $_POST["password"];
			
			// Establishing Connection with Server by passing server_name, user_id and password as a parameter
			$connection = mysql_connect("localhost", "root", "root");
			// To protect MySQL injection for Security purpose
			$username = stripslashes($uName);
			$password = stripslashes($pWord);
			$username = mysql_real_escape_string($uName);
			$password = mysql_real_escape_string($pWord);
			// Selecting Database
			$db = mysql_select_db("mediwhere", $connection);
			// SQL query to fetch information of registerd users and finds user match.
			$query = mysql_query("select * from users where password=".$password." AND username=".$username);
			$rows = mysql_num_rows($query);
			if ($rows == 1) {
			$_SESSION['user']=$username; // Initializing Session
			while($row=mysql_fetch_assoc($query)){
			$_SESSION['admin'] = $row['admin'];
			}
			//header("location: index.php"); // Redirecting To Other Page
			echo "<script>window.location.assign('index.php')</script>";
			} else {
			
			}
			mysql_close($connection); // Closing Connection
			
		}
	}*/
?>