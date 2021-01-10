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
        default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        message: "Enter description of application."
    },

    // {
    //     type: "confirm", // table of contents
    //     name: "addTableOfContents",
    //     message: "Include Table of Contents?"
    // },

    {   // choose which sections to include in table of contents
        type: "checkbox",
        name: "tableOfContents",
        message: "Select what to include in Table of Contents",
        default: ["Description", "Installation", "Usage", "Contributing", "Tests", "License"],
        choices: [
            "Description",
            "Goals",
            "UserStory",
            "AcceptanceCriteria",
            "Installation",
            "Usage",
            "Developer",
            "Credits",
            "License",
            "Contributing",
            "Tests",
            "Questions"
        ],


    },
    { // adding GitHub username to questions section
        type: "input",
        name: "userName",
        message: "Enter your GitHub username"
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

// const licenseBadge = {
//     "MIT": mitBadge,
//     "GNU-GPLv3": gnuBadge,
// };

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

## Instructions
### User Story {answers.userStory}

### Acceptance Criteria
The application must meet the following requirements:

## Developer 
{answers.developer}

## Installation
{answers.installation}

## Usage 
{answers.usage}
![image alt](link.jpg)

## License 

[${answers.license} License](${answers.license}License.txt)

## Contributing
{answers.contributing}

## Tests
{answers.tests}

## Questions
Link to my [GitHub Profile](https://github.com/${answers.userName})






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