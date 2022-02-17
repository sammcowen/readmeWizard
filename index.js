// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {   //Project Title
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    { //Project description
        type: 'input',
        name: 'description',
        message: "Enter a description of your project (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {                
            console.log('You must enter a description to continue!');
            return false;
            }
        }
    },
    {   //Install Instructions
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You must enter installation instructions to continue!');
                return false;
            }
        }
    },
    {    //Usage Information
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You must enter usage information to continue!');
                return false;
            }
        }
    },
    {   // Contribution Guidelines
        type: 'input',
        name: 'contributions',
        message: 'Enter guidelines for contributions (Required)',
        validate: contributionsInput => {
            if (contributionsInput) 
            {
                return true;
            } else {               
                console.log('You must enter guidelines for contributing to continue!');
                return false;
            }
        }
    },
    {   // Test Instructions
        type: 'input',
        name: 'test',
        message: 'How do you test this project? (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('You must enter testing instructions to continue!');
                return false;
            }
        }
       
    },
    {   //License Options
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project (Required)',
        choices: ['apache', 'MIT', 'Common-Development-and Distribution', 'None'],
        validate: licenseInput => {
            if (licenseInput)
            {
                return true;
            } else {
                console.log('You must choose an option to continue!');
                return false;
            }
        }
    },
    {   //Github Name
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else  {
                console.log('You must enter your github username  to continue!');
                return false;
            }
        }
    },
    {   //Email Address
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter your email to continue!');
                return false;
            }
        }
    }

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers)
    {
        console.log(answers)
        writeToFile();
    });
};

// Function call to initialize app
init();