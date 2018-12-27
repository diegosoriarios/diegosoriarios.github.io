$(window).on('scroll', parallax)

function parallax(){
	var s = $(window).scrollTop();
	
	function pbg(e, t) {
		$(e).css({
			'background-attachment': 'fixed',
			'background-position': 'center ' + -(s*t) + 'px'	
		});
	}
	
		function ptxt(e, t) {
		$(e).css({
			'position': 'relative',
			'top': (s*t) + 'px'	
		});
	}
	
	//backgrounds
	pbg('header', .8);
	
	//texts
	ptxt('h1', .4);
	ptxt('.elep', .4);
	
}

parallax();