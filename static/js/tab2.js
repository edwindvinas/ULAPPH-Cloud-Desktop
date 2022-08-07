
if (!ULAPPH_MSG) {
  var ULAPPH_MSG = {};
}

ULAPPH_MSG.Util = {
  sslAssetHost: "https://glowing-run-98319.appspot.com",
  assetHost: "",
  getAssetHost: function() {
    return ("https:" == document.location.protocol) ? this.sslAssetHost : this.assetHost;
  },
  render: function(template, params) {
    return template.replace(/\#{([^{}]*)}/g,
      function (a, b) {
          var r = params[b];
          return typeof r === 'string' || typeof r === 'number' ? r : a;
      }
    )
  },
  toQueryString: function(params) {
	  var pairs = [];
	  for (key in params) {
		  if (params[key] != null && params[key] != '') {
  		  pairs.push([key, params[key]].join('='));
      }
    }
    return pairs.join('&');
  },
  isIE: function(test) {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
      if (typeof test === "function") {
        return test(new Number(RegExp.$1));
      } else {
        return true;
      }
    } else {
      return false;
    }
  },
  isQuirksMode: function() {
    return document.compatMode && document.compatMode=="BackCompat";
  },
  includeCss: function(css) {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    styleElement.setAttribute('media', 'screen');
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      styleElement.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(styleElement);
  }
}

ULAPPH_MSG.Page = {
  getDimensions: function() {
    var de = document.documentElement;
    var width = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
    var height = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
    return {width: width, height: height};
  }
}

