function calculateSum(){

try{

let num1 = Number(document.getElementById("num1").value);

let num2 = Number(document.getElementById("num2").value);

console.log("First Number :", num1);
console.log("Second Number :", num2);

debugger;

if(isNaN(num1) || isNaN(num2)){

throw "Please enter valid numbers.";

}

let sum = num1 + num2;

document.getElementById("result").innerHTML =
"Sum = " + sum;

}

catch(error){

document.getElementById("result").style.color="red";

document.getElementById("result").innerHTML =
error;

}

}