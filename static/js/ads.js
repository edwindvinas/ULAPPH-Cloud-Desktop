function ULAPPH_ADS_GETIMG(target){
	var str = target;
	var res = str.split("-");
	var divName = 'image-area-ADS_RAND_' + res[0];
	
	var xmlhttp;
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  
	var docker_url = "";
	docker_url = '/advertisement?AD_FUNC=GETIMG&LIST=' + res[1];
	xmlhttp.open("GET",docker_url,true);
	document.getElementById(divName).innerHTML = "<img src=\"/static/img/loading.gif\" alt=\"waiting\" height=\"60\" width=\"60\"/>";
	xmlhttp.send();
	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		var currAdsValue = xmlhttp.responseText;
			if (currAdsValue != "") {
				document.getElementById(divName).innerHTML = "";
				document.getElementById(divName).innerHTML = currAdsValue;
			} else {
				document.getElementById(divName).innerHTML = "<div class=\"error2\">Error retrieving ads.</div>";
			}
		return
		}
	 }

}

