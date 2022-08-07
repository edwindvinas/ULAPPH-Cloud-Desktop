function ULAPPH_UPD_DOCK_P(prevDock){
	
	var xmlhttp;
	var origDock = document.getElementById("udock").innerHTML;
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  
	var docker_url = "";
	var desktop = document.getElementById("desktop").value;
	var aUser = document.getElementById("aUser").value;
	var tok = document.getElementById("tok").value;
	var mode = document.getElementById("mode").value;
	docker_url = '/settings-display-screen?dockIcons=UpdateDock&fromIcons=P&dockTarget=' + prevDock + '&desktop-name=' + desktop + '&aUser=' + aUser + '&tok=' + tok;
	xmlhttp.open("GET",docker_url,true);
	document.getElementById("udock").innerHTML = "<img src=\"/static/img/loading.gif\" alt=\"Slides\" height=\"60\" width=\"60\"/>";
	xmlhttp.send();
	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		var currDockValue = xmlhttp.responseText;
			if (currDockValue != "") {
				var d = currDockValue.indexOf("U00155]ERROR");
				if (d > 0) {
					if (mode != "guest") {
						alertify.set({ delay: 10000 });
						alertify.error(currDockValue, "", 0);
					} else {
						alertify.set({ delay: 10000 });
						alertify.error('Please <a href="/?q=login&LFUNC=GOOGLE">register</a> to customize your own dock icons.', "", 0);						
					}
					document.getElementById("udock").innerHTML = origDock;
					soundNow();	
				} else {
					document.getElementById("udock").innerHTML = "";
					var str = currDockValue;
					var res = str.split("£££&&&***!!!");
					alertify.set({ delay: 3000 });
					alertify.success(res[1], "", 0);
					soundNow();
					document.getElementById("udock").innerHTML = res[0];					
				}
			} else {
				document.getElementById("udock").innerHTML = "<div class=\"error2\">[J00155]Error retrieving desktop icons. Please go to <a href=\"/settings\">Settings</a> to setup new desktop icons.</div>";
			}
		return
		}
	 }

}

function ULAPPH_UPD_DOCK_N(nextDock){
	
	var xmlhttp;
	var origDock = document.getElementById("udock").innerHTML;
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  
	var docker_url = "";
	var desktop = document.getElementById("desktop").value;
	var aUser = document.getElementById("aUser").value;
	var tok = document.getElementById("tok").value;
	var mode = document.getElementById("mode").value;
	docker_url = '/settings-display-screen?dockIcons=UpdateDock&fromIcons=N&dockTarget=' + nextDock + '&desktop-name=' + desktop + '&aUser=' + aUser + '&tok=' + tok;
	xmlhttp.open("GET",docker_url,true);
	document.getElementById("udock").innerHTML = "<img src=\"/static/img/loading.gif\" alt=\"Slides\" height=\"60\" width=\"60\"/>";
	xmlhttp.send();
	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		var currDockValue = xmlhttp.responseText;
			if (currDockValue != "") {
				var d = currDockValue.indexOf("U00155]ERROR");
				if (d >= 0) {
					if (mode != "guest") {
						alertify.set({ delay: 10000 });
						alertify.error(currDockValue, "", 0);
					} else {
						alertify.set({ delay: 10000 });
						alertify.error('Please <a href="/?q=login&LFUNC=GOOGLE">register</a> to customize your own dock icons.', "", 0);						
					}
					document.getElementById("udock").innerHTML = origDock;
					soundNow();	
				} else {
					document.getElementById("udock").innerHTML = "";
					var str = currDockValue;
					var res = str.split("£££&&&***!!!");
					alertify.set({ delay: 3000 });
					alertify.success(res[1], "", 0);
					soundNow();
					document.getElementById("udock").innerHTML = res[0];
				}
			} else {
				document.getElementById("udock").innerHTML = "<div class=\"error2\">Error retrieving desktop icons. Please go to <a href=\"/settings\">Settings</a> to setup new desktop icons.</div>";
			}
		return
		}
	 }

}

function soundNow() {
	
	var aSound = document.createElement('audio');

	soundManager.createSound({
		id: 'mySound2',
		url: "http://www.galaxyfaraway.com/Sounds/R2D2e.wav"
	});

	soundManager.play('mySound2');
	
};
