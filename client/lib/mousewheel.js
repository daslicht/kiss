/** This is high-level function; REPLACE IT WITH YOUR CODE.
 * It must react to delta being more/less than zero.
 */
/*function handle(delta) {
	if (delta < 0)
		console.log('-');
	else
		console.log('+');
}

function wheel(event){
	var delta = 0;
	if (!event) event = window.event;
	if (event.wheelDelta) {
		delta = event.wheelDelta/120; 
	} else if (event.detail) {
		delta = -event.detail/3;
	}
	if (delta)
		handle(delta);
        if (event.preventDefault)
                event.preventDefault();
        event.returnValue = false;
}

/* Initialization code. *//*
if (window.addEventListener)
	window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;*/