<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['site'])&&$_POST['site']!="")){ //Проверка отправились ли наши поля и не пустые ли они
        $to = 'alex173828@yandex.ru'; //Почта получателя
        $subject = 'Заявка на бесплатный тест трафика.'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                    	<p>Контактные данные отправителя:</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Сайт: '.$_POST['site'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения. Можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: alex173828 <alex173828@yandex.ru>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        echo("ok");
}
?>
