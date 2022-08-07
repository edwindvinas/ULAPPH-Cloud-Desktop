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
var notestat;
var autoLikeSent = false;
var isActive;

//Check browser
    // Opera 8.0+
//var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
//var isFirefox = typeof InstallTrigger !== 'undefined';
    // Safari <= 9 "[object HTMLElementConstructor]" 
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
//var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
//var isBlink = (isChrome || isOpera) && !!window.CSS;

window.onfocus = function () { 
  isActive = true; 
}; 

window.onblur = function () { 
  isActive = false; 
}; 


//get parms
//var urlParams;
var match,
		pl     = /\+/g,  // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query  = window.location.search.substring(1);

urlParams = {};
while (match = search.exec(query))
   urlParams[decode(match[1])] = decode(match[2]);

if (urlParams["mode"]) {
	if (urlParams["mode"] == "rc" || urlParams["mode"] == "pv" || urlParams["mode"] == "vu" || urlParams["mode"] == "yt" || urlParams["mode"] == "web") {
		//setTimeout(function(){moveToSlide(5);},5000); //with ads
		setTimeout(function(){moveToSlide(2);},5000);
	}
}

if (urlParams["TYPE"] == "SLIDE" && urlParams["PARM"] == "LOOP" && urlParams["SECS"]) {
	var secsInt = parseInt(urlParams["SECS"]) * 1000;
	setInterval(function(){moveSlides()}, secsInt);
}

/* ---------------------------------------------------------------------- */
/* classList polyfill by Eli Grey
 * (https://purl.eligrey.com/github/classList.js/blob/master/classList.js) */

