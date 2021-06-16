const fs = require('fs')
const chalk = require('chalk')

let getNotes;
getNotes = function () {
    const data = process.argv
    return "You notes Are: " + data[2]
};

let appendNotes;
appendNotes = function () {
    fs.appendFileSync('./notes.txt', "\n" + process.argv[3])
    console.log(chalk.bgGreen.bold("Successful"))
    return 1
};

module.exports = {
    getNotes,
    appendNotes
}