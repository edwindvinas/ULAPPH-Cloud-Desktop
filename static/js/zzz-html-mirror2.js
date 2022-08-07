// preload shutter audio clip
var shutter = new Audio();
shutter.autoplay = false;
shutter.src = navigator.userAgent.match(/Firefox/) ? '/audio/shutter.ogg' : '/audio/shutter.ogg';

function take_snapshot() {
	// play sound effect
	document.body.style.background = "blue";
	shutter.play();
	// take snapshot and get image data
	Webcam.snap( function(data_uri) {
		// display results in page
		document.getElementById('results').innerHTML =
			'<h2>Here is your large image: <a href="/infodb?DB_FUNC=MEDIA&CATEGORY=ALL_RECENT"><img src="https://edwin-daen-vinas.appspot.com/img/recent.png" width="40" height="40"/></a></h2>' +
			'<img src="'+data_uri+'"/>';
		//ulapph
		document.getElementById('imgdata').value = data_uri;
		upload_ulapph();
	} );
}

//ulapph
function take_snapshot10s() {
	// play sound effect
	document.body.style.background = "blue";
	shutter.play();
	// take snapshot and get image data
	Webcam.snap( function(data_uri) {
		// display results in page
		document.getElementById('results').innerHTML =
			'<h2>Here is your large image: <a href="/infodb?DB_FUNC=MEDIA&CATEGORY=ALL_RECENT"><img src="https://edwin-daen-vinas.appspot.com/img/recent.png" width="40" height="40"/></a></h2>' +
			'<img src="'+data_uri+'"/>';
		//ulapph
		document.getElementById('imgdata').value = data_uri;
		upload_ulapph();
	} );
};

function take_snapshot10s1m() {
	var seconds = 5;
	function tick() {
		var counter = document.getElementById("counter");
		seconds--;
		//counter.innerHTML = '<h1>' + "0:" + (seconds < 10 ? "0" : "") + String(seconds) + '</h1>';
		//alert("hi edwin!");
		take_snapshot();
		if( seconds > 0 ) {
			setTimeout(tick, 10000);
		} else {
			//alert("Done taking pics!");
			document.body.style.background = "white";
		}
	}
	tick();
};

function take_snapshot1m1h() {
	var seconds = 60;
	function tick() {
		var counter = document.getElementById("counter");
		seconds--;
		//counter.innerHTML = '<h1>' + "0:" + (seconds < 10 ? "0" : "") + String(seconds) + '</h1>';
		//alert("hi edwin!");
		take_snapshot();
		if( seconds > 0 ) {
			setTimeout(tick, 60000);
		} else {
			//alert("Done taking pics!");
			document.body.style.background = "white";
		}
	}
	tick();
};

function take_snapshot30m12h() {
	var seconds = 24;
	function tick() {
		var counter = document.getElementById("counter");
		seconds--;
		//counter.innerHTML = '<h1>' + "0:" + (seconds < 10 ? "0" : "") + String(seconds) + '</h1>';
		//alert("hi edwin!");
		take_snapshot();
		if( seconds > 0 ) {
			setTimeout(tick, 1800000);
		} else {
			//alert("Done taking pics!");
			document.body.style.background = "white";
		}
	}
	tick();
};