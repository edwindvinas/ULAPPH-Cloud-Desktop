//--start channel codes
var FL_CONNECTED_OK = false;
var FL_CONTENT_OK = false;
var CTR_RAND_CON = 0;
var urlParams;
var root = location.protocol + '//' + location.host;
var curMusic = "";
var endDisp = 0;
var customMusic = false;
var isActive;
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

window.onfocus = function () { 
  isActive = true; 
}; 

window.onblur = function () { 
  isActive = false; 
}; 

channelConnect();

function channelConnect() {

	//alertify.success("Connecting to channel...");
	soundNow();
	//dispIconsLink();
	//dispSessions();

};

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
	//soundNow();
	//alertify.success("Channel opened...");
	FL_CONNECTED_OK = true;
	if (urlParams["TYPE"] == "SLIDE" || urlParams["TYPE"] == "ARTICLE") {
		playMusic(urlParams["MUSIC_ID"]);
	}
};

function onOpen2() {
	//set as manual
	var auo = document.getElementById("AUTO");
	auo.value = "G";
	//soundNow();
	//alertify.error("Channel not opened...");
	FL_CONNECTED_OK = true;
	if (urlParams["TYPE"] == "SLIDE" || urlParams["TYPE"] == "ARTICLE") {
		playMusic(urlParams["MUSIC_ID"]);
	}	
};

function dispSessions() {
	if (urlParams["MODE"] == "PRESENTER" || urlParams["MODE"] == "AUDIENCE") {
		return;
	}
	var url = "/directory?DIR_FUNC=sessions";
	alertify.set({ delay: 600000 });
	alertify.log("<iframe src=\"" + url + "\" frameborder=\"0\" scrolling=\"yes\" allowtransparency=\"true\" height=\"300px\"></iframe>");
	return;
}

function dispIconsLink() {
	if (urlParams["MODE"] == "PRESENTER" || urlParams["MODE"] == "AUDIENCE") {
		return;
	}
	
	var url = window.location.href;
	var title = "";
	if (urlParams["TITLE"] != "") {
		title = urlParams["TITLE"];
	}
	if (urlParams["TITLE"] == "" && urlParams["SID"] != "") {
		title = "ULAPPH Share - " + urlParams["SID"];
	}
	if (title == "") {
		title = url;
	}
	var res = encodeURIComponent(url);
	
	if (urlParams["SID"] != "" && urlParams["SID"] != undefined) {
		innerHTML = "<a href='/articles?TYPE=ARTICLE&DOC_ID=" + urlParams["DOC_ID"] + "&SID=" + urlParams["SID"] + "&FORCE=" + "Y" + "' target='articleMe'><img src='/static/img/ulapph-icons-articles.png' width=80 height=80 title='Article View'></img></a> <a href='/share?SH_FUNC=all&title=" + title + "&url=" + res + "' target='shareme'><img src='/static/img/sharethis.png' width=80 height=80 title='Share to social networks'></img></a> <a href='#' onclick='ULAPPH_SLIDES.PopIn.show(); soundManager.pauseAll(); return false;'><img src='/static/img/pause.png' width=80 height=80 title='Stop slides/music'></img></a>";
		alertify.set({ delay: 120000 });
		alertify.log(innerHTML);
	}
	return;	
};

function playMusic(mid) {
	console.log("playMusic: " + mid);
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
   
	var slideEls2 = document.querySelectorAll('section.slides > article');
	var slidesLEN = slideEls2.length;
	var slideNo = parseInt(location.hash.substr(1));
	
	if (urlParams["MUSIC_ID"] == "RANDOM" || urlParams["MUSIC_ID"] == "-1") {
		alertify.success("Searching music...");
		ads_url = '/media?FUNC_CODE=GET_RAN_MUSIC';
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
					alertify.success("Playing music...");
					var url = "/media?FUNC_CODE=PLAY&MEDIA_ID=" + currVal;
					curMusic = "TDSMEDIA-" + currVal;
					console.log("url: " + url);
					customMusic = true;
					if (urlParams["isMobile"] == true || urlParams["isMobile"] == "true") {
						alertify.log("<iframe src=\"" + url + "\" frameborder=\"0\" scrolling=\"yes\" allowtransparency=\"true\" height=\"70px\" witdh=\"200px\"></iframe>", "", 0);
					} else {
						playSoundRandom("TDSMEDIA-" + currVal, url)
					}
					return;
				}
				return;
			}
		 }	
		return;
	}
	
	if (parseInt(urlParams["MUSIC_ID"]) > 0) {
			customMusic = true;
			alertify.success("Playing music...");
			var url = "/media?FUNC_CODE=PLAY&MEDIA_ID=" + mid;
			console.log("url: " + url);
			if (urlParams["isMobile"] == true || urlParams["isMobile"] == "true") {
				alertify.log("<iframe src=\"" + url + "\" frameborder=\"0\" scrolling=\"yes\" allowtransparency=\"true\" height=\"70px\" witdh=\"200px\"></iframe>", "", 0);
			} else {			
				playSoundLoop(10, "ranmusic", url)
			}
			return;
	}
	return;
}

