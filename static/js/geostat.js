//setInterval( function(){geoLatLon();}, 30000);
//setTimeout(function(){geoloc();},10000);
setInterval( function(){geoLatLon();}, 60000);
setTimeout(function(){geoloc();},60000);

var isSlow = false;
var uwms = document.getElementById("uwms");
var tok = document.getElementById("tok");
var chkgbm = document.getElementById("chkgbm");
var chksys1 = document.getElementById("chksys1");
var isLocal = document.getElementById("isLocal");
var isActive = true;
var msg = new SpeechSynthesisUtterance();

//check if current window/tab on focus
window.onfocus = function () { 
  isActive = true; 
}; 

window.onblur = function () { 
  isActive = false; 
};

//parse URL values
var urlParams;
var match,
		pl     = /\+/g,  // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query  = window.location.search.substring(1);

urlParams = {};
while (match = search.exec(query))
   urlParams[decode(match[1])] = decode(match[2]);

if (uwms.value != "" && uwms.value != undefined) {
	if (urlParams["u"] == undefined || urlParams["u"] == "undefined") {
		var ushare = document.getElementById("ushare");
		var title = document.getElementById("TITLE");
		if (ushare.value != "" && ushare.value != undefined) {
			document.getElementById("ping-res").innerHTML = "UWM" + "ushare" + '#' + ushare.value;
			if (title.value != "" && title.value != undefined) {
				document.title = "UWM" + "[" + title.value + "]" + '(' + ushare.value + ')' + '@' + window.location.host;
			} else {
				document.title = "UWM" + "ushare" + '(' + ushare.value + ')' + '@' + window.location.host;
			}
		} else {
			document.getElementById("ping-res").innerHTML = "UWM" + "guest" + '#' + uwms.value;
			document.title = "UWM" + "guest" + '(' + uwms.value + ')' + '@' + window.location.host;
		}
	} else {
		var dName = document.getElementById("dName");
		document.getElementById("ping-res").innerHTML = "UWM" + urlParams["u"] + '#' + uwms.value;
		if (dName.value != "" && dName.value != undefined) {
			document.title = "UWM" + urlParams["u"] + '[' + dName.value + ']' + '(' + uwms.value + ')' + '@' + window.location.host;
		} else {
			document.title = "UWM" + urlParams["u"] + '(' + uwms.value + ')' + '@' + window.location.host;
		}
	}
}

function success(position) {
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
	consoleLogger("latitude: "+latitude);
	consoleLogger("longitude: "+longitude);
    consoleLogger("maploc: "+latitude+","+longitude);
	var gpsURL = "/gps?lat=" + latitude + '&lon=' + longitude;
	cxhr2.open("POST", gpsURL, true); 
	cxhr2.send();
	 cxhr2.onreadystatechange=function()
	  {
	  if (cxhr2.readyState==4 && cxhr2.status==200)
		{
		var currVal = cxhr2.responseText;
			if (currVal != "OK") {
				return;
			}
		return;
		}
	 }
	return;
};

function error(msg) {
consoleLogger("Client geolocation failed!");
/*
	consoleLogger("Geo location failed!");
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	var gpsURL = "/gps?GPS_FUNC=USE_IP";
	cxhr2.open("POST", gpsURL, true); 
	cxhr2.send();
	 cxhr2.onreadystatechange=function()
	  {
	  if (cxhr2.readyState==4 && cxhr2.status==200)
		{
		var currVal = cxhr2.responseText;
			if (currVal != "OK") {
				return;
			}
		return;
		}
	 }
	return;
*/
}

function geoloc() {
	consoleLogger("geoloc called... uwms: "+uwms.value);
	//dummy
	//change speechkit theme
	var sColor = document.getElementById("startColor").value;
	var aColor = document.getElementById("activeColor").value;
	document.getElementById("skitt-ui").style.backgroundColor = aColor;
	document.getElementById("skitt-toggle-button").style.backgroundColor = sColor;
	if (uwms.value != "") {
		//run only on main uwm
		return;
	}
	//Run websocket (for local only)
	if (document.getElementById("isLocal").value == "true") {
		consoleLogger("initWebsocket()");
		initWebsocket();
	}
	
	consoleLogger("geoloc running...");
	//geoLatLon();
	consoleLogger("geoloc() running...");
	if (('speechSynthesis' in window) || ('SpeechRecognition' in window)) {
		window.speechSynthesis.cancel();
	}
	//initial ping
	sendPingRequest();
	var spInt = 10000;
	if (isLocal.value == "true" || isLocal.value == true) {
		spInt = 1200000;
	}
	g_Timeout = window.setInterval( function(){loopRequest();}, spInt);
	
	setInterval(function(){chkToken()}, 1800000);
	
	//speakTime();
	setInterval(function(){speakTime()}, 900000);	
};

