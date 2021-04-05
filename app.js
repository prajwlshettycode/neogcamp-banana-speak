var btnTranslate = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverUrRL = "https://api.funtranslations.com/translate/minion.json"

function translationURL(input){
    return serverUrRL+"?"+"text="+input 
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Error Occurred in Server, Please try again sometime later!")
}

function clickHandler() {
    var inputTxt = txtInput.value;

    //calling server
    fetch(translationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
            var translatedOutput = json.contents.translated;
            outputDiv.innerText = translatedOutput;
    }).catch(errorHandler)
};
 
btnTranslate.addEventListener("click", clickHandler)



