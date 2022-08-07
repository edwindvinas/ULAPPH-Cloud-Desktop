//--start channel codes
var el = document.getElementById("chan-id");
var da = document.getElementById("dispAds");
var currToken = "";
var FL_CONTENT_OK = false;
var CTR_RAND_CON = 0;

var e = document.getElementById("channel-area");
if (typeof(e) != 'undefined' && e != null) {
	e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=90 height=90></img></a>CHANNEL CONNECTED.<a href=\"https://mail.google.com\" target=\"gm\"><img src=\"/static/img/Gmail.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.linkedin.com\" target=\"li\"><img src=\"/static/img/linkedin-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.twitter.com\" target=\"tw\"><img src=\"/static/img/twitter-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.facebook.com\" target=\"fb\"><img src=\"/static/img/facebook-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://plus.google.com\" target=\"gp\"><img src=\"/static/img/icon-comm.png\" width=\"90\" height=\"90\" align=\"right\"></a><iframe src=\"https://www.thetimenow.com/clock/utc/coordinated_universal_time?t=n&embed=1&text=15&textdate=15&format=24&digitalclock=36&analogclock=60&letter_spacing=-2&bordersize=1&bordercolor=BCE2F7&bgcolor=EBF8FF&colorloc=000000&colordigital=2C8EBF&colordate=000000&styleloc=normal&styledigital=normal&styledate=normal&right=0\" width=\"250\" height=\"100\" scrolling=\"no\" align=\"right\"></iframe><iframe src=\"https://oras.pagasa.dost.gov.ph/widget.shtml\" width=300 height=90 scrolling=no align=\"right\"></iframe>";
	alertifyThis("Launch Window Manager!<br><a href=\"/uwm\"><img src=\"/static/img/jswm.png\" width=200 height=200></a>");
}

getStatus("au");
 
channelConnect();

function channelConnect() {	
/* 	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	cxhr.open("GET","/create-channel?user=" + el.value, true); 
	//cxhr.send();                 
	cxhr.onreadystatechange = function(){
	  if (cxhr.readyState==4 && cxhr.status==200)
		{   
			var e = document.getElementById("channel-area");
			if (typeof(e) != 'undefined' && e != null) {
				e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=90 height=90></img></a>CHANNEL CONNECTED.<a href=\"https://mail.google.com\" target=\"gm\"><img src=\"/static/img/Gmail.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.linkedin.com\" target=\"li\"><img src=\"/static/img/linkedin-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.twitter.com\" target=\"tw\"><img src=\"/static/img/twitter-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.facebook.com\" target=\"fb\"><img src=\"/static/img/facebook-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://plus.google.com\" target=\"gp\"><img src=\"/static/img/icon-comm.png\" width=\"90\" height=\"90\" align=\"right\"></a><iframe src=\"https://www.thetimenow.com/clock/utc/coordinated_universal_time?t=n&embed=1&text=15&textdate=15&format=24&digitalclock=36&analogclock=60&letter_spacing=-2&bordersize=1&bordercolor=BCE2F7&bgcolor=EBF8FF&colorloc=000000&colordigital=2C8EBF&colordate=000000&styleloc=normal&styledigital=normal&styledate=normal&right=0\" width=\"250\" height=\"100\" scrolling=\"no\" align=\"right\"></iframe><iframe src=\"https://oras.pagasa.dost.gov.ph/widget.shtml\" width=300 height=90 scrolling=no align=\"right\"></iframe>";
			}
			currToken = JSON.parse(cxhr.responseText);
			channel = new goog.appengine.Channel(currToken);
			socket = channel.open();
			socket.onopen = onOpen;
			socket.onmessage = onMessage;
			socket.onerror = onError;
			socket.onclose = onClose;
		}
	};	 */
			var e = document.getElementById("channel-area");
			if (typeof(e) != 'undefined' && e != null) {
				e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=90 height=90></img></a>CHANNEL CONNECTED.<a href=\"https://mail.google.com\" target=\"gm\"><img src=\"/static/img/Gmail.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.linkedin.com\" target=\"li\"><img src=\"/static/img/linkedin-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.twitter.com\" target=\"tw\"><img src=\"/static/img/twitter-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.facebook.com\" target=\"fb\"><img src=\"/static/img/facebook-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://plus.google.com\" target=\"gp\"><img src=\"/static/img/icon-comm.png\" width=\"90\" height=\"90\" align=\"right\"></a><iframe src=\"https://www.thetimenow.com/clock/utc/coordinated_universal_time?t=n&embed=1&text=15&textdate=15&format=24&digitalclock=36&analogclock=60&letter_spacing=-2&bordersize=1&bordercolor=BCE2F7&bgcolor=EBF8FF&colorloc=000000&colordigital=2C8EBF&colordate=000000&styleloc=normal&styledigital=normal&styledate=normal&right=0\" width=\"250\" height=\"100\" scrolling=\"no\" align=\"right\"></iframe><iframe src=\"https://oras.pagasa.dost.gov.ph/widget.shtml\" width=300 height=90 scrolling=no align=\"right\"></iframe>";
			}
			alertify.success("Connecting to channel...");
			soundNow();
} 


