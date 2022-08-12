// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log ('Please enter a title for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description for your project? (Required)',
            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                } else {
                    console.log('Please provide a description of your project!')
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you Install your project? (Required)',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage infomation for your project? (Required)',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage information for your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use for your project (Choose one from list)',
            choices: ["MIT", "Apache 2.0", "Mozilla", "Boost 1.0", "AGPL", "Unlicense" ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the contribution rules for your project? (Required)',
            validate: contributingInput => {
                if(contributingInput) {
                    return true;
                } else {
                    console.log('Please provide the contribution rules for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'How do you test your project? (Required)',
            validate: testInput => {
                if(testInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for testing your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What Email can people contact you at? (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please provide your Email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username!');
                    return false;
                }
            }
        }

    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) =>
    err ? console.error(err): console.log('README.md Successfully Created!'));
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((data) => {
        writeToFile('./dist/README.md', generateMarkdown(data))
    })
};

// Function call to initialize app
init();
