//ulapph
//loads data to tinymce editor

function myTinyData() {
	console.log("loading data to tinymce...");
	var urlParams;
	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);
	loadEditorData(urlParams["SID"]);
}

function toggleView() {
	tinymce.execCommand('mceToggleEditor',false,'content');
}

function updateCloud() {
	console.log('Saved'); 
	alert("Do you really want to save?");
	var urlParams;
	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);

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
	editor_url = '/editor?EDIT_FUNC=GET_UP_URL&SID=' + urlParams["SID"];
	xmlhttp.open("POST",editor_url,true);
	xmlhttp.send();

	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var uploadURL = xmlhttp.responseText;
			var formData = new FormData();

			formData.append("EDIT_FUNC2", "SAVE_TEXT");
			formData.append("SID", urlParams["SID"]);
			formData.append("CATEGORY", urlParams["CATEGORY"]);
			formData.append("FUNC_CODE", "UPD-FROM-EDITOR");
			formData.append("SPC_OPT", urlParams["SPC_OPT"]);			

			//tinyMCE.activeEditor.getContent({format : 'raw'});
			//var thisLineTxtRaw = String(session.getLines(0,0));
			//var thisLineTxt = thisLineTxtRaw.replace(/[^A-Z0-9]/ig, "_");
			//var thisLineTxt_m = thisLineTxt.replace(/&/g, 'and');
			//formData.append("TITLE", thisLineTxt_m);
			formData.append("TITLE", "Sample title");
			//thisLineTxtRaw = String(session.getLines(1,1));
			//var thisLineTxtRaw_m = thisLineTxtRaw.replace(/&/g, 'and');
			//formData.append("DESC", thisLineTxtRaw_m);
			formData.append("DESC", "Sample description");
			//var thisContent = session.getValue();
			var thisContent = tinyMCE.activeEditor.getContent({format : 'text'});
			//var thisContent2 = thisContent.replace("&nbsp;", "* ");
			//alert(thisContent2);
			//console.log("content: " + thisContent);
			//var blob = new Blob([thisContent2], { type: "text/plain"});
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
	
}

//added by ulapph
/* function viewAce() {
	var urlParams;
	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);
   
	var redirLink = "/editor?DOC_ID=" + urlParams["DOC_ID"] + "&SID=" + urlParams["SID"] + "&EDIT_MODE=ACE";
	window.location.assign(redirLink);
}; */

function loadEditorData(keyData){
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
	editor_url = '/editor?EDIT_FUNC=GET_TEXT&EDIT_MODE=TINY&KEY_TEXT=' + keyData;
	xmlhttp.open("POST",editor_url,true);
	xmlhttp.send();

	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var file = xmlhttp.responseText;
			console.log("file: " + file);
			// Sets the raw contents of the activeEditor editor
			//var res = file.split("@888@");
			//lineCount = parseInt(res[1]);
			//document.getElementById("lineCount").value = lineCount;
			//tinyMCE.activeEditor.setContent(res[0]);
			//tinymce.activeEditor.setContent(file);
			tinymce.activeEditor.setContent(file, {format : 'raw'});
		}

	 }
}