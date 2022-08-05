<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$email = $_POST['emailSubscribe'];

$mail->setFrom('example@www.example.com.ua', 'example');

$mail->addAddress('kasprukov99@gmail.com');

$mail->Subject= 'Лист з сайту "Nelli"';

$body = '<h1>Користувач сайту:</h1>';

if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Пошта:</strong> '.$email.'</p>';
}
$mail->Body = $body;

//Отправка
if(!$mail->send()){
    $message = 'Помилка';
} else{
    $message = 'Надіслано!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>