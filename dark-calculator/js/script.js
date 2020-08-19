var button = document.querySelector(".container-button");
var screen = document.querySelector("#screen");
var resetScreen = false;
var trueCount = false;
var placeVal = '';
var operator = '';

button.addEventListener("click", function (obj) {

    var buttonClick = obj.target;
    var valueButton = buttonClick.innerText;

    // "string" + variabel + "string"
    // "string" + function()
    // variabel + function()

    if (valueButton == "C") {
        screen.value = "";
    } else if (valueButton == "<") {
        screen.value = screen.value.slice(0, -1);
    } else if (valueButton == "=") {
        screen.value = eval(screen.value);
    } else if (buttonClick.classList.contains('.operator')) {
        if (trueCount == true) {
            screen.value = eval(placeVal + operator + screen.value);
            trueCount = false;
        }

        placeVal = screen.value;
        operator = valueButton;
        resetScreen = true;

    } else {
        if (resetScreen == true) {
            screen.value = buttonClick;
            resetScreen = false;
            trueCount = true;
        } else {
            screen.value = screen.value + valueButton;
        }
    }

}); 

function dark(){
    var element =document.body;
    element.classList.toggle("dark-mode")
}
