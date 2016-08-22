<?php 
	require_once "php/controller.php";
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
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                <!-- Title -->
                <a class="mw-link-no-decor" href="./"><span class="mdl-layout-title">Mediwhere</span></a>
                <!-- Spacer -->
                <div class="mdl-layout-spacer"></div>
                <!-- Navigation -->
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                    <!-- TODO: replace with login check script -->
					<a class="mdl-navigation__link" href="#" onclick="load('admin.php')"><i class="material-icons">group_add</i></a>
                    <a class="mdl-navigation__link" href="#" onclick="load('doctors.php')"><i class="material-icons">assignment_ind</i></a>
                    <a class="mdl-navigation__link" href="#" onclick="load('emergency-numbers.php')"><i class="material-icons">report_problem</i></a>
                    <button type="submit" onclick="load('register.php')" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
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
				<a class="mdl-navigation__link" href="#" onclick="load('admin.php')"><i class="material-icons">group_add</i> Add Hospital</a>
                <a class="mdl-navigation__link" href="#" onclick="load('emergency-numbers.php')"><i class="material-icons">report_problem</i> Emergency Hotlines</a>
                <a class="mdl-navigation__link" href="#" onclick="load('doctors.php')"><i class="material-icons">assignment_ind</i> Doctors</a> 
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div class="page-content">
                    <div id="leftDock" class="dock ld-hide">
                        <div id="ld-header" class="d-header">
                            <div id="ld-title" class="d-title">
                                <h1 id="ld-name">Name Here</h1>
                            </div>
                            <button id="ld-close" onclick="closeLeftDock()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                                <i class="material-icons">close</i>
                            </button>
                        </div>
                        <div id="ld-information">
                            <table>
                                <tr>
                                    <th><i class='material-icons'>place</i></th>
                                    <td id="ld-inf-address">Address</td>
                                </tr>
                                <tr>
                                    <th><i class="material-icons">local_phone</i></th>
                                    <td id="ld-inf-hotline">Contact Number</td>
                                </tr>
                            </table>
                            <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                                <i class='material-icons'>assignment_ind</i>
                                <span id="ld-inf-doctors">Doctors</span>
                            </button>
                            <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                                <i class='material-icons'>local_hospital</i>
                                <span id="ld-inf-services">Services</span>
                            </button>
                            <table class="dock-rating-table">
                                <tr>
                                    <th>Accessibility</th>
                                    <td id="ld-inf-accessibility">
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Affordability</th>
                                    <td id="ld-inf-affordability">
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Ambiance</th>
                                    <td id="ld-inf-ambiance">
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div id="googleMap" class="gm-ld-hide gm-rd-hide"></div>
                    <div id="rightDock" class="dock rd-hide">
                        <div id="rd-header" class="d-header">
                            <div id="rd-title" class="d-title">
                                <h1 id="rd-name">Name Here</h1>
                            </div>
                            <button id="rd-close" onclick="closeRightDock()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                                <i class="material-icons">close</i>
                            </button>
                        </div>
                        <div id="rd-information">
                            <table>
                                <tr>
                                    <th><i class='material-icons'>place</i></th>
                                    <td id="rd-inf-address">Address</td>
                                </tr>
                                <tr>
                                    <th><i class="material-icons">local_phone</i></th>
                                    <td id="rd-inf-hotline">Contact Number</td>
                                </tr>
                            </table>
                            <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                                <i class='material-icons'>assignment_ind</i>
                                <span id="rd-inf-doctors">Doctors</span>
                            </button>
                            <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                                <i class='material-icons'>local_hospital</i>
                                <span id="rd-inf-services">Services</span>
                            </button>
                            <table class="dock-rating-table">
                                <tr>
                                    <th>Accessibility</th>
                                    <td id="rd-inf-accessibility">
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Affordability</th>
                                    <td id="rd-inf-affordability">
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Ambiance</th>
                                    <td id="rd-inf-ambiance">
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                        <i class='material-icons'>star</i>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
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
