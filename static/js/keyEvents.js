addEventListeners();

function handleBodyKeyDown(event) {
  // If we're in a code element, only handle pgup/down.
  var inCode = event.target.classList.contains("code");

  switch (event.keyCode) {
	case 191: //forward slash key
		console.log("forward slash key");
		dispSearch();
		event.preventDefault();
		break;
		
	case 222: //sharp key
		console.log("sharp key");
		uwmArrWin();
		event.preventDefault();
		break;
		
	case 187: //plus key
		console.log("plus key");
		uwmOnOff();
		event.preventDefault();
		break;
		
	case 189: //minus key
		console.log("minus key");
		uwmOnOff();
		event.preventDefault();
		break;
		
	case 40: //down arrow key
		console.log("down arrow key");
		if (localStorage[root+"news"] == "on") {
			//selectRandomDesktop();
			topicSetter();
		} else if (localStorage[root+'isStreaming'] == 'Y') {
			scanCctvStream("O");
		} else {
			nextWp();
		}
		event.preventDefault();
		break;
		
	case 39: //right arrow key
		//nextWp();
		console.log("right arrow key");
		if (localStorage[root+"news"] == "on") {
			stopTalking();
			funcshow();
		} else if (localStorage[root+'isStreaming'] == 'Y') {
			scanCctvStream("R");
		} else {
			nextWp();
		}
		event.preventDefault();
		break;

	case 38: //up arrow key
		console.log("up arrow key");
		if (localStorage[root+"news"] == "on") {
			//selectRandomDesktop();
			topicSetter();
		} else if (localStorage[root+'isStreaming'] == 'Y') {
			scanCctvStream("C");
		} else {
			nextWp();
		}
		event.preventDefault();
		break;
		
	case 37: //left arrow key
		//prevWp();
		console.log("left arrow key");
		if (localStorage[root+"news"] == "on") {
			stopTalking();
			funcshow();
		} else if (localStorage[root+'isStreaming'] == 'Y') {
			scanCctvStream("L");
		} else {
			nextWp();
		}
		event.preventDefault();
		break;
		
	case 32: //space key
		console.log("space key");
		//musicOnOff();
        var element = document.getElementById("page");
        element.scrollIntoView();
		event.preventDefault();
		break;
		
	case 9: //tab key
		console.log("tab key");
		winOnOff();
		//stop AI speech
		stopTalking();
		event.preventDefault();
		break;
		
	case 27: //escape key
		console.log("escape key");
		uwmQuickSearch();
		event.preventDefault();
		break;

  }
};

function addEventListeners() {
  document.addEventListener('keydown', handleBodyKeyDown, false);
};

function removeEventListeners() {
  document.removeEventListener('keydown', handleBodyKeyDown, false);
};

function dispSearch() {

	//var url = "/tools?t=QUICK_SEARCH";
	//var url = "https://console.dialogflow.com/api-client/demo/embedded/d601df4c-e725-459a-a030-9885e225388c";
	var url = "";
	var aUser = document.getElementById("aUser").value;
	var sa = aUser.indexOf("---");
	var UID = "";
	if (sa > 0) {
		var SPS = aUser.split("---");
		UID = SPS[0];
	} else {
		UID = aUser;
	}
	if (urlParams["u"] != "") {
		url = "/chat-bubble/ulapphbot.html"+"?u="+urlParams["u"] +"&UID="+UID;
	} else {
		url = "/chat-bubble/ulapphbot.html"+"?UID="+UID;
	}
	//alertify.set({ delay: 59000 });
	//alertify.set({ delay: 300000 });
	alertify.set({ delay: 21600000 });
    alertify.log("<iframe src=\"" + url + "\" frameborder=\"0\" scrolling=\"yes\" allowtransparency=\"true\" height=\"400px\"></iframe>");
	
}
