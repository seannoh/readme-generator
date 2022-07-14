// Include packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions
const questions = [
  {
    name: "title",
    type: "input",
    message: "Please input the name of your project:"
  },
  
];

// FUNCTIONS

// prompts user with questions
async function promptUser() {
  let response = await inquirer.prompt(questions);
  writeToFile("YOUR_README.md", generateMarkdown(response));
}

// writes the md file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log('Saved to "YOUR_README.md"');
  });
}

// Initialize app
function init() {
  promptUser();
}

// Function calls
init();
