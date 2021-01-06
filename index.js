const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const { captureRejectionSymbol } = require("events");

const writeFileAsync = util.promisify(fs.writeFile);

const acceptanceCriteria = [

    {
        type: "input",
        name: "given",
        message: "GIVEN"
    },

    {
        type: "input",
        name: "when-1",
        message: "WHEN"

    },
];

const tableOfContents = outline.addedContents[choices];

const addTC = () => {
    for (i = 0; i < 0; i++) {

    }
    return outline.addedContents.choices[i]
}

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

    {   // choose which to include
        type: "checkbox",
        name: "addedContents",
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
        ]

    },

    // {
    //     type: "input", // goals
    //     name: "goals",
    //     message: "What are the goals of this application?" //list format?
    // },

    // {
    //     type: "", // user story
    //     name: "userStory",
    //     message: "Enter User Story"
    // },

    {
        type: "confirm",
        name: "addAC",
        message: "Add Acceptance Criteria?"
    },

    {
        type: "input",
        name: "acceptanceCriteria",
        message: "What is the Acceptance Criteria?"
        ["",
        "", ]
    },

    {
        type: "confirm",
        name: "developer",
        message: "Include Developer?"
    },

    // {
    //     type: "input",
    //     name: "developer",
    //     message: "Describe what you worked on specifically."
    // },

    // {
    //     type: "",
    //     name: "link",
    //     message: "Enter User Story"
    // },

    // {
    //     type: "confirm", // copyright addition
    //     name: "copyright",
    //     message: "Add copyright?"
    // },
]

const promptUser = () => {
    return inquirer.prompt(outline);

};

const fillAcceptanceCriteria = () => {
    if (inquirer.prompt(outline.addAC) === true) {
        return inquirer.prompt(outline.acceptanceCriteria);
    } else {
        return inquirer.prompt(outline[8]);
    };

}

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