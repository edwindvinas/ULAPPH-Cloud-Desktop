//http://jsfiddle.net/kelunik/pkjze6e6/42/
var node = document.getElementById("page");
var longpress = false;
var presstimer = null;
var longtarget = null;
var root = location.protocol + '//' + location.host;

var cancel = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }
    
    this.classList.remove("longpress");
};

var click = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }
    
    this.classList.remove("longpress");
    
    if (longpress) {
        return false;
    }
    
    //alert("press");
	//keyEvents.js
	addEventListeners();
};

var start = function(e) {
    //console.log(e);
    if (e.type === "click" && e.button !== 0) {
        return;
    }
    
    longpress = false;
    
    this.classList.add("longpress");
    
    presstimer = setTimeout(function() {
        //console.log("long click");
		//launchAS();
        longpress = true;
		addEventListeners();
    }, 1000);
	
    return false;
};

function launchAS() {
	console.log("launchAS()");
};

node.addEventListener("mousedown", start);
node.addEventListener("touchstart", start);
node.addEventListener("click", click);
node.addEventListener("mouseout", cancel);
node.addEventListener("touchend", cancel);
node.addEventListener("touchleave", cancel);
node.addEventListener("touchcancel", cancel);

//for mobile only
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
			//alertify.log("Swiped left...");
			//scanCctvStream("L");
            if (localStorage[root+"news"] == "on") {
                stopTalking();
                funcshow();
            } else if (localStorage[root+'isStreaming'] == 'Y') {
                scanCctvStream("L");
            } else {
                nextWp();
            }
        } else {
            /* right swipe */
			//scanCctvStream("R");
			//alertify.log("Swiped right...");
            if (localStorage[root+"news"] == "on") {
                stopTalking();
                funcshow();
            } else if (localStorage[root+'isStreaming'] == 'Y') {
                scanCctvStream("R");
            } else {
                nextWp();
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
			//scanCctvStream("C");
			//alertify.log("Swiped up...");
            if (localStorage[root+"news"] == "on") {
                selectRandomDesktop();
            } else if (localStorage[root+'isStreaming'] == 'Y') {
                scanCctvStream("C");
            } else {
                nextWp();
            }
        } else { 
            /* down swipe */
			//scanCctvStream("O");
			//alertify.log("Swiped down...");
            if (localStorage[root+"news"] == "on") {
                selectRandomDesktop();
            } else if (localStorage[root+'isStreaming'] == 'Y') {
                scanCctvStream("O");
            } else {
                nextWp();
            }
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};