function onOpen() {
	soundNow();
	setInterval(function(){checkMessagesLoop()}, 30000);
	setInterval(function(){dispAds()}, 180000);
		
};

function checkMessagesLoop(){
	var el = document.getElementById("chan-id");
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	cxhr2.open("GET","/message-channel?CHAN_FUNC=testChannel&UID=" + el.value + '&message=test' + '&FROM=', true); 
	//cxhr2.send();
	
	 cxhr2.onreadystatechange=function()
	  {
	  if (cxhr2.readyState==4 && cxhr2.status==200)
		{
		var currVal = cxhr2.responseText;
			if (currVal != currToken) {
				alertify.set({ delay: 5000 });
				alertify.error("Channel expired... reloading....", "", 0);
				window.location.reload(true);
				return
			}
		return
		}
	 }
	return
		
};

function dispAds() {
	if (CTR_RAND_CON <= 10) {
		//console.log("disp ads...");
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject('MSXML2.XMLHTTP.3.0');
		  }

		alertify.set({ delay: 5000 });
		var ads_url = "";
		if (FL_CONTENT_OK == false) {
			ads_url = '/rcg?m=sing&q=' + "desktop0" + '&n=' + 1;
			FL_CONTENT_OK = true;
		} else {
			ads_url = '/rag?f=slides&d=' + "desktop0" + '&n=' + 1;
			FL_CONTENT_OK = false;
		}
		if (CTR_RAND_CON == 4) {
			ads_url = '/people?PEOPLE_FUNC=QUICK-VIEW-ONLINE&o=tiles';
			FL_CONTENT_OK = true;			
		}
		xmlhttp.open("GET",ads_url,true);
		//xmlhttp.send();
		 xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var currVal = xmlhttp.responseText;
				if (currVal != "") {
					alertify.log(currVal, "", 0);
					CTR_RAND_CON = CTR_RAND_CON + 1; 
					return
				}
			return
			}
		 }
		 return;
	 }
};

function soundNow() {
	
	var aSound = document.createElement('audio');
	var root = location.protocol + '//' + location.host;
	soundManager.createSound({
		id: 'mySound5',
		volume: 50,
		url: root + "/static/audio/R2D2e.ogg"
	});
	playSound('mySound5');
	
};

/* var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}} */

