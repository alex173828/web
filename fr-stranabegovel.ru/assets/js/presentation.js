function presentation() {
    var title = "Презентация";
        email  = jQuery('#email').val();
 
    if (!isEmail(email)) {
        alert('Ошибка. Пожалуйста, введите email в формате example@yandex.ru');
        document.getElementById('presentation-form').reset();
        return 0;
    }
 
    jQuery.ajax({
        type: "POST",
        url: "presentation.php",
        data: {email : email},
        success: function(data){
        	console.log(data);
            document.location = "thank-you.html";
        }
    });
}
 
function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
