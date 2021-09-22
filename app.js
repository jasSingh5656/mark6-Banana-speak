var buttontranslate = document.querySelector("#btn-translate") 
var txtinput = document.getElementById("txt-input")
var outputdiv = document.querySelector("#output")
// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function errorhandler(){
    console.log("error occured", error)
    alert("server down ")
}
function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text;   //we make function to use below to make a url
}

//calling server for processing
function clickhandler(){
    var inputtext = txtinput.value;           //taking input from textbox     
    fetch(getTranslationUrl(inputtext))
    .then(response => response.json())
    .then(json => {
        var translatedtext = json.contents.translated;
        outputdiv.innerHTML = translatedtext;
    })    
    .catch(errorhandler)              
    }; 
    
    buttontranslate.addEventListener('click', clickhandler)









