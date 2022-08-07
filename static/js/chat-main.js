////////////////////////////////////////////////////////////////
// Copyright 2014-2015 ULAPPH Cloud Desktop. All Rights Reserved.
// chat-main.js
// * A modified version of socket.io using Google Channels API + Go
////////////////////////////////////////////////////////////////
var root = location.protocol + '//' + location.host;

//Check browser
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

$(function() {
  var FADE_TIME = 150; // ms
  var TYPING_TIMER_LENGTH = 400; // ms
  var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

  // Initialize varibles
  var $window = $(window);
  var $usernameInput = $('.usernameInput'); // Input for username
  var $messages = $('.messages'); // Messages area
  var $inputMessage = $('.inputMessage'); // Input message input box

  var $loginPage = $('.login.page'); // The login page
  var $chatPage = $('.chat.page'); // The chatroom page

  // Prompt for setting a username
  var username;
  var connected = false;
  var typing = false;
  var lastTypingTime;
  var $currentInput = $usernameInput.focus();
  
  var r = document.getElementById("ringtone");
  var da = document.getElementById("dispAds");
  var mode = document.getElementById("mode");
  var roomID = document.getElementById("roomID");
  var aUser = document.getElementById("aUser");
  var tok = document.getElementById("tok");
  var FL_CONNECTED_OK = false;
  var FL_CONTENT_OK = false;
  var CTR_RAND_CON = 0;
  var currToken = "";
  
  //--------firebase------------
	'use strict';

	initFirebase();

	//function initGame(gameKey, me, token, channelId, initialMessage) {
	function initFirebase() {
		//console.log("initFirebase()");

	  // This is our Firebase realtime DB path that we'll listen to for updates
	  // We'll initialize this later in openChannel()
	  var channel = null;

	  /**
	   * This method lets the server know that the user has opened the channel
	   * After this method is called, the server may begin to send updates
	   */
	  function onOpened() {
		//console.log("onOpened()");
		onOpen();
	  }

	  /**
	   * This deletes the data associated with the Firebase path
	   * it is critical that this data be deleted since it costs money
	   */
	  function deleteChannel() {
		  //console.log("deleteChannel()");
		  onClose();
	  }

	  /**
	   * This method is called every time an event is fired from Firebase
	   * it updates the entire game state and checks for a winner
	   * if a player has won the game, this function calls the server to delete
	   * the data stored in Firebase
	   */
	  function onMessage(newState) {
		  //console.log("onMessage(): "+newState);
		  var jsonObj = JSON.parse(newState);
		  procMessage(jsonObj);
	  }
	  
	  /**
	   * This function opens a realtime communication channel with Firebase
	   * It logs in securely using the client token passed from the server
	   * then it sets up a listener on the proper database path (also passed by server)
	   * finally, it calls onOpened() to let the server know it is ready to receive messages
	   */
	  function openChannel() {
		// sign into Firebase with the token passed from the server
		var jwt = document.getElementById("jwt");
		var idToken = jwt.value;
		firebase.auth().signInWithCustomToken(idToken).catch(function(error) {
		  console.log('Login Failed!', error.code);
		  console.log('Error message: ', error.message);
		});
		console.log('Login successful!');
		//get message for the user channel
		var aep = document.getElementById("aep");
		var mode = document.getElementById("mode");
		var roomID = document.getElementById("roomID");
		var refChan = "";
		//console.log("mode: ", mode.value)
		switch (mode.value) {
			case "worldwide":
				refChan = 'zzz-shared' + '/chat-' + mode.value + '/' + roomID.value;
				break;
			case "country":
				refChan = 'zzz-shared' + '/chat-' + mode.value + '/' + roomID.value;
				break;
			default:
				refChan = aep.value + '/chat-' + mode.value + '/' + roomID.value;
		}

		//console.log("refChan: ", refChan);
		channel = firebase.database().ref(refChan);
		//listener
		channel.limitToLast(1).on('value', function(data) {
		  //console.log("value");
		  onMessage(data.val());
		});
		//listener
		channel.limitToLast(1).on('child_added', function(data) {
		  //console.log("child_added");
		  onMessage(data.val());
		});
		onOpened();
		// let the server know that the channel is open
	  }

	  /**
	   * This function opens a communication channel with the server
	   * then it adds listeners to all the squares on the board
	   * next it pulls down the initial game state from template values
	   * finally it updates the game state with those values by calling onMessage()
	   */
	  function initialize() {
		
		//lets open channel
		openChannel();
		
		//initial message
		onMessage("hello");
	  }

	  setTimeout(initialize, 100);
	}
	//--------firebase------------
	 
  if (aUser.value != "" && tok.value != "") { 
	alertify.success("Connecting to channel...");
	}

  // Sets the client's username
  function setUsername () {
    username = cleanInput($usernameInput.val().trim());
	
	//if user is guest, append guest in name
	var str = aUser.value;
	var ges = str.split("guest-");
	if (ges.length == 2) {
		username = "guest-" + username;
	}

    // If the username is valid
    if (username) {
      $loginPage.fadeOut();
      $chatPage.show();
      $loginPage.off('click');
	  
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
		if (mode.value == "private") {
			xhr2.open("GET","/chat?CHAT_FUNC=addUser2&UID=" + aUser.value + '&NICK=' + username + '&mode=' + mode.value + '&roomID=' + roomID.value, true);
		} else {
			xhr2.open("GET","/chat?CHAT_FUNC=addUser&UID=" + aUser.value + '&NICK=' + username + '&mode=' + mode.value + '&roomID=' + roomID.value, true); 
		}
		xhr2.send();
		return;
	  
    }
  }

  // Sends a chat message
  function sendMessage () {
    var message = $inputMessage.val();
    // Prevent markup from being injected into the message
    message = cleanInput(message);
	if (message) {	
      $inputMessage.val('');
	var str = message;
	var res = str.split("");
	
	if (res[0] == "/") {
		var resa = str.split(" ");
		if (resa[0] == "/sound" || resa[0] == "/Sound") {
			var soundStat = resa[1];
			if (soundStat == "off") {
				document.getElementById("soundStat").value = "off";
			} else {
				document.getElementById("soundStat").value = "on";
			}
		}
		if (resa[0] == "/knock" || resa[0] == "/Knock") {
			var uid = resa[1];
			if (uid != "") {
				knock(uid);
			}
		}
		if (resa[0] == "/pm" || resa[0] == "/Pm") {
			var uid = resa[1];
			if (uid != "") {
				guestbook(uid);
			}
		}
		if (resa[0] == "/slide" || resa[0] == "/Slide") {
			var num = resa[1];
			if (num != "") {
				viewSlide(num);
			}
		}	
		if (resa[0] == "/article" || resa[0] == "/Article") {
			var num = resa[1];
			if (num != "") {
				viewArticle(num);
			}
		}
		if (resa[0] == "/media" || resa[0] == "/Media") {
			var num = resa[1];
			if (num != "") {
				viewMedia(num);
			}
		}
		if (resa[0] == "/room" || resa[0] == "/Room") {
			newChatRoom();
		}
		if (resa[0] == "/ringtone" || resa[0] == "/Ringtone") {
			if (resa.length == 2) {
				var root = location.protocol + '//' + location.host;
				var tval = ""
				switch (resa[1]) {
					case "1":
						tval = "/static/audio/beepbeep.ogg";
						tval2 = "/static/audio/beepbeep.mp3";
						break;
					case "2":
						tval = "/static/audio/bloo.ogg";
						tval2 = "/static/audio/bloo.mp3";
						break;
					case "3":
						tval = "/static/audio/kewl.ogg";
						tval2 = "/static/audio/kewl.mp3";
						break;
					case "4":
						tval = "/static/audio/yawn.ogg";
						tval2 = "/static/audio/yawn.mp3";
						break;
					case "5":
						tval = "/static/audio/jamesbrown.ogg";
						tval2 = "/static/audio/jamesbrown.mp3";
						break;
				}
				if (tval != "") {
					soundManager.destroySound('uChat');
					r.value = root + tval;
					
					if (isEdge == true || isIE == true || isSafari == true) {
						soundManager.createSound({
							id: 'uChat',
							volume: 50,
							url: root + tval2
						});
						playSound('uChat');
					} else {
						soundManager.createSound({
							id: 'uChat',
							volume: 50,
							url: root + tval
						});
						playSound('uChat');
					}
				 
				}
				
			} else {
			    var message = "To change ringtone, type /ringtone NUMBER. You can choose from ringtones: [1] beepbeep [2] bloo [3] kewl [4] yawn [5] jamesbrown";
				addChatMessage({
					username: "ULAPPH:",
					message: message
				 });
				 return
			}
		}
		if (resa[0] == "/news" || resa[0] == "/News") {
			if (resa.length == 2) {
				var root = location.protocol + '//' + location.host;
				var tval = ""
				switch (resa[1]) {
					case "1":
						tval = "https://news.google.com";
						break;
					case "2":
						tval = "https://news.ycombinator.com/";
						break;
					case "3":
						tval = "http://www.bbc.com/news";
						break;
					case "4":
						tval = "https://www.yahoo.com/news/";
						break;
					case "5":
						tval = "https://www.cnet.com/news/";
						break;
				}
				if (tval != "") {
					postMessageWindow(tval);
					return;
				}
				
			} else {
			    var message = "To open news window, type /news NUMBER. You can choose from: [1] Google [2] HackerNews [3] BBC [4] Yahoo [5] CNET";
				addChatMessage({
					username: "ULAPPH:",
					message: message
				 });
				 return
			}
		}
		if (resa[0] == "/people" || resa[0] == "/People") {
			var root = location.protocol + '//' + location.host;
			postMessageWindow("ULAPPH-SYS-UPD@888@People@888@" + root + "/directory?DIR_FUNC=people");
			return;
		}
		if (resa[0] == "/trending" || resa[0] == "/Trending") {
			var root = location.protocol + '//' + location.host;
			postMessageWindow("ULAPPH-SYS-UPD@888@Trending@888@" + root + "/social?SO_FUNC=show-trending");
			return;
		}
		if (resa[0] == "/whatsnew" || resa[0] == "/Whatsnew") {
			var root = location.protocol + '//' + location.host;
			postMessageWindow("ULAPPH-SYS-UPD@888@Whats New!@888@" + root + "/social?SO_FUNC=show-whats-new");
			return;
		}
		if (resa[0] == "/sites" || resa[0] == "/Sites") {
			var root = location.protocol + '//' + location.host;
			postMessageWindow("ULAPPH-SYS-UPD@888@Directory@888@" + root + "/directory?DIR_FUNC=sites");
			return;
		}
		if (resa[0] == "/nick" || resa[0] == "/Nick") {
			var oNick = username;
			var nick = resa[1];
			if (nick != "") {
				username = cleanInput(nick.trim());
				addChatMessage({
					username: "ULAPPH:",
					message: "Nickname changed by " + oNick
				 });
				addChatMessage({
					username: "ULAPPH:",
					message: oNick + ' is now called ' + nick + '.' 
				 });
				return
			}
		}
		if (resa[0] == "/session" || resa[0] == "/Session") {		
			if(typeof(Storage) !== "undefined") {

				addChatMessage({
					username: username,
					message: resa[0] 
				 });
			
				addChatMessage({
					username: "ULAPPH:",
					message: localStorage.usersList 
				 });
				return
				
			} else {
				var message = "Sorry, your browser does not support web storage... You won't be able to record or see session details.";
				log(message, {
				  prepend: true
				});
				return
			}
			
		}
		if (resa[0] == "/session_clear" || resa[0] == "/Session_clear") {		
			if(typeof(Storage) !== "undefined") {
				localStorage.usersList = "";
			} else {
				var message = "Sorry, your browser does not support web storage... You won't be able to record or see session details.";
				log(message, {
				  prepend: true
				});
				return
			}
			
		}
		if (resa[0] == "/open" || resa[0] == "/Open") {
			openLink(resa[1]);
		}
		if (resa[0] == "/carousel" || resa[0] == "/Carousel") {
			window.location.assign("/?q=home");
		}
		if (resa[0] == "/uwm" || resa[0] == "/UWM" || resa[0] == "/Uwm") {
			window.location.assign("/uwm");
		}
		if (resa[0] == "/desktop0" || resa[0] == "/Desktop0") {
			window.location.assign("/desktop0#page");
		}
		if (resa[0] == "/logout" || resa[0] == "/Logout") {
			window.location.assign("/logout");
		}
		if (resa[0] == "/note" || resa[0] == "/Note") {
			newNote();
		}
	}
		
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr3=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }
		
		if (mode.value == "private") {
			xhr3.open("GET","/chat?CHAT_FUNC=newMessage&UID=" + aUser.value + '&NICK=' + username + '&mode=' + mode.value + '&roomID=' + roomID.value + '&MESSAGE=' + encodeURIComponent(message), true);					
		} else {
			xhr3.open("GET","/chat?CHAT_FUNC=newMessage&UID=" + aUser.value + '&NICK=' + username + '&mode=' + mode.value + '&roomID=' + roomID.value + '&MESSAGE=' + encodeURIComponent(message), true);
		}
		xhr3.send();
		return
    }
  }
  
	function postMessageWindow(link) {
		var root = location.protocol + '//' + location.host;
		parent.postMessage(link,root);
	}

  // Log a message
  function log (message, options) {
    var $el = $('<li>').addClass('log').text(message);
    addMessageElement($el, options);
  }

  // Adds the visual chat message to the message list
  function addChatMessage (data, options) {
    // Don't fade the message in if there is an 'X was typing'
    var $typingMessages = getTypingMessages(data);
    options = options || {};
    if ($typingMessages.length !== 0) {
      options.fade = false;
      $typingMessages.remove();
    }

    var $usernameDiv = $('<span class="username"/>')
      .text(data.username)
      .css('color', getUsernameColor(data.username));

	var chatMsg = strip(data.message);
	var $messageBodyDiv = $('<span class="messageBody">')
	  .text(chatMsg);

    var typingClass = data.typing ? 'typing' : '';
    var $messageDiv = $('<li class="message"/>')
      .data('username', data.username)
      .addClass(typingClass)
      .append($usernameDiv, $messageBodyDiv);

    addMessageElement($messageDiv, options);
  }

  // Adds the visual chat typing message
  function addChatTyping (data) {
    data.typing = true;
    data.message = 'is typing';
    addChatMessage(data);
  }

  // Removes the visual chat typing message
  function removeChatTyping (data) {
    getTypingMessages(data).fadeOut(function () {
      $(this).remove();
    });
  }

  // Adds a message element to the messages and scrolls to the bottom
  // el - The element to add as a message
  // options.fade - If the element should fade-in (default = true)
  // options.prepend - If the element should prepend
  //   all other messages (default = false)
  function addMessageElement (el, options) {
    var $el = $(el);

    // Setup default options
    if (!options) {
      options = {};
    }
    if (typeof options.fade === 'undefined') {
      options.fade = true;
    }
    if (typeof options.prepend === 'undefined') {
      options.prepend = false;
    }

    // Apply options
    if (options.fade) {
      $el.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
      $messages.prepend($el);
    } else {
      $messages.append($el);
    }
    $messages[0].scrollTop = $messages[0].scrollHeight;
  }

  // Prevents input from having injected markup
  function cleanInput (input) {
    return $('<div/>').text(input).text();
  }

  // Updates the typing event
  function updateTyping () {
    if (connected) {
      if (!typing) {
        typing = true;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr4=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xhr4=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  }

		if (mode.value == "private") {
			xhr4.open("GET","/chat?CHAT_FUNC=isTyping&UID=" + aUser.value + '&NICK=' + username + '&mode=' + mode.value + '&roomID=' + roomID.value, true);			
		} else {
			xhr4.open("GET","/chat?CHAT_FUNC=isTyping&UID=" + aUser.value + '&NICK=' + username + '&mode=' + mode.value + '&roomID=' + roomID.value, true); 
		}
		xhr4.send();	
		
      }
      lastTypingTime = (new Date()).getTime();

      setTimeout(function () {
        var typingTimer = (new Date()).getTime();
        var timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
			
          typing = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  }

  // Gets the 'X is typing' messages of a user
  function getTypingMessages (data) {
    return $('.typing.message').filter(function (i) {
      return $(this).data('username') === data.username;
    });
  }

  // Gets the color of a username through our hash function
  function getUsernameColor (username) {
    // Compute hash code
    var hash = 7;
    for (var i = 0; i < username.length; i++) {
       hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    var index = Math.abs(hash % COLORS.length);
    return COLORS[index];
  }

  // Keyboard events

  $window.keydown(function (event) {
    // Auto-focus the current input when a key is typed
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      //$currentInput.focus();
    }
    // When the client hits ENTER on their keyboard
    if (event.which === 13) {
      if (username) {
        sendMessage();
        //socket.emit('stop typing');
        typing = false;
      } else {
        setUsername();
      }
    }
  });

  $inputMessage.on('input', function() {
    updateTyping();
  });

  // Click events

  // Focus input when clicking anywhere on login page
  $loginPage.click(function () {
    //$currentInput.focus();
  });

  // Focus input when clicking on the message input's border
  $inputMessage.click(function () {
    //$inputMessage.focus();
  });
  
	function soundNow() {
		
		var root = location.protocol + '//' + location.host;
		var aSound = document.createElement('audio');

		if (isEdge == true || isIE == true || isSafari == true) {
			soundManager.createSound({
				id: 'star2',
				volume: 50,
				url: root + "/static/audio/R2D2e.mp3"
			});
			playSound('star2');
		} else {
			soundManager.createSound({
				id: 'star2',
				volume: 50,
				url: root + "/static/audio/R2D2e.ogg"
			});
			playSound('star2');
		}
		
	}

	function onOpen() {
		soundNow();
		alertify.success("Channel opened...");
		// Display the welcome message
		var message = "Welcome to ULAPPH Chat! \nTo display help information, type /help.";
		log(message, {
		  prepend: true
		});
		var mode = document.getElementById("mode");
		var message = "************" + "CHANNEL: " + mode.value + "************";
		log(message, {
		  prepend: true
		});
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

		if (urlParams["logLink"] != "" && urlParams["logLink"] !=  undefined) {
			var message = "Conversation logs are available for this session.";
			log(message, {
			  prepend: true
			});
			var message = urlParams["logLink"];
			log(message, {
			  prepend: true
			});
		}
		
		if (isEdge == true || isIE == true || isSafari == true) {
			soundManager.createSound({
				id: 'welcome',
				volume: 50,
				url: root + "/static/audio/welcome.mp3"
			});
			playSound('welcome');
		} else {
			soundManager.createSound({
				id: 'welcome',
				volume: 50,
				url: root + "/static/audio/welcome.ogg"
			});
			playSound('welcome');
		}
		
		connected = true;
		
		setInterval(function(){checkMessagesLoop()}, 300000);
			
	}

	function checkMessagesLoop(){
		
		repStat();
		return
			
	}
	
	function repStat() {
	  
		var aUser = document.getElementById("aUser");
		if (aUser.value == "") {
			return;
		}
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttstat=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttstat=new ActiveXObject('MSXML2.XMLHTTP.3.0');
		  }
		var mode = document.getElementById("mode");
		chk_url = '/people?PEOPLE_FUNC=REP-ACT2&UID=' + aUser.value + '&mode=' + mode.value ;
		xmlhttstat.open("GET",chk_url,true);
		xmlhttstat.send();
		return;
	};
	
	//strip html from chat messages
	function strip(html)
	{
	   var tmp = document.createElement("DIV");
	   tmp.innerHTML = html;
	   return tmp.textContent||tmp.innerText;
	}
	
	function procMessage(obj) {
 		var res = obj.message;
		var n = res.indexOf("notify-icon.png");
		var a = res.indexOf("alert-icon.png");
		var d = res.indexOf("danger-cat.png");
		var m = res.indexOf("newmessage.gif");
		var k = res.indexOf("knock, knock!!!");
		var ncp = res.indexOf("comment posted");
		var u = res.indexOf("*ULAPPH_UP ");
		var wm = res.indexOf("EB-MONITOR");
		var x = res.indexOf("ULAPPH-CHAT@888@");
		var p = res.indexOf("ULAPPH-PRESENTER@888@");
		var sysUpd = res.indexOf("ULAPPH-SYS-UPD@888@");
		var t = res.indexOf(" is typing...");
		var s = res.indexOf(" stopped typing...");
		var e = document.getElementById("channel-area");
		var e1 = res.indexOf("error");
		var e2 = res.indexOf("ERROR");
		var str = res; 
		var resp = str.split(":");
		var root = location.protocol + '//' + location.host;
	if (sysUpd > 0) {
		var cmdata = str.split("@888@");
		switch (cmdata[2]) {
			case "SYS_UPDATE_TLM":
				var tlm = document.getElementById("menu");
				tlm.innerHTML = cmdata[3];
				alertify.error("Top List Menu has been updated!");
				break;
				
			case "SYS_UPDATE_SND":
				switch (cmdata[3]) {
					case "off":
						soundManager.stopAll();
						alertify.error("Sound has been disabled.");
						document.getElementById("soundStat").value = "off";
						break;
					case "on":
						testSound();
						alertify.error("Sound has been enabled.");
						document.getElementById("soundStat").value = "on";
						break;

				}
				alertify.error("System sound preference updated to " + cmdata[3], "", 0);
				break;
		}
		return;
	}

		if (p > 0) {
			return;
		}		
		
		if (resp[0] == "DELETED") {

			alertify.log("SESSION DELETED...<br>", "", 0);
			setTimeout(function(){location.reload(true);},5000);
			return
		}
			
		if (res == "LOGOUT.") {
			alertifyThis(res);
			window.location.assign("/logout?LFUNC=LOGOUT");
			alertify.log("Logged out...", "", 0);
			return
		}
		
		if ((res == "CHANNEL CONNECTED.") && (FL_CONNECTED_OK == false)) {
			innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-connected.png' width=60 height=60></img></a>CHANNEL CONNECTED.";		
			FL_CONNECTED_OK = true;
			alertifyThis(innerHTML);
			return
		}
		if (u >= 0) {
			alertify.error(res, "", 0);
			var aSound = document.createElement('audio');
			if (r.value != "") {
				
					if (isEdge == true || isIE == true || isSafari == true) {
						soundManager.createSound({
							id: 'notes',
							volume: 50,
							url: r.value
						});
						playSound('notes');
					} else {		
						soundManager.createSound({
							id: 'notes',
							volume: 50,
							url: r.value
						});
						playSound('notes');
					}
			}
			return;
		}
		if (k > 0) {
			alertifyThis(res);
			var aSound = document.createElement('audio');
			var root = location.protocol + '//' + location.host;
			
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'knock',
						volume: 50,
						url: root + "/static/audio/ahem_x.mp3"
					});
					playSound('knock');
				} else {	
					soundManager.createSound({
						id: 'knock',
						volume: 50,
						url: root + "/static/audio/ahem_x.ogg"
					});
					playSound('knock');
				}
			return;
		}
		if (ncp > 0) {
			alertifyThis(res);
			var aSound = document.createElement('audio');
			var root = location.protocol + '//' + location.host;
			
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'comment',
						volume: 50,
						url: root + "/static/audio/ahem_x.mp3"
					});
					playSound('comment');
				} else {	
					soundManager.createSound({
						id: 'comment',
						volume: 50,
						url: root + "/static/audio/ahem_x.ogg"
					});
					playSound('comment');
				}
			return;
		}
		if (e1 > 0 || e2 > 0) {
			chatifyThis(res);
			//alertifyThis(res);
			var aSound = document.createElement('audio');
			var root = location.protocol + '//' + location.host;
			if (r.value != "") {
				soundManager.createSound({
					id: 'mySoundE',
					volume: 50,
					url: root + "/static/audio/error.ogg"
				});
				soundManager.play('mySoundE');
			}
			return;
		}
		if (m > 0) {
			alertifyThis(res);
			
			var aSound = document.createElement('audio');
			if (r.value != "") {
				
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'knock',
						volume: 50,
						url: root + "/static/audio/R2D2e.mp3"
					});
					playSound('newMsg');
				} else {	
					soundManager.createSound({
						id: 'newMsg',
						volume: 50,
						url: r.value
					});
					playSound('newMsg');
				}
			}
			return;
		}
		if (t > 0 || s > 0) {
			alertifyTyping(res);
			return;
		}
		if (x > 0) {
			chatifyThis(res);
			
			if (wm <= 0) {
				var aSound = document.createElement('audio');
				if (r.value != "") {
					soundManager.createSound({
						id: 'uChat',
						volume: 50,
						url: r.value
					});
					playSound('uChat');
				}
			} else {
				var root = location.protocol + '//' + location.host;
				
				if (isEdge == true || isIE == true || isSafari == true) {
					soundManager.createSound({
						id: 'webmon',
						volume: 50,
						url: root + "/static/audio/jamesbrown.mp3"
					});
					playSound('webmon');
				} else {	
					soundManager.createSound({
						id: 'webmon',
						volume: 50,
						url: root + "/static/audio/jamesbrown.ogg"
					});
					playSound('webmon');
				}
			}
			return;
		}
		if (a > 0) {
			alertifyThis(res);
			var root = location.protocol + '//' + location.host;
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'alert',
					volume: 50,
					url: root + "/static/audio/emergency030.mp3"
				});
				playSound('alert');
			} else {	
				soundManager.createSound({
					id: 'alert',
					volume: 50,
					url: root + "/static/audio/emergency030.ogg"
				});
				playSound('alert');
			}
			return;
		}
		if (res != "CHANNEL CONNECTED." && res != "CHANNEL ERROR." && res != "CHANNEL DISCONNECTED." && res != undefined) {
			if (n == -1 && d == -1) {
				var aSound = document.createElement('audio');
				if (r.value != "") {
					soundManager.createSound({
						id: 'normal',
						volume: 50,
						url: r.value
					});
					playSound('normal');
				} else {

					if (isEdge == true || isIE == true || isSafari == true) {
						soundManager.createSound({
							id: 'baby',
							volume: 50,
							url: root + "/static/audio/baby2.mp3"
						});
						playSound('baby');
					} else {
						soundManager.createSound({
							id: 'baby',
							volume: 50,
							url: root + "/static/audio/baby2.ogg"
						});
						playSound('baby');
					}
				}

			} else {
			
				if (d == -1) { 
					var aSound = document.createElement('audio');
					var root = location.protocol + '//' + location.host;
					
					if (isEdge == true || isIE == true || isSafari == true) {
						soundManager.createSound({
							id: 'star',
							volume: 50,
							url: root + "/static/audio/R2D2e.mp3"
						});

						playSound('star');
					} else {
						soundManager.createSound({
							id: 'star',
							volume: 50,
							url: root + "/static/audio/R2D2e.ogg"
						});

						playSound('star');
					}
				
				} else {
					var aSound = document.createElement('audio');

					if (isEdge == true || isIE == true || isSafari == true) {
						soundManager.createSound({
							id: 'siren',
							volume: 50,
							url: root + "/static/audio/WarningSiren.mp3"
						});
						playSound('siren');		

					} else {
						soundManager.createSound({
							id: 'siren',
							volume: 50,
							url: root + "/static/audio/WarningSiren.ogg"
						});
						playSound('siren');		
					}
				
				}
			
			}
			return;
		}
		return;
	}

	function onError(err) {
		soundNow();
		innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-error.png' width=60 height=60></img></a></a>CHANNEL ERROR. <br>[<a href='/stream?STR_FUNC=DEL_CHAN&UID=" + aUser.value + "'>Reset Channel</a>]";
		alertifyThis(innerHTML);
		addChatMessage({
			username: "ULAPPH:",
			message: "Channel Error! Reconnecting..."
		 });
		//reConnect();
		return;
	}

	function onClose() {
		soundNow();
		innerHTML = "<a href='/infodb?DB_FUNC=ULAPPH-NOTIFICATIONS-LOG&SID=ULAPPH-NOTIFICATIONS-LOG' target='notifications'><img src='/static/img/channel-disconnected.png' width=60 height=60></img></a>CHANNEL DISCONNECTED. <br>[<a href='/stream?STR_FUNC=DEL_CHAN&UID=" + aUser.value + "'>Reset Channel</a>]";
		alertifyThis(innerHTML);
		addChatMessage({
			username: "ULAPPH:",
			message: "Channel closed! Reconnecting..."
		 });
		 //reConnect();
		 return;
	}

	function alertifyThis(message2) {	
		alertify.set({ delay: 50000 });
		alertify.log(message2);
		return;
	}
	
	function alertifyTyping(res) {
		var SPL = res.split("@888@");
		var UID = SPL[2];
		var MSG = SPL[3];
		if (UID != username) {
			alertify.set({ delay: 3000 });
			alertify.log(SPL[3]);
		}
		return;
	}

	function chatifyThis(res) {
		var data = res.split("@888@");
		  var UID = data[2] + ":";
		  var MSG = data[3];
		  addChatMessage({
			username: UID,
			message: MSG
		  });
		  
		//blink title
		$.titleAlert(UID + MSG, {
			requireBlur:true,
			stopOnFocus:true,
			duration:30000,
			interval:500
		});
		
		//log sessions to local storage
		//var ses = MSG.split(" has joined from ");
		var ses = MSG.split(" has joined channel ");
		var ses2 = MSG.split(" has joined ULAPPH ");
		if (ses.length == 2 || ses2.length == 2) {
			//sound door open
			var root = location.protocol + '//' + location.host;
			

			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'door_open',
					volume: 50,
					url: root + "/static/audio/door-open.mp3"
				});
				playSound('door_open');
			} else {
				soundManager.createSound({
					id: 'door_open',
					volume: 50,
					url: root + "/static/audio/door-open.ogg"
				});
				playSound('door_open');
			}
			
			if(typeof(Storage) !== "undefined") {
				if (localStorage.usersList) {
					localStorage.usersList = localStorage.usersList + "\n" + ses[0];
				} else {
					localStorage.usersList = ses[0];
				}
			} else {
				var message = "Sorry, your browser does not support web storage... You won't be able to record or see session details.";
				log(message, {
				  prepend: true
				});
				return
			}
		}

		var ses = MSG.split(" has left ULAPPH Chat");
		if (ses.length == 2) {
			//sound door close
			var root = location.protocol + '//' + location.host;
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'door_close',
					volume: 50,
					url: root + "/static/audio/door-close.mp3"
				});
				playSound('door_close');
			} else {
				soundManager.createSound({
					id: 'door_close',
					volume: 50,
					url: root + "/static/audio/door-close.ogg"
				});
				playSound('door_close');
			}
			return
		}

		if (MSG == "/knock") {
			//sound aheam
			var aSound = document.createElement('audio');
			var root = location.protocol + '//' + location.host;
			
			if (isEdge == true || isIE == true || isSafari == true) {
				soundManager.createSound({
					id: 'knock',
					volume: 50,
					url: root + "/static/audio/ahem_x.mp3"
				});
				playSound('knock');
			} else {
				soundManager.createSound({
					id: 'knock',
					volume: 50,
					url: root + "/static/audio/ahem_x.ogg"
				});
				playSound('knock');
			}
			return;
		}
		
		var res = MSG.toLowerCase();
		var ses = res.split(" ");
		var mes = MSG.split(" ");
		if (ses.length > 0 && ses[0] == "/image") {
			thisImg = '<img src="' + mes[1] + '" width=250 width=250>';
			alertify.success(UID + " sent IMAGE:<br>" + thisImg, "", 0);
			return
		}
		
		var res = MSG.toLowerCase();
		var ses = res.split(" ");
		var mes = MSG.split(" ");
		if (ses.length > 0 && ses[0] == "/link") {
			thisLink = '<a href="' + mes[1] + '" target=link>CLICK HERE TO OPEN LINK</a>';
			alertify.success(UID + " sent LINK:<br>" + thisLink, "", 0);
			return
		}
		
		var res = MSG.toLowerCase();
		var ses = res.split(" ");
		var mes = MSG.split(" ");
		if (ses.length > 0 && ses[0] == "/sendmail") {
			sendGmail();
			return
		}
		
		return;
	}
});

