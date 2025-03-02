# Lab 2

* *Date Created*: 26/01/2025
* *Last Modification Date*: 26/01/2025
* Timberlea URL: https://web.cs.dal.ca/~zhiyingw/csci3172/labs/lab2/
* GitLab URL: https://git.cs.dal.ca/zhiyingw/csci-3172/


## Authors
Zhiying Wu
zh617138@dal.ca

Questions:

(a) What is the scope of a const variable?
The scope of a const variable in JavaScript is block-scoped, which means it is only accessible within the block that is enclosed by curly braces {}, where it is declared. And it applies to if statements, loops, or functions. However, const is also available in function-scoped, but its value cannot be reassigned once it is set.

(b) When were the let and const keywords added to JavaScript?
The let and const keywords were introduced in ECMAScript 6 and released in 2015. The variable let has block and function scopes, meaning it is only available within the block and statement where it is defined. It can also be used inside functions and loops. The variable const also has block and function scopes. However, the key difference is that once a const variable is assigned a value, it cannot be reassigned, which makes const ideal for values that remain constant throughout the entire execution.


(c) If you were to change let for var in your script(s), would your script still work? Why or Why not? 
It might still work, but unexpected errors could occur. For example, I used let to initialise overallWeightedAverage and validCourses to 0 in the student.js file, and these variables are scoped to the block. If I changed the variables to var, they would become function-scoped, making them accessible outside the block unexpectedly.

## Sources Used

### File Name
script.js

*Lines ## - ##*
Line 1 - 46

```
const students = [
    ['Josie', [98, 88, 96, 96]],
    ['Colin', [92, 90, 95, 99]],
    ['Charlie', [60, 85, null, 82]], 
    ['David', [71, null, 80, 85]],  
    ['Daisy', [75, 83, 90, 87]],
    ['Frank', [61, 68, 63, null]],   
    ['Grace', [92, 88, 85, 91]],
    ['Hannah', [null, 65, 68, 78]]  
];

function calculateAverage(grades) {
    const validGrades = grades.filter(grade => grade !== null);
    const sum = validGrades.reduce((acc, grade) => acc + grade, 0);
    return Math.round(sum / validGrades.length); 
}

function getLetterGrade(average) {
    if (average >= 90) return 'A+';
    if (average >= 85) return 'A';
    if (average >= 80) return 'A';
    if (average >= 77) return 'B+';
    if (average >= 73) return 'B';
    if (average >= 70) return 'B-';
    if (average >= 65) return 'C+';
    if (average >= 60) return 'C';
    if (average >= 55) return 'C-';
    return 'F';
}

function displayGradeBook() {
    const tableBody = document.querySelector('#gradeTable tbody');
    
    students.forEach((student, index) => {
        const name = student[0];
        const grades = student[1];
        const average = calculateAverage(grades);
        const letterGrade = getLetterGrade(average);

```

