// main.js

const $ = (selector) => document.querySelector(selector);


const featureRecipes = [
  'https://introweb.tech/assets/json/ghostCookies.json',
  'https://introweb.tech/assets/json/birthdayCake.json',
  'https://introweb.tech/assets/json/chocolateChip.json',
  'assets/recipes/meatball.json',
  'assets/recipes/quickEasyPaste.json',
  "assets/recipes/pumpkinMuffins.json"
];

let myRecipeArray = JSON.parse(localStorage.getItem("myRecipeArray"));


const feaRecipeData = {};
const favRecipeData = {};

// new code added here
let recipes = {};
let storage = window.localStorage;

window.addEventListener('DOMContentLoaded', init);


async function init() {
  let fetchSuccessful = await fetchRecipes();
  if (!fetchSuccessful) {
    console.log('Recipe fetch unsuccessful');
    return;
  };

  let addFeaCardSuccessful = await createFeaRecipeCards();
  if (!addFeaCardSuccessful) {
    console.log('Add recipe unsuccessful');
    return;
  };

  let addFavCardSuccessful = await createFavRecipeCards();
  if (!addFavCardSuccessful) {
    console.log('Add recipe unsuccessful');
    return;
  };

  main();
  checkAndLoad();
}

function main() {
  let addNewCard = document.createElement('new-card');
  $('#my-list').appendChild(addNewCard);
  let addEmptyCard = document.createElement('empty-card');
  $('#my-list').appendChild(addEmptyCard);
  addNewCard = document.createElement('empty-card');
  $('#my-list').appendChild(addNewCard);
}

async function fetchRecipes() {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < featureRecipes.length; i++) {
      fetch(featureRecipes[i])
        .then(response => {
          if (!response.ok) {
            reject(false);
          }
          else {
            return response.json();
          }
        })
        .catch(e => reject(false))
        .then(data => {
          feaRecipeData[i] = data;
          favRecipeData[i] = data;
          if (featureRecipes.length == Object.keys(feaRecipeData).length) {
            resolve(true);
          }
        })
        .catch(e => reject(false))
    }
  });
}


function createFeaRecipeCards() {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 3; i++) {
      let newRecipeCard = document.createElement("recipe-card-fea");
      newRecipeCard.data = feaRecipeData[i];
      $('#featured-list').appendChild(newRecipeCard);
    }
    resolve(true);
  });
}

function createFavRecipeCards() {
  return new Promise((resolve, reject) => {
    for (let i = 3; i < 6; i++) {
      let newFavRecipeCard = document.createElement('recipe-card-fea');
      newFavRecipeCard.data = favRecipeData[i];
      $("#favorite-list").appendChild(newFavRecipeCard);
    }
    resolve(true);
  });
}

/**
 * Check local storage for existing 'recipe' key
 * If exists, then load data into the 'recipes' variable
 * If not, create a new key in local storage, store fetched data in there, and load into variable
 * @returns void
 */
async function checkAndLoad() {
    if (storage.getItem('recipes') == undefined) { // create new entry if data not found in storage
        let fetchSuccess = await fetchData();
        if (!fetchSuccess) {
            console.log("Failed fetch");
        }

        // store fetched data to storage
        storage.setItem('recipes', JSON.stringify(recipes));

        // now load data from storage into 'recipes' variable
        let dataFromStorage = JSON.parse(storage.getItem('recipes'));
        recipes = dataFromStorage;
    } else { // pull data from storage if key is found found
        let dataFromStorage = JSON.parse(storage.getItem('recipes'));
        recipes = dataFromStorage;
        console.log("recipes: " + recipes);
    }
}

/**
 * Fetch data from spoonacular API
 * @returns a Promise of fetched data
 */
 async function fetchData() {
    return new Promise((resolve, reject) => {
        fetch(`/.netlify/functions/fetch-data`)
        .then(response => response.json())
        .then(data => {
            console.log(data['recipes']);
            let fetchedData = data['recipes'];
            for (let i = 0; i < fetchedData.length; i++) {
                recipes[i] = fetchedData[i];
            }
            resolve(true);
        }).catch(error => reject(false));
    });
}