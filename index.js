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

// Function to calculate the average score
const calculateAverage = (subjects) => {
  let sum = subjects.reduce((acc, subject) => acc + subject.score, 0);
  return parseFloat((sum / subjects.length).toFixed(2));
};

// Function to determine the grade based on score
const assignGrade = (score) => {
  return score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'D';
};

// Display student information
console.log('--- Student Information ---');
students.forEach(student => console.log(`${student.name} is ${student.age} years old`));

// Calculate and display average scores
console.log('\n--- Average Scores ---');
const averages = {};
students.forEach(student => {
  const avg = calculateAverage(student.subjects);
  averages[student.name] = avg;
  console.log(`${student.name}: ${avg}`);
});

// Identify the top performer
console.log('\n--- Top Performer ---');
const topName = Object.keys(averages).reduce((a, b) => averages[a] > averages[b] ? a : b);
console.log(`${topName} had the highest average at ${averages[topName]}`);

// List honor roll students
console.log('\n--- Honor Roll (80+) ---');
const honorRoll = Object.keys(averages).filter(name => averages[name] > 80);
console.log(honorRoll.length > 0 ? honorRoll.join(', ') : 'No one made the honor roll this time');

// Build a summary report
console.log('\n--- Summary Report ---');
const summary = students.map(student => ({
  name: student.name,
  average: calculateAverage(student.subjects)
}));
console.table(summary);

// Add letter grades to the summary
console.log('\n--- Final Grades ---');
const finalGrades = summary.map(s => ({
  ...s,
  grade: assignGrade(s.average)
}));
console.table(finalGrades);

// Pass/Fail status
console.log('\n--- Pass/Fail Status ---');
const passCount = finalGrades.filter(entry => entry.average >= 70).length;
const failCount = finalGrades.length - passCount;
console.log(`Passed: ${passCount} students`);
console.log(`Failed: ${failCount} students`);