function playSoundRandom(sID, sURL) {
	
	if (isActive == false) {
		return;
	}
	
	sURL = sURL.replace("http:", "https:");
	
	var aSound = document.createElement('audio');
	var s = soundManager.createSound({
	  id: sID,
	  volume: 90,
	  url: sURL
	});

	s.play({
		onfinish: function() {
		  playMusic(urlParams["MUSIC_ID"]);
		}
	});
		
	return;
}

function playSoundLoop(sln, sID, sURL) {

	if (isActive == false) {
		return;
	}

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

function dispAds() {
	if (CTR_RAND_CON <= 50) {
		//console.log("disp ads...");
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject('MSXML2.XMLHTTP.3.0');
		  }

		alertify.set({ delay: 60000 });

		var ads_url = "";
		if (FL_CONTENT_OK == false) {
			ads_url = '/rcg?m=sing&q=' + "desktop0" + '&n=' + 1;
			FL_CONTENT_OK = true;
		} else {
			ads_url = '/rag?f=slides&d=' + "desktop0" + '&n=' + 1;
			FL_CONTENT_OK = false;
		}
		xmlhttp.open("GET",ads_url,true);
		xmlhttp.send();
		
		 xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var currVal = xmlhttp.responseText;
				if (currVal != "") {
					alertify.log(currVal);
					CTR_RAND_CON = CTR_RAND_CON + 1; 
					return
				}
			return
			}
		 }
		 return;
	 }
};

