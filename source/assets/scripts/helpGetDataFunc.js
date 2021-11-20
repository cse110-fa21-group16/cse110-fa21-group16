// helpGetDataFunc.js

/**
 * Get the image of recipe
 * @returns string
 */
export function getImgUrl(data) {
    if (data && data.image) return data.image;
    return "assets/images/noPhoto.jpeg";
}


/**
 * Get the title of recipe
 * @returns string
 */
export function getTitle(data) {
    if (data && data.title) return data.title;
    return "";
}


/**
 * Get the cooking time of recipe
 * @returns string
 */
export function getTime(data) {
    if (data && data.readyInMinutes) return data.readyInMinutes;
    return null;
}


/**
 * Get the steps of recipe
 * @returns string
 */
export function getSteps(data) {
    if (data && data.instructions) return data.instructions;
    return null;
}

/**
 * Get the steps of recipe (Array)
 * @returns string
 */
export function getStepsArray(data) {
    if (data && data.instructionsArray) return data.instructionsArray;
    return [];
}

/**
 * Get the ingredients of recipe
 * @returns string
 */
export function getIngre(data) {
    let listHtml = "<ol>";
    let ingreArray = data.extendedIngredients;
    for (let i of ingreArray) {
        let ingreName = i.name;
        let ingreAmount = i.amount;
        let ingreUnit = i.unit;
        let newIngreList = `<li><p>${ingreName}</p> - ${ingreAmount} ${ingreUnit}</li>`;
        listHtml += newIngreList;
    }
    listHtml += "</ol>"

    return listHtml;
}


/**
 * Get the ingredients of recipe (Array)
 * @returns string
 */
export function getIngreArray(data) {
    if (data.extendedIngredients) return data.extendedIngredients;
    return [];
}

/**
 * Get the vegetarian of recipe
 * @returns bool
 */
export function getVegeta(data) {
    if (data.vegetarian) return data.vegetarian;
    return false;
}


/**
 * Get the vegan of recipe
 * @returns bool
 */
export function getVegan(data) {
    if (data.vegan) return data.vegan;
    return false;
}

/**
 * Get the glutenFree of recipe
 * @returns bool
 */
export function getGluten(data) {
    if (data.glutenFree) return data.glutenFree;
    return false;
}

/**
 * Get the dairyFree of recipe
 * @returns bool
 */
export function getDairy(data) {
    if (data.dairyFree) return data.dairyFree;
    return false;
}