<?php 
    require_once "php/mysqli_connector.php";
?>

<!DOCTYPE HTML>
<div class="content">
<div class="mw-container-small mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Register</h2>
    </div>
    <form action="php/reg_validator.php" id="registration-form" method="POST">
        <div class="mdl-card__supporting-text">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="givenName"  name="fname"required>
                <label class="mdl-textfield__label" for="givenName" >First Name</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="LastName" name="lname" required>
                <label class="mdl-textfield__label" for="lastName" >Last Name</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="email" id="email" name="email" required>
                <label class="mdl-textfield__label" for="email">Email</label>
                <span class="mdl-textfield__error">Enter a valid email address.</span>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="password" id="password" name="password" required>
                <label class="mdl-textfield__label" for="password">Password</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="password" id="password-check" name="pcheck" required>
                <label class="mdl-textfield__label" for="password-check">Re-enter password</label>
                <span class="mdl-textfield__error">Passwords do not match.</span>
            </div>
        </div>
        <div class="mdl-card__actions mdl-card--border">
			<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="confirm">
				Register
			</button>
			
            <!--<button onclick="load('register.html')" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                Register
            </button> -->
        </div>
    </form>
<div>
</div>
<script src = "js/register.js"></script>
<script>
    componentHandler.upgradeAllRegistered();
</script>