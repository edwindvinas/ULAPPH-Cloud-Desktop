var isCharging;

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
		console.log("Battery is charging!");
		isCharging = true;
		localStorage[root+'batteryCharging'] = "Y";
	  } else {
		console.log("Battery is not charging!");
		isCharging = false; 
		localStorage[root+'batteryCharging'] = "N";		
	  }
	}
	function updateLevelInfo() {
	  let perc = battery.level * 100;
	  console.log("perc:"+perc);
	  localStorage[root+'batteryLevel'] = round(perc, 2);
	  if (isCharging == false && perc <= 20) {
		console.log("Time to charge your battery!");
		var thisMsg = "Warning! Your device has low battery level! Please charge it now!";
		//alert("Low Battery Alert!");
		alertify.error(thisMsg);
		playSoundEmergency();
		speakMessage(thisMsg);
	  } else if (isCharging == true && perc >= 95) {
		console.log("Time to disconnect  your battery charger!");
		var thisMsg = "Warning! Your device has been fully charged! Please disconnect charger now!";
		//alert("Full Battery Alert!");
		alertify.error(thisMsg);
		playSoundEmergency();
		speakMessage(thisMsg);
	  }
	}
	
	function round(value, decimals) {
	 return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}

  }
)