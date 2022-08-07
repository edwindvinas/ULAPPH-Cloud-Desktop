function copyToUWM(type, link, title, mid) {
	var e = document.getElementById("slides-area");
	var currHTML = e.innerHTML;
	
	var link2 = link.replace("http://", "https://");
	
	e.innerHTML = currHTML + "&lt;!--" + title + "--&gt;" + "<br>" + "&lt;input type=\"hidden\" value=\"'" + link2 + "', 500, 300, 'left', 'top', {title: '" + title + "', icon: '/static/img/jswm-web.png'}\" size=\"60\" id=\"" + "ulapph-" + mid + "\" /&gt;&lt;script type=\"text/javascript\"&gt;eval('windowManager.openURI(' + $('" + "ulapph-" + mid + "').value + ');');&lt;/script&gt;" + "<br>" + "<br>";
	
	var res = mid.split("-");
	
	var strs = 'iurl_' + res[1] + 's';
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