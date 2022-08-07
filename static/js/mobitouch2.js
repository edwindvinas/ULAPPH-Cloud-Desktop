//http://jsfiddle.net/kelunik/pkjze6e6/42/
var node = document.getElementById("page");
var longpress = false;
var presstimer = null;
var longtarget = null;
var struwmInitiate = false;
var uid = urlParams["uid"];
var lsroot = root+uid;

var cancel = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }
    
    this.classList.remove("longpress");
};

var click = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }
    
    this.classList.remove("longpress");
    
    if (longpress) {
        return false;
    }
    
    //alert("press");
};

var start = function(e) {
    //console.log(e);
    
    if (e.type === "click" && e.button !== 0) {
        return;
    }
    
    longpress = false;
    
    this.classList.add("longpress");
    
    presstimer = setTimeout(function() {
        //alert("long click");
		uploadULAPH();
        longpress = true;
    }, 1000);
    
    return false;
};

function uploadULAPH() {
	//alert("upload to ulapph");
	take_snapshot();
	//upload_ulapph();
};

function dataURItoBlob(dataURI) {
	// convert base64/URLEncoded data component to raw binary data held in a string
	var byteString;
	if (dataURI.split(',')[0].indexOf('base64') >= 0) {
		byteString = atob(dataURI.split(',')[1]);
	} else {
		byteString = unescape(dataURI.split(',')[1]);
	}

	// separate out the mime component
	var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

	// write the bytes of the string to a typed array
	var ia = new Uint8Array(byteString.length);
	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	return new Blob([ia], {type:mimeString});
}

function upload_ulapph() {
	saveSettings();
	var xmlhttp;

	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	var editor_url = "";
	var root = location.protocol + '//' + location.host;
	editor_url = root + '/editor?EDIT_FUNC=GET_UP_URL&SID=TDSMEDIA-0';
	xmlhttp.open("POST",editor_url,true);
	xmlhttp.send();

	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var uploadURL = xmlhttp.responseText;
			var blob = dataURItoBlob(document.getElementById("imgdata").value);
			var fd = new FormData(document.forms[0]);
			fd.append("file", blob);

			var pk = document.getElementById("pinkey").value;
			if (pk === "" || pk === undefined) {
                		alert("No ULAPPH PIN KEY!");
                		return;
            		}
			fd.append("PINKEY", pk);
			var uid = document.getElementById("uid").value;
			if (uid === "" || uid === undefined) {
                		alert("No ULAPPH user email ID!");
                		return;
            		}
			
			var sid = "";
			var tgt = document.getElementById("sid").value;
			if (parseInt(tgt) > 0) {
				sid = 'TDSSLIDE-' + tgt;
				//document.getElementById("note").innerHTML = "<h1>" + sid + "</h1>";
			} else {
				sid = '';
				//document.getElementById("note").innerHTML = "<h1>No target slide!</h1>";
			}
			
			fd.append("EMBED", sid);

			var caption = "";
			var ttl = document.getElementById("title").value;
			if (ttl != "") {
				caption = ttl;
				//document.getElementById("note").innerHTML = document.getElementById("note").innerHTML + "<h3>" + ttl + "</h3>";
			} else {
				caption = '';
				//document.getElementById("note").innerHTML = document.getElementById("note").innerHTML + "<b>No caption or title!</b>";
			}

			var streamUwm = "";
			var uwm = document.getElementById("uwm").value;
			if (uwm != "") {
				streamUwm = uwm;
				if (struwmInitiate == false) {
					fd.append("STRUWMI", "Y");
					struwmInitiate = true;
				}
				//document.getElementById("note").innerHTML = document.getElementById("note").innerHTML + "<h3>Streaming to UWM: " + streamUwm + "</h3>";
			} else {
				streamUwm = '0';
				//document.getElementById("note").innerHTML = document.getElementById("note").innerHTML + "<b>No caption or title!</b>";
			}
			if (caption == "") {
				caption = "ulapphMirrorImage "+"desktop"+streamUwm;
			}
			//autoML detection
			if (document.getElementById("autoDetection").checked === true) {
				fd.append("AUTOML", "Y");
			} else {
				fd.append("AUTOML", "N");
			}
			var urlParams;
			var match,
					pl     = /\+/g,  // Regex for replacing addition symbol with a space
					search = /([^&=]+)=?([^&]*)/g,
					decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
					query  = window.location.search.substring(1);

			urlParams = {};
			while (match = search.exec(query))
			   urlParams[decode(match[1])] = decode(match[2]);
			if (urlParams["camfunc"] != "image-capture") {
				fd.append("STRUWM", streamUwm);
			}
			fd.append("TITLE", caption);
			fd.append("CATEGORY", "desktop"+streamUwm);
			var desc = document.getElementById("desc").value;
			if (caption != "") {
				desc = caption
			}
			if (desc == "") {
				//append date
				var dateObj = new Date();
				var month = dateObj.getUTCMonth() + 1; //months from 1-12
				var day = dateObj.getUTCDate();
				var year = dateObj.getUTCFullYear();

				newdate = year + "" + month + "" + day;

				fd.append("DESC", "ulapphMirrorImage "+newdate);
			} else {
				fd.append("DESC", desc);
			}
			fd.append("DATA_TYPE", "image");
			fd.append("MIME_TYPE", "image/jpeg");
			fd.append("FL_SHARED", "N");
			fd.append("DOC_STAT", "Personal");
            fd.append("OPT", "CCTV");
			
			var request = new XMLHttpRequest();
			request.open("POST", uploadURL);
			request.send(fd);
			request.onreadystatechange=function()
			  {
			  if (request.readyState==4 && request.status==200)
				{
					var respVal = request.responseText;
					//alert("Image has been uploaded to Media Gallery!");
					document.body.style.background = "green";
					//var upok = new Audio();
					//upok.autoplay = false;
					//upok.src = navigator.userAgent.match(/Firefox/) ? '/audio/kewl.ogg' : '/audio/kewl.ogg';
					//upok.play();
					var skipRecap = document.getElementById('fixedcap').checked;
					if (skipRecap) {
						//skip recapture
					} else {
						if (respVal == "recapture") {
							//take another image now
							console.log("new image captured!");
							take_snapshot();
						}
					}
					return;
				}
			 }

		}
	  }
		  
}

