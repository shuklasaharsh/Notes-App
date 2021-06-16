// We start by Loading in the first module
// This module is the file system module
// fs is the code for FileSystem we store the module in a variable
// const fs = require('fs')
// We use the WriteFileSync command to save a file called notes.txt
// fs.writeFileSync('notes.txt', 'This file was created with NODE.JS')

// No. 9 Challenge > Append a message to notes.txt
/*
1. Use appendFileSync to append the file.
2. Comment out the current code
 */

// fs.appendFileSync('notes.txt', '\nThis file has been appended')

// Challenge completed successfully - dated: 14th June, 21:26

// We load in a JAVA script file
/*const add = require('./utils')
console.log(
    'App.js'
)

console.log(add(2,3))*/

/*
* Challenge 10 > Define and use a function in a new file
* 1. Create a file called Notes.js
* 2. Create a function called get notes that returns, "Your notes"
* 3. Export the function
* 4. Load this in app.js
* */

/*const notes = require('./notes')

console.log(notes())*/

// Challenge Completed successfully - dated: 14th June, 21:40
/*
const chalk = require('chalk')
console.log("App.js")
const validator = require('validator')

console.log(validator.isEmail('Example.com'))
console.log(validator.isURL('https://www.github.com'))

console.log(chalk.bold.green.inverse("Successfully Downloaded Chalk2.4.1"))

*/
const notes = require('./notes')
const chalk = require('chalk')

let getCommand;
getCommand = function () {
    return process.argv[2]
};

let checkCondition;
checkCondition = function () {
    if (getCommand() === "add") {
        notes.appendNotes()
    } else {
        console.log(chalk.red.bold("Exit with Status -1"))
    }
};
console.log(getCommand())
checkCondition()
