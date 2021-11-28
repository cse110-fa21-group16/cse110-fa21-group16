const fetch = require("node-fetch-commonjs");
const localStorage = require("localStorage");
const APIKey = process.env.API_KEY;
// const API_Endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30`;

/**
 * This function fetches the data directly from spoonacular API
 * @param {*} event 
 * @param {*} context 
 * @returns 
 */
exports.handler = async (event, context) => {
    let ingredientName = event.queryStringParameters.ingredientName;
    let sourceAmount = event.queryStringParameters.sourceAmount;
    let sourceUnit = event.queryStringParameters.sourceUnit;
    let targetUnit = event.queryStringParameters.targetUnit;
    const API_Endpoint = `https://api.spoonacular.com/recipes/convert?ingredientName=${ingredientName}&sourceAmount=${sourceAmount}&sourceUnit=${sourceUnit}&targetUnit=${targetUnit}s&apiKey=${APIKey}`

    // return {
    //     statusCode: 200,
    //     body: event.queryStringParameters.ingredientName
    // }
    return new Promise((resolve, reject) => {
        fetch(API_Endpoint)
        .then(res => res.json())
        .then(data => {
            resolve({
                statusCode: 200,
                body: JSON.stringify(data)
            })
        }).catch(error => reject(false));
    });
};