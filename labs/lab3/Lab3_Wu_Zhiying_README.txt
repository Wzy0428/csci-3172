# Lab 3

* *Date Created*: 30/01/2025
* *Last Modification Date*: 02/02/2025
* Timberlea URL: https://web.cs.dal.ca/~zhiyingw/csci3172/labs/lab3/
* GitLab URL: https://git.cs.dal.ca/zhiyingw/csci-3172/-/tree/main/labs/lab3?ref_type=heads


## Authors
Zhiying Wu
zh617138@dal.ca

## Sources Used

Electric Guitar description:
https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/mechanism/#:~:text=Just%20what%20is%20an%20electric,to%20electrically%20amplify%20the%20sound.

Ukulele description:
https://www.skillshare.com/en/blog/the-ukulele-a-mini-but-mighty-string-instrument/

Electric Bass description:
https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/play/play005.html#:~:text=What%20is%20an%20electric%20bass,a%20double%20bass%20is%20played.

Trumpet description: 
https://www.merriam-webster.com/dictionary/trumpet

Tuba description: 
https://www.vocabulary.com/dictionary/tuba#:~:text=A%20tuba%20is%20a%20large,of%20all%20the%20brass%20instruments.

Saxophone description: 
https://www.merriam-webster.com/dictionary/saxophone#:~:text=Kids%20Definition-,saxophone,keys%20and%20a%20reed%20mouthpiece

Piano description:
https://www.yamaha.com/en/musical_instrument_guide/piano/#:~:text=The%20piano,instrument%20that%20has%20broad%20appeal.

Organ description: 
https://www.britannica.com/art/organ-musical-instrument

Drum kit description: 
https://www.yamaha.com/en/musical_instrument_guide/drums/mechanism/#:~:text=Though%20there%20is%20no%20original,and%20sits%20on%20the%20floor.

Cymbals description:
https://www.britannica.com/art/cymbal

The style.css and index.html are not referenced from external materials.

### File Name
script.js

*Lines ## - ##*
Line 21-32, 37-50, 156-165, 169-180

```
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
    inventoryList.appendChild(table);

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
        searchResults.appendChild(table);  

```

The code above was created by adapting the code in [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp) as shown below: 

```
const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

```

- <!---How---> The code in [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp) was implemented by using the document.createElement method to create a new row (<tr>) element in the DOM and dynamically populate it with the inventory item data (name, type, price, quantity and description). The new row is then appended to the existing table body.
- <!---Why---> [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp)'s Code was used because it provides a simple example of how to create and append an element in the DOM.
- <!---How---> [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp)'s Code was modified by creating a full table with rows that represent inventory items. Each row (<tr>) is dynamically populated with the properties of an item (name, type, price, quantity, and description) retrieved from the inventory array.


### File Name
script.js

*Lines ## - ##*
Line 35, 168, 194

```
inventory.forEach(item => {
filteredItems.forEach(item => {
inventory.forEach(item => {

```

The code above was created by adapting the code in [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View) as shown below: 

```
array.forEach((element, index, array) => {
// Logic here
});

```

- <!---How---> The code in [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View) was implemented by utilising the forEach loop to iterate through the inventory array and perform actions like displaying the list of items in a table (listItems()), filtering items based on the search query (searchItem()), and applying a discount to all items in the inventory (applyDiscount()).
- <!---Why---> [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View)'s Code was used because it demonstrates how the forEach loop works in a simple and straightforward way. The method allows for iterating through an array and performing operations on each item without manually tracking the index
- <!---How---> [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View)'s Code was modified to iterate over the inventory array and execute specific operations for each item, such as displaying item details, adding new items, removing items, or applying a discount. For example, after applying a discount, the inventory table is re-rendered with updated prices.


### File Name
script.js

*Lines ## - ##*
Line 54-58

```
const name = document.getElementById("itemName").value;
const type = document.getElementById("itemType").value;
const price = parseFloat(document.getElementById("itemPrice").value);
const quantity = parseInt(document.getElementById("itemQuantity").value);
const description = document.getElementById("itemDescription").value;

```

