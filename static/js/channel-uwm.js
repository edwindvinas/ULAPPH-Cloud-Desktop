//--start channel codes
var DEBUG = document.getElementById("debug").value;
var aUser = document.getElementById("aUser");
var thisUser = aUser.value;
var friendlyName = "";
var thisGrp = document.getElementById("ugrp").value;
var tok = document.getElementById("tok");
var da = document.getElementById("dispAds");
var ss = document.getElementById("soundStat");
var rm = document.getElementById("ranMusic");
var uwms = document.getElementById("uwms");
var cctvs = document.getElementById("cctvstream");
var speechRecog = document.getElementById("speechRecog");
var isLocal = document.getElementById("isLocal");
var FL_CONNECTED_OK = false;
var FL_CONTENT_OK = false;
var CTR_RAND_CON = 0;
var root = location.protocol + '//' + location.host;
var currToken = "";
//enable cctv streaming by default
if (cctvs.value == "true" || cctvs.value == true) {
	consoleLogger("Enabled cctv streaming");
	alertify.log("Enabled cctv streaming");
	localStorage[root+'isStreaming'] = 'Y';
} else {
	localStorage[root+'isStreaming'] = 'N';
	consoleLogger("Disabled cctv streaming");
	alertify.log("Disabled cctv streaming");
}
//enable speech recognition by default
if (speechRecog.value == "true" || speechRecog.value == true) {
	consoleLogger("Enabled speech recognition");
	alertify.log("Enabled speech recognition");
	localStorage[root + 'quite-flag'] = "off";
	//SpeechKITT.setInstructionsText('Talk...');
} else {
	consoleLogger("Disabled speech recognition");
	alertify.log("Disabled speech recognition");
	localStorage[root + 'quite-flag'] = "on";
	//SpeechKITT.setInstructionsText('Quiet...');
}
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

window.onfocus = function () { 
  isActive = true; 
  localStorage[root + 'quite-flag'] = "off";
}; 

window.onblur = function () { 
  isActive = false; 
  localStorage[root + 'quite-flag'] = "on";
}; 

//clear ls
var d = document.getElementById("desktop");
localStorage[root+d.value] = "<h1>Desktop Links</h1><ul>";

channelConnect();

function channelConnect() {
		alertify.success("Connecting to channel...");
		friendlyName = emailToName(thisUser,"");
		soundNow();
};

function soundNow() {
	
	var aSound = document.createElement('audio');

	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'mySoundSU',
			volume: 80,
			url: root + "/static/audio/startup.mp3"
		});
		playSound('mySoundSU');	
		return;
	}
	soundManager.createSound({
		id: 'mySoundSU',
		volume: 80,
		//url: root + "/static/audio/startup.ogg"
		url: root + "/static/audio/startup.mp3"
	});
	playSound('mySoundSU');
	
};

function soundStart() {
	
	var aSound = document.createElement('audio');

	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'mySoundS',
			volume: 80,
			url: root + "/static/audio/startup.mp3"
		});
		playSound('mySoundS');
		return;
	}
	
	soundManager.createSound({
		id: 'mySoundS',
		volume: 80,
		//url: root + "/static/audio/startup.ogg"
		url: root + "/static/audio/startup.mp3"
	});
	playSound('mySoundS');
	
};

function onOpen() {
	soundStart();
	alertify.success("Channel opened...");

	setInterval(function(){checkMessagesLoop()}, 300000);
		
};

function checkMessagesLoop(){

	if (da.value == "true") {
		dispAds();
	}

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
			if (currVal != tok.value) {
				alertify.set({ delay: 5000 });
				alertify.error("Channel expired...", "", 0);
				
				//update token
				document.getElementById("tok").value = currVal;
				
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'alert',
						volume: 75,
						url: root + "/static/audio/error.mp3"
					});
					playSound('alert');
					return;
				}
				
				soundManager.createSound({
					id: 'alert',
					volume: 75,
					//url: root + "/static/audio/error.ogg"
					url: root + "/static/audio/error.mp3"
				});
				playSound('alert');
				return
			}
		return
		}
	 }
	return
		
};

function reConnect() {

	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	cxhr.open("GET","/stream?STR_FUNC=DEL_CHAN", true); 
	cxhr.send(); 
	channelConnect();
	
	return;
};

