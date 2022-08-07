//encrypt files
function encryptData(urlStr, target) {
	console.log("Encrypting all decrypted data...");
	//alertify.log("POST: " + urlStr);
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }

	console.log(urlStr);
	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			var e = document.getElementById(target);
			e.src = "/static/img/encrypted2.png";
			
		}
	};
};

//encrypt all
function encryptDataAll() {
	var sec_found = document.getElementById("SEC_FND").value;
	if (sec_found == "N") {
		return;
	}
	var res = document.getElementById("SEC_LIST").value;
	var SPL = res.split(",");
	var e = document.getElementById("enc_all");
	e.innerHTML = "";
	var ctr = 0;
	if (SPL.length > 0) {
		for (var i = 0, len = SPL.length; i < len; i++) {
			
			if (SPL[i] !== "" && SPL[i] != undefined && SPL[i] != "undefined") {
				console.log(SPL[i]);
				ctr++;
				e.innerHTML = e.innerHTML + "<img src=\"/static/img/encrypted.png\" width=\"50\" height=\"50\">";
				
				if (window.XMLHttpRequest)
				  {// code for IE7+, Firefox, Chrome, Opera, Safari
				  xhr3=new XMLHttpRequest();
				  }
				else
				  {// code for IE6, IE5
				  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
				  }
	  
				xhr3.open("POST",SPL[i], true); 
				xhr3.send();
				xhr3.onreadystatechange = function(){
				  if (xhr3.readyState==4 && xhr3.status==200)
					{   
						//donothing
					}
				}
			}
		}
	}
	if (ctr > 0) {
		e.innerHTML = "<img src=\"/static/img/encrypted2.png\" width=\"50\" height=\"50\">All " + ctr + " files are now encrypted!";
	}
	return;
};
