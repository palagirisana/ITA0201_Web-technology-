function addStudent() {
    let name = document.getElementById("name").value;
    let reg = document.getElementById("reg").value;
    let dept = document.getElementById("dept").value;

    if (name == "" || reg == "" || dept == "") {
        alert("Please fill all fields");
        return;
    }

    let div = document.createElement("div");
    div.classList.add("student");

    div.innerHTML =
        "<b>Name:</b> " + name +
        "<br><b>Register No:</b> " + reg +
        "<br><b>Department:</b> " + dept +
        "<br><button onclick='removeStudent(this)'>Remove</button>";

    document.getElementById("list").appendChild(div);

    document.getElementById("name").value = "";
    document.getElementById("reg").value = "";
    document.getElementById("dept").value = "";
}

function removeStudent(btn) {
    btn.parentElement.remove();
}

function clearAll() {
    document.getElementById("list").innerHTML = "";
}