if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {

(function (view) {

var
    classListProp = "classList"
  , protoProp = "prototype"
  , elemCtrProto = (view.HTMLElement || view.Element)[protoProp]
  , objCtr = Object
    strTrim = String[protoProp].trim || function () {
    return this.replace(/^\s+|\s+$/g, "");
  }
  , arrIndexOf = Array[protoProp].indexOf || function (item) {
    for (var i = 0, len = this.length; i < len; i++) {
      if (i in this && this[i] === item) {
        return i;
      }
    }
    return -1;
  }
  // Vendors: please allow content code to instantiate DOMExceptions
  , DOMEx = function (type, message) {
    this.name = type;
    this.code = DOMException[type];
    this.message = message;
  }
  , checkTokenAndGetIndex = function (classList, token) {
    if (token === "") {
      throw new DOMEx(
          "SYNTAX_ERR"
        , "An invalid or illegal string was specified"
      );
    }
    if (/\s/.test(token)) {
      throw new DOMEx(
          "INVALID_CHARACTER_ERR"
        , "String contains an invalid character"
      );
    }
    return arrIndexOf.call(classList, token);
  }
  , ClassList = function (elem) {
    var
        trimmedClasses = strTrim.call(elem.className)
      , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
    ;
    for (var i = 0, len = classes.length; i < len; i++) {
      this.push(classes[i]);
    }
    this._updateClassName = function () {
      elem.className = this.toString();
    };
  }
  , classListProto = ClassList[protoProp] = []
  , classListGetter = function () {
    return new ClassList(this);
  }
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
  return this[i] || null;
};
classListProto.contains = function (token) {
  token += "";
  return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function (token) {
  token += "";
  if (checkTokenAndGetIndex(this, token) === -1) {
    this.push(token);
    this._updateClassName();
  }
};
classListProto.remove = function (token) {
  token += "";
  var index = checkTokenAndGetIndex(this, token);
  if (index !== -1) {
    this.splice(index, 1);
    this._updateClassName();
  }
};
classListProto.toggle = function (token) {
  token += "";
  if (checkTokenAndGetIndex(this, token) === -1) {
    this.add(token);
  } else {
    this.remove(token);
  }
};
classListProto.toString = function () {
  return this.join(" ");
};

if (objCtr.defineProperty) {
  var classListPropDesc = {
      get: classListGetter
    , enumerable: true
    , configurable: true
  };
  try {
    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
  } catch (ex) { // IE 8 doesn't support enumerable:true
    if (ex.number === -0x7FF5EC54) {
      classListPropDesc.enumerable = false;
      objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
    }
  }
} else if (objCtr[protoProp].__defineGetter__) {
  elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

}
/* ---------------------------------------------------------------------- */

/* Slide movement */

function hideHelpText() {
  $('#help').hide();
};

function getSlideEl(no) {
  if ((no < 0) || (no >= slideEls.length)) {
    return null;
  } else {
    return slideEls[no];
  }
};

function updateSlideClass(slideNo, className) {
  var el = getSlideEl(slideNo);

  if (!el) {
    return;
  }

  if (className) {
    el.classList.add(className);
  }

  for (var i in SLIDE_CLASSES) {
    if (className != SLIDE_CLASSES[i]) {
      el.classList.remove(SLIDE_CLASSES[i]);
    }
  }
};

function updateSlides() {
  if (window.trackPageview) window.trackPageview();

  for (var i = 0; i < slideEls.length; i++) {
    switch (i) {
      case curSlide - 2:
        updateSlideClass(i, 'far-past');
        break;
      case curSlide - 1:
        updateSlideClass(i, 'past');
        break;
      case curSlide:
        updateSlideClass(i, 'current');
        break;
      case curSlide + 1:
        updateSlideClass(i, 'next');
        break;
      case curSlide + 2:
        updateSlideClass(i, 'far-next');
        break;
      default:
        updateSlideClass(i);
        break;
    }
  }

  triggerLeaveEvent(curSlide - 1);
  triggerEnterEvent(curSlide);

  window.setTimeout(function() {
    // Hide after the slide
    disableSlideFrames(curSlide - 2);
  }, 301);

  enableSlideFrames(curSlide - 1);
  enableSlideFrames(curSlide + 2);

  updateHash();
};

function soundSlides() {
	
	if (isActive == false) {
		return;
		
	}
	if (urlParams["MUSIC_ID"]) {
		if (parseInt(urlParams["MUSIC_ID"]) > 0) {
			return;
		} 
	}
	if (urlParams["SOUND"]) {
		var st = document.getElementById("slidetone");
		if (st.value != "") {
			if (urlParams["SOUND"] != "OFF") {
				var aSound = document.createElement('audio');
				
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'mySoundc',
						volume: 50,
						url: st.value
					});
					soundManager.play('mySoundc');
				} else {
					soundManager.createSound({
						id: 'mySoundc',
						volume: 50,
						url: st.value
					});
					soundManager.play('mySoundc');
				}
			}
			return;
		} else {

			if (urlParams["SOUND"] != "OFF") {
				
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'mySound',
						volume: 50,
						url: '/audio/click_x.mp3'
					});
					soundManager.play('mySound');
				} else {
					soundManager.createSound({
						id: 'mySound',
						volume: 50,
						url: '/audio/click_x.ogg'
					});
					soundManager.play('mySound');
				}
			}
			return;
		}
	} else {
		var st = document.getElementById("slidetone");
		if (st.value != "") {
			var aSound = document.createElement('audio');
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySoundc',
					volume: 50,
					url: st.value
				});
				soundManager.play('mySoundc');
			} else {
				soundManager.createSound({
					id: 'mySoundc',
					volume: 50,
					url: st.value
				});
				soundManager.play('mySoundc');
			}
			return;
			
		} else {
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'mySound',
					volume: 50,
					url: '/audio/click_x.mp3'
				});
				soundManager.play('mySound');
			} else {
				soundManager.createSound({
					id: 'mySound',
					volume: 50,
					url: '/audio/click_x.ogg'
				});
				soundManager.play('mySound');
			}
			return;
		}
	}
}

function prevSlide() {
  hideHelpText();
  if (curSlide > 0) {
    curSlide--;

    updateSlides();
	soundSlides();
  }
};

