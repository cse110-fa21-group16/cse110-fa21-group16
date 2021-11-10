// main.js

const recipes = [
    'https://introweb.tech/assets/json/ghostCookies.json',
    'https://introweb.tech/assets/json/birthdayCake.json',
    'https://introweb.tech/assets/json/chocolateChip.json',
    'assets/recipes/roasted_brussel_sprouts.json',
    'assets/recipes/greek_chicken_skewers.json',
    'assets/recipes/quickEasyPaste.json',
    'https://introweb.tech/assets/json/ghostCookies.json',
    'https://introweb.tech/assets/json/birthdayCake.json',
    'https://introweb.tech/assets/json/chocolateChip.json',
    'assets/recipes/roasted_brussel_sprouts.json',
    'assets/recipes/greek_chicken_skewers.json',
    'assets/recipes/quickEasyPaste.json',
  ];
  
  // Once all of the recipes that were specified above have been fetched, their
  // data will be added to this object below. You may use whatever you like for the
  // keys as long as it's unique, one suggestion might but the URL itself
  const recipeData = {};
  
  window.addEventListener('DOMContentLoaded', init);
  
  // This is the first function to be called, so when you are tracing your code start here.
  async function init() {
    // fetch the recipes and wait for them to load
    let fetchSuccessful = await fetchRecipes();
    // if they didn't successfully load, quit the function
    if (!fetchSuccessful) {
      console.log('Recipe fetch unsuccessful');
      return;
    };
    createRecipeCards();
  }
  
  async function fetchRecipes() {
    return new Promise((resolve, reject) => {
  
  
      const allPromises = []; //store all the promises inside promise array
      for (let i = 0; i < recipes.length; i++)
      {
        allPromises.push(
          fetch(recipes[i])
          .then(response => response.json())
          .then(data => {
            recipeData[recipes[i]] = data;
          })
          .catch(() => reject(false)) //if we catch an error we reject the promise 
        );
      }
      Promise.all(allPromises).then(() => { //function that waits for all three promises to resolve (link: https://www.javascripttutorial.net/es6/javascript-promise-all/)
        resolve(true);
      });
    });
  }
   
  function createRecipeCards() {
      const main = document.querySelector('main');
      for (let i = 0; i < recipes.length; i++) //iterate through the whole recipes array
      {
      const CardtoCreate = document.createElement('recipe-card'); //create a card for it
      CardtoCreate.data = recipeData[recipes[i]]; //store the data into the card
      main.appendChild(CardtoCreate); //append to main so it shows up
      }
  }