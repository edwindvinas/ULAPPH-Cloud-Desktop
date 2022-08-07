//D0090
var dUwm = document.getElementById("desktop");
var isMobile = document.getElementById("isMobile").value;
var speechRecog = document.getElementById("speechRecog");
// limit number of unknown intents
var sorryCounter = 0;
//holds watson orch details
var watsonID = "";
var ottoJS = "";
consoleLogger("Desktop:", dUwm.value);
//if (annyang && dUwm.value == "uwm") {
if (annyang) {
	alertify.log("Loading annyang...");
    // Set annyang in debug mode
    annyang.debug();

    // Let's define a command.
    var commands = {
        //'hello': function() { consoleLogger('Hello world!'); }
        'info': infoWorld,
        'hello': helloWorld,
        'hi': hiWorld,
		'timezone': worldtimeBuddy,
		'battery': showBatteryStatus,
		'battery status': showBatteryStatus,
		'tips': showTips,
		'story': showStory,
		'tell me a story': showStory,
        'start dictation': dictationStart,
        'stop dictation': dictationSave,
        'save dictation': dictationSave,
		'capture': cctvCapture,
		'cctv capture': cctvCapture,
        'cctv stream': cctvStream,
		'cctv review': cctvReview,
		'cctv latest': cctvLatest,
		'cctv oldest': cctvOldest,
		'news live stream': newsLiveStream,
        'news': newsStream,
		'stop news': newsStream,
        'start news': newsStream,
		'next news': funcshow,
		'global news': newsGlobal,
        'show news *sid': funcSetTopic,
        'show topic *sid': funcSetTopic,
        'cancel': stopTalking,
        'stop talking': stopTalking,
        'quiet': setQuietMode,
        'quiet on': setQuietMode,
        'quiet off': setQuietMode,
		'note': newNote,
		'sticky note': newNote,
		'new note': newNote,
		'new desktop': newUWM,
    };

    // Add our commands to annyang
	alertify.log("Loading commands...");
    annyang.addCommands(commands);
	// Start listening, don't restart automatically, stop recognition after first phrase recognized
	annyang.start({ autoRestart: false, continuous: false });

    // Tell KITT to communicate with annyang
	alertify.log("Loading speechkitt...");
    SpeechKITT.annyang();

    // Define KITT's style
	alertify.log("Loading css...");
    var root = location.protocol + '//' + location.host;
    SpeechKITT.setStylesheet(root + '/static/lib/css/speechkitt/themes/flat.css');

	//Disable listen mode
	//setInactiveListener();
	//SpeechKITT.abortRecognition();
    // Add instructional texts
    //SpeechKITT.setInstructionsText('Talk...');
    //SpeechKITT.setSampleCommands(['ULAPPH', 'Cloud Desktop']);
	//say initial hello
	//alertify.log("Testing hello world...");
	//helloWorld();

    // If user clicks start button, remember his choice for 1 minute
    SpeechKITT.rememberStatus(1);

    // Render KITT's interface
    SpeechKITT.vroom();
	
	//localStorage[root + 'quite-flag'] = "off";
	localStorage[root + 'activelistener'] = 'on';
	localStorage[root + 'speakingNow'] = 'N';
	localStorage[root+'localspeak'] = 'N';
	
	alertify.log("Speech components loaded...");
	//load shortcuts
	alertify.set({
		delay: 120000
	});
	alertify.success("Welcome to Ulapph! For best experience, please use Chrome. <a href='https://github.com/edwindvinas/ULAPPH-Cloud-Desktop' target='welcome'>More info...</a>");
	
	if (speechRecog.value == "true" || speechRecog.value == true) {
		alertify.error("Speech Recognition is turned on. You can <a href='#' onClick=\"setQuietMode();return false;\">turn it off</a>.");
	} else {
		alertify.error("Speech Recognition is turned off. You can <a href='#' onClick=\"setQuietMode();return false;\">turn it on</a>.");
	}
	alertify.error("<a href='#' onClick=\"speak();return false;\" title=\"Click to test/enable speech\"><img src=\"/static/img/tts.png\" width=100 height=100></img></a>.");
	
	alertify.success("To share your camera, please select: <a href='#' onClick=\"openCameraS();return false;\">Small Camera</a> | <a href='#' onClick=\"openCameraB();return false;\">Big Camera</a>");
	alertify.success("To open predefined shortcuts: <a href='#' onClick=\"loadShortcuts();return false;\">Open Shortcuts</a>");
	//alertify.log("I'm an AI chatbot! Say hello or good morning or good afternoon or good evening to start the conversation. Have a nice day ahead!");
	alertify.success("To install required Chrome extensions: <a href='#' onClick=\"showExtensions();return false;\">list extensions</a>.");
	//
	//
	var isMobile = document.getElementById("isMobile").value;
	//force flag
	isMobile = "true";
	if (isMobile == "false") {
		openWindow('https://www.google.com','Search Google');
		openWindow('https://www.bing.com','Search Bing');
		openWindow('https://www.baidu.com','Search Baidu');
		openWindow('https://www2.bible.com/bible/111/GEN.1.NIV?show_audio=1','Holy Bible');
		var YID_Windows = ["ZbZSe6N_BXs","c2NmyoXBXmE","EtH9Yllzjcc","DKxCvAc-DvU","2mlZFar2iLA","rZ6YJFfjxrM"];
		shuffle(YID_Windows);
		var randomnumber = Math.floor(Math.random() * (YID_Windows.length - 3 + 1)) + 1;
		var thisItem = YID_Windows[randomnumber];
		if (thisItem == undefined || thisItem == "") {
			thisItem = "c2NmyoXBXmE";
		}
		var thisLink = "https://www.youtube.com/embed/" + thisItem + "?rel=0&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
		openWindow(thisLink, "Youtube");
		//
		alertify.error("To close Ulapph windows: <a href='#' onClick=\"clearWindows();return false;\">Close Windows</a>");
		//
		//
		//uwmArrWin();
		//
		winOnOff();
	}
	alertify.set({
		delay: 1000
	});
}
function speak() {
  speechSynthesis.speak(new SpeechSynthesisUtterance("hello world"));
}
function openCameraS() {
	var thisLink = location.protocol + '//' + location.host + '/tools?FUNC=MIRROR2';
	openWindow(thisLink,'Small Camera');
}
function openCameraB() {
	var thisLink = location.protocol + '//' + location.host + '/tools?FUNC=MIRROR';
	openWindow(thisLink,'Big Camera');
}
function loadShortcuts() {
	alertify.set({
		delay: 120000
	});
	//var thisMsg = "Quite mode has been turned on.";
	//alertify.log(thisMsg);
	//speakMessage(thisMsg);
	//localStorage[root + 'quite-flag'] = "on";
	//SpeechKITT.setInstructionsText('Quite...');
	alertify.success("GLOBAL NEWS: <a href='#' onClick=\"newsGlobal();return false;\">Start Global News</a>");
	alertify.success("LIVE NEWS: <a href='#' onClick=\"newsLiveStream();return false;\">Youtube Live News</a>");
	alertify.success("ULAPPH CCTV: <a href='#' onClick=\"cctvStream();return false;\">ULAPPH Stream CCTV</a>");
	alertify.success("NEW CCTV: <a href='#' onClick=\"openWindowNow('/tools?FUNC=MIRROR2','New CCTV');return false;\">New CCTV Camera</a>");
	alertify.success("NEW CCTV QR: <a href='#' onClick=\"newCCTV();return false;\">New CCTV Camera QR</a>");
	alertify.success("MUSIC VIDEOS: <a href='#' onClick=\"openWindow('https://www.youtube.com/results?search_query=Music+video&sp=CAMSAiAB', 'music+videos+hd' );return false;\">Music Videos</a>");
	alertify.success("SING VIDEOKE: <a href='#' onClick=\"openWindow('https://www.youtube.com/results?search_query=famous+female+karaoke+songs+english&sp=CAM%253D', 'ffkse' );return false;\">Famous Karaoke</a>");
	alertify.success("YOUTUBE PLAYER: <a href='#' onClick=\"openWindowNow('/media?FUNC_CODE=YVP','Youtube');return false;\">Custom Youtube Player</a>");
	alertify.success("NEW DESKTOP: <a href='#' onClick=\"newUWM();return false;\">New Desktop</a>");
	alertify.success("NEW NOTE: <a href='#' onClick=\"newNote();return false;\">New Note</a>");
	alertify.success("GOOGLE SEARCH: <a href='#' onClick=\"googleSearch();return false;\">Google Search</a>");
	alertify.success("BING SEARCH: <a href='#' onClick=\"bingSearch();return false;\">Bing Search</a>");
	alertify.success("BAIDU SEARCH: <a href='#' onClick=\"baiduSearch();return false;\">Baidu Search</a>");
	alertify.success("BOOK SEARCH: <a href='#' onClick=\"bookSearch();return false;\">Books Search</a>");
	alertify.success("SHOPPING SEARCH: <a href='#' onClick=\"shoppingSearch();return false;\">SHOPPING Search</a>");
	alertify.success("TELL A JOKE: <a href='#' onClick=\"newBotMessage('tell me a joke');return false;\">Tell me a joke!</a>");
	alertify.success("WORD OF THE DAY: <a href='#' onClick=\"newBotMessage('word of the day');return false;\">Word of the day</a>");
	alertify.success("NEXT WALLPAPER: <a href='#' onClick=\"exploreWallpaper();return false;\">Next Wallpaper</a>");
	alertify.error("HELP GUIDE: <a href='#' onClick=\"newBotMessage('help');return false;\">Ask Help</a>");
	//
	uwmArrWin();
	//extensions
	alertify.log("Please install chrome extensions...");
	var thisMsg = "NOTE: Chrome extensions are needed so we can open windows inside the web desktop. Please <a href='#' onClick=\"showExtensions();return false;\">install</a> them in your Chrome browser if you haven't done yet. Thank you!";
    speakMessage(thisMsg);
	//
	alertify.error("CLOSE WINDOWS: <a href='#' onClick=\"clearWindows();return false;\">Close Default Windows</a>");
	//
	alertify.set({
		delay: 1000
	});
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function exploreWallpaper() {
	alertify.set({
		delay: 120000
	});
	nextWp();
	alertify.success("NEXT WALLPAPER: <a href='#' onClick=\"exploreWallpaper();return false;\">Next Wallpaper</a>");
	alertify.set({
		delay: 1000
	});
}
function googleSearch() {
	alertify.set({
		delay: 120000
	});
	openWindow("https://www.google.com", "Google");
	alertify.success("GOOGLE SEARCH: <a href='#' onClick=\"googleSearch();return false;\">Google Search</a>");
	alertify.set({
		delay: 1000
	});
	uwmArrWin();
}
function bingSearch() {
	alertify.set({
		delay: 120000
	});
	openWindow("https://www.bing.com", "Bing");
	alertify.success("BING SEARCH: <a href='#' onClick=\"bingSearch();return false;\">Bing Search</a>");
	alertify.set({
		delay: 1000
	});
	uwmArrWin();
}
function baiduSearch() {
	alertify.set({
		delay: 120000
	});
	openWindow("https://www.baidu.com", "Baidu");
	alertify.success("BAIDU SEARCH: <a href='#' onClick=\"baiduSearch();return false;\">Baidu Search</a>");
	alertify.set({
		delay: 1000
	});
	uwmArrWin();
}
function shoppingSearch() {
	alertify.set({
		delay: 120000
	});
	openWindow("https://www.google.com/shopping", "Google Shopping");
	alertify.success("SHOPPING SEARCH: <a href='#' onClick=\"shoppingSearch();return false;\">SHOPPING Search</a>");
	alertify.set({
		delay: 1000
	});
	uwmArrWin();
}
function bookSearch() {
	alertify.set({
		delay: 120000
	});
	openWindow("https://books.google.com.ph/", "Google Books");
	alertify.success("Books SEARCH: <a href='#' onClick=\"bookSearch();return false;\">Books Search</a>");
	alertify.set({
		delay: 1000
	});
	uwmArrWin();
}
function showExtensions() {
	alertify.log("Opening chrome extensions installers..");
	window.open("https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe");
	window.open("https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf");
}
function helloWorld() {
	consoleLogger("helloWorld()");
	if (localStorage[root + 'quite-flag'] == "on") {
		alertify.log("Quite flag is enabled.");
		return;
	}
	if (localStorage[root+'activelistener'] == 'off' || localStorage[root+'activelistener'] == undefined) {
		consoleLogger("enable active listen mode...");
		//turn on and set timer to turn off after x minutes
		//localStorage[root+'activelistener'] = "on";
		SpeechKITT.setInstructionsText('Talk...');
		//SpeechKITT.setSampleCommands(['ULAPPH', 'Cloud Desktop']);
		//setTimeout(function() {setInactiveListener();}, 60000);
	}
    localStorage[root+'localspeak'] = 'Y';
    var thisMsg = "Hello world!";
	if (friendlyName !== "" && friendlyName !== undefined) {
		thisMsg = "Hello " + friendlyName + "!";
	}
	document.getElementById('page').style.backgroundImage = "url('/static/img/misc/airobot1.gif')";
	//SpeechKITT.abortRecognition();
    speakMessage(thisMsg);
    //SpeechKITT.setInstructionsText('');
    //SpeechKITT.setSampleCommands([thisMsg]);
	alertify.log(thisMsg);
	//SpeechKITT.startRecognition();
	var botFeatures = " You can ask me anything or you can talk directly to the following virtual assistants: (1) Google Cloud Platform bot -- just say Google; (2) Technology Architecture bot -- just say technology architecture; (3) Enterprise Architecture bot -- just say enterprise architecture. Thank you!";
	speakMessage(thisMsg + botFeatures);
	//alertify.log(thisMsg + botFeatures);
	alertify.set({
		delay: 120000
	});	
	alertify.success(botFeatures);
	alertify.set({
		delay: 1000
	});
    localStorage[root+'localspeak'] = 'N';
}
function setInactiveListener() {
	return;
	consoleLogger("setInactiveListener()");
	localStorage[root+'activelistener'] = "off";
    SpeechKITT.setInstructionsText('MicOff...');
    SpeechKITT.setSampleCommands(['ULAPPH', 'Cloud Desktop']);
}
function setQuietMode() {
	consoleLogger("setQuietMode()");
	stopTalking();
	if (localStorage[root + 'quite-flag'] == "on") {
		var thisMsg = "Quiet mode has been turned off.";
		//document.getElementById('page').style.backgroundImage = "url('/static/img/misc/airobot2.gif')";
		alertify.log(thisMsg);
		speakMessage(thisMsg);
		localStorage[root + 'quite-flag'] = "off";
		localStorage[root+'localspeak'] = 'N';
		SpeechKITT.setInstructionsText('Talk...');
		SpeechKITT.setSampleCommands(['ULAPPH', 'is listening!']);
	} else {
		var thisMsg = "Quiet mode has been turned on.";
		//document.getElementById('page').style.backgroundImage = "url('/static/img/misc/airobot1.gif')";
		alertify.log(thisMsg);
		speakMessage(thisMsg);
		localStorage[root + 'quite-flag'] = "on";
		localStorage[root+'localspeak'] = 'Y';
		SpeechKITT.setInstructionsText('Quiet...');
		stopTalking();
		SpeechKITT.setSampleCommands(['ULAPPH', 'is not listening!']);
	}
}
function hiWorld() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("hiWorld()");
    var thisMsg = "Hi there!";
	//SpeechKITT.abortRecognition();
    speakMessage(thisMsg);
	alertify.log(thisMsg);
    //SpeechKITT.setInstructionsText('');
    //SpeechKITT.setSampleCommands([thisMsg]);
	//SpeechKITT.startRecognition();
    localStorage[root+'localspeak'] = 'N';
}
function endConversation() {
	SpeechKITT.queryWatsonAssistant("clear");
	window.speechSynthesis.cancel()
}
function stopTalking() {
	window.speechSynthesis.cancel()
	//document.getElementById('page').style.backgroundImage = "url('/static/img/LP_DeepField_NASA.gif')";
}
function newCountdownTimer() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("newCountdownTimer()");
    var thisMsg = "Here is the countdown timer.";
	//window.open("https://www.worldtimebuddy.com/");
	var UID = document.getElementById("aUser").value;
	var thisLink = "/tools?FUNC=WIDGET&t=CountDownGet&UID="+ UID + "&uid=" + UID;
	openDropSmall(thisLink);	
    //speakMessage(thisMsg);
	var msg = new SpeechSynthesisUtterance;
	SpeechKITT.abortRecognition();
	msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
	msg.onend = function() {
		consoleLogger('Utterance has finished being spoken'+" "+"worldtimeBuddy()");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
		SpeechKITT.startRecognition();
		localStorage[root+'localspeak'] = 'N';
		alertify.log(thisMsg);
	}
}
function showBatteryStatus() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("showBatteryStatus()");
	batteryLevel = localStorage[root+'batteryLevel'];
	batteryCharging = localStorage[root+'batteryCharging'];
    var thisMsg = "Hi "+ friendlyName + ", your current battery level is: " + batteryLevel + " percent.";
	if (batteryCharging == "Y") {
		thisMsg = thisMsg + " " + "Your charger is connected.";
	} else {
		thisMsg = thisMsg + " " + "You are NOT connected to the charger.";
	}
	var msg = new SpeechSynthesisUtterance;
	SpeechKITT.abortRecognition();
	msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
	msg.onend = function() {
		consoleLogger('Utterance has finished being spoken'+" "+"showBatteryStatus()");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
		SpeechKITT.startRecognition();
		localStorage[root+'localspeak'] = 'N';
		alertify.log(thisMsg);
	}
}
function worldtimeBuddy() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("worldtimeBuddy()");
    var thisMsg = "Here is the World Time Buddy tool you can use to see different timezones.";
	//window.open("https://www.worldtimebuddy.com/");
	var thisLink = "https://www.worldtimebuddy.com/";
	openWindow(thisLink, "WorldTimeBuddy");	
    //speakMessage(thisMsg);
	var msg = new SpeechSynthesisUtterance;
	SpeechKITT.abortRecognition();
	msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
	msg.onend = function() {
		consoleLogger('Utterance has finished being spoken'+" "+"worldtimeBuddy()");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
		SpeechKITT.startRecognition();
		localStorage[root+'localspeak'] = 'N';
		alertify.log(thisMsg);
	}
}
function newsLiveStream() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("newsLiveStream()");
	setQuietMode();
    var thisMsg = "Here are the live streams available showing news.";

	var YID_SkyNews = "9Auq9mYxFEE";
	var thisLink = "https://www.youtube.com/embed/" + YID_SkyNews + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0"
	openWindow(thisLink, "Livestream");	

	thisLink = "https://www.youtube.com/embed/dVDpG3rR1VE" + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
	openWindow(thisLink, "NBC");	

	thisLink = "https://www.youtube.com/embed/21X5lGlDOfg" + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";;
	openWindow(thisLink, "NASA");	

	thisLink = "https://www.worldometers.info/coronavirus/";
	openWindow(thisLink, "Livestream");	

	thisLink = "https://www.youtube.com/embed/36YnV9STBqc"+ "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0"
	openWindow(thisLink, "Music");	
	
	//rearrange
	uwmArrWin();
    //speakMessage(thisMsg);
	var msg = new SpeechSynthesisUtterance;
	SpeechKITT.abortRecognition();
	msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
	msg.onend = function() {
		consoleLogger('Utterance has finished being spoken'+" "+"newsLiveStream()");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
		SpeechKITT.startRecognition();
		localStorage[root+'localspeak'] = 'N';
		alertify.log(thisMsg);
	}
	alertify.set({
		delay: 120000
	});	
	alertify.success("LIVE NEWS STOP: <a href='#' onClick=\"clearWindows();return false;\">Live Stream News Stop</a>");
	alertify.set({
		delay: 1000
	});
	uwmArrWin();
	uwmArrWin();
}
function shopGroceries() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("shopGroceries()");
    var thisMsg = "Here are the online stores for food and groceries.";

	var thisLink = "https://www.landers.ph/";
	window.open(thisLink, "Landers");	

	thisLink = "https://www.lazada.com.ph/shop/lazmart-onlineph/";
	window.open(thisLink, "Lazada");		

	thisLink = "https://www.metromart.com/welcome/cities";
	window.open(thisLink, "MetroMart");	

	thisLink = "https://pushkart.ph/default/";
	window.open(thisLink, "PushKart");	

	thisLink = "https://www.waltermartdelivery.com.ph/";
	window.open(thisLink, "WalterMart");	
    //speakMessage(thisMsg);
	var msg = new SpeechSynthesisUtterance;
	SpeechKITT.abortRecognition();
	msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
	msg.onend = function() {
		consoleLogger('Utterance has finished being spoken'+" "+"shopGroceries()");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
		SpeechKITT.startRecognition();
		localStorage[root+'localspeak'] = 'N';
		alertify.log(thisMsg);
	}	
}
function shopMeatsSeafoods() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("shopMeatsSeafoods()");
    var thisMsg = "Here are the online stores for meats and seafoods.";

	var thisLink = "https://www.lazada.com.ph/shop/atreena-wet-market";
	window.open(thisLink, "Atreena");	

	thisLink = "https://www.facebook.com/jaamseafoodstrading/";
	window.open(thisLink, "JAAM Seafoods FB");		

	thisLink = "https://www.pacificbay.com.ph/";
	window.open(thisLink, "Pacific Bay");	

	thisLink = "https://rarefoodshop.com/";
	window.open(thisLink, "Rare Food Shop");	

	thisLink = "https://www.tenderbites.ph/store";
	window.open(thisLink, "Tender Bites");	
    //speakMessage(thisMsg);
	var msg = new SpeechSynthesisUtterance;
	SpeechKITT.abortRecognition();
	msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
	msg.onend = function() {
		consoleLogger('Utterance has finished being spoken'+" "+"shopMeatsSeafoods()");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
		SpeechKITT.startRecognition();
		localStorage[root+'localspeak'] = 'N';
		alertify.log(thisMsg);
	}	
}
function shopFruitsVegetables() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("shopMeatsSeafoods()");
    var thisMsg = "Here are the online stores for fruits and vegetables.";

	var thisLink = "https://www.facebook.com/alwaysfreshph/";
	window.open(thisLink, "Always Fresh");	

	thisLink = "https://www.freshproduce.com.ph/";
	window.open(thisLink, "Fresh Produce");		

	thisLink = "https://herbivore.com.ph/";
	window.open(thisLink, "Herbivore");	

	thisLink = "https://www.facebook.com/sunbrightfoods/";
	window.open(thisLink, "SunBright Foods");	

	thisLink = "https://thegreengrocermanila.com/shop/";
	window.open(thisLink, "Green Grocer");	
	
	thisLink = "https://mrdelicious.ph/collections/rotating-lockdown-menu";
	window.open(thisLink, "Mr Delicious");	

	thisLink = "https://www.thesexychef.ph/heat-n-eat/";
	window.open(thisLink, "Heat & Eat");		
    //speakMessage(thisMsg);
	var msg = new SpeechSynthesisUtterance;
	SpeechKITT.abortRecognition();
	msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
	msg.onend = function() {
		consoleLogger('Utterance has finished being spoken'+" "+"shopMeatsSeafoods()");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
		SpeechKITT.startRecognition();
		localStorage[root+'localspeak'] = 'N';
		alertify.log(thisMsg);
	}	
}
function shopStores() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("shopStores()");
    var thisMsg = "Here are the online stores for basic personal and home needs.";

	var thisLink = "https://www.carousell.ph/";
	window.open(thisLink, "Carousell");	

	thisLink = "https://www.ebay.ph/";
	window.open(thisLink, "Ebay");		

	thisLink = "https://www.metrodeal.com/";
	window.open(thisLink, "MetroDeal");	

	thisLink = "https://dealgrocer.com/";
	window.open(thisLink, "DealGrocer");	

	thisLink = "https://www.poundit.com/";
	window.open(thisLink, "PoundIt");	
	
	thisLink = "https://www.abenson.com/";
	window.open(thisLink, "Abenson");	
	
	thisLink = "https://shopee.ph/";
	window.open(thisLink, "Shopee");

	thisLink = "https://www.yesstyle.com/";
	window.open(thisLink, "Yes Style");	

	thisLink = "https://kimstore.com/";
	window.open(thisLink, "KimStore");	

	thisLink = "https://www.henryscameraphoto.com/";
	window.open(thisLink, "Henrys Camera");		
	
	thisLink = "https://shop.globe.com.ph/";
	window.open(thisLink, "Globe Telecom");	

	thisLink = "http://store.smart.com.ph/";
	window.open(thisLink, "Smart Telecom");	
	
    //speakMessage(thisMsg);
	var msg = new SpeechSynthesisUtterance;
	SpeechKITT.abortRecognition();
	msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
	msg.onend = function() {
		consoleLogger('Utterance has finished being spoken'+" "+"shopMeatsSeafoods()");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
		SpeechKITT.startRecognition();
		localStorage[root+'localspeak'] = 'N';
		alertify.log(thisMsg);
	}	
}
function showTips() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("showTips()");
	var thisMsg = "";
	var thisMsg2 = "";
	var t = "motd";
	
	var xmlhttp;
	var root = location.protocol + '//' + location.host;
	xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
	var UID = document.getElementById("aUser").value;
	var watsonurl = location.protocol + "//" + location.host + "/orch?oFunc=motd&oMsg=" + t + "&oUser=" + UID + "&oUI=isMobile" + isMobile + "&oWA=" + watsonID + "&oLoc=" + ottoJS;
	consoleLogger("watsonurl: " + watsonurl);
	xmlhttp.open("POST", watsonurl, !0), xmlhttp.send(), xmlhttp.onreadystatechange = function() {
		if (4 == xmlhttp.readyState && 200 == xmlhttp.status) {
			var obj = JSON.parse(xmlhttp.responseText);
			var thisMsg = obj.data;
			var thisMsg2 = thisMsg.substring(0, 170);
			consoleLogger(thisMsg);
			var msg = new SpeechSynthesisUtterance;
			SpeechKITT.abortRecognition();
			msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
			alertify.log(thisMsg);
			var openLink = root+"/editor?EDIT_FUNC=TEXT-CSS&CSS-TYPE=.3d&CSS-ALIGN=center&EDIT_MODE=NEW-CSS&TEXT=" + escape(thisMsg);
			if (isMobile == "true") {
				//speakMessage(data);
			} else {
				openDropSmall(openLink);
			}
			msg.onend = function() {
				consoleLogger('Utterance has finished being spoken'+" "+"showTips()");
				SpeechKITT.setInstructionsText('');
				SpeechKITT.setSampleCommandsChunk(thisMsg);
				localStorage[root+'localspeak'] = 'N';
				SpeechKITT.startRecognition();
			}
			return;
		}
	}
}
function showStory() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("showStory()");
	var thisMsg = "";
	var thisMsg2 = "";
	var t = "story";
	
	var xmlhttp;
	var root = location.protocol + '//' + location.host;
	xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
	var UID = document.getElementById("aUser").value;
	var watsonurl = location.protocol + "//" + location.host + "/orch?oFunc=story&oMsg=" + t + "&oUser=" + UID + "&oUI=isMobile" + isMobile + "&oWA=" + watsonID + "&oLoc=" + ottoJS;
	consoleLogger("watsonurl: " + watsonurl);
	xmlhttp.open("POST", watsonurl, !0), xmlhttp.send(), xmlhttp.onreadystatechange = function() {
		if (4 == xmlhttp.readyState && 200 == xmlhttp.status) {
			var obj = JSON.parse(xmlhttp.responseText);
			var thisMsg = obj.data;
			var thisMsg2 = thisMsg.substring(0, 170);
			consoleLogger(thisMsg);
			var msg = new SpeechSynthesisUtterance;
			SpeechKITT.abortRecognition();
			msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
			alertify.log(thisMsg);
			var openLink = root+"/editor?EDIT_FUNC=TEXT-CSS&CSS-TYPE=.3d&CSS-ALIGN=center&EDIT_MODE=NEW-CSS&TEXT=" + escape(thisMsg);
			if (isMobile == "true") {
				//speakMessage(data);
			} else {
				openDropSmall(openLink);
			}
			msg.onend = function() {
				consoleLogger('Utterance has finished being spoken'+" "+"showStory()");
				SpeechKITT.setInstructionsText('');
				SpeechKITT.setSampleCommandsChunk(thisMsg);
				localStorage[root+'localspeak'] = 'N';
				SpeechKITT.startRecognition();
			}
			return;
		}
	}
}
function openWpImage() {
	var imgVal = document.getElementById('page').style.backgroundImage;
	var imgUrl = imgVal.slice(4, -1).replace(/"/g, "");
	window.open(imgUrl, "Wallpaper");
}
function newsGlobal() {
    consoleLogger("newsGlobal()");
	localStorage[root+'localspeak'] = 'Y';
	localStorage[root+"customTopic"] = "";
	var listCountries = "";
	
	if (localStorage[root+"newsapicountries"] != undefined) {
		var msgText = "Just a second, news will be shown from around the world.";
		var msg = new SpeechSynthesisUtterance;
		SpeechKITT.abortRecognition();
		msg.rate = 1, msg.pitch = 1, msg.text = msgText, window.speechSynthesis.speak(msg);
		alertify.log(msgText);
		msg.onend = function() {
			consoleLogger('Utterance has finished being spoken'+" "+"newsGlobal()");
			//SpeechKITT.setInstructionsText('');
			//SpeechKITT.setSampleCommands([msgText]);
			localStorage[root+'localspeak'] = 'N';
			SpeechKITT.startRecognition();
		}
		localStorage[root+"news"] = "on"; 
		funcnews();
		funcshow();		
		return;
	}
	
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xhr=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
    xhr=new ActiveXObject('MSXML2.XMLHTTP.3.0');
    }
    xhr.open("GET","/social?SO_FUNC=NEWSAPI&cmd=" + "listc" + "&UID=" + UID, true);
    xhr.send();

    xhr.onreadystatechange=function()
    {
    if (xhr.readyState==4 && xhr.status==200)
        {
        var currVal = xhr.responseText;
            consoleLogger(currVal);
            //var jsonData = JSON.parse(currVal);
			//localStorage[root+"newsapicountries"] = jsonData;
			localStorage[root+"newsapicountries"] = currVal;
			localStorage[root+"newsapicountryindex"] = "0"; 
			var msgText = "News will be shown from around the world.";
			var msg = new SpeechSynthesisUtterance;
			SpeechKITT.abortRecognition();
			msg.rate = 1, msg.pitch = 1, msg.text = msgText, window.speechSynthesis.speak(msg);
			alertify.log(msgText);
			msg.onend = function() {
				consoleLogger('Utterance has finished being spoken'+" "+"newsGlobal2()");
				//SpeechKITT.setInstructionsText('');
				//SpeechKITT.setSampleCommands([msgText]);
				localStorage[root+'localspeak'] = 'N';
				SpeechKITT.startRecognition();
			}
			localStorage[root+"news"] = "on"; 
			funcnews();
			funcshow();	
        }
    }
    return;
}
function infoWorld() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("helloInfo()");
    var msgText = "Local commands available: info, hello, start dictation, stop dictation, save diction, cctv on, cctv off, stop news, start news, next news, show news (topic). To get more info, say help.";
    var msgText2 = msgText.substring(0, 170);
	var msg = new SpeechSynthesisUtterance;
	SpeechKITT.abortRecognition();
	msg.rate = 1, msg.pitch = 1, msg.text = msgText, window.speechSynthesis.speak(msg);
	alertify.log(msgText);
	document.getElementById('page').style.backgroundImage = "url('/static/images/ulapph-info.PNG')";
	msg.onend = function() {
		consoleLogger('Utterance has finished being spoken'+" "+"infoWorld()");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([msgText2]);
		localStorage[root+'localspeak'] = 'N';	
		SpeechKITT.startRecognition();
		SpeechKITT.setSampleCommandsChunk(msgText);
	}
}
function cctvReview() {
	consoleLogger("cctvReview()");
    var thisMsg = "Reviewing CCTV now...";
    //SpeechKITT.setInstructionsText('');
    //SpeechKITT.setSampleCommands([thisMsg]);
	//SpeechKITT.abortRecognition();
    speakMessage(thisMsg);
	alertify.log(thisMsg);
	//SpeechKITT.startRecognition();
	var refreshIntervalId = setInterval(function(){ scanCctvStream("L");}, 10000);
	setTimeout(function() {completedReview(refreshIntervalId);}, 300000);
}
function completedReview(refreshIntervalId) {
	clearInterval(refreshIntervalId);
    var thisMsg = "Finished reviewing CCTV!";
    //SpeechKITT.setInstructionsText('');
    //SpeechKITT.setSampleCommands([thisMsg]);
}
function cctvLatest() {
	scanCctvStream("C");
}
function cctvOldest() {
	scanCctvStream("O");
}
function cctvStream() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("cctvStream()");
    var thisMsg = "";
    if (localStorage[root+'isStreaming'] == 'Y') {
	    localStorage[root+'isStreaming'] = 'N';
        thisMsg = "CCTV Streaming has been turned off!";
		alertify.log(thisMsg);
        //return wallpaper
        var src = "/static/img/LP_DeepField_NASA.gif";
        document.getElementById('page').style.backgroundImage = "url(" + src + ")";
    } else {
        localStorage[root+'isStreaming'] = 'Y';
        thisMsg = "CCTV Streaming has been turned on!";
		alertify.log(thisMsg);
    }
	//SpeechKITT.abortRecognition();
    speakMessage(thisMsg);
    //SpeechKITT.setInstructionsText('');
    //SpeechKITT.setSampleCommands([thisMsg]);
    localStorage[root+'localspeak'] = 'N';
	//SpeechKITT.startRecognition();
}
function cctvCapture() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("cctvCapture()");
    var thisMsg = "";
    if (localStorage[root+'isStreaming'] == 'Y') {
        thisMsg = "CCTV capture being processed...";
		var thisLink = location.protocol + '//' + location.host + '/directory?DIR_FUNC=cctv-capture';
		openWindow(thisLink,'CCTV Capture');
		alertify.log(thisMsg);
    } else {
        thisMsg = "CCTV capture not executed. Please enable cctv stream first.";
		alertify.log(thisMsg);
    }
	//SpeechKITT.abortRecognition();
    speakMessage(thisMsg);
    //SpeechKITT.setInstructionsText('');
    //SpeechKITT.setSampleCommands([thisMsg]);
    localStorage[root+'localspeak'] = 'N';
	//SpeechKITT.startRecognition();
}
function toggleCctvReviewSpeaker() {
    var thisMsg = "";
    if (localStorage["cctv-stream-review-speak"] == "Y") {
        localStorage["cctv-stream-review-speak"] = "N";
        thisMsg = "CCTV review speaker has been turned off!";
    } else {
        localStorage["cctv-stream-review-speak"] = "Y";
        thisMsg = "CCTV review speaker has been turned on!";
    }
    //speakMessage(thisMsg);
	var msg = new SpeechSynthesisUtterance;
	SpeechKITT.abortRecognition();
	msg.rate = 1, msg.pitch = 1, msg.text = thisMsg, window.speechSynthesis.speak(msg);
	msg.onend = function() {
		consoleLogger('Utterance has finished being spoken'+" "+"toggleCctvReviewSpeaker()");
		//SpeechKITT.setInstructionsText('');
		//SpeechKITT.setSampleCommands([thisMsg]);
		localStorage[root+'localspeak'] = 'N';
		SpeechKITT.startRecognition();
	}
}
function dictationStart() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("dictationStart()");
    var thisMsg = "I am ready to take notes!";
	//SpeechKITT.abortRecognition();
    speakMessage(thisMsg);
    //SpeechKITT.setInstructionsText('Dictation: ');
    //SpeechKITT.setSampleCommands([thisMsg]);
	alertify.log(thisMsg);
    localStorage["dictation-status"] = "ongoing";
    localStorage["dictation-count"] = 0;
    localStorage["dictation-data"] = "";
    localStorage[root+'localspeak'] = 'N';
	//SpeechKITT.startRecognition();
}
function dictationSave() {
    localStorage[root+'localspeak'] = 'Y';
    consoleLogger("dictationSave()");
    var thisMsg = "I am now saving your data. Please wait.";
	//SpeechKITT.abortRecognition();
    speakMessage(thisMsg);
	alertify.log(thisMsg);
    //SpeechKITT.setInstructionsText('Dictation: ');
    ////SpeechKITT.setSampleCommands([thisMsg]);
    var thisData = localStorage["dictation-data"];
    consoleLogger("DATA :", thisData);
	localStorage["dictation-status"] = "";
    saveData(thisData);
    localStorage[root+'localspeak'] = 'N';
	//SpeechKITT.startRecognition();
    SpeechKITT.setInstructionsText('Talk...');
    //SpeechKITT.setSampleCommands(['ULAPPH', 'Cloud Desktop']);
}
function displayData() {
	var thisData = localStorage["dictation-data"];
	//var data = "<p>This is 'myWindow'</p>";
	//myWindow = window.open("data:text/html," + encodeURIComponent(thisData),
	//					   "_blank", "width=200,height=100");
	myWindow = window.open("data:text/html," + encodeURIComponent(thisData), "_blank");
	myWindow.focus();
}
function saveData(data) {
	consoleLogger("saveData()");
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	var editor_url = "";
	var root = location.protocol + '//' + location.host;
	var UID = document.getElementById("aUser").value;
	editor_url = root + '/editor?EDIT_FUNC=GET_UP_URL&SID=' + "NEWTEXT" + "&UID=" + UID;
	xmlhttp.open("POST",editor_url,true);
	xmlhttp.send();
	
	//check if external clouds
	var isExternalCloud = false;
	var sid = "NEWTEXT";
	 xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var uploadURL = xmlhttp.responseText;
			var formData = new FormData();
			formData.append("EDIT_FUNC2", "SAVE_TEXT");
			formData.append("SID", urlParams["SID"]);
			formData.append("CATEGORY", "desktop0");
			formData.append("FUNC_CODE", "UPD-FROM-EDITOR");
			formData.append("SPC_OPT", "");			
			//var UID = document.getElementById("aUser").value;
			if (UID == "" || UID == undefined) {
                var errMsg = "Sorry, you cannot save your changes because you are not logged in.";
				speakMessage(errMsg);
                consoleLogger(errMsg);
				return;
			}
			formData.append("UID", UID);
			var thisLineTxt_m = data;
			//limit title length to avoid panic error
			var length = 150;
			var thisLineTxt_t = thisLineTxt_m.substring(0, length);
			formData.append("TITLE", thisLineTxt_t);
            var thisLineTxtRaw_m = "Dictation from ULAPPH Speech Recognition"
			formData.append("DESC", thisLineTxtRaw_m);
			var thisContent = data;
			var blob = new Blob([thisContent], { type: "text/plain"});

			formData.append("file", blob);

			var request = new XMLHttpRequest();
			request.open("POST", uploadURL);
			request.send(formData);
			 request.onreadystatechange=function()
			  {
			  if (request.readyState==4 && request.status==200)
				{
					//clear local storage
					var localStorageKey =  location.host + "-ace-" + urlParams["SID"];
					var thisContent = "";
					localStorage.setItem(localStorageKey, thisContent);
					//reload page
					var redirLink = request.responseText;
					//SpeechKITT.abortRecognition();
                    if (redirLink != "") {
                        localStorage[root+'localspeak'] = 'Y';
                        var thisMsg2 = "Upload finished.";
                        speakMessage(thisMsg2);
						alertify.log(thisMsg2);
                        //SpeechKITT.setSampleCommands([thisMsg2]);
                        localStorage["dictation-status"] = "";
                        localStorage["dictation-count"] = 0;
                        localStorage["dictation-data"] = "";
                        window.open(redirLink);
                        localStorage[root+'localspeak'] = 'N';
						//SpeechKITT.startRecognition();
                    } else {
                        localStorage[root+'localspeak'] = 'Y';
                        var thisMsg3 = "Apologies, please try to save again.";
                        speakMessage(thisMsg3);
						alertify.log(thisMsg3);
                        //SpeechKITT.setSampleCommands([thisMsg3]);
                        localStorage[root+'localspeak'] = 'N';
						//SpeechKITT.startRecognition();
                    }							
					return;
				}

			 }
		}
		
	}
};
