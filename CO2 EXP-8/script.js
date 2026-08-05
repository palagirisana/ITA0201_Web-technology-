function updateClock(){

let now = new Date();

let hours = String(now.getHours()).padStart(2,'0');
let minutes = String(now.getMinutes()).padStart(2,'0');
let seconds = String(now.getSeconds()).padStart(2,'0');

document.getElementById("clock").innerHTML =
hours + ":" + minutes + ":" + seconds;

}

setInterval(updateClock,1000);

updateClock();

function startCountdown(){

let examTime = new Date(document.getElementById("examDate").value).getTime();

let timer = setInterval(function(){

let now = new Date().getTime();

let distance = examTime - now;

if(distance <= 0){

clearInterval(timer);

document.getElementById("countdown").innerHTML = "Exam Started!";

return;

}

let days = Math.floor(distance/(1000*60*60*24));

let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

let minutes = Math.floor((distance%(1000*60*60))/(1000*60));

let seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days + " Days " +
String(hours).padStart(2,'0') + ":" +
String(minutes).padStart(2,'0') + ":" +
String(seconds).padStart(2,'0');

},1000);

}