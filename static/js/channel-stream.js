//--start channel codes
//var desktop = document.getElementById("desktop").value;
var aUser = document.getElementById("aUser");
var tok = document.getElementById("tok");
var da = document.getElementById("dispAds");
var ss = document.getElementById("soundStat");
var FL_CONNECTED_OK = false;
var FL_CONTENT_OK = false;
var CTR_RAND_CON = 0;
var root = location.protocol + '//' + location.host;
//var PREV_STR = "";
var currToken = ""; 
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

dispSavedNotifs();

channelConnect();

alertify.set({ delay: 60000 });

function channelConnect() {

/* 	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	 
	if (aUser.value != "" && tok.value != "") { 
		alertify.success("Connecting to channel...", "", 0);
		soundNow();
		//console.log("Channel Created:", tok.value);
		currToken = tok.value;
		channel = new goog.appengine.Channel(tok.value);
		//console.log(channel);
		
		socket = channel.open();
		socket.onopen = onOpen;
		socket.onmessage = onMessage;
		socket.onerror = onError;
		socket.onclose = onClose;
	} */
	alertify.success("Connecting to channel...", "", 0);
	soundNow();
	//initFirebase();
};

function soundNow() {
	
	var aSound = document.createElement('audio');

	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'mySound5',
			volume: 75,
			url: root + "/static/audio/R2D2e.mp3"
		});
	} else {
		soundManager.createSound({
			id: 'mySound5',
			volume: 75,
			url: root + "/static/audio/R2D2e.ogg"
		});		
	}

	//soundManager.play('mySound5');
	playSound('mySound5');
	
};

function onOpen() {
	
	//console.log("===============================================");
	//console.log("Connected to [" + xhr.responseText + "]");
	soundNow();
	alertify.success("Channel opened...", "", 0);
	
	//laugh sound
	//var root = location.protocol + '//' + location.host;
	
	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'mySoundB',
			volume: 75,
			//url: root + "/static/audio/baby2.mp3"
			url: root + "/static/audio/startup.mp3"
		});
	} else {
		soundManager.createSound({
			id: 'mySoundB',
			volume: 75,
			//url: root + "/static/audio/baby2.ogg"
			url: root + "/static/audio/startup.ogg"
		});
	}
	playSound('mySoundB');
           
	//regulary check messages
	setInterval(function(){checkMessagesLoop()}, 300000);
	
//	//regularly display ads
//	if (da.value == "true") {
//	setInterval(function(){dispAds()}, 180000);
//	}
	
	//regularly reconnect channel
	//setInterval(function(){channelConnect()}, 120000);
	dispAds();
		
};

function checkMessagesLoop(){
	
	//regularly display ads
	if (da.value == "true") {
		dispAds();
	}
	
	//var el = document.getElementById("chan-id");
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	cxhr2.open("GET","/message-channel?CHAN_FUNC=testChannel&UID=" + aUser.value + '&message=test' + '&FROM=', true); 
	cxhr2.send();
	
	 cxhr2.onreadystatechange=function()
	  {
	  if (cxhr2.readyState==4 && cxhr2.status==200)
		{
		var currVal = cxhr2.responseText;
		//alert(currVal);
			if (currVal != currToken) {
				//soundNow();
				//console.log("channel expired...");
				//alertify.set({ delay: 5000 });
				//alertify.error("Channel expired... please close & open a new stream....", "", 0);
				alertify.error("Channel expired...", "", 0);
				//window.location.reload(true);
				//alert sound
				//var root = location.protocol + '//' + location.host;
				
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'alert',
						volume: 75,
						url: root + "/static/audio/error.mp3"
					});
				} else {
					soundManager.createSound({
						id: 'alert',
						volume: 75,
						url: root + "/static/audio/error.ogg"
					});
				}
				playSound('alert');
				
				//reConnect();
				return
			}
		return
		}
	 }
	return
		
};

/* function reConnect() {

	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	//delete channel
	cxhr.open("GET","/stream?STR_FUNC=DEL_CHAN", true); 
	cxhr.send(); 
	//channelConnect();
	//setTimeout(function(){location.reload(true);},1000);
	
	var notification = new Notification('(W)' + location.host, {
	  icon: "/static/img/error.png",
	  body: "Please reload my stream!",
	});
				
	return;
}; */

function reConnect() {

	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	//delete channel & update status
	cxhr.open("GET","/stream?STR_FUNC=DEL_CHAN", true); 
	//cxhr.send(); 
	//channelConnect();
	//setTimeout(function(){location.reload(true);},15000);		
	return;
};

