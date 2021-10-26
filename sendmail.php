<?php 

// require_once('phpmailer/PHPMailerAutoload.php');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'ssl://smtp.spaceweb.ru';  			      // Specify main and backup SMTP servers ( $mail->Host = 'smtp.mail.ru'; )
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'potolokvkm@askitrim.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Deriabin7788'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('potolokvkm@askitrim.ru'); // от кого будет уходить письмо?
$mail->addAddress('askitrim@gmail.com'); // Кому будет уходить письмо
$mail->isHTML(true);   // Set email format to HTML

//Тело письма
$body = '<p><b>'.$_POST['title'].'</b></p>';
$body.= '<p><b>Имя: </b>'.$_POST['name'].'</p>';
$body.= '<p><b>Телефон: </b>'.$_POST['tel'].'</p>';
if(trim(!empty($_POST['email']))){
  $body.='<p><b>E-mail:</b> '.$_POST['email'].'</p>';
}

$mail->Subject = 'Пользователь с сайта "askitrim.ru/setki" оставил заявку!';
$mail->Body = $body;
$mail->AltBody = '';

//Отправляем
if(!$mail->send()) {
	echo 'Error';
} else {
	header('location: index.html');
}
?>


