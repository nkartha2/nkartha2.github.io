$(document).ready(function(){

////changing work images to gifs 
	/////world bicycle relief image to gif 
	$('.work li:nth-of-type(1)').mouseenter(function(){
			$('.work ul li:first-child a img').attr('src','img/biker4.gif');
		});

		$('.work li:nth-of-type(1)').mouseleave(function(){
			$('.work ul li:first-child a img').attr('src','img/biker.png');
		});

	/////gigscout image to gif 

	$('.work li:nth-of-type(2)').mouseenter(function(){
			$('.work ul li:nth-of-type(2) a img').attr('src','img/gigscoutlogo.gif').css('width','30%');
		});

		$('.work li:nth-of-type(2)').mouseleave(function(){
			$('.work ul li:nth-of-type(2) a img').attr('src','img/gigscoutlogo.png').css('width','30%');
		});

	/////atmos image to gif 
	// $('.work li:nth-of-type(3)').mouseenter(function(){
	// 	$('.work ul li:nth-of-type(3) a img').attr('src','img/atmoshero.jpg').css('width','90%');
	// });

	$('.work li:nth-of-type(3)').mouseleave(function(){
		$('.work ul li:nth-of-type(3) a img').attr('src','img/atmoslogo.png');
	});

	$('.bxslider').bxSlider();


	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	return false;
	});
});