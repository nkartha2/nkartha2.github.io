$(document).ready(function(){

	var waypoint  = new Waypoint({
		element: $('.overview'),
		handler:function(direction){
			console.log('triggered');
			console.log(direction);
			if(direction==='down'){
				$('a.view').addClass("site");
				$('header img').attr({src:"img/logo.png"});
				$('header').addClass('header');
			}else if(direction==='up'){
				$('a.view').removeClass('site');
				$("<a href='#'>View Site</a>").remove();
				$('header img').attr({src:"img/logow.png"});
				$('header').removeClass('header');
			}
		},
		offset:200
	});
	
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	$('header button').click(function(){
    	$('.otherwork').slideToggle("slow");
	});

});