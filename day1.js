// Task 1
const name = "Daniel";
const age = 14;
const country = "Nigeria";
const isStudent = true;
const favoriteProgrammingLanguage = "Javascript";
const yearsOfCoding = 2;

// Describing Daniel
const describeDaniel =
  `${name} is ${age} years old and lives in ${country},` +
  `${name} ${isStudent ? "is" : "is not"} a student, loves ${favoriteProgrammingLanguage},` +
  `and has been coding ${yearsOfCoding} years now.`;
console.log(describeDaniel);

// Calculating Daniel's age as he is getting old.
const ageIn5 = age + 5;
const ageIn10 = age + 10;
const ageIn20 = age + 20;

console.log(`In 5 years ${name} will be ${ageIn5}, he is getting so old.`);
console.log(`In 10 years ${name} will be ${ageIn10}, he is getting so old.`);
console.log(
  `In 20 years ${name} will be ${ageIn20}, he has gotten so old already.`,
);

// I used const to store values
// The diference between  string and a number is that string has this quotation mark
// Boolean is a data type that returns either true or false

// Task2 - Simple Calculator
const firstNumber = 20;
const secondNumber = 6;
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);
// When you divide by zero, what do you get?
console.log(20 / 0); // you get infinity

// Task 3 - Student Grade Calculator
const English = 78;
const Mathematics = 85;
const JavaScript = 92;
const Design = 70;

const totalScore = English + Mathematics + JavaScript + Design;
const averageScore = totalScore / 4;

function calculateGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(totalScore);
console.log(averageScore);
console.log(` Grade: ${calculateGrade(50)}`);
console.log(` Grade: ${calculateGrade(80)}`);
console.log(` Grade: ${calculateGrade(59)}`);
console.log(` Grade: ${calculateGrade(89.5)}`);

// Task 4 - Login Validator
const username = "admin";
const password = "12345";

function validateLogin(inputUsername, inputPassword) {
  if (inputUsername === "" || inputPassword === "") {
    return "username and password are required";
  }
  if (inputPassword.length < 5) {
    return "password must be at least 5 characters";
  }
  if (inputPassword === password && inputUsername === username) {
    return "Login Successful";
  } else {
    return "invalid username or password";
  }
}

console.log(validateLogin("admin", "12345"));
console.log(validateLogin("", "12345"));
console.log(validateLogin("admin", "1234"));
console.log(validateLogin("admin", "wrong1"));
// Difference between =, == and ===
// = is used to asign value to a avariable (assignment operator)
// == is a loosed equality operator
// === Strict equality operator

// Task 5 - Mini Expense Calculator
const food = 5000
const transport = 3000
const internet = 7000
const entertainent = 4000
const income = 100000
const totalExpenses = food + transport + internet + entertainent 
const averageExpense = totalExpenses / 4
const highestExpense = Math.max(food, internet,entertainent, transport)
const remainingMoney = income - totalExpenses
console.log(totalExpenses)
console.log(averageExpense)
console.log(highestExpense)
console.log(remainingMoney)               


function calculateExpenses (){
  // I have genuiely tried but i don't understand this question even with AI
}