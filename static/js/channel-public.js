//trigger ads & contents random
var FL_CONTENT_OK = false;
var CTR_RAND_CON = 0;
var totItems = 0;
var pran = 1;

//parse URL values
var urlParams;
var match,
		pl     = /\+/g,  // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query  = window.location.search.substring(1);

urlParams = {};
while (match = search.exec(query))
   urlParams[decode(match[1])] = decode(match[2]);

if (urlParams["disp"] == "w") {
	//randomly display any of the tiles
	setElements();
	window.setInterval(function(){
		var nran = getRan();
		var y = document.getElementById("si"+nran);
		y.scrollIntoView();
	}, 120000);
}
//} else {
	//dispSessions();
	//dispChatHelp();
	//setInterval(function(){dispAds()}, 60000);	
//}
if (urlParams["disp"] == "") {
	dispSessions();
}

function setElements() {
  var divs = document.getElementsByClassName("single_item");
  for(var i = 0; i < divs.length; i++){
	//set div ids
	divs[i].setAttribute('id', 'si'+i);
	//assign onclick
	var links = divs[i].getElementsByTagName('a');
	if (links.length > 0) {
		var link = divs[i].getElementsByTagName('a')[0].href;
		links[0].addEventListener("click", 
			function (event) {
				event.preventDefault();
				openUWMwidget(this.href);
			}, 
			false);
			
		links[1].addEventListener("click", 
			function (event) {
				event.preventDefault();
				openUWMwidget(this.href);
			}, 
			false);
	}
	totItems++;
  }
  totItems = totItems - 1;
}

function openUWMwidget(url) {
	var root = location.protocol + '//' + location.host;
	//console.log("clicked link: "+url);
	parent.postMessage(url,root);
}
	
function getRan() {
for (i = 0; i < 100; i++) { 
  var ran = Math.floor(Math.random() * totItems) + 0;
  if (ran != pran && ran != -1) {
	i=101;
	pran = ran;
	return ran;
	break;
  }
}
}
	  
function dispAds() {
	if (CTR_RAND_CON <= 50) {
		
		if (CTR_RAND_CON == 0 || CTR_RAND_CON == 5 || CTR_RAND_CON == 10) {
			//display chat help
			//dispChatHelp();
		}
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject('MSXML2.XMLHTTP.3.0');
		  }

		//alertify.set({ delay: 5000 });

		var ads_url = "";
		if (FL_CONTENT_OK == false) {
			ads_url = '/rcg?m=sing&q=' + "desktop0" + '&n=' + 1;
			FL_CONTENT_OK = true;
		} else {
			ads_url = '/rag?f=slides&d=' + "desktop0" + '&n=' + 1;
			FL_CONTENT_OK = false;
		}
		xmlhttp.open("GET",ads_url,true);
		xmlhttp.send();

		 xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var currVal = xmlhttp.responseText;
				if (currVal != "") {
					//alertify.log(currVal, "", 0);
					alertifyThis(currVal);
					CTR_RAND_CON = CTR_RAND_CON + 1; 
					return
				}
			return
			}
		 }
		 return;
	 }
};

/* function dispChatHelp() {
	var ch = document.getElementById("chatHelp");
	innerHTML = "<a href='" + ch.value + "' target='chatsup'><img src='/static/img/chat.png' width=100 height=100></img><br>Chat with website owner!</a>";
	alertifyThis(innerHTML);
	CTR_RAND_CON = CTR_RAND_CON + 1; 
	return;
} */

function dispSessions() {
	var url = "/directory?DIR_FUNC=sessions";
	alertify.set({ delay: 600000 });
	alertify.log("<iframe src=\"" + url + "\" frameborder=\"0\" scrolling=\"yes\" allowtransparency=\"true\" height=\"300px\"></iframe>");
	return;
}

function alertifyThis(message) {
	alertify.set({ delay: 50000 });
	alertify.log(message);
	return;
};

