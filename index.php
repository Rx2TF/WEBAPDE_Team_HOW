<?php 
	require_once "php/model.php";
	session_start();
?>
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
		<script>
		var doctors = 
		<?php	
			echo json_encode(getAllDoctors());
		?>;
		</script>
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                <!-- Title -->
                <a class="mw-link-no-decor" href="./"><span class="mdl-layout-title">Mediwhere</span></a>
                <!-- Spacer -->
                <div class="mdl-layout-spacer"></div>
                <!-- Navigation -->
                <nav class="mdl-navigation mdl-layout--large-screen-only">
					<?php
                        if(isset($_SESSION["admin"])){
                            switch($_SESSION["admin"]){
                                case 2:
                                    echo '<a class="mdl-navigation__link" href="#" onclick="load('."'superAdmin.php')".'"><i class="material-icons">supervisor_account</i></a>';
                                case 1:
                                    echo '<a class="mdl-navigation__link" href="#" onclick="load('."'admin.php')".'"><i class="material-icons">business</i></a>';
                                    echo '<a class="mdl-navigation__link" href="#" onclick="load('."'admin.php')".'"><i class="material-icons">group_add</i></a>';
                                    break;
                                }
                        }
                    
                    ?>
					<a class="mdl-navigation__link" href="#" onclick="load('doctors.php')"><i class="material-icons">assignment_ind</i></a>
                    <a class="mdl-navigation__link" href="#" onclick="load('emergency-numbers.php')"><i class="material-icons">report_problem</i></a>
                    <?php
                        if(isset($_SESSION["username"])){
                            echo "Hello, ".$_SESSION["first_name"]."! ";
                            echo '<form action="php\logout.php" method="POST"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">'."Sign Out</button></form>";
                            echo "<script>componentHandler.upgradeAllRegistered();</script>";
                        }
                        else{
                            echo '<button type="submit" onclick="load('."'signin.php')".'" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">'."Sign In"."</button>";
                        }
                        
                    ?>
                </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <a class="mw-link-no-decor" href="index.html"><span class="mdl-layout-title">Mediwhere</span></a>
                <nav class="mdl-navigation">
                <?php
                    if(isset($_SESSION["username"])){
                        echo "Hello, ".$_SESSION["first_name"]."! ";
                        echo '<form action="php\logout.php" method="POST"><button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">'."Sign Out</button></form>";
                        echo "<script>componentHandler.upgradeAllRegistered();</script>";
                    }
                    else{
                        echo '<button type="submit" onclick="load('."'signin.php')".'" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">'."Sign In"."</button>";
                    }
                    
                ?>
				<?php
					switch($_SESSION["admin"]){
						case 2:
							echo '<a class="mdl-navigation__link" href="#" onclick="load('."'superAdmin.php')".'"><i class="material-icons">supervisor_account</i>Change User Privilidges</a>';
						case 1:
							echo '<a class="mdl-navigation__link" href="#" onclick="load('."'admin.php')".'"><i class="material-icons">business</i>Add Hospital</a>';
							echo '<a class="mdl-navigation__link" href="#" onclick="load('."'admin.php')".'"><i class="material-icons">group_add</i>Add Doctor</a>';
					}
                ?>
                <a class="mdl-navigation__link" href="#" onclick="load('emergency-numbers.php')"><i class="material-icons">report_problem</i> Emergency Hotlines</a>
                <a class="mdl-navigation__link" href="#" onclick="load('doctors.php')"><i class="material-icons">assignment_ind</i> Doctors</a> 
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div class="page-content">
                    <div id="leftDock" class="dock ld-hide">
                    </div>
                    <div id="googleMap" class="gm-ld-hide gm-rd-hide"></div>
                    <div id="rightDock" class="dock rd-hide">
                </div>
            </main>
        </div>
        <script src="js/jquery-3.1.0.min.js"></script>
		<script src="js/view.js"></script>
        <script>
            var hospitals = 
            <?php
				echo json_encode(getAllHospitals());
            ?>;
            componentHandler.upgradeAllRegistered();
        </script>
    </body>
</html>