function dispAds() {
	if (CTR_RAND_CON <= 5000) {
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
		xmlhttp.send();
		 xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var currVal = xmlhttp.responseText;
				if (currVal != "") {
					alertify.success(currVal);
					CTR_RAND_CON = CTR_RAND_CON + 1; 
					return;
				}
			return;
			}
		 }
		 return;
	 }
};
function procMessage(obj) {
	var r = document.getElementById("ringtone");
	var res = obj.message;
	var n = res.indexOf("notify-icon.png");
	var sapi = res.indexOf("View Search Item");
	var sapi2 = res.indexOf("icon-plus.png");
	var sapi3 = res.indexOf("Search.png");
	var sapi4 = res.indexOf("Youtube.png");
	var a = res.indexOf("alert-icon.png");
	var d = res.indexOf("danger-cat.png");
	var m = res.indexOf("newmessage.gif");
	var scr = res.indexOf("scraper.png");
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
	if (sysUpd > 0) {
		var cmdata = str.split("@888@");
		switch (cmdata[2]) {
			case "SYS_ROUTE_AGENT":
				break;
			case "SYS_RC_PLAY_MUSIC":
				alertifyThis("Playing music...");
				var mid = cmdata[3];
				playMusic(mid);
				break;
			
			case "SYS_OPEN_WINDOW":
				if (document.hidden) {
					return;
				}
				if (localStorage[root + 'quite-flag'] == "on") {
					alertify.set({
						delay: 30000
					});
					alertify.error("Sys open window skipped... quite mode is on.");
					return
				}
				if (cmdata[3] == "" || cmdata[3] == undefined) {
					var thisLink = root + "/tools?FUNC=WIDGET&t=MiniBrowserGet";
					//openWindow(thisLink, cmdata[2]);
                    openWindow(thisLink, "Untitled Window");		
				} else {
					//main uwm
					var tgt = cmdata[3];
					var hv = tgt.indexOf("http://");
					var hs = tgt.indexOf("https://");
					if (hv < 0 && hs < 0) {
						tgt = root + tgt;
					}
					//openWindow(tgt, "SYS_OPEN_WINDOW");
                    openWindow(tgt, tgt);
				}
				break;
				
			//D0066
			case "SYS_STRUWM_MIRROR":
				consoleLogger("SYS_STRUWM_MIRROR");
				if (document.hidden) {
					return;
				}
				if (localStorage[root + 'quite-flag'] == "on") {
					alertify.set({
						delay: 30000
					});
					alertify.error("Sys struwm mirror skipped... quite mode is on.");
					return
				}
				var src = cmdata[3];
				//var cap = cmdata[4];
				consoleLogger(src);
				if (ValidURL(bgImgUrl) == true) {
                                	document.getElementById('page').style.backgroundImage = "url(" + src + ")";
					//var rn = document.getElementById("ranid")
					//rn.value = "pause";
                        	}
				break;
			//D0083
			case "SYS_STRUWM_DESKTOP":
				consoleLogger("SYS_STRUWM_DESKTOP");
				if (document.hidden) {
					return;
				}
				if (localStorage[root + 'quite-flag'] == "on") {
					alertify.set({
						delay: 30000
					});
					alertify.error("Sys struwm desktop skipped... quite mode is on.");
					return
				}
				var server = cmdata[3];
				consoleLogger("server: "+server);
				consoleLogger("root: "+root);
               	var smatch = root.indexOf(server);
				var desktop = "uwm"+cmdata[4];
				var src = cmdata[5];
                var cuser = cmdata[7];
                consoleLogger("cuser: "+cuser);
                consoleLogger("smatch: "+smatch);
				consoleLogger("thisUser: "+thisUser);
				//var umatch = thisUser.indexOf(cuser);
				var umatch = cuser.indexOf(thisUser);
				consoleLogger("umatch: "+umatch);
                if (smatch < 0) {
                    if (thisGrp != "GRP_ADMIN" && umatch < 0) {
                        return;
                    } else {
                        consoleLogger("server: "+server);
                        consoleLogger("desktop: "+desktop);
                        consoleLogger("src: "+src);
                    }
                }
				var uwm = document.getElementById("desktop").value;
				consoleLogger("uwm: "+uwm);
                var ttl = cmdata[6];
                consoleLogger("ttl: "+ttl);
				var ttlstamp = ttl + " [" + ts + "]";
                //push to cctv stream
                var ts = Math.round((new Date()).getTime() / 1000);
				var thisItem = "";
				var bgUrl = "";
				var origUrl = cmdata[5];
				var uCom = res.indexOf(".com");
				var uNew = res.indexOf(".net");
				if (location.host != "localhost" && uCom < 0 && uNew < 0) {
					var ipAdd = document.getElementById("IP").value;
					var repUrl = origUrl.replace("127.0.0.1", ipAdd);
					bgUrl = repUrl;
					thisItem = cmdata[3] + "(" + cmdata[6] + ")" + "@888@" + repUrl + "@888@" + ts;
				} else {
					thisItem = cmdata[3] + "(" + cmdata[6] + ")" + "@888@" + origUrl + "@888@" + ts;
					bgUrl = origUrl;
				}
                var cctvstream = localStorage[uwm+"cctv-stream-photos"];
                var newEntry = thisItem + "@777@" + cctvstream;
				var rn = document.getElementById("ranid");
                //localStorage["cctv-stream-photos"] = newEntry;
                if (ValidURL(src) == true && localStorage[root+'isStreaming'] == 'Y') {
                    if (thisGrp == "GRP_ADMIN" || umatch >= 0 && rn.value != "pause") {
                        localStorage[uwm+"cctv-stream-photos"] = newEntry;
                    }
					if (rn.value != "pause") {
						//document.getElementById('page').style.backgroundImage = "url(" + src + ")";
						document.getElementById('page').style.backgroundImage = "url(" + bgUrl + ")";
						SpeechKITT.setInstructionsText('');
						SpeechKITT.setSampleCommands(ttlstamp);
					}
                    if (urlParams["toolbar"] == "cctv") {
                        var d = new Date();
                        var tLink = "/media?FUNC_CODE=VIEW_THUMBS&PROC=Y&RECENT=100&cont_type=TDSMEDIA&cont_cat=desktop" + cmdata[4] + "&cat_name=" + src;
                                        document.getElementById('head').innerHTML = "<a href=\"" + tLink + "\" target=review" + cmdata[4] + "><img src=/img/logs.png></a>" + d;
                    }
                } else {
                    if (localStorage[root+'isStreaming'] == 'Y') {
                        var n = src.indexOf(thisUser+"/TDSMEDIA/CCTV");
                        if (thisGrp == "GRP_ADMIN" || n > 0 || umatch >= 0) {
							if (rn.value != "pause") {
								localStorage[uwm+"cctv-stream-photos"] = newEntry;
								//document.getElementById('page').style.backgroundImage = "url(" + src + ")";
								document.getElementById('page').style.backgroundImage = "url(" + bgUrl + ")";
								SpeechKITT.setInstructionsText('');
								SpeechKITT.setSampleCommands(ttlstamp);
							}
                        }
                    }
                }
				break;
			//D0071
			case "SYS_STRUWM_ALARM":
			consoleLogger("SYS_STRUWM_ALARM");
			if (document.hidden) {
				return;
			}
			if (localStorage[root + 'quite-flag'] == "on") {
				alertify.set({
					delay: 30000
				});
				alertify.error("Sys struwm alarm skipped... quite mode is on.");
				return
			}
			//data := fmt.Sprintf("@888@ULAPPH-SYS-UPD@888@SYS_STRUWM_ALARM@888@%v@888@%v", CAPTION, MESSAGE
				var caption = cmdata[3];
				var message = cmdata[4];
				if (document.getElementById("soundStat").value != "off") {
					alertify.set({ delay: 300000 });
					//alertify.error(caption);
					alertify.error(message);
                    //say it
					speakMessage(caption);
				}

                                var aSound = document.createElement('audio');
                                if (isEdge == true || isIE == true || isSafari == true) {
                                        soundManager.createSound({
                                                id: 'mySoundCctv',
                                                volume: 75,
                                                url: root + "/static/audio/industrialAlarm.mp3"
                                        });
                                } else {
                                        soundManager.createSound({
                                                id: 'mySoundCctv',
                                                volume: 75,
                                                //url: root + "/static/audio/industrialAlarm.ogg"
												url: root + "/static/audio/industrialAlarm.mp3"
                                        });
                                }

                                playSound('mySoundCctv');
                                document.getElementById("ping-res").innerHTML = "<img src='/static/img/sysinf.gif' width='20' height='20' align='middle'></img>Alert";
                                //titleBlink("Alert",caption);
                                return;
								
			case "SYS_STRUWM_BATTERY_BCAST":
				consoleLogger("SYS_STRUWM_BATTERY_BCAST");
				if (document.hidden) {
					return;
				}
				if (localStorage[root + 'quite-flag'] == "on") {
					alertify.set({
						delay: 30000
					});
					alertify.error("Sys batt broadcast skipped... quite mode is on.");
					return
				}
				var devID = cmdata[3];
				var devMsg = cmdata[4];
				consoleLogger("devID: "+devID);
				consoleLogger("devMsg: "+devMsg);
				if (devID == "" || devID == undefined || devMsg == "" || devMsg == undefined) {
					//do nothing
				} else {
					alertify.error(devMsg);
				}
				break;

			case "SYS_GOOGLE_SEARCH":
				var kw = cmdata[3];
				var tgt = 'https://www.google.com.ph/search?q=' + kw + '&source=lnt&tbs=qdr:d&sa=X&&biw=1366&bih=700';
				openWindowNow(tgt, 'SEARCH: '+kw);
				var tgi = 'https://www.google.com.ph/search?q=' + kw + '&rlz=1C1GGRV_enPH754PH754&source=lnms&tbm=isch&sa=X&biw=1280&bih=610';
				openWindowNow(tgi, 'SEARCH: '+kw);
				break;
				
			case "SYS_UPDATE_TLM":
				var tlm = document.getElementById("menu");
				tlm.innerHTML = cmdata[3];
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
			case "swiperight":
				console.log("swiperight");
				if (localStorage[root+"news"] == "on") {
					stopTalking();
					funcshow();
				} else if (localStorage[root+'isStreaming'] == 'Y') {
					scanCctvStream("R");
				} else {
					nextWp();
				}
				break;
			case "swipeleft":
				console.log("swipeleft");
				if (localStorage[root+"news"] == "on") {
					stopTalking();
					funcshow();
				} else if (localStorage[root+'isStreaming'] == 'Y') {
					scanCctvStream("L");
				} else {
					nextWp();
				}
				break;
			case "swipeup":
				console.log("swipeup");
				if (localStorage[root+"news"] == "on") {
					selectRandomDesktop();
				} else if (localStorage[root+'isStreaming'] == 'Y') {
					scanCctvStream("C");
				} else {
					nextWp();
				}
				break;
			case "swipedown":
				console.log("swipedown");
				if (localStorage[root+"news"] == "on") {
					selectRandomDesktop();
				} else if (localStorage[root+'isStreaming'] == 'Y') {
					scanCctvStream("O");
				} else {
					nextWp();
				}
				break;
			default:
				var OL = res.split("@888@");
				var tgt = OL[3];
				var ttl = OL[2];
				var hv = tgt.indexOf("http://");
				var hs = tgt.indexOf("https://");
				if (hv < 0 && hs < 0) {
					tgt = root + tgt;
				}
				var res = tgt.replace("http://", "https://");
				openWindow(res, ttl);
		}
		return;
	}
	
	if (scr >0) {
		alertify.set({ delay: 300000 });
		//alertify.log(res, "", 0);
		alertify.log(res);
		
		var aSound = document.createElement('audio');
		if (isEdge == true || isIE == true || isSafari == true) {
			soundManager.createSound({
				id: 'waterscr',
				volume: 75,
				url: root + "/static/audio/water-drop.mp3"
			});
			playSound('water');		
		} else {	
			soundManager.createSound({
				id: 'waterscr',
				volume: 75,
				//url: root + "/static/audio/water-drop.ogg"
				url: root + "/static/audio/water-drop.mp3"
			});
			playSound('waterscr');
		}
		return;
	}
	
	if (p > 0) {
		return;
	}
	
	if (sapi > 0 || sapi2 > 0 || sapi3 > 0 || sapi4 > 0) {
		titleBlink("Autosearch!",res);
		document.getElementById("ping-res").innerHTML = "<img src='/static/img/notify-icon.png' width='20' height='20' align='middle'></img>New Search";
		return;
	}
		
	if (resp[0] == "DELETED") {
		alertify.log("SESSION DELETED...<br>", "", 0);
		setTimeout(function(){location.reload(true);},5000);
		return;
	}
		
	if (res == "LOGOUT.") {
		alertifyThis(res);
		window.location.assign("/logout?LFUNC=LOGOUT");
		alertify.log("Logged out...", "", 0);
		return;
	}
	
	if ((res == "CHANNEL CONNECTED.") && (FL_CONNECTED_OK == false)) {
		innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=60 height=60></img></a>CHANNEL CONNECTED.";		
		FL_CONNECTED_OK = true;
		alertifyThis(innerHTML);
		return;
	}
	if (u >= 0) {
		alertify.error(res, "", 0);
		var aSound = document.createElement('audio');
		if (r.value != "") {
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySound7',
					volume: 50,
					url: r.value
				});
				playSound('mySound7');

			} else {
				soundManager.createSound({
					id: 'mySound7',
					volume: 50,
					url: r.value
				});
				playSound('mySound7');
			}
		}
		newNoteMU(res);
		return;
	}
	if (pl >= 0) {
		alertify.error(res, "", 0);
		var aSound = document.createElement('audio');
		if (r.value != "") {
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySoundPL',
					volume: 50,
					url: root + "/static/audio/jamesbrown.mp3"
				});
				playSound('mySoundPL');

			} else {
				soundManager.createSound({
					id: 'mySoundPL',
					volume: 50,
					//url: root + "/static/audio/jamesbrown.ogg"
					url: root + "/static/audio/jamesbrown.mp3"
				});
				playSound('mySoundPL');
			}
		}
		newNoteMU(res);
		return;
	}
	if (k > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		if (r.value != "") {
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySound6',
					volume: 90,
					url: root + "/static/audio/ahem_x.mp3"
				});
				playSound('mySound6');


			} else {
				soundManager.createSound({
					id: 'mySound6',
					volume: 90,
					//url: root + "/static/audio/ahem_x.ogg"
					url: root + "/static/audio/ahem_x.mp3"
				});
				playSound('mySound6');
			}
		}
		return;
	}
	if (e1 > 0 || e2 > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		if (r.value != "") {
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySoundE',
					volume: 50,
					url: root + "/static/audio/error.mp3"
				});
				playSound('mySoundE');


			} else {
				
				soundManager.createSound({
					id: 'mySoundE',
					volume: 50,
					//url: root + "/static/audio/error.ogg"
					url: root + "/static/audio/error.mp3"
				});
				playSound('mySoundE');
			}
		}
		return;
	}
	if (m > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		if (r.value != "") {
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySound7',
					volume: 50,
					url: r.value
				});
				playSound('mySound7');
			} else {
				soundManager.createSound({
					id: 'mySound7',
					volume: 50,
					url: r.value
				});
				playSound('mySound7');
			}
		}
		return;
	}
	if (x > 0) {
		return;
	}
	if (c > 0) {
		alertifyThis(res);
		
		if (isEdge == true || isIE == true || isSafari == true) {
			soundManager.createSound({
				id: 'door_open',
				volume: 50,
				url: root + "/static/audio/door-open.mp3"
			});
			playSound('door_open');
		} else {	
			soundManager.createSound({
				id: 'door_open',
				volume: 50,
				//url: root + "/static/audio/door-open.ogg"
				url: root + "/static/audio/door-open.mp3"
			});
			playSound('door_open');
		}
		return;
	}
	if (a > 0) {
		//alertifyThis(res);
		alertify.set({ delay: 300000 });
		alertify.error(res);
		
		if (isEdge == true || isIE == true || isSafari == true) {
			soundManager.createSound({
				id: 'alert',
				volume: 50,
				url: root + "/static/audio/emergency030.mp3"
			});
			playSound('alert');
		} else {	
			soundManager.createSound({
				id: 'alert',
				volume: 50,
				//url: root + "/static/audio/emergency030.ogg"
				url: root + "/static/audio/emergency030.wav"
			});
			playSound('alert');
		}
	}
	if (res != "CHANNEL CONNECTED." && res != "CHANNEL ERROR." && res != "CHANNEL DISCONNECTED." && res != undefined) {
		alertifyThis(res);
		
		if (n == -1 && d == -1) {
		
			var aSound = document.createElement('audio');
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySound2',
					volume: 30,
					url: root + "/static/audio/elect-chime.mp3"
				});
				playSound('mySound2');
			} else {
				soundManager.createSound({
					id: 'mySound2',
					volume: 30,
					//url: root + "/static/audio/elect-chime.ogg"
					url: root + "/static/audio/elect-chime.mp3"
				});
				playSound('mySound2');
			}

		} else {
		
			if (d == -1) { 
				var aSound = document.createElement('audio');

				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'mySound3',
						volume: 50,
						url: root + "/static/audio/R2D2e.mp3"
					});
					playSound('mySound3');
				} else {	
					soundManager.createSound({
						id: 'mySound3',
						volume: 50,
						//url: root + "/static/audio/R2D2e.ogg"
						url: root + "/static/audio/R2D2e.mp3"
					});
					playSound('mySound3');
				}
			
			} else {
			
				var aSound = document.createElement('audio');

				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'mySound4',
						volume: 50,
						url: root + "/static/audio/WarningSiren.mp3"
					});

					playSound('mySound4');			
				} else {	
					soundManager.createSound({
						id: 'mySound4',
						volume: 50,
						//url: root + "/static/audio/WarningSiren.ogg"
						url: root + "/static/audio/WarningSiren.mp3"
					});

					playSound('mySound4');			
				}
				//show image if this is earthquake
				var m,
					str = res,
					rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

				while ( m = rex.exec( str ) ) {
					var thisImg = m[1];
					if (thisImg.indexOf("Earthquake_Information") > 0) {
						consoleLogger("thisImg: "+thisImg);
						document.getElementById('page').style.backgroundImage = "url(" + thisImg + ")";
					}
				}
			}
		
		}
		return;
	}
	return;
};

