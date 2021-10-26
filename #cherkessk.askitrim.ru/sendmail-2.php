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

// Тип сетки
if ($_POST['select'] == "Обычная"){
  $select = "Обычная";
} else if ($_POST['select'] == "Премиальная"){
  $select = "Премиальная";
} else if ($_POST['select'] == "Плиссе"){
  $select = "Плиссе, гармошка";
} else if ($_POST['select'] == "Детская"){
  $select = "Детская, защищающая от выпадения";
};

// Цвет
if ($_POST['color'] == "Белый"){
  $color = "Белый";
} else if ($_POST['color'] == "Коричневый"){
  $color = "Коричневый";
};

// Полотно
if(trim(!empty($_POST['canvas']))){
  if ($_POST['canvas'] == "Стандарт"){
    $canvas = "Стандарт";
  } else if ($_POST['canvas'] == "Мошка"){
    $canvas = "Анти-мошка";
  } else if ($_POST['canvas'] == "Пыльца"){
    $canvas = "Анти-пыльца";
  } else if ($_POST['canvas'] == "Кошка"){
    $canvas = "Анти-кошка";
  };
}

// Проём
if(trim(!empty($_POST['opening']))){
  if ($_POST['opening'] == "Стандарт"){
    $opening = "Стандарт";
  } else if ($_POST['opening'] == "Мошка"){
    $opening = "Анти-мошка";
  };
}

//Тело письма
$body = '<p><b>Пользователь воспользовался калькулятором на сайте и хочет заказать сетки!</b></p>';
$body.= '<p><b>Имя: </b>'.$_POST['name'].'</p>';
$body.= '<p><b>Телефон: </b>'.$_POST['tel'].'</p>';
if(trim(!empty($_POST['email']))){
  $body.='<p><b>E-mail:</b> '.$_POST['email'].'</p>';
}
$body.= '<p><b>Тип сетки: </b>'.$select.'</p>';
$body.= '<p><b>Ширина: </b>'.$_POST['width'].'</p>';
$body.= '<p><b>Высота: </b>'.$_POST['height'].'</p>';
$body.= '<p><b>Цвет: </b>'.$color.'</p>';
if(trim(!empty($canvas))){
  $body.='<p><b>Полотно:</b> '.$canvas.'</p>';
}
if(trim(!empty($opening))){
  $body.='<p><b>Проём:</b> '.$opening.'</p>';
}
$body.= '<p><b>Цена: </b>'.$_POST['price'].' рублей</p>';

$mail->Subject = 'Пользователь с сайта "cherkessk.askitrim.ru/setki" оставил заявку!';
$mail->Body = $body;
$mail->AltBody = '';

//Отправляем
if(!$mail->send()) {
	echo 'Error';
} else {
	header('location: index.html');
}
?>


