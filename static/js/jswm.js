/** 
 * @fileoverview JavaScript Window Manager
 * @author Ed Sanders
 * @version 0.3 
 */
 
var root = location.protocol + '//' + location.host;
var l = document.createElement("a");
l.href = root;
var thisHostname = l.hostname;
var lastHalfed = "";

var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

var JSWMLib = {
	Version: '0.3',
	load: function() {
		if(
			(typeof Scriptaculous == 'undefined') ||
			parseFloat(Scriptaculous.Version.split(".")[0] + "." + Scriptaculous.Version.split(".")[1]) < 1.7
		)
			throw("JSWM requires the Scriptaculous JavaScript library >= 1.7.0");
	}
};

JSWMLib.load();

Lineclear = function()
{
	var lc = document.createElement('div');
	lc.className = 'JSWM_lineclear';
	lc.innerHTML = '<span></span>';
	return lc;
}

TextButton = function(f, text, title)
{
	var a = document.createElement('A');
	a.innerHTML = text;
	a.onclick = f;
	a.href = "#";
	if(title)
		a.title = title;
	return a;
}

ImageButton = function(f, src, alt, title, hoverSrc)
{
	var img = document.createElement('IMG');
	img.onclick = f;
	img.style.cursor = 'pointer';
	img.src = src;
	img.alt = alt;
	if(title)
		img.title = title;
	if(hoverSrc)
	{
		img.onmouseover = function() { img.src = hoverSrc; };
		img.onmouseout = function() { img.src = src; };
		new Image().src = hoverSrc; // preload hover image
	}
	return img;
};

Element.addMethods({
	removeChildren: function(object)
		{
			while(object.firstChild)
				object.removeChild(object.firstChild);
		}
	}
);

/**
 * Truncate text inside a span using log a binary search
 * @method
 * @param {string} text  text to truncate
 * @param {Element} element  in-line element containing text
 * @param {Element} container  block element containing text element (to test height change)
 * @param {int} w  Maximum width
 * @param {int} h  Maximum height
 */
