# Activity 7

* *Date Created*: 28/01/2025
* *Last Modification Date*: 28/01/2025
* Timberlea URL: https://web.cs.dal.ca/~zhiyingw/csci3172/activities/lecture7/
* GitLab URL: https://git.cs.dal.ca/zhiyingw/csci-3172.git

## Authors
Zhiying Wu
zh617138@dal.ca

## Sources Used

### File Name
Script.js

*Lines ## - ##*
Line 1-32, 43-54, 61-66

Copy and paste your code on lines mentioned:

```
// Selecting an element with getElementById
const myDiv = document.getElementById('myDiv');
console.log(myDiv);

// Creating a new element with the createElement() method
const newParagraph = document.createElement('p'); // creates <p></p>
newParagraph.textContent = 'New Creature will be added here:'; // adds this text between <p></p> tags

// Appending the new element to the page, in this case we're appending newParagram to myDiv
myDiv.appendChild(newParagraph); 

const creatureSanctuary = []; 


function addCreature() {
    const creatureName = document.getElementById('creatureName').value;
    const creatureType = document.getElementById('creatureType').value;
    const creatureHabitat = document.getElementById('creatureHabitat').value;
    const creatureDescription = document.getElementById('creatureDescription').value;

    const newCreature = {
        name: creatureName,
        type: creatureType,
        habitat: creatureHabitat,
        description: creatureDescription
    };

    creatureSanctuary.push(newCreature); 

    document.getElementById('addCreatureForm').reset();
    displayCreatures();
}

function displayCreatures() {
    const creaturesDiv = document.getElementById('creatureSanctuary');
    creaturesDiv.innerHTML = ''; 
	
    const list = document.createElement('ul');
    for (const creature of creatureSanctuary) {
        const listItem = document.createElement('li');
        listItem.textContent = `${creature.name} - ${creature.type} (Habitat: ${creature.habitat}) - ${creature.description}`;
        list.appendChild(listItem);
    }
    creaturesDiv.appendChild(list);
}

document.getElementById('addCreatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addCreature();
});

displayCreatures();

```

The code above was created by adapting the code in [NAME](link) as shown below: 
L7 Example file by Gabriella Mosquera 
https://dal.brightspace.com/d2l/le/content/361473/Home

Copy and paste the snippet of code you are referencing:

```
// Selecting an element with getElementById
const myDiv = document.getElementById('myDiv');
console.log(myDiv);

// Creating a new element with the createElement() method
const newParagraph = document.createElement('p'); // creates <p></p>
newParagraph.textContent = 'This is a new paragraph.'; // adds this text between <p></p> tags

// Appending the new element to the page, in this case we're appending newParagrah to myDiv
myDiv.appendChild(newParagraph); 

const creatureSanctuary = []; 


function addCreature() {
    const creatureName = document.getElementById('creatureName').value;
    const creatureType = document.getElementById('creatureType').value;
    const creatureHabitat = document.getElementById('creatureHabitat').value;

    const newCreature = {
        name: creatureName,
        type: creatureType,
        habitat: creatureHabitat,
    };

    creatureSanctuary.push(newCreature); 

    document.getElementById('addCreatureForm').reset();
    displayCreatures();
}

function displayCreatures() {
    const creaturesDiv = document.getElementById('creatureSanctuary');
    creaturesDiv.innerHTML = ''; 
	
    const list = document.createElement('ul');
    for (const creature of creatureSanctuary) {
        const listItem = document.createElement('li');
        listItem.textContent = `${creature.name} - ${creature.type} (Habitat: ${creature.habitat})`;
        list.appendChild(listItem);
    }
    creaturesDiv.appendChild(list);
}

document.getElementById('addCreatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addCreature();
});

displayCreatures();

```

- <!---How---> The code in [L7 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home) was implemented by using the examples, functions and methods demonstrated during the week 4 lecture. 
- <!---Why---> [L7 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was used because I want to use the the files(index.html, style.css, script.js) as a reference and extend on these files to add more features.
- <!---How---> [L7 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was modified by adding a "Remove Creature" feature, and a form to allow the users to add descriptions about each creature.


### File Name
index.html

*Lines ## - ##*
Line 29-31, 33

Copy and paste your code on lines mentioned:

```
<div class="form-group">
   <label for="creatureDescription">Description:</label>
   <input id="creatureDescription" required class="form-control"></input>
<button type="delete" id = removeCreatureButton class="btn btn-danger">Remove Creature</button>

```

The code above was created by adapting the code in [NAME](link) as shown below: 
L7 Example file by Gabriella Mosquera 
https://dal.brightspace.com/d2l/le/content/361473/Home

Copy and paste the snippet of code you are referencing:

```
<form id="addCreatureForm">
   <div class="form-group">
   <label for="creatureName">Creature Name:</label>
   <input type="text" id="creatureName" required class="form-control">
</div>
<div class="form-group">
   <label for="creatureType">Creature Type:</label>
   <input type="text" id="creatureType" required class="form-control">
</div>
<div class="form-group">
   <label for="creatureHabitat">Habitat:</label>
   <input type="text" id="creatureHabitat" required class="form-control">
</div>
<button type="submit" class="btn btn-primary">Add Creature</button>
</form>

```

- <!---How---> The code in [L7 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home) was implemented by using the examples, functions and methods demonstrated during the week 4 lecture. 
- <!---Why---> [L7 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was used because I want to use the the files(index.html, style.css, script.js) as a reference and extend on these files to add more features.
- <!---How---> [L7 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was modified by adding a description form for the users to enter creature descriptions.

## Acknowledgments
A special thanks to Gabriella Mosquera her examples and inspiration for the implementation and development of the script.