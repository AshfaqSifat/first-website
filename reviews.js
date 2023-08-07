// Define variables
let dropdown = document.querySelector("select");

dropdown.addEventListener("change", link);

function link() {
    let link = dropdown.value;

    if (link) {
        // When dropdown selection is changed, user is referred to link attached to chosen element
        window.location.href = link;
    }
}