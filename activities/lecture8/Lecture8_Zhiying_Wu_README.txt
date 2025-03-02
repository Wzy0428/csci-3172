# Activity 7

* *Date Created*: 30/01/2025
* *Last Modification Date*: 30/01/2025
* Timberlea URL: https://web.cs.dal.ca/~zhiyingw/csci3172/activities/lecture8/
* GitLab URL: https://git.cs.dal.ca/zhiyingw/csci-3172.git

## Authors
Zhiying Wu
zh617138@dal.ca

## Sources Used

### File Name
Script.js

*Lines ## - ##*
Line 1-35

Copy and paste your code on lines mentioned:

```
// Get the current time and hour
let date = new Date();
let hours = date.getHours();

// Create a variable to store your greeting message 
let welcomeMessage;


// Display 'Good Morning' if it is earlier than 12PM
if(hours < 12){
	welcomeMessage = "Good Morning!";
} else if (hours < 17){
	welcomeMessage = "Good Afternoon";
} else if (hours < 19){
	welcomeMessage = "Good Evening!";
} else {
	welcomeMessage = "Good Night";
}

document.getElementById('greeting').innerHTML = 
welcomeMessage + ', <strong> this is a lecture activity </strong>';

let a, b;

function getNumbers(){
	a = Number(document.getElementById('number1').value);
	b = Number(document.getElementById('number2').value);
}

function addition(){
	getNumbers();
	result = a + b;

	alert('The sum of ' + a +' and' + b + ' equals to ' + result);
}

```

The code above was created by adapting the code in [NAME](link) as shown below: 
L8 Example file by Gabriella Mosquera 
https://dal.brightspace.com/d2l/le/content/361473/Home

Copy and paste the snippet of code you are referencing:

```
// Get the current time and hour
let date = new Date();
let hours = date.getHours();

// Create a variable to store your greeting message 
let welcomeMessage;


// Display 'Good Morning' if it is earlier than 12PM
if(hours < 12){
	welcomeMessage = "Good Morning!";
} else if (hours < 17){
	welcomeMessage = "Good Afternoon";
} else if (hours < 19){
	welcomeMessage = "Good Evening!";
} else {
	welcomeMessage = "Good Night";
}

document.getElementById('greeting').innerHTML = 
welcomeMessage + ', <strong> This is a lecture activity </strong>';

let a, b;

function getNumbers(){
	a = Number(document.getElementById('number1').value);
	b = Number(document.getElementById('number2').value);
}

function addition(){
	getNumbers();
	result = a + b;

	alert('The sum of ' + a +' and' + b + ' equals to ' + result);
}

```

- <!---How---> The code in [L8 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home) was implemented by using the examples, functions and methods demonstrated during the week 4 lecture. 
- <!---Why---> [L8 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was used because I want to use the the files(index.html, style.css, script.js) as a reference and extend on these files to add more features.
- <!---How---> [L8 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was modified by adding 3 more buttons - Subtract, Multiply, Divide - to the index.html and script.js to extend the calculator's functionalities.


### File Name
index.html

*Lines ## - ##*
Line 45-47

Copy and paste your code on lines mentioned:

```
<input type="submit" name="submit" value="subtract" onclick="subtration()">
<input type="submit" name="submit" value="Multiply" onclick="multiplication()">
<input type="submit" name="submit" value="Divide" onclick="division()">
```

The code above was created by adapting the code in [NAME](link) as shown below: 
L8 Example file by Gabriella Mosquera 
https://dal.brightspace.com/d2l/le/content/361473/Home

Copy and paste the snippet of code you are referencing:

```
<input type="submit" name="submit" value="Add" onclick="addition()">

```

- <!---How---> The code in [L8 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home) was implemented by using the examples, functions and methods demonstrated during the week 4 lecture. 
- <!---Why---> [L8 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was used because I want to use the the files(index.html, style.css, script.js) as a reference and extend on these files to add more features.
- <!---How---> [L8 Example file by Gabriella Mosquera] 
(https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was modified by adding three more buttons to the HTML page.

## Acknowledgments
A special thanks to Gabriella Mosquera her examples and inspiration for the implementation and development of the script.