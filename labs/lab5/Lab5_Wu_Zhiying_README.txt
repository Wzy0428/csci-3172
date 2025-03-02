# Lab 5

* *Date Created*: 28/02/2025
* *Last Modification Date*: 01/03/2025

* GitLab URL: https://git.cs.dal.ca/zhiyingw/csci-3172/-/tree/main/labs/lab3?ref_type=heads


## Authors
Zhiying Wu
zh617138@dal.ca

## Sources Used

Unsplash image generation, API, and documentation: 
https://unsplash.com/

Google Fonts
https://fonts.google.com

### File Name
Package.json

*Lines ## - ##*
Line 1-25

```
{
  "name": "memegenerator",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "start": "node netlify/functions/api.js"
  },
  "dependencies": {
    "@netlify/functions": "^3.0.0",
    "axios": "^1.8.1",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "fetch": "^1.1.0",
    "node-fetch": "^3.3.2",
    "serverless-http": "^3.2.0",
    "sharp": "^0.33.5",
    "unsplash-js": "^7.0.19"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "jsdom": "^26.0.0",
    "supertest": "^7.0.0"
  }
}

```

The code above was created by adapting the code in [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View) as shown below: 

```
npm init -y

{
  "name": "memegenerator",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

"scripts": {
 "test": "jest",
 "start": "node netlify/functions/api.js"
}

```

- <!---How---> The code in [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View) was implemented by using the code provided to generate the default package.json file. The npm init -y command was used to create the initial package.json file, which includes default fields like name, version, main, scripts, etc.
- <!---Why---> [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View)'s Code was used because it provides the instruction and templates on how to generate the package.json file and modify it to fit the project structure.
- <!---How---> [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View)'s Code was modified by changing the default test script to run jest for testing, adding the "start" script to run the api.js file located in the netlify/functions/ directory, including additional dependencies such as axios, dotenv, express needed for the meme generator project, and adding devDependencies like jest, jsdom, and supertest for testing the project.


### File Name
netlify.toml

*Lines ## - ##*
Line 1-9

```
[functions]
  external_node_modules = ["express"]
  node_bundler = "esbuild"

[[redirects]]
  force = true
  from = "/api/*"
  status = 200
  to = "/.netlify/functions/api/:splat"

```

The code above was created by adapting the code in [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View) as shown below: 

```
[functions]
 external_node_modules = ["express"]
 node_bundler = "esbuild"
[[redirects]]
 force = true
 from = "/api/*"
 status = 200
 to = "/.netlify/functions/api/:splat"

```

- <!---How---> The code in [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View) was implemented by following the template for configuring the netlify.toml file. This file is used for setting up the Netlify functions and redirect rules. 
- <!---Why---> [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View)'s Code was used because it provides the correct configuration for deploying serverless functions using Node.js on Netlify. This setup ensures that external Node.js modules like express are properly included and that API routes are redirected correctly to the serverless function.


### File Name
api.js

*Lines ## - ##*
Line 1-50

```
import fetch from 'node-fetch'; 
import dotenv from 'dotenv';
dotenv.config();

export async function handler(event, context) {
    const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

    if (event.path.includes('/search-images')) {
    const query = new URLSearchParams(event.queryStringParameters).get('query');
    
    if (!query) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Query parameter is missing' }),
        };
    }

    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_API_KEY}&per_page=5`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data.results), 
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching data from Unsplash' }),
        };
    }
}
    return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Endpoint not found' }),
    };
}

