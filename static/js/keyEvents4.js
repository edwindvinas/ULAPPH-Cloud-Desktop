addEventListeners();

function handleBodyKeyDown(event) {
	// If we're in a code element, only handle pgup/down.
	//19 for Mac Command+S
	if (!( String.fromCharCode(event.which).toLowerCase() == 's' && event.ctrlKey) && !(event.which == 19)) return true;

	//alert("Ctrl-s pressed");
	console.log("Ctrl-s pressed");
	saveData();
	event.preventDefault();
	return false;
};

function addEventListeners() {
  document.addEventListener('keydown', handleBodyKeyDown, false);
};

function saveData() {
	console.log("saveData()");
	var urlParams;
	var match,
			pl     = /\+/g,  // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			query  = window.location.search.substring(1);

	urlParams = {};
	while (match = search.exec(query))
	   urlParams[decode(match[1])] = decode(match[2]);

	alert("Saving data... Please wait.");
	//var e = document.getElementById("saveicon");
	//var curImg = e.src;
	//show saver image
	//e.src = "/static/img/cloud-saver.gif";
	
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
	var UID = urlParams["UID"];
	editor_url = root + '/editor?EDIT_FUNC=GET_UP_URL&SID=' + urlParams["SID"] + '&UID=' + UID;
	console.log("editor_url: "+editor_url);
	xmlhttp.open("POST",editor_url,true);
	xmlhttp.send();
	
	//check if external clouds
	var isExternalCloud = false;
	var isNewFile = false;
	var sid = urlParams["SID"];
	if (sid.indexOf("GITHUB_CONTENT@888@") !== -1) {
		isExternalCloud = true;
	}
	if (sid.indexOf("NEWTEXT") !== -1 || sid.indexOf("NEWSLIDE") !== -1 || sid.indexOf("NEWARTICLE") !== -1) {
		isNewFile = true;
	}
	if (sid == "SWFSBLOB") {
		isUpdateFile = true;
	}
	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var uploadURL = xmlhttp.responseText;
			console.log("uploadURL: "+uploadURL);
			var formData = new FormData();

			formData.append("EDIT_FUNC2", "SAVE_TEXT");
			formData.append("SID", urlParams["SID2"]);
			formData.append("DOC_ID", urlParams["DOC_ID"]);
			formData.append("CATEGORY", urlParams["CATEGORY"]);
			if (isExternalCloud == true) {
				formData.append("FUNC_CODE", "UPD-FROM-EDITOR2");
			} else {
				formData.append("FUNC_CODE", "UPD-FROM-EDITOR");
			}
			formData.append("SPC_OPT", urlParams["SPC_OPT"]);			
			formData.append("BLOB_KEY", urlParams["BLOB_KEY"]);			
			var UID = document.getElementById("UID").value;
			if ((sid != "SWFSBLOB") && (UID == "" || UID == undefined)) {
				alert("Sorry, you cannot save your changes because you are not logged in.")
				//var e = document.getElementById("saveicon");
				//e.src = curImg;
				window.open(root, '_blank');
				return;
			}
			formData.append("UID", UID);
			var thisLineTxtRaw = String(editor.getSession().getLines(0,0));
			var thisLineTxt = thisLineTxtRaw.replace(/[^A-Z0-9]/ig, "_");
			var thisLineTxt_m = thisLineTxt.replace(/&/g, 'and');
			//limit title length to avoid panic error
			var length = 500;
			var thisLineTxt_t = thisLineTxt_m.substring(0, length);

			formData.append("TITLE", thisLineTxt_t);
			thisLineTxtRaw = String(editor.getSession().getLines(1,1));
			var thisLineTxtRaw_m = thisLineTxtRaw.replace(/&/g, 'and');
			
			if (isExternalCloud == true) {
				var msg = prompt("Commit message", " -- Updated from ULAPPH Cloud Desktop by "+UID);
				formData.append("DESC", msg);
			} else {
				formData.append("DESC", thisLineTxtRaw_m);
			}
			var thisContent = editor.getSession().getValue();
			var blob = new Blob([thisContent], { type: "text/plain"});

			formData.append("file", blob);

			var request = new XMLHttpRequest();
			request.open("POST", uploadURL);
			request.send(formData);
			 request.onreadystatechange=function()
			  {
			  if (request.readyState==4 && request.status==200)
				{
					if (isExternalCloud == true) {
						//close window
						alert("Data has been updated successfully!");
						//var e = document.getElementById("saveicon");
						//e.src = curImg;
						return;
					} {
						//clear local storage
						//console.log("cleared storage! -> "+localStorageKey);
						var localStorageKey =  location.host + "-ace-" + urlParams["SID"];
						var thisContent = "";
						localStorage.setItem(localStorageKey, thisContent);
						//reload page
						if (isNewFile == true || isUpdateFile == true) {
							var redirLink = request.responseText;
							console.log(redirLink);
							window.location.assign(redirLink);							
						} else {
							alert("Data has been updated successfully!");
							//var e = document.getElementById("saveicon");
							//e.src = curImg;
						}
						return;
					}
					return
				}

			 }
		}
		
	}
};
