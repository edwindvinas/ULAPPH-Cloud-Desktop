var aUser = document.getElementById("aUser");
var aParm = document.getElementById("parm");

var $ = document.querySelector.bind(document),
		eventName = $('#eventName'),
		currX = $('#currX'),
		currY = $('#currY'),
		distanceX = $('#distanceX'),
		distanceY = $('#distanceY'),
		test = $('#test'),
		wrapper = $('#wrapper'),
		preventDefault = function(e){e.preventDefault();},
		nookie = [
			'Oh yes!',
			'One more time!',
			'Give me more!',
			'Rock and roll baby!',
			'Yeah right there!',
			'Turn me on..',
			'&#x2665; &#x2665; &#x2665;',
			'OMG you are so good!'
			// shall I keep going?!
		];


wrapper.addEventListener('tap',updateHtml);
wrapper.addEventListener('dbltap',updateHtml);
wrapper.addEventListener('longtap',updateHtml);
wrapper.addEventListener('swipeup',updateHtml);
wrapper.addEventListener('swipedown',updateHtml);
wrapper.addEventListener('swipeleft',updateHtml);
wrapper.addEventListener('swiperight',updateHtml);
wrapper.addEventListener('touchmove',preventDefault);
wrapper.addEventListener('touchstart',preventDefault);
wrapper.addEventListener('touchend',preventDefault);
wrapper.addEventListener('mousedown',preventDefault);
wrapper.addEventListener('mouseleave',preventDefault);
wrapper.addEventListener('mousemove',preventDefault);
function updateHtml (e){

	eventName.innerHTML = e.type;
	
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	//cxhr2.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + e.type + '&PARM=' + aParm.value, true); 
	cxhr2.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + e.type, true); 
	cxhr2.send();
	 cxhr2.onreadystatechange=function()
	  {
	  if (cxhr2.readyState==4 && cxhr2.status==200)
		{
		var currVal = cxhr2.responseText;
			if (currVal != "" || currVal != undefined) {
				test.innerHTML = e.type;
			}
		}
	 }
	
	currX.innerHTML = e.x;
	currY.innerHTML = e.y;
	//test.innerHTML = nookie[~~(Math.random() * nookie.length)];
	distanceX.innerHTML = e.distance ? e.distance.x : 'undefined';
	distanceY.innerHTML = e.distance ? e.distance.y : 'undefined';

	if (/swipedown|swipeup/.test(e.type))
		test.classList.add(e.type);
	else
		wrapper.classList.add(e.type);

	setTimeout(function(){
		test.className = '';
		wrapper.className = '';
	},600);
}

function selectSite() {
	var x = document.getElementById("SITE").value;
	var s = x + '/presenter?MODE=CONTROL@888@PRESENTER_SESSION_KEY=dummy';
	//var t = x + '/tools?FUNC=WIDGET&t=RemoteControl';
	window.location.assign(s);
	//send cmd to browser
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr3c=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr3c=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	cxhr3c.open("GET","/message-channel?CHAN_FUNC=remSwitch&UID=" + aUser.value + '&SITE=' + x, true); 
	cxhr3c.send();
	return;			
};

function goBack() {
    //window.history.back();
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	//cxhr3.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + e.type + '&PARM=' + aParm.value, true); 
	cxhr3.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + "back", true); 
	cxhr3.send();
	return;
}

function prevSlide() {
    //window.history.back();
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	//cxhr3.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + e.type + '&PARM=' + aParm.value, true); 
	cxhr3.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + 'swiperight', true);
	cxhr3.send();
	return;
}

function nextSlide() {
    //window.history.back();
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	//cxhr3.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + e.type + '&PARM=' + aParm.value, true); 
	cxhr3.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + 'swipeleft', true);
	cxhr3.send();
	return;
}

function tapSlide() {
    //window.history.back();
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	//cxhr3.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + e.type + '&PARM=' + aParm.value, true); 
	cxhr3.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + 'tap', true);
	cxhr3.send();
	return;
}

function goFwd() {
    //window.history.forward();
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr4=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr4=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	//cxhr4.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + e.type + '&PARM=' + aParm.value, true); 
	cxhr4.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + "forward", true); 
	cxhr4.send();
	return;
}

function testCon() {
    //window.history.forward();
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr4=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr4=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	//cxhr4.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + e.type + '&PARM=' + aParm.value, true); 
	cxhr4.open("GET","/message-channel?CHAN_FUNC=sendChannel&UID=" + aUser.value + '&message=@888@ULAPPH-SYS-UPD@888@' + "testCon", true); 
	cxhr4.send();
	return;
}