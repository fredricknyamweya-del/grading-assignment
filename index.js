// // Pseudocode: Grades Management System

// START

// DEFINE students as a list of student objects (name, age, subjects with scores)

// FUNCTION calculateAverage(subjects):
//     total = sum of all subject scores
//     average = total / number of subjects
//     RETURN average

// FUNCTION getGrade(average):
//     IF average >= 90 THEN RETURN "A"
//     ELSE IF average >= 80 THEN RETURN "B"
//     ELSE IF average >= 70 THEN RETURN "C"
//     ELSE RETURN "D"

// -----------------------------------------
// TASK 1: Print each student’s name and age
// FOR EACH student IN students:
//     PRINT student.name + " is " + student.age + " years old"

// -----------------------------------------
// TASK 2: Calculate average score for each student
// FOR EACH student IN students:
//     avg = calculateAverage(student.subjects)
//     PRINT student.name + ": " + avg

// -----------------------------------------
// TASK 3: Find student with highest average
// SET topStudent = first student
// FOR EACH student IN students:
//     IF calculateAverage(student.subjects) > calculateAverage(topStudent.subjects):
//         topStudent = student
// PRINT "Top Student: " + topStudent.name

// -----------------------------------------
// TASK 4: Get students with average above 80
// SET above80 = empty list
// FOR EACH student IN students:
//     IF calculateAverage(student.subjects) > 80:
//         ADD student TO above80
// PRINT names in above80

// -----------------------------------------
// TASK 5: Create new array with name and average
// SET averagesArray = empty list
// FOR EACH student IN students:
//     avg = calculateAverage(student.subjects)
//     ADD {name: student.name, average: avg} TO averagesArray
// PRINT averagesArray

// -----------------------------------------
// TASK 6: Add grade property
// SET gradedArray = empty list
// FOR EACH entry IN averagesArray:
//     grade = getGrade(entry.average)
//     ADD {name: entry.name, average: entry.average, grade: grade} TO gradedArray
// PRINT gradedArray

// -----------------------------------------
// TASK 7: Count how many students passed (average ≥ 70)
// SET passedCount = 0
// FOR EACH entry IN gradedArray:
//     IF entry.average >= 70:
//         passedCount = passedCount + 1
// PRINT "Number of students passed: " + passedCount

// END
