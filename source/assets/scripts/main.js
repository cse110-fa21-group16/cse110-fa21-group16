window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("Loaded");

    // testing edit recipe component
    let editSection = document.querySelector("section[class='edit-section']");
    let editPage = document.createElement("edit-recipe");
    editPage.data = "testing";
    editSection.appendChild(editPage);
}