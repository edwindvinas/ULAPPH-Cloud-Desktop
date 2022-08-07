//--start channel codes
var el = document.getElementById("chan-id");
var et = document.getElementById("token-id");
var ea = document.getElementById("auser");
var ed = document.getElementById("isDesktop");
var es = document.getElementById("step");
var tu = document.getElementById("targetURL");
var us = document.getElementById("ushare");
var tl = document.getElementById("TITLE");
var e = document.getElementById("channel-area");
var root = location.protocol + '//' + location.host;
var debugOn = false;

var FL_SENT_AUTH_DATA = false;
var FL_DELETE_SENT = false;
 
channelConnect();

function channelConnect() {
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	if (es.value == "STEP1") {
		e.innerHTML += "<img src='/static/img/loading.gif' width=60 height=60></img><br><!--Copy the passcode below & click enter passcode--><br>";
		var str = tu.value;
		var res = str.replace(/&/g, "@888@");
		e.innerHTML += "<a href=\"/message-channel?CHAN_FUNC=authPasscode&mode=qr" + "&TID=" + et.value + "&UID=TEMP" + ea.value + "&CID=" + el.value + "&target-url=" + res + "\"><img src=\"/static/img/pointer.gif\"><!--Click Here to Enter Passcode--> Please wait... you will be redirected to the desktop...</a><br>";
		
	} else if (es.value == "guest1") {
		e.innerHTML += "<img src='/static/img/loading.gif' width=60 height=60></img><br><!--Copy the passcode below & click enter passcode--><br>";
		var str = tu.value;
		var res = str.replace(/&/g, "@888@");
		e.innerHTML += "<a href=\"/message-channel?CHAN_FUNC=authPasscode2&mode=guest" + "&TID=" + et.value + "&UID=TEMP" + ea.value + "&CID=" + el.value + "&target-url=" + res + "\"><h3><img src=\"/static/img/pointer.gif\"><!--Click Here to Enter Passcode--> Please wait... you will be redirected to the desktop...</h3></a><br>";
		
		var lolink = "/message-channel?CHAN_FUNC=deleteChannel&CID=" + ea.value + '&TID=' + et.value  + '&UID=' + ea.value;
		if (debugOn == true) {
			e.innerHTML += "chan-id: " + el.value + "<br>";
			if (et.value != "") {
				e.innerHTML += "token-id: " + "OK" + "<br>";
			}
			e.innerHTML += "auser: " + ea.value + "<br>";
			e.innerHTML += "isDesktop: " + ed.value + "<br>"; 
			e.innerHTML += "step: " + es.value + "<br>";
		}
		
		xhr.open("GET","/message-channel?CHAN_FUNC=updateChannel2&CID=" + el.value + '&TID=' + et.value  + '&UID=' + el.value, true); 
		xhr.send();                 
		xhr.onreadystatechange = function(){
		  if (xhr.readyState==4 && xhr.status==200)
			{   
				var obj = JSON.parse(xhr.responseText);
				var redLink = "/message-channel?CHAN_FUNC=authPasscodeVal2" + "&" + "UID=" + el.value  + "&" + "passcode=" + obj.Passcode + "&" + "TID=" + et.value + "&" + "CID=" + el.value + "&" + "SID=" + us.value + "&TITLE=" + tl.value + "&" + "target-url=" + "/?q=home2" + "&" + "mode=" + "&" + "guest";
				window.location.assign(redLink);
			}
		};

	} else if (es.value == "STEP2") {
		var lolink = "/message-channel?CHAN_FUNC=deleteChannel&CID=" + ea.value + '&TID=' + et.value  + '&UID=' + ea.value;
		e.innerHTML += "<a href='/logout?LFUNC=LOGOUT'><img src='img/ulapph-icons-logout.png' width=90 height=90></img></a> | <a href=\"\" onclick=\"deleteSession();return false;\"><img src='img/channel-disconnected.png' width=90 height=90></img></a><br>";
		if (debugOn == true) {
			e.innerHTML += "chan-id: " + el.value + "<br>";
			if (et.value != "") {
				e.innerHTML += "token-id: " + "OK" + "<br>";
			}	
			e.innerHTML += "auser: " + ea.value + "<br>";
			e.innerHTML += "isDesktop: " + ed.value + "<br>"; 
			e.innerHTML += "step: " + es.value + "<br>";
		}
		
		xhr.open("GET","/message-channel?CHAN_FUNC=updateChannel&CID=" + el.value + '&TID=' + et.value  + '&UID=' + ea.value, true); 
		xhr.send();                 
		xhr.onreadystatechange = function(){
		  if (xhr.readyState==4 && xhr.status==200)
			{   
				var obj = JSON.parse(xhr.responseText);
				var redLink = "/message-channel?CHAN_FUNC=authPasscodeVal2" + "&" + "UID=" + el.value  + "&" + "passcode=" + obj.Passcode + "&" + "TID=" + et.value + "&" + "CID=" + el.value + "&" + "&" + "SID=" + us.value + "target-url=" + "/?q=home2" + "&" + "mode=" + "guest" + "&" + "TITLE=" + tl.value;
				window.location.assign(redLink);
			}
		};
	};
	
}