function nextSlide() {
	
	if (isActive == false) {
		return;	
	}
	
   hideHelpText();
   var slideEls2 = document.querySelectorAll('section.slides > article');
   var slidesLEN = slideEls2.length;
   var slideNo = parseInt(location.hash.substr(1));
   
  if (curSlide < slideEls.length - 1) {
    curSlide++;
	
/* 	alertify.set({ delay: 1000 });
	if (urlParams["SID"] != undefined || urlParams["SID"] != "undefined") {
		alertify.log(urlParams["SID"] + ' (' + curSlide + '/' + slidesLEN + ')' );
	} else {
		alertify.log('(' + curSlide + '/' + slidesLEN + ')' );
	} */
    
	updateSlides();
	
	soundSlides();
	
  }
	
 if (slideNo == slidesLEN && urlParams["SID"] != "" && urlParams["MODE"] != "AUDIENCE") {
	autoLike(urlParams["DOC_ID"], urlParams["SID"]);
	var get_url = "";
	if (urlParams["GET_NEXT"] == "ALL") {
		get_url = "/infodb?DB_FUNC=VIEWER-SLIDES-ALL&TYPE=SLIDE&PARM=LOOP&SECS=8&MUSIC_ID=RANDOM";
		window.location.assign(get_url);		
		return;
	}
	if (urlParams["GET_NEXT"] == "SELF") {
		history.pushState(null,null,'#1');
		window.location.reload(true);
		return;	
	}
	if (urlParams["GET_NEXT"] == "") {
		return;
	} else {
		
		if (urlParams["PARM"] == "LOOP" && urlParams["GET_NEXT"] == urlParams["DOC_ID"]) {
			history.pushState(null,null,'#1');
			window.location.reload(true);
			return;			
		} else {
			get_url = "/website?q=GET_NEXT_CON" + "&SID=" + urlParams["SID"] + "&MODE=" + urlParams["MODE"] + "&GET_NEXT=" + urlParams["GET_NEXT"] + "&GOTO=";
		}
	}
	var auo = document.getElementById("AUTO");
	if (auo.value == "G" && urlParams["GET_NEXT"] != "") {
		console.log("GET_NEXT_CON2");
		get_url = '/website?q=GET_NEXT_CON2' + '&SID=TDSSLIDE-' + urlParams["GET_NEXT"] + '&MODE=PRESENTER' + '&GOTO=' + urlParams["GET_NEXT"];
		window.location.assign(get_url+"&redirect=y");		
		return;		
	}
	getNextCon(get_url);
	return;
 }
};

/* Slide events */

function triggerEnterEvent(no) {
  var el = getSlideEl(no);
  if (!el) {
    return;
  }

  var onEnter = el.getAttribute('onslideenter');
  if (onEnter) {
    new Function(onEnter).call(el);
  }

  var evt = document.createEvent('Event');
  evt.initEvent('slideenter', true, true);
  evt.slideNumber = no + 1; // Make it readable

  el.dispatchEvent(evt);
};

function triggerLeaveEvent(no) {
  var el = getSlideEl(no);
  if (!el) {
    return;
  }

  var onLeave = el.getAttribute('onslideleave');
  if (onLeave) {
    new Function(onLeave).call(el);
  }

  var evt = document.createEvent('Event');
  evt.initEvent('slideleave', true, true);
  evt.slideNumber = no + 1; // Make it readable

  el.dispatchEvent(evt);
};

/* Touch events */

function handleTouchStart(event) {
  if (event.touches.length == 1) {
    touchDX = 0;
    touchDY = 0;

    touchStartX = event.touches[0].pageX;
    touchStartY = event.touches[0].pageY;

    document.body.addEventListener('touchmove', handleTouchMove, true);
    document.body.addEventListener('touchend', handleTouchEnd, true);
  }
};

function handleTouchMove(event) {
  if (event.touches.length > 1) {
    cancelTouch();
  } else {
    touchDX = event.touches[0].pageX - touchStartX;
    touchDY = event.touches[0].pageY - touchStartY;
    event.preventDefault();
  }
};

