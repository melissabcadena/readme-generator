const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/generate-page.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project? (Required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'tableOfContents',
            default: 'true',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project. Pleae provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list your collaborators with links to their GitHub profiles.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your application.',
            choices: ['MIT', 'AUR', 'CPAN', 'CPAN/METACRAN', 'Crates.io', 'CTAN', 'Eclipse Marketplace', 'Hex.pm', 'NPM']
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please write tests for your application and provide examples on how to run them.'
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])
};

promptUser().then(answers => console.log(answers));



// fs.writeFile('README.md', generatePage(projectTitle, description), err => {
//     if (err) throw err;

//     console.log('README.md complete! Checkout README.md to see the output.')
// })