function geoLatLon() {
	consoleLogger("geoLatLon() running...");
   	if (isActive == false) {
		//reduce bill
		return;
	}
    	if (navigator.geolocation) {
	  consoleLogger("Geo location successful!");
	  navigator.geolocation.getCurrentPosition(success, error);
	} else {
	  consoleLogger("Geo location not supported!");
	}
}
function speakTime(){
	if (document.hidden) {
		return;
	}
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}	
	if (localStorage[root+'speakingNow'] == 'Y') {
		return;
	}
	var ss = document.getElementById("soundStat");
	if (ss.value == "off") {
		return;
	} else {
		var e = document.getElementById("musicFlag");
		var res = e.src;
		var n = res.indexOf("/static/img/musicon.png");
		if (n > 0) {
		} else {
			return;
		}
	}
    
	if (('speechSynthesis' in window) || ('SpeechRecognition' in window)) {
		var Digital=new Date()
		var nowIs = formatDate2(Digital);
		var nowNa = 'Time now is '+nowIs;
		localStorage[root+'localspeak'] = 'Y';
		SpeechKITT.abortRecognition();
		//setInactiveListener();
		localStorage[root+'speakingNow'] = 'Y';
		localStorage[root+'activelistener'] = "off";
		var msg = new SpeechSynthesisUtterance();
		msg.rate = 1;
		msg.pitch = 1;
		msg.text = nowNa;
		window.speechSynthesis.speak(msg);
        msg.onend = function() {
            consoleLogger('Utterance has finished being spoken'+" "+"speakTime()");
			localStorage[root+'localspeak'] = 'N';
			localStorage[root+'speakingNow'] = 'N';
			localStorage[root+'activelistener'] = "on";
			SpeechKITT.startRecognition();
        }
	}
}

function speakMessage(thisMsg){
	if (document.hidden) {
		return;
	}
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}	
	if (localStorage[root+'speakingNow'] == 'Y') {
		return;
	}
	var ss = document.getElementById("soundStat");
	if (ss.value == "off") {
		return;
	} else {
		var e = document.getElementById("musicFlag");
		var res = e.src;
		var n = res.indexOf("/static/img/musicon.png");
		if (n > 0) {
		} else {
			return;
		}
	}
	
	if (('speechSynthesis' in window) || ('SpeechRecognition' in window)) {
		//if message has >>> read only the left text
		var str = thisMsg;
		var n = str.indexOf(">>>");
		if (n > 0) {
			var res = str.split(">>>");
			if (res.length > 0) {
				thisMsg = res[0];
			}		
		}
		localStorage[root+'localspeak'] = 'Y';
		//var msg = new SpeechSynthesisUtterance();
		localStorage[root+'speakingNow'] = 'Y';
		SpeechKITT.abortRecognition();
		//setInactiveListener();
		localStorage[root+'activelistener'] = "off";
		msg.rate = 1;
		msg.pitch = 1;
		msg.text = thisMsg;
		window.speechSynthesis.speak(msg);
        msg.onend = function() {
            consoleLogger('Utterance has finished being spoken'+" "+"speakMessage()");
			localStorage[root+'localspeak'] = 'N';
			SpeechKITT.startRecognition();
			SpeechKITT.setInstructionsText('');
			SpeechKITT.setSampleCommandsChunk(thisMsg);
			localStorage[root+'speakingNow'] = 'N';
			localStorage[root+'activelistener'] = "on";
        }
	}
}
function sendPingRequest(){
	if (document.hidden) {
		return;
	}
	var p = new Ping();
	var root = location.protocol + '//' + location.host + '/social?SO_FUNC=get-health';
	p.ping(root, function(data) {
		var d = new Date();
		var e = formatDate(d);
		
		//if very slow
		if (parseInt(data) > 15000) {
			if (isSlow == false) {
				isSlow = true;
				titleBlink("Slow Internet "+data+"ms","Very slow internet with delay "+data+"ms");
				alertify.error("Internet is very slow!", "", 0);
				var snd = Sound("data:audio/mp3;base64," + base64string);
				document.getElementById("ping-res").innerHTML = "<font color=red>" + e + " " + data + "ms" + "</font>";
			}
		} else {
			isSlow = false;
		//var uTitle = "[" + localStorage['mylocation-input'] + "]" + document.getElementById("desktop").value + "::" + document.getElementById("dName").value;
		var uTitle = "[" + document.getElementById("locNum").innerHTML + "]" + document.getElementById("desktop").value + "::" + document.getElementById("dName").value;
			titleBlink(uTitle+" "+data+"ms",uTitle+" delay "+data+"ms" + " :: ***" + document.getElementById("locNum").title + "***");
			document.getElementById("ping-res").innerHTML =  e + " " + data + "ms";
		}
	});	
}
function loopRequest(){
	consoleLogger("loopRequest() running...");
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}
	if (document.hidden) {
		return;
	}
	sendPingRequest();
	if (isSlow == false) {
	//do this if internet is fast!
		//check if new messages
		//consoleLogger("chkGBM()");
		//chkGBM();
		consoleLogger("chkGBM2()");
		chkGBM2();
		//check eq alarms
		consoleLogger("chkSYS1()");
		chkSYS1();
		//check site activity
		if (isActive == true) {
			consoleLogger("chkSYS2()");
			chkSYS2();
		}
		//check external sites activity
		if (isActive == true) {
			consoleLogger("chkSYS3()");
			chkSYS3();
		}
		//check broadcast msgs
		if (isActive == true) {
			consoleLogger("chkBM()");
			chkBM();
		}
		//check knock msgs
		if (isActive == true) {
			//consoleLogger("chkKN()");
			//chkKN();
		}
		//check motds
		if (isActive == true) {
			consoleLogger("chkMOTD()");
			chkMOTD();
		}
	}
	return;
}

