var debugMode = false;
var defaultLang;
var frequency;

function log(str){
    if(debugMode){
        console.log(str);
    }
}

function toPercentage(p){
    frequency = p/100;
    log("translate at" + p +" % frequency");
}

function setDefaultTranslation(l){
    defaultLang = l;
    log("default language set as: " + l);
}

function containsHTML(str){
    var dpc = new DOMParser().parseFromString(str, "text/html");
    return Array.doc(doc.body.childNodes).some(node => node.nodetype === 1);
}

function translate(){

}

// API KEY trnsl.1.1.20170630T210215Z.ace3d55a6aa83d5e.525441d73126f652023201ec11816dc93e73da3d