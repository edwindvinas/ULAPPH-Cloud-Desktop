function copyToClipboard(element) {
	
	var e = document.getElementById("slides-area");
	var currHTML = e.innerHTML;
		
	var $temp = $("<input>");
	$("body").append($temp);

	//var str = "       Hello World!        ";
	var str = $(element).text();
	var strs = element + 's';
	var res = strs.replace("#", "");
	document.getElementById(res).innerHTML = "<font color=red><b>OK</b></font>";
	//alert(str.trim());

	//$temp.val($(element).text()).select();
	if (str.indexOf("lh3.googleusercontent.com")) {
		$temp.val(str.trim()+"=s1000").select();
	} else {
		$temp.val(str.trim()).select();
	}

	document.execCommand("copy");
	e.innerHTML = currHTML + "<br>" + str.trim() + "<br>";	
	$temp.remove();
}