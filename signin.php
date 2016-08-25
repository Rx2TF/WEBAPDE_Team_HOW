<!DOCTYPE HTML>
<div class="content">
    <div class="mw-container-small mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Sign In</h2>
        </div>
        <form action="php\login.php" method="POST" id="signin-form">
            <div class="mdl-card__supporting-text">
                <div class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" name="email" type="text" id="email">
                    <label class="mdl-textfield__label" for="email">Email</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" name="password" type="password" id="password">
                    <label class="mdl-textfield__label" for="password">Password</label>
                </div>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <button onclick="load('register.php')" class="mdl-button mdl-js-button mdl-button--accent">
                    Register
                </button>
                <button type="submit" name="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                    Sign In
                </button>
            </div>
        </form>
    <div>
</div>
<script>
    componentHandler.upgradeAllRegistered();
</script>