function onOpen() {
	soundNow();
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
               
	if (es.value == "STEP1") {
		e.innerHTML += "... scan qr code...";
	} else if (es.value == "STEP1") {
		e.innerHTML += "Sending auth message...";
		xhr2.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + el.value + '&message=' + et.value + '&FROM=', true);
		xhr2.send(); 
		e.innerHTML += "Sent message to other device... <br>";
	}
		
		
};

function deleteChannel(){
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	e.innerHTML += "Deleting temp channel record...<br>";
	e.innerHTML += el.value;
	xhr2.open("GET","/message-channel?CHAN_FUNC=deleteChannel&CID=" + el.value + '&TID=' + et.value  + '&UID=' + ea.value, true); 
	xhr2.send();
	return
		
};

function deleteSession(){
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	if (FL_DELETE_SENT == false) {
		FL_DELETE_SENT = true;
		e.innerHTML += "Sending delete session...<br>";
		e.innerHTML += ea.value;
		xhr2.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + ea.value + '&message=' + "DELETED:" + ea.value + '&FROM=', true);
		xhr2.send();
		
		xhr2.onreadystatechange = function(){
		  if (xhr2.readyState==4 && xhr2.status==200)
			{   
				e.innerHTML += "Deleting session...<br>";
				xhr2.open("GET","/message-channel?CHAN_FUNC=deleteChannel&CID=" + ea.value + '&TID=' + et.value  + '&UID=' + ea.value, true); 
				xhr2.send();
				return
			}
		};
	};
	
	return
		
};

function procMessage(obj) {
 	var res = obj.message;
	var p = res.indexOf("ULAPPH-PRESENTER@888@");
	if (p > 0) {
		//ignore
		return;
	}
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }

	if (es.value == "STEP1") {

		e.innerHTML += "... sending auth token ...";
		if (res == et.value) {
			e.innerHTML += "... OK ...";
			e.innerHTML += "STEP1 processing...<br>";
			e.innerHTML += "chan-id: " + el.value + "<br>";
			if (et.value != "") {
				e.innerHTML += "token-id: " + "OK" + "<br>";
			}
			e.innerHTML += "auser: " + ea.value + "<br>";
			e.innerHTML += "isDesktop: " + ed.value + "<br>"; 
			e.innerHTML += "step: " + es.value + "<br>";
			return
		}

		var str = res; 
		var resp = str.split(":");
		
		if (resp[0] == "PASSED") {

			e.innerHTML += "AUTHENTICATION SUCCESSFUL...<br>";
			
			e.innerHTML += "REDIRECTING...<br>";
			if (tu.value != "") {
				window.location.assign(tu.value + "&user=" + resp[1] + "&SID=" + us.value + "&TITLE=" + tl.value + "&chan=" + el.value + "&tok=" + et.value + "&zzz=" + "yyy#page");
			} else {
				window.location.assign("/?q=home2&user=" + resp[1] + "&SID=" + us.value + "&TITLE=" + tl.value + "&chan=" + el.value + "&tok=" + et.value + "&zzz=" + "yyy#page");
			}
			return
		}
		
	} else if (es.value == "STEP2") {

		if (FL_SENT_AUTH_DATA == false) {
			FL_SENT_AUTH_DATA = true;
			e.innerHTML += "Successful login... <br>";
			e.innerHTML += "Sending authentication data...<br>";
			e.innerHTML += "chan-id: " + el.value + "<br>";
			if (et.value != "") {
				e.innerHTML += "token-id: " + "OK" + "<br>";
			}
			e.innerHTML += "auser: " + ea.value + "<br>";
			e.innerHTML += "isDesktop: " + ed.value + "<br>"; 
			e.innerHTML += "step: " + es.value + "<br>";
			xhr2.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + el.value + '&message=' + "PASSED:" + ea.value + '&FROM=', true);
			xhr2.send(); 
			//socket.close;
			e.innerHTML += "Logging out...<br>";
			xhr2.onreadystatechange = function(){
			  if (xhr2.readyState==4 && xhr2.status==200)
				{   
					setTimeout(function(){deleteChannel()},60000);
					FL_SENT_AUTH_DATA = true;
					return
				}
			};
		};

	}
	
};

function soundNow() {
	
	var aSound = document.createElement('audio');

	soundManager.createSound({
		id: 'mySound2',
		volume: 50,
		//url: root + "/static/audio/baby2.ogg"
		url: root + "/static/audio/startup.ogg"
	});

	soundManager.play('mySound2');
	
};


function onError(err) {
	if (es.value == "STEP1") {
		e.innerHTML += "Error occurred in STEP1... <br>";
		window.location.assign("/?q=token");
		return
	} else if (es.value == "STEP2") {
		e.innerHTML += "Error occured in STEP2... <br>";
	}
};

function onClose() {
	if (es.value == "STEP1") {
		e.innerHTML += "Connection closed... <br>";
	} else if (es.value == "STEP2") {
		e.innerHTML += "Connection closed... <br>";
	}
};