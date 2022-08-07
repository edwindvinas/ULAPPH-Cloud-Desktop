//--start timer codes
// Set timeout variables.
var timoutWarning = 21600000; // Display warning in 6 Hours.
var timoutNow = 60000; // Warning has been shown, give the user 1 minute to interact
var logoutUrl = "/logout"; // URL to logout page.

var warningTimer;
var timeoutTimer;

// Start warning timer.
function StartWarningTimer() {
    warningTimer = setTimeout("IdleWarning()", timoutWarning);
	setbackground();
}

// Reset timers.
function ResetTimeOutTimer() {
    clearTimeout(timeoutTimer);
    StartWarningTimer();
    $("#timeout").dialog('close');
}

// Show idle timeout warning dialog.
function IdleWarning() {
    clearTimeout(warningTimer);
    timeoutTimer = setTimeout("IdleTimeout()", timoutNow);
    $("#timeout").dialog({
        modal: true
    });
    // Add code in the #timeout element to call ResetTimeOutTimer() if
    // the "Stay Logged In" button is clicked
}

// Logout the user.
function IdleTimeout() {
    window.location = logoutUrl;
}
//--- end timer codes

//--randomly change background
function setbackground()
{
window.setTimeout( "setbackground()", 5000); // 5000 milliseconds delay

var index = Math.round(Math.random() * 9);

var ColorValue = "FFFFFF"; // default color - white (index = 0)

if(index == 1)
ColorValue = "FFCCCC"; //peach
if(index == 2)
ColorValue = "CCAFFF"; //violet
if(index == 3)
ColorValue = "A6BEFF"; //lt blue
if(index == 4)
ColorValue = "99FFFF"; //cyan
if(index == 5)
ColorValue = "D5CCBB"; //tan
if(index == 6)
ColorValue = "99FF99"; //lt green
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FFCC99"; //lt orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey

document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}