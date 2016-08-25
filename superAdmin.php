<?php 
    require_once "php/model.php";
?>

<!DOCTYPE HTML>
<ul class="demo-list-control mdl-list">
<li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
      <i class="material-icons  mdl-list__item-avatar">person</i>
      Bob Odenkirk
    </span>
      <span class="mdl-list__item-secondary-action">
        <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1">
          <input type="checkbox" id="list-switch-1" class="mdl-switch__input" checked />
        </label>
    </span>
  </li>
</ul>
<script>
    componentHandler.upgradeAllRegistered();
</script>