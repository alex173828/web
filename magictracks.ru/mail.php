<?php 
use PHPMailer\PHPMailer\PHPMailer;
require 'PHPMailer.php';

$mail = new PHPMailer;                            

$mail->SMTPAuth = true;                          
$mail->Host = 'smtp.yandex.ru';
$mail->Username = 'magicaltracks@yandex.ru';                 
$mail->Password = '13245aA';                           
$mail->SMTPSecure = 'ssl';                           
$mail->Port = 465;      


$mail->From = 'magicaltracks@yandex.ru';
$mail->FromName = $_POST['name'];

$mail->addAddress('magicaltracks@yandex.ru', 'Recepient Name');
$mail->isHTML(true);

$mail->Subject = $_POST['subject'];
$mail->Body = $_POST['name'].' '.$_POST['phone'];

if(!$mail->send()) {
    echo 0;
} else {
    echo 1;
}
?>