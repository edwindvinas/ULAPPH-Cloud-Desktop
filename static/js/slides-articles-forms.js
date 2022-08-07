//will send message to contact
function emailContact() {
	console.log("emailContact()");
	var mode = "email";
	var all = "";
	var fmtstr = "";
	var name = document.getElementById("inputName");
	var fmtstr = "$" + "inputName" + ":" + name.value;
	all = all + fmtstr;	
	
	var email = document.getElementById("inputEmail");
	var fmtstr = "$" + "inputEmail" + ":" + email.value;
	all = all + fmtstr;	
	
	var message = document.getElementById("inputMessage");
	var fmtstr = "$" + "inputMessage" + ":" + message.value;
	all = all + fmtstr;	
	
	var alldata = encodeURIComponent(all);
	console.log(alldata);
	//send to server
	submitData(mode,alldata);
}

//will process form inputs from slides & articles
function submitFeedbacks(mode) {
	if (mode == "default") {
		alert("Your score will be available in the comments section...");
	}
	//alert(mode);
	getElements(mode);
	return
};

function getElements(mode) {
  var divs = document.getElementsByName("feedbacks");
  var all = "";
  var name = "";
  for(var i = 0; i < divs.length; i++){
	console.log(divs[i].type);
	console.log(divs[i].id);
	switch (divs[i].type) {
		case "checkbox":
			var fmtstr = "";
			if (document.getElementById(divs[i].id).checked) {
			  //alert("Checkbox: checked");
			  fmtstr = "$" + divs[i].id + ":" + "true";
			} else {
			  //alert("Checkbox: You didn't check it!");
			  fmtstr = "$" + divs[i].id + ":" + "false";
			}
			all = all + fmtstr;
			console.log(fmtstr);
			break;
		
		case "radio":
			var fmtstr = "";
			if (document.getElementById(divs[i].id).checked) {
			  //alert("Radio: checked");
			  fmtstr = "$" + divs[i].id + ":" + "true";
			} else {
			  //alert("Radio: You didn't check it!");
			  fmtstr = "$" + divs[i].id + ":" + "false";
			}
			all = all + fmtstr;
			console.log(fmtstr);
			break;
		
		case "text":
			var fmtstr = "$" + divs[i].id + ":" + divs[i].value;
			if (divs[i].id == "name") {
				name = divs[i].value;
			}
			all = all + fmtstr;
			console.log(fmtstr);
			break;
	}
  }
	//include name and email if given
	var name = document.getElementById("inputName");
	var fmtstr = "$" + "inputName" + ":" + name.value;
	all = all + fmtstr;	
	
	var email = document.getElementById("inputEmail");
	var fmtstr = "$" + "inputEmail" + ":" + email.value;
	all = all + fmtstr;	

	var alldata = encodeURIComponent(all);
	console.log(alldata);
	//send to server
	submitData(name, mode,alldata);
};

function submitData(name, mode,ans) {

	console.log("submitData");
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttsd=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttsd=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	  	
	var sid = document.getElementsByName("SID")[0].value
	//chk_url = '/social?SO_FUNC=QUIZ&ANS=' + ans + '&SID=' + sid + '&mode=' + mode + '&name=' + name;
	chk_url = '/social?SO_FUNC=QUIZ&ANS=' + ans + '&SID=' + sid + '&mode=' + mode;
	console.log(chk_url);
	location.href=chk_url;
	
	/*xmlhttsd.open("GET",chk_url,true);
	xmlhttsd.send();

	 xmlhttsd.onreadystatechange=function()
	  {
	  if (xmlhttsd.readyState==4 && xmlhttsd.status==200)
		{
		var currVal = xmlhttsd.responseText;
			if (currVal != "") {
				//alert(currVal);
				console.log(currVal);
				var n = currVal.indexOf("ERROR");
				if (n > 0) {
					//error processing
					alert(currVal);
				} else {
					if (mode == "default") {
						//quiz type
						//open the comments section
						//window.open("/social?SID=" + sid + "&SO_FUNC=SO_VIEW");
						title = document.getElementById("TITLE").value;
						window.open("/captcha?CC_FUNC=DISP&R=COMMENT&SID=" + sid + "&TITLE=" + title);
					} else {
						alert(currVal);
					}					
				}
				return;
			}
		}
	 }*/
	 return;
};
