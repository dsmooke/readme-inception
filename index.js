const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const { captureRejectionSymbol } = require("events");

const writeFileAsync = util.promisify(fs.writeFile);

const outline = [
    {
        type: "", // title
        name: "title",
        message: "What is the name of your repository?"
    },

    {
        type: "",
        name: "description",
        message: "Enter description of application."
    },

    {
        type: "",
        name: "userstory",
        message: "Enter User Story"
    },

    {
        type: "",
        name: "developer",
        message: "Describe what you worked on specifically."
    },

    {
        type: "",
        name: "",
        message: "Enter User Story"
    },
]

const promptUser = () => {
    return inquirer.prompt(outline);

};

const generateREADME = (addedText) => {

    return `markdown file format outline ${outline.title} etc....`
}

const init = async () => {

    try {
        const addedText = await promptUser();
        // console.log(addedText);
        const readme = generateREADME(addedText);
        // console.log(readme);
        await writeFileAsync("README.md", readme);

        console.log("Successfully wrote README.md");

    } catch (error) {
        console.log(error);
    }
}

init();