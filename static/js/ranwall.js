//random images for html widget window
var isActive = true;

window.onfocus = function () { 
  isActive = true; 
}; 

window.onblur = function () { 
  isActive = false; 
};
var desktop = document.getElementById("desktop").value;
//check if fixed wallpaper is set
var bgImgUrl = document.getElementById("DEFAULT_WALLPAPER").value;
if (bgImgUrl != "") {
	//fix the wallpaper
	document.getElementById('page').style.backgroundImage = "url(" + bgImgUrl + ")";
	//stop intervalTrigger
	//window.clearInterval(id);
} else {
	changWP();
}

var id = intervalTrigger();

function intervalTrigger() {
  consoleLogger("intervalTrigger()");
  return window.setInterval( function() {
	var em = document.getElementById("mode");
	if (em.value == "full" || em.value == "guest" || em.value == "qr") {
		//check if fixed wallpaper is set
		var bgImgUrl = document.getElementById("DEFAULT_WALLPAPER").value;
		if (bgImgUrl != "") {
			//fix the wallpaper
			document.getElementById('page').style.backgroundImage = "url(" + bgImgUrl + ")";
			//stop intervalTrigger
			window.clearInterval(id);
		} else {
			changWP();
		}
	}
  }, 120000 );
};

function changWP()
{
	consoleLogger("changWP()");
	/*if (isActive == false) {
		return;
	}*/
	if (localStorage[root+'speakingNow'] == 'Y') {
		consoleLogger("changWP() skipped... speakingNow!");
		return;
	}
	if (localStorage[root+"news"] == "on") {
		consoleLogger("changWP() skipped... news On!");
		return;
	}
	
	//check if random is paused
	var rn = document.getElementById("ranid")
	ranVal = rn.value;
	consoleLogger("ranVal: "+ranVal);
	if (ranVal == "pause") {
		return;
	}

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
	xhrn=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
	xhrn=new ActiveXObject('MSXML2.XMLHTTP.3.0');
  }

  // construct an HTTP request
  var desktop = document.getElementById("desktop").value;
  var uwmwponly = document.getElementById("uwmwponly").value;
  xhrn.open("GET", "/media?FUNC_CODE=GET_RAN_WP"+"&uwmwponly="+uwmwponly+"&desktop="+desktop+"&UID="+thisUser, true);
  xhrn.setRequestHeader('Content-Type', 'text/plain; charset=UTF-8');
  //consoleLogger("/media?FUNC_CODE=GET_RAN_WP");
  xhrn.send();

 	xhrn.onreadystatechange = function(){
	  if (xhrn.readyState==4 && xhrn.status==200)
		{
		  var wpData = xhrn.responseText;
		  consoleLogger(wpData);

		  if (wpData != "") {
			//get random number
			var SPL = wpData.split("@888@");
			bgImgUrl = SPL[1];
			consoleLogger("bgImgUrl: "+bgImgUrl);
			bgImgTitle = SPL[2];
			bgImgDesc = SPL[3];
			
			ranVal = SPL[0];
			//if (ValidURL(bgImgUrl) == true) {
				document.getElementById('page').style.backgroundImage = "url(" + bgImgUrl + ")";
				//save local storage
				var root = location.protocol + '//' + location.host;
				localStorage[root+"UWM_WALLP"+desktop] = bgImgUrl;
			//}
			//update hidden value ranval
			var rn = document.getElementById("ranid")
			rn.value = ranVal;
		  }
		}
	};
}

function selectRandomDesktop() {
  consoleLogger("selectRandomDesktop()");
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
	xhrd=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
	xhrd=new ActiveXObject('MSXML2.XMLHTTP.3.0');
  }

  // construct an HTTP request
  var desktop = document.getElementById("desktop").value;
  var uwmwponly = document.getElementById("uwmwponly").value;
  xhrd.open("GET", "/media?FUNC_CODE=GET_RAN_DESK"+"&uwmwponly="+uwmwponly+"&desktop="+desktop+"&UID="+thisUser, true);
  xhrd.setRequestHeader('Content-Type', 'text/plain; charset=UTF-8');
  xhrd.send();

 	xhrd.onreadystatechange = function(){
	  if (xhrd.readyState==4 && xhrd.status==200)
		{
		  var rdData = xhrd.responseText;
		  consoleLogger(rdData);

		  if (rdData != "") {
			//get random desk
			consoleLogger("funcSetTopicFromCats: "+rdData);
			funcSetTopicFromCats(rdData);
		  }
		}
	};	
}

