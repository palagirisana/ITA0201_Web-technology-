let tasks = [];

function addTask(){

let input = document.getElementById("taskInput");

let task = input.value.trim();

if(task==""){
alert("Please enter a task");
return;
}

tasks.push(task);

input.value="";

displayTasks();

}

function displayTasks(){

let list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach(function(task,index){

let li=document.createElement("li");

li.innerHTML=`
<span>${task}</span>

<div class="actions">

<button onclick="editTask(${index})">Edit</button>

<button onclick="deleteTask(${index})">Delete</button>

</div>
`;

list.appendChild(li);

});

}

function editTask(index){

let updated=prompt("Edit Task",tasks[index]);

if(updated!=null && updated.trim()!=""){
tasks[index]=updated;
displayTasks();
}

}

function deleteTask(index){

tasks.splice(index,1);

displayTasks();

}