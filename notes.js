const fs = require('fs')
const chalk = require('chalk')

let loadNotes;
loadNotes = () => {
    try {
        const data = fs.readFileSync('notes.json')
        const dataJSON = data.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}

let saveNotes;
saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

let addNotes;
addNotes = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse("Note added"))
        saveNotes(notes)
    } else {
        const errorTitleTaken = "errorTitleTaken: This Title is taken, please run again with different title."
        console.log(chalk.red.bold(errorTitleTaken))
    }

}

let removeNotes;
removeNotes = function (title) {
    const notes = loadNotes()
    const notesDeleted = notes.filter((note) => {
        if (note.title === title) {

        } else {
            return note
        }
    })
    if (notesDeleted.length === notes.length) {
        console.log(chalk.bgRed("No note has been removed"))
    } else {
        console.log(chalk.bgGreen("Note with Title: " + title + " has been removed!"))
    }
    saveNotes(notesDeleted)
}

let listNotes;
listNotes = () => {
    console.log(chalk.bold.blue("Your Notes"))
    const notes = loadNotes()
    notes.forEach((element) => console.log("Title: " + element.title))
}

let readNote;
readNote = (title) => {
    const notes = loadNotes()
    const noteInterest = notes.find((note) => note.title === title)
    if (noteInterest) {
        console.log(chalk.red.bold(noteInterest.title))
        console.log(chalk.blue.bold(noteInterest.body))
    } else {
        const errorTitleNotFound = chalk.red("errorTitleTaken: This Title is Not Found, please run \n") + chalk.blue("> node app.js list") + chalk.red("\nTo see the available titles")
        console.log((errorTitleNotFound))
    }
}

module.exports = {
    addNotes: addNotes,
    saveNotes: saveNotes,
    loadNotes: loadNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}