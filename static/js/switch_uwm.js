if (localStorage['god'] == "Y") { 
document.getElementById("ulapph-1").checked = true; 
} else {
document.getElementById("ulapph-1").checked = false; 	
}

if (localStorage['universe'] == "Y") { 
document.getElementById("ulapph-2").checked = true; 
} else {
document.getElementById("ulapph-2").checked = false; 	
}

if (localStorage['earth'] == "Y") { 
document.getElementById("ulapph-3").checked = true; 
} else {
document.getElementById("ulapph-3").checked = false;	
}

if (localStorage['philippines'] == "Y") { 
document.getElementById("ulapph-4").checked = true; 
} else {
document.getElementById("ulapph-4").checked = false;	
}

if (localStorage['global'] == "Y") { 
document.getElementById("ulapph-5").checked = true; 
} else {
document.getElementById("ulapph-5").checked = false; 	
}

if (localStorage['info'] == "Y") { 
document.getElementById("info").checked = true; 
} else {
document.getElementById("info").checked = false; 	
}

if (localStorage['opo'] == "Y") { 
document.getElementById("opo").checked = true; 
} else {
document.getElementById("opo").checked = false; 	
}

if (localStorage['videoke'] == "Y") { 
document.getElementById("videoke").checked = true; 
} else {
document.getElementById("videoke").checked = false; 	
}

if (localStorage['website'] == "Y") { 
document.getElementById("website").checked = true; 
} else {
document.getElementById("website").checked = false;	
}

if (localStorage['bible'] == "Y") { 
document.getElementById("bible").checked = true; 
} else {
document.getElementById("bible").checked = false;	
}

if (localStorage['chat'] == "Y") { 
document.getElementById("chat").checked = true; 
} else {
document.getElementById("chat").checked = false; 	
}

if (localStorage['online'] == "Y") { 
document.getElementById("online").checked = true; 
} else {
document.getElementById("online").checked = false; 	
}

if (localStorage['ytlive'] == "Y") { 
document.getElementById("ytlive").checked = true; 
} else {
document.getElementById("ytlive").checked = false; 	
}

if (localStorage['stream'] == "Y") { 
document.getElementById("stream").checked = true; 
} else {
document.getElementById("stream").checked = false; 	
}

//force system settings
if (localStorage['SYS_UWM_RAN_COLORS'] == "Y") { 
document.getElementById("SYS_UWM_RAN_COLORS").checked = true; 
} else {
document.getElementById("SYS_UWM_RAN_COLORS").checked = false; 	
}
//force screen settings
if (localStorage['SYS_SMALL_SCREEN'] == "Y") { 
document.getElementById("SYS_SMALL_SCREEN").checked = true; 
} else {
document.getElementById("SYS_SMALL_SCREEN").checked = false; 	
}

function switch4(elem) {
  if (document.getElementById(elem).checked) 
  {
		if(typeof(Storage) !== "undefined") {
			switch (elem) {
				case "SYS_UWM_RAN_COLORS":
					localStorage['SYS_UWM_RAN_COLORS'] = "Y";
					window.location.href = "/people-edit?EditPeopleFunc=SET_CACHE_CONFIG&CNFG=" + elem + "&VAL=" + "Y";
					break;
			}
			
		}
  } else {
      //alert("un-checked");
		if(typeof(Storage) !== "undefined") {
			switch (elem) {
				case "SYS_UWM_RAN_COLORS":
					localStorage['SYS_UWM_RAN_COLORS'] = "N";
					window.location.href = "/people-edit?EditPeopleFunc=SET_CACHE_CONFIG&CNFG=" + elem + "&VAL=" + "N";
					break;
			}
		}
  }
}

function switch3(elem) {
  if (document.getElementById(elem).checked) 
  {
		if(typeof(Storage) !== "undefined") {
			switch (elem) {
				case "ulapph-1":
					localStorage['god'] = "Y";
					break;
				case "ulapph-2":
					localStorage['universe'] = "Y";
					break;
				case "ulapph-3":
					localStorage['earth'] = "Y";
					break;
				case "ulapph-4":
					localStorage['philippines'] = "Y";
					break;
				case "ulapph-5":
					localStorage['global'] = "Y";
					break;
				case "info":
					localStorage['info'] = "Y";
					break;
				case "opo":
					localStorage['opo'] = "Y";
					break;
				case "videoke":
					localStorage['videoke'] = "Y";
					break;
/* 				case "sports":
					localStorage['sports'] = "Y";
					break; */
				case "website":
					localStorage['website'] = "Y";
					break;
				case "bible":
					localStorage['bible'] = "Y";
					break;
				case "chat":
					localStorage['chat'] = "Y";
					break;
				case "online":
					localStorage['online'] = "Y";
					break;
				case "ytlive":
					localStorage['ytlive'] = "Y";
					break;
				case "stream":
					localStorage['stream'] = "Y";
					break;
			}
			
		}
  } else {
      //alert("un-checked");
		if(typeof(Storage) !== "undefined") {
			switch (elem) {
				case "ulapph-1":
					localStorage['god'] = "N";
					break;
				case "ulapph-2":
					localStorage['universe'] = "N";
					break;
				case "ulapph-3":
					localStorage['earth'] = "N";
					break;
				case "ulapph-4":
					localStorage['philippines'] = "N";
					break;
				case "ulapph-5":
					localStorage['global'] = "N";
					break;
				case "info":
					localStorage['info'] = "N";
					break;
				case "opo":
					localStorage['opo'] = "N";
					break;
				case "videoke":
					localStorage['videoke'] = "N";
					break;
/* 				case "sports":
					localStorage['sports'] = "N";
					break; */
				case "website":
					localStorage['website'] = "N";
					break;
				case "bible":
					localStorage['bible'] = "N";
					break;
				case "chat":
					localStorage['chat'] = "N";
					break;
				case "online":
					localStorage['online'] = "N";
					break;
				case "ytlive":
					localStorage['ytlive'] = "N";
					break;
				case "stream":
					localStorage['stream'] = "N";
					break;
			}
		}
  }
}

function switch0()
{
  if (document.getElementById('soundsw').checked) 
  {
      //alert("checked");
	  localStorage['soundsw'] = "Y";
	  window.location.href = "/tools?FUNC=WIDGET&t=MyPreferences&MP_FUNC=JSWM_SOUND_ON";
  } else {
      //alert("un-checked");
	  localStorage['soundsw'] = "N";
	  window.location.href = "/tools?FUNC=WIDGET&t=MyPreferences&MP_FUNC=JSWM_SOUND_OFF";
  }
}

function switch2()
{
  if (document.getElementById('uwmsw').checked) 
  {
      //alert("checked");
	  localStorage['uwmsw'] = "Y";
	  window.location.href = "/tools?FUNC=WIDGET&t=MyPreferences&MP_FUNC=JSWM_AUTO_LOAD_ON";
  } else {
      //alert("un-checked");
	  localStorage['uwmsw'] = "N";
	  window.location.href = "/tools?FUNC=WIDGET&t=MyPreferences&MP_FUNC=JSWM_AUTO_LOAD_OFF";
  }
}


function screensize()
{
  var root = location.protocol + '//' + location.host;
  if (document.getElementById('SYS_SMALL_SCREEN').checked) 
  {
      //alert("checked");
	localStorage[root+'isScreenSmall-force'] = 'Y';
	localStorage[root+'isScreenSmall'] = 'Y';
  } else {
      //alert("un-checked");
	localStorage[root+'isScreenSmall-force'] = 'N';
	localStorage[root+'isScreenSmall'] = 'N';
  }
}
