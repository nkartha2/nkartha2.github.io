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
			////changing logo to black  as header moves down
				$('header img').attr({src:"img/logoyellow.png"});
			////changing header background color 
				$('header').addClass('header');
			}else if(direction==='up'){
			////removing view site and view on github options
				$('a.view').removeClass('site');
				$("<a href='#'>View Site</a>").remove();
			////changing logo back to white as header moves up
				$('header img').attr({src:"img/logow.png"});
			////changing header back to transparent 
				$('header').removeClass('header');
			}
		},
		offset:200
	});

////mobile menu icon

	var checkWindowWidth = function() {
		if (windowsize <= 779){
      		$('header nav ul').css('display','none');
      		$('header.project nav button').off("click");
      		$('header.project nav button').click(function(){
				$('header nav ul').slideToggle('slow');
			});
 		} else if(windowsize>=780){
      		$('header nav ul').css('display','block');
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

});