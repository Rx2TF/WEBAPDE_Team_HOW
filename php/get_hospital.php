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

    echo json_encode($hospital);
?>