JSWMtruncate = function(text, element, container, w, h)
{
	if(element.getWidth() > w || container.getHeight() > h)
	{
		var len = text.length;
		var i = Math.floor(len / 4);
		var lasti = 0;
		while(lasti != i && i < len && i >= 0)
		{
			var i2 = i;
			element.replaceChild(document.createTextNode(text.substring(0, text.length - i) + '…'), element.firstChild);
			if(element.getWidth() > w || container.getHeight() > h)
			{
				i += Math.ceil(Math.abs(lasti - i)/2);
			}
			else if(Math.abs(lasti - i) > 1)
			{
				i -= Math.ceil(Math.abs(lasti - i)/2);
			}
			else
			{
				break;
			}
			lasti = i2;
		}
		element.replaceChild(document.createTextNode(text.substring(0, text.length - i) + '…'), element.firstChild);
	}
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();
var pngSupport = !(BrowserDetect.browser == 'Explorer' && BrowserDetect.OS == 'Windows' && BrowserDetect.version < 7);/**
 * Expand/collapse button (v/^)
 * @constructor
 * @param {Function} f  Function to be fired by the onclick event
 */
var ExpandButton = Class.create();
ExpandButton.prototype.initialize = function(f)
{
	this.img = document.createElement('IMG');
	this.img.onclick = f;
	this.img.style.cursor = 'pointer';
	this.img.alt = '+/-';
};

/**
 * Get Element
 * @method
 * @return {Element}  The expand button
 */
ExpandButton.prototype.getButton = function()
{
	return this.img;
};

/**
 * Set the expand button graphic
 * @method
 * @param {boolean} isExpanded  New state
 * @param {boolean} isNode  Item is a node (can't be expanded)
 */
ExpandButton.prototype.set = function(isExpanded, isNode)
{
	var _this = this;
	var icon = isExpanded ? JSWMImages.collapse : JSWMImages.expand;
	var iconHover = isExpanded ? JSWMImagesHover.collapse : JSWMImagesHover.expand;

	this.img.src = icon;
	this.img.onmouseover = function() {
		_this.img.src = iconHover;
	};
	this.img.onmouseout = function() {
		_this.img.src = icon;
	};
};/**
 * Construct a window manager
 * @constructor
 * @param {int[]} margins  Window manager margins [top, right, bottom, left], default [0, 0, 0, 0]
 * @param {boolean[]} constraints  Window manager edge constraints [top, right, bottom, left], default [true, false, false, false] //TODO
 */
var JSWM = Class.create();
JSWM.prototype.initialize = function(margins, constraints)
{
	this.contents = document.body.appendChild(document.createElement('DIV'));
	this.contents.className = 'JSWM_manager';
	this.windows = new Array();
	this.topZIndex = 100;
	this.lastActiveWindow = null;
	if(!margins) margins = [0, 0, 0, 0];
	this.margins = margins;
	if(!constraints) constraints = [true, false, false, false];
	this.constraints = constraints;
};

/**
 * Tile all windows across the viewport
 * @method
 */
JSWM.prototype.tile = function()
{
	soundAllWindows();
	var gridSizeW = Math.ceil(Math.sqrt(this.windows.length));
	var gridSizeH = Math.ceil(this.windows.length/gridSizeW);
	var windowSize = this.getWindowSize();
	var w = Math.floor((windowSize.width - 10)/gridSizeW);
	var h = Math.floor((windowSize.height - 10)/gridSizeH);

	for(var i = 0; i < this.windows.length; i++)
	{
		this.windows[i].setSize(w, h - 20);
		this.windows[i].setPosition((i % gridSizeW) * w,(Math.floor(i / gridSizeW) * h) + 22);
		this.windows[i].redrawShadow();
		this.windows[i].setActive();
	}
	
};

/**
 * Close all windows across the viewport
 * @method
 */
JSWM.prototype.clear = function()
{
	soundAllWindows();
	for(var i = 0; i < this.windows.length; i++)
	{
		this.windows[i].close();
	}
	
};

/**
 * Cascade all windows across the viewport
 * @method
 */
JSWM.prototype.cascade = function()
{
	soundAllWindows();
	var windowSize = this.getWindowSize();
	var w = Math.floor((windowSize.width - 10) * 2/3);
	var h = Math.floor((windowSize.height - 10) * 2/3);
	var l = Math.floor((windowSize.width - 10 - w) / (this.windows.length - 1));
	var t = Math.floor((windowSize.height - 10 - h) / (this.windows.length - 1));
	if(this.windows.length == 1)
	{
		l = 0;
		t = 0;
	}
	for(var i = 0; i < this.windows.length; i++)
	{
		this.windows[i].setSize(w, h - 20);
		this.windows[i].setPosition(i * l, (i * t) + 22);
		this.windows[i].redrawShadow();
		this.windows[i].setActive();
	}
};

/**
 * Sequentially activate windows in a desktop
 * @method
 */
JSWM.prototype.nextwindow = function()
{
	dn = document.getElementById("desktop").value;
	consoleLogger("dn: "+dn);
	curWin = parseInt(localStorage['lastwin-'+dn]);
	if (localStorage['lastwin-'+dn] == undefined) {
		curWin = -1;
	}
	if (curWin >= this.windows.length-1) {
		curWin = -1;
	}
	consoleLogger("curWin: "+curWin);
	
	for(var i = 0; i < this.windows.length; i++)
	{
		if (i > curWin) {
			consoleLogger("open window: "+i);
			this.windows[i].setActive();
			localStorage['lastwin-'+dn] = i;
			break;
		}
	}
};

/**
 * Collapse all collapsible windows
 * @method
 */
JSWM.prototype.collapseAll = function()
{
	soundAllWindows();
	
	for(var i = 0; i < this.windows.length; i++)
		if(!this.windows[i].noCollapse)
			this.windows[i].expand(false);
		
	
};

/**
 * Re-Cascade leaving menu list visible
 * @method
 */
JSWM.prototype.hideAll = function()
{
	soundAllWindows();
	var windowSize = this.getWindowSize();
	var w = Math.floor((windowSize.width - 10) * 2/3);
	var h = Math.floor((windowSize.height - 10) * 2/3);
	var l = Math.floor((windowSize.width - 10 - w) / (this.windows.length - 1));
	var t = Math.floor((windowSize.height - 10 - h) / (this.windows.length - 1));
	if(this.windows.length == 1)
	{
		l = 0;
		t = 0;
	}
	for(var i = 0; i < this.windows.length; i++)
	{
		this.windows[i].setSize(w, h - 20);
		this.windows[i].setPosition((i * l) + 900, (i * t) + 22);
		this.windows[i].redrawShadow();
		this.windows[i].setActive();
	}
};

/**
 * Expand all collapsible windows
 * @method
 */
JSWM.prototype.expandAll = function()
{
	soundAllWindows();
	
	for(var i = 0; i < this.windows.length; i++)
		if(!this.windows[i].noCollapse)
			this.windows[i].expand(true);
		
	
};

/**
 * Create a new empty window
 * @method
 * @param {int} w  Window width
 * @param {int} h  Window height
 * @param {JSWindowOptions} options  Initial options
 */
JSWM.prototype.openNew = function(w, h, l, t, options)
{
	var jsWindow = new JSWindow(this, w, h, l, t, options);
	this.addWindow(jsWindow)
};

JSWM.prototype.openWindow = function(uri, title)
{	

	//save to ls
	var d = document.getElementById("desktop");
	if(typeof(Storage) !== "undefined") {
		var root = location.protocol + '//' + location.host;
		//thisHTML = "<li><h3><a href='" + uri + "' title='" + title + "'>" + title + "</a></h3>";
		thisHTML = "<li><a href='" + uri + "' title='" + title + "'>" + title + "</a><a href='/tools?FUNC=WIDGET&t=ADDICON&uwm=desktop" + urlParams["u"] + "&url=" + uri + "&title=" + title + "' title='Add to Icons DB' target='addtab'>" + "<img src='/static/img/top-icon.png' width=20 height=20>" + "</a>";
		localStorage[root+d.value] = localStorage[root+d.value] + thisHTML;
		window.open(uri,'_blank')
	}
};

/**
 * Create a new window with an iframe
 * @method
 * @param {string} uri  URI to load in iframe
 * @param {int} w  Window width
 * @param {int} h  Window height
 * @param {JSWindowOptions} options  Initial options
 */
JSWM.prototype.openURI = function(uri, w, h, l, t, options)
{	

	//save to ls
	this.options = options;
	var otl = this.options.title;
	var d = document.getElementById("desktop");
	var uid = document.getElementById("aUser").value;
	var isYoutube = uri.indexOf("youtube.com");
	var n = uri.indexOf("?");
	if (n > 0) {
		uri = uri+"&UID="+uid+"&uid="+uid;
	} else {
		uri = uri+"?UID="+uid+"&uid="+uid;
	}
	if(typeof(Storage) !== "undefined") {
		var root = location.protocol + '//' + location.host;
		thisHTML = "<li><a href='" + uri + "' title='" + otl + "'>" + otl + "</a><a href='/tools?FUNC=WIDGET&t=ADDICON&uwm=desktop" + urlParams["u"] + "&url=" + uri + "&title=" + otl + "' title='Add to Icons DB' target='addtab'>" + "<img src='/static/img/top-icon.png' width=20 height=20>" + "</a>";
		localStorage[root+d.value] = localStorage[root+d.value] + thisHTML;
	}
	
	//edv 1/14/2018
	//if browser is edge and diff domains; open in new tab
	var siteDom = getDomain(location.protocol + '//' + location.host);
	var uriDom = getDomain(uri);
	if ((isEdge == true || isIE == true || isSafari == true) && (siteDom != uriDom)) {
		window.open(uri,'_blank')
		return;		
	}
	
	var isMobile = document.getElementById("isMobile").value;
	var isSmallScreen = localStorage[root+'isScreenSmall'];
	if (isMobile == "true" || isSmallScreen == "Y") {
		window.open(uri,'_blank')
		return;
	}

	if (isYoutube > 0) {
		window.open(uri,'_blank')
		return;
	}
	
	var iFrame = document.createElement('IFRAME');
	var desktop = document.getElementById("desktop").value;
	iFrame.src = uri;
	iFrame.name = 'iframe' + Math.round(Math.random() * 1000000);
	//this.options = options;
	//var otl = this.options.title;
	this.options.title = this.options.title + ' :: ' +  uri + ' :: ' +  thisHostname;
	
	iFrame.style.border = '0';
	iFrame.style.width = '100%';
	iFrame.style.height = '100%';
	var jsWindow = new JSWindow(this, w, h, l, t, options, iFrame);
	jsWindow.lastActiveTab.contents.style.overflow = 'hidden';
	this.addWindow(jsWindow);
	soundOpen();
	//repActive(uri, otl);
};

JSWM.prototype.openDOC = function(hdoc, w, h, l, t, options)
{
	var iFrame = document.createElement('IFRAME');
	
	var idxContent = ""
	if(typeof(Storage) !== "undefined") {
		idxContent = localStorage.searchStorage;
	}
	iFrame.srcdoc = '<!doctype html>' + '<html>' + idxContent + '</html>';
	iFrame.name = 'iframe' + Math.round(Math.random() * 1000000);
	iFrame.allowfullscreen = 'true';
	this.options = options;

	this.options.title = this.options.title +  ' :: ' + 'ULAPPH Cloud Desktop' + ' :: ' + thisHostname;
	
	iFrame.style.border = '0';
	iFrame.style.width = '100%';
	iFrame.style.height = '100%';
	var jsWindow = new JSWindow(this, w, h, l, t, options, iFrame);
	jsWindow.lastActiveTab.contents.style.overflow = 'hidden';
	this.addWindow(jsWindow);
	soundOpen();
};

JSWM.prototype.openST = function(hdoc, w, h, l, t, options)
{
	var iFrame = document.createElement('IFRAME');
	
	var idxContent = ""
	if(typeof(Storage) !== "undefined") {
		idxContent = localStorage.startStorage;
	}
	iFrame.srcdoc = '<!doctype html>' + '<html>' + idxContent + '</html>';
	iFrame.name = 'iframe' + Math.round(Math.random() * 1000000);
	iFrame.allowfullscreen = 'true';
	this.options = options;

	this.options.title = this.options.title +  ' :: ' + 'ULAPPH Cloud Desktop' + ' :: ' + thisHostname;
	
	iFrame.style.border = '0';
	iFrame.style.width = '100%';
	iFrame.style.height = '100%';
	var jsWindow = new JSWindow(this, w, h, l, t, options, iFrame);
	jsWindow.lastActiveTab.contents.style.overflow = 'hidden';
	this.addWindow(jsWindow);
	soundOpen();
};


/**
 * Determines if an element is already wrapped
 * @method
 * @param {Element} contents  Contents to look for
 * @return {boolean}  True if element is wrapped in a window
 */
JSWM.prototype.isWrapped = function(contents)
{
	contents = $(contents);
	for(var i = 0; i < this.windows.length; i++)
		for(var j = 0; j < this.windows[i].tabs.length; j++)
			if(this.windows[i].tabs[j].contents.firstChild == contents)
				return true;
	return false;
};

/**
 * Create a new window around an existing content
 * @method
 * @param {Element} contents  Element to wrap
 * @param {int} w  Window width
 * @param {int} h  Window height
 * @param {JSWindowOptions} options  Initial options
 * @param {boolean} force  Re wrap contents even if already wrapped
 */
JSWM.prototype.openElement = function(contents, w, h, l, t, options, force)
{
	if(!force && this.isWrapped(contents))
		return; // return if content already wrapped

	var jsWindow = new JSWindow(this, w, h, l, t, options, contents);
	this.addWindow(jsWindow)
};

/**
 * Add a window to the manager
 * @method
 * @param {JSWindow} jsWindow  Window to add
 */
JSWM.prototype.addWindow = function(jsWindow)
{
	this.windows.push(jsWindow);
	jsWindow.redrawShadow();
	jsWindow.setActive();
};

/**
 * Set target window as active
 * @method
 * @param {JSWindow} jsWindow  Window to make active
 */
JSWM.prototype.setActiveWindow = function(jsWindow)
{
	jsWindow.container.style.zIndex = this.topZIndex;
	this.topZIndex++;

	jsWindow.container.addClassName('JSWM_window_active');
	if(this.lastActiveWindow && this.lastActiveWindow != jsWindow)
		this.lastActiveWindow.container.removeClassName('JSWM_window_active');
	this.lastActiveWindow = jsWindow;
	//alert("setActiveWindow");
	addEventListeners();
};

/**
 * Get size of viewport (less margins)
 * @method
 * @returns {Object}  Dimension of viewport
 */
JSWM.prototype.getWindowSize = function()
{
	if (window.innerWidth)
	{
		w = window.innerWidth;
	  h = window.innerHeight;
	}
	else if (window.document.documentElement && window.document.documentElement.clientWidth)
	{
	  w = window.document.documentElement.clientWidth;
	  h = window.document.documentElement.clientHeight;
	}
	else
	{
		w = body.offsetWidth;
		h = body.offsetHeight;
	}
	w -= this.margins[1] + this.margins[3];
	h -= this.margins[0] + this.margins[2];
	return {width: w, height: h};
};

/**
 * Write object state data for serialisation
 * @method
 * @returns {Object} serialData  Object serialisation data
 */
JSWM.prototype.writeObject = function()
{
	var serialData = new Object();
	serialData.windows = new Array();
	for(var i = 0; i < this.windows.length; i++)
	{
		serialData.windows[i] = this.windows[i].writeObject();
		if(this.windows[i] == this.lastActiveWindow)
			serialData.lastActiveWindow = i;
	}
	return serialData;
};

/**
 * Read serialised object state data into the window manager
 * @method
 * @param {String} serialData  Object serialisation data
 */
JSWM.prototype.readObject = function(serialData)
{
	for(var i = 0; i < serialData.windows.length; i++)
	{
		var w = serialData.windows[i];
		var jsWindow = new JSWindow(this, w.size.width, w.size.height, w.position.left, w.position.top, w.options);
		this.addWindow(jsWindow)
		if(serialData.lastActiveWindow == i)
			jsWindow.setActive();
		jsWindow.readObject(w);
	}
};/**
 * Window class
 * @constructor
 * @param {Element} element  Container window or contents (if contentExists)
 * @param {int} w  Window width
 * @param {int} h  Window height
 * @param {JSWindowOptions} options  Window options
 * @param {boolean} contentExists  Flag to indicate element points to existing content to be wrapped
 */
var JSWindow = Class.create();
JSWindow.prototype.initialize = function(manager, w, h, l, t, options, contents)
{
	var _this = this;
	this.minWidth = 200;
	this.minHeight = 50;
	this.tabs = new Array();
	this.minTabButtonWidth = 100;
	this.maxTabButtonWidth = 200;
	this.manager = manager;
	this.options = options;
				
	this.container = this.manager.contents.appendChild(document.createElement('DIV'));
	Element.extend(this.container);
	this.innerContainer = this.container.appendChild(document.createElement('DIV'));
	if(!this.options.noCollapse)
	{
		this.slide = this.innerContainer.appendChild(document.createElement('DIV'));
		var nest = this.slide.appendChild(document.createElement('DIV'));
		this.contents = nest.appendChild(document.createElement('DIV'));
	}
	else
	{
		this.contents = this.innerContainer.appendChild(document.createElement('DIV'));
		this.slide = this.contents;
	}
	this.tabList = this.contents.appendChild(document.createElement('UL'));
	this.tabList.className = 'JSWM_tabList'
	Element.extend(this.tabList);

	this.contents.appendChild(new Lineclear());
	if(!contents)
		contents = document.createElement('DIV');
	this.openTab(contents);

	this.container.style.position = 'absolute'; // IE fix
	this.container.addClassName('JSWM_window');
	this.handle = this.innerContainer.insertBefore(document.createElement('DIV'), this.slide);
	this.handle.className = 'JSWM_window_handle';
	handleRight = this.handle.appendChild(document.createElement('DIV'));
	handleRight.className = 'JSWM_window_handle_right'

	if(!this.options.noResize)
	{
		this.resizeNW = this.innerContainer.appendChild(document.createElement('DIV'));
		this.resizeNW.className = 'JSWM_window_resize JSWM_window_resizeNW';
		this.resizeNW.style.position = 'absolute'; // IE fix
		var dragNW = function(drag) {
			var offset = drag.currentDelta ? drag.currentDelta() : Position.positionedOffset(drag);
			_this.setSize(-offset[0], -offset[1], 3, true);
		};
		this.resizeNE = this.innerContainer.appendChild(document.createElement('DIV'));
		this.resizeNE.className = 'JSWM_window_resize JSWM_window_resizeNE';
		this.resizeNE.style.position = 'absolute'; // IE fix
		var dragNE = function(drag) {
			var offset = drag.currentDelta ? drag.currentDelta() : Position.positionedOffset(drag);
			_this.setSize(offset[0] + 10, null, 2);
			_this.setSize(0, -offset[1], 2, true);
		};
		this.resizeSW = this.innerContainer.appendChild(document.createElement('DIV'));
		this.resizeSW.className = 'JSWM_window_resize JSWM_window_resizeSW';
		this.resizeSW.style.position = 'absolute'; // IE fix
		var dragSW = function(drag) {
			var offset = drag.currentDelta ? drag.currentDelta() : Position.positionedOffset(drag);
			_this.setSize(-offset[0], 0, 1, true);
			_this.setSize(null, offset[1] + 10 - 20, 1);
		};
		this.resizeSE = this.innerContainer.appendChild(document.createElement('DIV'));
		this.resizeSE.className = 'JSWM_window_resize JSWM_window_resizeSE';
		this.resizeSE.style.position = 'absolute'; // IE fix
		var dragSE = function(drag) {
			var offset = drag.currentDelta ? drag.currentDelta() : Position.positionedOffset(drag);
			_this.setSize(offset[0] + 10, offset[1] + 10 - 20, 0);
		};
		if(!this.options.noResizeRedraw)
		{
			new Draggable(this.resizeNW, {change: dragNW, starteffect: null, endeffect: null});
			new Draggable(this.resizeNE, {change: dragNE, starteffect: null, endeffect: null});
			new Draggable(this.resizeSW, {change: dragSW, starteffect: null, endeffect: null});
			new Draggable(this.resizeSE, {change: dragSE, starteffect: null, endeffect: null});
		}
		else
		{
			new Draggable(this.resizeNW, {starteffect: null, endeffect: dragNW});
			new Draggable(this.resizeNE, {starteffect: null, endeffect: dragNE});
			new Draggable(this.resizeSW, {starteffect: null, endeffect: dragSW});
			new Draggable(this.resizeSE, {starteffect: null, endeffect: dragSE});
		}
		Event.observe(this.resizeNW, 'mousedown', function() { _this.setActive(); }, false)
		Event.observe(this.resizeNE, 'mousedown', function() { _this.setActive(); }, false)
		Event.observe(this.resizeSW, 'mousedown', function() { _this.setActive(); }, false)
		Event.observe(this.resizeSE, 'mousedown', function() { _this.setActive(); }, false)
		//Event.observe(this.handle, 'dblclick', function() { _this.maximise(); }, false)
		Event.observe(this.handle, 'dblclick', function() { _this.halfimise(); }, false)
		Event.observe(window, 'resize', function() { _this.updateMaximise(); });
	}
	handleRight.appendChild(new ImageButton(function() { _this.close(); }, JSWMImages.add, '-', 'close tab', JSWMImagesHover.add));
	handleRight.appendChild(new ImageButton(function() { _this.maximise(); }, JSWMImages.nw, '-', 'maximize', JSWMImagesHover.nw));
	
	if(!this.options.noCollapse)
	{
		this.slideOptions = {
			afterFinish: function() { _this.redrawTabList(true); _this.redrawShadow(); },
			afterUpdate: function() { _this.redrawShadow(); },
			duration: 0.3,
			queue: {
				position: 'end',
				scope: 'JSWindow' + Math.random()
			}			
		};
		this.expanded = true;
		this.expandButton = new ExpandButton(function() { _this.expand(); });
		this.expandButton.set(true);
		handleRight.appendChild(this.expandButton.getButton());
	}

	if(!this.options.noShadow && pngSupport)
	{
		var shadowContainer = this.container.insertBefore(document.createElement('DIV'), this.innerContainer);
		shadowContainer.className = 'JSWM_shadow_container';

		this.shadowNE = shadowContainer.appendChild(document.createElement('DIV'));
		this.shadowNE.className = 'JSWM_shadowNE';
		this.shadowSW = shadowContainer.appendChild(document.createElement('DIV'));
		this.shadowSW.className = 'JSWM_shadowSW';
		this.shadowSE = shadowContainer.appendChild(document.createElement('DIV'));
		this.shadowSE.className = 'JSWM_shadowSE';

		this.shadowS = shadowContainer.appendChild(document.createElement('DIV'));
		this.shadowS.className = 'JSWM_shadowS';
		this.shadowE = shadowContainer.appendChild(document.createElement('DIV'));
		this.shadowE.className = 'JSWM_shadowE';

		Element.extend(this.innerContainer);
	}

	if(!this.options.noClose)
	{
		//var closeButton = handleRight.appendChild(new ImageButton(function() { _this.close(); }, JSWMImages.closeWindow, 'x', 'close', JSWMImagesHover.closeWindow));
		//closeButton.className = 'close';
	}

	this.contents.className = 'JSWM_window_contents'

	this.titleLabel = this.handle.appendChild(document.createElement('DIV'));
	this.titleLabel.className = 'JSWM_window_title';
	Element.extend(this.titleLabel);
	if(!this.options.title) this.options.title = '';
	this.setTitle(this.options.title, this.options.icon);
	
	if(!this.options.noDrag)
	{
		this.drag = new Draggable(this.container, {
			handle: _this.handle,
			starteffect: function(){
				var pagePos = Position.cumulativeOffset(_this.container);
				var offsetPos = _this.drag.currentDelta();
				_this.startPos = [pagePos[0] - offsetPos[0], pagePos[1] - offsetPos[1]];
			},
			snap: function(x, y){
				return _this.maximised ? [0, 0 + 20] : [x, Math.max(-_this.startPos[1] + _this.manager.margins[0], y)];
			},
			change: function() { _this.onmove(); },
			endeffect: function() { _this.ondrop(); _this.setActive(); }
		});
		Event.observe(this.innerContainer, 'mousedown', function() { _this.setActive(); }, false)
		Event.observe(this.handle, 'mousedown', function() { _this.setActive(); }, false)
	}
	this.handle.appendChild(new Lineclear());
	Element.extend(this.contents);
	switch(String(l).toLowerCase())
	{
		case 'left':
			l = 0;
			break;
		case 'center':
		case 'middle':
			l = (this.manager.getWindowSize().width - w) / 2;
			break;
		case 'right':
			l = this.manager.getWindowSize().width - w - 10;
			break;
	}

	switch(String(t).toLowerCase())
	{
		case 'top':
			t = 22;
			break;
		case 'center':
		case 'middle':
			t = (this.manager.getWindowSize().height - h) / 2;
			break;
		case 'bottom':
			t = this.manager.getWindowSize().height - h - 10;
			break;
	}
	t = Math.max(t, 0);
	this.setPosition(l, t);
	this.setSize(w, h, 0);
};

/**
 * Open a new tab in a window
 * @method
 * @param {Element} contents  Contents to place in tab
 * @param {boolean} force  Add even if contents are already wrapped
 */
JSWindow.prototype.openTab = function(contents, force)
{
	var _this = this;
	contents = $(contents);
	if(!force && contents && this.manager.isWrapped(contents))
		return false;
	var tabContents = document.createElement('DIV');
	if(contents)
		tabContents.appendChild(contents);
	var jsTab = new JSTab(this, tabContents, this.tabs.length + 'long tab name ' + this.tabs.length, '/static/img/jswm-tab.png');
	this.addTab(jsTab)
};

JSWindow.prototype.newWindow = function(contents, force)
{
	document.getElementById("newJSWM").value = "https://";
	newJSWMWindow();
};

/**
 * Add a tab to the tab manager
 * @method
 * @param {JSTab} jsTab  Tab to add
 */
JSWindow.prototype.addTab = function(jsTab)
{
	jsTab.i = this.tabs.length;
	this.tabs.push(jsTab);
	this.tabList.appendChild(jsTab.getButton());
	this.redrawTabList();
	jsTab.setActive();
	this.contents.appendChild(jsTab.contents);
};

/**
 * Sets a tab as active
 * @method
 * @param {Element} jsTab  Tab to make active
 */
JSWindow.prototype.setActiveTab = function(jsTab)
{
	var redraw = false;
	if(this.fadeTabs)
		var scope = "tab" + Math.random();
	if(this.lastActiveTab && this.lastActiveTab != jsTab)
	{
		if(this.fadeTabs)
		{
			this.lastActiveTab.contents.style.display = 'block';
			new Effect.Fade(this.lastActiveTab.contents, {duration: .2, queue: {position: 'end', scope: scope}});
		}
		else
		{
			this.lastActiveTab.contents.style.display = 'none';
		}
		this.lastActiveTab.tabButton.removeClassName('JSWM_tabButton_active');
		redraw = true;
	}
	if(this.fadeTabs && this.lastActiveTab != jsTab)
	{
		jsTab.contents.style.display = 'none';
		new Effect.Appear(jsTab.contents, {duration: .2, queue: {position: 'end', scope: scope}});
	}
	else
	{
		jsTab.contents.style.display = 'block';
	}
	jsTab.tabButton.addClassName('JSWM_tabButton_active');
	this.lastActiveTab = jsTab;
	if(redraw)
		this.setSize(0, 0, 0, true);
};

/**
 * Redraw the tab list
 * @method
 * @param {boolean} force  Recalculate tab name truncation even if width hasn't changed (for post collapse event) 
 */
JSWindow.prototype.redrawTabList = function(force)
{
	if(this.tabs.length <= 1)
	{
		this.tabList.style.display = 'none';
	}
	else
	{
		this.tabList.style.display = 'block';
		var w = this.getSize().width - 20;
		var tabWidth = Math.floor(w / this.tabs.length);
		tabWidth = Math.min(tabWidth, this.maxTabButtonWidth);
		tabWidth = Math.max(tabWidth, this.minTabButtonWidth);
		tabWidth -= JSWMTabMargins;
		tabsRemoved = 0;
		while(tabWidth * (this.tabs.length - tabsRemoved) > w)
			tabsRemoved++;
			
		var i = 0;
		// remove tabs before active one
		while(this.tabs[i] != this.lastActiveTab && i < this.tabs.length && i < tabsRemoved)
		{
			this.tabs[i].tabButton.style.display = 'none';
			i++;
		}
		// draw as many tabs as can fit
		var drawTo = this.tabs.length - (tabsRemoved - i);
		while(i < drawTo)
		{
			this.tabs[i].tabButton.style.display = 'block';
			var curWidth = parseInt(this.tabs[i].tabButton.style.width);
			if(curWidth != tabWidth || force)
			{
				this.tabs[i].tabButton.style.width = tabWidth + 'px';
				this.tabs[i].setTitle(this.tabs[i].title, this.tabs[i].icon);
			}
			i++;
		}
		// remove remaining tabs
		while(i < this.tabs.length)
		{
			this.tabs[i].tabButton.style.display = 'none';
			i++;
		}
	}
};

/**
 * Expand/collapse a collapsible window
 * @method
 * @param {boolean} expand  Mode to expand to, null to toggle
 */
JSWindow.prototype.expand = function(expand)
{
	soundShowHide();
	if(expand == null || expand != this.expanded)
	{
		if(expand == null)
		{
			this.expanded = !this.expanded;
		}
		else
		{
			this.expanded = expand;
		}
		if(this.expanded)
		{
			new Effect.SlideDown(this.slide, this.slideOptions);
		}
		else
		{
			new Effect.SlideUp(this.slide, this.slideOptions);
		}
	}
	this.expandButton.set(this.expanded);
	
};

/**
 * Maximise / restore window
 * @method
 */
JSWindow.prototype.maximise = function()
{
	soundMinMax();
	if(this.maximised)
	{
		this.maximised = false;
		this.container.removeClassName('JSWM_window_maximised');
		this.setPosition(this.restorePosition.left, this.restorePosition.top);
		this.setSize(this.restoreSize.width, this.restoreSize.height, 0);
	}
	else
	{
		this.container.addClassName('JSWM_window_maximised');
		this.restoreSize = this.getSize();
		this.restorePosition = this.getPosition();
		this.setPosition(0, 0 + 20);
		var windowSize = this.manager.getWindowSize();
		this.setSize(windowSize.width - 2, windowSize.height - 4 - 20, 0);
		this.maximised = true;
	}
	
};

/**
 * Halfimise / restore window
 * @method
 */
JSWindow.prototype.halfimise = function()
{
	soundMinMax();
	if(this.maximised)
	{
		this.maximised = false;
		this.container.removeClassName('JSWM_window_maximised');
		this.setPosition(this.restorePosition.left, this.restorePosition.top);
		this.setSize(this.restoreSize.width, this.restoreSize.height, 0);
	}
	else
	{
		this.container.addClassName('JSWM_window_maximised');
		this.restoreSize = this.getSize();
		this.restorePosition = this.getPosition();
		
		var windowSize = this.manager.getWindowSize();
		
		if (lastHalfed == "") {
			if (this.getPositionLoc() == "left") {
				this.setPosition(0, 0 + 20);
				lastHalfed = "left";
			} else {
				this.setPosition(((windowSize.width - 2) / 2) + 2, 0 + 20);
				lastHalfed = "right";
			}
		} else {
			if (lastHalfed == "right") {
				this.setPosition(0, 0 + 20);
				lastHalfed = "left";
			} else {
				this.setPosition(((windowSize.width - 2) / 2) + 2, 0 + 20);
				lastHalfed = "right";
			}			
		}
		this.setSize((windowSize.width - 2) / 2, windowSize.height - 4 - 20, 0);
		this.maximised = true;
	}
	
};

/**
 * Update maximise size if window is resized
 * @method
 */
JSWindow.prototype.updateMaximise = function()
{
	if(this.maximised)
	{
		var windowSize = this.manager.getWindowSize();
		this.maximised = false;
		this.setSize(windowSize.width - 2, windowSize.height - 4 - 20, 0);
		this.maximised = true;
	}
};

/**
 * Get the current size
 * @method
 * @return {object}  Object containing .width and .height
 */
JSWindow.prototype.getSize  = function()
{
	return {width: parseInt(this.slide.style.width), height: parseInt(this.slide.style.height)};
};

/**
 * Get the current position
 * @method
 * @return {object}  Object containing .left and .top
 */
JSWindow.prototype.getPosition  = function()
{
	return {left: parseInt(this.container.style.left) - this.manager.margins[3], top: parseInt(this.container.style.top) - this.manager.margins[0]};
};

/**
 * Get the current position whether left or right
 * @method
 * @return {object}  Object containing .left and .top
 */
JSWindow.prototype.getPositionLoc  = function()
{
	var windowSize = this.manager.getWindowSize();
	if (parseInt(this.container.style.left) - (windowSize.width / 2) > 0) {
		return "right";
	} else {
		return "left";
	}
};

/**
 * Set window as active, shortcut to JSWM.setActiveWindow()
 * @method
 */
JSWindow.prototype.setActive = function()
{
	this.manager.setActiveWindow(this);
};

/**
 * Resize a window
 * @method
 * @param {int} w  New width, null indicates no change
 * @param {int} h  New height, null indicates no change
 * @param {int} fixedCorner  The corner to fix while resizing 0 = NW, 1 = NE, 2 = SW, 3 = SE
 * @param {boolean} relative  Indicates that the supplied size is relative to the current size
 */
JSWindow.prototype.setSize = function(w, h, fixedCorner, relative)
{
	var size = this.getSize();
	if(relative)
	{
		w += size.width;
		h += size.height;
	}
	if(this.maximised)
	{
		w = size.width;
		h = size.height;
	}
	if(w == null) w = size.width;
	if(h == null || !this.expanded) h = size.height;

	w = Math.max(w, this.minWidth);
	h = Math.max(h, this.minHeight);

	this.handle.style.width = w + 'px';
	this.slide.style.width = w + 'px';
	this.slide.style.height = h + 'px';
	this.contents.style.width = w + 'px';
	this.innerContainer.style.width = (w + 2) + 'px';
	this.lastActiveTab.contents.style.width = w + 'px';
	this.lastActiveTab.contents.style.height = (h - (this.tabs.length > 1 ? this.tabList.getHeight() : 0)) + 'px';

	if(fixedCorner % 2 == 1) // right of window fixed
		this.setPosition(size.width - w, 0, true)

	if(fixedCorner >= 2) // bottom of window fixed
		this.setPosition(0, size.height - h, true)

	w += 2; //total horizontal border width
	h += 4; //total vertical border height
	h += 20; //title bar
	this.resizeNW.style.left = '0';
	this.resizeNW.style.top = '0';
	this.resizeNE.style.left = (w - 10) + 'px';
	this.resizeNE.style.top = '0';
	this.resizeSW.style.left = '0';
	this.resizeSW.style.top = (h - 10) + 'px';
	this.resizeSE.style.left = (w - 10) + 'px';
	this.resizeSE.style.top = (h - 10) + 'px';
	this.redrawShadow();
	this.redrawTabList();
	this.setTitle(this.title, this.icon);
};

/**
 * Position the window aboslutely or relatively
 * @method
 * @param {int} l  Distance from the left of the viewport
 * @param {int} t  Distance from the top of the viewport
 * @param {boolean} relative  Indicates that the supplied coordinates a relative to the current position
 */
JSWindow.prototype.setPosition = function(l, t, relative)
{
	if(relative)
	{
		var position = this.getPosition();
		if(l != null)
			l += position.left;
		if(t != null)
			t += position.top;
	}
	if(l != null)
	{
		l += this.manager.margins[3];
		this.container.style.left = l + 'px';
	}
	if(t != null)
	{
		t += this.manager.margins[0]
		this.container.style.top = t + 'px';
	}
};

/**
 * Set the window title
 * @method
 * @param {string} title  The new title
 * @param {string} icon  Window icon uri
 */
JSWindow.prototype.setTitle = function(title, icon)
{
	this.title = title;
 	this.titleLabel.removeChildren();
 	var span = this.titleLabel.appendChild(document.createElement('SPAN'));
	span.appendChild(document.createTextNode(this.title));
	Element.extend(span);
	var titleSpace = this.titleLabel.getWidth() - 20;
	JSWMtruncate(title, span, this.handle, titleSpace, 25);
	this.titleLabel.title = title;
	
	this.icon = icon;
	this.titleLabel.style.backgroundImage = 'url("' + this.icon + '")';
};

/**
 * Fires when component is moved (if set to draggable)
 * @method
 */
JSWindow.prototype.onmove = function(drag) {};

/**
 * Fires when component is dropped (if set to draggable)
 * @method
 */
JSWindow.prototype.ondrop = function(drag) {};

/**
 * Redraws the drop shadow
 * @method
 */
JSWindow.prototype.redrawShadow = function()
{
	if(!this.options.noShadow && pngSupport)
	{
		var w = this.innerContainer.getWidth();
		var h = this.innerContainer.getHeight();
		if(this.expanded)
			h += 2; // combined border width of top and bottom
		this.shadowNE.style.left = w + 'px';
		this.shadowSE.style.left = w + 'px';
		this.shadowE.style.left = w + 'px';
		this.shadowSW.style.top = h + 'px';
		this.shadowSE.style.top = h + 'px';
		this.shadowS.style.top = h + 'px';
		if(w > 6)
			this.shadowS.style.width = (w - 6) + 'px'
		if(h > 6)
			this.shadowE.style.height = (h - 6) + 'px';
	}
};

/**
 * Start of tab dragging, calculate inital positions
 * @method
 * @param {Element} item  Tab being dragged
 */
JSWindow.prototype.dragTabStart = function(item)
{
	this.tabPositions = new Array();
	for(var i = 0; i < this.tabs.length; i++)
	{
		this.tabPositions[i] = Position.positionedOffset(this.tabs[i].tabButton);
	}
	this.start = Position.positionedOffset(item);
};

/**
 * Read serialised object state data into the window
 * @method
 * @param {String} serialData  Object serialisation data
 */
JSWindow.prototype.readObject = function(serialData)
{
	this.setSize(serialData.size.width, serialData.size.height);
	this.setPosition(serialData.position.left, serialData.position.top);
	this.options = serialData.options;
		
	this.expand(serialData.expanded);
	if(serialData.maximised)
	{
		this.maximise();
		this.restoreSize = serialData.restoreSize;
		this.restorePosition = serialData.restorePosition;
	}
	this.contents.style.zIndex = serialData.zIndex;
	this.tabs[0].close()
	for(var i = 0; i < serialData.tabs.length; i++)
	{
		var t = serialData.tabs[i];
		var jsTab = new JSTab(this, document.createElement('DIV'), t.title, t.icon);
		this.addTab(jsTab);
		jsTab.readObject(t);
		if(serialData.lastActiveWindow == i)
			jsWindow.setActive();
	}
};

/**
 * Write object state data for serialisation
 * @method
 * @returns {Object} serialData  Object serialisation data
 */
JSWindow.prototype.writeObject = function()
{
	var serialData = new Object();
	serialData.size = this.getSize();
	serialData.position = this.getPosition();
	serialData.options = this.options;
	serialData.options.title = this.title;
	serialData.options.icon = this.icon;
	if(this.maximised)
	{
		serialData.maximised = this.maximised;
		serialData.restoreSize = this.restoreSize;
		serialData.restorePosition = this.restorePosition;
	}
	
	serialData.expanded = this.expanded;
	serialData.zIndex = this.container.style.zIndex;
	serialData.tabs = new Array();
	for(var i = 0; i < this.tabs.length; i++)
	{
		serialData.tabs[i] = this.tabs[i].writeObject();
		if(this.tabs[i] == this.lastActiveTab)
			serialData.lastActiveTab = i;
	}
	return serialData;
};

/**
 * Close window
 * @method
 */
JSWindow.prototype.close = function()
{
	soundClose();
	this.manager.windows = this.manager.windows.without(this);
	this.container.parentNode.removeChild(this.container);
	
	
};

function soundOpen() {
	
	var aSound = document.createElement('audio');
	var root = location.protocol + '//' + location.host;
	
	if (isEdge == true || isIE == true || isSafari == true) {
		consoleLogger("isSafari/IE/Edge");
		soundManager.createSound({
			id: 'mySoundOJ',
			volume: 50,
			url: root + "/static/audio/fullscreen.mp3"
		});
		playSoundJswm('mySoundOJ');
	} else {				
		soundManager.createSound({
			id: 'mySoundOJ',
			volume: 50,
			url: root + "/static/audio/fullscreen.ogg"
		});
		playSoundJswm('mySoundOJ');
	}
	return;
	
};

function soundClose() {
	
	var aSound = document.createElement('audio');
	var root = location.protocol + '//' + location.host;
	
	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'mySoundC',
			volume: 30,
			url: root + "/static/audio/closeWindow.mp3"
		});
		playSoundJswm('mySoundC');
	} else {
		soundManager.createSound({
			id: 'mySoundC',
			volume: 30,
			url: root + "/static/audio/closeWindow.ogg"
		});
		playSoundJswm('mySoundC');
	}
	return;
	
};

