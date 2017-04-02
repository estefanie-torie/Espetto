/*  Table of Contents 
01. MENU ACTIVATION
02. GALLERY JAVASCRIPT
03. FITVIDES RESPONSIVE VIDEOS
04. MOBILE SELECT MENU
05. Scroll to Top
06. TRANPARENT SLIDER BUTTON + PORTFOLIO
07. prettyPhoto Activation
08. Form Validation
09. Header Scroll to Fixed Option
10. Flickr Widget
11. Light Shortcodes

*/
/*
=============================================== 01. MENU ACTIVATION  ===============================================
*/
jQuery(document).ready(function($) {
	 'use strict';
	jQuery("ul.sf-menu").supersubs({ 
	        minWidth:    5,   // minimum width of sub-menus in em units 
	        maxWidth:    25,   // maximum width of sub-menus in em units 
	        extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
	                           // due to slight rounding differences and font-family 
	    }).superfish({ 
			animationOut:  {opacity:'show'},
			speed:         200,           // speed of the opening animation. Equivalent to second parameter of jQuery’s .animate() method
			speedOut:      'fast',
			autoArrows:    true,               // if true, arrow mark-up generated automatically = cleaner source code at expense of initialisation performance 
			dropShadows:   false,               // completely disable drop shadows by setting this to false 
			delay:     400               // 1.2 second delay on mouseout 
		});



/*
=============================================== 02. GALLERY JAVASCRIPT  ===============================================
*/
	
    $('.gallery-progression').flexslider({
		animation: "fade",      
		slideDirection: "horizontal", 
		slideshow: false,         
		slideshowSpeed: 7000,  
		animationDuration: 200,        
		directionNav: true,             
		controlNav: true               
    });

	 
    $('.homepage-carousel-progression').flexslider({
		animation: "slide",      
		slideDirection: "horizontal", 
		animationLoop: true,
		itemWidth: 181,
		itemMargin: 25,
		slideshow: true,         
		slideshowSpeed: 6000,  
		animationDuration: 200,        
		directionNav: false,             
		controlNav: false,  
		move: 1	
    });



/*
=============================================== 03. FITVIDES RESPONSIVE VIDEOS  ===============================================
*/

$("body").fitVids();



/*
=============================================== 04. MOBILE SELECT MENU  ===============================================
*/

	$('.sf-menu').mobileMenu({
	    defaultText: 'Navigate to...',
	    className: 'select-menu',
	    subMenuDash: '&ndash;&ndash;'
	});




/*
=============================================== 05. Scroll to Top  ===============================================
*/


    $(window).scroll(function(){ 
       });
       $('.scrollup').click(function(){
           $("html, body").animate({ scrollTop: 0 }, 300);
           return false;
       });
     





/*
=============================================== 06. TRANPARENT SLIDER BUTTON + PORTFOLIO  ===============================================
*/


	$('.portfolio-index-padding').transify({opacityOrig:0.8, percentWidth:'100%'});




/*
=============================================== 07. prettyPhoto Activation  ===============================================
*/

		jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: false, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: false, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			ie6_fallback: true,
			social_tools: '' /* html or false to disable  <div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div> */
		});



/*
=============================================== 08. Form Validation  ===============================================
*/



			$("#CommentForm").validate();

		
		
/*
=============================================== 09. Header Scroll to Fixed Option  ===============================================
*/

	
    $('#pro-header-fixed').scrollToFixed({ 
		spacerClass: 'pro-header-spacing',
		zIndex:'9999', dontSetWidth:'false'});




/*
=============================================== 10. Flickr Widget  ===============================================
*/
	//Flickr Widget in Sidebar			
			   
		// Our very special jQuery JSON fucntion call to Flickr, gets details of the most recent images. The ID here is: 52617155@N08			   
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=52617155@N08&lang=en-us&format=json&jsoncallback=?", displayImages);  //YOUR IDGETTR GOES HERE
		function displayImages(data){																															   
			// Randomly choose where to start. A random number between 0 and the number of photos we grabbed (20) minus  7 (we are displaying 7 photos).
			var iStart = Math.floor(Math.random()*(0));	
			
			// Reset our counter to 0
			var iCount = 1;								
			
			// Start putting together the HTML string
			var htmlString = "<ul>";					
			
			// Now start cycling through our array of Flickr photo details
			$.each(data.items, function(i,item){
										
				// Let's only display 6 photos (a 2x3 grid), starting from a the first point in the feed				
				if (iCount > iStart && iCount < (iStart + 9)) {
					
					// I only want the ickle square thumbnails
					var sourceSquare = (item.media.m).replace("_m.jpg", "_s.jpg");		
					
					// Here's where we piece together the HTML
					htmlString += '<li><a href="' + item.link + '" target="_blank">';
					htmlString += '<img src="' + sourceSquare + '" alt="' + item.title + '" title="' + item.title + '"/>';
					htmlString += '</a></li>';
				}
				// Increase our counter by 1
				iCount++;
			});		
			
		// Pop our HTML in the #images DIV	
		$('.flickr-widget-2').html(htmlString + "</ul>");
		
		// Close down the JSON function call
		}
		
	// The end of our jQuery function	

	
	
	
/*
=============================================== 11. Light Shortcodes  ===============================================
*/
	
	// Accordion
	$(".ls-sc-accordion").accordion({heightStyle: "content"});
	
	// Toggle
	$(".ls-sc-toggle-trigger").click(function(){$(this).toggleClass("active").next().slideToggle("fast");return false; });
	
	// Tabs
	$( ".ls-sc-tabs" ).tabs();
	
});
