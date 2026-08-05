document.getElementById("registerForm").addEventListener("submit", function(event){

event.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let mobile=document.getElementById("mobile").value.trim();
let department=document.getElementById("department").value;
let password=document.getElementById("password").value;
let confirm=document.getElementById("confirmPassword").value;

let message=document.getElementById("message");

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let mobilePattern=/^[0-9]{10}$/;

if(name==""){
message.style.color="red";
message.innerHTML="Please enter your name";
return;
}

if(!email.match(emailPattern)){
message.style.color="red";
message.innerHTML="Enter a valid email address";
return;
}

if(!mobile.match(mobilePattern)){
message.style.color="red";
message.innerHTML="Enter a valid 10-digit mobile number";
return;
}

if(department==""){
message.style.color="red";
message.innerHTML="Please select a department";
return;
}

if(password.length<6){
message.style.color="red";
message.innerHTML="Password must contain at least 6 characters";
return;
}

if(password!=confirm){
message.style.color="red";
message.innerHTML="Passwords do not match";
return;
}

message.style.color="green";
message.innerHTML="Registration Successful!";

document.getElementById("registerForm").reset();

});