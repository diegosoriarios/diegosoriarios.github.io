$( document ).ready(function() {
   let background = [
		'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    	'https://images.pexels.com/photos/239898/pexels-photo-239898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    	'https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    	'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    	'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    	'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?cs=srgb&dl=background-code-coder-177598.jpg&fm=jpg'
   ];
   let rand = Math.floor(Math.random() * 6);
   let back = background[rand].replace(/[\\"]/g, '');
   $(".bannerp").css({"background": "url(" + back + ")",
   					  "background-attachment": "fixed",
					  "background-repeat": "no-repeat",
					   "background-size": "cover",
					   "color": "#fff",
					   "width": "100%",
					   "height": "400px",
					   "display": "flex",
					   "justify-content": "center",
					   "align-items": "center",
					});
});

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