var startState = true;


document.onkeyup = function() {
	if (event.keyCode == 83 || event.keyCode == 80) {
		playPause();
	}
	if (event.keyCode == 82) {
		location.reload();
	}
	console.log(event.keyCode);
}


function playState(state) {
	dSeconds.style.WebkitAnimationPlayState = state;
	seconds.style.WebkitAnimationPlayState = state;
	minutes.style.WebkitAnimationPlayState = state;
	hours.style.WebkitAnimationPlayState = state;
}

function playPause() {

	if (startState == true) {
		playState("running");
		console.log("Running");
		// start();
		startState = false;
	}
	else {
		playState("paused");
		console.log("Paused");
		startState = true;
	}
}