function soundShowHide() {
	
	var aSound = document.createElement('audio');
	var root = location.protocol + '//' + location.host;
	
	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'mySoundH',
			volume: 50,
			url: root + "/static/audio/showHide.mp3"
		});
		playSoundJswm('mySoundH');
	} else {
		soundManager.createSound({
			id: 'mySoundH',
			volume: 50,
			url: root + "/static/audio/showHide.ogg"
		});
		playSoundJswm('mySoundH');
	}
	return;
	
};

function soundMinMax() {
	
	var aSound = document.createElement('audio');
	var root = location.protocol + '//' + location.host;
	
	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'mySoundM',
			volume: 50,
			url: root + "/static/audio/minMax.mp3"
		});
		playSoundJswm('mySoundM');
	} else {
		soundManager.createSound({
			id: 'mySoundM',
			volume: 50,
			url: root + "/static/audio/minMax.ogg"
		});
		playSoundJswm('mySoundM');
	}
	return;
	
};

function soundAllWindows() {
	
	var aSound = document.createElement('audio');
	var root = location.protocol + '//' + location.host;
	
	if (isEdge == true || isIE == true || isSafari == true) {
		soundManager.createSound({
			id: 'mySoundA',
			volume: 50,
			url: root + "/static/audio/allWindows.mp3"
		});
		playSoundJswm('mySoundA');
	} else {
		soundManager.createSound({
			id: 'mySoundA',
			volume: 50,
			url: root + "/static/audio/allWindows.ogg"
		});
		playSoundJswm('mySoundA');
	}
	return;
	
};

