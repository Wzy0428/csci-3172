//Set he API key to fetch images from Unsplash
const UNSPLASH_API_KEY = 'JsydcTERnOXba2J5C73GM_bugk3fLN0VhnvpgEJjZyE'; 
let uploadedImage = null;

//Event listener to handle image upload
document.getElementById("imageUpload").addEventListener("change", function (e) {
    //Get the uploaded file
    const file = e.target.files[0];

    //Create a FileReader object to read the image file
    if(file){
        const reader = new FileReader();
        //Store the image data URL in the uploadedImage variable
        reader.onload = function (event) {
            uploadedImage = event.target.result;  
            displayUploadedImage(uploadedImage); 
        };
        reader.readAsDataURL(file);  
    }
});

//Function to display the uploaded image    
function displayUploadedImage(imageData) {
    const imagePreview = document.getElementById("memeResult");
    imagePreview.innerHTML = `<img src="${imageData}" alt="Uploaded Image" id="uploadedImage" />`;
}

//Function to generate a meme
function generateMeme() {
    if (!uploadedImage) {
        alert("Please provide an image.");
        return;
    }

    //Get the text input values and selected font
    const bottomText = document.getElementById("textBottom").value;
    const selectedFont = document.getElementById("fontSelect").value;

    //Create a canvas element and draw the uploaded image
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = uploadedImage;

    //Maintain the aspect ratio of the image
    img.onload = function () {
        const aspectRatio = img.width / img.height;
        const canvasWidth = 600;  
        const canvasHeight = canvasWidth / aspectRatio; 

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);  

        //Add text to the meme
        ctx.font = `40px ${selectedFont}`;
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;

        if (bottomText) {
        ctx.fillText(bottomText, canvasWidth / 2, canvasHeight - 30); 
        ctx.strokeText(bottomText, canvasWidth / 2, canvasHeight - 30);
        }

        //Convert the canvas to a data URL and display the meme image
        const memeDataUrl = canvas.toDataURL(); 
        document.getElementById("memeResult").innerHTML = `<img src="${memeDataUrl}" alt="Generated Meme" />`;
    };
}

//Function to search for images on Unsplash
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

//Function to display the search results
function displaySearchResults(images) {
    const imageResults = document.getElementById("imageResults");
    imageResults.innerHTML = "";

    if (images.length === 0) {
        imageResults.innerHTML = "<p>No images found.</p>";
        return;
    }

    //Loop through the images and display them in the imageResults div
    images.forEach(image => {
        //Create an img element for each image
        const imgElement = document.createElement("img");
        //Set the image source to the full resolution image from Unsplash
        imgElement.src = image.urls.full;
        imgElement.alt = image.alt_description;
        imgElement.onclick = function () {
            uploadedImage = image.urls.full;
            displayUploadedImage(uploadedImage);
        };
        //Append the img element to the imageResults div
        imageResults.appendChild(imgElement);
    });
}
