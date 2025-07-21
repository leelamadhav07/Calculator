const display=document.getElementById("eleDisplay");

function AppendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculateResult() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}