function dispAds() {
	if (CTR_RAND_CON <= 5000) {
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
			//alertify.success("Displaying content...");
			ads_url = '/rcg?m=sing&q=' + "desktop0" + '&n=' + 1;
			FL_CONTENT_OK = true;
		} else {
			//alertify.success("Displaying ads...");
			ads_url = '/rag?f=slides&d=' + "desktop0" + '&n=' + 1;
			FL_CONTENT_OK = false;
		}
		if (CTR_RAND_CON == 4) {
			//alertify.success("Displaying users online...");
			ads_url = '/people?PEOPLE_FUNC=QUICK-VIEW-ONLINE&o=tiles';
			FL_CONTENT_OK = true;			
		}
		xmlhttp.open("GET",ads_url,true);
		xmlhttp.send();
		
		//get current counter
		 xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var currVal = xmlhttp.responseText;
			//alert(currVal);
				if (currVal != "") {
					//soundNow();
					//console.log("disp ads ok...");
					//alertify.log(currVal, "", 0);
					alertify.success(currVal);
					CTR_RAND_CON = CTR_RAND_CON + 1; 
					return
				}
			return
			}
		 }
		 return;
	 }
};

/* var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}} */

//function onMessage(msg) {
function procMessage(obj) {
	//soundNow();
	
	var r = document.getElementById("ringtone");
 	var res = obj.message;
	/*console.log("obj.message: "+obj.message);
	res = Base64.decode(res);
	console.log("decoded: "+res); */
	//console.log("msg: "+res);
	var n = res.indexOf("notify-icon.png");
	//var sapi = res.indexOf("View Search Item");
	var a = res.indexOf("alert-icon.png");
	var d = res.indexOf("danger-cat.png");
	var m = res.indexOf("newmessage.gif");
	var k = res.indexOf("knock, knock!!!");
	var u = res.indexOf("*ULAPPH_UP ");
	var pl = res.indexOf("*ULAPPH_PAYPAL ");
	var x = res.indexOf("ULAPPH-CHAT@888@");
	var p = res.indexOf("ULAPPH-PRESENTER@888@");
	var c = res.indexOf("has joined ULAPPH Chat");
	var e1 = res.indexOf("error");
	var e2 = res.indexOf("ERROR");
	var sysUpd = res.indexOf("ULAPPH-SYS-UPD@888@");
	var e = document.getElementById("channel-area");
	var str = res; 
	var resp = str.split(":");
	
	////////////////////////////////////////////////////////////////
	//SYSTEM COMMANDS GOES HERE
	////////////////////////////////////////////////////////////////
	if (sysUpd > 0) {
		//get the command
		//@888@ULAPPH-SYS-UPD@888@SYS_UPDATE_TLM@888@<DATA>
		var cmdata = str.split("@888@");
		//alertify.error(cmdata[1]);
		//alertify.error(cmdata[2]);
		switch (cmdata[2]) {
			case "SYS_UPDATE_TLM":
				var tlm = document.getElementById("menu");
				tlm.innerHTML = cmdata[3];
				//alert(cmdata[3]);
				alertify.error("Top List Menu has been updated!", "", 0);
				break;
				
			case "SYS_UPDATE_SND":
				switch (cmdata[3]) {
					case "off":
						soundManager.stopAll();
						alertify.error("Sound has been disabled.");
						var e = document.getElementById("soundFlag");
						e.src = "/static/img/sound-off.png";
						document.getElementById("soundStat").value = "off";
						//console.log("Sound OFF")
						break;
					case "on":
						testSound();
						alertify.error("Sound has been enabled.");
						var e = document.getElementById("soundFlag");
						e.src = "/static/img/sound-on.png";
						document.getElementById("soundStat").value = "on";
						//console.log("Sound ON")
						break;

				}
				alertify.error("System sound preference updated to " + cmdata[3], "", 0);
				break;
				
		}
		return;
	}
	
	if (p > 0) {
		//ignore
		return;
	}
	
//	if (sapi > 0) {
//		return;
//	}
		
	if (resp[0] == "DELETED") {
		alertify.log("SESSION DELETED...<br>", "", 0);
		//setTimeout(function(){location.reload(true);},5000);
		//location.reload(true);
		return
	}
		
	if (res == "LOGOUT.") {
		window.location.assign("/logout?LFUNC=LOGOUT");
		alertify.log("Logged out...", "", 0);
		return
	}
	
	if ((res == "CHANNEL CONNECTED.") && (FL_CONNECTED_OK == false)) {
		innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=60 height=60></img></a>CHANNEL CONNECTED.";		
		FL_CONNECTED_OK = true;
		alertifyThis(innerHTML);
		return
	}
	if (u >= 0) {
		alertify.error(res, "", 0);
		var aSound = document.createElement('audio');
		if (r.value != "") {
			soundManager.createSound({
				id: 'mySound7',
				volume: 75,
				url: r.value
			});
			//soundManager.play('mySound7');
			playSound('mySound7');
		}
		//save as note
		newNoteMU(res);
		return;
	}
	if (pl >= 0) {
		alertify.error(res, "", 0);
		var aSound = document.createElement('audio');
		//var root = location.protocol + '//' + location.host;
		if (r.value != "") {
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySoundPL',
					volume: 50,
					url: root + "/static/audio/jamesbrown.mp3"
				});
			} else {
				soundManager.createSound({
					id: 'mySoundPL',
					volume: 50,
					url: root + "/static/audio/jamesbrown.ogg"
				});
			}
			//soundManager.play('mySound6');
			playSound('mySoundPL');
		}
		//save as note
		newNoteMU(res);
		return;
	}
	if (k > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		//var root = location.protocol + '//' + location.host;
		if (r.value != "") {
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySound6',
					volume: 75,
					url: root + "/static/audio/ahem_x.mp3"
				});
			} else {
				soundManager.createSound({
					id: 'mySound6',
					volume: 75,
					url: root + "/static/audio/ahem_x.ogg"
				});
			}
			//soundManager.play('mySound6');
			playSound('mySound6');
		}
		return;
	}
	if (e1 > 0 || e2 > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		//var root = location.protocol + '//' + location.host;
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
				id: 'mySound7',
				volume: 75,
				url: r.value
			});
			//soundManager.play('mySound7');
			playSound('mySound7');
		}
		return;
	}
	if (x > 0) {
		return;
	}
	if (c > 0) {
		//sound door open
		alertifyThis(res);
		//var root = location.protocol + '//' + location.host;
		
		if (isEdge == true || isIE == true || isSafari == true) {
			soundManager.createSound({
				id: 'door_open',
				volume: 75,
				url: root + "/static/audio/door-open.mp3"
			});
		} else {
				
			soundManager.createSound({
				id: 'door_open',
				volume: 75,
				url: root + "/static/audio/door-open.ogg"
			});
		}
		//soundManager.play('door_open');
		playSound('door_open');
		return;
	}
	if (a > 0) {
		//sound alert sound
		//var root = location.protocol + '//' + location.host;
		if (isEdge == true || isIE == true || isSafari == true) {
			soundManager.createSound({
				id: 'alert',
				volume: 75,
				url: root + "/static/audio/emergency030.mp3"
			});
		} else {
			soundManager.createSound({
				id: 'alert',
				volume: 75,
				url: root + "/static/audio/emergency030.ogg"
			});
		}
		//soundManager.play('alert');
		playSound('alert');
		//return;
	}
	//play sound
	if (res != "CHANNEL CONNECTED." && res != "CHANNEL ERROR." && res != "CHANNEL DISCONNECTED." && res != undefined) {
	
		alertifyThis(res);

		if (n == -1 && d == -1) {
		//regular chat message
		
			var aSound = document.createElement('audio');
			if (r.value != "") {
				soundManager.createSound({
					id: 'mySound1',
					volume: 75,
					url: r.value
				});
				//soundManager.play('mySound1');
				playSound('mySound1');
				//vibrateMulti();
				//return
			} else {
				
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'mySound2',
						volume: 75,
						//url: root + "/static/audio/baby2.mp3"
						url: root + "/static/audio/elect-chime.mp3"
					});
				} else {
			
					soundManager.createSound({
						id: 'mySound2',
						volume: 75,
						//url: root + "/static/audio/baby2.ogg"
						url: root + "/static/audio/elect-chime.ogg"
					});
				}

				//soundManager.play('mySound2');
				playSound('mySound2');
				//vibrateMulti();
				//return
			}

		} else {
		
			if (d == -1) { 
			//notify message
			
				var aSound = document.createElement('audio');

				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'mySound3',
						volume: 75,
						url: root + "/static/audio/R2D2e.mp3"
					});

				} else {
					
					soundManager.createSound({
						id: 'mySound3',
						volume: 75,
						url: root + "/static/audio/R2D2e.ogg"
					});
				}

				//soundManager.play('mySound3');
				playSound('mySound3');
				//vibrateMulti();
				//return
			
			} else {
			//danger message
			
				var aSound = document.createElement('audio');

				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'mySound4',
						volume: 75,
						url: root + "/static/audio/WarningSiren.mp3"
					});
				} else {
					soundManager.createSound({
						id: 'mySound4',
						volume: 75,
						url: root + "/static/audio/WarningSiren.ogg"
					});
				}
				
				//soundManager.play('mySound4');
				playSound('mySound4');
				//vibrateMulti();
				//return			
			
			}
		
		}
		return;
	}
	return;
};

