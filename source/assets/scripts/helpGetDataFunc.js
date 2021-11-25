// helpGetDataFunc.js

/**
 * Get the image of recipe.
 * @param {Object} data a JSON data object contains information of image.
 * @returns String
 */
export function getImgUrl(data) {
    if (data && data.image) return data.image;
    return "assets/images/noPhoto.jpeg";
}


/**
 * Get the title of recipe.
 * @param {Object} data a JSON data object contains information of title.
 * @returns String
 */
export function getTitle(data) {
    if (data && data.title) return data.title;
    return "";
}


/**
 * Get the cooking time of recipe.
 * @param {Object} data a JSON data object contains information of cook time.
 * @returns String
 */
export function getTime(data) {
    if (data && data.readyInMinutes) return data.readyInMinutes;
    return null;
}


/**
 * Get the steps of recipe.
 * @param {Object} data a JSON data object contains information of instructions string.
 * @returns String
 */
export function getSteps(data) {
    if (data && data.instructions) return data.instructions;
    return null;
}

/**
 * Get the steps of recipe (Array).
 * @param {Object} data a JSON data object contains information of instructions array.
 * @returns Array
 */
export function getStepsArray(data) {
    if (data && data.instructionsArray) return data.instructionsArray;
    return [];
}

/**
 * Get the ingredients of recipe.
 * @param {Object} data a JSON data object contains information of ingredients string.
 * @returns String
 */
export function getIngre(data) {
    let listHtml = "<ol>";
    let ingreArray = data.extendedIngredients;

    for (let i of ingreArray) {
        let ingreName = i.name;
        let ingreAmount = i.amount;
        let ingreUnit = i.unit;
        let newIngreList;
        if (typeof ingreAmount === "string") {
            newIngreList = `<li><p>${ingreName}</p> - ${Number(ingreAmount).toFixed(2)} ${ingreUnit}</li>`;
        } else {
            newIngreList = `<li><p>${ingreName}</p> - ${ingreAmount.toFixed(2)} ${ingreUnit}</li>`;
        }
        listHtml += newIngreList;
    }
    listHtml += "</ol>"

    return listHtml;
}


/**
 * Get the ingredients of recipe (Array).
 * @param {Object} data a JSON data object contains information of ingredients array.
 * @returns Array
 */
export function getIngreArray(data) {
    if (data.extendedIngredients) return data.extendedIngredients;
    return [];
}

/**
 * Get the vegetarian of recipe.
 * @param {Object} data a JSON data object contains information of Vegetarian boolean.
 * @returns Boolean
 */
export function getVegeta(data) {
    if (data.vegetarian) return data.vegetarian;
    return false;
}


/**
 * Get the vegan of recipe
 * @param {Object} data a JSON data object contains information of Vegan boolean.
 * @returns Boolean
 */
export function getVegan(data) {
    if (data.vegan) return data.vegan;
    return false;
}

/**
 * Get the glutenFree of recipe
 * @param {Object} data a JSON data object contains information of GlutenFree boolean.
 * @returns Boolean
 */
export function getGluten(data) {
    if (data.glutenFree) return data.glutenFree;
    return false;
}

/**
 * Get the dairyFree of recipe
 * @param {Object} data a JSON data object contains information of DairyFree boolean.
 * @returns Boolean
 */
export function getDairy(data) {
    if (data.dairyFree) return data.dairyFree;
    return false;
}