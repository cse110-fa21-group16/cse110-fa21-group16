const fetch = require("node-fetch-commonjs");
const APIKey = process.env.API_KEY;

// exports.handler = function(event, context, callback) {
//     const url = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30`;
//     return new Promise((resolve, reject) => {
//         fetch(url)
//         .then((response) => {
//             callback(null, {
//                 statusCode: 200,
//                 body: JSON.stringify(response.data)
//             });
//             console.log(response.data);
//         })
//         .catch(error => reject(false));
//     });
// }

const API_ENDPOINT = "https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30";

exports.handler = async (event, context) => {
  return fetch(
      API_ENDPOINT, 
      { headers: 
        { 
            Accept: "application/json" 
        } 
      }
    )
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: data["recipe"],
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};