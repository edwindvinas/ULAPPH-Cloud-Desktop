addEventListeners();

function handleBodyKeyDown(event) {
  // If we're in a code element, only handle pgup/down.
  var inCode = event.target.classList.contains("code");

  switch (event.keyCode) {
	case 27: //escape key
		//launch search page
		var tgt = '/tools?FUNC=WIDGET&t=MiniBrowserGet';
		location.href = tgt;
		break;
	case 50: //number 2
		//launch as google user in current site
		var tgt = '/?q=login&LFUNC=GOOGLE';
		location.href = tgt;
		break;
  }
};

function addEventListeners() {
  document.addEventListener('keydown', handleBodyKeyDown, false);
};
