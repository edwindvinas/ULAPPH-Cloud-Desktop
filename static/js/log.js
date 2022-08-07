function ULAPPH_DISP_LOG(targetHour){
	
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
	   
/* 	var xmlhttp;
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  } */
	  
	var log_url = "";
	if (urlParams["DATE"] == "" || urlParams["DATE"] == undefined ) {
		log_url = '/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG&SP_FUNC=GET_LOG&DATE=TODAY' + '&SEQ=' + targetHour;
	} else {
		log_url = '/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG&SP_FUNC=GET_LOG&DATE=' + urlParams["DATE"] + '&SEQ=' + targetHour;
	}
/* 	xmlhttp.open("GET",log_url,true);
	xmlhttp.send();
	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		var currLogValue = xmlhttp.responseText;
		var divTarget = "log" + targetHour;
			if (currLogValue != "") {
				document.getElementById(divTarget).innerHTML = "";
				document.getElementById(divTarget).innerHTML = "<h1>View Hour(" + targetHour + ")</h1>" + currLogValue;
			} else {
				document.getElementById(divTarget).innerHTML = "No logs found";
			}
		return
		}
	 } */
	var root = location.protocol + '//' + location.host;
	parent.postMessage(log_url,root);
	return;

}