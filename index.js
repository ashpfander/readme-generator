// TODO: Include packages needed for this application
// Grabs the inquirer and fs (file system) modules
const inquirer = require('inquirer');
const fs = require('fs');
// Grabs the generateMarkdown.js file as well
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a description about this project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps to installing this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is this project intended to be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How may others contribute to this project, if at all?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How might others test this application?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select a license for this project.',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md succesfully created!'));
}

// TODO: Create a function to initialize app
function init() {
    // Uses inquirer package to prompt questions from questions array
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
