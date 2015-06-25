$(document).ready(function(){


////navigation animation 
	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
    return false;
	});

/////waypoint for header transition
	var waypoint  = new Waypoint({
		element: $('.work'),
		handler:function(direction){
			if(direction==='down'){
			////changing header background color 
				$('header').addClass('header');
			}else if(direction==='up'){
			////changing header back to transparent 
				$('header').removeClass('header');
			}
		},
		offset:200
	});


////changing work images on mouseenter 
	/////world bicycle relief image to gif 
	$('.work li:nth-of-type(1)').mouseenter(function(){
			$('.work ul li:first-child a img').attr('src','img/biker4.gif');
		});

		$('.work li:nth-of-type(1)').mouseleave(function(){
			$('.work ul li:first-child a img').attr('src','img/biker.png');
		});

	/////gigscout image to gif 

	$('.work li:nth-of-type(2)').mouseenter(function(){
			$('.work ul li:nth-of-type(2) a img').attr('src','img/gigscoutlogo2.gif').css('width','30%');
		});

		$('.work li:nth-of-type(2)').mouseleave(function(){
			$('.work ul li:nth-of-type(2) a img').attr('src','img/gigscoutlogo2.png').css('width','30%');
		});

	///atmos image  
	$('.work li:nth-of-type(3)').mouseenter(function(){
	$('.work li:nth-of-type(3) img').hide();
	$('.work li:nth-of-type(3) img').fadeIn(1200);
			});


	$('.work li:nth-of-type(3)').mouseleave(function(){
		$('.work ul li:nth-of-type(3) a img').attr('src','img/atmoslogo.png');
	});

////////slider for testimonial

	$('.bxslider').bxSlider();
});