window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("Loaded");

    // testing edit recipe component
    let mainBody = document.querySelector("main[class='main-body']");
    let editPage = document.createElement("edit-recipe");
    editPage.data = "testing";
    mainBody.appendChild(editPage);
}