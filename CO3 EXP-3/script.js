let name = document.getElementById("name");
let event = document.getElementById("event");
let message = document.getElementById("message");

name.addEventListener("input", function() {
    message.textContent = "Typing...";
});

name.addEventListener("focus", function() {
    name.style.backgroundColor = "lightyellow";
});

name.addEventListener("blur", function() {
    name.style.backgroundColor = "white";
});

event.addEventListener("change", function() {
    message.textContent = "Selected: " + event.value;
});

document.getElementById("title").addEventListener("mouseover", function() {
    this.style.color = "blue";
});

document.getElementById("title").addEventListener("mouseout", function() {
    this.style.color = "black";
});

function showMessage() {
    message.textContent = "Registration Successful!";
}