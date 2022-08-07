var root = location.protocol + '//' + location.host;

function soundOnOff() {
	var e = document.getElementById("soundFlag");
	var res = e.src;
	var soundOn = false;
	var n = res.indexOf("/static/img/sound-on.png");
	if (n > 0) {
		soundOn = true;
	} else {
		soundOn = false;
	}
	
	switch (soundOn) {
		case true:
			soundManager.stopAll();
			alertify.error("Sound has been disabled.");
			e.src = "/static/img/sound-off.png";
			document.getElementById("soundStat").value = "off";
			var statUrl = '/tools?FUNC=WIDGET&t=MyPreferences&MP_FUNC=JSWM_SOUND_OFF';
			sendSoundStatus(0, statUrl);
			break;
		case false:
			testSound();
			alertify.error("Sound has been enabled.");
			e.src = "/static/img/sound-on.png";
			document.getElementById("soundStat").value = "on";
			var statUrl = '/tools?FUNC=WIDGET&t=MyPreferences&MP_FUNC=JSWM_SOUND_ON';
			sendSoundStatus(1, statUrl);
			break;

	}
	return;
};

function testSound() {
	
	var aSound = document.createElement('audio');

	soundManager.createSound({
		id: 'mySoundTest',
		volume: 75,
		url: root + "/static/audio/R2D2e.ogg"
	});

	playSound('mySoundTest');
	return
	
};


function sendSoundStatus(stat, statUrl) {
	var kurl = location.protocol + '//' + location.host + statUrl;
	
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	cxhr2.open("GET",kurl, true); 
	cxhr2.send();
	if (stat == 0) {
		alertify.error("System message sent to disable all sounds.", "", 0);
	} else {
		alertify.error("System message sent to enable all sounds.", "", 0);
	}
};