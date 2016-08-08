<?php
	function validate(){
		$sql = "SELECT DISTINCT(email) FROM users WHERE email =" 'email';
		 $result = $conn->query($sql);
		 echo json_encode($result);
		 if($result->num_rows == 0) {
			if('password' == 'password-check'){
				var execute ="load('register.html')";
				$insertsql = 'INSERT INTO `mediwhere`.`users`(email,pword,first_name,last_name)  VALUES ("' + email + '","' + fname + '","' + lname  + '","' + password '");';
				$conn->query(%insertsql);
				document.getElementById(confirm).innerHTML += execute;
				
			} 
		 }	 
		 echo json_encode($contacts);
	}
?>