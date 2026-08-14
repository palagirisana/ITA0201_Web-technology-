function showInfo() {
    document.getElementById("url").textContent = window.location.href;

    document.getElementById("language").textContent =
        navigator.language;

    document.getElementById("status").textContent =
        navigator.onLine ? "Online" : "Offline";

    document.getElementById("screen").textContent =
        screen.width + " x " + screen.height;

    document.getElementById("window").textContent =
        window.innerWidth + " x " + window.innerHeight;

    document.getElementById("scroll").textContent =
        window.scrollX + " , " + window.scrollY;
}

showInfo();

window.addEventListener("resize", showInfo);
window.addEventListener("scroll", showInfo);