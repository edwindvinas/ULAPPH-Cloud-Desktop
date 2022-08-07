(function (e)
{
	"use strict";
	var t, n, o, i, a, s, r = this,
		c = 0,
		l = !1,
		d = "Activate Voice Control",
		u = "What can I help you with?",
		g = [],
		p = [],
		h = !1,
		m = function ()
		{
			return s !== e
		},
		f = function ()
		{
			i && m() && (a ? a.href = i : ((a = document.createElement("link")).rel = "stylesheet", a.href = i, a.id = "skitt-style-sheet", document.body.appendChild(a)))
		},
		S = function ()
		{
			if (m())
			{
				var e = document.getElementById("skitt-listening-text__samples");
				if (g.length)
				{
					if (!e)
					{
						var t = document.getElementById("skitt-listening-text__instructions");
						(e = document.createElement("span")).id = "skitt-listening-text__samples", t.parentNode.insertBefore(e, t.nextSibling)
					}
					e.innerText = g.join(". ") + ".", s.classList.add("skitt-ui--sample-commands-shown")
				}
				else e && e.parentNode.removeChild(e), s.classList.remove("skitt-ui--sample-commands-shown")
			}
		},
		w = function ()
		{
			if (m())
			{
				var e = document.getElementById("skitt-listening-text__recognized-sentence"),
					t = r.SpeechKITT.getLastRecognizedSentence();
				if (t && h)
				{
					if (!e)
					{
						var n = document.getElementById("skitt-listening-text__samples") || document.getElementById("skitt-listening-text__instructions");
						(e = document.createElement("span")).id = "skitt-listening-text__recognized-sentence", n.parentNode.insertBefore(e, n.nextSibling)
					}
					e.innerText = t, s.classList.add("skitt-ui--recognized-sentence-shown")
				}
				else e && e.parentNode.removeChild(e), s.classList.remove("skitt-ui--recognized-sentence-shown")
			}
		},
		k = function ()
		{
			m() && (s.classList.remove("skitt-ui--not-listening"), s.classList.add("skitt-ui--listening"))
		},
		y = function ()
		{
			m() && (s.classList.add("skitt-ui--not-listening"), s.classList.remove("skitt-ui--listening"))
		},
		T = function ()
		{
			l || (l = !0, k())
		},
		b = function ()
		{
			l && (l = !1, y())
		},
		v = function (e, t)
		{
			m() && (document.getElementById(t).innerHTML = e)
		},
		I = function (e)
		{
			Array.isArray(e) && (e = e[0]), r.SpeechKITT.setRecognizedSentence(e)
		},
		E = function (e, t)
		{
			if ("function" != typeof e) throw new TypeError(t)
		};
	r.SpeechKITT = {
		setStartCommand: function (e, t)
		{
			e = r[e] || e, E(e, "invalid callback function"), n = {
				callback: e,
				context: t = t || this
			}
		},
		setAbortCommand: function (e, t)
		{
			e = r[e] || e, E(e, "invalid callback function"), o = {
				callback: e,
				context: t = t || this
			}
		},
		startRecognition: function ()
		{
			if (!n) throw new TypeError("cannot start recognition. Start command not defined");
			var e, t = location.protocol + "//" + location.host;
			"on" == localStorage[t + "quite-flag"] ? localStorage[t + "activelistener"] = "off" : localStorage[t + "activelistener"] = "on", c && ((e = new Date).setTime(e.getTime() + 6e4 * c), document.cookie = "skittremember=1; expires=" + e.toUTCString() + "; path=/"), n.callback.apply(n.context), T()
		},
		abortRecognition: function ()
		{
			if (!o) throw new TypeError("cannot abort recognition. Abort command not defined");
			localStorage[root + "activelistener"] = "off", document.cookie = "skittremember=1; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/", o.callback.apply(o.context), b()
		},
		toggleRecognition: function ()
		{
			l ? this.abortRecognition() : this.startRecognition()
		},
		onStart: function ()
		{
			r.clearTimeout(t), T()
		},
		onEnd: function ()
		{
			t = setTimeout(b, 100)
		},
		setStylesheet: function (e)
		{
			i = e, f()
		},
		render: function ()
		{
			m() || ((s = document.createElement("div")).id = "skitt-ui", s.innerHTML = '<a id="skitt-toggle-button">&nbsp;</a><label for="skitt-toggle-button" id="skitt-toggle-button__label">' + d + '</label><div id="skitt-listening-box"><div id="skitt-listening-text"><span id="skitt-listening-text__instructions">' + u + "</span></div></div>", s.style.display = "none", document.body.appendChild(s), S(), f(), document.getElementById("skitt-toggle-button").addEventListener("click", function ()
			{
				r.SpeechKITT.toggleRecognition()
			})), -1 === document.cookie.indexOf("skittremember") || this.isListening() || this.startRecognition(), this.isListening() ? k() : y()
		},
		vroom: function ()
		{
			this.render()
		},
		hide: function ()
		{
			if (!m()) throw new TypeError("cannot hide interface. Must be rendered first");
			s.classList.add("skitt-ui--hidden")
		},
		show: function ()
		{
			if (!m()) throw new TypeError("cannot show interface. Must be rendered first");
			s.classList.remove("skitt-ui--hidden")
		},
		isListening: function ()
		{
			return l
		},
		setToggleLabelText: function (e)
		{
			d = e, v(e, "skitt-toggle-button__label")
		},
		setInstructionsText: function (e)
		{
			"string" == typeof e && (u = e, v(e, "skitt-listening-text__instructions"))
		},
		queryWatsonAssistant: function (e)
		{
			var t = location.protocol + "//" + location.host;
			if (alertify.set(
				{
					delay: 6e4
				}), document.getElementById("myAudioID"), "on" != localStorage[t + "quite-flag"] && "Y" != localStorage[t + "localspeak"] && "off" != localStorage[t + "activelistener"])
			{
				var n;
				console.log("Calling Watson..."), SpeechKITT.abortRecognition(), n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
				var o = document.getElementById("aUser").value,
					i = document.getElementById("isMobile").value,
					a = new Date,
					s = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds(),
					r = location.protocol + "//" + location.host + "/orch?oFunc=iwa&oMsg=" + e + "&oUser=" + o + "&oUI=isMobile" + i + "&oWA=" + watsonID + "&oLoc=" + ottoJS + "&oTS=" + s;
				n.open("POST", r, !0), n.send(), n.onreadystatechange = function ()
				{
					if (4 == n.readyState && 200 == n.status)
					{
						console.log("Watson Responded...");
						var e = JSON.parse(n.responseText),
							o = e.data;
						o.indexOf("Sorry") >= 0 && (sorryCounter += 1, sorryCounter >= 10 && (localStorage[t + "quite-flag"] = "on", SpeechKITT.setInstructionsText("Quite..."), alertify.error("Quite mode is turned on..."), console.log("Maximum invalid intents have been reached."), sorryCounter = 0)), watsonID = e.wid, ottoJS = e.otto;
						var i = speechSynthesis.getVoices().filter(function (t)
						{
							return t.name == e.voice
						})[0];
						
						var wr = JSON.parse(n.responseText);
						var ava = wr.icon;
						console.log("ava: " +ava);
						if (ava == "" || ava == undefined || ava == "undefined") {
							ava = "/static/img/bots/general-assistant.png";
						}
						var avaTag = "<img src=\"" + ava + "\" alt=\"Bot Avatar\" width=\"100\" height=\"100\" align=\"left\">";
							
						if (o.indexOf("UWM_ACTION::") >= 0)
						{
							var a, s = o.split("UWM_ACTION::");
							return "" !== s[0] && (localStorage[t + "speakingNow"] = "Y", (a = new SpeechSynthesisUtterance).voice = i, a.rate = 1, a.pitch = 1, a.text = s[0], window.speechSynthesis.speak(a), alertify.error(avaTag + s[0] + '>> <a href="#page" onclick="stopTalking();return false">Stop</a>'), a.onend = function ()
							{
								localStorage[t + "speakingNow"] = "N", SpeechKITT.startRecognition(), SpeechKITT.setInstructionsText(""), SpeechKITT.setSampleCommandsChunk(s[0])
							}), void SpeechKITT.executeDesktopActions(o,avaTag)
						}
						if (console.log("Watson response: ", o), "speechSynthesis" in window || "SpeechRecognition" in window) return localStorage[t + "speakingNow"] = "Y", (a = new SpeechSynthesisUtterance).voice = speechSynthesis.getVoices().filter(function (t)
						{
							return t.name == e.voice
						})[0], a.rate = 1, a.pitch = 1, a.text = o, window.speechSynthesis.speak(a), alertify.error(avaTag + o + '>> <a href="#page" onclick="stopTalking();return false">Stop</a>'), void(a.onend = function ()
						{
							SpeechKITT.startRecognition(), localStorage[t + "speakingNow"] = "N", SpeechKITT.setInstructionsText(""), SpeechKITT.setSampleCommandsChunk(o)
						});
						alertify.set(
						{
							delay: 3e3
						})
					}
				}
			}
			else alertify.log("Either quite mode is enabled or listener inactive.")
		},
		switchWatsonAssistant: function (e)
		{
			var t = location.protocol + "//" + location.host;
			if (alertify.set(
				{
					delay: 6e4
				}), document.getElementById("myAudioID"), "on" != localStorage[t + "quite-flag"] && "Y" != localStorage[t + "localspeak"] && "off" != localStorage[t + "activelistener"])
			{
				var n;
				console.log("Switching Watson..."), SpeechKITT.abortRecognition(), n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
				var o = document.getElementById("aUser").value,
					i = document.getElementById("isMobile").value,
					a = new Date,
					s = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds(),
					r = location.protocol + "//" + location.host + "/orch?oFunc=swa&oMsg=&oUser=" + o + "&oUI=isMobile" + i + "&oWA=" + e + "&oLoc=" + ottoJS + "&oTS=" + s;
				n.open("POST", r, !0), n.send(), n.onreadystatechange = function ()
				{
					if (4 == n.readyState && 200 == n.status)
					{
						console.log("Watson Responded...");
						var e = JSON.parse(n.responseText).data;
						var ava = JSON.parse(n.responseText).icon;
						if (ava == "" || ava == undefined || ava == "undefined") {
							ava = "/static/img/bots/general-assistant.png";
						}
						var avaTag = "<img src=\"" + ava + "\" alt=\"Bot Avatar\" width=\"100\" height=\"100\" align=\"left\">";
						SpeechKITT.executeDesktopActions(e,ava), alertify.error(avaTag + e + '>> <a href="#page" onclick="stopTalking();return false">Stop</a>')
					}
				}
			}
			else alertify.log("Either quite mode is enabled or listener inactive.")
		},
		executeDesktopActions: function (e,avaTag)
		{
			var t = document.getElementById("isMobile").value;
			var fs = e.split("UWM_ACTION");
			var fctr;
			for (fctr = 0; fctr < fs.length; fctr++) {
			  var thisAction = fs[fctr];
			  var n = thisAction.split("::");
			  console.log("Process action: "+thisAction);
			  //process each action
				switch (n[1])
				{
				case "SHOWINFO":
					var i = "<p>" + n[2] + "</p>";
					"true" == t ? SpeechKITT.speakMessageNow(i,avaTag) : ((r = window.open("", "_blank", "width=200,height=100")).document.write(i), r.focus());
					break;
				case "PLAYSOUND":
					document.createElement("audio"), 1 == isEdge || 1 == isIE || isSafari, soundManager.createSound(
					{
						id: "mySoundSK",
						volume: 75,
						url: root + n[2]
					}), soundManager.play("mySoundSK");
					break;
				case "SETBG":
					document.getElementById("page").style.backgroundImage = "url('" + n[2] + "')";
					break;
				case "PAUSEWP":
					(a = document.getElementById("ranid")).value, a.value = "pause", alertifyThis("Wallpaper paused.");
					break;
				case "UNPAUSEWP":
					var a;
					(a = document.getElementById("ranid")).value, a.value = "1", alertifyThis("Wallpaper enabled.");
					break;
				case "OPENWINDOW":
					if ("true" == t)
					{
						var s = "It seems your device can't launch URL in a window. Let me open new tab.";
						SpeechKITT.speakMessageNow(s,avaTag), window.open(n[2], n[2])
					}
					else openDropSmall(n[2]);
					break;
				case "OPENACE":
					var r;
					i = "=========\n" + n[2] + "\n==========\n", "true" == t ? ((r = window.open("", "_blank", "width=200,height=100")).document.write(i), r.focus()) : openAceEditor(i);
					break;
				case "OPENTAB":
					"true" == t ? (s = "It seems your device can't launch URL in a window. Let me open new tab.", SpeechKITT.speakMessageNow(s,avaTag), window.open(n[2], n[2])) : window.open(n[2], "radio");
					break;
				case "OPENTABS":
					if ((l = n[2].split("@888@")).length > 0)
					{
						for (localStorage[root + "quite-flag"], o = 0; o <= l.length - 1; o++) "" != l[o] && ("true" == t ? (s = "It seems your device can't launch URL in a window. Let me open new tab.", SpeechKITT.speakMessageNow(s,avaTag), window.open(l[o], l[o])) : window.open(l[o], l[o]));
						localStorage[root + "quite-flag"]
					}
					break;
				case "CASCADE":
					uwmArrWin();
					break;
				case "CLEAR":
					windowManager.clear(), windowManager.clear(), windowManager.clear(), windowManager.clear(), endConversation();
					break;
				case "MAXIMIZE":
				case "MINIMIZE":
					uwmOnOff();
					break;
				case "OPENIMGLIST":
					if ((l = n[2].split("@888@")).length > 0)
						for (o = 0; o <= l.length - 1; o++)
							if ("" != l[o])
							{
								var c = l[o];
								document.getElementById("page").style.backgroundImage = "url('" + c + "')";
								break
							} break;
				case "OPENWINDOWS":
					var l;
					if ((l = n[2].split("@888@")).length > 0)
					{
						for (localStorage[root + "quite-flag"], o = 0; o <= l.length - 1; o++) "" != l[o] && ("true" == t ? (s = "It seems your device can't launch URL in a window. Let me open new tab.", SpeechKITT.speakMessageNow(s,avaTag), window.open(l[o], l[o])) : openWindow(l[o], "Window " + o));
						uwmArrWin(), localStorage[root + "quite-flag"]
					}
					break;
				case "NEWBOTMESSAGE":
					var d = n[2];
					newBotMessage(d);
					break;
				default:
					console.log(e), console.log("Invalid operation"), console.log("Invalid operation")
				}
			}			
		},
		speakMessageNow: function (e,avaTag)
		{
			SpeechKITT.abortRecognition(), localStorage[root + "speakingNow"] = "Y";
			var t = new SpeechSynthesisUtterance;
			t.voice = speechSynthesis.getVoices().filter(function (e)
			{
				return e.name == obj.voice
			})[0], t.rate = 1, t.pitch = 1, t.text = e, window.speechSynthesis.speak(t), alertify.error(avaTag + e + '>> <a href="#page" onclick="stopTalking();return false">Stop</a>'), t.onend = function ()
			{
				SpeechKITT.startRecognition(), localStorage[root + "speakingNow"] = "N"
			}
		},
		setSampleCommands: function (e)
		{
			Array.isArray(e) || (e = []), g = e, S()
		},
		setSampleCommandsChunk: function (e)
		{
			var t = document.createElement("div");
			t.innerHTML = e;
			var n, o = t.textContent || t.innerText || "";
			n = "Y" == localStorage[root + "isScreenSmall"] ? o.substring(0, 30) : o.substring(0, 170), SpeechKITT.setSampleCommands([n])
		},
		rememberStatus: function (e)
		{
			if ("number" != typeof e || e < 0) throw new TypeError("rememberStatus() only accepts positive integers");
			c = e
		},
		getLastRecognizedSentence: function ()
		{
			return 0 === p.length ? e : p[p.length - 1]
		},
		setRecognizedSentence: function (e)
		{
			"string" == typeof e && (p.push(e), w())
		},
		displayRecognizedSentence: function (e)
		{
			h = !(arguments.length > 0 && !e), w()
		},
		annyang: function ()
		{
			this.setStartCommand(annyang.start), this.setAbortCommand(annyang.abort), annyang.addCallback("start", this.onStart), annyang.addCallback("end", this.onEnd), annyang.addCallback("resultMatch", I), annyang.addCallback("resultNoMatch", I)
		}
	}
}).call(this);