const generatePage = (promptAnswers) => {
    console.log(promptAnswers);

    // destructure prompt answers 
    const { projectName, description, tableOfContents, installation, usage, credits, license, test, githubName, email } = promptAnswers;

    return `
    
# ${projectName}

${generateBadge(license)}

## Descripion: 

${description}

${generateTOC(tableOfContents)}

## Installation

${installation}

## Usage

${usage}

## License

This application is covered under the license: ${license}.

## Contributing

${credits}

## Tests

${test}

## Questions? 

If you have any additional questions, feel free to contact me: 
GitHub: https://github.com/${githubName} 
Email: ${email}

    `;
};

// create table of contents section 
const generateTOC = toc => {
    if (!toc) {
        return '';
    } 

    return `
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    `;
};

const generateBadge = (license) => {
    return `
<img src="https://img.shields.io/badge/license-${license}-brightgreen">
    `
}

module.exports = generatePage;