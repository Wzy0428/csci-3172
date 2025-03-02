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

function removeCreature() {
    if(creatureSanctuary.length > 0){
        creatureSanctuary.pop();
        displayCreatures();
    } else {
        alert('There are no creatures to remove');
    }
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

document.getElementById('removeCreatureButton').addEventListener('click', function(event) {
    event.preventDefault();
    removeCreature();
});

document.getElementById('addCreatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addCreature();
});

displayCreatures();