ULAPPH_MSG.Dialog = {
  preload: function(id_or_html) {
    if (!this.preloaded) {
      var element = document.getElementById(id_or_html);
      var html = (element == null) ? id_or_html : element.innerHTML;
      this.setContent(html);
      this.preloaded = true;
    }
  },
  show: function(id_or_html) {
    if (!this.preloaded) {
      this.preload(id_or_html);
    }
    this.Overlay.show();
    this.setPosition();
    ULAPPH_MSG.Element.addClassName(this.htmlElement(), 'dialog-open');
    this.element().style.display = 'block';
    this.preloaded = false;
    this.element().focus();
  },

  close: function() {
		var change = ULAPPH_MSG.needsConfirm;
		if(change){
		  var answer = confirm(change);
		  if(!answer) {
			   return
	  	}
		}
    this.element().style.display = 'none';
    ULAPPH_MSG.Element.removeClassName(this.htmlElement(), 'dialog-open');
    this.Overlay.hide();
    ULAPPH_MSG.onClose();
  },

  /****** Protected Methods ******/

  id: 'ulapph-dialog',
	css_template: "\
    #ulapph-dialog {\
      z-index: 100003;\
      display: block;\
      text-align: left;\
      margin: -2em auto 0 auto;\
      position: fixed; \
    }\
    \
    #ulapph-overlay {\
      position: fixed;\
      z-index:100002;\
      width: 100%;\
      height: 100%;\
      left: 0;\
      top: 0;\
      background-color: #000;\
      opacity: .7;\
      filter: alpha(opacity=70);\
    }\
    \
    #ulapph-overlay p {\
      padding: 5px;\
      color: #ddd;\
      font: bold 14px arial, sans-serif;\
      margin: 0;\
      letter-spacing: -1px;\
    }\
    \
    #ulapph-dialog #ulapph-dialog-close {\
      position: absolute;\
      height: 48px;\
      width: 48px;\
      top: -11px;\
      right: -12px;\
      color: #06c;\
      cursor: pointer;\
      background-position: 0 0;\
      background-repeat: no-repeat;\
      background-color: transparent;\
    }\
    \
    html.dialog-open object,\
    html.dialog-open embed {\
      visibility: hidden;\
    }\
    a#ulapph-dialog-close { background-image: url(#{background_image_url}); }" + (
  (ULAPPH_MSG.Util.isIE() && (ULAPPH_MSG.Util.isIE(function(v){return v < 7}) || (ULAPPH_MSG.Util.isIE(function(v){return v >= 7}) && ULAPPH_MSG.Util.isQuirksMode()))) ? "\
    #ulapph-overlay,\
    #ulapph-dialog {\
      position: absolute;\
    }\
    \
    .dialog-open,\
    .dialog-open body {\
      overflow: hidden;\
    }\
    \
    .dialog-open body {\
      height: 100%;\
    }\
    #ulapph-overlay {\
      width: 100%;\
    }\
    \
    #ulapph-dialog #ulapph-dialog-close {\
      background: none;\
      filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://lh3.googleusercontent.com/ZprwNfnkMbwaH5NLYpSBSO9y9un0zDYV39rREVTufY8OP948cYH193xB21gpoRDtgA1MzmmiVtVVHKgyzToOyjdr5yo3');\
    }\
    .dialog-open select {\
      visibility: hidden;\
    }\
    .dialog-open #ulapph-dialog select {\
      visibility: visible;\
    }" : ""
  ),

  element: function() {
    if (!document.getElementById(this.id)){
      var dummy = document.createElement('div');
      dummy.innerHTML = '<div id="'+this.id+'" class="ulapph-component" style="display:none;">' +
        '<a href="#close" onclick="ULAPPH_MSG.Dialog.close(); return false;" id="'+this.id+'-close" title="Close Dialog"><span style="display: none;">Close Dialog</span></a>' +
        '<div id="'+this.id+'-content"></div></div>';
      /* this is the safe way to do insertion in IE when the page has yet to be loaded */
      if (document.getElementById('ulapph-message')) {
        document.getElementById('ulapph-message').insertBefore(dummy.firstChild, document.getElementById('ulapph-message').firstChild.nextSibling);
      } else {
        document.body.insertBefore(dummy.firstChild, document.body.firstChild);
      }
    }
    return document.getElementById(this.id);
  },

  setContent: function(html) {
    this.element() // lazily created
    if (typeof(Prototype) != 'undefined') { // gracefully degredation in the absence of Prototype.js
      document.getElementById(this.id+"-content").innerHTML = html.stripScripts();
      setTimeout(function() {html.evalScripts()}, 100);
    } else {
      document.getElementById(this.id+"-content").innerHTML = html;
    }
  },

  setPosition: function() {
    var dialogDimensions = ULAPPH_MSG.Element.getDimensions(this.element());
    var pageDimensions = ULAPPH_MSG.Page.getDimensions();

    var els = this.element().style;
    els.width = 'auto';
    els.height = 'auto';
    els.left = ((pageDimensions.width - dialogDimensions.width)/2) + "px";
    var computedHeight = ((pageDimensions.height - dialogDimensions.height)/2);
    els.top = Math.max(computedHeight, 55) + "px";
  },


  htmlElement: function() {
    return document.getElementsByTagName('html')[0];
  }
}

ULAPPH_MSG.Dialog.Overlay = {

  show: function() {
    this.element().style.display = 'block';
  },

  hide: function() {
    this.element().style.display = 'none';
  },

  /****** Protected Methods ******/

  id: 'ulapph-overlay',

  element: function() {
    if (!document.getElementById(this.id)) {
      var dummy = document.createElement('div');
      dummy.innerHTML = '<div id="'+this.id+'" class="ulapph-component" onclick="ULAPPH_MSG.Dialog.close(); return false;" style="display:none;"></div>';
      /* this is the safe way to do insertion in IE when the page has yet to be loaded */
      document.body.insertBefore(dummy.firstChild, document.body.firstChild);
    }
    return document.getElementById(this.id);
  }
}

