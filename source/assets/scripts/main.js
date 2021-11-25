// main.js
import { Router } from "./Router.js";

export const $ = (selector) => document.querySelector(selector);

let nextMyRecipeID = JSON.parse(localStorage.getItem("nextMyRecipeID"));
let feaRecipeArray = JSON.parse(localStorage.getItem("feaRecipeArray"));
let myRecipeArray = JSON.parse(localStorage.getItem("myRecipeArray"));
let favRecipeArray = JSON.parse(localStorage.getItem("favRecipeArray"));

/**
 * Creating a router object. The constructor's function is the "home" function
 */
export const router = new Router(function () {
  console.log("Returning to landing page!");
  leaveFeatured();
  leaveFavorite();
  leaveMyRecipe();
  $("#add-recipe-page").classList.remove("main-shown");
  $("#add-recipe-page").innerHTML = "";
  $("#view-recipe-page").classList.remove("main-shown");
  $("#view-recipe-page").innerHTML = "";
  $("#delete-page").classList.remove("main-shown");
  $("#delete-page").innerHTML = "";
  $("#view-nutrition-page").classList.remove("main-shown");
  $("#view-nutrition-page").innerHTML = "";
  loadMain();
  loadLanding();
});

window.addEventListener("DOMContentLoaded", init);

/**
 * Initialize and load page.
 * @returns Void
 */
