$(document).ready(function(){

	windowsize = $(window).width();

	/////waypoint for header transition
	var waypoint  = new Waypoint({
		element: $('.overview'),
		handler:function(direction){
			console.log('triggered');
			console.log(direction);
			if(direction==='down'){
			////adding view site and view on github options
				$('a.view').addClass("site");
				$('header nav ul li:nth-of-type(1) a').removeClass('active');
			////changing logo to black  as header moves down
				$('header img').attr({src:"img/logoyellow.png"});
			////changing header background color 
				$('header').addClass('header');
			}else if(direction==='up'){
			////removing view site and view on github options
				$('a.view').removeClass('site');
				$("<a href='#'>View Site</a>").remove();
				$('header.project nav ul li:nth-of-type(1) a').addClass('active');
			////changing logo back to white as header moves up
				$('header img').attr({src:"img/logow.png"});
			////changing header back to transparent 
				$('header').removeClass('header');
			}
		},
		offset:60
	});

	var nthtype;

	function highlightNavlink(nthtype){
			$('header nav ul li a.active').removeClass('active');
			$('header nav ul li:nth-of-type('+nthtype+') a').addClass('active');
	}

	
////mobile menu icon

	var checkWindowWidth = function() {
		if (windowsize <= 779){
      		$('header nav ul').css('display','none');
      		$('header.project nav button').off("click");
      		$('header.project nav button').click(function(){
				$('header nav ul').slideToggle('slow');
				$('header.project nav ul li a').css('padding', '25%');
			});
 		} else if(windowsize>=780){
      		$('header nav ul').css('display','block');
			$('header.project nav ul li a').css('padding', '0');
    	}
    };

	checkWindowWidth(); // fire on load
		$( window ).resize(function(){ // fire on resize
			windowsize = $(window).width();
			checkWindowWidth(); // for responsive menu
	});

	////navigation animation 
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
	    return false;
	});

	var waypoint  = new Waypoint({
		element: $('section:nth-of-type(2)'),
		handler:function(direction){
			if(direction==='down'){
				highlightNavlink(2);
			}else if(direction==='up'){
				$('header nav ul li:nth-of-type(2) a.active').removeClass('active');
			}
		},
		offset:300
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
		element: $('section:nth-of-type(5)'),
		handler:function(direction){
			if(direction==='down'){
				highlightNavlink(5);
			}else if(direction==='up'){
				$('header nav ul li:nth-of-type(5) a.active').removeClass('active');
				$('header nav ul li:nth-of-type(4) a').addClass('active');
			}
		},
		offset:450
	});

	var waypoint  = new Waypoint({
	element: $('section:nth-of-type(6)'),
	handler:function(direction){
		if(direction==='down'){
			highlightNavlink(6);
		}else if(direction==='up'){
			$('header nav ul li:nth-of-type(6) a.active').removeClass('active');
			$('header nav ul li:nth-of-type(5) a').addClass('active');
		}
	},
	offset:450
	});

});