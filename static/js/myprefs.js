function saveAll() {
	var e = document.getElementById("COLOR1");
	var thisColor = e.value;
	thisColor = thisColor.replace("#", "");
	console.log(thisColor);
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }

	var urlStr = '/people-edit?EditPeopleFunc=SetStartMenuTheme' + '&COLOR1=' + thisColor;
	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			//alert("Color saved!");
			//document.getElementById("color1").style.backgroundColor = '#' + thisColor;
			
		}
	};
	
	var e = document.getElementById("COLOR2");
	var thisColor = e.value;
	thisColor = thisColor.replace("#", "");
	console.log(thisColor);
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	var urlStr = '/people-edit?EditPeopleFunc=SetActiveWindowsTheme' + '&COLOR2=' + thisColor;
	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			//alert("Color saved!");
			//document.getElementById("color2").style.backgroundColor = '#' + thisColor;
			
		}
	};
	
	var e = document.getElementById("COLOR3");
	var thisColor = e.value;
	thisColor = thisColor.replace("#", "");
	console.log(thisColor);
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }

	var urlStr = '/people-edit?EditPeopleFunc=SetInActiveWindowsTheme' + '&COLOR3=' + thisColor;
	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			//alert("Color saved!");
			//document.getElementById("color3").style.backgroundColor = '#' + thisColor;
			
		}
	};
	
	//alert("Colors saved! Kindly reload desktop so the colors will take effect.");
	return;
}

function saveAllTheme() {
	var e = document.getElementById("THEME");
	var tc = e.value;
	var colors = tc.split(',');
	
	var thisColor = colors[0];
	console.log(thisColor);
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }

	var urlStr = '/people-edit?EditPeopleFunc=SetStartMenuTheme' + '&COLOR1=' + thisColor;
	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			//alert("Color saved!");
			//document.getElementById("color1").style.backgroundColor = '#' + thisColor;
		}
	};

	$("#color1").spectrum({
		color: '#' + thisColor,
		showInput: true,
		className: "full-spectrum",
		showInitial: true,
		showPalette: true,
		showSelectionPalette: true,
		maxSelectionSize: 10,
		preferredFormat: "hex",
		localStorageKey: "spectrum.demo",
		move: function (color) {
			
		},
		show: function () {
		
		},
		beforeShow: function () {
		
		},
		hide: function () {
		
		},
		change: function(color) {
			//$("#full-log").text("change called: " + color.toHexString());
			//document.getElementById("color1").value = color.toHexString();
			console.log(color.toHexString());
			var thisColor = color.toHexString();
			thisColor = thisColor.replace("#", "");
			console.log(thisColor);
			if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
			  xhr3=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
			  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
			  }

			var urlStr = '/people-edit?EditPeopleFunc=SetStartMenuTheme' + '&COLOR1=' + thisColor;
			xhr3.open("POST",urlStr, true); 
			xhr3.send();
			xhr3.onreadystatechange = function(){
			  if (xhr3.readyState==4 && xhr3.status==200)
				{   
					alert("Color adjusted & saved!");
					//document.getElementById("color1").style.backgroundColor = '#' + thisColor;
					
				}
			};
		},
		palette: [
			["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
			"rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
			["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
			"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
			["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
			"rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
			"rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
			"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
			"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
			"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
			"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
			"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
			"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
			"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
		]
	});	

	
	thisColor = colors[1];
	console.log(thisColor);
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
	var urlStr = '/people-edit?EditPeopleFunc=SetActiveWindowsTheme' + '&COLOR2=' + thisColor;
	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			//alert("Color saved!");
			//document.getElementById("color2").style.backgroundColor = '#' + thisColor;
			
		}
	};
	
	$("#color2").spectrum({
		color: '#' + thisColor,
		showInput: true,
		className: "full-spectrum",
		showInitial: true,
		showPalette: true,
		showSelectionPalette: true,
		maxSelectionSize: 10,
		preferredFormat: "hex",
		localStorageKey: "spectrum.demo",
		move: function (color) {
			
		},
		show: function () {
		
		},
		beforeShow: function () {
		
		},
		hide: function () {
		
		},
		change: function(color) {
			//$("#full-log").text("change called: " + color.toHexString());
			//document.getElementById("color2").value = color.toHexString();
			console.log(color.toHexString());
			var thisColor = color.toHexString();
			thisColor = thisColor.replace("#", "");
			console.log(thisColor);
			if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
			  xhr3=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
			  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
			  }
			var urlStr = '/people-edit?EditPeopleFunc=SetActiveWindowsTheme' + '&COLOR2=' + thisColor;
			xhr3.open("POST",urlStr, true); 
			xhr3.send();
			xhr3.onreadystatechange = function(){
			  if (xhr3.readyState==4 && xhr3.status==200)
				{   
					alert("Color adjusted & saved!");
					//document.getElementById("color2").style.backgroundColor = '#' + thisColor;
					
				}
			};
		},
		palette: [
			["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
			"rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
			["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
			"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
			["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
			"rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
			"rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
			"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
			"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
			"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
			"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
			"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
			"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
			"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
		]
	});
	
	thisColor = colors[2];
	console.log(thisColor);
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }

	var urlStr = '/people-edit?EditPeopleFunc=SetInActiveWindowsTheme' + '&COLOR3=' + thisColor;
	xhr3.open("POST",urlStr, true); 
	xhr3.send();
	xhr3.onreadystatechange = function(){
	  if (xhr3.readyState==4 && xhr3.status==200)
		{   
			//alert("Color saved!");
			//document.getElementById("color3").style.backgroundColor = '#' + thisColor;
			
		}
	};
	
	$("#color3").spectrum({
		color: '#' + thisColor,
		showInput: true,
		className: "full-spectrum",
		showInitial: true,
		showPalette: true,
		showSelectionPalette: true,
		maxSelectionSize: 10,
		preferredFormat: "hex",
		localStorageKey: "spectrum.demo",
		move: function (color) {
			
		},
		show: function () {
		
		},
		beforeShow: function () {
		
		},
		hide: function () {
		
		},
		change: function(color) {
			//$("#full-log").text("change called: " + color.toHexString());
			//document.getElementById("color3").value = color.toHexString();
			console.log(color.toHexString());
			var thisColor = color.toHexString();
			thisColor = thisColor.replace("#", "");
			console.log(thisColor);
			if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
			  xhr3=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
			  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
			  }

			var urlStr = '/people-edit?EditPeopleFunc=SetInActiveWindowsTheme' + '&COLOR3=' + thisColor;
			xhr3.open("POST",urlStr, true); 
			xhr3.send();
			xhr3.onreadystatechange = function(){
			  if (xhr3.readyState==4 && xhr3.status==200)
				{   
					alert("Color adjusted & saved!");
					//document.getElementById("color3").style.backgroundColor = '#' + thisColor;
					
				}
			};
		},
		palette: [
			["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
			"rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
			["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
			"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
			["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
			"rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
			"rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
			"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
			"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
			"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
			"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
			"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
			"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
			"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
		]
	});
	
	//alert("Colors saved! Kindly reload desktop so the colors will take effect.");
	return;
}

function saveMenuColor() {
	saveAll();
	return;
};


function saveActiveWinColor() {
	saveAll();
	return;
};

function saveInActiveWinColor() {
	saveAll();
	return;
};
