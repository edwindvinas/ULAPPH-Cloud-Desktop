var stsbutton = false;

function copyToSlides(type, link, caption, mid) {
	var e = document.getElementById("slides-area");
	var currHTML = e.innerHTML;
	
	switch (type) {
		case "image":		
			e.innerHTML = currHTML + "<br>* <br>" + ".image " + link + " " + "600 900" + "<br>" + ".caption " + caption + "<br>";	
			break;
		case "music":		
			e.innerHTML = currHTML + "<br>* <br>" + ".iframe " + link + " " + "600 900" + "<br>" + ".caption " + caption + "<br>";	
			break;
		case "video":		
			e.innerHTML = currHTML + "<br>* <br>" + ".iframe " + link + " " + "600 900" + "<br>" + ".caption " + caption + "<br>";	
			break; 
	}
	var strs = 'iurl_' + mid + 's';
	document.getElementById(strs).innerHTML = "<font color=blue><b>OK</b></font>";
	if (stsbutton == false) {
		var b = document.getElementById("slides-area-button");
		b.innerHTML = '<button onclick="saveToSlides()">Save to Slides</button>';
		stsbutton = true;
		var c = document.getElementById("slides-copy-button");
		c.innerHTML = "<button onclick=\"selectText('slides-area')\">Select Text</button>";
	}
	return;
}

//copy slides text to clipboard
function selectText(containerid) {
	if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(containerid));
		range.select();
	} else if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(document.getElementById(containerid));
		window.getSelection().addRange(range);
	}
}
	
function saveToSlides() {

	alert("Saving data... Please wait... This may take a while.");
	
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	var editor_url = "";
	var root = location.protocol + '//' + location.host;
	editor_url = root + '/editor?EDIT_FUNC=GET_UP_URL&SID=' + 'NEWSLIDE';
	xmlhttp.open("POST",editor_url,true);
	xmlhttp.send();

	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var uploadURL = xmlhttp.responseText;
			var formData = new FormData();

			formData.append("EDIT_FUNC2", "SAVE_TEXT");
			formData.append("SID", 'NEWSLIDE');
			formData.append("CATEGORY", 'desktop0');
			formData.append("FUNC_CODE", "UPD-FROM-EDITOR");
			formData.append("SPC_OPT", '');			
			formData.append("UID", '');
			formData.append("TITLE", 'Slide from Gallery');
			formData.append("DESC", 'Saved to Slides from Gallery');
			
			//append this pre-req lines
			var oldval = document.getElementById('slides-area').innerHTML;
			document.getElementById('slides-area').innerHTML = 
				'Sample Title<br>' +
				'Sample Sub-title<br>' +
				'27 Aug 2016<br>' +
                ' <br>' +
				'Juan dela Cruz<br>' +
				'https://www.sample.com/<br>' +
				'sample@gmail.com<br>' +
				' <br>' +
				' <br>' +
				oldval +
				' <br>';
				
			var e = document.getElementById("slides-area");	
			var thisContent = e.innerText;
			var blob = new Blob([thisContent], { type: "text/plain"});

			formData.append("file", blob);

			var request = new XMLHttpRequest();
			request.open("POST", uploadURL);
			request.send(formData);
			 request.onreadystatechange=function()
			  {
			  if (request.readyState==4 && request.status==200)
				{
					var redirLink = request.responseText;
					window.location.assign(redirLink);
					return
				}

			 }
		}
		
	}
};
