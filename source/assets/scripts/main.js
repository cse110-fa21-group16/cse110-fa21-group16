// main.js

const $ = (selector) => document.querySelector(selector);


let feaRecipeArray = JSON.parse(localStorage.getItem("feaRecipeArray"));
let myRecipeArray = JSON.parse(localStorage.getItem("myRecipeArray"));
let favRecipeArray = JSON.parse(localStorage.getItem("favRecipeArray"));


window.addEventListener("DOMContentLoaded", init);

/**
 * Initial and load page
 * @returns a Promise of fetched data
 */
async function init() {
  let fetchSuccessful = await fetchFeaRecipeArray();
  if (!fetchSuccessful) {
    console.log("Recipe fetch unsuccessful");
    return;
  };

  let addFeaCardSuccessful = await createFeaRecipeCards();
  if (!addFeaCardSuccessful) {
    console.log("Add featured recipe unsuccessful");
    return;
  };

  let addFavCardSuccessful = await createFavRecipeCards();
  if (!addFavCardSuccessful) {
    console.log("Add favorite recipe unsuccessful");
    return;
  };

  let addMyCardSuccessful = await createMyRecipeCards();
  if (!addMyCardSuccessful) {
    console.log("Add my recipe unsuccessful");
    return;
  };

  setButtonListen();
}


/**
 * Fetch data from spoonacular API (this function makes a call to another function
 * in the back-end Netlify service that is used to call our API. This way, the API key 
 * is hidden from the client-side)
 * @returns a Promise of fetched data
 */
async function fetchFeaRecipeArray() {
  return new Promise((resolve, reject) => {
    if (feaRecipeArray == null) {
      fetch("https://unruffled-lichterman-185ae7.netlify.app/.netlify/functions/fetch-data")
        // fetch("https://api.spoonacular.com/recipes/random?apiKey=...&number=30")
        .then((response) => response.json())
        .then((data) => {
          feaRecipeArray = data["recipes"];
          localStorage.setItem("feaRecipeArray", JSON.stringify(feaRecipeArray));
          resolve(true);
        }).catch((error) => reject(false));
    }
    else {
      resolve(true);
    }
  });
}


/**
 * Initial Featured Recipes section with three random recipes from feaRecipeArray
 * @returns a Promise of fetched data
 */
function createFeaRecipeCards() {
  return new Promise((resolve, reject) => {
    let index = Math.round(Math.random() * 25);
    for (let i = index; i < index + 3; i++) {
      let newFeaRecipeCard = document.createElement("recipe-card-fea");
      newFeaRecipeCard.data = feaRecipeArray[i];
      $("#featured-list").appendChild(newFeaRecipeCard);
    }
    resolve(true);
  });
}


/**
 * Initial Favorites Recipes section with three recipes from favRecipeArray
 * If no favorite recipes, then remove the Favorites Recipes section
 * @returns a Promise of fetched data
 */
function createFavRecipeCards() {
  return new Promise((resolve, reject) => {
    if (favRecipeArray === null || favRecipeArray.length === 0) {
      favRecipeArray = [];
      $("#favorite-recipes").classList.remove("shown");
    }
    for (let i = 0; i < 3 && i < favRecipeArray.length; i++) {
      // for (let i = 0; i < 3 && i < feaRecipeArray.length; i++) {            // Test code
      let newFavRecipeCard = document.createElement("recipe-card-fea");
      newFavRecipeCard.data = favRecipeArray[i];
      // newFavRecipeCard.data = feaRecipeArray[i];                          // Test code
      $("#favorite-list").appendChild(newFavRecipeCard);
    }
    if (favRecipeArray.length < 3) {
      for (let i = 0; i < 3 - favRecipeArray.length; i++) {
        let addEmptyCard = document.createElement("empty-card");
        $("#favorite-list").appendChild(addEmptyCard);
      }
    }
    resolve(true);
  });
}

/**
 * Initial My Recipes section with three recipes from myRecipeArray
 * @returns a Promise of fetched data
 */