function handleTouchEnd(event) {
  var dx = Math.abs(touchDX);
  var dy = Math.abs(touchDY);

  if ((dx > PM_TOUCH_SENSITIVITY) && (dy < (dx * 2 / 3))) {
    if (touchDX > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  }

  cancelTouch();
};

function cancelTouch() {
  document.body.removeEventListener('touchmove', handleTouchMove, true);
  document.body.removeEventListener('touchend', handleTouchEnd, true);
};

/* Preloading frames */

function disableSlideFrames(no) {
  var el = getSlideEl(no);
  if (!el) {
    return;
  }

  var frames = el.getElementsByTagName('iframe');
  for (var i = 0, frame; frame = frames[i]; i++) {
    disableFrame(frame);
  }
};

function enableSlideFrames(no) {
  var el = getSlideEl(no);
  if (!el) {
    return;
  }

  var frames = el.getElementsByTagName('iframe');
  for (var i = 0, frame; frame = frames[i]; i++) {
    enableFrame(frame);
  }
};

function disableFrame(frame) {
  frame.src = 'about:blank';
};

function enableFrame(frame) {
  var src = frame._src;

  if (frame.src != src && src != 'about:blank') {
    frame.src = src;
  }
};

function setupFrames() {
  var frames = document.querySelectorAll('iframe');
  for (var i = 0, frame; frame = frames[i]; i++) {
    frame._src = frame.src;
    disableFrame(frame);
  }

  enableSlideFrames(curSlide);
  enableSlideFrames(curSlide + 1);
  enableSlideFrames(curSlide + 2);
};

function setupInteraction() {
  /* Clicking and tapping */

  var el = document.createElement('div');
  el.className = 'slide-area';
  el.id = 'prev-slide-area';
  el.addEventListener('click', prevSlide, false);
  document.querySelector('section.slides').appendChild(el);

  var el = document.createElement('div');
  el.className = 'slide-area';
  el.id = 'next-slide-area';
  el.addEventListener('click', nextSlide, false);
  document.querySelector('section.slides').appendChild(el);

  /* Swiping */

  document.body.addEventListener('touchstart', handleTouchStart, false);
}

/* Hash functions */

function getCurSlideFromHash() {
  var slideNo = parseInt(location.hash.substr(1));

  if (slideNo) {
    curSlide = slideNo - 1;
  } else {
    curSlide = 0;
  }

};

function updateHash() {
	location.replace('#' + (curSlide + 1));
	
	var urlParams;
	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);
	
	var docTitle = document.getElementById("TITLE");
	
	if (urlParams["TITLE"] != "" && urlParams["TITLE"] != undefined) {
		document.title = '(' + (curSlide + 1) + '/' + slideEls.length + ') ' + urlParams["TITLE"];
	} 
	else 
	{	
		if (docTitle != null) {
			document.title = '(' + (curSlide + 1) + '/' + slideEls.length + ') ' + docTitle.value;
		} else {
			document.title = '(' + (curSlide + 1) + '/' + slideEls.length + ') ' + document.title;
		}
	}
	if (urlParams["MODE"] == "PRESENTER") {
		
		//check if current is the actual presenter
		var UID = urlParams["UID"];
		var res = urlParams["PRESENTER_SESSION_KEY"];
		var SPL = res.split("-");
		
		if (UID == SPL[0]) {
			console.log("Update presenter session!");
			var presenter_url = "";
			presenter_url = '/presenter?MODE=PRESENTER&TITLE=' + urlParams["TITLE"] + '&BLOB_KEY=' + urlParams["BLOB_KEY"] + '&PRESENTER_SESSION_KEY=' + urlParams["PRESENTER_SESSION_KEY"] + '&CATEGORY=' + urlParams["CATEGORY"] + '&PRESENTER_FUNC=UPDATE' + '&PRESENTER_VAL=' +  (curSlide + 1);
			xmlhttp.open("GET",presenter_url,true);
			xmlhttp.send();
		}
	 
	}

  
};

/* Event listeners */

function handleBodyKeyDown(event) {
  // If we're in a code element, only handle pgup/down.
  var inCode = event.target.classList.contains("code");

  switch (event.keyCode) {
	case 27: //escape key
		if (!inCode) hideHelpText();
		//save current slide
		document.getElementById("mstat").value = "manual";
		getCurSlideFromHash();
		dispNotes();
		event.preventDefault();
		break;
    case 39: // right arrow
    case 34: // PgDn
	  if (notestat == true) {
		  break;
	  }
      nextSlide();
      event.preventDefault();
      break;

    case 37: // left arrow
    case 33: // PgUp
	  if (notestat == true) {
		  break;
	  }
      prevSlide();
      event.preventDefault();
      break;

    case 40: // down arrow
	  if (notestat == true) {
		  break;
	  }
	  if (inCode) break;
	  pauseSlides();
	  event.preventDefault();
	  break;

    case 38: // up arrow
	  if (notestat == true) {
		  break;
	  }
      if (inCode) break;
	  dispTools();
      event.preventDefault();
      break;
  }
};


