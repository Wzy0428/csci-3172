//Fetch API to make a request to the Unsplash API
import fetch from 'node-fetch'; 
//dotenv to load environment variables
import dotenv from 'dotenv';
//Load environment variables
dotenv.config();

//Handler function to process the incoming HTTP request
export async function handler(event, context) {
    //Retrieve the Unsplash API key from the environment variables 
    const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

    //Extract the query parameter from the incoming request
    if (event.path.includes('/search-images')) {
    const query = new URLSearchParams(event.queryStringParameters).get('query');
    
    //If the query parameter is missing, return a 400 Bad Request response 
    if (!query) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Query parameter is missing' }),
        };
    }

    //Construct the URL to fetch images from the Unsplash API
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_API_KEY}&per_page=5`;

    //Fetch images from the Unsplash API and parse the JSON response from Unsplash  
    try {
        const response = await fetch(url);
        const data = await response.json();
        //Return a 200 OK response with the image results
        return {
            statusCode: 200,
            body: JSON.stringify(data.results), 
        };
    } catch (error) {
        //Return a 500 Internal Server Error response if there is an error fetching data from Unsplash
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching data from Unsplash' }),
        };
    }
}
    //Return a 404 Not Found response if the request path does not match '/search-images'
    return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Endpoint not found' }),
    };
}
