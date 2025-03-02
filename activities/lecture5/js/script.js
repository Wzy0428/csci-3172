// Magic 8-Ball answers
const Magic8BallSayings = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
];

// Fortune cookie sayings
const fortuneCookieSayings = [
    "You will receive money from an unexpected source.",
    "An exciting opportunity lies ahead of you.",
    "You will always be surrounded by true friends.",
    "Forget injuries; never forget kindnesses.",
    "Respect yourself and others will respect you.",
    "The family that plays together stays together.",
    "Your life will be happy and peaceful.",
    "Move in the direction of your dreams.",
    "Happy News is on its way.",
    "Appreciate. Appreciate. Appreciate.",
];

//Function to randomly select an answer from both arrays
function getAnswer(){
    //Combine both arrays into one
    const combinedSayings = Magic8BallSayings.concat(fortuneCookieSayings);

    //Select a random answer from the combined list
    const randomIndex = Math.floor(Math.random() * combinedSayings.length);

    //Return the randomly selected answer
    return combinedSayings[randomIndex];
}

function askQuestion(){
    //Get the value entered by the user (the question)
    const userQuestion = document.getElementById('userQuestion').value;

    //Check if the user has entered a question
    if(userQuestion === ''){
        //Alert the user if no question is entered
        alert('Please enter a question');
        return;
    }

    //Get a random answer from the combined sayings using the getAnswer function
    const answer = getAnswer();

    //Display the question and answer back to the user
    document.getElementById('answer').textContent = `You asked: ${userQuestion}; `;
    document.getElementById('answer').textContent = 'The response is: ' + answer;

    //Log the question and answer to the console
    console.log(`You asked: ${userQuestion}; `);
    console.log(`Answer: ${answer}`);
}


