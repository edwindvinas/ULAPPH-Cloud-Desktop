// Copyright 2012 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var PERMANENT_URL_PREFIX = '/js/';
var SLIDE_CLASSES = ['far-past', 'past', 'current', 'next', 'far-next'];
var PM_TOUCH_SENSITIVITY = 15;
var curSlide;
var xmlhttp;
var urlParams;
var slidesLEN;
var notValid = false;
var refreshIntervalId;

// If ?debug exists then load the script relative instead of absolute
if (!window['_DEBUG'] && document.location.href.indexOf('?debug') !== -1) {
  document.addEventListener('DOMContentLoaded', function() {
    // Avoid missing the DomContentLoaded event
    window['_DCL'] = true
  }, false);

  window['_DEBUG'] = true;
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '/js/social.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);

  // Remove this script
  s.parentNode.removeChild(s);
} else {
  initialize();
}

function loadNowPresentingSocial(){

	var social_url = "";
	var data_found = 0;
	social_url = '/social?SO_FUNC=GET_STAT&SID=' + urlParams["SID"] + '&TITLE=' + urlParams["TITLE"] + '&CATEGORY=' + urlParams["CATEGORY"];
	xmlhttp.open("GET",social_url,true);
	xmlhttp.send();

	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		var currSocialStat = xmlhttp.responseText;
			var str = currSocialStat;
			var res = str.split(",");
			if (res.length == 6) {
				document.getElementById("numLikes").innerHTML = Humanize.intword(res[0], 'nopnopnopnop', 1);
				document.getElementById("numDisLikes").innerHTML = Humanize.intword(res[1], 'nopnopnopnop', 1);
				document.getElementById("numComments").innerHTML = Humanize.intword(res[2], 'nopnopnopnop', 1);
				document.getElementById("user-flag").src="/static/img/flags/" + res[3] + ".gif";
				document.getElementById("numOnline").innerHTML = Humanize.intword(res[4], 'nopnopnopnop', 1);
				document.getElementById("numOffline").innerHTML = Humanize.intword(res[5], 'nopnopnopnop', 1);
				data_found = 1;
			}
		}
		return
	 }
	 return

}

function initialize() {

	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);

	if (urlParams["SID"] != "" && urlParams["SID"] != undefined){
		loadNowPresentingSocial();
		var refreshIntervalId = setInterval(function(){checkUser()}, 60000);
		
	}
	

}

function checkUser() {
	var content_url = "";
	content_url = '/people?PEOPLE_FUNC=CHECK_USER&DOC_ID=' + urlParams["DOC_ID"] + '&SID=' + urlParams["SID"];
	xmlhttp.open("GET",content_url,true);
	xmlhttp.send();
	
	if  (notValid == true) {
		alertify.set({ delay: 5000 });
		alertify.error("Redirecting to <a href=\"/?q=home\">ULAPPH registration/login</a>....", "", 0);
		window.location.assign("/?q=home");
		return
	}
	
	//get current counter
	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		var currVal = xmlhttp.responseText;
			if (currVal == "NOT_ULAPPH_USER") {
				alertify.set({ delay: 5000 });
				alertify.error("Full content requires <a href=\"/?q=home\" target=\"register\">user registration</a> or must be logged in to ULAPPH.", "", 0);
				notValid = true;
			}
		return
		}
	 }

}