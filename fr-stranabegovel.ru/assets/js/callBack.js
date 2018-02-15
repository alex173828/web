function callBack() {
    var title = "Обратный звонок.";
        name = jQuery('#callBack_name').val(),
        phone = jQuery('#callBack_tel').val();
 
    if (!isName(name)) {
        alert('Пожалуйста, введите ваше имя.');
        return 0;
    }
  	if (!isPhone(phone)) {
        alert('Пожалуйста, введите номер телефона в формате 8 xxx xxx xx xx');
    	document.getElementById('callBack_tel').value="";
  		return 0;
    }
    jQuery.ajax({
        type: "POST",
        url: "callBack-form.php",
        data: {
            name: name,
            phone: phone
        },
        	success: function(data){
        	console.log(data);
          	if (data =='ok') {
            	document.location = "thank-you.html";
        	}
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