function procMessage(obj) {
 	var res = obj.message;
	/*console.log("obj.message: "+obj.message);
	res = Base64.decode(res);
	console.log("decoded: "+res); */
	var n = res.indexOf("notify-icon.png");
	var a = res.indexOf("alert-icon.png");
	var d = res.indexOf("danger-cat.png");
	var rn = res.indexOf("register_now.png");
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
	var resp = str.split(":");

	if (sysUpd > 0) {
		var cmdata = str.split("@888@");

		switch (cmdata[2]) {
			case "SYS_OPEN_LINK":
				var linkopen = cmdata[3];
				var uid = cmdata[4];
				var docID = cmdata[5];
				if (uid != "guest" && linkopen != "") {
					alertifyThis("<img src=\"/static/img/goto.png\"><br>Opening Link: " + linkopen);
					window.location.assign(linkopen);
				}
				break;
				
			case "SYS_OPEN_LINK2":
				var linkopen = cmdata[3];
				var uid = cmdata[4];
				var docID = cmdata[5];
				if (uid != "guest" && docID == "FORCE") {
					alertifyThis("<img src=\"/static/img/goto.png\"><br>Opening Link: " + linkopen);
					window.location.assign(linkopen);
				}
				break;
				
			case "SYS_PRESENT_SLIDE":
				var slideGoto = cmdata[3];
				alertifyThis("<img src=\"/static/img/goto.png\"><br>Go to SLIDE: " + slideGoto);
				get_url = '/website?q=GET_NEXT_CON2' + '&SID=TDSSLIDE-' + slideGoto + '&MODE=PRESENTER' + '&GOTO=' + slideGoto;
				if (window.XMLHttpRequest)
				  {// code for IE7+, Firefox, Chrome, Opera, Safari
				  xmlhttp=new XMLHttpRequest();
				  }
				else
				  {// code for IE6, IE5
				  xmlhttp=new ActiveXObject('MSXML2.XMLHTTP.3.0');
				  }
				xmlhttp.open("GET",get_url,true);
				xmlhttp.send();
				break;
				
			case "SYS_PRESENT_ARTICLE":
				var artGoto = cmdata[3];
				alertifyThis("<img src=\"/static/img/goto.png\"><br>Go to ARTICLE: " + artGoto);
				get_url = '/website?q=GET_NEXT_CON2' + '&SID=TDSARTL-' + artGoto + '&MODE=ARTICLE' + '&GOTO=' + artGoto;
				if (window.XMLHttpRequest)
				  {// code for IE7+, Firefox, Chrome, Opera, Safari
				  xmlhttp=new XMLHttpRequest();
				  }
				else
				  {// code for IE6, IE5
				  xmlhttp=new ActiveXObject('MSXML2.XMLHTTP.3.0');
				  }
				xmlhttp.open("GET",get_url,true);
				xmlhttp.send();
				break;
			
			case "SYS_RC_WEB_SEARCH":
				var searchKey = cmdata[3];
				alertifyThis("<img src=\"/static/img/Search.png\"><br>Web search " + searchKey);
				window.location.assign('/gsearch?FUNC_CODE=SEARCH-ACTS&UID=manual&SEARCH_KEY=' + searchKey + '&MODE=D');
				break;
				
			case "SYS_RC_YT_SEARCH":
				var searchKey = cmdata[3];
				alertifyThis("<img src=\"/static/img/Youtube.png\"><br>Youtube search " + searchKey);
				window.location.assign('/utube?YT_FUNC=1&UID=manual&SEARCH_KEY=' + searchKey + '&MODE=D');
				break;
			
			case "SYS_RC_IN_ULAPPH":
				var searchKey = cmdata[3];
				alertifyThis("<img src=\"/static/img/search-icons.png\"><br>Search In ULAPPH: " + searchKey);
				break;
				
			case "SYS_RC_ALL_ULAPPH":
				var searchKey = cmdata[3];
				alertifyThis("<img src=\"/static/img/ulapph-icons-search-icons.png\"><br>Search All ULAPPH: " + searchKey);
				break;
				
			case "SYS_RC_YT_SEARCH_ID":
				var ytID = "N" + cmdata[3];
				alertifyThis("<img src=\"/static/img/Youtube.png\"><br>Youtube ID: " + urlParams[ytID]);
				window.location.assign('/utube?YT_FUNC=0&YID=' + urlParams[ytID] + '&MODE=D');
				break;
				
			case "SYS_RC_YT_SEARCH_ID2":
				var ytID = cmdata[3];
				var yTYP = cmdata[4];
				alertifyThis("<img src=\"/static/img/Youtube.png\"><br>Youtube ID: " + ytID);
				window.location.assign('/utube?YT_FUNC=0&YID=' + ytID + '&MODE=D' + '&TYP=' + yTYP);
				break;
				
			case "SYS_RC_WEB_SEARCH2":
				var urlID = cmdata[3];
				alertifyThis("<img src=\"/static/img/icon-website.png\" width=128 height=128><br>URL: " + urlID);
				window.location.assign('/gsearch?FUNC_CODE=VIEW&UID=manual&URL=' + urlID + '&MODE=D');
				break;

			case "SYS_RC_NWS_SEARCH":
				var sKey = cmdata[3];
				alertifyThis("<img src=\"/static/img/News.png\" width=128 height=128><br>News Search: " + sKey);
				window.location.assign('/gsearch?FUNC_CODE=SNWS&UID=manual&SEARCH_KEY=' + sKey + '&MODE=D');
				break;
				
			case "SYS_RC_WIKI_SEARCH":
				var sKey = cmdata[3];
				alertifyThis("<img src=\"/static/img/wikipedia.png\" width=128 height=128><br>Wikipedia Search: " + sKey);
				var sUrl = "https://en.wikipedia.org/wiki/" + sKey;
				window.location.assign('/gsearch?FUNC_CODE=VIEW&UID=manual&URL=' + sUrl + '&MODE=D');
				break;
				
			case "SYS_RC_DIC_SEARCH":
				var sKey = cmdata[3];
				alertifyThis("<img src=\"/static/img/wikipedia.png\" width=128 height=128><br>Wiktionary Search: " + sKey);
				var sUrl = "https://en.wiktionary.org/wiki/" + sKey;
				window.location.assign('/gsearch?FUNC_CODE=VIEW&UID=manual&URL=' + sUrl + '&MODE=D');
				break;
			
			case "SYS_RC_PLAY_MUSIC":
				alertifyThis("Playing music...");
				var mid = cmdata[3];
				playMusic(mid);
				break;
				
			case "back":
				alertifyThis("History Back");
				window.history.back();
				break;
				
			case "forward":
				alertifyThis("History Forward");
				window.history.forward();
				break;
				
			case "testCon":
				alertifyThis("Connection OK!");
				
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'mySoundB',
						volume: 75,
						url: root + "/static/audio/baby2.mp3"
					});
					playSound('mySoundB');
				} else {
					soundManager.createSound({
						id: 'mySoundB',
						volume: 75,
						url: root + "/static/audio/baby2.ogg"
					});
					playSound('mySoundB');
				}
				break;
				
			case "swiperight":
				var slideNo = parseInt(location.hash.substr(1));
				if (urlParams["mode"] == "vu" && slideNo == 5) {
					pressKey('right');
				} else {
					prevSlide();
				}
				break;
			
			case "swipeleft":
				var slideNo = parseInt(location.hash.substr(1));
				if (urlParams["mode"] == "vu" && slideNo == 5) {
					pressKey('left');
				} else {
					nextSlide();
				}
				break;
				
			case "swipeup":
				var slideNo = parseInt(location.hash.substr(1));
				if (urlParams["mode"] == "vu" && slideNo == 5) {
					pressKey('up');
				} else {
					nextSlide();
				}
				break;

			case "swipedown":
				var slideNo = parseInt(location.hash.substr(1));
				if (urlParams["mode"] == "vu" && slideNo == 5) {
					pressKey('down');
				} else {
					prevSlide();
				}
				break;
				
			case "tap":
				alertifyThis("Paused OK!");
				alertify.set({ delay: 2000 });
				var slideNo = parseInt(location.hash.substr(1));
				if (urlParams["mode"] == "vu" && slideNo == 5) {
					pressKey('zoom');
				} else {
					pauseSlides();
				}
				break;
				
			case "longtap":
				alertify.set({ delay: 2000 });
				alertify.success("<img src=\"/static/img/success.png\">");
				window.location.assign('/infodb?DB_FUNC=VIEWER-SLIDES-ALL');
				break;

		}
		return;
	}
	
	if (resp[0] == "DELETED") {
		alertify.log("SESSION DELETED...<br>", "", 0);
		return
	}
	
	if ((res == "CHANNEL CONNECTED.") && (FL_CONNECTED_OK == false)) {
		innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=60 height=60></img></a>CHANNEL CONNECTED.";		
		FL_CONNECTED_OK = true;
		return
	}
	if (k > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySound6',
					volume: 50,
					url: root + "/static/audio/ahem_x.mp3"
				});
				playSound('mySound6');
			} else {	
				soundManager.createSound({
					id: 'mySound6',
					volume: 50,
					url: root + "/static/audio/ahem_x.ogg"
				});
				playSound('mySound6');
			}
		return;
	}
	if (e1 > 0 || e2 > 0) {
		var aSound = document.createElement('audio');
		if (r.value != "") {
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySoundE',
					volume: 50,
					url: root + "/static/audio/error.mp3"
				});
				//soundManager.play('mySoundE');
				//playSound('mySoundE');
			} else {	
				soundManager.createSound({
					id: 'mySoundE',
					volume: 50,
					url: root + "/static/audio/error.ogg"
				});
				//soundManager.play('mySoundE');
				//playSound('mySoundE');
			}
		}
		return;
	}
	if (rn > 0) {
		alertifyThis(res);
		var aSound = document.createElement('audio');
		if (r.value != "") {
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySound6',
					volume: 50,
					url: root + "/static/audio/ahem_x.mp3"
				});
				playSound('mySound6');
			} else {	
				soundManager.createSound({
					id: 'mySound6',
					volume: 50,
					url: root + "/static/audio/ahem_x.ogg"
				});
				playSound('mySound6');
			}
		}
		return;
	}
	if (p > 0) {
		var SPL = res.split("@888@");
		var PRESENTER_SESSION_KEY = SPL[2];
		var PRESENTER_VAL = SPL[3];
		console.log("PRESENTER_SESSION_KEY: "+PRESENTER_SESSION_KEY);
		console.log("PRESENTER_VAL: "+PRESENTER_VAL);
		
		if (urlParams["PRESENTER_SESSION_KEY"] == PRESENTER_SESSION_KEY) {
			console.log("updateViewerScreen: "+PRESENTER_VAL);
			updateViewerScreen(SPL[3]);
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
				url: root + "/static/audio/door-open.ogg"
			});
			playSound('door_open');
		}
		return;
	}
	if (a > 0) {
		alertifyThis(res);
		
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
				url: root + "/static/audio/emergency030.ogg"
			});
			playSound('alert');
		}
	}

	if (res != "CHANNEL CONNECTED." && res != "CHANNEL ERROR." && res != "CHANNEL DISCONNECTED." && res != undefined) {
		
		var slideEls2 = document.querySelectorAll('section.slides > article');
		var slidesLEN = slideEls2.length;
		var slideNo = parseInt(location.hash.substr(1));
		
		if (slideNo == slidesLEN && urlParams["SID"] != "" && urlParams["MODE"] != "AUDIENCE") {
			if (endDisp == 0) {
				setInterval(function(){dispAds()}, 300000);
				endDisp = 1;
			}
			
		}
		if (n == -1 && d == -1) {

		} else {
		
			if (d == -1) { 
			
				var aSound = document.createElement('audio');
				
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'mySound3',
						volume: 50,
						url: root + "/static/audio/R2D2e.mp3"
					});
					//playSound('mySound3');
				} else {
					soundManager.createSound({
						id: 'mySound3',
						volume: 50,
						url: root + "/static/audio/R2D2e.ogg"
					});
					//playSound('mySound3');
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
						url: root + "/static/audio/WarningSiren.ogg"
					});

					playSound('mySound4');	
				}
			
			}
		
		}
		return;
	}
	return;
};

