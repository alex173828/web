function init() {
	jQuery("#navigation-bar").on("click","a", smothScroll);
  	jQuery("#promo").on("click","a", smothScroll);
  	jQuery("#about").on("click","a", smothScroll);
	mailInit();
}

function smothScroll(event){
	event.preventDefault();
	var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top - 83;

	jQuery('body, html').animate({scrollTop: top}, 1000);
}

function mailInit() {
	jQuery('.showForm').on('click', showForm);
	jQuery('.sendEmail').on('click', sendMail);
}

function showForm(event) {
	event.preventDefault();
	var $this = jQuery(this),
		title = $this.attr('title'),
		form = jQuery('#modal-1');

	form.find('a').attr('title', title);
}

function sendMail(event) { 
	event.preventDefault();

	var $this = jQuery(this),
		subject = $this.attr('title'),
		form = $this.parents('form'),
		name = form.find('input[type="text"]'),
		phone = form.find('input[type="tel"]');

	if (!isName(name.val())) {
		alert('Пожалуйста, введите ваше имя.');
		return 0;
	}
	if (!isPhone(phone.val())) {
		alert('Пожалуйста, введите номер телефона в формате 8 xxx xxx xx xx');
		return 0;
	}

	jQuery.ajax({
		type: 'POST', url: 'mail.php',
	    data: {
	    	'name' : name.val(),
	    	'phone' : phone.val(),
	    	'subject' : subject
		},
		success: function(data) {
			name.val('');
			phone.val('');
			window.location = '/thank-you.html';
		}
	});
}

function clearString( str ) {
    return str.replace(/^\s+|\s+$/g,''); 
}

function isPhone(phone) {
	var re = /^\+?(?:[\-\(\)\ ]*\d[\-\(\)\ ]*){11}$/;
	return re.test(phone);
}

function isName(name) {
	if(clearString(name) == '') {
		return false;
	}
	return true;
}