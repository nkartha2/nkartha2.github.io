$(document).ready(function(){

windowsize = $(window).width();

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
			////changing active nav link to work 
				$('header nav ul li:nth-of-type(1) a').removeClass('active');
				////changing logo back to white as header moves up
				$('header img').attr({src:"img/logoyellow.png"});
			}else if(direction==='up'){
			////changing header back to transparent 
				$('header').removeClass('header');
				////changing active nav link to home
				$('header nav ul li:nth-of-type(1) a').addClass('active');
				////changing logo back to white as header moves up
				$('header img').attr({src:"img/logo.png"});
			}
		},
		offset:200
	});

///waypoint for nav active links
	var nthtype;

	function highlightNavlink(nthtype){
			$('header nav ul li a.active').removeClass('active');
			$('header nav ul li:nth-of-type('+nthtype+') a').addClass('active');
	}

	var waypoint  = new Waypoint({
		element: $('section:nth-of-type(2)'),
		handler:function(direction){
			if(direction==='down'){
				highlightNavlink(2);
			}else if(direction==='up'){
				$('header nav ul li:nth-of-type(2) a.active').removeClass('active');
			}
		},
		offset:200
	});

	var waypoint  = new Waypoint({
		element: $('section:nth-of-type(3)'),
		handler:function(direction){
			if(direction==='down'){
				highlightNavlink(3);
			}else if(direction==='up'){
				$('header nav ul li:nth-of-type(3) a.active').removeClass('active');
				$('header nav ul li:nth-of-type(2) a').addClass('active');
			}
		},
		offset:200
	});

		var waypoint  = new Waypoint({
		element: $('section:nth-of-type(4)'),
		handler:function(direction){
			if(direction==='down'){
				highlightNavlink(4);
			}else if(direction==='up'){
				$('header nav ul li:nth-of-type(4) a.active').removeClass('active');
				$('header nav ul li:nth-of-type(3) a').addClass('active');
			}
		},
		offset:200
	});

		var waypoint  = new Waypoint({
		element: $('footer'),
		handler:function(direction){
			if(direction==='down'){
				highlightNavlink(5);
			}else if(direction==='up'){
				$('header nav ul li:nth-of-type(5) a.active').removeClass('active');
				$('header nav ul li:nth-of-type(4) a').addClass('active');
			}
		},
		offset:650
	});

// ////mobile menu icon

	var checkWindowWidth = function() {
		if (windowsize <= 779){
      		$('header nav ul').css('display','none');
      		$('header nav button').off("click");
      		$('header nav button').click(function(){
				$('header nav ul').slideToggle('slow');
				$('header nav ul li').css('padding', '15%');
			});
 		} else if(windowsize>=780){
      		$('header nav ul').css('display','block');
      		$('header nav ul li').css('padding', '0');
    	}
    };

	checkWindowWidth(); // fire on load
		$( window ).resize(function(){ // fire on resize
			windowsize = $(window).width();
			checkWindowWidth(); // for responsive menu
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
			$('.work ul li:nth-of-type(2) a img').attr('src','img/gigscoutnotemotion1.gif').css('width','30%');
		});

		$('.work li:nth-of-type(2)').mouseleave(function(){
			$('.work ul li:nth-of-type(2) a img').attr('src','img/gigscoutlogo2.png').css('width','30%');
		});

	///atmos image  
	$('.work li:nth-of-type(3)').mouseenter(function(){
	$('.work li:nth-of-type(3) img').hide();
	$('svg').css('display', 'block');
	// $('svg polygon').addClass('path');
			});

	$('.work li:nth-of-type(3)').mouseleave(function(){
		$('svg').css('display','none');
		$('.work li:nth-of-type(3) img').fadeIn();
	});

////////slider for testimonial

	$('.bxslider').bxSlider();
});