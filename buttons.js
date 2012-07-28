var startState = true;


document.onkeyup = function() {
	if (event.keyCode == 83 || event.keyCode == 80) {
		playPause();
		mixpanel.track("Start/stop shortcut");
	}
	if (event.keyCode == 82) {
		mixpanel.track("Reset shortcut");
		location.reload();
	}
	console.log(event.keyCode);
}


function playState(state) {
	dSeconds.style.WebkitAnimationPlayState = state;
	seconds.style.WebkitAnimationPlayState  = state;
	minutes.style.WebkitAnimationPlayState  = state;
	hours.style.WebkitAnimationPlayState    = state;
}

function playPause() {

	mixpanel.track("Start/stop");

	if (startState == true) {
		playState("running");
		console.log("Running");
		startState = false;
	}
	else {
		playState("paused");
		console.log("Paused");
		startState = true;
	}
}