function checkMessages() {
	var aUser = document.getElementById("chan-id");
	if (aUser.value == "") {
		return;
	}
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpgbm=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpgbm=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-GBM';
	xmlhttpgbm.open("GET",chk_url,true);
	xmlhttpgbm.send();
	
	 xmlhttpgbm.onreadystatechange=function()
	  {
	  if (xmlhttpgbm.readyState==4 && xmlhttpgbm.status==200)
		{
		var currVal = xmlhttpgbm.responseText;
			if (currVal != "") {
				var msgText = "<a href='#' onclick='reloadGB();return false;'><img src='/static/img/newmessage.gif' height='50' width='100'></img><br></a>" + currVal;				
				alertify.set({ delay: 15000 });
				alertify.success(msgText); 

                var r = document.getElementById("ringtone");
                var ringTone = r.value;
                if (r.value === "") {
                    var root = location.protocol + '//' + location.host;
                    ringTone = root + "/static/audio/newmsg - long.ogg";
                }
				var aSound = document.createElement('audio');
				soundManager.createSound({
					id: 'mySoundGB',
					volume: 90,
					url: ringTone
				});
                soundManager.play('mySoundGB');
				return;
			}
		return;
		}
	 }
	 return;
};

function reloadGB() {
    location.href = '/guestbook?GB_FUNC=GB_OWNER';
    return;
}

function deleteMessage(mid) {
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
	editor_url = root + '/guestbook?GB_FUNC=DELETE&MID=' + mid;
	xmlhttp.open("POST",editor_url,true);
	xmlhttp.send();

	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var message = xmlhttp.responseText;
			if (message == "ok") {
				console.log("deleted");
				var e = document.getElementById(mid);
				e.src = "/static/img/delete2.png";
			} else {
				alert("Delete error!");			
			}
			return;
		}
	  }
	  return;
		  
};


function seenMessage(mid) {
	var xmlhttp2;

	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	var editor_url = "";
	var root = location.protocol + '//' + location.host;
	editor_url = root + '/guestbook?GB_FUNC=SEEN&MID=' + mid;
	xmlhttp2.open("POST",editor_url,true);
	xmlhttp2.send();

	 xmlhttp2.onreadystatechange=function()
	  {
	  if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
		{
			var message = xmlhttp2.responseText;
			if (message == "ok") {
				console.log("seen");
				var e = document.getElementById(mid+"s");
				e.src = "/static/img/seen2.png";
			} else {
				alert("Seen error!");				
			}
			return;
		}
	  }
	return;  
};

function deleteSocialMessage(sid, mid) {
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
	editor_url = root + '/social?SO_FUNC=DELETE&MID=' + mid + '&SID=' + sid;
	xmlhttp.open("POST",editor_url,true);
	xmlhttp.send();

	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var message = xmlhttp.responseText;
			if (message == "ok") {
				console.log("deleted");
				var e = document.getElementById(mid);
				e.src = "/static/img/delete2.png";
			} else {
				alert("Delete error!");			
			}
			return;
		}
	  }
	  return;
		  
};