The code above was created by adapting the code in [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View) as shown below: 

```
Object.values(obj) → Returns an array of property values.

```

- <!---How---> The code in [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View) was implemented by utilising JavaScript's Object.values() to extract values from objects efficiently.
- <!---Why---> [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View)'s Code was used because it demonstrates how to extract values from an object/filed.
- <!---How---> [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View)'s Code was modified where the form values are retrieved using getElementById() for each HTML element.


### File Name
script.js

*Lines ## - ##*
Line 61,188

```
if (name === "" || type === "" || isNaN(price) || isNaN(quantity) || description === "") {
if (isNaN(discount) || discount <= 0 || discount > 100) {

```

The code above was created by adapting the code in [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) as shown below: 

```
function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}

```

- <!---How---> The code in [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) was implemented by using the isNaN() function to validate that certain form input fields contain valid numeric values.
- <!---Why---> [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)'s Code was used because isNaN() is a reliable method to check if a value is not a number.
- <!---How---> [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)'s Code was modified by checking whether the price and quantity inputs are not numbers, which helps ensure that the user has entered appropriate values, and checking whether the discount inputs are valid within the range of 0 to 100.


### File Name
script.js

*Lines ## - ##*
Line 62, 67, 70, 85, 91, 99, 113, 190, 200

```
alert("Please fill in all fields correctly.");
alert("Price and quantity must be greater than zero.");
alert(`${name} has been added to the inventory.`);
alert("Please enter the name of the item to be removed.");
alert("Item not found.");
alert(`${name} has been removed from the inventory.`);
alert("Please enter an item name.");
alert("Please enter a valid discount percentage.");
alert(`Discount of ${discount}% applied to all items. Please check the updated prices.`);

```

The code above was created by adapting the code in [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View) as shown below: 

```
const button = document.querySelector("#click-me");
button.addEventListener("click", () => {
alert("Button clicked!");
});

```

- <!---How---> The code in [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View) was implemented by using alert() for user feedback.
- <!---Why---> [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View)'s Code was used because it provides a simple and effective way to notify the user about various actions or errors in the system.
- <!---How---> [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View)'s Code was modified by using alert()  at various points to notify users of different situations, such as when required fields are missing, when an item is successfully added or removed, or when an invalid input is entered.


### File Name
script.js

*Lines ## - ##*
Line 72

```
inventory.push({ name, type, price, quantity, description });

```

The code above was created by adapting the code in [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) as shown below: 

```
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');

```

- <!---How---> The code in [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) was implemented by utilising the push() method to add new items to an array.
- <!---Why---> [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)'s Code was used because because the push() method is a simple way to append new elements to an array.
- <!---How---> [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)'s Code was modified by allowing a user enters information for a new inventory item, the item is added to the inventory array using the push() method, ensuring that the inventory remains updated with the latest data.


### File Name
script.js

*Lines ## - ##*
Line 89

```
const itemIndex = inventory.findIndex(item => item.name.toLowerCase() === name.toLowerCase());

```

The code above was created by adapting the code in [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) as shown below: 

```
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

```

- <!---How---> The code in [mdn web docs][mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) was implemented by using the findIndex() method to locate the index of an element within an array based on a specified condition
- <!---Why---> [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)'s Code was used because this method helps in finding a specific item (using the item name) so that the removal of an item can be performed in the array. 
- <!---How---> [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)'s Code was modified by adjusting the condition to search for an inventory item based on its name rather than just checking numbers.


### File Name
script.js

*Lines ## - ##*
Line 137

```
getItemResult.style.display = 'block'

```

