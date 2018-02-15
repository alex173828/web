<?
if((isset($_POST['email'])&&$_POST['email']!="")){ //Проверка отправились ли наши поля name и не пустые ли они
        $to = 'franchise.begovel@yandex.ru'; //Почта получателя. Через запятую можно указать сколько угодно адресов
        $subject = 'Заявка на презентацию.'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                    	<p>Контактные данные отправителя:</p>
                        <p>Email: '.$_POST['email'].'</p>                        
                    </body>
                </html>'; //Текст нашего сообщения. Можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
       // $headers .= "From: fr-stranabegovel <mailing@fr-stranabegovel.ru>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        echo("ok");
}
?> 
