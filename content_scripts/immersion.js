document.body.style.border = "5px solid red";

var body = document.getElementsByTagName('p');

console.log("This is an element of type " , body.nodeType );
var i;

for(i = 0 ; i < body.length ; i++){
    console.log(body[i].innerHTML);
}

/// Translate API calls
/*
function doGet(e) {
 
    var sourceText = 'dog'
    if (e.parameter.q) {
        sourceText = e.parameter.q;
    }

    var sourceLang = 'auto';
    if (e.parameter.source) {
        sourceLang = e.parameter.source;
    }

    var targetLang = 'ja';
    if (e.parameter.target) {
        targetLang = e.parameter.target;
    }

    // Option 1 

    var translatedText = LanguageApp.translate(sourceText, sourceLang, targetLang)

    // Option 2 

    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
              + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

    var result = JSON.parse(UrlFetchApp.fetch(url).getContentText());

    translatedText = result[0][0][0];

    var json = {
        'sourceText': sourceText,
        'translatedText': translatedText
    };

    // set JSONP callback
    var callback = 'callback';
    if (e.parameter.callback) {
        callback = e.parameter.callback
    }

    // return JSONP
    return ContentService
             .createTextOutput(callback + '(' + JSON.stringify(json) + ')')
             .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
*/