<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content-"IE=edge">
        <meta name="viewort" content="width=device-width, initial-scale=1.0">

        <title>Mediwhere</title>

        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
        <link rel="stylesheet" href="css/material.min.css">
        <script src="js/material.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="css/material.pink-indigo.min.css">

        <link rel="stylesheet" href="css/mediwhere.css">
        <link rel="stylesheet" href="css/mediwhere-map.css">

        <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDd4GzSji1O65dMpVDE9CbqADLSYfqErt0"></script>
    </head>

    <body>
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                <!-- Title -->
                <a class="mw-link-no-decor" href="index.html"><span class="mdl-layout-title">Mediwhere</span></a>
                <!-- Spacer -->
                <div class="mdl-layout-spacer"></div>
                <!-- Navigation -->
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                    <!-- TODO: replace with login check script -->
                    <a class="mdl-navigation__link" href="#" onclick="load('doctors.html')"><i class="material-icons">assignment_ind</i></a>
                    <a class="mdl-navigation__link" href="#" onclick="load('emergency-numbers.html')"><i class="material-icons">local_hospital</i></a>
                    <button type="submit" onclick="load('signin.html')" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                        Sign In
                    </button>
                </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <a class="mw-link-no-decor" href="index.html"><span class="mdl-layout-title">Mediwhere</span></a>
                <nav class="mdl-navigation">
                <button type="submit" onclick="load('signin.html')" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                    Sign In
                </button>
                <a class="mdl-navigation__link" href="#" onclick="load('emergency-numbers.html')"><i class="material-icons">local_hospital</i> Emergency Hotlines</a>
                <a class="mdl-navigation__link" href="#" onclick="load('doctors.html')"><i class="material-icons">assignment_ind</i> Doctors</a> 
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div class="page-content">
                    <div id="googleMap"></div>
                </div>
            </main>
        </div>
		
		<?php
		$servername = "localhost";
		$username = "root";
		$password = "root";

		// Create connection
		$conn = new mysqli($servername, $username, $password);

		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 
		echo "Connected successfully";
		
		?>
        <script src="js/jquery-3.1.0.min.js"></script>
        <script src="js/navigation.js"></script>
        <script src="js/mediwhere-map.js"></script>
        <script>
            componentHandler.upgradeAllRegistered();
        </script>
    </body>
</html>