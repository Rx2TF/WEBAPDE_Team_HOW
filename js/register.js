function register(){
	var fname = document.getElementById("givenName");
	var lname = document.getElementById("LastName");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var verpass = document.getElementById("password-check");
	<?php
		 $sql = "SELECT DISTINCT(email) FROM users WHERE email =" 'email';
		 $result = $conn->query($sql);
		 if(mysqli_fetch_array($result) != 'email') {
			if('password' == 'password-check'){
				
			} 
		 }
		 
		 echo json_encode($contacts);
	
	?>
	
	
}