function hideFunction() {
    var x = document.getElementById("miNavegacion");
    if (x.className === "navegacion") {
        x.className += " responsive";
    } else {
        x.className = "navegacion";
    }
}
