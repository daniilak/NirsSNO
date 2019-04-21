<?php
class Ref
{
    static function GUID()
    {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
    }
    static function getSalt()
    {
        return sprintf('%04u%04u%04u%04u%04u%04u%04u%04u', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
    }
    static function verifyPassword($pass, $hash)
    {
        return (password_verify($pass, $hash)) ? true : false;
    }
    static function verifyCaptcha($gRecaptchaResponse)
    {
        $response = json_decode(
            file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $GLOBALS['reCAPTCHA'] . "&response=" . $gRecaptchaResponse),
            true
        );
        return $response["success"];
    }
}