function chkGBM() {
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}
    if (chkgbm.value == "false") {
        return;
    }
	var aUser = document.getElementById("aUser");
	if (aUser.value == "") {
		return;
	}
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpgbm=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpgbm=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-GBM' + "&UID=" + aUser.value;
	xmlhttpgbm.open("GET",chk_url,true);
	xmlhttpgbm.send();
	
	 xmlhttpgbm.onreadystatechange=function()
	  {
	  if (xmlhttpgbm.readyState==4 && xmlhttpgbm.status==200)
		{
		var currVal = xmlhttpgbm.responseText;
			if (currVal != "") {
				localStorage[root+'localspeak'] = 'Y';
				SpeechKITT.abortRecognition();
				var msgText = "<input type='hidden' value=\"'/guestbook?GB_FUNC=GB_OWNER', 500, 300, 'right', 'top', {title: 'Guestbook', icon: '/static/img/jswm-web.png'}\" size='60' id='gbook' /><a href='#page' onclick=\"eval('windowManager.openURI(' + $('gbook').value + ');');\"><img src='/static/img/newmessage.gif' height='50' width='100'></img><br></a>" + currVal;
				
				alertify.set({ delay: 15000 });
				alertify.success(msgText); 
				//speakMessage(currVal);
				
				var aSound = document.createElement('audio');
				var root = location.protocol + '//' + location.host;
				soundManager.createSound({
					id: 'mySoundNMESD',
					volume: 75,
					//url: root + "/static/audio/newmsg.ogg"
					url: root + "/static/audio/newmsg.mp3"
				});
				playSoundEvenDisabled('mySoundNMESD');
				
				var kmsg = "<img src='/static/img/sysinf.gif' width='20' height='20' align='middle'></img>New Msg";
				document.getElementById("ping-res").innerHTML = kmsg;
				titleBlink("New Msg",currVal);
				localStorage[root+'localspeak'] = 'N';
				SpeechKITT.startRecognition();
				return;
			}
		return;
		}
	 }
	 return;
};