function pauseSlides() {
	
	var urlParams;
	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);
   
	var slideNo = parseInt(location.hash.substr(1));
	var secsInt = parseInt(urlParams["SECS"]) * 1000;
	
	if (urlParams["SECS"] == "" || urlParams["SECS"] == undefined) {
		secsInt = 8 * 1000;
	}

	if (slideNo > 10000) {
		location.replace('#' + (slideNo - 10000));
		setInterval(function(){moveSlides()}, secsInt);
	
	} else {
		location.replace('#' + (slideNo + 10000));
	}
}

function dispTools() {
	
	var urlParams;
	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);
   
	var url = "/tools?t=SLI_ART" + "&TYPE=" + urlParams["TYPE"] + "&MODE=" + urlParams["MODE"] + "&PARM=" + urlParams["PARM"] + "&SECS=" + urlParams["SECS"] + "&DOC_ID=" + urlParams["DOC_ID"] + "&SID=" + urlParams["SID"] + "&TITLE=" + urlParams["TITLE"] + "&CATEGORY=" + urlParams["CATEGORY"] + "&FORMAT=SLIDE";
	alertify.set({ delay: 59000 });
	alertify.error("<iframe src=\"" + url + "\" frameborder=\"0\" scrolling=\"yes\" allowtransparency=\"true\" height=\"400px\"></iframe>");
	
}

function dispSearch() {
	
	var url = "/tools?t=SLI_SEARCH";
	alertify.set({ delay: 59000 });
	alertify.error("<iframe src=\"" + url + "\" frameborder=\"0\" scrolling=\"yes\" allowtransparency=\"true\" height=\"400px\"></iframe>");
	
}

function dispNotes() {
	if (notestat == true) {
		//save content
		location.replace('#');
		notestat = false;
	} else {
		location.replace('#' + 'notes');
		notestat = true;
	}
	
}

function sendNotes() {
	alert("Saving notes... Please wait... This may take a while.");
	
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	var notes_url = "";
	notes_url = '/social?SO_FUNC=SIGN&TITLE=&REC_TYP=PositiveComment&SID=' + urlParams["SID"] + '&content=' + document.getElementById("editable2").innerHTML;
	xmlhttp.open("POST",notes_url,true);
	xmlhttp.send();

	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{	
			window.location.assign('/social?SID=' + urlParams["SID"] + '&SO_FUNC=SO_VIEW&TITLE=');
		}
		
	}
}

function sendGmail() {
	alert("Sending email... Opening a new window...");

	var notes_url = "";
	var root = location.protocol + '//' + location.host;
	notes_url = 'https://mail.google.com/mail/?view=cm&tf=0&fs=1&su=' + 'Comments for ' + urlParams["SID"] + ' @ ' + root +  '&body=' + document.getElementById("editable2").innerHTML;
	window.open(notes_url, '_blank');
}

function contactGmail() {
	alert("Sending email... Opening a new window...");
	
	var fb = document.getElementById("feedbackMail");
	var notes_url = "";
	var root = location.protocol + '//' + location.host;
	notes_url = 'https://mail.google.com/mail/?view=cm&tf=0&fs=1&to=' + fb.value + '&su=' + 'Inquiry/feedback/comments for ' + urlParams["SID"] + ' @ ' + root +  '&body=How can we help you today? Please type your inquiry/question/feedback/suggestion/comments below...';
	window.open(notes_url, '_blank');
}

function myULAPPH() {
	window.open("https://ulapph-corporation.appspot.com/?q=login&LFUNC=ULAPPH", '_blank');
}

function showWebsite() {
	window.open("/website?q=home", '_blank');
}

function showChat() {
	window.open("/chat", '_blank');
}

function showHelp() {
	window.open("https://ulapph-public-1.appspot.com/articles?TYPE=ARTICLE&DOC_ID=3&SID=TDSARTL-3", '_blank');
}

function moveToSlide(t) {
	
	var slideNo = parseInt(location.hash.substr(1)); 
	
	if (slideNo > 1) {
		return;
	}
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhrs=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhrs=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	cxhrs.open("GET","/message-channel?CHAN_FUNC=moveSlides&UID=&count="+t, true); 
	cxhrs.send();

};

