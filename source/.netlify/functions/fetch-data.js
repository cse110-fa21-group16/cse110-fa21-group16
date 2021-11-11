import fetch from "node-fetch";
const APIKey = process.env.API_KEY;

export function handler(event, context, callback) {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30`;
    return new Promise((resolve, reject) => {
        fetch(url).catch(error => reject(false));
    });
}