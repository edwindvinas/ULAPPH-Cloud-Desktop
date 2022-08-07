var isCharging;

var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

navigator.getBattery()
  .then(function(battery) {
    (function init() {
      updateChargeInfo();
      updateLevelInfo();

      battery.addEventListener('chargingchange', updateChargeInfo);
      battery.addEventListener('levelchange', updateLevelInfo);
    }());
	
	function updateChargeInfo() {
	  if (battery.charging) {
		//console.log("Battery is charging!");
		isCharging = true;
		localStorage[root+'batteryCharging'] = "Y";
	  } else {
		//console.log("Battery is not charging!");
		isCharging = false; 
		localStorage[root+'batteryCharging'] = "N";		
	  }
	}
	function updateLevelInfo() {
	  let perc = battery.level * 100;
	  //console.log("perc:"+perc);
	  localStorage[root+'batteryLevel'] = round(perc, 2);
	  var uwm = document.getElementById("uwm").value;
	  var uid = document.getElementById("uid").value;
	  var cctvNum = "desktop"+uwm;
	  if (isCharging == false && perc <= 20) {
		//console.log("Time to charge your battery!");
		//var thisMsg = "Warning! Your device [" + cctvNum +"] has low battery level [" + localStorage[root+'batteryLevel'] + "]! Please charge it now!";
		var thisMsg = "<b><font color=red>LOW - NOT CHARGING</b></font> - Your device [" + uid + "-" + cctvNum +"] has low battery level of " + localStorage[root+'batteryLevel'] + ". Please charge it now!";
		localStorage[root+'batteryLevelMessage'] = thisMsg;
		//alert("Low Battery Alert!");
		//alertify.error(thisMsg);
		//playSoundEmergency();
		//speakMessage(thisMsg);
	  } else if (isCharging == true && perc >= 95) {
		//console.log("Time to disconnect  your battery charger!");
		var thisMsg = "<b><font color=green>FULL CHARGING</b></font> - Your device [" + uid + "-" + cctvNum +"] has been fully charged! Please disconnect charger now!";
		localStorage[root+'batteryLevelMessage'] = thisMsg;
		//alert("Full Battery Alert!");
		//alertify.error(thisMsg);
		//playSoundEmergency();
		//speakMessage(thisMsg);
	  } else if (isCharging == false && perc > 20) {
		var thisMsg = "<b><font color=blue>NORMAL - NOT CHARGING</b></font> - Your device [" + uid + "-" + cctvNum +"] has normal battery level of " + localStorage[root+'batteryLevel'] + ". Just monitor as it is not charging now.";
		localStorage[root+'batteryLevelMessage'] = thisMsg;
	  } else if (isCharging == true && perc > 20) {
		var thisMsg = "<b><font color=magenta>NORMAL - CHARGING</b></font> - Your device [" + uid + "-" + cctvNum +"] has normal battery level of " + localStorage[root+'batteryLevel'] + ". Nothing to worry about.";
		localStorage[root+'batteryLevelMessage'] = thisMsg;
	  }
	}
	
	function round(value, decimals) {
	 return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}
	
	function playSoundEmergency() {
		if (isEdge == true || isIE == true || isSafari == true) {
			soundManager.createSound({
				id: 'emergency',
				volume: 50,
				url: root + "/static/audio/emergency030.mp3"
			});
			soundManager.play('emergency');
		} else {	
			soundManager.createSound({
				id: 'emergency',
				volume: 50,
				//url: root + "/static/audio/emergency030.ogg"
				url: root + "/static/audio/emergency030.wav"
			});
			soundManager.play('emergency');
		}
	}
	
	function speakMessage(thisMsg){
		if (('speechSynthesis' in window) || ('SpeechRecognition' in window)) {
			//if message has >>> read only the left text
			var str = thisMsg;
			var n = str.indexOf(">>>");
			if (n > 0) {
				var res = str.split(">>>");
				if (res.length > 0) {
					thisMsg = res[0];
				}		
			}
			msg.rate = 1;
			msg.pitch = 1;
			msg.text = thisMsg;
			window.speechSynthesis.speak(msg);
			msg.onend = function() {
				//do nothing
			}
		}
	}

  }
  
)