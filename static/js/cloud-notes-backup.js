var db;
var ea = document.getElementById("aUser");
var eh = document.getElementById("host");
var mi = document.getElementById("MEDIA_ID");  
if (mi.value == "" || mi.value == undefined) {
	//use notesrc
	mi = document.getElementById("notesrc");
}
var customNotesMediaID = parseInt(document.getElementById("notesrc").value);
var customNotesTable = "WebKitStickyNotes_" + customNotesMediaID;   
//var dbName = eh.value +  "-" + ea.value;
var res = ea.value;
var SPL = res.split("---");
if (SPL.length == 2) {
	var dbName = eh.value +  "-" + SPL[0];
} else {
	var dbName = eh.value +  "-" + ea.value;
}

$(document).ready(function() {
	db = openDatabase(dbName, "1.0", "ULAPPH Sticky Notes"+mi.value, 200000);
	db.transaction(function(tx) {
	},dbError,function(tx) { 
	});

	function dbError(e) {
		console.dir(e);
	}

	function backup(table) {
		var def = new $.Deferred();
		db.readTransaction(function(tx) {
			tx.executeSql("select * from "+table, [], function(tx,results) {
				var data = convertResults(results);
				console.dir(data);
				def.resolve(data);
			});
		}, dbError);

		return def;
	}

	$(document).on("click", "#doBackupBtn", function(e) {
		console.log("Syncing data to cloud...");
		e.preventDefault();
		$.when(
			backup(customNotesTable)
		).then(function(notes) {
			var data = {notes:notes};
			var serializedData = JSON.stringify(data);
			saveData("TDSMEDIA-" + mi.value, serializedData);
			var g = document.getElementById("snc");
			g.innerHTML = "Ok synced to cloud!";
		});

	});
	
	$(document).on("click", "#doBackupLogoutBtn", function(e) {

		console.log("Syncing data to cloud...");
		e.preventDefault();

		$.when(
			backup(customNotesTable)
		).then(function(notes) {
			var g = document.getElementById("status");
			g.innerHTML = "<img src=\"/static/img/loading.gif\" width=\"50\" height=\"50\">";
			var data = {notes:notes};
			var serializedData = JSON.stringify(data);
			saveData("TDSMEDIA-" + mi.value, serializedData);
			//clear the local sticky notes
			console.log("Clear local notes...");
			db.transaction(function(tx)
			{
				tx.executeSql("DELETE * FROM " + customNotesTable);
				console.log("Deleted all notes!");
			});			
			//wait for 10 seconds
			setTimeout(function(){
				encryptDataAll();
				window.parent.location = "/logout?LFUNC=LOGOUT";
			}, 20000);
			
		});

	});
	
	$(document).on("click", "#doLoadBtn", function(e) {
		e.preventDefault();
		if (confirm('This will delete first all local notes, are you sure you want to proceed?')) {
			db.transaction(function(tx)
			{
				tx.executeSql("DELETE FROM " + customNotesTable);
			});
		} else {
			return;
		}
		loadCloudData(mi.value);
		console.log("Done loading notes from cloud... please manually reload cloud desktop.");
		return;
		
	});
	
	$(document).on("click", "#doDeleteBtn", function(e) {
		e.preventDefault();
		if (confirm('WARNING!!! This will delete all local notes, are you sure you want to proceed?')) {
			db.transaction(function(tx)
			{
				tx.executeSql("DELETE FROM " + customNotesTable);
			});
		} else {
			return;
		}
		console.log("Done deleting notes from local...");
		return;
		
	});

});


function convertResults(resultset) {
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

function loadCloudData(mediaID) {
	if (mediaID == "0" || mediaID == 0 || mediaID == undefined) {
		return;
	}
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
				for(var i=0; i<objJSON.notes.length; i++) {
					var note = new Note();
					note.id = objJSON.notes[i].id;
					note.desktop = objJSON.notes[i].desktop;
					note.text = objJSON.notes[i].note;
					note.timestamp = objJSON.notes[i].timestamp;
					note.left = objJSON.notes[i].left;
					note.top = objJSON.notes[i].top;
					note.zIndex = objJSON.notes[i].zindex;
					note.saveAsNew();

				}
				console.log("Notes data loaded...");
			}
			
		}
		
	}
	
};

function Note()
{
	var self = this;

	var note = document.createElement('div');
	note.className = 'note';
	note.addEventListener('mousedown', function(e) { return self.onMouseDown(e) }, false);
	note.addEventListener('click', function() { return self.onNoteClick() }, false);
	this.note = note;

	var close = document.createElement('div');
	close.className = 'closebutton';
	close.addEventListener('click', function(event) { return self.close(event) }, false);
	note.appendChild(close);

	var edit = document.createElement('div');
	edit.className = 'edit';
	edit.setAttribute('contenteditable', true);
	edit.addEventListener('keyup', function() { return self.onKeyUp() }, false);
	note.appendChild(edit);
	this.editField = edit;

	var ts = document.createElement('div');
	ts.className = 'timestamp';
	ts.addEventListener('mousedown', function(e) { return self.onMouseDown(e) }, false);
	note.appendChild(ts);
	this.lastModified = ts;

	document.body.appendChild(note);
	return this;
}