node.addEventListener("mousedown", start);
node.addEventListener("touchstart", start);
node.addEventListener("click", click);
node.addEventListener("mouseout", cancel);
node.addEventListener("touchend", cancel);
node.addEventListener("touchleave", cancel);
node.addEventListener("touchcancel", cancel);

function loadSettings() {
	var uid = localStorage[lsroot+"mirror-uid"];
	if (uid !== undefined) {
	document.getElementById("uid").value = uid;
	}
	var pk = localStorage[lsroot+"mirror-pk"];
	if (pk !== undefined) {
	document.getElementById("pinkey").value = pk;
	}
	var sid = localStorage[lsroot+"mirror-sid"];
	if (sid !== undefined) {
	document.getElementById("sid").value = sid;
	}
	var title = localStorage[lsroot+"mirror-title"];
	if (title !== undefined) {
	document.getElementById("title").value = title;
	}
	var uwm = localStorage[lsroot+"mirror-uwm"];
	if (uwm !== undefined) {
	document.getElementById("uwm").value = uwm;
	}
	var fcap = localStorage[lsroot+"mirror-fcap"];
	if (fcap === true ) {
	document.getElemedntById("fixedcap").checked = true;
	}
	var autoML = localStorage[lsroot+"mirror-autoDetection"];
	if (autoML === true ) {
	document.getElementById("autoDetection").checked = true;
	}
}

function saveSettings() {
	var uid = document.getElementById("uid").value;
	localStorage[lsroot+"mirror-uid"] = uid;
	var pk = document.getElementById("pinkey").value;
	localStorage[lsroot+"mirror-pk"] = pk;
	var sid = document.getElementById("sid").value;
	localStorage[lsroot+"mirror-sid"] = sid;
	var title = document.getElementById("title").value;
	localStorage[lsroot+"mirror-title"] = title;
	var uwm = document.getElementById("uwm").value;
	localStorage[lsroot+"mirror-uwm"] = uwm;
	var fcap = document.getElementById("fixedcap").value;
	localStorage[lsroot+"mirror-fcap"] = fcap;
	var autoML = document.getElementById("autoDetection").value;
	localStorage[lsroot+"mirror-autoDetection"] = autoML;
}
