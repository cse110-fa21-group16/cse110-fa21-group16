// const fetch = require("node-fetch");
const APIKey = process.env.API_KEY;

exports.handler = function(event, context, callback) {
    // const url = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=30`;
    // fetch(url)
    // .then(response => response.json())
    // .then(data => {
    //     resolve(true);
    //     console.log(data);
    //     return data;
    // }).catch(error => reject(false));
    let data = {
		name:'ray',
		foo:[1,2,4,6],
		time:Date.now()
	};
	
	console.log('data is '+JSON.stringify(data));

	callback(null, {
		statusCode:200,
		body:JSON.stringify(data)
	});
}