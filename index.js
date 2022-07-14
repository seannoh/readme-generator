// Include packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions
const questions = [
  {
    name: "title",
    type: "input",
    message: "Please enter the name of your project:"
  },
  {
    name: "description",
    type: "input",
    message: "Please enter a description for your project:"
  },
  {
    name: "deployedLink",
    type: "input",
    message: "Please enter the URL to your deployed site. If your project isn't deployed, leave this blank:"
  },
  {
    name: "installation",
    type: "input",
    message: "Please enter installation instructions:"
  },
  {
    name: "usage",
    type: "input",
    message: "Please enter usage information:"
  },
  {
    name: "credits",
    type: "input",
    message: "Please enter any credits:"
  },
  {
    name: "license",
    type: "list",
    message: "Please select a license from the list:",
    choices: ["MIT License", "Apache License 2.0", "GNU GPLv3", "ISC License", "No License"]
  },
  {
    name: "contributing",
    type: "input",
    message: "Please enter contribution guidelines:"
  },
  {
    name: "username",
    type: "input",
    message: "Please enter your Github username:"
  },
  {
    name: "email",
    type: "input",
    message: "Please enter your email:"
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
