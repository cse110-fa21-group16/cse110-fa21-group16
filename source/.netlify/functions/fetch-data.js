const fetch = require("node-fetch-commonjs");
const APIKey = process.env.API_KEY;

exports.handler = function(event, context, callback) {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30`;
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(response.data)
            })
        })
        .catch(error => reject(false));
    });
}