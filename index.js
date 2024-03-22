const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    name: 'Title of Project',
    message: "Enter The Title Project Title",
  },
  {
    type: 'input',
    name: 'Description',
    message: "Write a Description For Your Project",
  },
  {
    type: 'input',
    name: 'Table of Contents',
    message: "Write A Table of Contents",
  },
  {
    type: 'input',
    name: 'Installation',
    message: "Describe The Installation Process",
  },
  {
    type: 'input',
    name: 'Usage',
    message: "Explain How To Use Your Application",
  },
  {
    type: 'input',
    name: 'License',
    message: "Provide A License For Your Project",
  },
  {
    type: 'input',
    name: 'Contributing',
    message: "Add Collaborators/Contributors/Contributor.md",
  },
  {
    type: 'input',
    name: 'Tests',
    message: "Describe How To Run Testing",
  },
  {
    type: 'input',
    name: 'Questions',
    message: "Where Can Users Contact You",
  },

];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("README.md created successfully!");
        }
      });
}

// function to initialize program
function init() {

    inquirer
    .prompt(questions)
    .then((Answers) => {
      console.log("Answers:", Answers);
      
    // Generate markdown
    const markdown = generateMarkdown(Answers);

    // Add markdown info to readme file
    writeToFile("README.md", markdown);
  })
  .catch((err) => {
    console.error("Error generating README: ", err);
  });
}

// function call to initialize program
init();