async function init() {
  let fetchSuccessful = await fetchFeaRecipeArray();
  if (!fetchSuccessful) {
    console.log("Recipe fetch unsuccessful");
    return;
  }

  let addFeaCardSuccessful = await createFeaRecipeCards();
  if (!addFeaCardSuccessful) {
    console.log("Add featured recipe unsuccessful");
    return;
  }

  let addFavCardSuccessful = await createFavRecipeCards();
  if (!addFavCardSuccessful) {
    console.log("Add favorite recipe unsuccessful");
    return;
  }

  let addMyCardSuccessful = await createMyRecipeCards();
  if (!addMyCardSuccessful) {
    console.log("Add my recipe unsuccessful");
    return;
  }

  // Routing view for every card in feaReicpeArray
  for (let i = 0; i < feaRecipeArray.length; i++ ) {
    let page = feaRecipeArray[i]["title"];
    page = page.replace(/&/g, ""); // replace all ampersand in string
    router.addPage(page, () => {
      $("#view-recipe-page").classList.remove("main-shown");
      $("#view-recipe-page").innerHTML = "";
      $("#view-recipe-page").classList.add("main-shown");
      const viewRecipePage = document.createElement("view-fea-recipe");
      viewRecipePage.data = feaRecipeArray[i];
      $("#view-recipe-page").appendChild(viewRecipePage);
      leaveMain();
    });
  }

  // Routing view for every card in myRecipeArray
  // Since we're allowing duplicate name, we'll use id to distinguish them
  for (let i = 0; i < myRecipeArray.length; i++) {
    // Routing for viewing/checking out recipe
    router.addPage(myRecipeArray[i]["id"], () => {
      myRecipeArray = JSON.parse(localStorage.getItem("myRecipeArray")); // update the array
      $("#add-recipe-page").classList.remove("main-shown");
      $("#add-recipe-page").innerHTML = "";
      $("#view-recipe-page").classList.remove("main-shown");
      $("#view-recipe-page").innerHTML = "";
      $("#view-recipe-page").classList.add("main-shown");
      const viewRecipePage = document.createElement("view-my-recipe");
      viewRecipePage.data = myRecipeArray[i];
      $("#view-recipe-page").appendChild(viewRecipePage);
      leaveMain();
    });
  }


  // Routing for section page links
  router.addPage("ToFeaturedPage", () => {
    $("#view-recipe-page").classList.remove("main-shown");
    $("#view-recipe-page").innerHTML = "";
    loadMain();
    leaveLanding();
    loadFeatured();
  });

  router.addPage("ToFavoritePage", () => {
    $("#view-recipe-page").classList.remove("main-shown");
    $("#view-recipe-page").innerHTML = "";
    loadMain();
    leaveLanding();
    loadFavorite();
  });

  router.addPage("ToMyRecipePage", () => {
    $("#view-recipe-page").classList.remove("main-shown");
    $("#view-recipe-page").innerHTML = "";
    loadMain();
    leaveLanding();
    loadMyRecipe();
  })

  setButtonListen();
  bindEscKey();
  bindPopstate();
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
      fetch("./.netlify/functions/fetch-data")
        // fetch("https://api.spoonacular.com/recipes/random?apiKey=...&number=30")
        .then((response) => response.json())
        .then((data) => {
          feaRecipeArray = data;
          localStorage.setItem("feaRecipeArray", JSON.stringify(feaRecipeArray));
          resolve(true);
        }).catch(() => reject(false));
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
  return new Promise((resolve) => {
    $("#featured-list").innerHTML = "";
    let index = Math.round(Math.random() * 5);
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
  return new Promise((resolve) => {
    favRecipeArray = JSON.parse(localStorage.getItem("favRecipeArray")); // update to new array

    if (favRecipeArray === null || favRecipeArray.length === 0) {
      favRecipeArray = [];
      $("#favorite-recipes").classList.remove("shown");
      resolve(true);
    }
    $("#favorite-list").innerHTML = "";
    // console.log(favRecipeArray);
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
  return new Promise((resolve) => {
    myRecipeArray = JSON.parse(localStorage.getItem("myRecipeArray")); // update to new array

    if (nextMyRecipeID == null) {
      nextMyRecipeID = 0;
    }

    if (myRecipeArray == null) {
      myRecipeArray = [];
    }

    $("#my-list").innerHTML = "";
    let addNewCard = document.createElement("new-card");
    $("#my-list").appendChild(addNewCard);
    for (let i = 0; i < 2 && i < myRecipeArray.length; i++) {
      // for (let i = 0; i < 2 && i < feaRecipeArray.length; i++) {            // Test code
      let newMyRecipeCard = document.createElement("recipe-card-my");
      // console.log(myRecipeArray);
      newMyRecipeCard.data = myRecipeArray[i];
      // newFavRecipeCard.data = feaRecipeArray[i];                          // Test code

      // Update routing when a recipe is added
      // Routing for viewing/checking a recipe 
      router.addPage(myRecipeArray[i]["id"], () => {
        myRecipeArray = JSON.parse(localStorage.getItem("myRecipeArray")); // update the array
        $("#add-recipe-page").classList.remove("main-shown");
        $("#add-recipe-page").innerHTML = "";
        $("#view-recipe-page").classList.remove("main-shown");
        $("#view-recipe-page").innerHTML = "";
        $("#view-recipe-page").classList.add("main-shown");
        const viewRecipePage = document.createElement("view-my-recipe");
        viewRecipePage.data = myRecipeArray[i];
        $("#view-recipe-page").appendChild(viewRecipePage);
        leaveMain();
      });
  
      $("#my-list").appendChild(newMyRecipeCard);
    }
    if (myRecipeArray.length < 2) {
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
  return new Promise((resolve) => {
    $("#featured-page-list").innerHTML = "";
    for (let i = 0; i < feaRecipeArray.length; i++) {
      let newFeaRecipeCard = document.createElement("recipe-card-featured-pg");
      newFeaRecipeCard.data = feaRecipeArray[i];
      $("#featured-page-list").appendChild(newFeaRecipeCard);
    }
    resolve(true);
  });
}


/**
 * Initial favorite Recipes page with all recipes from favRecipeArray
 * @returns a Promise
 */
function createFavRecipePage() {
  return new Promise((resolve) => {
    $("#favorite-page-list").innerHTML = "";
    favRecipeArray = JSON.parse(localStorage.getItem("favRecipeArray")); // update to new array
    // console.log(favRecipeArray);
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
 * Initial My Recipes page with all recipes from myRecipeArray
 * @returns a Promise
 */
export function createMyRecipePage() {
  return new Promise((resolve) => {
    myRecipeArray = JSON.parse(localStorage.getItem("myRecipeArray")); // update to the new array

    if (nextMyRecipeID == null) {
      nextMyRecipeID = 0;
    }

    if (myRecipeArray == null) {
      myRecipeArray = [];
    }

    $("#my-page-list").innerHTML = "";
    for (let i = 0; i < myRecipeArray.length; i++) {
      let newMyRecipeCard = document.createElement("recipe-card-my-my-page");
      newMyRecipeCard.data = myRecipeArray[i];

      // Update routing when a recipe is added in myrecipe page
      // Routing for viewing/checking a recipe 
      router.addPage(myRecipeArray[i]["id"], () => {
        myRecipeArray = JSON.parse(localStorage.getItem("myRecipeArray")); // update the array
        $("#add-recipe-page").classList.remove("main-shown");
        $("#add-recipe-page").innerHTML = "";
        $("#view-recipe-page").classList.remove("main-shown");
        $("#view-recipe-page").innerHTML = "";
        $("#view-recipe-page").classList.add("main-shown");
        const viewRecipePage = document.createElement("view-my-recipe");
        viewRecipePage.data = myRecipeArray[i];
        $("#view-recipe-page").appendChild(viewRecipePage);
        leaveMain();
      });
  
      $("#my-page-list").appendChild(newMyRecipeCard);
    }
    let addNewCard = document.createElement("new-card-my-page");
    $("#my-page-list").appendChild(addNewCard);
    resolve(true);
  });
}



/**
 * Set event listener for all title button.
 * @returns Void
 */
function setButtonListen() {
  $("#to-feature-page").addEventListener("click", (e) => {
    if (e.path[0].nodeName == "B") return;
    router.navigate("ToFeaturedPage");
  });

  $("#feature-page-to-landing").addEventListener("click", (e) =>{
    if (e.path[0].nodeName == "B") return;
    router.navigate("home");
  });

  $("#to-favorite-page").addEventListener("click", (e) => {
    if (e.path[0].nodeName == "B") return;
    router.navigate("ToFavoritePage");
  });

  $("#favorite-page-to-landing").addEventListener("click", (e) => {
    if (e.path[0].nodeName == "B") return;
    router.navigate("home");
  });

  $("#to-my-page").addEventListener("click", (e) => {
    if (e.path[0].nodeName == "B") return;
    router.navigate("ToMyRecipePage");
  });

  $("#my-page-to-landing").addEventListener("click", (e) => {
    if (e.path[0].nodeName == "B") return;
    router.navigate("home");
  });
}


/**
 * Load landing page.
 * @returns Void
 */
export function loadLanding() {
  $("#add-recipe-page").classList.remove("main-shown");
  $("#add-recipe-page").innerHTML = "";
  $("#delete-page").classList.remove("main-shown");
  $("#delete-page").innerHTML = "";
  $("#featured-recipes").classList.add("shown");
  $("#favorite-recipes").classList.add("shown");
  $("#my-recipes").classList.add("shown");
  createFeaRecipeCards();
  createMyRecipeCards();
  createFavRecipeCards();
}


/**
* Leave landing page.
* @returns Void
*/
export function leaveLanding() {
  $("#featured-recipes").classList.remove("shown");
  $("#favorite-recipes").classList.remove("shown");
  $("#my-recipes").classList.remove("shown");
  $("#featured-list").innerHTML = "";
  $("#favorite-list").innerHTML = "";
  $("#my-list").innerHTML = "";
}

/**
 * Load featured page.
 * @returns Void
 */
export function loadFeatured() {
  $("#view-nutrition-page").classList.remove("main-shown");
  $("#view-nutrition-page").innerHTML = "";
  $("#featured-page").classList.add("shown");
  createFeaRecipePage();
}


/**
* Leave featured page.
* @returns Void
*/
export function leaveFeatured() {
  $("#featured-page").classList.remove("shown");
  $("#featured-page-list").innerHTML = "";
}

/**
 * Load favorite page.
 * @returns Void
 */
export function loadFavorite() {
  $("#view-nutrition-page").classList.remove("main-shown");
  $("#view-nutrition-page").innerHTML = "";
  $("#favorite-page").classList.add("shown");
  createFavRecipePage();
}


/**
* Leave favorite page.
* @returns Void
*/
export function leaveFavorite() {
  $("#favorite-page").classList.remove("shown");
  $("#favorite-page-list").innerHTML = "";
}


/**
 * Load my recipe page.
 * @returns Void
 */
export function loadMyRecipe() {
  $("#add-recipe-page").classList.remove("main-shown");
  $("#add-recipe-page").innerHTML = "";
  $("#delete-page").classList.remove("main-shown");
  $("#delete-page").innerHTML = "";
  $("#my-page").classList.add("shown");
  createMyRecipePage();
}


/**
* Leave my recipe page.
* @returns Void
*/
export function leaveMyRecipe() {
  $("#my-page").classList.remove("shown");
  $("#my-page-list").innerHTML = "";
}


/**
* Load main page (like to add page).
* @returns Void
*/
export function loadMain() {
  $("#main-header").classList.add("main-shown");
  $("#main-main").classList.add("main-shown");
  $("#main-footer").classList.add("main-shown");
}


/**
* Leave main page (like to add page).
* @returns Void
*/
export function leaveMain() {
  $("#main-header").classList.remove("main-shown");
  $("#main-main").classList.remove("main-shown");
  $("#main-footer").classList.remove("main-shown");
  $("#featured-list").innerHTML = "";
  $("#favorite-list").innerHTML = "";
  $("#my-list").innerHTML = "";
  $("#featured-page-list").innerHTML = "";
  $("#favorite-page-list").innerHTML = "";
  $("#my-page-list").innerHTML = "";
}


/**
 * Credit: Lab 7 skeleton, Tai's implementation of skeleton
 * If the escape key is pressed, use your router to navigate() to the 'home'
 * page. This will let us go back to the home page from the detailed page.
 * @returns Void
 */
function bindEscKey() {
  document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
      router.navigate("home");
    }
  });
}

/**
 * Credit: Lab 7 skeleton, Tai's implementation of skeleton.
 * Binds the 'popstate' event on the window (which fires when the back &
 * forward buttons are pressed) so the navigation will continue to work 
 * as expected.
 * @returns Void
 */
 function bindPopstate() {
  /**
   * IMPORTANT: Pass in the boolean true as the second argument in navigate() here
   * so your navigate() function does not add your going back action to the history,
   * creating an infinite loop
   */
  window.addEventListener("popstate", (event) => {
    // if event.state == null then just navigate to home
    if (event.state != undefined) {
      router.navigate(event.state["page"], true);
    } else {
      router.navigate("home", true);
    }
  });

  /**
   * Handling global error
   * Reload the page if an error occured
   */
  // window.addEventListener("error", () => {
  //   window.location.reload();
  // })
}