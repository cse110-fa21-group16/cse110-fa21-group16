const axios = require("axios");
const APIKey = process.env.API_KEY;

exports.handler = function(event, context, callback) {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30`;
    axios({
        method:'get', 
        url:url
    }).then(res => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(res.data)
        });
    }).catch(err => {
        callback(err);
    });
}