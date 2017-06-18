function saveOptions(){
	function onError(error) {
		console.log(`Error: ${error}`);
	}

	//console.log('save option');
	//e.preventDefault();
	var is_enabled = document.getElementById('enable').checked;
	var translate_frequency = document.getElementById('translate_frequency').value;
	//var translateText = document.getElementById('words').value;
	if(document.getElementById('translate_frequency').value > 100){
		var translate_frequency = document.getElementById('translate_frequency').max;

	} else {var translate_frequency = document.getElementById('translate_frequency').value;}
	//window.alert("language frequency: " + translate_frequency); 
	var language_original = document.getElementById('original').value;
	//window.alert("hyperlink: " + language_original); Return es 
	var language_translated = document.getElementById('translated').value;
	//window.alert(language_translated); 
	var allow_hyperlink = document.getElementById('hyperlink').checked;
	//window.alert("hyperlink: " + allow_hyperlink); 
	//var status = document.getElementById("status"); 
	//status.textContent = "Settings updated";
	document.getElementById("status").innerHTML = "Settings saved.";
	
	let settings  = browser.storage.local.set({
		save_is_enabled : is_enabled,
		save_translate_frequency : translate_frequency,
		save_language_original : language_original,
		save_language_translated : language_translated,
		save_allow_hyperlink : allow_hyperlink	
	});
	
	settings.then(null, onError);
	//window.alert(settings);
}

/*function saveOptions(){
	document.getElementById("status").innerHTML = "Settings saved.";
}
*/

function restoreOptions() {
	/*
  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "blue";
  }
  */

  function onGot(item){
  	console.log(JSON.stringify(item));
  	/*	RETURNS THE FOLLOWING
  	{"save_is_enabled":false,"save_translate_frequency":"50","save_language_original":"es","save_language_translated":"es","save_allow_hyperlink":false}
  	*/
  	//document.getElementById("sandbox").innerHTML = item;
	//window.alert(settings.toString());
  }

  function onError(error) {
  	window.alert('error occured');
    console.log(`Error: ${error}`);
  }

  //window.alert('Main Call');
  var gettingItem = browser.storage.local.get();
  gettingItem.then(onGot, onError);
}

//document.getElementById('status').innerHTML = 'PLEASE';
document.addEventListener("DOMContentLoaded", restoreOptions);
//	document.getElementById("status").innerHTML = "Hello";
document.getElementById('save').addEventListener('click', saveOptions);
