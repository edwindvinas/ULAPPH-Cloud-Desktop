//random wallpapers for UWM desktop
changWP();

setInterval(function(){
	changWP();
},1800000);

function changWP()
{

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
	xhrn=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
	xhrn=new ActiveXObject('MSXML2.XMLHTTP.3.0');
  }

  // construct an HTTP request
  xhrn.open("GET", "/media?FUNC_CODE=GET_RAN_WP", true);
  xhrn.setRequestHeader('Content-Type', 'text/plain; charset=UTF-8');
  xhrn.send();

 	xhrn.onreadystatechange = function(){
	  if (xhrn.readyState==4 && xhrn.status==200)
		{
		  var wpData = xhrn.responseText;

		  if (wpData != "") {
			//get random number
			var SPL = wpData.split("@888@");
			bgImgUrl = SPL[1];
			bgImgTitle = SPL[2];
			bgImgDesc = SPL[3];
			
			if (ValidURL(bgImgUrl) == true) {
				document.body.style.backgroundColor = "#f3f3f3";
				document.body.style.backgroundImage = "url('" + bgImgUrl + "')";
				document.body.style.backgroundSize="100% 100%";
				document.body.style.backgroundRepeat="no-repeat";
			}
			//display title/desc via alertify
			if (bgImgTitle != "" || bgImgDesc != "") {
				var innerHTML = "<img src='/static/img/info.png' width=80 height=80></img><br><font color=yellow>" + bgImgTitle + " - " + bgImgDesc + "</font>";
				alertifyThisWp(innerHTML);				
			}
	
		  }
		}
	};
}

function ValidURL(textval) {
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
}

function alertifyThisWp(message) {
	alertify.set({ delay: 20000 });
	alertify.log(message);
	return;
};