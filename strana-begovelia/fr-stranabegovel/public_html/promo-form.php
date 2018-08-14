<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){
        $to = 'franchise.begovel@yandex.ru'; //Почта получателя
        $subject = 'Заявка на получение информации по условиям сотрудничества.'; //Заголовок сообщения
        $message = 'о
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
               			<p>Контактные данные отправителя:</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: fr-stranabegovel <mailing@fr-stranabegovel.ru>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers);
        echo("ok");
}
?>