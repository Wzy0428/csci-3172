# Activity 5

* *Date Created*: 22/01/2025
* *Last Modification Date*: 22/01/2025
* Timberlea URL: https://web.cs.dal.ca/~zhiyingw/csci3172/activities/lecture5/
* GitLab URL: https://git.cs.dal.ca/zhiyingw/csci-3172.git

## Authors
Zhiying Wu
zh617138@dal.ca

## Sources Used

### File Name
Script.js

*Lines ## - ##*
Line 32

Copy and paste your code on lines mentioned:

```
const combinedSayings = Magic8BallSayings.concat(fortuneCookieSayings);

```

The code above was created by adapting the code in [NAME](link) as shown below: 
W3schools 
https://www.w3schools.com/jsref/jsref_concat_array.asp

Copy and paste the snippet of code you are referencing:

```
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

```

- <!---How---> The code in [W3schools](https://www.w3schools.com/jsref/jsref_concat_array.asp) was implemented by the getAnswer function in the Script.js file.
- <!---Why---> [W3schools](https://www.w3schools.com/jsref/jsref_concat_array.asp)'s Code was used because I want to join two arrays together so that an answer can be randomly selected ebetween the two lists that are joined together.
- <!---How---> [W3schools](https://www.w3schools.com/jsref/jsref_concat_array.asp)'s Code was modified by adapting the concat() method to join two arrays.


### File Name
Script.js

*Lines ## - ##*
Line 1-13

```
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
```

The code above was created by adapting the sentences in [Magic 8-Ball](https://magic-8ball.com/magic-8-ball-answers/) as shown below: 

```
Affirmative Answers
It is certain
It is decidedly so
Without a doubt
Yes - definitely
You may rely on it
As I see it, yes
Most likely
Outlook good
Yes
Signs point to yes

```

- <!---How---> The code in [Magic 8-Ball](https://magic-8ball.com/magic-8-ball-answers/) was implemented by the Magic8BallSayings array in the script.js.
- <!---Why---> [NAME](link)'s Code was used because it was an example provided to complete this activity on BrightSpace.
- <!---How---> Magic8BallSayings's Code was modified by extracting the affirmative answers. 


### File Name
Script.js

*Lines ## - ##*
Line 16-26

```
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

```

The code above was created by adapting the sentences in [Best Ever Cookie Collection](https://www.best-ever-cookie-collection.com/fortune-cookie-sayings.html) as shown below: 

```
Fortune Cookie Sayings
General
Do not be afraid of competition.
An exciting opportunity lies ahead of you.
You love peace.
Get your mind set…confidence will lead you on.
You will always be surrounded by true friends.
Sell your ideas-they have exceptional merit.
You should be able to undertake and complete anything.
You are kind and friendly.
You are wise beyond your years.
Your ability to juggle many tasks will take you far.
A routine task will turn into an enchanting adventure.
Beware of all enterprises that require new clothes.
Be true to your work, your word, and your friend.
Goodness is the only investment that never fails.
A journey of a thousand miles begins with a single step.
Forget injuries; never forget kindnesses.
Respect yourself and others will respect you.
A man cannot be comfortable without his own approval.
Always do right. This will gratify some people and astonish the rest.
It is easier to stay out than to get out.
Sing everyday and chase the mean blues away.
You will receive money from an unexpected source.
Attitude is a little thing that makes a big difference.
Plan for many pleasures ahead.
Experience is the best teacher.
You will be happy with your spouse.
Expect the unexpected.
Stay healthy. Walk a mile.
The family that plays together stays together.
Eat chocolate to have a sweeter life.
Once you make a decision the universe conspires to make it happen.
Make yourself necessary to someone.
The only way to have a friend is to be one.
Nothing great was ever achieved without enthusiasm.
Dance as if no one is watching.
Live this day as if it were your last.
Your life will be happy and peaceful.
Reach for joy and all else will follow.
Move in the direction of your dreams.
Bloom where you are planted.
Appreciate. Appreciate. Appreciate.
Happy News is on its way.

```

- <!---How---> The code in [Best Ever Cookie Collection](https://www.best-ever-cookie-collection.com/fortune-cookie-sayings.html) was implemented by the fortuneCookieSayings array in the script.js file.
- <!---Why---> Best Ever Cookie Collection's code was used because it was an example provided to complete this activity on BrightSpace.
- <!---How---> Best Ever Cookie Collection's code was modified by extracting the General Fortune Cookie Sayings. 


### File Name
Script.js and index.html

*Lines ## - ##*
Line 35-61 and line 1-19

Copy and paste your code on lines mentioned 

```
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

```

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<title>Magic 8-Ball and Fortune Cookies</title>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<link rel='stylesheet' type='text/css' media='screen' href='css/style.css'>
	
</head>
<body>
	<section>
		<h1>Ask the Magic 8-Ball or Get a Fortune Cookie!</h1>
		<input type="text" id="userQuestion" placeholder="Enter your question">
			<button onclick="askQuestion()">Ask</button>
		<p id="answer"></p>
	</section>
	<script src='js/script.js'></script>
</body>
</html>

```

The code above was created by adapting the code in [NAME](link) as shown below: 
Gabriella Mosquera 
https://dal.brightspace.com/d2l/le/content/361473/Home

- <!---How--->
The code in [Gabriella Mosquera]
[https://dal.brightspace.com/d2l/le/content/361473/Home] was implemented by the author Zhiying Wu in the javaScript and index.html file.
- <!---Why---> 
[Gabriella Mosquera]
[https://dal.brightspace.com/d2l/le/content/361473/Home]'s Code was used because the prof demonstrates the code during the lecture as a reference.
- <!---How---> 
[Gabriella Mosquera]
[https://dal.brightspace.com/d2l/le/content/361473/Home]'s code was modified by adding the return statement and add fortune cookie sayings list to the magic eight ball example. 


## Acknowledgments
A special thanks to Gabriella Mosquera and W3schools for their examples and inspiration for the implementation and development of the script.