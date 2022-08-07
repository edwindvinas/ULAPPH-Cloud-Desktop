function checkboxlimit(checkgroup, limit){

	var snip = document.forms[0].elements["mychecks"].value+",";
	var snip2 = document.getElementById("icons-area").innerHTML;
	var ccnt = document.forms[0].elements["curr-count"].value;
	var checkgroup=checkgroup
	var limit=limit+1
	for (var i=0; i<checkgroup.length; i++){
		checkgroup[i].onclick=function(){
		var checkedcount=0
		for (var i=0; i<checkgroup.length; i++)
			checkedcount+=(checkgroup[i].checked)? 1 : 0
			if (checkedcount>limit){
				alert("You can only select a maximum of "+limit+" icons!")
				alert("Please reload page if you want to start over again or Click Update button...")
				this.checked=false

				document.forms[0].elements["mychecks"].value = "desktop0";
				document.forms[0].elements["curr-count"].value = 0;
			}

			snip += this.id+",";
			var imgSrc = document.getElementById(this.id + "src").src;
			ccnt++;

			document.forms[0].elements["mychecks"].value = snip;
			snip2 += '<img src="' + imgSrc + '" width=60 height=60>';
			document.getElementById("icons-area").innerHTML = snip2;
			
			if (ccnt>limit){
				alert("You can only select a maximum of "+limit+" icons!")
				alert("Please reload page if you want to start over again or Click Update button...")
				this.checked=false

			}
			document.forms[0].elements["curr-count"].value = ccnt;
		}
	}

}

function eraseText() {
    document.forms[0].elements["mychecks"].value = "desktop0";
	document.forms[0].elements["curr-count"].value = 0;
	  checkboxes = document.getElementsByName('icons');
	  for(var i=0, n=checkboxes.length;i<n;i++) {
		checkboxes[i].checked = false;
	  }
}

function uncheckAll(source) {
  checkboxes = document.getElementsByName('icons');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = false;
  }
}

function changeTheme() {
    var e = document.getElementById("mycss");
    var theme = e.options[e.selectedIndex].text;
    document.getElementById("shelf").style.backgroundImage = "url(" + theme + ")";

}
