const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const { captureRejectionSymbol } = require("events");
const { fileURLToPath } = require('url');

const writeFileAsync = util.promisify(fs.writeFile);

// const mitURL = "https://opensource.org/licenses/MIT)";
// const gnuURL = "https://www.gnu.org/licenses/gpl-3.0";

const outline = [

    {
        type: "input", // title
        name: "title",
        message: "What is the name of your project?"
    },

    {
        type: "input", // description with default lorem ipsum if no user input
        name: "description",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        message: "Enter description of application."
    },

    {   // confirm default table of contents
        type: "checkbox",
        name: "tableOfContents",
        message: "Select all to add Table of Contents",
        default: ["Installation", "Usage", "Contributing", "Tests", "Questions", "License"],
        choices: [
            "Installation",
            "Usage",
            "Contributing",
            "Tests",
            "Questions",
            "License",
        ],

    },

    { // adding GitHub username to questions section
        type: "input",
        name: "userName",
        message: "Enter your GitHub username"
    },

    { // adding email address to questions section
        type: "input",
        name: "userEmail",
        message: "Enter your email address"
    },

    // {   // installation steps
    //     type: "input",
    //     name: "installation",
    //     message: "What are the steps required to install your project?"
    // },

    // {   // usage instructions
    //     type: "input",
    //     name: "usage",
    //     message: "Provide instructions and examples for use."
    // },

    { // select a license
        type: "list",
        name: "license",
        message: "Select a license",
        choices: [
            "MIT",
            "GPLv3",
            "MPL%202.0"
        ]
    },
]


const promptUser = () => {
    return inquirer.prompt(outline);

};


// var license = answers.license[i]
// const license = {
//     "MIT": answers.license[0],
//     "GNU-GPLv3": answers.license[1],
//     "Mozilla": answers.license[2]
// };

// for (i = 0; i < answers.tableOfContents.length; i++) {
//     return answers.tableOfContents[i];
// }


const generateREADME = (answers) => {


    return `# ${answers.title} ![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)
    
## Description 
    ${answers.description}

## Table of Contents 
* [${answers.tableOfContents[0]}](#${answers.tableOfContents[0]})
* [${answers.tableOfContents[1]}](#${answers.tableOfContents[1]})    
* [${answers.tableOfContents[2]}](#${answers.tableOfContents[2]}) 
* [${answers.tableOfContents[3]}](#${answers.tableOfContents[3]}) 
* [${answers.tableOfContents[4]}](#${answers.tableOfContents[4]})
* [${answers.tableOfContents[5]}](#${answers.tableOfContents[5]})

## Installation
{answers.installation}

## Usage 
{answers.usage}
![image alt](link.jpg)



## Contributing
{answers.contributing}

## Tests
{answers.tests}

## Questions
Link to my [GitHub Profile](https://github.com/${answers.userName})

You can reach me at ${answers.userEmail} if you have any additional questions. 

## License 
[${answers.license} License](${answers.license}License.txt)




---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
`

}

const init = async () => {

    try {
        const addedText = await promptUser();
        // console.log(addedText);
        const readme = generateREADME(addedText);
        // console.log(readme);
        await writeFileAsync("New_README.md", readme);

        console.log("Successfully wrote README.md");

    } catch (error) {
        console.log(error);
    }
}

init();