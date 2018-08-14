function callBack() {
    var title = "Заявка на бесплатный тест трафика.";
        name = jQuery('#name').val();
        phone = jQuery('#tel').val();
  		email = jQuery('#email').val();
  		site = jQuery('#site').val();
 
    if (!isName(name)) {
        alert('Пожалуйста, введите ваше имя.');
        return 0;
    }
  	if (!isName(site)) {
        alert('Пожалуйста, укажите ваш сайт.');
        return 0;
    }
  	if (!isEmail(email)) {
        alert('Пожалуйста, введите email в формате example@yandex.ru');
        return 0;
    }

  	if (!isPhone(phone)) {
        alert('Пожалуйста, введите номер телефона в формате 8 xxx xxx xx xx');
    	document.getElementById('tel').value="";
  		return 0;
    }
    jQuery.ajax({
        type: "POST",
        url: "feedback-form.php",
        data: {
            name: name,
          	email: email,
          	site: site,
          	phone: phone
        },
        	success: function(data){
            	alert("Ваша заявка отправлена!");
        	}
    });
}

function clearString( str ) {
    return str.replace(/^\s+|\s+$/g,'');
}
 
function isName(name) {
    if(clearString(name) == '') {
        return false;
    }
    return true;
}
 
function isPhone(phone) {
    var re = /^\+?(?:[\-\(\)\ ]*\d[\-\(\)\ ]*){11}$/;
    return re.test(phone);
}

function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
