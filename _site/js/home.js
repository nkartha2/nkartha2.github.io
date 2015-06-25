$(document).ready(function(){


////////navigation animation
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
			console.log('triggered');
			console.log(direction);
			if(direction==='down'){
				$('header').addClass('header');
			}else if(direction==='up'){
				$('header').removeClass('header');
			}
		},
		offset:200
	});


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
			$('.work ul li:nth-of-type(2) a img').attr('src','img/gigscoutlogo2.gif').css('width','30%');
		});

		$('.work li:nth-of-type(2)').mouseleave(function(){
			$('.work ul li:nth-of-type(2) a img').attr('src','img/gigscoutlogo2.png').css('width','30%');
		});

	///atmos image to gif 
	$('.work li:nth-of-type(3)').mouseenter(function(){
		$('.work ul li:nth-of-type(3) a img').fadeIn(1000,function()
			{$(this).attr('src','img/atmoslogohover.png');
			});
	});

	$('.work li:nth-of-type(3)').mouseleave(function(){
		$('.work ul li:nth-of-type(3) a img').attr('src','img/atmoslogo.png');
	});

////////slider for testimonial

	$('.bxslider').bxSlider();


});