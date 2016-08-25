<!DOCTYPE HTML>
<?php 
    require_once "php/model.php";
?>
<script>
	var hospital_names =
		<?php
			echo json_encode(getHospitalNames());
		?>;
		console.log(hospital_names);
		componentHandler.upgradeAllRegistered();
</script>
<div class="content">
<div class="mw-container-small mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Add Doctor</h2>
    </div>
    <form action="php/add_doctor.php" id="adddoctor-form" method="POST">
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
                <select class="mdl-select__input" id="hospitalname" name="hospitalname">
                
                <script>
					componentHandler.upgradeAllRegistered();
					displayHospitalNames();
				</script>
                </select>
                <label class="mdl-select__label" for="hospitalname">Hospital</label>
            </div>

            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" id="specialty" name="specialty" required>
                <label class="mdl-textfield__label" for="specialty">Specialty</label>
                
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="contactno" id="contactno" name="contactno" required>
                <label class="mdl-textfield__label" for="contactno">Contact Number</label>
                <span class="mdl-textfield__error">Enter a valid contact number.</span>
            </div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" id="picurl" name="picurl" required>
                <label class="mdl-textfield__label" for="picurl">Picture Link</label>
                
            </div>
        </div>
        <div class="mdl-card__actions mdl-card--border">
			<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="confirm">
				Add
			</button>
        </div>
    </form>
</div>
</div>
