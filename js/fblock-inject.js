// Checking page
if (document.getElementsByTagName("html")[0].id=="facebook") {
    //Creating Elements
    var btn = document.createElement("BUTTON")
    var t = document.createTextNode("CLICK ME2");
    btn.appendChild(t);
    //Appending to DOM 
    document.body.appendChild(btn);


    var xhr = new XMLHttpRequest();
	xhr.open('GET', encodeURI('profile.php?id=848940441'));
	xhr.onload = function() {
	    if (xhr.status === 200) {
	        console.log(xhr.responseURL);
	    }
	    else {
	        alert('Request failed.  Returned status of ' + xhr.status);
	    }
	};
	xhr.send();
}