function repActive(uri, title) {
	
	var aUser = document.getElementById("aUser");
	//if (aUser.value == "" && urlParams["mode"] == "guest" && urlParams["user"] != "") {
		//this is a guest
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttact=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttact=new ActiveXObject('MSXML2.XMLHTTP.3.0');
		  }
		 
		var res = encodeURI(uri);
		chk_url = '/people?PEOPLE_FUNC=REP-ACT&UID=' + urlParams["user"] + '&url=' + res + '&title=' + title ;
		xmlhttact.open("GET",chk_url,true);
		xmlhttact.send();
		//display random content
		//dispAds();
	//}
	return;
};

function playSoundJswm(sid) {
	var ss = document.getElementById("soundStat");
	if (ss.value == "on") {
		//soundManager.pauseAll();
		soundManager.play(sid);
		//soundManager.resumeAll();
	}
	return;
};

/**
 * Window tab
 * @constructor
 * @param {JSWindow} jsWindow  Tab title
 * @param {Element} contents  Element to wrap
 * @param {string} title  Tab title
 * @param {string} icon  Tab icon uri
 */
var JSTab = Class.create();
JSTab.prototype.initialize = function(jsWindow, contents, title, icon)
{
	var _this = this;
	this.jsWindow = jsWindow;
	this.contents = contents;
	this.contents.className = 'JSWM_window_tab';
	this.tabButton = document.createElement('LI');
	Element.extend(this.tabButton);
	this.tabButton.className = 'JSWM_tabButton';
	this.tabButton.jsTab = this;

	this.tabLabel = this.tabButton.appendChild(document.createElement('DIV'));
	
	this.titleLabel = this.tabLabel.appendChild(document.createElement('DIV'));
	Element.extend(this.titleLabel);
	this.setTitle(title, icon);
	this.tabLabel.className = 'JSWM_tabLabel';
	Event.observe(this.tabButton, 'mousedown', function() { _this.setActive(); _this.jsWindow.setActive(); })

	var drag = new Draggable(this.tabButton, {
		snap: function (x, y) { return _this.moveTab(x, y); },
		constraint: 'horizontal',
		starteffect: function(item) { _this.jsWindow.dragTabStart(item); },
		endeffect: null,
		revert: true
	});
	drag.jsTab = this;
};