function pressKey(din) {
	
	switch (din) {
		case "up":
			console.log("up");
			$(document).ready(function(){
				var curPos = $(window.frames[3]).scrollTop();
				$(window.frames[3]).scrollTop(curPos + 300);
			});
			break;
			
		case "down":
			console.log("down");
			$(document).ready(function(){
				var curPos = $(window.frames[3]).scrollTop();
				$(window.frames[3]).scrollTop(curPos - 300);
			});
			break;
			
		case "left":
			console.log("left");
			$(document).ready(function(){
				var curPos = $(window.frames[3]).scrollLeft();
				$(window.frames[3]).scrollLeft(curPos + 200);
			});
			break;
			
		case "right":
			console.log("right");
			$(document).ready(function(){
				var curPos = $(window.frames[3]).scrollLeft();
				$(window.frames[3]).scrollLeft(curPos - 200);
			});
			break;

	}
	return;
		
};

function onError(err) {
	innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-error.png' width=60 height=60></img></a></a>CHANNEL ERROR.<br>[<a href='/stream?STR_FUNC=DEL_CHAN'>Reset Channel</a>]";
	//alertifyThis(innerHTML);
	FL_CONNECTED_OK = false;
	//blink title
	$.titleAlert("CH-ERR: Refresh channel", {
		requireBlur:true,
		stopOnFocus:true,
		duration:30000,
		interval:500
	});
};

