$(function(){
	$('#tabs').click(function(){
		var abc = this.className.slice(0,5);
		$('#tabs-1').hide();
		$('#tabs-2').hide();
		$('#tabs-3').hide();
		$('#' + abc).fadeIn(500);
		$('#tabs').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('#tab-1').click();
	$('.bxslider').bxSlider();
	});
};