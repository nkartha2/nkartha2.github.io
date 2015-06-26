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
				$('header img').attr({src:"img/logo.png"});
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

  ////responsive nav 
	var checkWindowWidth = function() {
     var projectnav = $('header.project nav ul li');
     var projectbutton = $('header.project nav button');
     var white = true;

  ////hamburger icon only  
    if (windowsize <= 779){
      projectnav.css('display','none');
      projectbutton.off("click");
		  projectbutton.click(function() {
        if ($('header').hasClass('header') === false) {
    ////hamburger icon color toggling 
          if (projectnav.css('display') == 'block') {
            projectbutton.removeClass('activeb');
          } else {
            projectbutton.addClass('activeb');
          }
        }
          projectnav.slideToggle("slow");
		  });

    ////hamburger icon with nav - show other work options 
    }else if(windowsize>=780){
      projectnav.css('display','inline-block');
      projectbutton.css('background-color','transparent');
      projectbutton.off("click");
      projectbutton.click(function(){
				$('.otherwork').slideToggle("slow");
		   });
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