The code above was created by adapting the code in [w3schools](https://www.w3schools.com/Jsref/prop_style_display.asp) as shown below: 

```
document.getElementById("myDIV").style.display = "none";

```

- <!---How---> The code in [w3schools](https://www.w3schools.com/Jsref/prop_style_display.asp) was implemented by manipulate the visibility of the getItemResult element by changing its style.display property.
- <!---Why---> [w3schools](https://www.w3schools.com/Jsref/prop_style_display.asp)'s Code was used because it provides a straightforward approach to controlling the visibility of HTML elements through JavaScript.
- <!---How---> [w3schools](https://www.w3schools.com/Jsref/prop_style_display.asp)'s Code was modified by applying to the getItemResult element, which dynamically updates the UI to display the details of the item or a "not found" message after searching.


### File Name
script.js

*Lines ## - ##*
Line 144-147

```
const filteredItems = inventory.filter(item =>
    item.name.toLowerCase().includes(searchItem) || 
    item.type.toLowerCase().includes(searchItem)   
);

```

The code above was created by adapting the code in [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View) as shown below: 

```
Creates a new array with elements that pass a test.
const numbers = [1, 2, 3, 4];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // Output: [2, 4]

```

- <!---How---> The code in [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View) was implemented by adapting the .filter() method to search through the inventory.
- <!---Why---> [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View)'s Code was used because the .filter() method allows for easy manipulation and filtering of arrays based on conditions.
- <!---How---> [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View)'s Code was modified by applying the filtering logic specifically to the inventory items. The filtering logic was adapted to an array of inventory items, checking if the name or type properties contain the search string provided by the user.


### File Name
script.js

*Lines ## - ##*
Line 205-206

```
const totalValue = inventory.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    document.getElementById("totalValue").innerHTML = `Total Inventory Value: $${totalValue}`;
}

```

The code above was created by adapting the code in [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View) as shown below: 

```
Reduces an array to a single value.
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10

```

- <!---How---> The code in [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View) was implemented by using the reduce() method to accumulate the total inventory value.
- <!---Why---> [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View)'s Code was used because the reduce() function is a concise way to accumulate values from an array and return a single result, in this case, the total value of all inventory items.
- <!---How---> [Lab 3: Control Flow, Data Structures and Objects](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4767229/View)'s Code was modified by adapting it to a specific use case where it calculates the total value of the inventory based on the price and quantity of each item.


## Artificial Intelligence Tools Used

* [chatgpt](https://chatgpt.com/) - The AI Tool used

### Prompt Used on *chatgpt*

```
how to confirm if a item is removed in Js, a pop up message to double check?

```

The code prompt above was used [chatgpt](https://chatgpt.com/) to generate the code shown below: 

```
function removeItem(itemId) {
    // Ask the user for confirmation
    const isConfirmed = confirm("Are you sure you want to remove this item?");

    // If the user confirms, proceed with removing the item
    if (isConfirmed) {
        // Your code to remove the item, e.g., removing from an array or DOM
        console.log(`Item ${itemId} removed.`);
        
        // Assuming you're removing from an array:
        let itemList = ["item1", "item2", "item3"];
        itemList = itemList.filter(item => item !== itemId);
        console.log(itemList);  // Updated list
    } else {
        console.log("Item removal cancelled.");
    }
}

// Example usage:
removeItem("item2");

```

#### File Name
script.js

*Lines ## - ##*
Line 95-101

```
if (confirmRemoval) {
            inventory.splice(itemIndex, 1);
            //Show an alert message
            alert(`${name} has been removed from the inventory.`);
            //Update the display
            listItems();
        }
```

- <!---How---> The code in [chatgpt](https://chatgpt.com/) was implemented by using the confirm() method in JavaScript prompts the user with a confirmation dialog (with "OK" and "Cancel" buttons) before proceeding with the removal of an item
- <!---Why---> [chatgpt](https://chatgpt.com/)'s Code was used because it effectively handles the task of asking the user for confirmation before proceeding with an action. The confirmation pop-up helps prevent accidental deletions or unwanted actions.
- <!---How---> [chatgpt](https://chatgpt.com/)'s Code was modified by adjusting to remove an item from the inventory array, updating the list of items displayed on the page after removal, and showing an alert message with the name of the item is shown to confirm the deletion.


## Acknowledgments

A special thanks to my professor Gabriella Mosquera, W3schools and mdn web docs for their examples and inspiration for the implementation and development of the script.