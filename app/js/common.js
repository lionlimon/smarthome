$(function() {

	$('.pop-up-button').on('click', function(e) {
		e.preventDefault();
		var parentId = $(this).attr('href');

		parentId = parentId.slice(1, parentId.length);
		
		$('.fullscreen[id="' + parentId + '"]').toggleClass('active');
	});
	
	$('.pop-up-close-button').on('click', function() {
		$(this).parent().parent('.fullscreen').toggleClass('active');
	});
});