function onError(err) {
	innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-error.png' width=60 height=60></img></a></a>CHANNEL ERROR.";
	alertifyThis(innerHTML);
};

function onClose() {
	innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-disconnected.png' width=60 height=60></img></a>CHANNEL DISCONNECTED.";
	alertifyThis(innerHTML);
};

function playMusic(mid) {
        if (parseInt(mid) > 0) {
                        customMusic = true;
                        alertify.success("Playing music...");
                        var url = "/media?FUNC_CODE=PLAY&MEDIA_ID=" + mid;
                        consoleLogger("url: " + url);
			var SID = "TDSMEDIA-"+mid;
                        playSoundLoop(10, SID, url)
                        return;
        }
        return;
}

function playSoundLoop(sln, sID, sURL) {

        if (isActive == false) {
                return;
        }
	soundManager.stopAll();
        sURL = sURL.replace("http:", "https:");

        var aSound = document.createElement('audio');
        var s = soundManager.createSound({
          id: sID,
          volume: 90,
          url: sURL
        });

        s.play({
          loops: sln
        });

        return;
}

function alertifyThis(message) {
	var ss = document.getElementById("soundStat");
	if (ss.value != "on") {
		return;
	}
	alertify.set({ delay: 10000 });
	alertify.success(message);
	return;
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
	alertify.error("Knock knock has been sent!");
};

