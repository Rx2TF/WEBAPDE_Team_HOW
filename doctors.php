<!DOCTYPE HTML>

<?php

    $servername = "localhost";
    $username = "root";
    $password = "root";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if (mysqli_connect_error()) {
        die("Database connection failed: " . mysqli_connect_error());
    }
            echo "Connected successfully";

    $sql = "SELECT * FROM doctors";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            echo "Doctor: " . $row["last name"]. " " . $row["first name"]. " " . $row["specialization"].  "<br>";
        }
    } else {
        echo "0 results";
    }
?>

<div class="content-flex">
    <div class="mdl-card mdl-shadow--2dp card card-doctor">
        <div class="mdl-card__title">
            <img src="http://i.imgur.com/JCTUA5k.jpg?1">
        </div>
        <div class="mdl-card__supporting-text">
            <h4>Sabayton, Jun</h4>
            <h5>OBGYN</h5>
            <p>"Magnanakaw ako, para sainyo"</p>
        </div>
    </div>
    <div class="mdl-card mdl-shadow--2dp card card-doctor">
        <div class="mdl-card__title">
            <img src="http://i.imgur.com/JCTUA5k.jpg?1">
        </div>
        <div class="mdl-card__supporting-text">
            <h4>Sabayton, Jun</h4>
            <h5>OBGYN</h5>
            <p>"Magnanakaw ako, para sainyo"</p>
        </div>
    </div>
    <div class="mdl-card mdl-shadow--2dp card card-doctor">
        <div class="mdl-card__title">
            <img src="http://i.imgur.com/JCTUA5k.jpg?1">
        </div>
        <div class="mdl-card__supporting-text">
            <h4>Sabayton, Jun</h4>
            <h5>OBGYN</h5>
            <p>"Magnanakaw ako, para sainyo"</p>
        </div>
    </div>
</div>