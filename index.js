const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generate-page.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your project name!');
                  return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please provide a response!');
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'tableOfContents',
            default: 'true',
            message: 'Would you like to add a Table of Contents?',
            validate: tableOfContentsConfirm => {
                if (tableOfContentsConfirm) {
                  return true;
                } else {
                  console.log('Please confirm if you would like a table of contents!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project? Pleae provide a step-by-step description of how to get the development environment running. (Required)',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please provide a response!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use. (Required)',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please provide a response!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list your collaborators with links to their GitHub profiles. (Required)',
            validate: creditsInput => {
                if (creditsInput) {
                  return true;
                } else {
                  console.log('Please provide a response!');
                  return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your application. (Required)',
            choices: ['MIT', 'Apache', 'GNU', 'ISC', 'Mozilla Public License', 'Boost Software', 'Unlicense', 'CC0-1.0', 'SIL Open Font'],
            validate: licenseInput => {
                if (licenseInput) {
                  return true;
                } else {
                  console.log('Please provide a response!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please write tests for your application and provide examples on how to run them. (Required)',
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log('Please provide a response!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your GitHub username? (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                  return true;
                } else {
                  console.log('Please provide a response!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please provide a response!');
                  return false;
                }
            }
        }
    ])
};

promptUser()
    .then(answers => {
        const pageReadMe = generatePage(answers);

        fs.writeFile('./dist/README.md', pageReadMe, err => {
            if (err) throw err;
        
            console.log('README.md complete! Checkout README.md to see the output.')
        })
    })