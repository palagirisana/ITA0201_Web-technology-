let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

function squareRoot(){
    display.value = Math.sqrt(eval(display.value));
}

function square(){
    display.value = Math.pow(eval(display.value),2);
}

function cube(){
    display.value = Math.pow(eval(display.value),3);
}

function sinValue(){
    display.value = Math.sin(eval(display.value) * Math.PI / 180).toFixed(4);
}

function cosValue(){
    display.value = Math.cos(eval(display.value) * Math.PI / 180).toFixed(4);
}

function tanValue(){
    display.value = Math.tan(eval(display.value) * Math.PI / 180).toFixed(4);
}

function logValue(){
    display.value = Math.log10(eval(display.value)).toFixed(4);
}