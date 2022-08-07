//fetch data from remote ulapph
function getWallData(urlStr) {
	
	alertify.log("POST: " + urlStr);
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }

	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			//console.log("Response received.",xhr3.responseText);
			alertify.log("Icon saved: " + xhr3.responseText);
			
		}
	};
};

function getWallDataSlide(urlStr) {
	
	alertify.log("POST: " + urlStr);
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			//console.log("Response received.",xhr3.responseText);
			alertify.log("Slide saved: " + xhr3.responseText);			
		}
	};
};

function getWallDataArticle(urlStr) {
	
	alertify.log("POST: " + urlStr);
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }

	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			//console.log("Response received.",xhr3.responseText);
			alertify.log("Article saved: " + xhr3.responseText);		
		}
	};
};

function getWallDataMedia(urlStr) {
	
	alertify.log("POST: " + urlStr);
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }

	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			//console.log("Response received.",xhr3.responseText);
			alertify.log("Media saved: " + xhr3.responseText);		
		}
	};
};