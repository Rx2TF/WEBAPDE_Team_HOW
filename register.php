<!DOCTYPE HTML>
<div class="content">
<div class="mw-container-small mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Register</h2>
    </div>
    <form action="#" id="registration-form">
        <div class="mdl-card__supporting-text">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="givenName" required>
                <label class="mdl-textfield__label" for="givenName" >First Name</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="LastName" required>
                <label class="mdl-textfield__label" for="lastName" >Last Name</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="email" id="email" required>
                <label class="mdl-textfield__label" for="email">Email</label>
                <span class="mdl-textfield__error">Enter a valid email address.</span>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="password" id="password" required>
                <label class="mdl-textfield__label" for="password">Password</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="password" id="password-check" required>
                <label class="mdl-textfield__label" for="password-check">Re-enter password</label>
                <span class="mdl-textfield__error">Passwords do not match.</span>
            </div>
        </div>
        <div class="mdl-card__actions mdl-card--border">
			<button onclick="register()" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="confirm">
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