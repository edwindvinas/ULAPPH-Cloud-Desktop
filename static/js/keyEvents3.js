addEventListeners();

function handleBodyKeyDown(event) {
	// If we're in a code element, only handle pgup/down.
	//19 for Mac Command+S
	if (!( String.fromCharCode(event.which).toLowerCase() == 's' && event.ctrlKey) && !(event.which == 19)) return true;

	//alert("Ctrl-s pressed");
	console.log("Ctrl-s pressed");
	env.saveData(1);
	
	event.preventDefault();
	return false;
};

function addEventListeners() {
  document.addEventListener('keydown', handleBodyKeyDown, false);
};
