	window.onload = function() {
			//if SID is populated
			var sid = document.getElementsByName("SID")[0].value;
			if (sid != undefined && sid != "") {
				//get the SID content in server
				loadSidData(sid);
				return;				
			}

			
			var fileInput = document.getElementById('fileInput');
			fileInput.addEventListener('change', function(e) {
				var file = fileInput.files[0];
					var reader = new FileReader();
 
					reader.onload = function(e) {
						var lc = LC.init(document.getElementsByClassName('literally imgur')[0])
						lc.loadSnapshot(JSON.parse(reader.result));
						//console.log(JSON.parse(reader.result));
					}
					reader.readAsText(file);	
			});
	};
	
	function loadSidData(mediaID) {
		console.log("Loading data... Please wait... This may take a while.");
		var xmlhttp;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }

		var draw_url = "";
		draw_url = '/media?FUNC_CODE=RAWJSON&SID=' + mediaID;
		console.log("draw_url: "+draw_url);
		xmlhttp.open("POST",draw_url,true);
		xmlhttp.send();

		 xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				//console.log(xmlhttp.responseText);
				if (xmlhttp.responseText != "") {
					var objJSON = xmlhttp.responseText;
					var lc = LC.init(document.getElementsByClassName('literally imgur')[0])
					lc.loadSnapshot(JSON.parse(objJSON));
     					//localStorage.setItem(localStorageKey, objJSON);
					//console.log(JSON.parse(objJSON));
					//lc.loadSnapshot(xmlhttp.responseText);
					console.log("Json has been loaded...");
				}
				
			}
			
		}
		return;
	};
	
	function dataURItoBlob(dataURI) {
		// convert base64/URLEncoded data component to raw binary data held in a string
		var byteString;
		if (dataURI.split(',')[0].indexOf('base64') >= 0)
			byteString = atob(dataURI.split(',')[1]);
		else
			byteString = unescape(dataURI.split(',')[1]);
 
		// separate out the mime component
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
 
		// write the bytes of the string to a typed array
		var ia = new Uint8Array(byteString.length);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
 
		return new Blob([ia], {type:mimeString});
	}

  $(document).ready(function(){
    var lc = LC.init(document.getElementsByClassName('literally imgur')[0]);
	
    $('.imgur-submit [data-action=upload-to-imgur]').click(function(e) {
      e.preventDefault();
		var upText = prompt("Please enter title", "Sample drawing");
 
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
		editor_url = root + '/editor?EDIT_FUNC=GET_UP_URL&SID=TDSMEDIA-0';
		xmlhttp.open("POST",editor_url,true);
		xmlhttp.send();
 
		 xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				var uploadURL = xmlhttp.responseText;
 
				var blob = dataURItoBlob(lc.getImage().toDataURL());
				var fd = new FormData(document.forms[0]);
				fd.append("file", blob);
				fd.append("TITLE", "literallyCanvasImage "+upText);
				fd.append("DESC", "literallyCanvasImage "+upText);
				fd.append("DATA_TYPE", "image");
				fd.append("MIME_TYPE", "image/png");
				fd.append("FL_SHARED", "N");
				fd.append("DOC_STAT", "Personal");
				
				var request = new XMLHttpRequest();
				request.open("POST", uploadURL);
				request.send(fd);
				request.onreadystatechange=function()
				  {
				  if (request.readyState==4 && request.status==200)
					{
						var redirLink = request.responseText;
						alert("Image has been uploaded to Media Gallery!");
						//window.open(redirLink);
						return;
					}
				 }
 
			}
		  }
 
    });
	
    $('.imgur-submit [data-action=export-as-png]').click(function(e) {
      e.preventDefault();
    	var lc = LC.init(document.getElementsByClassName('literally imgur')[0]);
      //window.open(lc.getImage().toDataURL());
      location.href=lc.getImage().toDataURL();
    });
	
	//auto-save in local storage
    var localStorageKey = 'drawing';
	var urlParams;
	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);
   
 	if (urlParams["SID"] != "" && urlParams["SID"] != undefined) {
		var root = location.protocol + '//' + location.host;
		localStorageKey = root + "drawing" + urlParams["SID"];
	}
   
    if (localStorage.getItem(localStorageKey)) {
     lc.loadSnapshot(JSON.parse(localStorage.getItem(localStorageKey)));
    }
    lc.on('drawingChange', function() {
     console.log("drawingChange!");
     localStorage.setItem(localStorageKey, JSON.stringify(lc.getSnapshot()));
    });
	
    $('.imgur-submit [data-action=upload-as-text]').click(function(e) {
    		var lc = LC.init(document.getElementsByClassName('literally imgur')[0]);
		e.preventDefault();
		var upText = prompt("Please enter title", "Sample drawing");
		
		var urlParams;
		var match,
				pl     = /\+/g,  // Regex for replacing addition symbol with a space
				search = /([^&=]+)=?([^&]*)/g,
				decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
				query  = window.location.search.substring(1);

		urlParams = {};
		while (match = search.exec(query))
		   urlParams[decode(match[1])] = decode(match[2]);
 
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
		var SID = urlParams["SID"];
		//console.log(SID);
		if (SID == "" || SID == undefined) {
			SID = "NEWTEXT";
		}
		editor_url = root + '/editor?EDIT_FUNC=GET_UP_URL&SID=' + SID;
		xmlhttp.open("POST",editor_url,true);
		xmlhttp.send();
 
		 xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				var uploadURL = xmlhttp.responseText;
				var formData = new FormData();
 
				formData.append("EDIT_FUNC2", "SAVE_TEXT");
				formData.append("FUNC_CODE", "UPD-FROM-EDITOR");
				formData.append("SID", urlParams["SID"]);
				formData.append("TITLE", "literallyCanvas "+upText);
				formData.append("DESC", "literallyCanvas "+upText);
				var thisContent = JSON.stringify(lc.getSnapshot());
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
						//window.location.assign(redirLink);
						window.open(redirLink);
						return;
					}
				 }
			}
		}
	 });
  });
