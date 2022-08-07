//'use strict';
var urlParams;

initFirebase();

var match,
		pl     = /\+/g,  // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query  = window.location.search.substring(1);

urlParams = {};
while (match = search.exec(query))
   urlParams[decode(match[1])] = decode(match[2]);

//function initGame(gameKey, me, token, channelId, initialMessage) {
function initFirebase() {
	//console.log("initFirebase()");

  // This is our Firebase realtime DB path that we'll listen to for updates
  // We'll initialize this later in openChannel()
  var channel = null;
  var channelB = null;
  var channelC = null;

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
	  //procMessage(newState);
  }
  
  /**
   * This function opens a realtime communication channel with Firebase
   * It logs in securely using the client token passed from the server
   * then it sets up a listener on the proper database path (also passed by server)
   * finally, it calls onOpened() to let the server know it is ready to receive messages
   */
  function openChannel() {
    // sign into Firebase with the token passed from the server
	//get from local storage
	var root = location.protocol + '//' + location.host;
    console.log("root: "+root);
	var idToken = "";
	if(typeof(Storage) !== "undefined") {
		idToken = localStorage[root+'idToken'];
	}
    console.log("idToken: "+idToken);
	//if user is not logged in; no idToken in LS!
	if (idToken == "" || idToken == undefined) {
		//console.log("no token found in ls");
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  cxhr2=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  cxhr2=new ActiveXObject('MSXML2.XMLHTTP.3.0');
		  } 
		cxhr2.open("GET","/tools?FUNC=GET_TOKEN", true); 
		cxhr2.send();
		
		 cxhr2.onreadystatechange=function()
		  {
		  if (cxhr2.readyState==4 && cxhr2.status==200)
			{
				var currVal = JSON.parse(cxhr2.responseText);
				console.log(currVal);
				idToken = currVal.STR_FILLER1;
				localStorage[root+'aep'] = currVal.STR_FILLER2;
				localStorage[root+'sss'] = currVal.STR_FILLER3;
				localStorage[root+'tok'] = idToken;
				return;
			}
		  }
		//return;
	}
    firebase.auth().signInWithCustomToken(String(idToken)).catch(function(error) {
      console.log('Login Failed!', error.code);
      //console.log('Error message: ', error.message);
	  return;
    });
	console.log('Login successful!');
	var aep = "";
	var chToken = "";
	var sss = "";
	if(typeof(Storage) !== "undefined") {
		aep = localStorage[root+'aep'];
		console.log('aep: '+aep);
		chToken = localStorage[root+'tok'];
		console.log('chToken: '+chToken);
		sss = localStorage[root+'sss'];
		console.log('sss: '+sss);
	}
	var refChan = aep + '/channel/' + chToken;
	//console.log("refChan: ", refChan);
	channel = firebase.database().ref(refChan);
	//listener
    channel.limitToLast(1).on('value', function(data) {
	  //console.log("value");
	  console.log("Received from: "+refChan);
      onMessage(data.val());
    });
	//listener
    channel.limitToLast(1).on('child_added', function(data) {
	  //console.log("child_added");
      onMessage(data.val());
    });
	//listener
	var pubChan = sss + '/channel-public/notifications';
	//console.log("pubChan: ", pubChan);
	channelB = firebase.database().ref(pubChan);
	//listener
	channelB.limitToLast(1).on('child_added', function(data) {
	  //console.log("child_added");
	  console.log("Received from: "+pubChan);
	  onMessage(data.val());
	});
	//listener
	var cctvChan = sss + '/' + aep + '/cctv';
	console.log("cctvChan: ", cctvChan);
	channelC = firebase.database().ref(cctvChan);
	//listener
	channelC.limitToLast(1).on('child_added', function(data) {
	  console.log("child_added");
	  console.log("Received from: "+cctvChan);
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
  }
  setTimeout(initialize, 100);
}
