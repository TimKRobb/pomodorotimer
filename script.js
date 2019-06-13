var min = 25,
	sec = 0,
	timer,
	onPause = true;

var snd = new Audio('GameofThronesTheme.mp3');

function startTimer() {
	if (! onPause) {
		return;
	}
	onPause = false;
	document.getElementById("pause").removeAttribute("disabled");
	document.getElementById("start").setAttribute("disabled","disabled");
	timer = setInterval(function(){
		if ( sec == 0 && min == 0 ) {
			pauseTimer();
			snd.play();		
		}
		sec--;
		if (sec<0) {
			min--;
			sec=59;
		}
		if (min<0) {
			min=0;
			sec=0;
		}
		displayTimer();
	},1000);
}

function pauseTimer() {
	if (onPause) {
		startTimer();
	} else {
		clearInterval(timer);
		onPause = true;
	}
}

function resetTimer() {
	onPause = true;
	clearInterval(timer);
	min = 25;
	sec = 0;
	document.getElementById("start").removeAttribute("disabled");
	document.getElementById("pause").setAttribute("disabled","disabled");
	snd.pause();
	displayTimer();
}

function displayTimer() {
	document.getElementById("min").innerHTML = digitize(min);
	document.getElementById("sec").innerHTML = digitize(sec);
}

function digitize(n) {
	if ( n < 10 ) {
		return "0" + n;
	} else {
		return n;
	}
}

document.getElementById("pause").setAttribute("disabled","disabled");

displayTimer();