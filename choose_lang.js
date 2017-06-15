function saveOptions(e){
	e.preventDefault();
	var is_enabled = document.getElementById('enable');
	var translate_frequency = document.getElementById('translate_frequency').value;
	//var translateText = document.getElementById('words').value;
	if(document.getElementById('translate_frequency').value > 100){
		translate_frequency = document.getElementById('translate_frequency').max;
	}

	var language_original = document.getElementById('original').value;
	var language_translated = document.getElementById('translated').value;
	var allow_hyperlink = document.getElementById('hyperlink').value;

	document.getElementById("save_settings").onclick = function(){
		document.getElementById("update").innerHTML = "Settings updated";
	}
	browser.storage.local.set({
		save_is_enabled : is_enabled,
		save_translate_frequency : translate_frequency,
		save_language_original : language_original,
		save_language_translated : language_translated,
		save_allow_hyperlink : allow_hyperlink	
	})
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "blue";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

/*
document.getElementById("save").addEventListener("click", function(){
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