function playSound(sid) {
	var ss = document.getElementById("soundStat");
	if (ss.value == "on") {
		soundManager.play(sid);
	}
	return;
}

function newJSWMWindow() {
	var tgt = document.getElementById("newJSWM").value;
	var us = tgt.toUpperCase();
	var sb = us.indexOf("SETBG ");
	var su = us.indexOf("SETUWM ");
	var dn = us.indexOf("DNAME ");
	//D0066
	var sa = us.indexOf("SETBOT ");
	var st = us.indexOf("SETTOPIC ");
	var st2 = us.indexOf("SETTOPICS ");
	var st3 = us.indexOf("SETNAME ");
	var st4 = us.indexOf("CLEARLS ");

	//dname
	if (dn >= 0) {
		//set media as current wallpaper
		var SPS = tgt.split(" ");
		if ((SPS[0] == "dname" || SPS[0] == "DNAME") && SPS[1] != "") {
			localStorage["desktop-name-"+thisDesktop] = SPS[1];
			alertify.success("Renamed to: "+SPS[1]); 
			return;
		} else {
			alertify.success("ERROR: Example format: dname DesktopName"); 
			return;
		}
		return;
	}
	
	//setbg
	if (sb >= 0) {
		//set media as current wallpaper
		var SPS = tgt.split(" ");
		if ((SPS[0] == "SETBG" || SPS[0] == "setbg") && SPS[1] != "") {
			setbg(SPS[1]);
			pauseWp();
			return;
		} else {
			alertify.success("ERROR: Example format: setbg URL"); 
			return;
		}
		return;
	}
	
	//setuwm
	if (su >= 0) {
		//set media as uwm source
		if (uwms.value == "") {
			alertify.success("ERROR: Operation not allowed."); 
			return;			
		}
		var SPS = us.split(" ");
		if (SPS[0] == "SETUWM" && SPS[1] != "" && SPS[1] != "SETUWM") {
			setuwm(SPS[1]);
			return;
		} else {
			alertify.error("ERROR: Example format: setuwm TDSMEDIA-1"); 
			return;
		}
		return;
	}
	
	//settopic
	if (st >= 0 || st2 >= 0) {
		//set media as uwm source
		if (uwms.value == "") {
			alertify.success("ERROR: Operation not allowed."); 
			return;			
		}
		var SPS = us.split(" ");
		if ((SPS[0] == "SETTOPIC" || SPS[0] == "SETTOPICS") && SPS[1] != "") {
			settopic(SPS[1]);
			return;
		} else {
			alertify.error("ERROR: Example format: settopic TDSMEDIA-1"); 
			return;
		}
		return;
	}
	//D0066
	//setbot
	if (sa >= 0) {
		//set media as bot source
		if (uwms.value == "") {
			alertify.success("ERROR: Operation not allowed."); 
			return;			
		}
		var SPS = us.split(" ");
		if (SPS[0] == "SETBOT" && SPS[1] != "") {
			setbot(SPS[1]);
			return;
		} else {
			alertify.error("ERROR: Example format: setbot TDSMEDIA-1"); 
			return;
		}
		return;
	}
	
	//setname
	if (st3 >= 0) {
		//set name of this desktop (title)
		if (uwms.value == "") {
			alertify.success("ERROR: Operation not allowed."); 
			return;			
		}
		var SPS = us.split(" ");
		if ((SPS[0] == "SETNAME") && SPS[1] != "") {
			setname(SPS[1]);
			return;
		} else {
			alertify.success("ERROR: Example format: setname Put_Name_Here"); 
			return;
		}
		return;
	}
	
	//clear local copy of sid
	if (st4 >= 0) {
		var SPS = us.split(" ");
		if ((SPS[0] == "CLEARLS") && SPS[1] != "") {
			clearls(SPS[1]);
			return;
		} else {
			alertify.success("ERROR: Example format: clearls Put_SID_Here"); 
			return;
		}
		return;
	}
	
	var SPL = us.split("-");
	if (SPL[0] == "TDSMEDIA" || SPL[0] == "TDSSLIDE" || SPL[0] == "TDSARTL" || SPL[0] == "NEWTEXT" || SPL[0] == "NEWSLIDE" || SPL[0] == "NEWARTICLE") {
		switch (SPL[0]) {
			case "TDSMEDIA":
				var tgt = root + "/media?FUNC_CODE=VIEW&MEDIA_ID=" + SPL[1];
				break;
				
			case "TDSSLIDE":
				var tgt = root + "/slides?TYPE=SLIDE&MODE=NORMAL&PARM=LOOP&SECS=8&DOC_ID=" + SPL[1] + "&SID=TDSSLIDE-" + SPL[1];
				break;
				
			case "TDSARTL":
				var tgt = root + "/articles?TYPE=ARTICLE&DOC_ID=" + SPL[1] + "&SID=TDSARTL-" + SPL[1];
				break;	

			case "NEWTEXT":
				var tgt = root + "/editor?MEDIA_ID=0&SID=NEWTEXT";
				break;	

			case "NEWSLIDE":
				var tgt = root + "/editor?DOC_ID=0&SID=NEWSLIDE";
				break;	

			case "NEWARTICLE":
				var tgt = root + "/editor?DOC_ID=0&SID=NEWARTICLE";
				break;						
		}
	} else {
		
		if (tgt == "http://" || tgt == "https://" || tgt == "") {
			tgt = "https://www.google.com";
		} else {
			if (isDataURL(tgt) == false) {
				tgt = "https://www.google.com.ph/search?q=" + tgt;
			} else {
				tgt = tgt.replace("http://", "https://");
			}
		}
	}
	
	var jswmstr = "'" + tgt + "', 800, 500, 'right', 'top', {title: '" + tgt + "', icon: '/static/img/jswm-web.png'}";
	eval('windowManager.openURI(' + jswmstr + ');');
	
	var aSound = document.createElement('audio');

	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'water',
			volume: 75,
			url: root + "/static/audio/water-drop.mp3"
		});
		playSound('water');		
	} else {		
		soundManager.createSound({
			id: 'water',
			volume: 75,
			//url: root + "/static/audio/water-drop.ogg"
			url: root + "/static/audio/water-drop.mp3"
		});
		playSound('water');
	}
	return;
	
}	
var aiInit = "U";
var aiSession = 0;
function openChatWithUserID(origURL) {
	aiSession = aiSession + 1;
	var aUser = document.getElementById("aUser").value;
	var compAiSession = "-session-" + aiInit + aiSession;
	var uid = aUser + compAiSession;
	var thisColor1 = document.getElementById("startColor").value;
	var color1 = thisColor1.replace("#", "");
	var thisColor2 = document.getElementById("activeColor").value;
	var color2 = thisColor2.replace("#", "");
	var n = origURL.indexOf("?");
	var str = origURL;
	if (n > 0) { str = str+"&UID="+uid+"&uid="+uid+"&color1="+color1+"&color2="+color2; } else {str = str+"?UID="+uid+"&uid="+uid+"&color1="+color1+"&color2="+color2;}
	//window.open(str, compAiSession);
	openDrop(str);
}
function newBotMessage(msg) {
	stopTalking();
	localStorage[root+'activelistener'] = 'on';
	var tgt = "";
	if (msg != "" && msg != undefined) {
		tgt = msg;
	} else {
		tgt = document.getElementById("newJSWM").value;
	}
	document.getElementById("newJSWM999").value = tgt;
	SpeechKITT.queryWatsonAssistant(tgt);
	alertify.success("You said: "+tgt);
	if (localStorage[root + 'quite-flag'] == "on") {
		alertify.set({
			delay: 60000
		});
		alertify.error("Cannot process request... quite mode is on.");
	}
	return;
	
}
function newBotMessage2(numID) {
	//localStorage[root+'newBotMessage'+'xref'] = numID;
	stopTalking();
	localStorage[root+'activelistener'] = 'on';
	var tgt = document.getElementById("newJSWM"+numID).value;
	SpeechKITT.queryWatsonAssistant(tgt);
	//setTimeout(function() {setInactiveListener();}, 60000);
	//document.getElementById("newJSWM"+numID).value = tgt;
	alertify.success("You said: "+tgt);
	if (localStorage[root + 'quite-flag'] == "on") {
		alertify.set({
			delay: 60000
		});
		alertify.error("Cannot process request... quite mode is on.");
	}
	return;
	
}
function setBotSkillName(sname) {
	stopTalking();
	alertify.success("You switched to: "+sname);
	SpeechKITT.switchWatsonAssistant(sname);
	return;
}
function sayItTTS() {
	//localStorage[root+'newBotMessage'+'xref'] = numID;
	stopTalking();
	localStorage[root+'activelistener'] = 'on';
	var tgt = document.getElementById("newJSWM").value;
	alertify.success("You said: "+tgt);
	if (localStorage[root + 'quite-flag'] == "on") {
		alertify.set({
			delay: 60000
		});
		alertify.error("Cannot process request... quite mode is on.");
	}
	speakMessage(tgt);
	return;
}
function clearWindows() {
	windowManager.clear();
	windowManager.clear();
	windowManager.clear();
	windowManager.clear();
}
//Opens window w/o checking
function openWindowNow(tgt, ttl) {

	var jswmstr = "'" + tgt + "', 800, 500, 'right', 'top', {title: '" + ttl + "', icon: '/static/img/jswm-web.png'}";
	//consoleLogger(jswmstr);
	eval('windowManager.openURI(' + jswmstr + ');');
	
	var aSound = document.createElement('audio');
	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'water',
			volume: 75,
			url: root + "/static/audio/water-drop.mp3"
		});
		playSound('water');		
	} else {	
		soundManager.createSound({
			id: 'water',
			volume: 75,
			//url: root + "/static/audio/water-drop.ogg"
			url: root + "/static/audio/water-drop.mp3"
		});
		playSound('water');
	}
	return;
}

