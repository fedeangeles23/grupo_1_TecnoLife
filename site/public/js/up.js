/* alert("Sincronizado") */


$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 0) {
			$('#up').slideDown(300);
		} else {
			$('#up').slideUp(300);
		}
	});
	$('#up').on('click', function(){
		$('body, html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
});