function procMessage(obj) {

	var r = document.getElementById("ringtone");
 	var res = obj.message;
	/*console.log("obj.message: "+obj.message);
	res = Base64.decode(res);
	console.log("decoded: "+res); */
	var n = res.indexOf("notify-icon.png");
	var d = res.indexOf("danger-cat.png");
	var a = res.indexOf("alert-icon.png");
	var m = res.indexOf("newmessage.gif");
	var k = res.indexOf("knock, knock!!!");
	var x = res.indexOf("ULAPPH-CHAT@888@");
	var p = res.indexOf("ULAPPH-PRESENTER@888@");
	var c = res.indexOf("has joined ULAPPH Chat");
	var e1 = res.indexOf("error");
	var e2 = res.indexOf("ERROR");
	var sysUpd = res.indexOf("ULAPPH-SYS-UPD@888@");
	var e = document.getElementById("channel-area");
	var str = res;
	if (typeof(e) != 'undefined' && e != null) {
		e.innerHTML = res;
	}
	linkifyText();

	if (sysUpd > 0) {
		var cmdata = str.split("@888@");
		switch (cmdata[2]) {
			case "SYS_UPDATE_TLM":
				var tlm = document.getElementById("menu");
				if (typeof(e) != 'undefined' && e != null) {
				tlm.innerHTML = cmdata[3];
				}
				alertify.error("Top List Menu has been updated!");
				break;
				
			case "SYS_UPDATE_SND":
				switch (cmdata[3]) {
					case "off":
						soundManager.stopAll();
						alertify.error("Sound has been disabled.");
						var e = document.getElementById("soundFlag");
						e.src = "/static/img/sound-off.png";
						document.getElementById("soundStat").value = "off";
						break;
					case "on":
						testSound();
						alertify.error("Sound has been enabled.");
						var e = document.getElementById("soundFlag");
						e.src = "/static/img/sound-on.png";
						document.getElementById("soundStat").value = "on";
						break;

				}
				alertify.error("System sound preference updated to " + cmdata[3], "", 0);
				break;
		}
		return;
	}
	
	if (p > 0) {
		return;
	}
	if (res == "LOGOUT.") {
		window.location.assign("/logout");
		return
	}
	
	if (res == "CHANNEL CONNECTED.") {
		if (typeof(e) != 'undefined' && e != null) {
		e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=90 height=90></img></a>CHANNEL CONNECTED.<a href=\"https://mail.google.com\" target=\"gm\"><img src=\"/static/img/Gmail.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.linkedin.com\" target=\"li\"><img src=\"/static/img/linkedin-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.twitter.com\" target=\"tw\"><img src=\"/static/img/twitter-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.facebook.com\" target=\"fb\"><img src=\"/static/img/facebook-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://plus.google.com\" target=\"gp\"><img src=\"/static/img/icon-comm.png\" width=\"90\" height=\"90\" align=\"right\"></a><iframe src=\"https://www.thetimenow.com/clock/utc/coordinated_universal_time?t=n&embed=1&text=15&textdate=15&format=24&digitalclock=36&analogclock=60&letter_spacing=-2&bordersize=1&bordercolor=BCE2F7&bgcolor=EBF8FF&colorloc=000000&colordigital=2C8EBF&colordate=000000&styleloc=normal&styledigital=normal&styledate=normal&right=0\" width=\"250\" height=\"100\" scrolling=\"no\" align=\"right\"></iframe><iframe src=\"https://oras.pagasa.dost.gov.ph/widget.shtml\" width=300 height=90 scrolling=no align=\"right\"></iframe>";		
		}
		return
	}
	if (k > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		var root = location.protocol + '//' + location.host;
		if (r.value != "") {
			soundManager.createSound({
				id: 'mySound5',
				volume: 50,
				url: root + "/static/audio/ahem_x.ogg"
			});
			playSound('mySound5');
		}
		return;
	}
	if (e1 > 0 || e2 > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		var root = location.protocol + '//' + location.host;
		if (r.value != "") {
			soundManager.createSound({
				id: 'mySoundE',
				volume: 50,
				url: root + "/static/audio/error.ogg"
			});
			soundManager.play('mySoundE');
		}
		return;
	}
	if (m > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		if (r.value != "") {
			soundManager.createSound({
				id: 'mySound6',
				volume: 50,
				url: r.value
			});
			playSound('mySound6');
		}
		return;
	}
	if (x > 0) {
		return;
	}
	if (c > 0) {
		alertifyThis(res);
		var root = location.protocol + '//' + location.host;
		soundManager.createSound({
			id: 'door_open',
			volume: 50,
			url: root + "/static/audio/door-open.ogg"
		});
		playSound('door_open');
		return;
	}
	if (a > 0) {
		alertifyThis(res);
		var root = location.protocol + '//' + location.host;
		soundManager.createSound({
			id: 'alert',
			volume: 50,
			url: root + "/static/audio/emergency030.ogg"
		});
		playSound('alert');
	}
	if (res != "CHANNEL CONNECTED." && res != "CHANNEL ERROR." && res != "CHANNEL DISCONNECTED." && res != undefined) {
		alertifyThis(res);
		if (n == -1 && d == -1) {
			var aSound = document.createElement('audio');
			if (r.value != "") {
				soundManager.createSound({
					id: 'mySound1',
					volume: 50,
					url: r.value
				});
				playSound('mySound1');
				vibrateMulti();
			} else {
				soundManager.createSound({
					id: 'mySound2',
					volume: 50,
					//url: root + "/static/audio/baby2.ogg"
					url: root + "/static/audio/elect-chime.ogg"
				});
				playSound('mySound2');
				vibrateMulti();
			}

		} else {
		
			if (d == -1) { 
				var aSound = document.createElement('audio');
				var root = location.protocol + '//' + location.host;
				soundManager.createSound({
					id: 'mySound3',
					volume: 50,
					url: root + "/static/audio/R2D2e.ogg"
				});
				playSound('mySound3');
				vibrateMulti();
			
			} else {
				var aSound = document.createElement('audio');
				var root = location.protocol + '//' + location.host;
				soundManager.createSound({
					id: 'mySound4',
					volume: 50,
					url: root + "/static/audio/WarningSiren.ogg"
				});
				playSound('mySound4');
				vibrateMulti();			
			
			}
		
		}
	}
};