function onError(err) {
	//reConnect();
	//console.log("error (" + err.code + ": " + err.description);
	innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-error.png' width=60 height=60></img></a></a>CHANNEL ERROR. [<a href='#' onclick=resetChannel(" + aUser.value + "); return false;>Reset Channel</a>]";
	alertifyThis(innerHTML);
	//reConnect();
};

function onClose() {
	//reConnect();
	//console.log("===============================================");
	//console.log("Disconnected");
	innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-disconnected.png' width=60 height=60></img></a>CHANNEL DISCONNECTED. [<a href='#' onclick=resetChannel(" + aUser.value + "); return false;>Reset Channel</a>]";
	alertifyThis(innerHTML);
	//reConnect();
};

function resetChannel(uid) {
	
	var e = document.getElementById("channel-area");
	var currHTML = e.innerHTML;
	var message = "<img src='/static/img/pinned.png' width=30 height=30> Reset channel requested.";
	e.innerHTML = message + "<hr>" + currHTML;		
			
	var rcurl = location.protocol + '//' + location.host + '/stream?STR_FUNC=DEL_RES_STREAM&UID=' + uid;
	
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhrc=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhrc=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	cxhrc.open("GET",rcurl, true); 
	cxhrc.send();
	 cxhr2.onreadystatechange=function()
	  {
	  if (cxhr2.readyState==4 && cxhr2.status==200)
		{
		var currVal = cxhr2.responseText;
			if (currVal != "") {
				tok.value = currVal;
				var e = document.getElementById("channel-area");
				var currHTML = e.innerHTML;
				var message = "<img src='/static/img/success.png' width=30 height=30> Channel refresh successful!";
				e.innerHTML = message + "<hr>" + currHTML;
				return;
			}
		}
	  }
	return;				
	//return;
	//alertify.error("Knock knock has been sent!", "", 0);	
}

