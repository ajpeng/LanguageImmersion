function saveOptions(){
	//console.log('save option');
	//e.preventDefault();
	var is_enabled = document.getElementById('enable');
	var translate_frequency = document.getElementById('translate_frequency').value;
	//var translateText = document.getElementById('words').value;
	if(document.getElementById('translate_frequency').value > 100){
		var translate_frequency = document.getElementById('translate_frequency').max;
	} else {var translate_frequency = document.getElementById('translate_frequency').value;}

	var language_original = document.getElementById('original').value;
	var language_translated = document.getElementById('translated').value;
	var allow_hyperlink = document.getElementById('hyperlink').value;

	//var status = document.getElementById("status"); 
	//status.textContent = "Settings updated";
	document.getElementById("status").innerHTML = "Settings saved.";
	
	browser.storage.local.set({
		save_is_enabled : is_enabled,
		save_translate_frequency : translate_frequency,
		save_language_original : language_original,
		save_language_translated : language_translated,
		save_allow_hyperlink : allow_hyperlink	
	});
	
}

/*function saveOptions(){
	document.getElementById("status").innerHTML = "Settings saved.";
}
*/

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

//document.getElementById('status').innerHTML = 'PLEASE';
//document.addEventListener("DOMContentLoaded", restoreOptions);
//	document.getElementById("status").innerHTML = "Hello";
document.getElementById('save').addEventListener('click', saveOptions);
