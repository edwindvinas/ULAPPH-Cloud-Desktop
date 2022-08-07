function showHideAll() {
	var divs = document.getElementsByTagName("div");
	for(var i = 0; i < divs.length; i++){
	   var iName = divs[i].id;
	   var x = document.getElementById(iName);
	   if (iName.indexOf("tem_") > 0) {
		if (x.style.display === 'none') {
			x.style.display = 'block';
		} else {
			x.style.display = 'none';
		}
	   }
	}
}
function showHide(mydiv) {
    var x = document.getElementById(mydiv);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

