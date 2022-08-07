//clearSearchStorage();
resetNotifStorage();

function clearSearchStorage() {
	if(typeof(Storage) !== "undefined") {
		localStorage.searchStorage = "";
	} else {
		//alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		//return
	}
}

function resetNotifStorage() {
	var a = document.getElementById("aUser");
	
function clearSearchStorage() {
	if(typeof(Storage) !== "undefined") {
		localStorage['notificationsStorage'+a.value] = "";
	} else {
		//alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		//return
	}
	return;	
}
