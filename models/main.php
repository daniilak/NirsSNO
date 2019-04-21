<?php
$msg = "";

var_dump(API::getEvents(2018));

if (isset($_POST['g-recaptcha-response']) && Ref::verifyCaptcha($_POST['g-recaptcha-response'])) {
	$msg = "Произошла ошибка при авторизации <br> Попробуйте еще раз.";
}

if (isset($_POST['password']) && isset($_POST['login_auth'])) {
	$password 	= trim(strip_tags($_POST['password']));
	$login 		= trim(strip_tags($_POST['login_auth']));

	$s =  DataBase::SQL("SELECT *  FROM `facs` WHERE `id_vk` = ? LIMIT 1",	[$login],	TRUE);
	var_dump($s);
	die();
	// if ($stmt->rowCount() == 0)
	// {
	// 	$template->templateSetVar('form', '<div class="social-auth-links text-center"> <a href="{auth_url}" class="btn btn-block btn-social btn-facebook btn-flat">
	// 		<i class="fa fa-vk"></i> Войти через ВКонтакте</a></div>');
	// 	$template->templateSetVar('msg', 'Такого пользователя не существует');
	// 	$template->templateSetVar('auth_url', $GLOBALS['auth_url'] );
	// 	$template->templateCompile();
	// 	$template->templateDisplay();
	// 	die();
	// }
	// $data = $stmt->fetchAll();

	// if (!verifyPassword($password,$data[0]['pass_hash'])) 
	// {
	// 	$template->templateSetVar('form', '<div class="social-auth-links text-center"> <a href="{auth_url}" class="btn btn-block btn-social btn-facebook btn-flat">
	// 		<i class="fa fa-vk"></i> Войти через ВКонтакте</a></div>');
	// 	$template->templateSetVar('msg', 'Логин или пароль неправильные');
	// 	$template->templateSetVar('auth_url', $GLOBALS['auth_url'] );
	// 	$template->templateCompile();
	// 	$template->templateDisplay();
	// 	die();
	// }
	// $salt = getSalt();
	//   $token = $salt . '_' . md5(join('_', array($data[0]['GUID'],  $salt)));
	//   setcookie("token",$token,0x6FFFFFFF);
	//   setcookie("id",$data[0]['ID'],0x6FFFFFFF);
	//   header( 'Location: /starter', true, 307 );
	//   die();
}

$template->templateSetVar('msg', $msg);
$template->templateSetVar('recaptcha_sitekey', $GLOBALS['recaptcha_sitekey']);

$template->templateCompile();
$template->templateDisplay();
