//save the notes in local every x seconds
var isLocal = document.getElementById("isLocal");
if (isLocal.value == "true" || isLocal.value == true) {
	consoleLogger("Triggered setInterval for regular saving notes...");
	alertify.log("Triggered setInterval for regular saving notes...");
	setInterval(function(){ regularSaveNotes()}, 60000);
}
function regularSaveNotes() {
	consoleLogger("regularSaveNotes()");
	if (localStorage["ready-notes-local-json"+thisDesktop] == "" || localStorage["ready-notes-local-json"+thisDesktop] == "N") {
		return;
	}
	consoleLogger("Regular saving notes...");
	db.readTransaction(function(tx) {
		tx.executeSql("select * from " + customNotesTable + " WHERE desktop = ?", [thisDesktop], function(tx,results) {
			var data = convertResults(results);
			consoleLogger(data);
			//def.resolve(data);
			var dataN = {notes:data};
			var serializedData = JSON.stringify(dataN);
			localStorage["notes-local-json"+thisDesktop] = serializedData;
			consoleLogger("Saved notes to LS...");				
		});
	}, dbError);
}
function dbError(e) {
	consoleLogger(e);
}
function convertResults(resultset) {
	consoleLogger("convertResults()");
	var results = [];
	for(var i=0,len=resultset.rows.length;i<len;i++) {
		var row = resultset.rows.item(i);
		var result = {};
		for(var key in row) {
			result[key] = row[key];
		}
		results.push(result);
	}
	return results;
}
//function loadCloudData(mediaID) {
function loadCloudData() {
	console.log("loadCloudData()");
	var mediaID = parseInt(document.getElementById("notesrc").value);
	consoleLogger("mediaID: "+mediaID);
	if (mediaID == "0" || mediaID == 0 || mediaID == undefined) {
		return;
	}
	//current desktop
	var deskID = document.getElementById("desktop").value;
	consoleLogger("deskID: "+deskID);
	if (deskID != "uwm") {
		return;
	}
					
	consoleLogger("Loading data... Please wait... This may take a while.");
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	var notes_url = "";
	notes_url = '/media?FUNC_CODE=RAWJSON&MEDIA_ID=' + mediaID + '&SID=TDSMEDIA-' + mediaID;
	xmlhttp.open("POST",notes_url,true);
	xmlhttp.send();

	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			if (xmlhttp.responseText != "") {
				var objJSON = JSON.parse(xmlhttp.responseText);
				consoleLogger("objJSON: "+objJSON);
				for(var i=0; i<objJSON.notes.length; i++) {
					var curDesk = objJSON.notes[i].desktop;
					consoleLogger("curDesk: "+curDesk);
					localStorage['highestId' + curDesk] = objJSON.notes[i].id;
					localStorage['highestZ-' + curDesk] = objJSON.notes[i].zindex;
					var note = new Note();
					//note.id = objJSON.notes[i].id;
					noteCtr = noteCtr + 1;
					note.id = noteCtr;
					localStorage['highestId' + thisDesktop] = objJSON.notes[i].id;
					note.desktop = objJSON.notes[i].desktop;
					//note.text = objJSON.notes[i].note;
					var oNote = objJSON.notes[i].note;
					//if text contains !!! means important note
					var mNote = oNote.replace("!!!", "<img src='/static/img/top.png'>");
					mNote = mNote.replace("iii", "<img src='/static/img/in-progress.gif'>");
					mNote = mNote.replace("ddd", "<img src='/static/img/done.png'>");
					mNote = mNote.replace("hhh", "<img src='/static/img/heart.png'>");
					mNote = mNote.replace("ppp", "<img src='/static/img/idea.png'>");
					mNote = mNote.replace("mmm", "<img src='/static/img/money.png'>");
					mNote = mNote.replace("fff", "<img src='/static/img/people.png'>");
					mNote = mNote.replace("ttt", "<img src='/static/img/plane.png'>");
					mNote = mNote.replace("ccc", "<img src='/static/img/car.png'>");
					note.text = mNote;
					note.timestamp = objJSON.notes[i].timestamp;
					note.left = objJSON.notes[i].left;
					note.top = objJSON.notes[i].top;
					note.zIndex = objJSON.notes[i].zindex;
					localStorage['highestZ-' + thisDesktop] = note.zIndex;
					note.saveAsNew();
					consoleLogger("Loaded note: "+note.desktop+"-"+note.id);
					consoleLogger(note);
				}
				consoleLogger("Notes data processed: "+objJSON.notes.length);
			}
			
		}
		
	}
	
};
