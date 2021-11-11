const fetch = require("node-fetch-commonjs");
const APIKey = process.env.API_KEY;

exports.handler = function(event, context, callback) {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30`;
    return new Promise((resolve, reject) => {
        fetch(url).catch(error => reject(false));
    });
}