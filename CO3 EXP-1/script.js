function changeHeading() {
    document.getElementById("heading").textContent = "Updated Student Profile";
}

function changeText() {
    document.querySelector("#profile").style.color = "blue";
}

function changeBackground() {
    document.body.style.backgroundColor = "lightyellow";
}

function toggleProfile() {
    document.getElementById("profile").classList.toggle("hide");
}

document.getElementById("profile").setAttribute("title", "Student Details");