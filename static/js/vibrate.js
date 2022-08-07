//view-source:http://aurelio.audero.it/demo/vibration-api-demo.html
window.navigator = window.navigator || {};
function vibrateOnce() {
	navigator.vibrate(1000);
	return
};
	
function vibrateMulti() {
	navigator.vibrate([1000, 500, 1000, 500, 5000]);
	return
};

function vibrateStop() {
	   navigator.vibrate(0);
	   return
};