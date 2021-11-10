// main.js

// Here is where the recipes that you will fetch.
// Feel free to add your own here for part 2, if they are local files simply add their path as a string.
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
  

  
  //const combinedRecipes = recipes.concat(newRecipes);
  //console.log(combinedRecipes);
  
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
      console.log("Recipe fetch unsuccessful");
      return;
    };
  
    
  
    // Add the first three recipe cards to the page
    createRecipeCards();

    // Make the "Show more" button functional
    // bindShowMore();
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
  
      const main = document.querySelector("main");
      for (let i = 0; i < recipes.length; i++) //iterate through the whole recipes array
      {
      const CardtoCreate = document.createElement("recipe-card"); //create a card for it
      CardtoCreate.data = recipeData[recipes[i]]; //store the data into the card
      main.appendChild(CardtoCreate); //append to main so it shows up

      
      }
  }
  
  function bindShowMore() {
  
    const main = document.querySelector("main");
    const button = document.querySelector("button");
    const arrow = document.querySelector("#button-wrapper>img");
    
    const addRecipes = [] //used to we can later delete them
    let moreOrLess = false; //when set to false means it's not expanded, else it is expanded
  
    button.addEventListener('click', () => {
        
      if (moreOrLess)
        moreOrLess = false;
      else
        moreOrLess = true;
  
    if (moreOrLess) //if we are on show more
    {
      for (let i = 0; i < newRecipes.length; i++) //traverse through the new recipes
      {
        const CardtoCreate = document.createElement("recipe-card");
        CardtoCreate.data = recipeData[newRecipes[i]]; 
        addRecipes.push(CardtoCreate); //create a recipe card and put it in our addRecipes array (this is used in order to remove them later from main)
      }
  
      for (let j = 0; j < addRecipes.length; j++) //traverse through the addRecipes array and append every card into main
      {
        main.appendChild(addRecipes[j]);
      }
      button.textContent = "Show Less"; //change the text to "show less"
      arrow.style.transform = "rotate(180deg)"; //rotate the arrow upside down
    }
    else
    {
      for (let k = 0; k < addRecipes.length; k++) //else if we are on show less we traverse through the addrecipes array
      {
        main.removeChild(addRecipes[k]); //we get that card and we remove it from main 
      }
      while (addRecipes.length != 0) //while addRecipes array is not empty we pop it (empty it out) 
      {
          addRecipes.pop();
      }
      button.textContent = "Show More"; //change the text of the button 
      arrow.style.transform = "rotate(0deg)"; //rotate the arrow to its original position
  
    } 
    })
  
  }
    