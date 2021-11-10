window.addEventListener("DOMContentLoaded", init);

function init() {
    // testing edit recipe component
    let nutritionSection = document.querySelector("section[class='nutrition-page']");
    let nutritionPage = document.createElement("nutrition-page");
    nutritionPage.data = "testing";
    nutritionSection.appendChild(nutritionPage);
}