```

The code above was created by adapting the code in [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View) as shown below: 

```
import express from "express";
import serverless from "serverless-http";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
const api = express();
const router = express.Router();
const API_KEY = process.env.WEATHER_API_KEY; // Add your API key in .e
nv
router.get("/weather", async (req, res) => {
const city = req.query.city;
if (!city) return res.status(400).json({ error: "City is required"
});
try {
const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}
&appid=${API_KEY}&units=metric`
 );
const data = await response.json();
if (data.cod !== 200) return res.status(404).json({ error: "Ci
ty not found" });
 res.json({
 city: data.name,
 temperature: data.main.temp,
 weather: data.weather[0].description,
 });
 } catch (error) {
 res.status(500).json({ error: "Server error" });
 }
});
api.use("/api/", router);
export const handler = serverless(api);

```

- <!---How---> The code in [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View) was implemented by following the template for creating a serverless function in Node.js, using express and serverless-http to handle API requests.The modified code is adapted to search for images using the Unsplash API.
- <!---Why---> [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View)'s Code was used because it provides a simple method for handling API routes using express within a serverless function.
- <!---How---> [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View)'s Code was modified by replacing the weather API code with the Unsplash search functionality, modifying the GET request to search for images instead of fetching weather data, using query as a URL parameter. Ensuring that proper error handling and response status codes (such as 400 for missing parameters and 500 for server issues) are returned, and removing express and using a direct handler function to work within the Netlify function environment, while still using dotenv for managing environment variables securely.


### File Name
api.tests.js && frontend.tests.js

*Lines ## - ##*
Line 1-10 && Line 1-29

```
import request from "supertest";
import { handler } from "../netlify/functions/api.js";

describe("Meme Generator API", () => {
    it("should return a list of images for a valid search query", async () => {
        const res = await request(handler).get("/api/search-images?query=meme");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveLength(5);
    });
});

```

The code above was created by adapting the code in [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View) as shown below: 

```
import request from "supertest";
import { handler } from "../netlify/functions/api.js";
describe("Weather API", () => {
 it("should return weather data for a valid city", async () => {
const res = await request(handler).get("/api/weather?city=London");
 expect(res.statusCode).toBe(200);
 expect(res.body).toHaveProperty("city");
 });
 it("should return an error for missing city", async () => {
const res = await request(handler).get("/api/weather");
 expect(res.statusCode).toBe(400);
 expect(res.body.error).toBe("City is required");
 });
});

```

```
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "../frontend/index.html"), "utf8");

describe("Meme Generator UI", () => {
    let dom, document;

    beforeEach(() => {
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    it("should have an input field for bottom text", () => {
        const input = document.querySelector("#textBottom");
        expect(input).not.toBeNull();
    });

    it("should have a file input for image", () => {
        const input = document.querySelector("#imageUpload");
        expect(input).not.toBeNull();
    });

    it("should have a button to generate meme", () => {
        const button = document.querySelector("button");
        expect(button.textContent).toBe("Generate Meme");
    });
});

```

The code above was created by adapting the code in [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View) as shown below: 


```
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
const html = fs.readFileSync(path.resolve(__dirname, "../frontend/index.htm
l"), "utf8");
describe("Weather App UI", () => {
let dom, document;
 beforeEach(() => {
 dom = new JSDOM(html);
document = dom.window.document;
 });
 it("should have an input field", () => {
const input = document.querySelector("#city");
 expect(input).not.toBeNull();
 });
 it("should have a button", () => {
const button = document.querySelector("button");
 expect(button.textContent).toBe("Get Weather");
 });
});

```


- <!---How---> The code in [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View) was implemented by using testing frameworks like supertest and JSDOM to test the backend API and frontend UI functionality. 
- <!---Why---> [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View)'s Code was used because because it demonstrates how to set up unit tests for both API endpoints and frontend interactions, ensuring that both the backend and frontend behave as expected.
- <!---How---> [Lab5: Project Setup Guide PDF document](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4794291/View)'s Code was modified by adapting the weather API test to instead test the meme generator's image search functionality. The test ensures that when a valid query is made to the /api/search-images endpoint, a response containing 5 images is returned with a 200 OK status code. Modifying the frontend test to check the presence of a text input field for the bottom text, an image file input, and a "Generate Meme" button, which are specific to the meme generator app.


## Artificial Intelligence Tools Used
* [ChatGPT](https://chatgpt.com/) - The AI Tool used

### Prompt Used on *NAME OF AI TOOL*

```
Write a JavaScript code for a meme generator from unsplash

```

The code prompt above was used [ChatGPT](https://chatgpt.com/) to generate the code shown below: 

```
const generateBtn = document.getElementById('generate-btn');
const memeCanvas = document.getElementById('meme-canvas');
const ctx = memeCanvas.getContext('2d');
const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');

const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash Access Key

async function getRandomImage() {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`);
    const data = await response.json();
    return data[0].urls.regular; // Returns the regular image URL
}

function drawMeme(imageUrl, topText, bottomText) {
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, memeCanvas.width, memeCanvas.height);

        ctx.font = '30px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        ctx.fillText(topText, memeCanvas.width / 2, 50);
        ctx.strokeText(topText, memeCanvas.width / 2, 50);

        ctx.fillText(bottomText, memeCanvas.width / 2, memeCanvas.height - 30);
        ctx.strokeText(bottomText, memeCanvas.width / 2, memeCanvas.height - 30);
    };
    img.src = imageUrl;
}