/**
 * Reorder tabs based on drag offset
 * @method
 * @param {int} xOffset  x coordinate offset
 * @param {int} yOffset  y coordinate offset
 */
JSTab.prototype.moveTab = function(xOffset, yOffset)
{
	var tabSize = this.tabButton.getWidth();
	var tabGap = tabSize / 2;
	var isForward = xOffset > tabGap;
	var isBackward = xOffset < -tabGap;
	if(isForward || isBackward)
	{
		for(var i = this.jsWindow.tabPositions.length - 1; i >= 0; i--)
		{
			var offset = this.jsWindow.tabPositions[i];
			var start = this.jsWindow.start;
			if(i != this.i && offset[0] - tabGap < xOffset + start[0])
			{
				// i: first box positioned before this
				var oldOffset = Position.positionedOffset(this.tabButton);
				if(i + 1 == this.jsWindow.tabPositions.length)
				{
					if(!isForward)
						break;
					this.jsWindow.tabList.appendChild(this.tabButton);
				}
				else if(i > this.i)
				{
					if(!isForward)
						break;
					this.jsWindow.tabList.insertBefore(this.tabButton, this.jsWindow.tabs[i + 1].tabButton);
				}
				else
				{
					if(!isBackward)
						break;
					this.jsWindow.tabList.insertBefore(this.tabButton, this.jsWindow.tabs[i].tabButton);
				}
				var newOffset = Position.positionedOffset(this.tabButton);

				// prevent "jumping" effect
				xOffset -= newOffset[0] - oldOffset[0];

				var items = this.jsWindow.tabList.getElementsByTagName('LI');
				for(var j = 0; j < items.length; j++)
				{
					this.jsWindow.tabs[j] = items[j].jsTab;
					this.jsWindow.tabs[j].i = j;
				}
				this.jsWindow.start = [offset[0], offset[1]];

				break;
			}
		}
	}
	xOffset = Math.max(JSWMTabMargins - 1, xOffset + this.jsWindow.start[0]) - this.jsWindow.start[0];
	xOffset = Math.min(xOffset + this.jsWindow.start[0], this.jsWindow.tabList.getWidth() - tabSize) - this.jsWindow.start[0];
	return [xOffset, yOffset];
};

