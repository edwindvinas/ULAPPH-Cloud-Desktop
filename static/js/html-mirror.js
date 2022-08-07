// preload shutter audio clip
var shutter = new Audio();
shutter.autoplay = false;
shutter.src = navigator.userAgent.match(/Firefox/) ? '/static/audio/shutter.ogg' : '/static/audio/shutter.ogg';
var root = location.protocol + '//' + location.host;

var urlParams;
var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

urlParams = {};
while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);

var uid = urlParams["uid"];
var lsroot = root+uid;
function loadSettings() {
	var user = document.getElementById("uid").value;
	if (user == undefined || user == "") {
	document.getElementById("uid").value = uid;
	}
	var sid = localStorage[lsroot+"mirror-sid"];
	if (sid !== undefined) {
	document.getElementById("sid").value = sid;
	}
	var title = localStorage[lsroot+"mirror-title"];
	if (title !== undefined) {
	document.getElementById("title").value = title;
	}
	var uwm = localStorage[lsroot+"mirror-uwm"];
	if (uwm !== undefined) {
	document.getElementById("uwm").value = uwm;
	}
	var fcap = localStorage[lsroot+"mirror-fcap"];
	if (fcap === true ) {
	document.getElemedntById("fixedcap").checked = true;
	}
	var autoML = localStorage[lsroot+"mirror-autoDetection"];
	if (autoML === true ) {
	document.getElementById("autoDetection").checked = true;
	}
}

function saveSettings() {
	var sid = document.getElementById("sid").value;
	localStorage[lsroot+"mirror-sid"] = sid;
	var title = document.getElementById("title").value;
	localStorage[lsroot+"mirror-title"] = title;
	var uwm = document.getElementById("uwm").value;
	localStorage[lsroot+"mirror-uwm"] = uwm;
	var fcap = document.getElementById("fixedcap").value;
	localStorage[lsroot+"mirror-fcap"] = fcap;
	var autoML = document.getElementById("autoDetection").value;
	localStorage[lsroot+"mirror-autoDetection"] = autoML;
}

function take_snapshot() {
	document.body.style.background = "blue";
	document.getElementById("page").style.backgroundColor = "yellow";
	setTimeout(function (){
		// play sound effect
		shutter.play();
		// take snapshot and get image data
		Webcam.snap( function(data_uri) {
			// display results in page
			document.getElementById('results').innerHTML =
				'<h2>Here is your large image: <a href="/infodb?DB_FUNC=MEDIA&CATEGORY=ALL_RECENT&LAST=5"><img src="/static/img/recent.png" width="40" height="40"/></a></h2>' +
				'<img src="'+data_uri+'"/>';
			//ulapph
			document.getElementById('imgdata').value = data_uri;
			upload_ulapph();
			document.getElementById("page").style.backgroundColor = "red";
		} );
	}, 1000); //delay 1 second
};


//ulapph
function take_snapshot10s() {
	document.body.style.background = "blue";
	document.getElementById("page").style.backgroundColor = "yellow";
	setTimeout(function (){
		// play sound effect
		shutter.play();
		// take snapshot and get image data
		Webcam.snap( function(data_uri) {
			// display results in page
			document.getElementById('results').innerHTML =
				'<h2>Here is your large image: <a href="/infodb?DB_FUNC=MEDIA&CATEGORY=ALL_RECENT&LAST=5"><img src="/static/img/recent.png" width="40" height="40"/></a></h2>' +
				'<img src="'+data_uri+'"/>';
			//ulapph
			document.getElementById('imgdata').value = data_uri;
			upload_ulapph();
			document.getElementById("page").style.backgroundColor = "red";
		} );
	}, 9000); //delay 9 second
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

function take_snapshot1m12h() {
	var seconds = 720;
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

function take_snapshot15s12h() {
	var seconds = 2880;
	function tick() {
		var counter = document.getElementById("counter");
		seconds--;
		//counter.innerHTML = '<h1>' + "0:" + (seconds < 10 ? "0" : "") + String(seconds) + '</h1>';
		//alert("hi edwin!");
		take_snapshot();
		if( seconds > 0 ) {
			setTimeout(tick, 15000);
		} else {
			//alert("Done taking pics!");
			document.body.style.background = "white";
		}
	}
	tick();
}

function take_snapshot30m24h() {
	var seconds = 48;
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

function take_snapshot1m24h() {
	var seconds = 1440;
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

function take_snapshot30m1y() {
	var seconds = 262800;
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

function take_snapshot1m1y() {
	var seconds = 525600;
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

function take_snapshot15s1y() {
	var seconds = 2102400;
	function tick() {
		var counter = document.getElementById("counter");
		seconds--;
		//counter.innerHTML = '<h1>' + "0:" + (seconds < 10 ? "0" : "") + String(seconds) + '</h1>';
		//alert("hi edwin!");
		take_snapshot();
		if( seconds > 0 ) {
			setTimeout(tick, 15000);
		} else {
			//alert("Done taking pics!");
			document.body.style.background = "white";
		}
	}
	tick();
};

function take_snapshot5s1y() {
	var seconds = 6307200;
	function tick() {
		var counter = document.getElementById("counter");
		seconds--;
		//counter.innerHTML = '<h1>' + "0:" + (seconds < 10 ? "0" : "") + String(seconds) + '</h1>';
		//alert("hi edwin!");
		take_snapshot();
		if( seconds > 0 ) {
			setTimeout(tick, 5000);
		} else {
			//alert("Done taking pics!");
			document.body.style.background = "white";
		}
	}
	tick();
};