function ValidURL(textval) {
	consoleLogger("ValidURL()");
	var gcpCS = textval.indexOf("storage.cloud.google.com");
	var gcpCS2 = textval.indexOf("googleusercontent.com");
	if (gcpCS >= 0 || gcpCS2 >= 0) {
		consoleLogger("valid=true");
		return true;
	}
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
}
function prevWp() {
    //alert("press");
	if (localStorage["btnSearch"] == "active") {
		return;
	} else {
		//changWP();
		scanCctvStream();
	}	
}
function nextWp() {
	//GET hidden value ranval
	var rn = document.getElementById("ranid")
	ranVal = rn.value;
	
	if (ranVal == "pause") {
		//show uwm windows instead
		windowManager.nextwindow();
		return;
	}
	
	//alertifyThis("Changing wallpaper...");
	var urlParams;
	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);	
			
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
	xhsm=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
	xhsm=new ActiveXObject('MSXML2.XMLHTTP.3.0');
  }

  // construct an HTTP request
  var desktop = document.getElementById("desktop").value;
  var uwmwponly = document.getElementById("uwmwponly").value;
  xhsm.open("GET", "/media?FUNC_CODE=GET_RAN_WP&SEQ=" + ranVal + "&mode=" + urlParams["mode"]+"&uwmwponly="+uwmwponly+"&desktop="+desktop+"&UID="+thisUser, true);
  xhsm.setRequestHeader('Content-Type', 'text/plain; charset=UTF-8');
  xhsm.send();

 	xhsm.onreadystatechange = function(){
	  if (xhsm.readyState==4 && xhsm.status==200)
		{
		  var wpData = xhsm.responseText;
		  //consoleLogger(wpData);

		  if (wpData != "") {
			//get random number
			var SPL = wpData.split("@888@");
			bgImgUrl = SPL[1];
			ranVal = SPL[0];
			bgImgTitle = SPL[2];
			bgImgDesc = SPL[3];
			
			if (ValidURL(bgImgUrl) == true || bgImgUrl.indexOf("lh3.googleusercontent.com") >= 0 || bgImgUrl.indexOf("/static/img/wallpapers/") >= 0 ) {
				document.getElementById('page').style.backgroundImage = "url(" + bgImgUrl + ")";
			}
			
			//display title/desc via alertify
			if (bgImgTitle != "" || bgImgDesc != "") {
				var innerHTML = "<img src='/static/img/info.png' width=30 height=30></img><font color=yellow>" + bgImgTitle + " - " + bgImgDesc + "</font>";
				alertifyThisWp(innerHTML);				
			}
			
			//update hidden value ranval
			var rn = document.getElementById("ranid")
			rn.value = ranVal;

		  }
		}
	};
}

function pauseWp() {
	
	//check if fixed wallpaper is set
	var bgImgUrl = document.getElementById("DEFAULT_WALLPAPER").value;
	if (bgImgUrl != "") {
		//means user has initial fix wallpaper
		document.getElementById("DEFAULT_WALLPAPER").value = "";
		var id = intervalTrigger();
		return
	}

	//GET hidden value ranval
	var rn = document.getElementById("ranid")
	ranVal = rn.value;
	
	if (ranVal == "pause") {
		rn.value = "1";
		alertifyThis("Wallpaper enabled.");
	} else {
		rn.value = "pause";
		alertifyThis("Wallpaper paused.");
	}
	
}

function alertifyThisWp(message) {
	alertify.set({ delay: 20000 });
	alertify.log(message);
	return;
};

