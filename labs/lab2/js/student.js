//Detailed student data: [Assignments, Quizzes, Exams] for each student across 4 courses
const detailedGrades = [
    //Josie
    {   name: 'Josie',
        courses: [
            { assignments: [98, 94, 96], quizzes: [92, 98], exams: [100, 99] },
            { assignments: [88, 85, 88], quizzes: [90, 80], exams: [88, 90] },
            { assignments: [99, 96, 96], quizzes: [99, 100], exams: [90, 96] }, 
            { assignments: [95, 98, 92], quizzes: [100, 90], exams: [96, 98] }  
        ]
    },
    //Colin
    {   name: 'Colin',
        courses: [
            { assignments: [97, 83, 90], quizzes: [85, 92], exams: [97, 91] },
            { assignments: [96, 90, 93], quizzes: [95, 91], exams: [88, 85] },  
            { assignments: [92, 97, 85], quizzes: [95, 98], exams: [92, 99] },
            { assignments: [100, 98, 96], quizzes: [100, 100], exams: [99, 98] }
        ]
    },
    //Charlie
    {   name: 'Charlie',
        courses: [
            { assignments: [55, 60, 56], quizzes: [52, 66], exams: [60, 63] }, 
            { assignments: [80, 95, 77], quizzes: [85, 93], exams: [82, 84] }, 
            { assignments: [60, 80, 75], quizzes: [80, '-'], exams: [78, 80] },  
            { assignments: [88, 65, 72], quizzes: [85, 76], exams: [83, 89] },    
        ]
    },
    //David
    {   name: 'David',
        courses: [
            { assignments: [67, 60, 82], quizzes: [81, 72], exams: [63, 75] },  
            { assignments: [75, '-', 80], quizzes: [90, 75], exams: [85, 88] },  
            { assignments: [80, 85, 76], quizzes: [85, 80], exams: [76, 79] },  
            { assignments: [80, 79, 70], quizzes: [85, 78], exams: [92, 90] },  
        ]
    },
    //Daisy
    {   name: 'Daisy',
        courses: [
            { assignments: [80, 71, 68], quizzes: [72, 80], exams: [75, 74] },
            { assignments: [80, 85, 78], quizzes: [76, 82], exams: [83, 86] },
            { assignments: [99, 96, 80], quizzes: [86, 92], exams: [87, 90] }, 
            { assignments: [95, 95, 92], quizzes: [82, 90], exams: [80, 86] }  
        ]
    },
    //Frank
    {   name: 'Frank',
        courses: [
            { assignments: [55, 62, 60], quizzes: [56, 59], exams: [60, 66] },
            { assignments: [58, 68, 70], quizzes: [65, 79], exams: [65, 70] },  
            { assignments: [62, 67, 65], quizzes: [65, 64], exams: [62, 60] },
            { assignments: [60, 67, 66], quizzes: ['-', 100], exams: [79, 80] }
        ]
    },
    //Grace
    {   name: 'Grace',
        courses: [
            { assignments: [95, 90, 96], quizzes: [82, 86], exams: [92, 93] }, 
            { assignments: [80, 95, 77], quizzes: [85, 93], exams: [89, 89] }, 
            { assignments: [90, 80, 95], quizzes: [80, 90], exams: [86, 80] },  
            { assignments: [88, 95, 92], quizzes: [85, 76], exams: [91, 96] },    
        ]
    },
    //Hannah
    {   name: 'Hannah',
        courses: [
            { assignments: [67, '-', 82], quizzes: [81, 72], exams: [65, 75] },  
            { assignments: [75, 60, 72], quizzes: [60, 65], exams: [58, 68] },  
            { assignments: [70, 75, 66], quizzes: [65, 70], exams: [68, 64] },  
            { assignments: [80, 79, 70], quizzes: [85, 78], exams: [74, 80] },  
        ]
    },
];

//Function to calculate the average grade, ignores missing grades
function calculateAverage(grades) {
    //Filter out the '-' or NaN values
    const validGrades = grades.filter(grade => grade !== '-' && !isNaN(grade));
    const sum = validGrades.reduce((acc, grade) => acc + grade, 0);
    //condition ? expression_if_true : expression_if_false;
    return validGrades.length > 0 ? Math.round(sum / validGrades.length) : 0;
}

//Function to calculate the weighted average for assignments, quizzes, and exams
function calculateWeightedAverage(assignments, quizzes, exams) {
    const assignmentWeight = 0.30;
    const quizWeight = 0.20;
    const examWeight = 0.50;

    //If any assessment section has missing grades ('-'), return 'N/A' for that section
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

    //Calculate average for valid grades
    const avgAssignments = calculateAverage(assignments);
    const avgQuizzes = calculateAverage(quizzes);
    const avgExams = calculateAverage(exams);

    //Calculate the weighted averages
    const weightedAssignments = avgAssignments * assignmentWeight;
    const weightedQuizzes = avgQuizzes * quizWeight;
    const weightedExams = avgExams * examWeight;

    //Return the weighted averages for each section and the final weighted average
    return {
        assignments: Math.ceil(weightedAssignments),
        quizzes: Math.ceil(weightedQuizzes),
        exams: Math.ceil(weightedExams),
        final: Math.ceil(weightedAssignments + weightedQuizzes + weightedExams)
    };
}

//Function to display the student's detailed grades on the page
function displayStudentDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const studentIndex = parseInt(urlParams.get('student'));

    //Get the student details based on the index
    const student = detailedGrades[studentIndex];

    //Display the student's details in the console
    console.log(`Student: ${student.name} Courses:`);
    student.courses.forEach((course, index) => {
        console.log(`Course ${index + 1}: Assignments: ${course.assignments.join(', ')}, Quizzes: ${course.quizzes.join(', ')}, Exams: ${course.exams.join(', ')}`);
    });
    
    //Set the student's name on the page
    document.querySelector('#studentName').textContent = `${student.name}`;

    //Select the tbody element of the table where rows will be added
    const tableBody = document.querySelector('#gradesTable tbody');

    student.courses.forEach((course, courseIndex) => {
        const weightedAvg = calculateWeightedAverage(course.assignments, course.quizzes, course.exams);

        //Create a row for assignments, quizzes, exams, and final weighted average
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

    //Calculate the overall weighted average for the student
    let overallWeightedAverage = 0;
    let validCourses = 0;

    student.courses.forEach(course => {
        const weightedAvg = calculateWeightedAverage(course.assignments, course.quizzes, course.exams);

        if (weightedAvg.final !== 'N/A') {
            overallWeightedAverage += weightedAvg.final;
            validCourses++;
        }
    });

    const overallAverage = validCourses > 0 ? Math.round(overallWeightedAverage / validCourses) : 'N/A';

    const rowOverall = document.createElement('tr');
    rowOverall.innerHTML = `
        <td><strong>Overall Weighted Average</strong></td>
        <td></td>
        <td></td>
        <td>${overallAverage === 'N/A' ? 'N/A' : overallAverage}</td>
    `;
    tableBody.appendChild(rowOverall);
}

//Display the student's details when the page loads
window.addEventListener('load', displayStudentDetails);