Note.prototype = {
	get id()
	{
		if (!("_id" in this))
			this._id = 0;
		return this._id;
	},

	set id(x)
	{
		this._id = x;
	},

	get text()
	{
		return this.editField.innerHTML;
	},

	set text(x)
	{
		this.editField.innerHTML = x;
	},

	get timestamp()
	{
		if (!("_timestamp" in this))
			this._timestamp = 0;
		return this._timestamp;
	},

	set timestamp(x)
	{
		if (this._timestamp == x)
			return;

		this._timestamp = x;
		var date = new Date();
		date.setTime(parseFloat(x));
		this.lastModified.textContent = modifiedString(date);
	},

	get left()
	{
		return this.note.style.left;
	},

	set left(x)
	{
		this.note.style.left = x;
	},

	get top()
	{
		return this.note.style.top;
	},

	set top(x)
	{
		this.note.style.top = x;
	},

	get zIndex()
	{
		return this.note.style.zIndex;
	},

	set zIndex(x)
	{
		this.note.style.zIndex = x;
	},

	close: function(event)
	{
		if (confirm('Are you sure you want to delete this?')) {
		} else {
			return;
		}
		this.cancelPendingSave();

		var note = this;
		db.transaction(function(tx)
		{
			tx.executeSql("DELETE FROM " + customNotesTable + " WHERE timestamp = ?", [note.timestamp]);
		});
		
		var duration = event.shiftKey ? 2 : .25;
		this.note.style.webkitTransition = '-webkit-transform ' + duration + 's ease-in, opacity ' + duration + 's ease-in';
		this.note.offsetTop; // Force style recalc
		this.note.style.webkitTransformOrigin = "0 0";
		this.note.style.webkitTransform = 'skew(30deg, 0deg) scale(0)';
		this.note.style.opacity = '0';

		var self = this;
		setTimeout(function() { document.body.removeChild(self.note) }, duration * 1000);
	},

	saveSoon: function()
	{
		this.cancelPendingSave();
		var self = this;
		this._saveTimer = setTimeout(function() { self.save() }, 200);
		
	},

	cancelPendingSave: function()
	{
		if (!("_saveTimer" in this))
			return;
		clearTimeout(this._saveTimer);
		delete this._saveTimer;
	},

	save: function()
	{
		this.cancelPendingSave();

		if ("dirty" in this) {
			this.timestamp = new Date().getTime();
			delete this.dirty;
		}

		var note = this;
		db.transaction(function (tx)
		{
			tx.executeSql("UPDATE " + customNotesTable + " SET desktop = ?, note = ?, timestamp = ?, left = ?, top = ?, zindex = ? WHERE id = ? and desktop = ?", [thisDesktop, note.text, note.timestamp, note.left, note.top, note.zIndex, note.id, thisDesktop]);
			FL_UPDATE = true;
		});
		
	},

	saveAsNew: function()
	{
		this.timestamp = new Date().getTime();
		
		var note = this;
		db.transaction(function (tx) 
		{
			tx.executeSql("INSERT INTO " + customNotesTable + " (id, desktop, note, timestamp, left, top, zindex) VALUES (?, ?, ?, ?, ?, ?, ?)", [note.id, note.desktop, note.text, note.timestamp, note.left, note.top, note.zindex]);
		}); 
	},

	onMouseDown: function(e)
	{
		captured = this;
		this.startX = e.clientX - this.note.offsetLeft;
		this.startY = e.clientY - this.note.offsetTop;
		this.zIndex = ++highestZ;

		var self = this;
		if (!("mouseMoveHandler" in this)) {
			this.mouseMoveHandler = function(e) { return self.onMouseMove(e) }
			this.mouseUpHandler = function(e) { return self.onMouseUp(e) }
		}

		document.addEventListener('mousemove', this.mouseMoveHandler, true);
		document.addEventListener('mouseup', this.mouseUpHandler, true);

		return false;
	},

	onMouseMove: function(e)
	{
		if (this != captured)
			return true;

		this.left = e.clientX - this.startX + 'px';
		this.top = e.clientY - this.startY + 'px';
		return false;
	},

	onMouseUp: function(e)
	{
		document.removeEventListener('mousemove', this.mouseMoveHandler, true);
		document.removeEventListener('mouseup', this.mouseUpHandler, true);

		this.save();
		return false;
	},

	onNoteClick: function(e)
	{
		this.editField.focus();
		getSelection().collapseToEnd();
	},

	onKeyUp: function()
	{
		this.dirty = true;
		this.saveSoon();
	},
}


function modifiedString(date)
{
	return 'Last Modified: ' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}
		
function saveData(SID, thisContent) {
	console.log("Saving data... Please wait... This may take a while.");
	
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
	notes_url = '/editor?EDIT_FUNC=GET_UP_URL&SID=' + SID;
	xmlhttp.open("POST",notes_url,true);
	xmlhttp.send();

	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var uploadURL = xmlhttp.responseText;
			var formData = new FormData();

			formData.append("EDIT_FUNC2", "SAVE_TEXT");
			formData.append("SID", SID);
			formData.append("FUNC_CODE", "UPD-FROM-EDITOR"); 

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
					console.log("notes saved ok");
					return
				}

			 }
		}
		
	}
};