generateBtn.addEventListener('click', async () => {
    const topText = topTextInput.value || 'Top Text';
    const bottomText = bottomTextInput.value || 'Bottom Text';

    const imageUrl = await getRandomImage();

    drawMeme(imageUrl, topText, bottomText);
});

```

#### File Name
script.js

```
const UNSPLASH_API_KEY = 'JsydcTERnOXba2J5C73GM_bugk3fLN0VhnvpgEJjZyE'; 
let uploadedImage = null;

document.getElementById("imageUpload").addEventListener("change", function (e) {
    const file = e.target.files[0];

    if(file){
        const reader = new FileReader();
        reader.onload = function (event) {
            uploadedImage = event.target.result;  
            displayUploadedImage(uploadedImage); 
        };
        reader.readAsDataURL(file);  
    }
});

function displayUploadedImage(imageData) {
    const imagePreview = document.getElementById("memeResult");
    imagePreview.innerHTML = `<img src="${imageData}" alt="Uploaded Image" id="uploadedImage" />`;
}

function generateMeme() {
    if (!uploadedImage) {
        alert("Please provide an image.");
        return;
    }

    const bottomText = document.getElementById("textBottom").value;
    const selectedFont = document.getElementById("fontSelect").value;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = uploadedImage;

    img.onload = function () {
        const aspectRatio = img.width / img.height;
        const canvasWidth = 600;  
        const canvasHeight = canvasWidth / aspectRatio; 

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);  

        ctx.font = `40px ${selectedFont}`;
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;

        if (bottomText) {
        ctx.fillText(bottomText, canvasWidth / 2, canvasHeight - 30); 
        ctx.strokeText(bottomText, canvasWidth / 2, canvasHeight - 30);
        }

        const memeDataUrl = canvas.toDataURL(); 
        document.getElementById("memeResult").innerHTML = `<img src="${memeDataUrl}" alt="Generated Meme" />`;
    };
}

function searchImages() {
    const query = document.getElementById("searchQuery").value;
    if (!query) {
        alert("Please enter a search query.");
        return;
    }

    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data.results);
        })
        .catch(error => {
            console.error('Error fetching Unsplash images:', error);
            alert("Failed to fetch images.");
        });
}

function displaySearchResults(images) {
    const imageResults = document.getElementById("imageResults");
    imageResults.innerHTML = "";

    if (images.length === 0) {
        imageResults.innerHTML = "<p>No images found.</p>";
        return;
    }

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.urls.full;
        imgElement.alt = image.alt_description;
        imgElement.onclick = function () {
            uploadedImage = image.urls.full;
            displayUploadedImage(uploadedImage);
        };
        imageResults.appendChild(imgElement);
    });
}

```

- <!---How---> The code in [ChatGPT](https://chatgpt.com/) was implemented by integrating the Unsplash API to fetch random images and overlay text on them, forming a meme generator.
- <!---Why---> [ChatGPT](https://chatgpt.com/)'s Code was used because it provides a functional meme generator with integration to the Unsplash API for dynamic image fetching and custom text overlays.
- <!---How---> [ChatGPT](https://chatgpt.com/)'s Code was modified by by adding the ability to upload images manually, and create memes from those uploaded images, as well as implement a search functionality for users to find and select images from Unsplash.


## Acknowledgments

A special thanks to my professor Gabriella Mosquera and my course TA Hardison Wang, Artun Selcuk and Mehrad Hajati for their examples and inspiration for the implementation and development of the script.