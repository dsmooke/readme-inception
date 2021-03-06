# README Inception 

<span align="left">

<a href="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"><img alt="M.I.T. License use" src="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"/></a>

 </span>
 
## Description

A command-line application that dynamically generates a professional README file from a user's input using Node.js and the Inquirer.js package.

View the application [here](https://www.youtube.com/watch?v=Ksv3WGhtsKs&feature=youtu.be)

## Table of Contents

* [Technologies Used](#technologies-used)
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

## Technologies Used

- Node.js
- Inquirer package
- Terminal

## Goals 

1. To create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).
    
2. Use the following tools and technologies:
    * `fs` for writing to the file system

    * `inquirer` for collecting user input

    * String template literals for generating a string version of the HTML/README.md document before it is written to the file system

    * Promises for handling asynchronous behavior

3. Invoke the application by using the following command: `node index.js`

4. Use Screencastify and provide a link to a walkthrough video that demonstrates its functionality.


### Definitions
The goals above and the application can be further understood with the following definitions:

**node.js**
: an implementation of the V8 JavaScript engine without Chrome. It allows you to write server-side code using JavaScript. This means that you no longer need a browser to run JavaScript. You can do so from the command line. Node.js ships with a **standard library**.

**standard library**
: The standard library contains a number of modules that allow you to extend the functionality of Node.js, like `fs`, which you’ll use to read and write files.

**command-line**
: processes commands to a computer program in the form of lines of text; developers use to communicate with computers.

**dependencies**
: when a program or piece of software relies on one or more other programs to run; where manage the set of dependent programs that the application relies on. 

**inquirer**
: an npm package that provides an easy way to capture user input in your `node.js` command-line interface applications. It provides several methods for asking questions and returning answers from the user that can be accessed by a `.then` promise function. 

**promise function**
: a promise represents a value not necessarily known when the promise is created. It lets asynchronous methods return values instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. 

**`fs`**
: The `fs` module of Node.js provides a lot of useful functions to access and interact with the *file system*. You do not install it because it is a part of the Node.js core. It can be used by requiring it 

**`util`**
: module that provides access to some utility functions as well as provides some functions to print formatted strings. Use `require('util')` to access these functions. 

**`promisify`**
: `util.promisify` converts a regular function into an async function, a function that returns a promise. The function passed to `util.promisify` must follow the node.js callback style.

**`try...catch(error)`**
: used to handle exceptions when using the synchronous form.

**`await`**
: operator used to wait for a `promise`. It can only be used inside an `async` function. The `await` expression causes `async` function execution to pause until a `promise` is settled (fulfilled or rejected) and to resume execution of the `async` function after fulfillment. When resumed, the value of the `await` expression is that of the fulfilled `promise`.

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

Steps required to create  README generator:

1. Create a new repository. 
    * Open GitHub and create new repository.
    * do NOT add a README.md file upon creation (that would defeat the purpose!).
2. Create a new directory to house new repo on your local computer. 
    * Open Terminal (if MacOS), create a new directory using `mkdir project-name`
    * Make sure you are in the *root file* of your local repository before you create any files. 
3. Clone your GitHub repository to your local computer (make sure you are in the root folder of your new directory)
    ```
    git clone ssh-key-from-repository
    ```
4. Create a .gitignore file:
    * type `node_modules` in first line
    * type `.DS_Store` in second line

5. Create a new **package.json** file:
    *  Initialize `npm`: `npm init`. This will be used to set up a new or existing npm package. You can customize the fields, or you can continue to press the enter key until you see `0 vulnerabilities`.
    * This will create a `package.json` file and a `package-lock.json` file. 
    * Install the Inquirer package using: `npm install inquirer`
    * This will create a `node_modules` file. 
    * You are now ready to create your `index.js` file: `touch index.js`

6. Set up Inquirer package within your newly created `index.js` file.
```
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const { captureRejectionSymbol } = require("events");
const { fileURLToPath } = require('url');

const writeFileAsync = util.promisify(fs.writeFile);
```
7. Copy and paste the code (or fork it) from the `index.js` within this repository.

8. Save file. Run `index.js` file within terminal using `node index.js`

9. If working, answer the prompts by entering your own inputs via the command line. 

10. A file called **New_README.md** will be created upon completeion. 

## Usage

Enter your inputs via the command-line...Your inputs should look like this in the terminal before your README is generated.
![view of terminal prompts](./imgs/prompts-terminal-view.png)

Your inputs should look like this when you generate the README and it converts into markdown format.
![code to md file](./imgs/new-readme-sample-md-file.png)

The final result of your newly generated README.md should look like this: 
![New README Gif](New-generated-readme.gif)

Watch a complete run through of the application, or watch on YouTube [here](https://www.youtube.com/watch?v=Ksv3WGhtsKs&feature=youtu.be)

![README run through Gif](imgs/walk-thru-readme-generator.gif)

## Credits 

Reference articles:

- ["How to use the Inquirer Node package"](https://www.educative.io/edpresso/how-to-use-the-inquirer-node-package)
- ["The Node.js fs module"](https://nodejs.dev/learn/the-nodejs-fs-module)
- ["Promise"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- ["Await"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- 
## Contributing

[Dana Smooke]("https://github.com/dsmooke")

## License 

[MIT](MITLicense.txt)

---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