function chkGBM2() {
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}
    if (chkgbm.value == "false") {
        return;
    }
	var aUser = document.getElementById("aUser");
	if (aUser.value == "") {
		return;
	}
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpgbm2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpgbm2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-GBM-NUM-NEW' + "&UID=" + aUser.value;
	xmlhttpgbm2.open("GET",chk_url,true);
	xmlhttpgbm2.send();
	
	 xmlhttpgbm2.onreadystatechange=function()
	  {
	  if (xmlhttpgbm2.readyState==4 && xmlhttpgbm2.status==200)
		{
		var currVal = xmlhttpgbm2.responseText;
			if (currVal != "") {
				//update the number
				console.log("New GB messages: "+currVal);
				document.getElementById('lblCartCount').innerHTML = currVal;
				if (currVal != "0") {
					consoleLogger("chkGBM()");
					chkGBM();
				}
				return;
			}
		return;
		}
	 }
	 return;
};

function chkSYS1() {
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}
    if (chksys1.value == "false") {
        return;
    }
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpeq=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpeq=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-SYS1' + "&UID=" + aUser.value;;
	xmlhttpeq.open("GET",chk_url,true);
	xmlhttpeq.send();
	
	 xmlhttpeq.onreadystatechange=function()
	  {
	  if (xmlhttpeq.readyState==4 && xmlhttpeq.status==200)
		{
		var currVal = xmlhttpeq.responseText;
			if (currVal != "") {		
				localStorage[root+'localspeak'] = 'Y';
				SpeechKITT.abortRecognition();
				alertify.set({ delay: 15000 });
				alertify.error(currVal); 
				
				speakMessage(currVal);
				
				var aSound = document.createElement('audio');
				var root = location.protocol + '//' + location.host;
				soundManager.createSound({
					id: 'mySoundEQ',
					volume: 75,
					//url: root + "/static/audio/WarningSiren.ogg"
					url: root + "/static/audio/WarningSiren.mp3"
				});
				//playSoundEvenDisabled('mySoundEQ');
				playSound('mySoundEQ');
				document.getElementById("ping-res").innerHTML = "<img src='/static/img/sysinf.gif' width='20' height='20' align='middle'></img>Alert";
				titleBlink("Alert",currVal);
				localStorage[root+'localspeak'] = 'N';
				SpeechKITT.startRecognition();
				return;
			}
		return;
		}
	 }
	 return;
};

function chkSYS2() {
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttact1=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttact1=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-SYS2' + "&UID=" + aUser.value;;
	xmlhttact1.open("GET",chk_url,true);
	xmlhttact1.send();
	
	 xmlhttact1.onreadystatechange=function()
	  {
	  if (xmlhttact1.readyState==4 && xmlhttact1.status==200)
		{
		var currVal = xmlhttact1.responseText;
			if (currVal != "") {	
				
				alertify.set({ delay: 15000 });
				
				var aSound = document.createElement('audio');
				var root = location.protocol + '//' + location.host;
				soundManager.createSound({
					id: 'mySoundWD',
					volume: 60,
					//url: root + "/static/audio/sonar.ogg"
					url: root + "/static/audio/sonar.mp3"
				});
				playSound('mySoundWD');
				document.getElementById("ping-res").innerHTML = "<img src='" + currVal + "' width='30' height='20' align='middle'></img>Site Act";
				titleBlink("Site Act",currVal);
				
				return;
			}
		return;
		}
	 }
	 return;
};
 
function chkSYS3() {
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttact1=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttact1=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-SYS3' + "&UID=" + aUser.value;;
	xmlhttact1.open("GET",chk_url,true);
	xmlhttact1.send();
	 xmlhttact1.onreadystatechange=function()
	  {
	  if (xmlhttact1.readyState==4 && xmlhttact1.status==200)
		{
		var currVal = xmlhttact1.responseText;
			if (currVal != "") {				
				alertify.set({ delay: 15000 });
				
				var aSound = document.createElement('audio');
				var root = location.protocol + '//' + location.host;
				soundManager.createSound({
					id: 'mySoundBB',
					volume: 50,
					//url: root + "/static/audio/water-drop.ogg"
					url: root + "/static/audio/water-drop.mp3"
				});
				playSound('mySoundBB');
				document.getElementById("ping-res").innerHTML = "<img src='" + currVal + "' width='30' height='20' align='middle'></img>External Act";
				titleBlink("External Act",currVal);
				
				return;
			}
		return;
		}
	 }
	 return;
};
 
