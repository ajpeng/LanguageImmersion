document.getElementById("save_settings").onclick = function(){
	document.getElementById("update").innerHTML = "Settings updated";
	//alert("hello world");
}


/*
document.getElementsById("save").addEventListener("click", function(){
	var paragraph = document.getElementByTagName("p");
	var i;
	for(i = 0 ; i < paragraph.length() ; i++){
		paragraph[i].innerHTML = "TESTING123";
	}
});
*/
/*
document.addEventListener("click" , (e) => {
	if (e.target.classList.contains("save")){
		browser.tabs.executeScreipt(null, {file: "content_scripts/immersion.js"});

		var gettingActiveTab = browser.tabs.query({active: true , currentWindow: true});
		gettingActiveTab.then(())
	}
});

*/