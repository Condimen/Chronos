var startState = true;


document.onkeyup = function() {
	if (event.keyCode == 32) {
		playPause();
		console.log(event.keyCode);
	}
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
		console.log("Should be running");
		// start();
		startState = false;
	}
	else {
		playState("paused");
		console.log("Should be paused");
		startState = true;
	}
}
		
function start() {
	dSeconds.style.WebkitAnimationName = "rotate";
	seconds.style.WebkitAnimationName = "rotate";
	minutes.style.WebkitAnimationName = "rotate";
	hours.style.WebkitAnimationName = "rotate";
	dSeconds.style.WebkitAnimationIterationCount = "infinite";
	seconds.style.WebkitAnimationIterationCount = "infinite";
	minutes.style.WebkitAnimationIterationCount = "infinite";
	hours.style.WebkitAnimationIterationCount = "infinite";
	dSeconds.style.WebkitAnimationDuration = "1s";
	seconds.style.WebkitAnimationDuration = "60s";
	minutes.style.WebkitAnimationDuration = "3600s";
	hours.style.WebkitAnimationDuration = "43200s";
}
function restart() {
/*	dSeconds.style.WebkitAnimationDuration = "1s";
	seconds.style.WebkitAnimationDuration = "1s";
	minutes.style.WebkitAnimationDuration = "1s";
	hours.style.WebkitAnimationDuration = "1s";
	dSeconds.style.WebkitAnimationIterationCount = "1";
	seconds.style.WebkitAnimationIterationCount = "1";
	minutes.style.WebkitAnimationIterationCount = "1";
	hours.style.WebkitAnimationIterationCount = "1";
	playState("running")*/
	document.location.reload();
	$("#startPause").attr("class", "start");
}
function lap() {
	//to be coded
}
