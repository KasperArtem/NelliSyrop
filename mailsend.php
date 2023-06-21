<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$productName = $_POST['productName'];

$mail->setFrom('nelli@nellisyrop.com.ua', 'тм"Nelli"');

$mail->addAddress('motsnuy_serg@ukr.net');
$mail->addAddress('nelli.manager1@gmail.com');

$mail->Subject= 'Лист з сайту "Nelli"';

$body = '<h1>тм"Nelli"</h1>';

if(trim(empty($_POST['name']))){
    $body.='<h3>Зворотній зв\'язок:</h3>';
}

if(trim(!empty($_POST['name']))){
    $body.='<h3>Ось інформація про замовлення:</h3> <br> <p><strong>Імя:</strong> '.$name.'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Пошта:</strong> '.$email.'</p>';
}
if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Телефон:</strong> '.$phone.'</p>';
}
if(trim(!empty($_POST['productName']))){
    $body.='<p><strong>Продукція:</strong> '.$productName.'</p>';
}
$mail->Body = $body;

//Отправка
if(!$mail->send()){
    $message = 'Помилка';
} else{
    $message = 'Дані відпавленні!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>