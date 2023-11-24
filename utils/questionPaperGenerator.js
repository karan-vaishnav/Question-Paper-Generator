const readline = require('readline-sync');
const questions = require('../Models/Question');

function filterQuestions(difficulty, totalMarks) {
  // Filter questions based on difficulty and total marks
  const filteredQuestions = questions.filter(question => {
    return question.difficulty === difficulty && question.marks <= totalMarks;
  });

  return filteredQuestions;
}

function generateQuestionPaper() {
  // Get user input for the percentage of each difficulty level and total marks
  const easyPercentage = parseFloat(readline.question('Enter percentage for Easy difficulty level: '));
  const moderatePercentage = parseFloat(readline.question('Enter percentage for Moderate difficulty level: '));
  const difficultPercentage = parseFloat(readline.question('Enter percentage for Difficult difficulty level: '));
  const totalMarks = parseInt(readline.question('Enter total marks required: '));

  // Validate percentages
  const totalPercentage = easyPercentage + moderatePercentage + difficultPercentage;
  if (totalPercentage !== 100) {
    console.log('Invalid percentages. The total percentage must be 100.');
    return;
  }

  // Calculate the number of questions for each difficulty level
  const totalEasyQuestions = Math.round((easyPercentage / 100) * totalMarks);
  const totalModerateQuestions = Math.round((moderatePercentage / 100) * totalMarks);
  const totalDifficultQuestions = Math.round((difficultPercentage / 100) * totalMarks);

  // Filter questions based on difficulty and total marks
  const selectedQuestions = [
    ...filterQuestions('Easy', totalEasyQuestions),
    ...filterQuestions('Moderate', totalModerateQuestions),
    ...filterQuestions('Difficult', totalDifficultQuestions)
  ];

  // Display the generated question paper with only questions and marks
  if (selectedQuestions.length > 0) {
    console.log('\nGenerated Question Paper:');
    selectedQuestions.forEach(question => {
      console.log(`\nQuestion: ${question.questionText}\nMarks: ${question.marks}\n`);
    });
  } else {
    console.log('No questions found based on the provided criteria.');
  }
}

// Generate the question paper
module.exports = {
    generateQuestionPaper,
  };