function chkBM() {
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttbm=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttbm=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-BM' + "&UID=" + aUser.value;;
	xmlhttbm.open("GET",chk_url,true);
	xmlhttbm.send();

	 xmlhttbm.onreadystatechange=function()
	  {
	  if (xmlhttbm.readyState==4 && xmlhttbm.status==200)
		{
		var currVal = xmlhttbm.responseText;
			if (currVal != "") {				
				alertify.set({ delay: 15000 });
				alertify.error(currVal); 
				var aSound = document.createElement('audio');
				var root = location.protocol + '//' + location.host;
				soundManager.createSound({
					id: 'mySoundBB',
					volume: 50,
					//url: root + "/static/audio/beepbeep.ogg"
					url: root + "/static/audio/beepbeep.mp3"
				});
				
				var kmsg = "<img src='/static/img/sysinf.gif' width='20' height='20' align='middle'></img>Broadcast Msg";
				document.getElementById("ping-res").innerHTML = kmsg;
				titleBlink("Broadcast Msg",currVal);
				return;
			}
		return;
		}
	 }
	 return;
};

function chkKN() {
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttkn=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttkn=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	var UID = document.getElementById("aUser").value;
	chk_url = '/people?PEOPLE_FUNC=CHECK-KN&UID=' + UID;
	xmlhttkn.open("GET",chk_url,true);
	xmlhttkn.send();
	 xmlhttkn.onreadystatechange=function()
	  {
	  if (xmlhttkn.readyState==4 && xmlhttkn.status==200)
		{
		var currVal = xmlhttkn.responseText;
			if (currVal != "") {				
				alertify.set({ delay: 15000 });
				alertify.error(currVal); 
				
				var aSound = document.createElement('audio');
				var root = location.protocol + '//' + location.host;
				soundManager.createSound({
					id: 'mySoundKN2',
					volume: 50,
					//url: root + "/static/audio/ahem_x.ogg"
					url: root + "/static/audio/ahem_x.mp3"
				});
				playSoundEvenDisabled('mySoundKN2');
				var kmsg = "<img src='/static/img/sysinf.gif' width='20' height='20' align='middle'></img>Knock! Knock!";
				document.getElementById("ping-res").innerHTML = kmsg;
				titleBlink("Knock! Knock!",currVal);
				return;
			}
		return;
		}
	 }
	 return;
};
 
function chkMOTD() {
	if (localStorage[root + 'quite-flag'] == "on") {
		return;
	}
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttmo=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttmo=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	var UID = document.getElementById("aUser").value;
	chk_url = '/people?PEOPLE_FUNC=CHECK-MOTD&UID=' + UID;
	xmlhttmo.open("GET",chk_url,true);
	xmlhttmo.send();

	 xmlhttmo.onreadystatechange=function()
	  {
	  if (xmlhttmo.readyState==4 && xmlhttmo.status==200)
		{
		var currVal = xmlhttmo.responseText;
			if (currVal != "") {	
				localStorage[root+'localspeak'] = 'Y';
				SpeechKITT.abortRecognition();
				alertify.set({ delay: 15000 });
				alertify.error(currVal); 
				speakMessage(currVal);
				document.getElementById("ping-res").innerHTML = "<img src='/static/img/motd.png' width='20' height='20' align='middle'></img>MOTD";
				titleBlink("MOTD", currVal);
				localStorage[root+'localspeak'] = 'N';
				SpeechKITT.startRecognition();
				return;
			}
		return;
		}
	 }
	 return;
};

function chkToken() {
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	cxhr.open("GET","/create-channel" + "?UID=" + aUser.value); 
	cxhr.send();                 
	cxhr.onreadystatechange = function(){
	  if (cxhr.readyState==4 && cxhr.status==200)
		{   
			currToken = JSON.parse(cxhr.responseText);
			if (tok.value != currToken) {
				var currVal = "Channel token expired!";
				alertify.set({ delay: 60000 });
				alertify.error(currVal); 
				speakMessage(currVal);
				return;
			}
		}
	}
	return;
};

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var day = days[ date.getDay() ];
  return day + " " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
}

function formatDate2(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


function titleBlink(msg,dtls) {
	var thisTitle = msg + '@' + "UWM" + '@' + window.location.host;
	blinkTitleStop();
	blinkTitle(msg,dtls,500);
	return;
}

function playSoundEvenDisabled(sid) {
	soundManager.play(sid);
	return;
}
