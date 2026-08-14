function checkBrowser() {
    let result = document.getElementById("result");

    let storage = typeof localStorage !== "undefined";
    let selector = typeof document.querySelector !== "undefined";

    result.innerHTML =
        "localStorage: " + (storage ? "Supported" : "Not Supported") +
        "<br>querySelector(): " + (selector ? "Supported" : "Not Supported");

    if (!storage) {
        result.innerHTML += "<br>Fallback: Browser storage unavailable";
    }
}