function openWindow(tgt, ttl) {
	if (ttl == "SYS_RC_YT_SEARCH" || ttl == "SYS_RC_YT_SEARCH_ID" || ttl == "SYS_RC_YT_SEARCH_ID2" || ttl == "SYS_STRUWM_CAPTURE" || ttl == "SYS_STRUWM_BATTERY_GET") {
		return;
	}

	var us = tgt.toUpperCase();
	var SPL = us.split("-");
	if (SPL[0] == "TDSMEDIA" || SPL[0] == "TDSSLIDE" || SPL[0] == "TDSARTL" || SPL[0] == "NEWTEXT" || SPL[0] == "NEWSLIDE" || SPL[0] == "NEWARTICLE") {
		switch (SPL[0]) {
			case "TDSMEDIA":
				var tgt = root + "/media?FUNC_CODE=VIEW&MEDIA_ID=" + SPL[1];
				break;
				
			case "TDSSLIDE":
				var tgt = root + "/slides?TYPE=SLIDE&MODE=NORMAL&PARM=LOOP&SECS=8&DOC_ID=" + SPL[1] + "&SID=TDSSLIDE-" + SPL[1];
				break;
				
			case "TDSARTL":
				var tgt = root + "/articles?TYPE=ARTICLE&DOC_ID=" + SPL[1] + "&SID=TDSARTL-" + SPL[1];
				break;	

			case "NEWTEXT":
				var tgt = root + "/editor?MEDIA_ID=0&SID=NEWTEXT";
				break;	

			case "NEWSLIDE":
				var tgt = root + "/editor?DOC_ID=0&SID=NEWSLIDE";
				break;	

			case "NEWARTICLE":
				var tgt = root + "/editor?DOC_ID=0&SID=NEWARTICLE";
				break;					
		}
	} else {
		
		if (tgt == "http://" || tgt == "https://" || tgt == "") {
			tgt = "https://www.google.com";
		} else {
			if (isDataURL(tgt) == false) {
				var hs = tgt.indexOf("CHAT_FUNC");
				if (hs >= 0) {
					//ok
				} else {
					tgt = "https://www.google.com.ph/search?q=" + tgt;
				}
			} else {
				var hv = tgt.indexOf("http://");
				var hs = tgt.indexOf("https://");
				if (hv < 0 && hs < 0) {
					tgt = "http://" + tgt;
				}
			}
		}
	}
	
	var jswmstr = "'" + tgt + "', 800, 500, 'right', 'top', {title: '" + ttl + "', icon: '/static/img/jswm-web.png'}";
	//consoleLogger(jswmstr);
	eval('windowManager.openURI(' + jswmstr + ');');
	
	var aSound = document.createElement('audio');
	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'water',
			volume: 75,
			url: root + "/static/audio/water-drop.mp3"
		});
		playSound('water');		
	} else {	
		soundManager.createSound({
			id: 'water',
			volume: 75,
			//url: root + "/static/audio/water-drop.ogg"
			url: root + "/static/audio/water-drop.mp3"
		});
		playSound('water');
	}
	return;
}

