// helpCrudFunc.js
// let nextMyRecipeID = JSON.parse(localStorage.getItem("nextMyRecipeID"));
// let myRecipeArray = JSON.parse(localStorage.getItem("myRecipeArray"));
// let favRecipeArray = JSON.parse(localStorage.getItem("favRecipeArray"));

/**
 * Determine whether the recipe is in favRecipeArray.
 * @param {String} recipeTitle title string of a recipe.
 * @param {Array} favRecipeArray an array of favorited recipes.
 * @returns Boolean
 */
export function checkFav(recipeTitle, favRecipeArray) {
    if (favRecipeArray === null || favRecipeArray.length === 0) {
        favRecipeArray = [];
    }
    for (let i of favRecipeArray) {
        if (i.title == recipeTitle) {
            return true;
        }
    }
    return false;
}


/**
 * Remove the recipe from the favRecipeArray
 * @param {String} recipeTitle title string of a recipe.
 * @param {Array} favRecipeArray an array of favorited recipes.
 * @returns Void
 */
export function rmFav(recipeTitle, favRecipeArray) {
    let i = 0;
    for (; i < favRecipeArray.length; i++) {
        if (favRecipeArray[i].title == recipeTitle) {
            break;
        }
    }
    delete favRecipeArray[i];
    favRecipeArray = favRecipeArray.filter(function (e) { return e });
    localStorage.setItem("favRecipeArray", JSON.stringify(favRecipeArray));
}


/**
 * Add the recipe to the favRecipeArray.
 * @param {Object} data a JSON data object contains information of a recipe.
 * @param {Array} favRecipeArray an array of favorited recipes.
 * @returns Void
 */
export function addFav(data, favRecipeArray) {
    favRecipeArray.push(data);
    localStorage.setItem("favRecipeArray", JSON.stringify(favRecipeArray));
}


/**
 * Add the recipe to the myRecipeArray.
 * @param {Object} data a JSON data object contains information of a recipe.
 * @param {Number} nextMyRecipeID a number representing the id of the next recipe to be created.
 * @param {Array} myRecipeArray an array of created recipes.
 * @returns Void
 */
export function addMy(data, nextMyRecipeID, myRecipeArray) {
    
    if (nextMyRecipeID == null) {
        nextMyRecipeID = 0;
    }

    if (myRecipeArray == null) {
        myRecipeArray = [];
    }

    data["id"] = nextMyRecipeID;
    nextMyRecipeID += 1;
    myRecipeArray.push(data);
    console.log(myRecipeArray.length);
    localStorage.setItem("nextMyRecipeID", JSON.stringify(nextMyRecipeID));
    localStorage.setItem("myRecipeArray", JSON.stringify(myRecipeArray));
}


/**
 * Updata the recipe to the myRecipeArray
 * @param {Object} data a JSON data object contains information of a recipe.
 * @param {Array} myRecipeArray an array of created recipes.
 * @returns Void
 */
export function updateMy(data, myRecipeArray) {
    let i = 0;
    for (; i < myRecipeArray.length; i++) {
        if (myRecipeArray[i].id == data.id) {
            myRecipeArray[i] = data;
            break;
        }
    }
    localStorage.setItem("myRecipeArray", JSON.stringify(myRecipeArray));
}

/**
 * Remove the recipe to the myRecipeArray
 * @param {Object} data a JSON data object contains information of a recipe.
 * @param {Array} myRecipeArray an array of created recipes.
 * @returns Void
 */
export function rmMy(data, myRecipeArray) {
    let i = 0;
    for (; i < myRecipeArray.length; i++) {
        if (myRecipeArray[i].id == data.id) {
            break;
        }
    }
    delete myRecipeArray[i];
    myRecipeArray = myRecipeArray.filter(function (e) { return e });
    localStorage.setItem("myRecipeArray", JSON.stringify(myRecipeArray));
}
