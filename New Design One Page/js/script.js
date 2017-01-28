

/*global $, alert, console*/

$( document ).ready(function(){

		$(".button-collapse").sideNav(); /**This is For Navbar**/

		// This is make background full width in any window/
		$('header').height($(window).height());
			$(window).resize(function() {
			$('header').height($(window).height());
		});

		// Links Add Active addClass
		$('.links li a').click(function () {
			$(this).addClass('active').sibLings().removeClass('active');

		});	

		/******* This is for turn on filterizr *******/ 
		// Trigger filterizr
		$('.filtr-container').filterizr();


		// Trigger light gallery
	$('#lightgallery').lightGallery();

	// Scroll top

	var scrollButton = $("#scroll-top");

	$(window).scroll(function()
		{
			$(this).scrollTop() >= 900 ? scrollButton.show() : scrollButton.hide();

		});

	//Click On Button To Scroll Top

	scrollButton.click(function()
		{
			$("html,body").animate({ scrollTop : 0 }, 700);
		}); 


});
 
  











