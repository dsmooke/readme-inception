const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const { captureRejectionSymbol } = require("events");

const writeFileAsync = util.promisify(fs.writeFile);

// const acceptanceCriteria = [

//     {
//         type: "input",
//         name: "given",
//         message: "GIVEN"
//     },

//     {
//         type: "input",
//         name: "when-1",
//         message: "WHEN"

//     },
// ];



const outline = [

    {
        type: "input", // title
        name: "title",
        message: "What is the name of your project?"
    },

    {
        type: "input", // description
        name: "description",
        message: "Enter description of application."
    },

    {
        type: "confirm", // table of contents
        name: "tableOfContents",
        message: "Include Table of Contents?"
    },

    {   // choose which sections to include in table of contents
        type: "checkbox",
        name: "tableOfContents",
        message: "Select what to include in Table of Contents",
        default: ["Description", "Installation", "Usage", "Contributing", "Tests"],
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
            "GNU GPLv3",
            "Trilogy"
        ]
    },

]

const promptUser = () => {
    return inquirer.prompt(outline);

};



const generateREADME = (addedText) => {

    return `# ${outline.title} 
    ## Description 
    ${outline.description} 
    
    ## Table of Contents 
    * ${outline.addedContents[]}
    
    ## Goals
    1. ${outline.goal[1]}
    2. ${outline.goal[2]}
    3. ${outline.goal[3]}

    ## Definitions 
    ${outline.term[1]}
    : ${outline.defintion[1]}

    ## Instructions
    ### User Story ${outline.userStory}

    ```
        `outline of user story`
        ```

    ### Acceptance Criteria
    The application must meet the following requirements:
    ```
        `outline of acceptance criteria`
        ```

    ## Installation
    ${outline.installation}

    ## Developer 
    {outline.developer}

    ## Usage 
    {outline.usage}
    ![image alt](link.jpg)

    ## Credits
    {outline.credits}

    ## License 
    {outline.license}

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