//retrieve country news now
var country = document.getElementById("X-AppEngine-Country").value;
if (country == "") {
	country = "PH";
}
var url = "https://newsapi.org/v2/top-headlines?country=" + country;
localStorage[root+"newsapiurl"] = url;
var UID = document.getElementById("aUser").value;
//enable news based on settings
var newsEn = document.getElementById("newsEn").value;
alertify.set({
	delay: 600000
});
if (newsEn == "true") {
	localStorage[root+"news"] = "on";
	alertify.error("News is turned on. To turn off, say STOP NEWS or <a href='#' onClick=\"newsStream();return false;\">click to stop news</a>.");
} else {
	localStorage[root+"news"] = "off";
	alertify.error("News is turned off. To turn on, say START NEWS or <a href='#' onClick=\"newsStream();return false;\">click to start news</a>.");
}
//
if (localStorage[root+'isStreaming'] == 'Y') {
	alertify.error("CCTV Stream is turned on. To turn off, say CCTV OFF or <a href='#' onClick=\"cctvStream();return false;\">click to stop cctv stream</a>.");
} else {
	alertify.error("CCTV Stream is turned off. To turn on, say CCTV ON or <a href='#' onClick=\"cctvStream();return false;\">click to start cctv stream</a>.");
}
alertify.set({
	delay: 1000
});
//automatically loop through news categories
var allElements = document.getElementsByTagName('*');
const cats = [];
for ( var i = 0; i<allElements.length; i++ ) {
    if ( allElements[i].className !== 'deskcat' ) {
        continue;
    }
    var myocType = typeof allElements[i].onclick;
    if ( typeof allElements[i].onclick === 'function' ) {
        var thisOc = String(allElements[i].onclick);
        var ocSplit = thisOc.split("\'");
        cats.push(ocSplit[1]);
    }
}
localStorage['categories-list'] = cats;