function isDataURL(s) {
	if (s.indexOf("https://localhost") >= 0) {
		consoleLogger("isDataURL = truen (localhost)");
		return true;
	}
	var myRegExp =/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
	if (!myRegExp.test(s)){
		consoleLogger("isDataURL = false");
		return false;
	}else{
		consoleLogger("isDataURL = true");
		return true;
	}
}

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
			if (currVal != "") {
				alertifyThis("Playing music...");
				url="/media?FUNC_CODE=PLAY&MEDIA_ID=" + currVal + "&SID=TDSMEDIA-" + currVal;
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
	return;
}

function setbg(bgImgUrl) {

	if (ValidURL(bgImgUrl) == true) {
		document.getElementById('page').style.backgroundImage = "url(" + bgImgUrl + ")";
	}
	return;
}

function setuwm(sid) {
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpset=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpset=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	var seturl = '/people?PEOPLE_FUNC=SETUWM&u=' + urlParams["u"] + '&UID=' + aUser.value + '&SID=' + sid;
	xmlhttpset.open("GET",seturl,true);
	xmlhttpset.send();
	 xmlhttpset.onreadystatechange=function()
	  {
	  if (xmlhttpset.readyState==4 && xmlhttpset.status==200)
		{
		var currVal = xmlhttpset.responseText;
			if (currVal != "") {
				alertify.success(currVal); 
				return;
			}
		return;
		}
	 }
	 return;
};
//D0066
function setbot(sid) {
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpset=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpset=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	var seturl = '/people?PEOPLE_FUNC=SETBOT&u=' + urlParams["u"] + '&UID=' + aUser.value + '&SID=' + sid;
	xmlhttpset.open("GET",seturl,true);
	xmlhttpset.send();
	 xmlhttpset.onreadystatechange=function()
	  {
	  if (xmlhttpset.readyState==4 && xmlhttpset.status==200)
		{
		var currVal = xmlhttpset.responseText;
			if (currVal != "") {
				alertify.success(currVal); 
				return;
			}
		return;
		}
	 }
	 return;
};

function settopic(sid) {
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpset=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpset=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	var seturl = '/people?PEOPLE_FUNC=SETTOPICS&u=' + urlParams["u"] + '&UID=' + aUser.value + '&SID=' + sid;
	xmlhttpset.open("GET",seturl,true);
	xmlhttpset.send();
	 xmlhttpset.onreadystatechange=function()
	  {
	  if (xmlhttpset.readyState==4 && xmlhttpset.status==200)
		{
		var currVal = xmlhttpset.responseText;
			if (currVal != "") {
				alertify.success(currVal); 
				return;
			}
		return;
		}
	 }
	 return;
};

function setname(name) {
	document.title = name + '@' + window.location.host;
	alertify.success("Desktop named as "+name); 
	return;
};

