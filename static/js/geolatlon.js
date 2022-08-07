//Enable/disable geolocation
var isGeoEnabled = false;
setInterval( function(){geoloc();}, 15000);
var isActive = true;

//check if current window/tab on focus
window.onfocus = function () { 
  isActive = true; 
}; 

window.onblur = function () { 
  isActive = false; 
};

function success(position) {
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
    	var latitude = position.coords.latitude;
    	var longitude = position.coords.longitude;
	console.log("latitude: "+latitude);
	console.log("longitude: "+longitude);
    	console.log("maploc: "+latitude+","+longitude);
	var gpsURL = "/gps?lat=" + latitude + '&lon=' + longitude;
	cxhr2.open("POST", gpsURL, true); 
	cxhr2.send();
	 cxhr2.onreadystatechange=function()
	  {
	  if (cxhr2.readyState==4 && cxhr2.status==200)
		{
		var currVal = cxhr2.responseText;
			if (currVal != "OK") {
				return;
			}
		return;
		}
	 }
	return;
};

function error(msg) {
	console.log("Client geolocation failed!");
}

function geoloc() {
	if (isGeoEnabled == false) {
		return;
	}
	if (isActive == false) {
		return;
	}
	
	if (navigator.geolocation) {
	  console.log("Geo location successful!");
	  navigator.geolocation.getCurrentPosition(success, error);
	} else {
	  console.log("Geo location not supported!");
	}
	
};
