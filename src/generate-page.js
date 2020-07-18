const generatePage = (projectTitle, description) => {
    return `
    # ${projectTitle}

    ## Descripion: 
    
    ${description}

    ## Installation

    ## Usage

    ## Credits

    ## License

    ## Badges

    ## Contributing

    ## Tests
    `;
};

module.exports = generatePage;