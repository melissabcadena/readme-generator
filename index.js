const inquire = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generate-page.js');

const projectTitle = "readme generator";
const description = "generates read me file";



fs.writeFile('README.md', generatePage(projectTitle, description), err => {
    if (err) throw err;

    console.log('README.md complete! Checkout README.md to see the output.')
})