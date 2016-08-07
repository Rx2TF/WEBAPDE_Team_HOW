function register(){
	var fname = document.getElementById("givenName");
	var lname = document.getElementById("LastName");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var verpass = document.getElementById("password-check");
	<?php
		 $sql = "SELECT DISTINCT(email) FROM users WHERE email =" 'email';
		 $result = $conn->query($sql);
		 if($result->num_rows == 0) {
			if('password' == 'password-check'){
				var execute ="load('register.html')";
				document.getElementById(confirm).innerHTML += execute;
			} 
		 }
		 
		 echo json_encode($contacts);
	
	?>
	
	
}