//postMessage
window.addEventListener('message', function(e) {
	var root = location.protocol + '//' + location.host;
    consoleLogger('origin:  ',e.origin);
    consoleLogger('root:  ',root);
    consoleLogger('parent received message!:  ',e.data);
    //var origin = e.originalEvent.origin || e.origin;
	var origin = e.origin;
	if ( origin !== root ) {
        consoleLogger('Origin and root does not match!');
		return;
	}
    var str = e.data;
    var n = str.indexOf("ULAPPH-SYS-UPD@888@");
	if (n == 0) {
		//system commands
        var cmdata = str.split("@888@");
        consoleLogger('cmdata:  ',cmdata);
		if (cmdata.length >= 2) {
			switch (cmdata[1]) {
                case "SYS_OPEN_WINDOW":
					if (document.hidden) {
						return;
					}
					if (localStorage[root + 'quite-flag'] == "on") {
						alertify.set({
							delay: 30000
						});
						alertify.error("Sys open window skipped... quite mode is on.");
						return
					}
                    //var cmdata = str.split("@888@");
                    if (cmdata[2] == "" || cmdata[2] == undefined) {
                        var thisLink = root + "/tools?FUNC=WIDGET&t=MiniBrowserGet";
                        openWindow(thisLink, "Untitled Window");	
                    } else {
                        //main uwm
                        var tgt = cmdata[2];
                        var hv = tgt.indexOf("http://");
                        var hs = tgt.indexOf("https://");
                        if (hv < 0 && hs < 0) {
                            tgt = root + tgt;
                        }
                        openWindow(tgt, tgt);
                    }
                    break;
				case "EDIT_WINDOWS_SUBUWM":
					if (document.hidden) {
						return;
					}
					if (localStorage[root + 'quite-flag'] == "on") {
						alertify.set({
							delay: 30000
						});
						alertify.error("Sys windows subuwm skipped... quite mode is on.");
						return
					}
					var duser = document.getElementById("aUser").value;
					var rex = duser.split("---");
					if (rex.length == 2) {
						var thisUwm = rex[1];
						var thisLink = root + "/people-edit?EditPeopleFunc=EDIT_WINDOWS_SUBUWM&u=" + thisUwm;
						openWindow(thisLink, thisLink);	
					} else {
						//main uwm
						var thisLink = root + "/people-edit?EditPeopleFunc=EDIT_WINDOWS_MINE&UID=";
						openWindow(thisLink, thisLink);
					}
					break;
				case "FIND_NEW_ICONS":
					var thisLink = "https://www.google.com.ph/search?q=sample+icon+png&tbm=isch&tbs=isz:i";
					openWindow(thisLink, thisLink);
					break;
				case "LOGOUT_ULAPPH":
					var thisLink = root + "/logout?LFUNC=LOGOUT";
					window.location.assign(thisLink);
					break;
				default:
					//link commands
					var cmdo = e.data;
					//split
					//ULAPPH-SYS-UPD@888@TITLE@888@link
					var OL = cmdo.split("@888@");
					var tgt = OL[2];
					var ttl = OL[1];
					var hv = tgt.indexOf("http://");
					var hs = tgt.indexOf("https://");
					if (hv < 0 && hs < 0) {
						tgt = root + tgt;
					}
					var res = tgt.replace("http://", "https://");
					openWindow(res, ttl);
			}
		}
	} else {
		//link commands
		var tgt = e.data;
		var hv = tgt.indexOf("http://");
		var hs = tgt.indexOf("https://");
		if (hv < 0 && hs < 0) {
			tgt = root + tgt;
		}
		var res = tgt.replace("http://", "https://");
		openWindow(res, e.data);
	}
	
},false);
//drag & drop event
function drop(evt) {
	evt.stopPropagation();
	evt.preventDefault(); 
	files = evt.dataTransfer.files;
	
	var thisUrl = evt.dataTransfer.getData('text/html');
	consoleLogger("thisUrl: "+thisUrl);
	
	var doc = document.createElement("html");
	doc.innerHTML = thisUrl;
	var isRemoteSlideArticle = false;
	var formData = new FormData();
		
	//links
	var links = doc.getElementsByTagName("a")
	if (links.length > 0) {
		var url = links[0].getAttribute("href");
		var s = url.indexOf(".slide");
		if (s > 0) {
			formData.append('cv', "s");
			consoleLogger('slide...');
			isRemoteSlideArticle = true;
		}
		var a = url.indexOf(".article");
		if (a > 0) {
			formData.append('cv', "a");
			consoleLogger('article...');
			isRemoteSlideArticle = true;
		}
		if (isRemoteSlideArticle == false) {
			openDrop(url);
			return;
		}
		
	} else {
	
		//images
		var imgs = doc.getElementsByTagName("img")
		if (imgs.length > 0) {
			var url = imgs[0].getAttribute("src");
			consoleLogger("url: "+url);
			setbg(url);
			//pauseWp();
			//update hidden value ranval
			var rn = document.getElementById("ranid")
			rn.value = "pause";
			return;
		}
	}

	//if item is a file
	var isSlideArticle = false;
	if (isRemoteSlideArticle == false) {
		for (var i = 0; i < files.length; i++) {
			formData.append('file', files[i]);
			//default text
			//formData.append('cv', "t");
			var str = files[i].name;
			var s = str.indexOf(".slide");
			var s2 = str.indexOf(".ulapphSlide");
			if (s > 0 || s2 > 0) {
				formData.append('cv', "s");
				consoleLogger('slide...');
				isSlideArticle = true;
			}
			var a = str.indexOf(".article");
			var a2 = str.indexOf(".ulapphArticle");
			if (a > 0 || a2 > 0) {
				formData.append('cv', "a");
				consoleLogger('article...');
				isSlideArticle = true;
			}
			//check if images
			if (isSlideArticle == false && (str.indexOf(".gif") > 0 || str.indexOf(".jpg") > 0  || str.indexOf(".png") > 0 || str.indexOf(".GIF") > 0 || str.indexOf(".JPG") > 0  || str.indexOf(".PNG") > 0)) {
				  consoleLogger('image...');
				  var file = files[0],
					  reader = new FileReader();
				  reader.onload = function (event) {
					consoleLogger(event.target);
					document.getElementById('page').style.backgroundImage = "url(" + event.target.result + ")";
					var rn = document.getElementById("ranid")
					rn.value = "pause";
				  };
				  consoleLogger(file);
				  reader.readAsDataURL(file);
				  return;
			}
			//check if text
			if (isSlideArticle == false && (str.indexOf(".txt") > 0 || str.indexOf(".ulapphText") > 0  || str.indexOf(".text") > 0 || str.indexOf(".yaml") > 0 || str.indexOf(".yml") > 0 )) {
				  consoleLogger('text...');
				  formData.append('cv', "t");
				  /*var file = files[0],
					  reader = new FileReader();
				  reader.onload = function (event) {
					consoleLogger(event.target);
					//document.getElementById('page').style.backgroundImage = "url(" + event.target.result + ")";
				  };
				  consoleLogger(file);
				  reader.readAsDataURL(file);*/
				  //return;
			}
		}	
	}
	
	// now post a new XHR request
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/editor');
	if (isRemoteSlideArticle == true) {
		formData.append('remote', "Y");
		formData.append('url', links[0].getAttribute("href"));
	}
	formData.append('sid', "");
	formData.append('ct', "v");
	formData.append('EDIT_FUNC', "CRYPTO");
	formData.append('UID', thisUser);
	//formData.append('redirect', "Y");
	formData.append('EDIT_MODE', "NEW-CRYPTO");
	xhr.onload = function () {
	  if (xhr.status === 200) {
		consoleLogger('all done: ' + xhr.status);
		var w = 800;
		var h = 600;
		var x = 50;
		var y = 50;
		var winPrint = window.open('', '', 'left=' + x + ',top='+ y + ',width=' + w + ',height=' + h + ',toolbar=0,scrollbars=0,status=0');
		winPrint.document.write(xhr.responseText);
		winPrint.document.close();
	  } else {
		consoleLogger('Something went terribly wrong...');
	  }
	};
	xhr.send(formData);
	
	return;
}
function openDrop(url) {
	consoleLogger("openDrop: "+url);
	//var w = window.innerWidth;
	//var h = window.innerHeight-20;
	var w = 800;
	var h = 500;
	var res = url.replace("http://", "https://");
	var jswmstr = "'" + res + "', w, h, 'left', 'top', {title: '" + res + "', icon: '/static/img/jswm-web.png'}";
	//consoleLogger(jswmstr);
	eval('windowManager.openURI(' + jswmstr + ');');
	return;
}
function openDropSmall(url) {
	var w = 800;
	var h = 500;
	var res = url.replace("http://", "https://");
	var jswmstr = "'" + res + "', w, h, 'left', 'top', {title: '" + res + "', icon: '/static/img/jswm-web.png'}";
	//consoleLogger(jswmstr);
	eval('windowManager.openURI(' + jswmstr + ');');
	return;
}
function openAceEditor(m) {
	var w = 800;
	var h = 500;
	var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
	var rawStr = unescape(m);
	var temp = document.createElement("div");
	temp.innerHTML = rawStr;
	var sanitized = temp.textContent || temp.innerText;
	var encodedString = Base64.encode(sanitized);
	var url = root + "/editor?EDIT_FUNC=ACE-LOCAL&SID=STATIC&TEXT="+encodedString;
	var jswmstr = "'" + url + "', w, h, 'left', 'top', {title: '" + url + "', icon: '/static/img/jswm-web.png'}";
	//consoleLogger(jswmstr);
	eval('windowManager.openURI(' + jswmstr + ');');
	return;
}
function clearls(sid) {	
	//clear local copy
	var localStorageKey =  location.host + "-ace-" + sid;
	var thisContent = "";
	localStorage.setItem(localStorageKey, thisContent);
	alert("cleared local copy: "+sid);
	return;
};

