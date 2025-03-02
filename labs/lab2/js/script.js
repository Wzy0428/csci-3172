//Grades for 8 students in 4 courses
const students = [
    ['Josie', [98, 88, 96, 96]],
    ['Colin', [92, 90, 95, 99]],
    ['Charlie', [60, 85, null, 82]], //Charlie is missing a grade in Course 3
    ['David', [71, null, 80, 85]],   //David is missing a grade in Course 2
    ['Daisy', [75, 83, 90, 87]],
    ['Frank', [61, 68, 63, null]],   //Frank is missing a grade in Course 4
    ['Grace', [92, 88, 85, 91]],
    ['Hannah', [null, 65, 68, 78]]  //Hannah is missing a grade in Course 1
];

//Function to calculate the average grade, ignoring missing grades)
function calculateAverage(grades) {
    //Filter out the null values
    const validGrades = grades.filter(grade => grade !== null);
    //Calculate the sum of the valid grades
    const sum = validGrades.reduce((acc, grade) => acc + grade, 0);
    return Math.round(sum / validGrades.length); //Round to nearest integer
}

//Function to determine the letter grade based on the average score
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

//Function to display the grade book in a table
function displayGradeBook() {
    //Select the tbody element of the table where rows will be added
    const tableBody = document.querySelector('#gradeTable tbody');
    
    //Loop through each student to display their details
    students.forEach((student, index) => {
        const name = student[0];
        const grades = student[1];
        const average = calculateAverage(grades);
        const letterGrade = getLetterGrade(average);
        //Create a row for a student in the table
        const row = document.createElement('tr');

        //Display the student data in the console
        console.log(`${name}: ${grades.join(', ')} Average: ${average} Grade: ${letterGrade}`);        
        
        //Add the student data to the row
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

//Initialize the grade book display when the page loads
window.addEventListener('load', displayGradeBook);
