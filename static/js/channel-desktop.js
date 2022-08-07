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

	//tok = "";
	  
	if (aUser.value != "" && tok.value != "") { 
		//alertify.success("Connecting to channel...");
		//soundNow();
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
		alertify.success("Connecting to channel...");
		soundNow();
}

function soundNow() {
	
	var aSound = document.createElement('audio');
	var root = location.protocol + '//' + location.host;
	soundManager.createSound({
		id: 'mySound5',
		volume: 50,
		url: root + "/static/audio/R2D2e.ogg"
	});

	//soundManager.play('mySound5');
	playSound('mySound5');
	
};

function onOpen() {
	
	//console.log("===============================================");
	//console.log("Connected to [" + xhr.responseText + "]");
	soundNow();
	alertify.success("Channel opened...");
           
	//regulary check messages
	//setInterval(function(){checkMessagesLoop()}, 300000);
	
	//regularly display ads
	//if (da.value == true) {
	setInterval(function(){dispAds()}, 300000);
	//}
	
	//regularly reconnect channel
	//setInterval(function(){channelConnect()}, 120000);
		
};

function checkMessagesLoop(){
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
	//cxhr2.send();
	
	 cxhr2.onreadystatechange=function()
	  {
	  if (cxhr2.readyState==4 && cxhr2.status==200)
		{
		var currVal = cxhr2.responseText;
		//alert(currVal);
			if (currVal != currToken) {
				//soundNow();
				//console.log("channel expired...");
				alertify.set({ delay: 5000 });
				alertify.error("Channel expired...", "", 0);
				//window.location.reload(true);
				soundManager.createSound({
					id: 'alert',
					volume: 75,
					//url: root + "/static/audio/emergency030.ogg"
					url: root + "/static/audio/error.ogg"
				});
				playSound('alert');
				
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
		//xmlhttp.send();
		
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

/* var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}} */

function procMessage(obj) {
	//soundNow();
	var r = document.getElementById("ringtone");
 	var res = obj.message;
	/*console.log("obj.message: "+obj.message);
	res = Base64.decode(res);
	console.log("decoded: "+res); */
	var n = res.indexOf("notify-icon.png");
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
		
	if (resp[0] == "DELETED") {
		alertify.log("SESSION DELETED...<br>", "", 0);
		setTimeout(function(){location.reload(true);},5000);
		//location.reload(true);
		return
	}
		
	if (res == "LOGOUT.") {
		alertifyThis(res);
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
				volume: 50,
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
		var root = location.protocol + '//' + location.host;
		if (r.value != "") {
			soundManager.createSound({
				id: 'mySoundPL',
				volume: 50,
				url: root + "/static/audio/jamesbrown.ogg"
			});
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
		var root = location.protocol + '//' + location.host;
		if (r.value != "") {
			soundManager.createSound({
				id: 'mySound6',
				volume: 50,
				url: root + "/static/audio/ahem_x.ogg"
			});
			//soundManager.play('mySound6');
			playSound('mySound6');
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
				id: 'mySound7',
				volume: 50,
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
		var root = location.protocol + '//' + location.host;
		soundManager.createSound({
			id: 'door_open',
			volume: 50,
			url: root + "/static/audio/door-open.ogg"
		});
		//soundManager.play('door_open');
		playSound('door_open');
		return;
	}
	if (a > 0) {
		//sound alert sound
		alertifyThis(res);
		var root = location.protocol + '//' + location.host;
		soundManager.createSound({
			id: 'alert',
			volume: 50,
			url: root + "/static/audio/emergency030.ogg"
		});
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
			var root = location.protocol + '//' + location.host;
			if (r.value != "") {
				soundManager.createSound({
					id: 'mySound1',
					volume: 50,
					url: r.value
				});
				//soundManager.play('mySound1');
				playSound('mySound1');
				//vibrateMulti();
				//return
			} else {
				soundManager.createSound({
					id: 'mySound2',
					volume: 50,
					//url: root + "/static/audio/baby2.ogg"
					url: root + "/static/audio/elect-chime.ogg"
				});

				//soundManager.play('mySound2');
				playSound('mySound2');
				//vibrateMulti();
				//return
			}

		} else {
		
			if (d == -1) { 
			//notify message
			
				var aSound = document.createElement('audio');
				var root = location.protocol + '//' + location.host;
				soundManager.createSound({
					id: 'mySound3',
					volume: 50,
					url: root + "/static/audio/R2D2e.ogg"
				});

				//soundManager.play('mySound3');
				playSound('mySound3');
				//vibrateMulti();
				//return
			
			} else {
			//danger message
			
				var aSound = document.createElement('audio');
				var root = location.protocol + '//' + location.host;
				soundManager.createSound({
					id: 'mySound4',
					volume: 50,
					url: root + "/static/audio/WarningSiren.ogg"
				});

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
	innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-error.png' width=60 height=60></img></a></a>CHANNEL ERROR.";
	alertifyThis(innerHTML);
};

function onClose() {
	//reConnect();
	//console.log("===============================================");
	//console.log("Disconnected");
	innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-disconnected.png' width=60 height=60></img></a>CHANNEL DISCONNECTED.";
	alertifyThis(innerHTML);
};

function alertifyThis(message) {
	var ss = document.getElementById("soundStat");
	if (ss.value != "on") {
		return;
	}
	alertify.set({ delay: 120000 });
	//alertify.error(message);
	//alertify.log(message);
	alertify.success(message);
	//notification
	showNotification(1,message)
	return;
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
	//cxhr2.send();
	//return;
	alertify.error("Knock knock has been sent!");
};

function playSound(sid) {
	var ss = document.getElementById("soundStat");
	if (ss.value == "on") {
		soundManager.play(sid);
	}
}

//--end channel codes

function reConnect() {

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
	channelConnect();
	
	return;
};

function musicOnOff() {
	var e = document.getElementById("musicFlag");
	var res = e.src;
	var musicOn = true;
	var n = res.indexOf("/static/img/musicon.png");
	if (n > 0) {
		musicOn = false;
	} else {
		musicOn = true;
	}
	
	switch (musicOn) {
		case false:
			soundManager.stopAll();
			alertify.error("Music has been enabled.");
			e.src = "/static/img/musicoff.png";
			var curMusic = document.getElementById("ranMusic").value;
			getRanMusic(curMusic);
			break;
		case true:
			alertify.error("Music has been turned off.");
			e.src = "/static/img/musicon.png";
			var curMusic = document.getElementById("ranMusic").value;
			soundManager.stop(curMusic);
			break;

	}
	return;
};

function getRanMusic(curMusic) {
	
	alertifyThis("Searching music...");
	ads_url = '/media?FUNC_CODE=GET_RAN_MUSIC&CURM=' + curMusic;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpm=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpm=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	xmlhttpm.open("GET",ads_url,true);
	xmlhttpm.send();
	 xmlhttpm.onreadystatechange=function()
	  {
	  if (xmlhttpm.readyState==4 && xmlhttpm.status==200)
		{
		var currVal = xmlhttpm.responseText;
			console.log("ran music: " + currVal);
			if (currVal != "") {
				alertifyThis("Playing music...");
				url="/media?FUNC_CODE=PLAY&MEDIA_ID=" + currVal + "&SID=TDSMEDIA-" + currVal;
				console.log("url: " + url);
				document.getElementById("ranMusic").value = "TDSMEDIA-" + currVal;
				playSoundRandom("TDSMEDIA-" + currVal, url)
				return;
			}
			return;
		}
	 }	
	return;
	
}

function playSoundRandom(sID, sURL) {
	var aSound = document.createElement('audio');
	var s = soundManager.createSound({
	  id: sID,
	  volume: 95,
	  url: sURL
	});

	s.play({
		onfinish: function() {
		  getRanMusic();
		}
    });
}