function SelectElement(valueToSelect)
{    
    var element = document.getElementById('leaveCode');
    element.value = valueToSelect;
}

function getLangName(code){
	if(code === "af"){return "Afrikaans";}
	if(code === "sq"){return "Albanian";}
	if(code === "ar"){return "Arabic";}
	if(code === "hy"){return "Armenian";}
	if(code === "az"){return "Azerbaijan";}
	if(code === "eu"){return "Basque";}
	if(code === "be"){return "Belarusian";}
	if(code === "bs"){return "Bosnian";}
	if(code === "bg"){return "Bulgarian";}
	if(code === "ca"){return "Catalan";}
	if(code === "zh"){return "Chinese";}
	if(code === "hr"){return "Croatian";}
	if(code === "cs"){return "Czech";}
	if(code === "da"){return "Danish";}
	if(code === "nl"){return "Dutch";}
	if(code === "en"){return "English";}
	if(code === "et"){return "Estonian";}
	if(code === "fi"){return "Finish";}
	if(code === "fr"){return "French";}
	if(code === "gl"){return "Galician";}
	if(code === "ka"){return "Georgian";}
	if(code === "de"){return "German";}
	if(code === "el"){return "Greek";}
	if(code === "ht"){return "Haitian - Creole";}
	if(code === "hu"){return "Hungarian";}
	if(code === "is"){return "Icelandic";}
	if(code === "id"){return "Indonesian";}
	if(code === "ga"){return "Irish";}
	if(code === "it"){return "Italian";}
	if(code === "ja"){return "Japanese";}
	if(code === "kk"){return "Kazakh";}
	if(code === "ko"){return "Korean";}
	if(code === "ky"){return "Kyrgyz";}
	if(code === "la"){return "Latin";}
	if(code === "lv"){return "Latvian";}
	if(code === "lt"){return "Lithuanian";}
	if(code === "mk"){return "Macedonian";}
	if(code === "mg"){return "Malagasy";}
	if(code === "ms"){return "Malay";}
	if(code === "mt"){return "Maltese";}
	if(code === "mn"){return "Mongolian";}
	if(code === "no"){return "Norwegian";}
	if(code === "fa"){return "Persian";}
	if(code === "pl"){return "Polish";}
	if(code === "pt"){return "Portuguese";}
	if(code === "ro"){return "Romanian";}
	if(code === "ru"){return "Russian";}
	if(code === "sr"){return "Serbian";}
	if(code === "sk"){return "Slovakian";}
	if(code === "sl"){return "Slovenian";}
	if(code === "es"){return "Spanish";}
	if(code === "sw"){return "Swahili";}
	if(code === "sv"){return "Swedish";}
	if(code === "tl"){return "Tagalog";}
	if(code === "tg"){return "Tajik";}
	if(code === "tt"){return "Tatar";}
	if(code === "th"){return "Thai";}
	if(code === "tr"){return "Turkish";}
	if(code === "uk"){return "Ukrainian";}
	if(code === "uz"){return "Uzbek";}
	if(code === "vi"){return "Vietnamese";}
	if(code === "cy"){return "Welsh";}
	if(code === "he"){return "Yiddish";}
	else{return "Failed to select a language"; }
}

function saveOptions(){
	function onError(error) {
		console.log(`Error: ${error}`);
	}

	function objectify(obj){
		var str = JSON.stringify(obj);
		window.alert(str);
		return str;
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

	let settings = browser.storage.local.set({
		save_is_enabled : is_enabled,
		save_translate_frequency : translate_frequency,
		save_language_original : language_original,
		save_language_translated : language_translated,
		save_allow_hyperlink : allow_hyperlink	
	});
	console.log("saveOptions" + JSON.stringify(settings));
	//settings.then(objectify(this), onError);
	//window.alert(settings);
}


/* function restoreOptions() {

  function onGot(item){
  	console.log("onGot: ");//+JSON.stringify(item));
  //} // onGot closign also remove this for <-->
  	/*	RETURNS THE FOLLOWING
  	{"save_is_enabled":false,"save_translate_frequency":"50","save_language_original":"es","save_language_translated":"es","save_allow_hyperlink":false}
  	
  	//let gettingItem = browser.storage.local.get({
  		//window.alert("this.save_is_enabled" + this.save_is_enabled);

  	//});
  	//document.getElementById("sandbox").innerHTML = item;
	//window.alert(settings.toString());
  }// this was part of the onGot closing bracket remove for the other <-->

  function onError(error) {
  	window.alert('error occured');
    console.log(`Error: ${error}`);
  }

  function setUp(item){
  	console.log("setUp");
  	//if(item.save_is_enabled == true){
	  		document.getElementById('enable').checked = true;
  	//	} else { document.getElementById('enable').checked = false; }

	document.getElementById('translate_frequency').value = item.save_translate_frequency;
	document.getElementById('original').value = getLangName(item.save_language_original);
	document.getElementById('translated').value = getLangName(item.save_language_translated);
	//if(item.save_allow_hyperlink == true ){
		document.getElementById('hyperlink').checked = true;	
	//} else {document.getElementById('enable').checked = false;}
	
  }

  //window.alert('Main Call');
  var gettingItem = browser.storage.local.get();
  gettingItem.then(onGot, onError);

  setUp(gettingItem);
}
*/

function restoreOptions() {
  // Use default value languageTo = 'fr'
  browser.storage.sync.get({
    translate_frequency: '10',
    save_language_original: 'fr', // detect language
    save_language_translated: 'es',
    allow_hyperlink: true,
  }, function(item) {
  	document.getElementById('enable').checked = item.is_enabled;
    document.getElementById('original').value = item.save_language_original;
    document.getElementById('translated').value = item.save_language_translated;
    document.getElementById('translate_frequency').value = item.translate_frequency;
    document.getElementById('languageTo').checked = item.allow_hyperlink;
  });
}


//document.getElementById('status').innerHTML = 'PLEASE';
document.addEventListener("DOMContentLoaded", restoreOptions);
//	document.getElementById("status").innerHTML = "Hello";
document.getElementById('save').addEventListener('click', saveOptions);

