<?php 
    require_once "php/model.php";
?>
<script>
	
	var hospital = 
	<?php	
		echo json_encode(getHospital());
	?>;
	console.log(hospitals);
    componentHandler.upgradeAllRegistered();
</script>
<!DOCTYPE HTML>
<div class="content">
<div class="mw-container-small mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Edit Hospital</h2>
    </div>
    <form action="hospital_edit.php" id="addhospital-form" method="POST">
        <div class="mdl-card__supporting-text">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="givenName"  name="fname"required> 
                <label class="mdl-textfield__label" for="givenName" >Name of Hospital</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="LastName" name="lname" required>
                <label class="mdl-textfield__label" for="lastName" >Address</label>
            </div>

			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="password" id="password" name="password" required>
                <label class="mdl-textfield__label" for="password">Contact Number</label>
                <span class="mdl-textfield__error">Enter a valid contact number.</span>
            </div>
        </div>
        <div class="mdl-card__actions mdl-card--border">
			<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="confirm">
				Edit
			</button>
        </div>
    </form>
<div>
</div>
<script src = "js/view.js"></script>
<script>
    componentHandler.upgradeAllRegistered();
</script>