// Culled from Prototype.js
ULAPPH_MSG.Element = {
  getDimensions: function(element) {
    var display = element.display;
    if (display != 'none' && display != null) { // Safari bug
      return {width: element.offsetWidth, height: element.offsetHeight};
    }

    // All *Width and *Height properties give 0 on elements with display none,
    // so enable the element temporarily
    var els = element.style;
    var originalVisibility = els.visibility;
    var originalPosition = els.position;
    var originalDisplay = els.display;
    els.visibility = 'hidden';
    els.position = 'absolute';
    els.display = 'block';
    var originalWidth = element.clientWidth;
    var originalHeight = element.clientHeight;
    els.display = originalDisplay;
    els.position = originalPosition;
    els.visibility = originalVisibility;
    return {width: originalWidth, height: originalHeight};
  },

  hasClassName: function(element, className) {
    var elementClassName = element.className;
    return (elementClassName.length > 0 && (elementClassName == className || new RegExp("(^|\\s)" + className + "(\\s|$)").test(elementClassName)));
  },

  addClassName: function(element, className) {
    if (!this.hasClassName(element, className)) {
      element.className += (element.className ? ' ' : '') + className;
    }
    return element;
  },

  removeClassName: function(element, className) {
    element.className = element.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), ' ');
    return element;
  }
}

ULAPPH_MSG.needsConfirm = false;
ULAPPH_MSG.onClose = function() {};

// Load CSS and images
ULAPPH_MSG.Util.includeCss(ULAPPH_MSG.Util.render(ULAPPH_MSG.Dialog.css_template, {background_image_url: 'http://lh3.googleusercontent.com/Om-o9o1NLeTBz2lJAZ_GRAH4oYcy2hxueFXmy9FU8okJXtAAF8MWMHwWDfN93fEB39T_me161tW8HXJx8S-YzGd6X14ZSA'}));

ULAPPH_MSG.PopIn = {
  show: function() {
    var referer = window.location.href;
    if (referer.indexOf('?') != -1) { referer = referer.substring(0, referer.indexOf('?')) } // strip params
	var url = "/guestbook?GB_FUNC=GB_OWNER";
    ULAPPH_MSG.Dialog.show("<iframe src=\"" + url + "\" frameborder=\"0\" scrolling=\"yes\" allowtransparency=\"true\" width=\"800px\" height=\"530px\"></iframe>");
  }
}

ULAPPH_MSG.PopIn2 = {
  show: function(url) {
    ULAPPH_MSG.Dialog.show("<iframe src=\"" + url + "\" frameborder=\"0\" scrolling=\"yes\" allowtransparency=\"true\" width=\"800px\" height=\"530px\"></iframe>");
  }
}

document.write("\n  \u003Cstyle type=\"text/css\"\u003E\n    a#ulapph-message-tab {\n      position: fixed;\n      left: 0;\n      bottom: 15%;\n      display: block;\n      background: #00BCBA url(http://lh3.googleusercontent.com/Om-o9o1NLeTBz2lJAZ_GRAH4oYcy2hxueFXmy9FU8okJXtAAF8MWMHwWDfN93fEB39T_me161tW8HXJx8S-YzGd6X14ZSA) -2px 50% no-repeat;\n      width: 25px;\n      height: 90px;\n      margin-top: -45px;\n      border: outset 1px #00BCBA;\n      border-right: none;\n      z-index: 100001;\n    }\n\n    a#ulapph-message-tab:hover {\n      background-color: #06c;\n      border: outset 1px #06c;\n      border-right: none;\n      cursor: pointer;\n    }\n  \u003C/style\u003E\n\n  \u003C!--[if IE]\u003E\n    \u003Cstyle type=\"text/css\"\u003E\n      * html a#ulapph-message-tab {\n        position: absolute;\n        background-image: none;\n        filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://lh3.googleusercontent.com/Om-o9o1NLeTBz2lJAZ_GRAH4oYcy2hxueFXmy9FU8okJXtAAF8MWMHwWDfN93fEB39T_me161tW8HXJx8S-YzGd6X14ZSA');\n      }\n    \u003C/style\u003E\n  \u003C![endif]--\u003E\n\n  \u003Ca id=\"ulapph-message-tab\" onclick=\"ULAPPH_MSG.PopIn.show(); return false;\" href=\"\"\u003E\u003C/a\u003E\n\n")