The code above was created by adapting the code in [Mehrad Hajati](https://ca-lti.bbcollab.com/recording/9b2c023a6b8e43af9be702f004942e2b) as shown below: 

```
const students = [
    {name: 'Alice', grades:[89, 79, 94, 90]},
    {name: 'Pedro', grades:[77, 81, 89, null]},
    {name: 'Jeff', grades:[73, null, 71, 85]},
    {name: 'Laura', grades:[80, 91, 63, 78]},
    
];

const calculateAverage = (grades) => {
    const validGrades = grades.filer(grade => grade !== null);
    Return Math.round(validGrades.reduce((sum, grade) => sum + grade, 0)/ validGrades.length);
];

console.log("Grade Book:");
students.forEach(student => {
    const average = calculateAverage(student.grades);
    console.log(`${student.name}: Grades: ${student.grades.join(', ')} | Avg: ${average}`);
});

Const calculateLetterGrade = (average) => {
    if (average >= 90) return 'A';
    if (average >= 85) return 'A-';
    if (average >= 80) return 'B+';
    if (average >= 73) return 'B';
    if (average >= 70) return 'B-';
    Return `C or below`;
};

students.forEach(student => {
    const average = calculateAverage(student.grades);
    const letterGrade = calculateLetterGrade(average);
    console.log(`${student.name}: Avg Numeric: ${average}, Avg Letter: ${letterGrade}`):
});

```

- <!---How---> The code in [Mehrad Hajati](https://ca-lti.bbcollab.com/recording/9b2c023a6b8e43af9be702f004942e2b) was adapted to provide a similar structure and functionality. I changed the format of the students array from an object-based structure (e.g., {name: 'Alice', grades: [...]}) to an array-based structure (e.g., ['Alice', [...]), and I removed the console.log output to dynamically update the HTML table by referencing the #gradeTable tbody element to display the students' grades and letter grades.
- <!---Why---> [Mehrad Hajati](https://ca-lti.bbcollab.com/recording/9b2c023a6b8e43af9be702f004942e2b)'s Code was used because it provided a clear and simple structure for calculating the average grade and letter grade for students.
- <!---How---> [Mehrad Hajati](https://ca-lti.bbcollab.com/recording/9b2c023a6b8e43af9be702f004942e2b)'s Code was modified by updating the letter grade function to provide a more detailed breakdown of grades, using querySelector to select the table's body, and logging the student's data in the console.


### File Name
script.js

*Lines ## - ##*
Line 48, 54-64

```
const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><a href="student.html?student=${index}" class="student-link">${name}</a></td>
            <td>${grades[0] || ' '}</td>
            <td>${grades[1] || ' '}</td>
            <td>${grades[2] || ' '}</td>
            <td>${grades[3] || ' '}</td>
            <td>${average}</td>
            <td>${letterGrade}</td>
        `;
        tableBody.appendChild(row);
    });
}

```

The code above was created by adapting the code in [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp) as shown below: 

```
const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

```

- <!---How---> The code in [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp) was implemented by using the document.createElement method to create a new row (<tr>) element in the DOM and dynamically populate it with the student's data (name, grades, average, and letter grade). The new row is then appended to the existing table body (tableBody.appendChild(row)).
- <!---Why---> [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp)'s Code was used because it provides a simple example of how to create and append an element in the DOM.
- <!---How---> [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp)'s Code was modified by including a hyperlink <a> for the student's name, pointing to a student.html page, changing the element type from a <p> tag to a <tr> (table row) element to dynamically add rows to a table. Instead of static text, I used template literals to insert dynamic student data (name, grades, average, and letter grade) into multiple <td> (table cell) elements. I also added logic to handle null values by replacing them with an empty space.


### File Name
script.js and student.js

*Lines ## - ##*
Line 68/Line 212

```
window.addEventListener('load', displayGradeBook);
window.addEventListener('load', displayStudentDetails);

```

The code above was created by adapting the code in [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) as shown below: 

```
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

```

- <!---How---> The code in [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) was implemented by using the window.addEventListener('load', displayGradeBook) and window.addEventListener('load', displayStudentDetails) functions, which listens for the load event and triggers the displayGradeBook/displayStudentDetails functions once the page has fully loaded.
- <!---Why---> [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)'s Code was used because it provides a reliable method to ensure that the DOM are fully loaded before executing JavaScript, preventing errors or premature attempts to access DOM elements.
- <!---How---> [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)'s Code was modified by replacing the logging functionality with the functions (displayGradeBook) (displayStudentDetails)that dynamically generate and populate the HTML table with student data when the page is loaded. 

### File Name
student.js

*Lines ## - ##*
Line 78-84

```
function calculateAverage(grades) {
    const validGrades = grades.filter(grade => grade !== '-' && !isNaN(grade));
    const sum = validGrades.reduce((acc, grade) => acc + grade, 0);
    return validGrades.length > 0 ? Math.round(sum / validGrades.length) : 0;
}

```

The code above was created by adapting the code in [Mehrad Hajati](https://ca-lti.bbcollab.com/recording/9b2c023a6b8e43af9be702f004942e2b) as shown below: 

```
const calculateAverage = (grades) => {
    const validGrades = grades.filer(grade => grade !== null);
    Return Math.round(validGrades.reduce((sum, grade) => sum + grade, 0)/ validGrades.length);
];

```

- <!---How---> The code in [Mehrad Hajati](https://ca-lti.bbcollab.com/recording/9b2c023a6b8e43af9be702f004942e2b) was implemented by adapting the logic of filtering valid grades and calculating the average, with the key difference being the handling of '-' values instead of null and ensuring that the grade is a valid number using !isNaN(grade).
- <!---Why---> [Mehrad Hajati](https://ca-lti.bbcollab.com/recording/9b2c023a6b8e43af9be702f004942e2b)'s Code was used because it efficiently filters out invalid or missing grades (null values) and computes the average of valid grades.
- <!---How---> [Mehrad Hajati](https://ca-lti.bbcollab.com/recording 9b2c023a6b8e43af9be702f004942e2b)'s Code was modified by changing the null check to filter out the '-' string (indicating a missing grade) and refining the logic with !isNaN(grade) to ensure only numerical values are considered valid for averaging.

### File Name
student.js

*Lines ## - ##*
Line 93-104

```
if (
        assignments.includes('-') ||
        quizzes.includes('-') ||
        exams.includes('-')
    ) {
        return {
            assignments: 'N/A',
            quizzes: 'N/A',
            exams: 'N/A',
            final: 'N/A'
        };
    }
}

```

The code above was created by adapting the code in [w3schools](https://www.w3schools.com/jsref/jsref_includes_array.asp) as shown below: 

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");

```

