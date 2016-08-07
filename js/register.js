function register(){
	var fname = document.getElementById("givenName");
	var lname = document.getElementById("LastName");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var verpass = document.getElementById("password-check");
	<?php
		 $sql = "SELECT DISTINCT(email) FROM users WHERE email =" 'email';
		 $result = $conn->query($sql);
		 $contacts = array();
		 while($row = mysqli_fetch_array($result)) {
			 $contact = array("name" => $row["hospital_name"],
			 "hotline" => $row["hotline"]);
			 $contacts[] = $contact;
		 }
		 
		 echo json_encode($contacts);
	
	?>
	
	
}