function linkifyText() {
  jQuery('#warning').remove();
  jQuery('body').linkify({
	  handleLinks: function (links) {
		  links
			  .css('background', '#ff0')
		}
	});
};

function onError(err) {
	var e = document.getElementById("channel-area");
	if (typeof(e) != 'undefined' && e != null) {
	e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-error.png' width=90 height=90></img></a></a>CHANNEL ERROR.";
	}
	window.location.assign("/?q=home");
};

function onClose() {
	var e = document.getElementById("channel-area");
	if (typeof(e) != 'undefined' && e != null) {
	e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-disconnected.png' width=90 height=90></img></a>CHANNEL DISCONNECTED.";
	}
	window.location.assign("/?q=home");
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
	//cxhr2.send();
	var e = document.getElementById("channel-area");
	if (typeof(e) != 'undefined' && e != null) {
	e.innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=90 height=90></img></a>CHANNEL CONNECTED.<a href=\"https://mail.google.com\" target=\"gm\"><img src=\"/static/img/Gmail.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.linkedin.com\" target=\"li\"><img src=\"/static/img/linkedin-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.twitter.com\" target=\"tw\"><img src=\"/static/img/twitter-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://www.facebook.com\" target=\"fb\"><img src=\"/static/img/facebook-icon.png\" width=\"90\" height=\"90\" align=\"right\"></a><a href=\"https://plus.google.com\" target=\"gp\"><img src=\"/static/img/icon-comm.png\" width=\"90\" height=\"90\" align=\"right\"></a><iframe src=\"https://www.thetimenow.com/clock/utc/coordinated_universal_time?t=n&embed=1&text=15&textdate=15&format=24&digitalclock=36&analogclock=60&letter_spacing=-2&bordersize=1&bordercolor=BCE2F7&bgcolor=EBF8FF&colorloc=000000&colordigital=2C8EBF&colordate=000000&styleloc=normal&styledigital=normal&styledate=normal&right=0\" width=\"250\" height=\"100\" scrolling=\"no\" align=\"right\"></iframe><iframe src=\"https://oras.pagasa.dost.gov.ph/widget.shtml\" width=300 height=90 scrolling=no align=\"right\"></iframe>";		
	}
	alertify.error("Knock knock has been sent!");
};

function alertifyThis(message) {
	
	alertify.set({ delay: 50000 });
	alertify.success(message);
	return;
};

function getStatus(gs) {

    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	cxhr2.open("GET","/people?PEOPLE_FUNC=QUICK-VIEW-ONLINE&o=tiles", true); 
	cxhr2.send();
	
	 cxhr2.onreadystatechange=function()
	  {
	  if (cxhr2.readyState==4 && cxhr2.status==200)
		{
		var currVal = cxhr2.responseText;
			if (currVal != "") {
				var s = document.getElementById("status-area");
				if (typeof(s) != 'undefined' && s != null) {
				s.innerHTML = currVal;
				}
				return
			}
		return
		}
	 }
	
};

function playSound(sid) {
	var ss = document.getElementById("soundStat");
	if (ss.value == "on") {
		soundManager.play(sid);
	}
}