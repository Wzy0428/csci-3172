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

function subtration(){
	getNumbers();
	result = a - b;

	alert('The sum of ' + a +' minus ' + b + ' equals to ' + result);
}

function multiplication(){
	getNumbers();
	result = a * b;

	alert('The sum of ' + a +' times ' + b + ' equals to ' + result);
}

function division(){
getNumbers();
	result = a / b;

	alert('The sum of ' + a +' divide ' + b + ' equals to ' + result);
}



