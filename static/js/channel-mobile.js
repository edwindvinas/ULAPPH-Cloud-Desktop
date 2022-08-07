//--start channel codes
var el = document.getElementById("chan-id");
var root = location.protocol + '//' + location.host;

channelConnect();

function channelConnect() {
/* 	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	xhr.open("GET","/create-channel?user=" + el.value, true); 
	xhr.send();                 
	xhr.onreadystatechange = function(){
	  if (xhr.readyState==4 && xhr.status==200)
		{   
			var e = document.getElementById("channel-area");
			//e.innerHTML += '<br>' + "Connected to :" + xhr.responseText;
			e.innerHTML += "Connected to :" + xhr.responseText;
			//console.log("Channel Created:",xhr.responseText);
			channel = new goog.appengine.Channel(JSON.parse(xhr.responseText));
			//console.log(channel);
			
			socket = channel.open();
			socket.onopen = onOpen;
			socket.onmessage = onMessage;
			socket.onerror = onError;
			socket.onclose = onClose;
		}
	};	 */
			var e = document.getElementById("channel-area");
			e.innerHTML += "Connected to :" + xhr.responseText;
}


function onOpen() {
	//console.log("===============================================");
	//console.log("Connected to [" + xhr.responseText + "]");
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	var el = document.getElementById("chan-id");
	var e = document.getElementById("channel-area");
	e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=90 height=90></img></a>CHANNEL CONNECTED.";
	xhr2.open("GET","/message-channel?CHAN_FUNC=testChannel&UID=" + el.value + '&message=test' + '&FROM=', true); 
	xhr2.send();                 
		
};

function checkMessagesLoop(){
	var el = document.getElementById("chan-id");
	var xhr2 = new XMLHttpRequest(); 
	xhr2.open("GET","/message-channel?CHAN_FUNC=testChannel&UID=" + el.value + '&message=test' + '&FROM=', true); 
	xhr2.send();
	return
		
};

/* var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}} */

function procMessage(obj) {

	var r = document.getElementById("ringtone");
 	var res = obj.message;
	/*console.log("obj.message: "+obj.message);
	res = Base64.decode(res);
	console.log("decoded: "+res); */
	var a = res.indexOf("alert-icon.png");
	var n = res.indexOf("notify-icon.png");
	var d = res.indexOf("danger-cat.png");
	var m = res.indexOf("newmessage.gif");
	var k = res.indexOf("knock, knock!!!");
	var x = res.indexOf("ULAPPH-CHAT@888@");
	var p = res.indexOf("ULAPPH-PRESENTER@888@");
	var c = res.indexOf("has joined ULAPPH Chat");
	var e = document.getElementById("channel-area");
	e.innerHTML = res;
	//linkifyText();
	
	if (p > 0) {
		//ignore
		return;
	}
		
	if (res == "LOGOUT.") {
		window.location.assign("/logout");
		return
	}
	
	if (res == "CHANNEL CONNECTED.") {
		e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width='90' height='90'></img></a>CHANNEL CONNECTED.";
		return
	}
	if (k > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		var root = location.protocol + '//' + location.host;
		if (r.value != "") {
			soundManager.createSound({
				id: 'mySound6',
				volume: 50,
				url: root + "/static/audio/ahem_x.ogg"
			});
			soundManager.play('mySound6');
		}
		return;
	}
	if (m > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		if (r.value != "") {
			soundManager.createSound({
				id: 'mySound7',
				volume: 50,
				url: r.value
			});
			soundManager.play('mySound7');
		}
		return;
	}
	if (x > 0) {
		return;
	}
	if (c > 0) {
		//sound door open
		var root = location.protocol + '//' + location.host;
		soundManager.createSound({
			id: 'door_open',
			volume: 50,
			url: root + "/static/audio/door-open.ogg"
		});
		soundManager.play('door_open');
		return;
	}
	if (a > 0) {
		//sound alert sound
		//alertifyThis(res);
		var root = location.protocol + '//' + location.host;
		soundManager.createSound({
			id: 'alert',
			volume: 50,
			url: root + "/static/audio/emergency030.ogg"
		});
		soundManager.play('alert');
		//return;
	}
	//play sound
	if (res != "CHANNEL CONNECTED." && res != "CHANNEL ERROR." && res != "CHANNEL DISCONNECTED." && res != undefined) {
		//play sound
		
		if (n == -1 && d == -1) {
		//regular chat message
		
			var aSound = document.createElement('audio');
			if (r.value != "") {
				soundManager.createSound({
					id: 'mySound1',
					volume: 50,
					url: r.value
				});
				soundManager.play('mySound1');
				vibrateMulti();
				//return
			} else {
				soundManager.createSound({
					id: 'mySound2',
					volume: 50,
					//url: root + "/static/audio/baby2.ogg"
					url: root + "/static/audio/elect-chime.ogg"
				});

				soundManager.play('mySound2');
				vibrateMulti();
				//return
			}

		} else {
		
			if (d == -1) { 
			//notify message
			
				var aSound = document.createElement('audio');

				soundManager.createSound({
					id: 'mySound3',
					volume: 50,
					url: root + "/static/audio/R2D2e.ogg"
				});

				soundManager.play('mySound3');
				vibrateMulti();
				//return
			
			} else {
			//danger message
			
				var aSound = document.createElement('audio');

				soundManager.createSound({
					id: 'mySound4',
					volume: 50,
					url: root + "/static/audio/WarningSiren.ogg"
				});

				soundManager.play('mySound4');
				vibrateMulti();
				//return			
			
			}
		
		}
	}
};

function onError(err) {
	//console.log("error (" + err.code + ": " + err.description);
	var e = document.getElementById("channel-area");
	e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-error.png' width=90 height=90></img></a></a>CHANNEL ERROR.";
};

function onClose() {
	//console.log("===============================================");
	//console.log("Disconnected");
	var e = document.getElementById("channel-area");
	e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-disconnected.png' width=90 height=90></img></a>CHANNEL DISCONNECTED.";
};

function knock(uid) {
	var kurl = location.protocol + '//' + location.host + '/guestbook?GB_FUNC=KNOCK&UID=' + uid;
	
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
	var e = document.getElementById("channel-area");
	e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=90 height=90></img></a>CHANNEL CONNECTED.";
	//return;
	alertify.error("Knock knock has been sent!");
};
function alertifyThis(message) {
	
	alertify.set({ delay: 50000 });
	//alertify.error(message);
	//alertify.log(message);
	alertify.success(message);
	return;
};
//--end channel codes