function winOnOff() {
	var e = document.getElementById("eyeFlag");
	var res = e.src;
	var winStat = false;
	//alertify.error(thisSoundSrc);
	var n = res.indexOf("/static/img/jswm-shide2.png");
	if (n > 0) {
		winStat = true;
	} else {
		winStat = false;
	}
	
	switch (winStat) {
		case true:
			windowManager.hideAll();
			//alertify.error("UWM Windows have been adjusted.");
			e.src = "/static/img/jswm-shide.png";
			document.getElementById("winStat").value = "off";
			break;
		case false:
			//windowManager.showAll();
			windowManager.tile();
			//alertify.error("UWM Windows have been shown.");
			e.src = "/static/img/jswm-shide2.png";
			document.getElementById("winStat").value = "on";
			break;

	}
	return;
};

function uwmOnOff() {
	var e = document.getElementById("uwmFlag");
	var res = e.src;
	var uwmStat = false;
	//alertify.error(thisSoundSrc);
	var n = res.indexOf("/static/img/uwm_plus.png");
	if (n > 0) {
		uwmStat = true;
	} else {
		uwmStat = false;
	}
	
	switch (uwmStat) {
		case true:
			windowManager.expandAll();
			//alertify.error("UWM Windows have been expanded.");
			e.src = "/static/img/uwm_minus.png";
			document.getElementById("uwmStat").value = "on";
			break;
		case false:
			windowManager.collapseAll();
			//alertify.error("UWM Windows have been collapsed.");
			e.src = "/static/img/uwm_plus.png";
			document.getElementById("uwmStat").value = "off";
			break;

	}
	return;
};

function uwmArrWin() {
	var e = document.getElementById("uwmArrStat");
	
	switch (e.value) {
		case "cascade":
			windowManager.tile();
			//alertify.error("UWM Windows have been tiled.");
			e.src = "/static/img/cascade.png";
			document.getElementById("uwmArrStat").value = "tile";
			break;
		case "tile":
			windowManager.cascade();
			//alertify.error("UWM Windows have been cascaded.");
			e.src = "/static/img/tile.png";
			document.getElementById("uwmArrStat").value = "cascade";
			break;

	}
	return;
};

function reload() {
	window.location.reload(true);
	return;
}		

function keyOnOff() {
	var e = document.getElementById("keyStat");
	
	switch (e.value) {
		case "on":
			removeEventListeners();
			alertify.error("Key events disabled.");
			document.getElementById("keyStat").value = "off";
			break;
		case "off":
			addEventListeners();
			alertify.error("Key events enabled.");
			document.getElementById("keyStat").value = "on";
			break;

	}
	return;
};


function uwmQuickSearch() {
	var idxContent = "";
	if(typeof(Storage) !== "undefined") {
		idxContent = localStorage.searchStorage;
		if (idxContent != "" && idxContent != undefined) {
			console.log("get from storage");
			var tgt2 = 'Quick Search';
			var jswmstr = "'" + "LS" + "', 800, 500, 'left', 'top', {title: '" + tgt2 + "', icon: '/static/img/jswm-web.png'}";
			eval('windowManager.openDOC(' + jswmstr + ');');
		}
	} else {
		//alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		//return
	}

	if (idxContent == "" || idxContent == undefined) {
		console.log("open minibrowser");
		var tgt = '/tools?FUNC=WIDGET&t=MiniBrowserGet';
		var tgt2 = 'ULAPPH Quick Search';
		var jswmstr = "'" + tgt + "', 800, 500, 'left', 'top', {title: '" + tgt2 + "', icon: '/static/img/jswm-web.png'}";
		eval('windowManager.openURI(' + jswmstr + ');');
	}
	
	var aSound = document.createElement('audio');
	var root = location.protocol + '//' + location.host;
	
	if (isEdge == true || isIE == true) {
		soundManager.createSound({
			id: 'waterQ',
			volume: 75,
			url: root + "/static/audio/water-drop.mp3"
		});
		playSound('waterQ');
	} else {
		soundManager.createSound({
			id: 'waterQ',
			volume: 75,
			url: root + "/static/audio/water-drop.ogg"
		});
		playSound('waterQ');
	}
	return;
};

function uwmStartSearch() {
	var idxContent = "";
	if(typeof(Storage) !== "undefined") {
		idxContent = localStorage.startStorage;
		if (idxContent != "" && idxContent != undefined) {
			console.log("get from storage");
			var tgt2 = 'ULAPPH Start Menu';
			var jswmstr = "'" + "LS" + "', 800, 500, 'left', 'top', {title: '" + tgt2 + "', icon: '/static/img/jswm-web.png'}";
			eval('windowManager.openST(' + jswmstr + ');');
		}
	} else {
		//alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		//return
	}

	if (idxContent == "" || idxContent == undefined) {
		console.log("open minibrowser");
		var tgt = '/tools?FUNC=WIDGET&t=ULAPPHStart';
		var tgt2 = 'ULAPPH Start Menu';
		var jswmstr = "'" + tgt + "', 800, 500, 'left', 'top', {title: '" + tgt2 + "', icon: '/static/img/jswm-web.png'}";
		eval('windowManager.openURI(' + jswmstr + ');');
	}

    console.log("open minibrowser");
    var tgt = '/tools?FUNC=WIDGET&t=ULAPPHStart';
    var tgt2 = 'ULAPPH Start Menu';
    var jswmstr = "'" + tgt + "', 800, 500, 'left', 'top', {title: '" + tgt2 + "', icon: '/static/img/jswm-web.png'}";
    eval('windowManager.openURI(' + jswmstr + ');');
	
	var aSound = document.createElement('audio');
	var root = location.protocol + '//' + location.host;
	
	if (isEdge == true || isIE == true) {
		soundManager.createSound({
			id: 'waterQ',
			volume: 75,
			url: root + "/static/audio/water-drop.mp3"
		});
		playSound('waterQ');
	} else {
		soundManager.createSound({
			id: 'waterQ',
			volume: 75,
			url: root + "/static/audio/water-drop.ogg"
		});
		playSound('waterQ');
	}
	return;
};