//edv - 1/14/2018 - get domain of url
function getDomain(url) {
    var hostName = getHostName(url);
    var domain = hostName;
    
    if (hostName != null) {
        var parts = hostName.split('.').reverse();
        
        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];
                
            if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
              domain = parts[2] + '.' + domain;
            }
        }
    }
    
    return domain;
}

//edv - 1/19/2018 - get host namefunction getHostName(url) {
function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}

function consoleLogger(msg) {
	if (DEBUG == "false" || DEBUG == "") {
		return;
	}
	console.log(msg);
}
//resize handler
window.addEventListener("resize", resizeFunc);

function resizeFunc() {
    if (localStorage[root+'isScreenSmall-force'] == 'Y') {
	return;
    }
    var txt = "";
    txt += "<p>innerWidth: " + window.innerWidth + "</p>";
    txt += "<p>innerHeight: " + window.innerHeight + "</p>"; 
    txt += "<p>outerWidth: " + window.outerWidth + "</p>";
    txt += "<p>outerHeight: " + window.outerHeight + "</p>";
	var screenSize = window.innerWidth;

	if (window.innerHeight <= 600 || window.innerWidth <= 600) {
		//window is so small, we cant open widgets in uwm
		localStorage[root+'isScreenSmall'] = 'Y';
		var dispMode = "none";
		//hide menu icons
		var x = document.getElementById("menu-dx");
			x.style.display = dispMode;
		//#menu > ul > li:nth-child(3)
		var el3 = document.body.querySelector("#menu > ul > li:nth-child(3)");
			el3.style.display = dispMode;
		//#menu > ul > li:nth-child(4)
		var el4 = document.body.querySelector("#menu > ul > li:nth-child(4)");
			el4.style.display = dispMode;
		//#menu > ul > li:nth-child(5)
		var el5 = document.body.querySelector("#menu > ul > li:nth-child(5)");
			el5.style.display = dispMode;
		//#menu > ul > li:nth-child(6)
		var el6 = document.body.querySelector("#menu > ul > li:nth-child(6)");
			el6.style.display = dispMode;
		//#menu > ul > li:nth-child(7)
		var el7 = document.body.querySelector("#menu > ul > li:nth-child(7)");
			el7.style.display = dispMode;
		//#menu > ul > li:nth-child(8)
		var el8 = document.body.querySelector("#menu > ul > li:nth-child(8)");
			el8.style.display = dispMode;
		//#menu > ul > li:nth-child(9)
		var el9 = document.body.querySelector("#menu > ul > li:nth-child(9)");
			el9.style.display = dispMode;
		//#menu > ul > li:nth-child(10)
		var el10 = document.body.querySelector("#menu > ul > li:nth-child(10)");
			el10.style.display = dispMode;

	} else {
		localStorage[root+'isScreenSmall'] = 'N';
		var dispMode = "block";
		//hide menu icons
		var x = document.getElementById("menu-dx");
			x.style.display = dispMode;
		//#menu > ul > li:nth-child(3)
		var el3 = document.body.querySelector("#menu > ul > li:nth-child(3)");
			el3.style.display = dispMode;
		//#menu > ul > li:nth-child(4)
		var el4 = document.body.querySelector("#menu > ul > li:nth-child(4)");
			el4.style.display = dispMode;
		//#menu > ul > li:nth-child(5)
		var el5 = document.body.querySelector("#menu > ul > li:nth-child(5)");
			el5.style.display = dispMode;
		//#menu > ul > li:nth-child(6)
		var el6 = document.body.querySelector("#menu > ul > li:nth-child(6)");
			el6.style.display = dispMode;
		//#menu > ul > li:nth-child(7)
		var el7 = document.body.querySelector("#menu > ul > li:nth-child(7)");
			el7.style.display = dispMode;
		//#menu > ul > li:nth-child(8)
		var el8 = document.body.querySelector("#menu > ul > li:nth-child(8)");
			el8.style.display = dispMode;
		//#menu > ul > li:nth-child(9)
		var el9 = document.body.querySelector("#menu > ul > li:nth-child(9)");
			el9.style.display = dispMode;
		//#menu > ul > li:nth-child(10)
		var el10 = document.body.querySelector("#menu > ul > li:nth-child(10)");
			el10.style.display = dispMode;
	}
	alertifyThis(txt);
}

function playSoundEmergency() {
	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'emergency',
			volume: 50,
			url: root + "/static/audio/emergency030.mp3"
		});
		playSound('emergency');
	} else {	
		soundManager.createSound({
			id: 'emergency',
			volume: 50,
			//url: root + "/static/audio/emergency030.ogg"
			url: root + "/static/audio/emergency030.wav"
		});
		playSound('emergency');
	}
}

function openLinkWithUserID(origURL) {
	var uid = document.getElementById("aUser").value;
	var n = origURL.indexOf("?");
	var str = origURL;
	if (n > 0) { str = str+"&UID="+uid+"&uid="+uid; } else {str = str+"?UID="+uid+"&uid="+uid;}
	window.open(str, origURL);
}

function removeIconsBar() {
	console.log("removeIconsBar()");
	document.getElementsByClassName("icon-bar")[0].style.display = "none";
}

function showIconsBar() {
	console.log("showIconsBar()");
	document.getElementsByClassName("icon-bar")[0].style.display = "block";
}