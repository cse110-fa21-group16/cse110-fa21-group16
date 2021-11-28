const fetch = require("node-fetch-commonjs");
const localStorage = require("localStorage");
const APIKey = process.env.API_KEY;
// const API_Endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30`;
const API_Endpoint = `https://api.spoonacular.com/recipes/informationBulk?ids=639487,639752,644761,653670,651958,633096,646738,648320,642540,632874&apiKey=${APIKey}&includeNutrition=true`

/**
 * This function fetches the data directly from spoonacular API
 * @param {*} event 
 * @param {*} context 
 * @returns 
 */
exports.handler = async (event, context) => {
    // event.queryStringParameters.ingredientName
    return {
        statusCode: 200,
        body: "connected"
    }
};