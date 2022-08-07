//get parms
var urlParams;
var match,
		pl     = /\+/g,  // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query  = window.location.search.substring(1);

urlParams = {};
while (match = search.exec(query))
   urlParams[decode(match[1])] = decode(match[2]);

var s2a = document.getElementById("autosl2art");
if (s2a) {
	if (s2a.value == true) {
		var w = document.documentElement.clientWidth;
		if (w < 1100) {
			if (urlParams["TYPE"] == "SLIDE" && urlParams["MODE"] != "PRESENTER" && urlParams["MODE"] != "AUDIENCE" && urlParams["PARM"] != "LOOP") {
				var rUrl = "/articles?TYPE=ARTICLE&TITLE=" + urlParams["TITLE"] + "&DOC_ID=" + urlParams["DOC_ID"] + "&SID=" + urlParams["SID"] + "&MUSIC_ID=" + urlParams["MUSIC_ID"];
				window.location.assign(rUrl);
			}
		}
	}	
}