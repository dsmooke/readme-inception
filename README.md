# README Inception 

## Description
This is the eigth assigment from the UConn Coding Boot Camp curriculum. This assigment utilizes node.js to  which combined the following topics: Git, Terminal, GitHub, GitHub Pages, Web Accessibility, HTML, CSS, JavaScript, jQuery, Bootstrap, APIs, DOM, WeWebCamp README Generator

## Table of Contents
Add if readme is very long.
* [Goals](#goals)
* [Definitions](#definitions)
* [Instructions](#instructions)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Video](#video)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Goals 

1. To create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package].

2. Invoke the application by using the following command: `node index.js`

3. Use Screencastify and provide a link to a walkthrough video that demonstrates its functionality.


### Definitions
The goals above and the application can be further understood with the following definitions:

**node.js**
: 
**command-line**
:
**dependencies**
:
**inquirer**
: an npm package that provides an easy way to capture user input in your `node.js` command-line interface applications. It provides several methods for asking questions and returning answers from the user that can be accessed by a `.then` promise function. <!--check for .then promise function>
**promise function**
:
**`require()`**
:
**`fs`**
:
**`util`**
:
**`promisify`**
:
**`try...catch(error)`**
:
**`await`**
:

## Instructions

Our instructions were based on the following User Story and Acceptance Criteria: 

### User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

### Acceptance Criteria 
The application must meet the following requirements: 

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

1. Open GitHub and create a new repository. <!--do not add a README.md file upon creation>
- Name your new repository.
- Open Terminal (if MacOS) and create a new directory using `mkdir project-name`
- Make sure you are in the root file of your local repository before you create any files. 
- Clone your repository using `git clone ssh-key-from-repository`
- 
- Create a .gitignore file <!--in VScode or Terminal-->: `touch .gitignore`
- type in `node_modules` and `.DS_Store` <!--image? ![alt text](image.jpg)-->
- Create a new package.json file
- Initialize `npm`: `npm init`. This will be used to set up a new or existing npm package. You can customize the fields, or you can continue to press the enter key until you see `0 vulnerabilities`.
- This will create a `package.json` file and a `package-lock.json` file. 
- Install the Inquirer package using: `npm install inquirer`
- This will create a `node_modules` file. 
- You are now ready to create your `index.js` file: `touch index.js`
- 
2. ~~Open a text-editor, I will be using VScode.~~
3. 
> `const inquirer = require("inquirer");`
`const fs = require("fs");`
`const util = require("util");`


## Usage
Provide instructions and examples for use. Include screenshots as needed.

## Credits 
List your collaborators, if any, with links to their GitHub profiles. 

If you used asny third-party assets that require attribution, list the creators with links to their primary web presence in this section. 

If followed tutorials, include links to those here as well. 

- ["How to use the Inquirer Node package"](https://www.educative.io/edpresso/how-to-use-the-inquirer-node-package)

## License 

The last section of a README is a license. This lets other developers know what they can and cannot do with your project.


# Mini-Project

In this activity, you will build a command-line tool that generates an HTML portfolio page from user input.

## Instructions

* Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

* An HTML document containing the information collected from the prompts should be constructed and written to the file system. Be sure to add some CSS styling to the document.

* You’ll need the following tools and technologies to accomplish this:

  * `fs` for writing to the file system

  * `inquirer` for collecting user input

  * String template literals for generating a string version of the HTML document before it is written to the file system

  * Promises for handling asynchronous behavior

## Instructions

It might be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy with the HTML file's appearance in the browser, you can copy and paste its contents into a string template literal. Then you can write a function to insert the user input into the appropriate places in the HTML string before writing it to the file system.

## Developer

* Instead of using promises, how can we use `async/await` and `try/catch` to control the flow of our asynchronous code?

---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