function onClose() {
	innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-disconnected.png' width=60 height=60></img></a>CHANNEL DISCONNECTED.<br>[<a href='/stream?STR_FUNC=DEL_CHAN'>Reset Channel</a>]";
	//alertifyThis(innerHTML);
	FL_CONNECTED_OK = false;
	//blink title
	$.titleAlert("CH-ERR: Refresh channel", {
		requireBlur:true,
		stopOnFocus:true,
		duration:30000,
		interval:500
	});
	reConnect();
};

function alertifyThis(message) {
	
	alertify.set({ delay: 10000 });
	alertify.success(message);
	var n = message.indexOf("howcanwehelp.png");
	if (n > 0) {
		return;
	}
	showNotification(1,message);
	return;
};

function showNotification(pri,message) {
	if(window.Notification) {
		Notification.requestPermission(function(status) { 
			var text = $(message).text();
			if (text == "" || text == undefined) {
				text = message;
			}
			var ctr = 0;
			var ctr2 = 0;
			var myImgs = [];
			var hrefs = [];
			var thisImage = "";
			var thisLink = "";

			$(message).filter('img').each(function() { 
			  var src= $(this).attr("src");
			  if (src != "") {
				ctr++;
				myImgs.push(src);
			  }
			});

			$(message).filter('a').each(function() { 
			  var href= $(this).attr("href");
			  if (href != "") {
				ctr2++;
				hrefs.push(href);  	
			  }
			 
			  var src = $('img', this).attr("src");
			  if (src != "") {
				ctr++;
				myImgs.push(src);
			  }
				  
			 });
			
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
	alertify.error("Knock knock has been sent!");
};

function playSound(sid) {
	if (urlParams["SOUND"] != "OFF" && isActive == true) {
		if (customMusic == false) {
			//soundManager.pauseAll();
			soundManager.play(sid);
			//soundManager.resumeAll();
		}
	}
}

function getUrlParms() {
	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);
	return;
}

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
	
	var slideNo = parseInt(location.hash.substr(1));
	if (slideNo < 10000) {
	}
	return;
};
