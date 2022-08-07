var JSWMImagePath = '/static/img/';
var JSWMTabMargins = 4; // total extra width of tab buttons (margins + borders)

var JSWMImages = {
	//add : 'jswm-add.png',
	nw : 'jswm-add.png',
	add : 'jswm-close.png',
	closeTab : 'jswm-close_tab.png',
	closeWindow : 'jswm-close.png',
	expand : 'jswm-down.png',
	collapse: 'jswm-up.png',
};

var JSWMImagesHover = new Object();

for(i in JSWMImages)
{
	JSWMImagesHover[i] = JSWMImagePath + 'hover_' + JSWMImages[i];
	JSWMImages[i] = JSWMImagePath + JSWMImages[i];
	// pre-load
	(new Image()).src = JSWMImages[i];
	(new Image()).src = JSWMImagesHover[i];
}