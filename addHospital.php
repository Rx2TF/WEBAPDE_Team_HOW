<?php 
    require_once "php/model.php";
?>

<!DOCTYPE HTML>
<div class="content">
<div class="mw-container-small mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Add Hospital</h2>
    </div>
    <form action="php/add_hospital.php" id="addhospital-form" method="POST">
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
			
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <label class="mdl-textfield__label" for="check" >Check Available Services of the Hospital</label>
            </div>
			
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
                <input type="checkbox" id="checkbox-1" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Anesthesiology</span>
            </label>
            
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
                <input type="checkbox" id="checkbox-2" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Bariatric and Metabolic</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-3">
                <input type="checkbox" id="checkbox-3" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Cardiology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-4">
                <input type="checkbox" id="checkbox-4" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">CT Scan and Ultrasound</span>
            </label>
            
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-5">
                <input type="checkbox" id="checkbox-5" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Dermatology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-6">
                <input type="checkbox" id="checkbox-6" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Dental Medicine</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-7">
                <input type="checkbox" id="checkbox-7" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Diabetology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-8">
                <input type="checkbox" id="checkbox-8" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Endocrinology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-9">
                <input type="checkbox" id="checkbox-9" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">ENT</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-10">
                <input type="checkbox" id="checkbox-10" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Gastroenterology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-11">
                <input type="checkbox" id="checkbox-11" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">General Surgery</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-12">
                <input type="checkbox" id="checkbox-12" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Hematology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-13">
                <input type="checkbox" id="checkbox-13" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Hepatobiliary Surgery</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-14">
                <input type="checkbox" id="checkbox-14" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Infectious Diseases</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-15">
                <input type="checkbox" id="checkbox-15" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Intensive Care</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-16">
                <input type="checkbox" id="checkbox-16" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Neonatology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-17">
                <input type="checkbox" id="checkbox-17" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Neurology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-18">
                <input type="checkbox" id="checkbox-18" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Nephrology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-19">
                <input type="checkbox" id="checkbox-19" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Nutrition Dietetics</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-20">
                <input type="checkbox" id="checkbox-20" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Obstetrics and Gynecology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-21">
                <input type="checkbox" id="checkbox-21" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Oncology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-22">
                <input type="checkbox" id="checkbox-22" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Ophthalmology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-23">
                <input type="checkbox" id="checkbox-23" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Othopedic</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-24">
                <input type="checkbox" id="checkbox-24" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Pediatrics</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-25">
                <input type="checkbox" id="checkbox-25" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Plastic Surgery</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-26">
                <input type="checkbox" id="checkbox-26" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Psychiatry</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-27">
                <input type="checkbox" id="checkbox-27" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Pulmonology</span>
            </label>
            
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-28">
                <input type="checkbox" id="checkbox-28" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Rheumatology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-29">
                <input type="checkbox" id="checkbox-29" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Thoracic and Cardiovascular</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-30">
                <input type="checkbox" id="checkbox-30" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Urology</span>
            </label>

            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-31">
                <input type="checkbox" id="checkbox-31" class="mdl-checkbox__input">
                <span class="mdl-checkbox__label">Vitreo - Retina</span>
            </label>
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