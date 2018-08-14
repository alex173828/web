function cooperation() {
    var title = "Информация по условиям сотрудничества.",
        email  = jQuery('#promo-form_email').val(),
        name = jQuery('#promo-form_name').val(),
        phone = jQuery('#promo-form_tel').val();
 
    if (!isName(name)) {
        alert('Пожалуйста, введите ваше имя.');
        return 0;
    }
  	if (!isPhone(phone)) {
        alert('Пожалуйста, введите номер телефона в формате 8 XXX XXX XX XX');
    	document.getElementById('promo-form_tel').value="";
  		return 0;
    }
  	if (!isEmail(email)) {
        alert('Ошибка. Пожалуйста, введите email в формате example@yandex.ru');
        document.getElementById('promo-form_email').value="";
        return 0;
    }
 
    jQuery.ajax({
        type: "POST",
        url: "promo-form.php",
        data: {email: email,
            name: name,
            phone: phone},
        success: function(data){
            if (data == 'ok') {
                location.href = 'thank-you.html';
            }
        }
    });
}
 
function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
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