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

const students = [
  {
    name: "Alice",
    age: 20,
    subjects: [
      { name: "Math", score: 85 },
      { name: "English", score: 78 },
      { name: "Science", score: 92 }
    ]
  },
  {
    name: "Bob",
    age: 22,
    subjects: [
      { name: "Math", score: 60 },
      { name: "English", score: 70 },
      { name: "Science", score: 65 }
    ]
  },
  {
    name: "Charlie",
    age: 19,
    subjects: [
      { name: "Math", score: 95 },
      { name: "English", score: 88 },
      { name: "Science", score: 91 }
    ]
  }
];

// 1. Print each student’s name and age
students.forEach(student => {
  console.log(`${student.name} is ${student.age} years old`);
});

// 2. Calculate average score for each student
function calculateAverage(subjects) {
  const total = subjects.reduce((sum, subj) => sum + subj.score, 0);
  return total / subjects.length;
}

students.forEach(student => {
  const avg = calculateAverage(student.subjects);
  console.log(`${student.name}: ${avg}`);
});

// 3. Student with highest average score
const topStudent = students.reduce((best, student) => {
  const avg = calculateAverage(student.subjects);
  return avg > calculateAverage(best.subjects) ? student : best;
});
console.log("Top Student:", topStudent.name);

// 4. Students with average score above 80
const above80 = students.filter(student => calculateAverage(student.subjects) > 80);
console.log("Students above 80:", above80.map(s => s.name));

// 5. New array with name and average
const averagesArray = students.map(student => ({
  name: student.name,
  average: calculateAverage(student.subjects)
}));
console.log("Averages Array:", averagesArray);

// 6. Add grade property
function getGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  return "D";
}

const gradedArray = averagesArray.map(s => ({
  ...s,
  grade: getGrade(s.average)
}));
console.log("Graded Array:", gradedArray);

// 7. Count how many students passed (average ≥ 70)
const passedCount = gradedArray.filter(s => s.average >= 70).length;
console.log("Number of students passed:", passedCount);
