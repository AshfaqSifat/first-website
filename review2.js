// Define variables
let proButton = document.getElementById("proButton");
let conButton = document.getElementById("conButton");
let pros = document.getElementById("pros");
let cons = document.getElementById("cons");

// Pros show by default
proButton.style.backgroundColor = "gray";
pros.style.display = "block"
cons.style.display = "none";

proButton.onclick = function() {
    // Only pros are shown
    pros.style.display = "block";
    cons.style.display = "none";

    proButton.style.backgroundColor = "gray";
    conButton.style.backgroundColor = "white";
}

conButton.onclick = function() {
    // Only cons are shown
    cons.style.display = "block";
    pros.style.display = "none";
    conButton.style.backgroundColor = "gray";
    proButton.style.backgroundColor = "white";
}