function scanCctvStream(direction) {
    var cctvstream = localStorage[desktop+"cctv-stream-photos"];
    if (cctvstream == undefined || cctvstream == "undefined" || cctvstream == "") {
        //speakMessage("There are no items to view!");
		//alertify.log("There are no items to view!");
        return;
    }
	var cctvstreamLast = localStorage[desktop+"cctv-stream-photos-scan-last"];
    var ccs = cctvstream.split("@777@");
	if (direction == "C" && ccs.length > 0) {
		localStorage[desktop+"cctv-stream-photos-scan-last"] = ccs[0];
		//speakMessage("You are now in the latest view!");
		//alertify.log("You are now in the latest view!");
		return;
	}
	if (direction == "O" && ccs.length > 0) {
		localStorage[desktop+"cctv-stream-photos-scan-last"] = ccs[ccs.length - 2];
		//speakMessage("You are now in the oldest view!");
		//alertify.log("You are now in the oldest view!");
		return;
	}
	consoleLogger("total: "+ccs.length);
    var i;
    for (i = 0; i < ccs.length; i++) {
        var str = ccs[i];
        if (str != "undefined" && cctvstreamLast == str) {
			if (direction == "L") {
				var pos = i+1;
				if (pos >= 0 && pos < ccs.length) {
					var tData = ccs[pos];
					var spll = tData.split("@888@");
					var bgImgUrl = "";
					bgImgUrl = spll[1];
					localStorage[desktop+"cctv-stream-photos-scan-last"] = tData;
					consoleLogger(bgImgUrl);
					//if (ValidURL(bgImgUrl) == true) {
						document.getElementById('page').style.backgroundImage = "url(" + bgImgUrl + ")";
						var etime = spll[2];
						var ts = Math.round((new Date()).getTime() / 1000);
						var hts = ts - etime;
						var hum = humanizeDuration(hts * 1000);
						var thisMsg = hum + " ago";
                        if (localStorage["cctv-stream-review-speak"] == "Y") {
						    speakMessage(thisMsg);
                        } else {
							SpeechKITT.setInstructionsText('');
							SpeechKITT.setSampleCommands([thisMsg]);
						}
						consoleLogger(thisMsg);
						var unix_timestamp = etime;
						// Create a new JavaScript Date object based on the timestamp
						// multiplied by 1000 so that the argument is in milliseconds, not seconds.
						var date = new Date(unix_timestamp * 1000);
						// Hours part from the timestamp
						var hours = date.getHours();
						// Minutes part from the timestamp
						var minutes = "0" + date.getMinutes();
						// Seconds part from the timestamp
						var seconds = "0" + date.getSeconds();
						// Will display time in 10:30:23 format
						var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
						consoleLogger(formattedTime);
						//alertifyThis(spll[0]);
						//save local storage
						var root = location.protocol + '//' + location.host;
						localStorage[root+"UWM_WALLP"+desktop] = bgImgUrl;
					//}
				} else {
					var tData = ccs[0];
					localStorage[desktop+"cctv-stream-photos-scan-last"] = tData;
				}
			} else {
				var pos = i-1;
				if (pos >= 0 && pos < ccs.length) {
					var tData = ccs[pos];
					var splr = tData.split("@888@");
					var bgImgUrl = "";
					bgImgUrl = splr[1];
					consoleLogger(bgImgUrl);
					localStorage[desktop+"cctv-stream-photos-scan-last"] = tData;
					//if (ValidURL(bgImgUrl) == true) {
						//localStorage[desktop+"cctv-stream-photos-scan-last"] = tData;
						//consoleLogger(bgImgUrl);
						document.getElementById('page').style.backgroundImage = "url(" + bgImgUrl + ")";
						var etime = splr[2];
						var ts = Math.round((new Date()).getTime() / 1000);
						var hts = ts - etime;
						var hum = humanizeDuration(hts * 1000);
						var thisMsg = hum + " ago";
                        if (localStorage["cctv-stream-review-speak"] == "Y") {
						    speakMessage(thisMsg);
                        } else {
							SpeechKITT.setInstructionsText('');
							SpeechKITT.setSampleCommands([thisMsg]);
						}
						consoleLogger(thisMsg);
						var unix_timestamp = etime;
						// Create a new JavaScript Date object based on the timestamp
						// multiplied by 1000 so that the argument is in milliseconds, not seconds.
						var date = new Date(unix_timestamp * 1000);
						// Hours part from the timestamp
						var hours = date.getHours();
						// Minutes part from the timestamp
						var minutes = "0" + date.getMinutes();
						// Seconds part from the timestamp
						var seconds = "0" + date.getSeconds();
						// Will display time in 10:30:23 format
						var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
						consoleLogger(formattedTime);
						//speakMessage(thisMsg);
						//alertifyThis(splr[0]);
						//save local storage
						var root = location.protocol + '//' + location.host;
						localStorage[root+"UWM_WALLP"+desktop] = bgImgUrl;
					//}
				} else {
					var tData = ccs[0];
					localStorage[desktop+"cctv-stream-photos-scan-last"] = tData;
				}
			}
        }
    }
	//reset the list if it reached something
	if (cctvstreamLast == "undefined" || cctvstreamLast == undefined || cctvstreamLast == "") {
		localStorage[desktop+"cctv-stream-photos-scan-last"] = "";
	}
	if (ccs.length >= 5000) {
		localStorage[desktop+"cctv-stream-photos-scan-last"] = "";
        localStorage[desktop+"cctv-stream-photos"] = "";
	}
}

