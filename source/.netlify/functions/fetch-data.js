const APIKey = process.env.API_KEY;

exports.handler = function(event, context, callback) {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        resolve(true);
        console.log(data);
        return data;
    }).catch(error => reject(false));
}