const fetch = require("axios");
const APIKey = process.env.API_KEY;

exports.handler = function(event, context, callback) {
    return new Promise((resolve, reject) => {
        const url = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resolve(true);
            return data;
        }).catch(error => reject(false));
    });
}