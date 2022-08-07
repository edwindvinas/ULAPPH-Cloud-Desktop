var intNot = 0;
var extNot = 0;
var broNot = 0;
var eqNot = 0;

function homejs() {
    sendPingRequest();
	g_Timeout = window.setInterval( function(){sendPingRequest();}, 10000);		
	
};

function sendPingRequest()
{
	var p = new Ping();
	p.ping("https://www.google.com", function(data) {
		document.getElementById("ping-res").innerHTML = data;
	});
	
	//check eq alarms
	chkSYS1();
	//check site activity
	chkSYS2();
	//check external sites activity
	chkSYS3();
	//check broadcast msgs
	chkBM();
}

function chkSYS1() {
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpeq=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpeq=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-SYS1';
	xmlhttpeq.open("GET",chk_url,true);
	xmlhttpeq.send();
	
	//get message counter
	 xmlhttpeq.onreadystatechange=function()
	  {
	  if (xmlhttpeq.readyState==4 && xmlhttpeq.status==200)
		{
		var currVal = xmlhttpeq.responseText;
			if (currVal != "") {				
				eqNot = eqNot + 1;
				document.getElementById("eq-res").innerHTML = eqNot;
				
				return;
			}
		return;
		}
	 }
	 return;
};

function chkSYS2() {
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttact1=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttact1=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-SYS2';
	xmlhttact1.open("GET",chk_url,true);
	xmlhttact1.send();
	 xmlhttact1.onreadystatechange=function()
	  {
	  if (xmlhttact1.readyState==4 && xmlhttact1.status==200)
		{
		var currVal = xmlhttact1.responseText;
			if (currVal != "") {				
				intNot = intNot + 1;
				document.getElementById("int-res").innerHTML = intNot;
				
				return;
			}
		return;
		}
	 }
	 return;
};
 
function chkSYS3() {
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttact1=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttact1=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-SYS3';
	xmlhttact1.open("GET",chk_url,true);
	xmlhttact1.send();
	 xmlhttact1.onreadystatechange=function()
	  {
	  if (xmlhttact1.readyState==4 && xmlhttact1.status==200)
		{
		var currVal = xmlhttact1.responseText;
			if (currVal != "") {				
				extNot = extNot + 1;
				document.getElementById("ext-res").innerHTML = extNot;
				
				return;
			}
		return;
		}
	 }
	 return;
};
 
function chkBM() {
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttbm=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttbm=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  
	chk_url = '/people?PEOPLE_FUNC=CHECK-BM';
	xmlhttbm.open("GET",chk_url,true);
	xmlhttbm.send();
	 xmlhttbm.onreadystatechange=function()
	  {
	  if (xmlhttbm.readyState==4 && xmlhttbm.status==200)
		{
		var currVal = xmlhttbm.responseText;
			if (currVal != "") {				
				broNot = broNot + 1;
				document.getElementById("bm-res").innerHTML = broNot;
				
				return;
			}
		return;
		}
	 }
	 return;
};
