$(document).ready(function(){

	var waypoint  = new Waypoint({
		element: $('.overview'),
		handler:function(direction){
			console.log('triggered');
			console.log(direction);
			if(direction==='down'){
				$('header').append("<a href='#' class='site'>View Site</a>");
				$('header').append("<a href='#' class='site'>View on Github</a>");
				// $('header').removeClass('project');
				$('header img').attr({src:"img/logo.png"});
				$('header').css('position', 'fixed');
				$('header').animate({backgroundColor: '#fff'
										}, 800);
				$('header nav ul li a').animate({color:'#000'},800);
				$('header.project nav button span').animate({backgroundColor: '#000'
										}, 800);
			}else if(direction==='up'){
				$('.site').remove();
				$("<a href='#'>View Site</a>").remove();
				$('header img').attr({src:"img/logow.png"});
				// $('header').css('position','static');
				// $('header').addClass('project');
				$('header').animate({backgroundColor: 'transparent'
										}, 800);
				$('header.project nav ul li a').animate({color:'#fff'},800);
				$('header.project nav ul li a').hover({color:'#000'},800);
				$('header.project nav ul li span').animate({backgroundColor:'#fff'},800);
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