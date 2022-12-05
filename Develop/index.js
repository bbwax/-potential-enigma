// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateREADME = ({ proj_title, description, installation, usage, credits, github, email, license  }) =>
`# ${proj_title}

##Table of Contents
1. [Description](#description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Credits](#Credits)
5. [Questions](#Questions)
6. [License](#License)

## Description <a id="description"></a>
${description}

## Installation <a id="Installation"></a>
${installation}


## Usage <a id="Usage"></a>
${usage}


## Credits <a id="Credits"></a>
${credits}
 

## Questions <a id="Questions"></a>
Any Questions?

Github Profile Link:
https://github.com/${github}

Email Address:
${email}


##License <a id="License"></a>
${license}

`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'proj_title',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your projects description: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Descibe your project installation(if needed): ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Descibe how to use your project, include the github link: ',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter project author(s): ',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address: ',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter project license: ',
        },

    ])
    .then((answers) => {
        const READMEcontent = generateREADME(answers);

        fs.writeFile('README.md', READMEcontent, (err) =>
            err ? console.log(err) : console.log('README file created!')
        );
    })

