<?php 
    require_once "php/controller.php";
?>

<!DOCTYPE HTML>
<div class="content">
<div class="mw-container-small mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Add Doctor</h2>
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

            <div class="mdl-select mdl-js-select mdl-select--floating-label">
                <select class="mdl-select__input" id="professsion" name="professsion">
                <option value=""></option>
                <option value="option1">option 1</option>
                <option value="option2">option 2</option>
                <option value="option3">option 3</option>
                <option value="option4">option 4</option>
                <option value="option5">option 5</option>
                </select>
                <label class="mdl-select__label" for="professsion">Hospital</label>
            </div>

            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" id="email" name="email" required>
                <label class="mdl-textfield__label" for="email">Specialty</label>
                
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="password" id="password" name="password" required>
                <label class="mdl-textfield__label" for="password">Contact Number</label>
                <span class="mdl-textfield__error">Enter a valid contact number.</span>
            </div>
        </div>
        <div class="mdl-card__actions mdl-card--border">
			<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="confirm">
				Add
			</button>
			
            <!--<button onclick="load('register.html')" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                Register
            </button> -->
        </div>
    </form>
<div>
</div>
<script src = "js/view.js"></script>
<script>
    componentHandler.upgradeAllRegistered();
</script>