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
	

	function getAllDoctors(){
		global $conn;
		$sql = "SELECT * FROM doctors";
		$result = $conn->query($sql);
		$doctors = array();
		while($row = mysqli_fetch_array($result)) {
			$doctor = array("lname" => $row["last_name"],
			 "fname" => $row["first_name"],
			 "special" => $row["special"],
			 "contact" => $row["contact"]);
			 $doctors[] = $doctor;
		}
		return $doctors;
	}
	
	function getAllHospitals(){
		global $conn;
		$sql = "SELECT hospitalid, serviceid, hospital_name, address, lat, longh, hotline, access, afford, ambiance FROM hospital";
		$result =  $conn->query($sql);
		$hospitals = array();
		while($row = mysqli_fetch_array($result)) {
			$hospital = array(
				"id" => $row["hospitalid"],
				"name" => $row["hospital_name"],
				"address" => $row["address"],
				"lat" => $row["lat"],
				"lng" => $row["longh"],
				"accessibility" => $row["access"],
				"affordability" => $row["afford"],
				"ambiance" => $row["ambiance"]);
			$hospitals[] = $hospital;
		}
		return $hospitals;
	}

	function getAllHotlines(){
		global $conn;
		 $sql = "SELECT hospitalid, hospital_name , hotline FROM hospital ORDER BY hospital_name ASC";
		 $result = $conn->query($sql);
		 $contacts = array();
		 while($row = mysqli_fetch_array($result)) {
			 $contact = array("name" => $row["hospital_name"],
			 "hotline" => $row["hotline"]);
			 $contacts[] = $contact;
		 }
		 return $contacts;
	}

	function getHospital(){
		global $conn;
		$sql = "SELECT hospitalid, serviceid, hospital_name, address, hotline, access, afford, ambiance FROM hospital WHERE hospitalid =" . $_POST['id'];
		$result = $conn->query($sql);
		while($row = mysqli_fetch_array($result)) {
			$hospital = array(
			"id" => $row["hospitalid"],
			"service_id" => $row["serviceid"],
			"name" => $row["hospital_name"],
			"address" => $row["address"],
			"hotline" => $row["hotline"],
			"accessibility" => $row["access"],
			"affordability" => $row["afford"],
			"ambiance" => $row["ambiance"]);
		};
		return $hospital;
		
	}
	
	function addUser($email, $pword, $fname, $lname){
		global $conn;
		$sql = 'INSERT INTO `mediwhere`.`users`(email,pword,first_name,last_name)  VALUES ("'.$email.'","'.$pword.'","'.$fname.'","'.$lname.'");';
		$conn->query($sql);
	}
	
	function addHospital($name, $address, $contact){
		
	}
	
	
	function addDoctor($fname, $lname, $hospital, $specialty, $contactno){
		global $conn;
		$sqls = 'SELECT hospitalid FROM hospital WHERE hospital_name = "'.$hospital.'";';
		$result = $conn->query($sqls);
		$hospitals = array();
		while($row = mysqli_fetch_array($result)){
			$hospitals[] = $row["hospitalid"];
		}
		$sql = 'INSERT INTO `mediwhere`.`doctors`(hospitalid,last_name,first_name,special,contact)  VALUES ('.$hospitals[0].',"'.$lname.'","'.$fname.'","'.$specialty.'","'.$contactno.'");';
		echo $sql;
		$conn->query($sql);
		echo "<script type='text/javascript'>alert('Added New Doctor');</script>";
		//header('Location: ../'); 	
			
	}
	
	function getHospitalNames(){
		global $conn;
		$sql = "SELECT hospitalid, hospital_name FROM hospital";
		$result =  $conn->query($sql);
		$hospital_names = array();
		while($row = mysqli_fetch_array($result)) {
			$hospital_name = array("id" => $row["hospitalid"],
				"name" => $row["hospital_name"]);
			$hospital_names[] = $hospital_name;
		}
		return $hospital_names;
	}
?>