	$(window).load(function() {    

	var theWindow        = $(window),
		$bg              = $("#bg"),
		aspectRatio      = $bg.width() / $bg.height();

	function resizeBg() {

            if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                $bg
                    .removeClass()
                    .addClass('bgheight');
            } else {
                $bg
                    .removeClass()
                    .addClass('bgwidth');
            }

	}

	theWindow.resize(function() {
            resizeBg();
	}).trigger("resize");
	
	$.scrollingParallax('../assets/frontend/bg.jpg', {
		bgHeight : '250%',
		staticSpeed : 0.75,
		staticScrollLimit : false
	}); 
	
	$("h1#lettering").lettering();

	});
