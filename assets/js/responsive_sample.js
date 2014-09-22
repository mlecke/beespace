// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Beespace 0.1 - JavaScript Library                                  │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2014 Michael Lecke (http://beespace.com)               │ \\
// └────────────────────────────────────────────────────────────────────┘ \\

$(document).ready(function(){
	$(window).resize(function(){
        var width = $(window).width();

        if (width <= 480){
        	$('.in').collapse('toggle');
        }
    })

.resize(); 

});