function initWebsocket() {
    var conn;
    if (window["WebSocket"]) {		
		var conn = new WebSocket("ws://" + document.location.host + "/ws");
		conn.onclose = function(evt) {
			console.log("evt.data: "+evt.data);
			console.log("WebSocket conn.onclose: Connection closed.");
		}
		conn.onmessage = function(evt) {
			console.log("WebSocket conn.onmessage");
			console.log("evt.data: "+evt.data);
			var objJSON = JSON.parse(evt.data);
			console.log("objJSON: "+objJSON);
			var bgImgUrl = objJSON.url;
			console.log("bgImgUrl: "+bgImgUrl);
			document.getElementById('page').style.backgroundImage = "url(" + bgImgUrl + ")";
		}	
    } else {
        console.log("Your browser does not support WebSockets.");
    }
}