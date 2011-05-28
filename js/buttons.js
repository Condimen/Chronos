function start() {
	dSeconds.style.WebkitAnimationName = "rotate";
	seconds.style.WebkitAnimationName = "rotate";
	minutes.style.WebkitAnimationName = "rotate";
	hours.style.WebkitAnimationName = "rotate";
	dSeconds.style.WebkitAnimationIterationCount = "infinite";
	seconds.style.WebkitAnimationIterationCount = "infinite";
	minutes.style.WebkitAnimationIterationCount = "infinite";
	hours.style.WebkitAnimationIterationCount = "infinite";
	dSeconds.style.WebkitAnimationPlayState = "running";
	seconds.style.WebkitAnimationPlayState = "running";
	minutes.style.WebkitAnimationPlayState = "running";
	hours.style.WebkitAnimationPlayState = "running";
	
}
function pause() {
	dSeconds.style.WebkitAnimationPlayState = "paused";
	seconds.style.WebkitAnimationPlayState = "paused";
	minutes.style.WebkitAnimationPlayState = "paused";
	hours.style.WebkitAnimationPlayState = "paused";
}
function restart() {
	dSeconds.style.WebkitAnimationName = "";
	ssecondsstyle.WebkitAnimationName = "";
	minutes.style.WebkitAnimationName = "";
	hours.style.WebkitAnimationName = "";
	dSeconds.style.WebkitAnimationIterationCount = "0";
	seconds.style.WebkitAnimationIterationCount = "0";
	minutes.style.WebkitAnimationIterationCount = "0";
	hours.style.WebkitAnimationIterationCount = "0";
}
function lap() {
}