function alertifyThis(message) {
	var g = message.indexOf("icon-plus.png");
	var w = message.indexOf("Search.png");
	var y = message.indexOf("Youtube.png");
	var m = message.indexOf("motd.png");
	var sapi = message.indexOf("View Search Item");
	var dall = true; //display all in stream window
	
	//save to localstorage
	saveNotifsLocStor(message);
	
	if (g > 0 || w > 0 || y > 0 || sapi > 0) {
		//dont display in stream window
		//show web notifications
		if (dall == true) {
			//display in stream window
			var e = document.getElementById("channel-area");
			var currHTML = e.innerHTML;
			e.innerHTML = message + "<hr>" + currHTML;		
		}
		showNotification(0,message);		
		return;
	} else {
		//!!! disable for now
		//alertify.set({ delay: 60000 });
		//alertify.success(message, "", 0);
		if (m > 0) {
			//display in stream window
			var e = document.getElementById("channel-area");
			var currHTML = e.innerHTML;
			e.innerHTML = message + "<hr>" + currHTML;
			//show web notifications
			showNotification(0,message);		
			return;	
		} else {
			//also display in channel area
			var e = document.getElementById("channel-area");
			var currHTML = e.innerHTML;
			e.innerHTML = message + "<hr>" + currHTML;
			//show web notifications
			showNotification(1,message);
			return;
		}
	}
};

