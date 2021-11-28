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
 export function getFeaturedSteps(data) {
    if (data && data.analyzedInstructions) return data.analyzedInstructions;
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
        // let ingreUnit = i.measures.us.unitLong;
        let ingreUnit = i.unit;
        let newIngreList;
        
        if(typeof ingreAmount === "string"){
            ingreAmount = Number(ingreAmount).toFixed(2);
        }
        // let serving = ["grams", "kgs", "lbs", "tbsp", "cups"]
        if(serving.includes(ingreUnit)){
            // newIngreList = `<li><p>${ingreName}</p><p> - ${ingreAmount} ${ingreUnit}</p>
            // <button class="button convert-grams">g</button>
            // <button class="button convert-oz">oz</button></li>`;

        newIngreList = `<li><p>${ingreName}</p><p> - ${ingreAmount} ${ingreUnit}</p>
        <p>Convert to 
            <select id="unit-type">
                <option value="Select" selected="selected">Select</option>
                <option value="grams">grams</option>
                <option value="kgs">kgs</option>
                <option value="tbsps">tbsps</option>
                <option value="lb">lb</option>
            </select>
        </p></li>`;
        }
        else{
            newIngreList = `<li><p>${ingreName}</p><p> - ${ingreAmount.toFixed(2)} ${ingreUnit}</p></li>`;
        }
        
        listHtml += newIngreList;
    }
    listHtml += "</ol>"

    return listHtml;
}

/**
 * Get the ingredients of recipe.
 * @param {Object} data a JSON data object contains information of ingredients string.
 * @returns String
 */
 export function getIngreFea(data) {
    let listHtml = "<ol>";
    let ingreArray = data.extendedIngredients;

    for (let i = 0; i < ingreArray.length; i++) {
        let ingreName = ingreArray[i].name;
        let ingreAmount = ingreArray[i].amount;
        // let ingreUnit = i.measures.us.unitLong;
        let ingreUnit = ingreArray[i].unit;
        let newIngreList;
        
        if(typeof ingreAmount === "string"){
            newIngreList = `<li id=${i}><p id="name" name="${ingreName}">${ingreName}</p><p id="amount" amount="${Number(ingreAmount).toFixed(2)}" unit="${ingreUnit}"> 
            - ${Number(ingreAmount).toFixed(2)} ${ingreUnit}</p>
                <p>Convert to 
                    <select id="unit-type">
                        <option value="Select" selected="selected">Select</option>
                        <option value="grams">grams</option>
                        <option value="kgs">kgs</option>
                        <option value="tbsps">tbsps</option>
                        <option value="lb">lb</option>
                    </select>
                </p></li>`;
        }
        else{
            newIngreList = `<li id=${i}><p id="name" name="${ingreName}">${ingreName}</p><p id="amount" amount="${Number(ingreAmount).toFixed(2)}" unit="${ingreUnit}"> 
            - ${ingreAmount.toFixed(2)} ${ingreUnit}</p>
                <p>Convert to 
                    <select id="unit-type">
                        <option value="Select" selected="selected">Select</option>
                        <option value="grams">grams</option>
                        <option value="kgs">kgs</option>
                        <option value="tbsps">tbsps</option>
                        <option value="lb">lb</option>
                    </select> : <span id="converted-result"></span> 
                </p></li>`;
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