//Inventory items stored in an array of objects
let inventory = [
    { name: "Electric Guitar", type: "String instruments (plucked)", price: 300, quantity: 500, description: "An electric guitar with a wooden body and steel strings." },
    { name: "Ukulele", type: "String instruments (plucked)", price: 150, quantity: 500, description: "A small chordophone with a hollow body and nylon strings." },
    { name: "Electric Bass", type: "String instruments (plucked)", price: 600, quantity: 500, description: "A bass guitar designed to provide deep, rich tones." },
    { name: "Trumpet", type: "Wind instruments (Brass)", price: 800, quantity: 500, description: "A brass wind instrument with a flared bell and three valves." },
    { name: "Tuba", type: "Wind instruments (Brass)", price: 800, quantity: 500, description: "A large brass instrument that produces low-pitched notes." },
    { name: "Saxophone", type: "Wind instruments (Brass)", price: 800, quantity: 500, description: "A curved metal tube with finger keys and a reed mouthpiece." },
    { name: "Piano", type: "Keyboard instruments", price: 2800, quantity: 500, description: "A keyboard instrument with a large range and ability to play chords." },
    { name: "Organ", type: "Keyboard instruments", price: 7800, quantity: 500, description: "A keyboard instrument that uses air to produce sounds through pipes." },
    { name: "Drum kit", type: "Percussion instruments", price: 12800, quantity: 500, description: "A five-piece drum kit including a bass drum, snare, and toms." },
    { name: "Cymbals", type: "Percussion instruments", price: 800, quantity: 500, description: "A percussion instrument consisting of circular metal plates." }
];

//Function to display the list of items in the inventory
function listItems() {
    const inventoryList = document.getElementById("listItems");
    //Clear the previous list, otherwise items will be displayed multiple times
    inventoryList.innerHTML = ""; 
    //Create a table element
    const table = document.createElement('table');
    //Create the table header
    const headerRow = document.createElement('tr');
    //Add the table headers
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Type</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Description</th>
    `;
    table.appendChild(headerRow);

    //Loop through the inventory array and display each item in a row of the table
    inventory.forEach(item => {
        //Create a row element
        const row = document.createElement("tr");
        //Add the item data to the row
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.description}</td>
        `;
        table.appendChild(row);
    });
    //Append the table to the inventory list div
    inventoryList.appendChild(table);
}

//Function to add a new item to the inventory
function addItem() {
    const name = document.getElementById("itemName").value;
    const type = document.getElementById("itemType").value;
    const price = parseFloat(document.getElementById("itemPrice").value);
    const quantity = parseInt(document.getElementById("itemQuantity").value);
    const description = document.getElementById("itemDescription").value;

    //isNaN() function checks if the value is not a number  
    if (name === "" || type === "" || isNaN(price) || isNaN(quantity) || description === "") {
        alert("Please fill in all fields correctly.");
        return;
    }

    if (price <= 0 || quantity <= 0) {
        alert("Price and quantity must be greater than zero.");
        return;
    } else {
        alert(`${name} has been added to the inventory.`);
        //Add the new item to the inventory array
        inventory.push({ name, type, price, quantity, description });
        //Update the display
        listItems();
        //clear the input fields
        clearForm();
    }
}

//Function to remove an item from the inventory
function removeItem() {
    const name = document.getElementById("removeItem").value;
    //Check if the name field is empty
    if (name === "") {
        alert("Please enter the name of the item to be removed.");
        return;
    }
    //Find the index of the item in the inventory array in lowercase
    const itemIndex = inventory.findIndex(item => item.name.toLowerCase() === name.toLowerCase());
    if (itemIndex === -1) {
        alert("Item not found.");
        return;
    }else {
        //Confirm the removal of the item
        const confirmRemoval = confirm(`Are you sure you want to remove ${name} from the inventory?`);
        if (confirmRemoval) {
            inventory.splice(itemIndex, 1);
            //Show an alert message
            alert(`${name} has been removed from the inventory.`);
            //Update the display
            listItems();
        }
    }
    clearForm("remove"); 
}

//Function to get the details of a item object
function getItem() {
    const itemName = document.getElementById("getItem").value;
    const getItemResult = document.getElementById("getItemResult"); 

    if (itemName === "") {
        alert("Please enter an item name.");
        return;
    }

    //Search for the item in the inventory array
    const item = inventory.find(item => item.name.toLowerCase() === itemName.toLowerCase());

    //If item is found, display its details
    if (item) {
        const itemDetails = `
            <h3>Item Details:</h3>
            <ul>
                <li><strong>Name:</strong> ${item.name}</li>
                <li><strong>Type:</strong> ${item.type}</li>
                <li><strong>Price:</strong> $${item.price}</li>
                <li><strong>Quantity:</strong> ${item.quantity}</li>
                <li><strong>Description:</strong> ${item.description}</li>
            </ul>
        `;
        getItemResult.innerHTML = itemDetails; 
    } else {
        //If item not found
        getItemResult.innerHTML = `<p>Item "${itemName}" is not found in inventory.</p>`;
    }
    getItemResult.style.display = 'block'
}

//Function to search for an item in the inventory by name or type
function searchItem() {
    const searchItem = document.getElementById("searchItem").value.toLowerCase();
    //Filter the inventory array based on the search query
    const filteredItems = inventory.filter(item =>
        item.name.toLowerCase().includes(searchItem) || 
        item.type.toLowerCase().includes(searchItem)   
    );

    const searchResults = document.getElementById("searchResults");  
    searchResults.innerHTML = '';  

    if (searchItem === "") {
        searchResults.innerHTML = `<p>No results found.</p>`;
    } else {
        const table = document.createElement('table'); 
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
        `;
        table.appendChild(headerRow);

        //Loop through the filtered items and display them in a table
        filteredItems.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.type}</td>
                <td>$${item.price}</td>
                <td>${item.quantity}</td>
                <td>${item.description}</td>
            `;
            table.appendChild(row);
        });
        //Append the table to the search results div
        searchResults.appendChild(table);  
    }
    searchResults.classList.add("visible");
}

//Function to apply a discount to all items in the inventory
function applyDiscount() {
    const discount = document.getElementById("discount").value;

    if (isNaN(discount) || discount <= 0 || discount > 100) {
        alert("Please enter a valid discount percentage.");
        return;
    }

    inventory.forEach(item => {
        item.price = item.price - (item.price * (discount / 100));
    });

    //Update the display
    listItems();
    alert(`Discount of ${discount}% applied to all items. Please check the updated prices.`);
}


//Function to calculate the total value of the inventory
function calculateTotalValue() {
    const totalValue = inventory.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    document.getElementById("totalValue").innerHTML = `Total Inventory Value: $${totalValue}`;
}

//Function to clear the specific input fields for the remove item form
function clearForm(target) {
    if (target === "remove") {
        //Clear only the removeItem input field when called from the removeItem function
        document.getElementById("removeItem").value = '';
    } else {
        //Clear the add new item input fields after adding an item
        document.getElementById("itemName").value = '';
        document.getElementById("itemType").value = '';
        document.getElementById("itemPrice").value = '';
        document.getElementById("itemQuantity").value = '';
        document.getElementById("itemDescription").value = '';
    }
}


