'use strict';

initFirebase();

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
	//geoloc();
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
      if (thisGrp == "GRP_ADMIN") {
	    console.log("onMessage(): "+newState);
      }
	  if (isJson(newState) == true) {
		  var jsonObj = JSON.parse(newState);
		  if(jsonObj.hasOwnProperty('message')){
			  procMessage(jsonObj);
		  }
	  }
  }
  
  /**
   * This function opens a realtime communication channel with Firebase
   * It logs in securely using the client token passed from the server
   * then it sets up a listener on the proper database path (also passed by server)
   * finally, it calls onOpened() to let the server know it is ready to receive messages
   */
  function openChannel() {
	//open channel only on uwm0	
    // sign into Firebase with the token passed from the server
	var jwt = document.getElementById("jwt");
    var root = location.protocol + '//' + location.host;
    var idToken = "";
    if (jwt) {
	    idToken = jwt.value;
    }
	//save to ls
	if(typeof(Storage) !== "undefined") {
		localStorage[root+'idToken'] = idToken;
	}
	if (firebase) {
		firebase.auth().signInWithCustomToken(idToken).catch(function(error) {
		  console.log('Login Failed!', error.code);
		  console.log('Error message: ', error.message);
		});
	} else {
	console.log('Firebase not enabled');
	}
	console.log('Firebase Login successful!');
	//get message for the user channel
	var tok = document.getElementById("tok");
	var aep = document.getElementById("aep");
	var sss = document.getElementById("sss");
	//save to ls
    var tokVal = "";
    var aepVal = "";
    var sssVal = "";
	if(typeof(Storage) !== "undefined" && tok != undefined) {
        //uwm
		localStorage[root+'tok'] = tok.value;
		localStorage[root+'aep'] = aep.value;
		localStorage[root+'sss'] = sss.value;
        tokVal = tok.value;
        aepVal = aep.value;
        sssVal = sss.value;
	} else {
        //apps which uses tokens
        tokVal = localStorage[root+'tok'];
        aepVal = localStorage[root+'aep'];
        sssVal = localStorage[root+'sss'];
    }
	var refChan = aepVal + '/channel/' + tokVal;
	console.log("refChan: ", refChan);
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
	//listener
	var pubChan = sssVal + '/channel-public/notifications';
	//console.log("pubChan: ", pubChan);
	channelB = firebase.database().ref(pubChan);
	//listener
	channelB.limitToLast(1).on('child_added', function(data) {
	  //console.log("child_added");
	  onMessage(data.val());
	});
	//listener
	var cctvChan = sssVal + '/' + aepVal + '/cctv';
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
   * Check if message is JSON
  */
	function isJson(item) {
		item = typeof item !== "string"
			? JSON.stringify(item)
			: item;

		try {
			item = JSON.parse(item);
		} catch (e) {
			return false;
		}

		if (typeof item === "object" && item !== null) {
			return true;
		}

		return false;
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