//move to slide where anchor is found
function gotoAnchor(myanchor) {
  //console.log("gotoAnchor()");
  var arts = document.getElementsByTagName("article");
  for(var i = 0; i < arts.length; i++){
	//console.log("article: "+ i);
	var links = arts[i].getElementsByTagName('a');
	if (links.length > 0) {
		//console.log("looking for anchor...");
		for(var j = 0; j < links.length; j++){
			var name = arts[i].getElementsByTagName('a')[j].name;
			//console.log("name: "+ name);
			if (myanchor == name) {
				console.log("Found tag: "+ myanchor);
				var slideNum = i;
				//show link to go back
				var backHere = "<a href=\"#\" onclick=\"gotoAnchorSlide(" + curSlide + "); return false;\" class=\"button button-pill button-primary\"> Goback to Slide# " + curSlide + "</a>";  
				alertify.log(backHere, "", 0);
				console.log("Moving to slide: "+ slideNum);
				gotoAnchorSlide(slideNum);
				return;
			}
		}
	}
  }
}

function gotoAnchorSlide(slideNum) {
	  if (curSlide > 10000) {
		curSlide = curSlide - 10000;
	  }
	  var slideDiff = slideNum - curSlide;		

	  if (slideDiff > 0) {
		for (i = 1; i <= slideDiff; i++) { 
			nextSlide();
		}
	  } else {
		slideDiff = slideDiff * -1;
		for (i = 1; i <= slideDiff; i++) { 
			prevSlide();
		}
	  }
}

function moveSlides() {
	
	if (isActive == false) {
		return;	
	}
	
	  var mstat = document.getElementById("mstat");
	  if (mstat.value == "manual") {
		  return;
	  }

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
	
	if (slideNo == slidesLEN && urlParams["SID"] != "") {
		
	}
	
	if (slideNo < 10000) {

		if (urlParams["PARM"] != "AUTO" && urlParams["PARM"] != "NOLOOP" || urlParams["MODE"] == "PRESENTER") {
			currSlideValue = slideNo + 1;
				nextSlide();
		}
	}
}

function getNextCon(get_url) {
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpX=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpX=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	xmlhttpX.open("GET",get_url,true);
	var auo = document.getElementById("AUTO");
	if (auo.value == "Y") {
	xmlhttpX.send();
	}
	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		var currVal = xmlhttp.responseText;
			if (currVal != "") {
				alertify.set({ delay: 3600000 });
				alertify.error(currVal, "", 0);
				return
			}
		return
		}
	 }
	
}

function autoLike(docID, sid) {
	if (autoLikeSent == false) {
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttpAL=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttpAL=new ActiveXObject('MSXML2.XMLHTTP.3.0');
		  }
		 var url = '/social?SO_FUNC=AUTO-LIKE&DOC_ID=' + docID + '&SID=' + sid;
		xmlhttpAL.open("GET",url,true);
		xmlhttpAL.send();
		autoLikeSent = true;
	}
	return
}

function addEventListeners() {
  document.addEventListener('keydown', handleBodyKeyDown, false);
};

/* Initialization */

function addFontStyle() {
  var el = document.createElement('link');
  el.rel = 'stylesheet';
  el.type = 'text/css';
  el.href = '//fonts.googleapis.com/css?family=' +
            'Open+Sans:regular,semibold,italic,italicsemibold|Droid+Sans+Mono';

  document.body.appendChild(el);
};

function addGeneralStyle() {

  var el = document.createElement('meta');
  el.name = 'viewport';
  el.content = 'width=1100,height=750';
  document.querySelector('head').appendChild(el);

  var el = document.createElement('meta');
  el.name = 'apple-mobile-web-app-capable';
  el.content = 'yes';
  document.querySelector('head').appendChild(el);
};

function addPrintStyle() {
  var el = document.createElement('link');
  el.rel = 'stylesheet';
  el.type = 'text/css';
  el.media = "print";
  el.href = 'css/' + 'print.css';
  document.body.appendChild(el);
};

function handleDomLoaded() {
  slideEls = document.querySelectorAll('section.slides > article');

  setupFrames();

  addFontStyle();
  addGeneralStyle();
  addPrintStyle();
  addEventListeners();

  updateSlides();

  setupInteraction();
  
  if (window.location.hostname == "localhost" || window.location.hostname == "127.0.0.1" || window.location.hostname == "::1") {
    hideHelpText();
  }

  document.body.classList.add('loaded');
};