function showNotification(pri,message) {
	//disable notifications is sound is disabled
	var ss = document.getElementById("soundStat");
	if (ss.value != "on") {
		return;
	}
	if(window.Notification) {
		Notification.requestPermission(function(status) { 
			//console.log('Status: ', status); 
			//console.log('Message: ', message); 
			//get text message
			var text = $(message).text();
			if (text == "" || text == undefined) {
				text = message;
			}
			//get array of images/links
			var ctr = 0;
			var ctr2 = 0;
			var myImgs = [];
			var hrefs = [];
			var thisImage = "";
			var thisLink = "";

			$(message).filter('img').each(function() { 
			  var src= $(this).attr("src");
			  //console.log( src ); 
			  if (src != "") {
				ctr++;
				myImgs.push(src);
			  }
			});

			$(message).filter('a').each(function() { 
			  var href= $(this).attr("href");
			  //console.log( href ); 
			  if (href != "") {
				ctr2++;
				hrefs.push(href);  	
			  }
			 
			  var src = $('img', this).attr("src");
			  //console.log( src );
			  if (src != "") {
				ctr++;
				myImgs.push(src);
			  }
				  
			 });
			 
			 //console.log( myImgs );
			 //console.log( hrefs );
			
			if (pri == 1) {
			
				if (hrefs[2]) {
					thisLink = hrefs[2];
					thisImage = myImgs[4];
				} else {
					thisLink = hrefs[1];
					thisImage = myImgs[3];
				}
				if (thisImage == "") {
					thisImage = root + "/static/img/info.png";
				}	
	  		    var notification = new Notification('(N)' + location.host, {
				  icon: thisImage,
				  body: text,
				});

				notification.onclick = function () {
				  window.open(thisLink);      
				};
				
				setTimeout(notification.close.bind(notification), 360000);
				
			} else {
			
				thisImage = myImgs[0];
				thisLink = hrefs[0];
				
				if (thisImage == "") {
					thisImage = root + "/static/img/info.png";
				}
				
	  		    var notification = new Notification('(I)' + location.host, {
				  icon: thisImage,
				  body: text,
				});

				notification.onclick = function () {
				  window.open(thisLink);      
				};
				
				setTimeout(notification.close.bind(notification), 60000);
			}
		});
	}
	else {
		//alert('Your browser doesn\'t support notifications.');
	}
}

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
	//return;
	alertify.error("Knock knock has been sent!", "", 0);
};

function playSound(sid) {
	var ss = document.getElementById("soundStat");
	//console.log("playSound status: " + ss.value)
	if (ss.value == "on") {
		//console.log("Sound played: " + sid)
		//soundManager.stop(sid);
		soundManager.play(sid);
	}
	return;
}

function putMarker() {
	var e = document.getElementById("channel-area");
	var currHTML = e.innerHTML;
	var message = "<br><img src=\"/static/img/divider-line.png\">";
	e.innerHTML = message + "<hr>" + currHTML;	
	return;
}

function saveNotifsLocStor(msg) {
	//append to local notifs storage
	//localStorage['movie'+movieID] = 'yes';
	var a = document.getElementById("aUser");
	
	var currNotifsLS = "";
	if(typeof(Storage) !== "undefined") {
		currNotifsLS = localStorage['notificationsStorage'+a.value];
		localStorage['notificationsStorage'+a.value] = msg + "<hr>" + currNotifsLS;
	} else {
		//alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		//return
	}
	return;
}

function dispSavedNotifs() {
	var e = document.getElementById("channel-area");
	var a = document.getElementById("aUser");
	
	var currNotifsLS = "";
	if(typeof(Storage) !== "undefined") {
		currNotifsLS = localStorage['notificationsStorage'+a.value];
		var divider = "<br><a href='#' onclick='resetNotifStorage(); return false;' title='Click to reset storage'><img src=\"/static/img/divider-line.png\"></a>";
		var currHTML = e.innerHTML;
		e.innerHTML = currHTML + "<hr>" + divider + "<hr>" + currNotifsLS;	
	} else {
		//alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		//return
	}
	return;	
}

function resetNotifStorage() {
	var a = document.getElementById("aUser");
	localStorage['notificationsStorage'+a.value] = "";
	
	var e = document.getElementById("channel-area");
	var divider = "<br><a href='#' onclick='resetNotifStorage(); return false;' title='Click to reset storage'><img src=\"/static/img/divider-line.png\"></a>";
	e.innerHTML = "<hr>" + divider + "<hr>";
	
	return;	
}


function soundOnOffStream() {
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
			alertify.error("Sound has been disabled for stream.");
			e.src = "/static/img/sound-off.png";
			document.getElementById("soundStat").value = "off";
			//var statUrl = '/tools?FUNC=WIDGET&t=MyPreferences&MP_FUNC=JSWM_SOUND_OFF';
			//sendSoundStatus(0, statUrl);
			break;
		case false:
			testSound();
			alertify.error("Sound has been enabled for stream.");
			e.src = "/static/img/sound-on.png";
			document.getElementById("soundStat").value = "on";
			//var statUrl = '/tools?FUNC=WIDGET&t=MyPreferences&MP_FUNC=JSWM_SOUND_ON';
			//sendSoundStatus(1, statUrl);
			break;

	}
	return;
};

//--end channel codes
