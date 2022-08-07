function loadurl(dest,objnev)
{

	document.getElementById(objnev).innerHTML = "Processing...";

	try { xmlhttp = window.XMLHttpRequest?new XMLHttpRequest(): new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
	xmlhttp.onreadystatechange = function() {triggered(objnev)};

	xmlhttp.open("GET", dest);
	xmlhttp.send(null);
}

function triggered(objnev)
{
	if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) { document.getElementById(objnev).innerHTML = xmlhttp.responseText; }
}