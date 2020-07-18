const generatePage = (promptAnswers) => {
    console.log(promptAnswers);

    // destructure prompt answers 
    const { projectName, description, toc, installation, usage, credits, license, test, githubName, email } = promptAnswers;

    return `
    # ${projectName}

    ## Descripion: 
    
    ${description}

    ## Installation

    ${installation}

    ## Usage

    ${usage}

    ## Credits

    ${credits}

    ## License

    ${license}

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

module.exports = generatePage;