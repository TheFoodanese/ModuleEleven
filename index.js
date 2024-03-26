const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    
];

const readMEQs = (question) => {
    for (let i = 0; i < questions.length; i++) {
        return question[i];
      }
    }

// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Project Title?: ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Tell Us About Your Project? ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How to Install Application: ',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What Are the Guidelines On How to Use Your Application?: ',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Add Contributors/Collaborators: ',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Test Your Code : ',
        },
        {
            type: "list",
            name: "license",
            message: "Select Project License Type",
            choices: ['AFL-3.0','Apache','Artistic','BSL','BSD','ECL','EPL','EUPL','AGPL','GPL','LGPL','ISC','LPPL','MS-PL','MPL','OSL','PostgreSQL','OFL','NCSA','Unlicense','Zlib']
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter Github Username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Email: ',
        },

    ])
    .then((answers) => {
        const readMeTemplate = 
        `# ${answers.title}
        
        # Description
        ${answers.description}

        # Installation
        ${answers.installation}

        # Usage
        ${answers.guidlines}

        # How To Contribute
        ${answers.contributions}

        # Tests
        ${answers.testing}

        # Contact-Info
        For any questions you can refer to [github.com/${answers.username}] or ${answers.email}
        `
        fs.writeFile('README.md' , readMeTemplate, (err) => {
            console.log(err);
        })
    }

    )
}

// function call to initialize program
init();