function knock(uid) {
	var kurl = location.protocol + '//' + location.host + '/guestbook?GB_FUNC=KNOCK&UID=' + uid;
	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  cxhr2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  cxhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
	  } 
	cxhr2.open("GET",kurl, true); 
	cxhr2.send();
	alertify.error("Knock knock has been sent!");
};

function guestbook(uid) {
   var url = "/guestbook?UID=" + uid;
   var win = window.open(url, '_blank');
   win.focus();
};

function viewSlide(num) {
   var url = "/slides?TYPE=SLIDE&DOC_ID=" + num + "&SID=TDSSLIDE-" + num;
   var win = window.open(url, '_blank');
   win.focus();
};

function viewArticle(num) {
   var url = "/articles?TYPE=ARTICLE&DOC_ID=" + num + "&SID=TDSARTL-" + num;
   var win = window.open(url, '_blank');
   win.focus();
};

function viewMedia(num) {
   var url = "/media?FUNC_CODE=VIEW&MEDIA_ID=" + num + "&SID=TDSARTL-" + num;
   var win = window.open(url, '_blank');
   win.focus();
};

function newChatRoom() {
   var url = "/chat?CHAT_FUNC=newChatRoom";
   var win = window.open(url, '_blank');
   win.focus();
};


function openLink(url) {
   if (ValidUrl(url) == true) {
	   var win = window.open(url, '_blank');
	   win.focus();
   } else {
	   var turl = "http://www.google.com/search?q=" + url;
 	   var win = window.open(turl, '_blank');
	   win.focus();  
   }
};

function ValidUrl(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  if(!pattern.test(str)) {
    return false;
  } else {
    return true;
  }
}

function playSound(sid) {
	var ss = document.getElementById("soundStat");
	if (ss.value == "on") {
		soundManager.play(sid);
	}
}

function sendGmail() {
	alert("Sending email... Opening a new window...");
	var chat_notes = "";
	var root = location.protocol + '//' + location.host;
	var roomID = document.getElementById("roomID").value;
	var aUser = document.getElementById("aUser").value;
	var messages = "PLEASE COPY PASTE FROM CHAT WINDOW...";
	chat_notes = 'https://mail.google.com/mail/?view=cm&tf=0&fs=1' + '&to=' + aUser + '&su=' + '[ULAPPH] Ushare Chats for ' + roomID + ' @ ' + root +  '&body=' + messages;
	window.open(chat_notes, '_blank');
}