/**
 * Set the tab title
 * @method
 * @param {string} title  The new title
 * @param {string} icon  Tab icon uri
 */
JSTab.prototype.setTitle = function(title, icon)
{
	this.title = title;
 	this.titleLabel.removeChildren();
 	var span = this.titleLabel.appendChild(document.createElement('SPAN'));
	span.appendChild(document.createTextNode(this.title));
	Element.extend(span);
	var titleSpace = this.titleLabel.getWidth() - 20;
	JSWMtruncate(title, span, this.tabButton, titleSpace, 25);
	this.titleLabel.title = title;
	this.icon = icon;
	this.tabLabel.style.backgroundImage = 'url("' + this.icon + '")';
};

/**
 * Set tab as active, shortcut to JSWindow.setActiveTab()
 * @method
 */
JSTab.prototype.setActive = function()
{
	this.jsWindow.setActiveTab(this);
};

/**
 * Return the tab button HTML object
 * @method
 * @return {Element}  The tab button
 */
JSTab.prototype.getButton = function()
{
	return this.tabButton;
};

/**
 * Close the tab
 * @method
 */
JSTab.prototype.close = function()
{
	this.jsWindow.contents.removeChild(this.contents); // remove contents
	this.tabButton.parentNode.removeChild(this.tabButton); // remove button
	this.jsWindow.tabs = this.jsWindow.tabs.without(this); // remove array entry
	if(this.jsWindow.lastActiveTab == this && this.jsWindow.tabs.length)
		this.jsWindow.tabs[0].setActive();
	this.jsWindow.redrawTabList();
};

/**
 * Write object state data for serialisation
 * @method
 * @returns {Object} serialData  Object serialisation data
 */
JSTab.prototype.writeObject = function()
{
	var serialData = new Object();
	serialData.title = this.title;
	serialData.icon = this.icon;
	serialData.innerHTML = this.contents.innerHTML;
	return serialData;
};

/**
 * Read serialised object state data into the tab
 * @method
 * @param {String} serialData  Object serialisation data
 */
JSTab.prototype.readObject = function(serialData)
{
	this.setTitle(serialData.title, serialData.icon)
	this.contents.innerHTML = serialData.innerHTML;
};