/* function loadNowPresenting(){
	var presenter_url = "";
	var slideEls2 = document.querySelectorAll('section.slides > article');
	var slidesLEN = slideEls2.length;
	
	presenter_url = '/presenter?MODE=VIEWER&TITLE=' + urlParams["TITLE"] + '&SLEN=' + slidesLEN + '&BLOB_KEY=' + urlParams["BLOB_KEY"] + '&CATEGORY=' + urlParams["CATEGORY"] + '&PRESENTER_SESSION_KEY=' + urlParams["PRESENTER_SESSION_KEY"];
	xmlhttp.open("GET",presenter_url,true);
	xmlhttp.send();
	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		var currSlideValue = xmlhttp.responseText;
			if (currSlideValue != "") {

				if (urlParams["MODE"] == "PRESENTER" && urlParams["PARM"] == "AUTO" ) {
				  var currSlideNum = parseInt(currSlideValue);
				  var slideNo = parseInt(location.hash.substr(1));
				  var slideDiff = currSlideNum - slideNo;		
				
				  if (slideDiff > 0) {
					for (i = 1; i <= slideDiff; i++) { 
						nextSlide();
					}
				  } else {
					slideDiff = slideDiff * -1;
					for (i = 1; i <= slideDiff; i++) { 
						prevSlide();
					}
				  }
		
				}
			}
		return
		}
	 }

} */

function updateViewerScreen(currSlideValue){
	if (currSlideValue != "") {

		//if (urlParams["MODE"] == "PRESENTER" && urlParams["PARM"] == "AUTO" ) {
		if (urlParams["MODE"] != "PRESENTER" && urlParams["PARM"] == "AUTO" ) {
		  var currSlideNum = parseInt(currSlideValue);
		  var slideNo = parseInt(location.hash.substr(1));
		  var slideDiff = currSlideNum - slideNo;		
		
		  if (slideDiff > 0) {
			for (i = 1; i <= slideDiff; i++) { 
				nextSlide();
			}
		  } else {
			slideDiff = slideDiff * -1;
			for (i = 1; i <= slideDiff; i++) { 
				prevSlide();
			}
		  }

		}
	}
	return

}

function gotoSlide(currSlideValue){
	//console.log("goto: "+currSlideValue);
	var toSlide = currSlideValue;
	toSlide = toSlide.replace(/^"(.*)"$/, '$1');
	toSlide = toSlide.replace(/\./g,'')
	//console.log(toSlide);
	if (toSlide != "") {
	  var destSlideNum = parseInt(toSlide);
	  //var slideNo = parseInt(location.hash.substr(1));
	  
	  if (curSlide > 10000) {
		curSlide = curSlide - 10000;
	  }
	  var slideDiff = destSlideNum - curSlide;		
	
	  if (slideDiff > 0) {
		for (i = 1; i <= slideDiff; i++) { 
			nextSlide();
		}
	  } else {
		slideDiff = slideDiff * -1;
		for (i = 1; i <= slideDiff; i++) { 
			prevSlide();
		}
	  }
	}
	return

}

/* function loadNowPresentingSocial(){
	
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
} */

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

/* 	if (urlParams["MODE"] == "PRESENTER" && urlParams["PARM"] == "AUTO") {
		loadNowPresenting();
	} */
	
/* 	if (urlParams["SID"] != "" && urlParams["SID"] != undefined){
			loadNowPresentingSocial();
	} */
	
	
	
  getCurSlideFromHash();

  if (window['_DEBUG']) {
    PERMANENT_URL_PREFIX = '../';
  }
  
  if (window['_DCL']) {
    handleDomLoaded();
  } else {
    document.addEventListener('DOMContentLoaded', handleDomLoaded, false);
  }
 
}

// If ?debug exists then load the script relative instead of absolute
if (!window['_DEBUG'] && document.location.href.indexOf('?debug') !== -1) {
  document.addEventListener('DOMContentLoaded', function() {
    // Avoid missing the DomContentLoaded event
    window['_DCL'] = true
  }, false);

  window['_DEBUG'] = true;
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '/js/slides.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);

  s.parentNode.removeChild(s);
} else {
  initialize();
}
