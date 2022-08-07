//--start channel codes
var FL_CONNECTED_OK = false;
var root = location.protocol + '//' + location.host;

function onOpen() {
	//soundNow();
	console.log("Channel opened...");
	FL_CONNECTED_OK = true;
};

function procMessage(obj) {
	console.log("procMessage...");
 	var res = obj.message;
	var sysUpd = res.indexOf("ULAPPH-SYS-UPD@888@");
	var str = res; 
	var resp = str.split(":");

	if (sysUpd > 0) {
		var cmdata = str.split("@888@");
		console.log("cmdata: "+cmdata);
		switch (cmdata[2]) {
			case "SYS_STRUWM_CAPTURE":
				console.log("SYS_STRUWM_CAPTURE...");
				var uid = cmdata[3];
				console.log("uid: "+uid);
				var desktop = cmdata[4];
				console.log("desktop: "+desktop);
				var uwm = "desktop" + document.getElementById("uwm").value;
				console.log("uwm: "+uwm);
				if (uid != "" && desktop === uwm) {
					//capture
					console.log("triggered cctv capture!");
					take_snapshot();
				}
				break;
			case "SYS_STRUWM_BATTERY_GET":
				console.log("SYS_STRUWM_BATTERY_GET");	
				var uid = cmdata[3];
				console.log("uid: "+uid);
				var desktop = cmdata[4];
				console.log("desktop: "+desktop);
				var uwm = "desktop" + document.getElementById("uwm").value;
				console.log("uwm: "+uwm);
				if (uid != "" && desktop === uwm) {
					//battery status
					console.log("triggered cctv battery status!");
					if (window.XMLHttpRequest)
					  {// code for IE7+, Firefox, Chrome, Opera, Safari
					  cxhr=new XMLHttpRequest();
					  }
					else
					  {// code for IE6, IE5
					  cxhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
					  }
					cxhr.open("GET","/notifications?N_FUNC=SEND_BATTERY_STATUS&N_ID=" + uwm + "&N_MSG=" + localStorage[root+'batteryLevelMessage'], true); 
					cxhr.send();
				}
				break;
			case "SYS_STRUWM_CALL":
				console.log("SYS_STRUWM_CALL...");
				var server = cmdata[3];
				console.log("server: "+server);
                		var smatch = root.indexOf(server);
                		console.log("smatch: "+smatch);
				var desktop = cmdata[4];
				console.log("desktop: "+desktop);
				var room = cmdata[5];
				console.log("room: "+room);
				var uwm = "desktop" + document.getElementById("uwm").value;
				console.log("uwm: "+uwm);
				if (smatch > 0 && desktop === uwm) {
                    var aSound = document.createElement('audio');
                    soundManager.createSound({
                        id: 'mySoundCall',
                        volume: 95,
                        url: root + "/static/audio/ringing.ogg"
                    });
                    soundManager.play('mySoundCall');
					//capture
					console.log("triggered cctv call!");
                    var rtcLink = "https://appr.tc/r/ulapph-cctv-"+ server + "-" + uwm + "-" + room + "?stereo=false&hd=false";
					console.log("rtcLink: "+rtcLink);
                    var win = window.open(rtcLink, '1366002941508');
                    setTimeout(function () { win.close();}, 600000);
				}
				break;		
		}
		return;	
	}
};

function onClose() {
	FL_CONNECTED_OK = false;
	reConnect();
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
	return;
};