//show news after 10s
var newsShow = document.getElementById("newss").value;
var newsFetch = document.getElementById("newsf").value;
//setTimeout(function() {funcnews();}, 5000)
//setTimeout(function() {funcshow();}, 10000)
setTimeout(function() {funcnews();}, 30000)
setTimeout(function() {funcshow();}, 30000)
//regular intervals
setInterval(function(){ funcnews()}, parseInt(newsFetch) * 60 * 60);
consoleLogger("News fetch interval: "+newsFetch);
alertify.log("News fetch interval: "+newsFetch);
setInterval(function(){ funcshow()}, parseInt(newsShow) * 60 * 60);
consoleLogger("News display interval: "+newsShow);
alertify.log("News display interval: "+newsShow);
//suffle news array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
//regular intervals
//setInterval(function(){ topicSetter()}, 600000) //10 minutes
setInterval(function(){ topicSetter()}, 300000) //5 minutes
var tsIndex = 0;
function topicSetter () {
	if (localStorage[root+"news"] == "on") {
	    var tsText = localStorage['categories-list'];
	    var sText = tsText.split(",");
	    var sLength = sText.length - 1;
	    if (tsIndex <= sLength) { 
	        //console.log("tsIndex: " + tsIndex);
	        //console.log("Setting topic: " + sText[tsIndex]);
	        funcSetTopic(sText[tsIndex]);
	        tsIndex = tsIndex + 1;
	        //console.log("tsIndex New: " + tsIndex);
	    }
	    if (tsIndex == sLength) {
	    	tsIndex = 0 //reset
	    }
	}
}
function newsStream() {
	consoleLogger("newsStream()");
	//SpeechKITT.abortRecognition();
	if (localStorage[root+"news"] == "on") {
		var thisMsg = "News stream has been turned off.";
		//document.getElementById('page').style.backgroundImage = "url('/static/img/LP_DeepField_NASA.gif')";
		alertify.error("News is turned off. To turn on, say START NEWS or <a href='#' onClick=\"newsStream();return false;\">click to start news</a>.");
		speakMessage(thisMsg);
		localStorage[root+"news"] = "off";
		stopTalking();
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
	} else {
		var thisMsg = "News stream has been turned on.";
		alertify.log(thisMsg);
		speakMessage(thisMsg);
		localStorage[root+"news"] = "on"; 
		alertify.error("News is turned on. To turn off, say STOP NEWS or <a href='#' onClick=\"newsStream();return false;\">click to stop news</a>.");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
		funcnews();
		funcshow();
	}
	//SpeechKITT.startRecognition();
}
function funcSetTopic(sid) {
	consoleLogger("funcSetTopic()");
    consoleLogger("sid: "+sid);
	//SpeechKITT.abortRecognition();
    var url = "https://newsapi.org/v2/everything?q=" + sid;
    var root = location.protocol + '//' + location.host;
    localStorage[root+"newsapiurl"] = url;
	localStorage[root+"customTopic"] = sid;
    consoleLogger("url: "+url);
    stopTalking();
    var thisMsg = "Topic news has been set to "+ sid;
	speakMessage(thisMsg);
	consoleLogger("thisMsg: "+thisMsg);
	alertify.success(thisMsg);
    //SpeechKITT.setInstructionsText('');
    //SpeechKITT.setSampleCommands([thisMsg]);
	//SpeechKITT.startRecognition();
    funcnews();
    funcshow();
    return;
}
function funcSetTopicFromInput() {
	var tTopic = document.getElementById("newJSWM101").value;
	if (tTopic == "") {
		alertify.error("Please enter the topic.");
	} else {
		funcSetTopic(tTopic);
	}
}
function funcSetTopicFromCats(cTopic) {
	funcSetTopic(cTopic);
}
//news
funcnews = function () {
	if (localStorage[root + 'quite-flag'] == "on") {
		consoleLogger("funcnews() not executed: quite on");
		return;
	}
    if (localStorage[root+"news"] == "off") {
		consoleLogger("funcnews() not executed: news off");
        return;
    }
    if (document.getElementById("ranid").value == "pause") {
		consoleLogger("funcnews() not executed: wallpaper paused");
		return;
	}
	consoleLogger("News fetch interval: "+newsFetch);
    consoleLogger("funcnews()");
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xhr=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
    xhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
    }
    var root = location.protocol + '//' + location.host;
    var url = localStorage[root+"newsapiurl"];
	consoleLogger("url: "+url);
	
	if (localStorage[root+"newsapicountries"] != undefined && localStorage[root+"customTopic"] == "") {
		var countries = JSON.parse(localStorage[root+"newsapicountries"]);
		var FL_FOUND = false;
		if (countries) {
			var curCountry = parseInt(localStorage[root+"newsapicountryindex"]);
			var i;
			for (i = 0; i < countries.length; i++) {
				if (i > curCountry) {
					consoleLogger("curCountry: "+curCountry);
					consoleLogger("CID: "+countries[i].id);
					consoleLogger("Name: "+countries[i].country);
					var url = "https://newsapi.org/v2/top-headlines?country=" + countries[i].id;
					localStorage[root+"newsapiurl"] = url;	
					localStorage[root+"newsapicountryindex"] = i;
					localStorage[root+"newsapicountryname"] = countries[i].country;
					FL_FOUND = true;
					break;
				}
			}
			if (FL_FOUND == false) {
				localStorage[root+"newsapicountryindex"] = 0;
				var curCountry = parseInt(localStorage[root+"newsapicountryindex"]);
				var idx = curCountry+1;
				consoleLogger("curCountry: "+idx);
				consoleLogger("CID: "+countries[idx].id);
				consoleLogger("Name: "+countries[idx].country);
				var url = "https://newsapi.org/v2/top-headlines?country=" + countries[idx].id;
				localStorage[root+"newsapiurl"] = url;	
				localStorage[root+"newsapicountryindex"] = idx;
				localStorage[root+"newsapicountryname"] = countries[idx].country;
			}
		} else {
			if (url == undefined) {
				url = "";
			}
		}
	}
	
    //localStorage[root+"newsapiurl"] = url;
	var thisUrl = "/social?SO_FUNC=NEWSAPI&url=" + url + "&UID=" + UID;
	consoleLogger(thisUrl);
    xhr.open("GET",thisUrl, true);
    xhr.send();
	
    xhr.onreadystatechange=function()
    {
    if (xhr.readyState==4 && xhr.status==200)
        {
        var currVal = xhr.responseText;
            //consoleLogger(currVal);
            var jsonData = JSON.parse(currVal);
            var totalResults = jsonData['totalResults'];
			consoleLogger("totalResults: "+totalResults);
			if (totalResults <= 0) {
				//country has no news; fetch another one
				consoleLogger("country has no news; fetch another one");
				funcnews();
			} else {
				var newsObj = jsonData['articles'];
				//consoleLogger("newsObj: "+newsObj);
				var newsObjShuffled = shuffle(newsObj);
				localStorage[root+"newsobj"] = JSON.stringify(newsObjShuffled);
			}
        }
    }
    return;
}
//sequentially display news items
var curIndex = 0;
funcshow = function () {
	consoleLogger("News display interval: "+newsShow);
	consoleLogger("funcshow()");
	consoleLogger("curIndex: "+curIndex);
    var root = location.protocol + '//' + location.host;
	if (localStorage[root + 'quite-flag'] == "on") {
		consoleLogger("funcshow() not executed: quite on");
		return;
	}
    if (localStorage[root+"news"] == "off") {
		consoleLogger("funcshow() not executed: news off");
        return;
    }
	if (document.getElementById("ranid").value == "pause") {
		consoleLogger("funcshow() not executed: wallpaper paused");
		return;
	}
    localStorage["newsapi-processing"] = "Y";
    var locObj = localStorage[root+"newsobj"];
    //consoleLogger("locObj: "+locObj);
    var jsonData = JSON.parse(locObj);
    var FL_FOUND = false;
    var numTry = 0;
    while (FL_FOUND == false && numTry <= 100) {
        if (curIndex >= jsonData.length) {
            curIndex = 0;
        }
        var thisItem = jsonData[curIndex];
        consoleLogger("thisItem: "+thisItem);
        numTry = numTry + 1;
        if (thisItem) {                
            var title = thisItem["title"];
			consoleLogger("title:"+title);
            var desc = thisItem["description"];
			consoleLogger("desc:"+desc);
            var url = thisItem["url"];
			consoleLogger("url:"+url);
            var img = thisItem["urlToImage"];
			consoleLogger("img:"+img);
            var pdate = thisItem["publishedAt"];
			consoleLogger("pdate:"+pdate);
            if (title !== "") {
            	var root = location.protocol + '//' + location.host;
                FL_FOUND = true;
                FL_VALID_URL = false;
                if (ValidURL(img) == true) {
                    document.getElementById('page').style.backgroundImage = "url(" + img + ")";
                    //save local storage
                    localStorage[root+"UWM_WALLP"+desktop] = bgImgUrl;
                    FL_VALID_URL = true;
                }
				var cSource = localStorage[root+"newsapicountryname"];
				/*if (cSource != undefined) {
					if (localStorage["speechkitt-listen-mode"] == "N" || localStorage["speechkitt-listen-mode"] == undefined) {
						var msgText = "News from "+cSource+ "<silence msec='1000'/>";
						consoleLogger(msgText);
						speakMessage(msgText);
					}
				}*/
				//detect language
				//var detecting = browser.i18n.detectLanguage(desc);
				//detecting.then(onLanguageDetected);		
				var isMobile = document.getElementById("isMobile").value;
				var msgText = "";
				if (isMobile == "false") {				
					msgText = title + "<silence msec='1000'/>" + desc;
				} else {
					msgText = title + "    " + desc;
				}
                //strip urls
                msgText = msgText.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
				//translate if needed
                if (FL_VALID_URL == true && localStorage["speechkitt-listen-mode"] == "N" || localStorage["speechkitt-listen-mode"] == undefined) {
					consoleLogger(msgText);
					localStorage[root + 'quite-flag'] = "off";
					localStorage[root+'speakingNow'] = 'N';
                    speakMessage(msgText);
					alertify.set({
						delay: 120000
					});
					//get qr code
					var qrLink = "https://chart.googleapis.com/chart?cht=qr&chs=340x340&chl=" + url+ "&choe=UTF-8";
					var qrLink2 = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=" + url+ "&choe=UTF-8";
					alertify.log("NEWS: "+msgText+"<br>"+"VIEW: <a href='" + url +  "' target='" + url + "'>News</a> | <a href='" + img +  "' target='" + img + "'>Image</a> | NEXT: <a href='#' onClick=\"stopTalking();funcshow();return false;\">Next</a> | STOP: <a href='#' onClick=\"stopTalking();return false;\">Stop</a> | DATE: " + pdate + "<br><a href='" + qrLink2 +  "' target='" + qrLink2 + "'><img src=" + qrLink + " width=\"150\" height=\"150\"></img></a><img src=" + img + " width=\"150\" height=\"150\"></img>");
                }
                curIndex = curIndex + 1;
            }
        }
    }
    localStorage["newsapi-processing"] = "N";
}
/*function onLanguageDetected(langInfo) {
  var root = location.protocol + '//' + location.host;
  for (lang of  langInfo.languages) {
    consoleLogger("Language is: " + lang.language);
    consoleLogger("Percentage is: " + lang.percentage);
	localStorage[root+"newsapilang"] = lang.language;
  }
}*/
function ValidURL(textval) {
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
}