function createMyRecipeCards() {
  return new Promise((resolve, reject) => {
    if (myRecipeArray == null) {
      myRecipeArray = [];
    }
    for (let i = 0; i < 3 && i < myRecipeArray.length; i++) {
      // for (let i = 0; i < 3 && i < feaRecipeArray.length; i++) {            // Test code
      let newMyRecipeCard = document.createElement("recipe-card-my");
      newMyRecipeCard.data = myRecipeArray[i];
      // newFavRecipeCard.data = feaRecipeArray[i];                          // Test code
      $("#my-list").appendChild(newMyRecipeCard);
    }
    if (myRecipeArray.length < 3) {
      let addNewCard = document.createElement("new-card");
      $("#my-list").appendChild(addNewCard);
      for (let i = 0; i < 2 - myRecipeArray.length; i++) {
        let addEmptyCard = document.createElement("empty-card");
        $("#my-list").appendChild(addEmptyCard);
      }
    }
    resolve(true);
  });
}


/**
 * Initial Featured Recipes page with all recipes from feaRecipeArray
 * @returns a Promise
 */
function createFeaRecipePage() {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < feaRecipeArray.length; i++) {
      let newFeaRecipeCard = document.createElement("recipe-card-featured-pg");
      newFeaRecipeCard.data = feaRecipeArray[i];
      $("#featured-page-list").appendChild(newFeaRecipeCard);
    }
    resolve(true);
  });
}


/**
 * Initial favorite Recipes page with all recipes from feaRecipeArray
 * @returns a Promise
 */
function createFavRecipePage() {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < favRecipeArray.length; i++) {
      let newFavRecipeCard = document.createElement("recipe-card-featured-pg");
      newFavRecipeCard.data = favRecipeArray[i];
      $("#favorite-page-list").appendChild(newFavRecipeCard);
    }
    if (favRecipeArray.length === 0) {
      let noFavTip = document.createElement("h1");
      noFavTip.textContent = "You may not have favorite recipe. You could add new one.";
      $("#favorite-page-list").appendChild(noFavTip);
    }
    resolve(true);
  });
}


/**
 * Set event listener for all title button
 * @returns void
 */
function setButtonListen() {
  $("#to-feature-page").addEventListener("click", function (event) {
    $("#featured-page").classList.add("shown");
    createFeaRecipePage();
    leaveLanding();
  });

  $("#feature-page-to-landing").addEventListener("click", function (event) {
    $("#featured-page").classList.remove("shown");
    $("#featured-page-list").innerHTML = "";
    loadLanding();
  });

  $("#to-favorite-page").addEventListener("click", function (event) {
    $("#favorite-page").classList.add("shown");
    createFavRecipePage();
    leaveLanding();
  });

  $("#favorite-page-to-landing").addEventListener("click", function (event) {
    $("#favorite-page").classList.remove("shown");
    $("#favorite-page-list").innerHTML = "";
    loadLanding();
  });
}


/**
 * Load landing page
 * @returns void
 */
function loadLanding() {
  $("#featured-recipes").classList.add("shown");
  $("#favorite-recipes").classList.add("shown");
  $("#my-recipes").classList.add("shown");
  createFeaRecipeCards();
  createMyRecipeCards();
  createFavRecipeCards();
}


/**
* Leave landing page
* @returns void
*/
function leaveLanding() {
  $("#featured-recipes").classList.remove("shown");
  $("#favorite-recipes").classList.remove("shown");
  $("#my-recipes").classList.remove("shown");
  $("#featured-list").innerHTML = "";
  $("#favorite-list").innerHTML = "";
  $("#my-list").innerHTML = "";
}


/**
* Load main page (like to add page)
* @returns void
*/
function loadMain() {
  $("#main-header").classList.add("main-shown");
  $("#main-main").classList.add("main-shown");
  $("#main-footer").classList.add("main-shown");
  loadLanding();
}


/**
* Leave main page (like to add page)
* @returns void
*/
function leaveMain() {
  $("#main-header").classList.remove("main-shown");
  $("#main-main").classList.remove("main-shown");
  $("#main-footer").classList.remove("main-shown");
  leaveLanding();
  $("#featured-page").classList.remove("shown");
  $("#featured-page-list").innerHTML = "";
  $("#favorite-page").classList.remove("shown");
  $("#favorite-page-list").innerHTML = "";
}