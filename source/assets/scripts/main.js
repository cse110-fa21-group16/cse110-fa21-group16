// main.js

const $ = (selector) => document.querySelector(selector);


const featureRecipes = [
  'https://introweb.tech/assets/json/ghostCookies.json',
  'https://introweb.tech/assets/json/birthdayCake.json',
  'https://introweb.tech/assets/json/chocolateChip.json',
  'assets/recipes/meatball.json',
  'assets/recipes/quickEasyPaste.json',
  'assets/recipes/pumpkinMuffins.json'
];

let myRecipeArray = JSON.parse(localStorage.getItem('myRecipeArray'));


const feaRecipeData = {};
const favRecipeData = {};

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