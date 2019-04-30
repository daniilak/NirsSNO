<?php




$template->templateSetVar('recaptcha_sitekey', $GLOBALS['recaptcha_sitekey']);

$template->templateCompile();
$template->templateDisplay();