- <!---How---> The code in [w3schools](https://www.w3schools.com/jsref/jsref_includes_array.asp) was implemented by demonstrating how to use the includes() method to check if a specific item exists in an array.
- <!---Why---> [w3schools](https://www.w3schools.com/jsref/jsref_includes_array.asp)'s Code was used because I need to determine if any of the grades arrays contained a placeholder value (like '-'),and this example demonstrates the use of the .includes() method to check if an array contains a specific value.
- <!---How---> [w3schools](https://www.w3schools.com/jsref/jsref_includes_array.asp)'s Code was modified by applying the .includes() method to check if any of the arrays (assignments, quizzes, or exams) contain the string '-', which indicates missing grades. If any of these arrays include '-', the function returns an object with all grades set to 'N/A'. 


### File Name
student.js

*Lines ## - ##*
Line 149-184, 201-209

```
const rowAssignments = document.createElement('tr');
        rowAssignments.innerHTML = `
            <td>Course ${courseIndex + 1} - Assignments (30%)</td>
            <td>${course.assignments.join(', ')}</td>
            <td>${calculateAverage(course.assignments) || 'N/A'}</td>
            <td>${weightedAvg.assignments === 'N/A' ? 'N/A' : weightedAvg.assignments}</td>
        `;
        tableBody.appendChild(rowAssignments);

        const rowQuizzes = document.createElement('tr');
        rowQuizzes.innerHTML = `
            <td>Course ${courseIndex + 1} - Quizzes (20%)</td>
            <td>${course.quizzes.join(', ')}</td>
            <td>${calculateAverage(course.quizzes) || 'N/A'}</td>
            <td>${weightedAvg.quizzes === 'N/A' ? 'N/A' : weightedAvg.quizzes}</td>
        `;
        tableBody.appendChild(rowQuizzes);

        const rowExams = document.createElement('tr');
        rowExams.innerHTML = `
            <td>Course ${courseIndex + 1} - Exams (50%)</td>
            <td>${course.exams.join(', ')}</td>
            <td>${calculateAverage(course.exams) || 'N/A'}</td>
            <td>${weightedAvg.exams === 'N/A' ? 'N/A' : weightedAvg.exams}</td>
        `;
        tableBody.appendChild(rowExams);

        const rowFinal = document.createElement('tr');
        rowFinal.innerHTML = `
            <td><strong>Course ${courseIndex + 1} - Final Weighted Average</strong></td>
            <td></td>
            <td></td>
            <td>${weightedAvg.final === 'N/A' ? 'N/A' : weightedAvg.final}</td>
        `;
        tableBody.appendChild(rowFinal);
    });

	 const rowOverall = document.createElement('tr');
    rowOverall.innerHTML = `
        <td><strong>Overall Weighted Average</strong></td>
        <td></td>
        <td></td>
        <td>${overallAverage === 'N/A' ? 'N/A' : overallAverage}</td>
    `;
    tableBody.appendChild(rowOverall);
}

```

The code above was created by adapting the code in [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp) as shown below: 

```
const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

```

- <!---How---> The code in [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp) was implemented by using the document.createElement method to create a new row (<tr>) element in the DOM and dynamically populate it with the student's data (assignments, quizzes, exams and weighted average). The new row is then appended to the existing table body (tableBody.appendChild()).
- <!---Why---> [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp)'s Code was used because it provides a simple example of how to create and append an element in the DOM.
- <!---How---> [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp)'s Code was modified by changing the element type from a <p> tag to a <tr> (table row) element to dynamically add rows to a table. Instead of static text, I used template literals to insert dynamic student data (assignments, quizzes, exams and weighted average) into multiple <td> (table cell) elements. I also added logic to handle not identified N/A values.


## Artificial Intelligence Tools Used

* [chatgpt](https://chatgpt.com/) - The AI Tool used

### Prompt Used on *chatgpt*

```
How do I get query parameters from a URL in JavaScript?

```

The code prompt above was used [chatgpt](https://chatgpt.com/) to generate the code shown below: 

```
const url = window.location.href;

const urlObj = new URL(url);

const params = new URLSearchParams(urlObj.search);

const studentId = params.get('student');  // For example, 'student' is the query parameter name
console.log(studentId);

```

#### File Name
student.js

*Lines ## - ##*
Line 127-131

```
const urlParams = new URLSearchParams(window.location.search);
    const studentIndex = parseInt(urlParams.get('student'));

    const student = detailedGrades[studentIndex];
```

- <!---How---> The code in [chatgpt](https://chatgpt.com/) was implemented by extracting the query parameter student from the current URL using the URLSearchParams API. It parses the query parameter value and converts it into an integer (studentIndex) using parseInt(). This value is then used to retrieve the corresponding student data from the detailedGrades array
- <!---Why---> [chatgpt](https://chatgpt.com/)'s Code was used because it offers a straightforward approach for extracting query parameters from a URL.
- <!---How---> [chatgpt](https://chatgpt.com/)'s Code was modified by adding parseInt() to ensure the query parameter student is parsed as an integer since query parameters are always returned as strings, and I used the studentIndex to fetch specific student data from the detailedGrades array.


## Acknowledgments

A special thanks to our TA Mehrad Hajati, W3schools and mdn web docs for their examples and inspiration for the implementation and development of the script.