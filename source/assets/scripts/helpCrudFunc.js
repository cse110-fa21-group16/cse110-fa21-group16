// helpCrudFunc.js
let nextMyRecipeID = JSON.parse(localStorage.getItem("nextMyRecipeID"));
let myRecipeArray = JSON.parse(localStorage.getItem("myRecipeArray"));
let favRecipeArray = JSON.parse(localStorage.getItem("favRecipeArray"));

/**
 * Determine wether the recipe is in favRecipeArray
 * @returns bool
 */
export function checkFav(recipeTitle) {
    for (let i of favRecipeArray) {
        if (i.title == recipeTitle) {
            return true;
        }
    }
    return false;
}


/**
* Remove the recipe from the favRecipeArray
* @returns void
*/
export function rmFav(recipeTitle) {
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
* Add the recipe to the favRecipeArray
* @returns void
*/
export function addFav(data) {
    favRecipeArray.push(data);
    localStorage.setItem("favRecipeArray", JSON.stringify(favRecipeArray));
}


/**
* Add the recipe to the myRecipeArray
* @returns void
*/
export function addMy(data) {
    
    if (nextMyRecipeID == null) {
        nextMyRecipeID = 0;
    }

    if (myRecipeArray == null) {
        myRecipeArray = [];
    }

    data["id"] = nextMyRecipeID;
    console.log(data["id"]);
    nextMyRecipeID += 1;
    myRecipeArray.push(data);
    localStorage.setItem("nextMyRecipeID", JSON.stringify(nextMyRecipeID));
    localStorage.setItem("myRecipeArray", JSON.stringify(myRecipeArray));
}


/**
* Updata the recipe to the myRecipeArray
* @returns void
*/
export function updateMy(data) {
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
* @returns void
*/
export function rmMy(data) {
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
