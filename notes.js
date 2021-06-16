const fs = require('fs')
require('chalk');
let loadNotes;
loadNotes = function () {
    try {
        const data = fs.readFileSync('notes.json')
        const dataJSON = data.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}

let addNotes;
addNotes = function (title, body) {
    const notes = loadNotes()
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
}

let saveNotes;
saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNotes: addNotes,
    saveNotes: saveNotes,
    loadNotes: loadNotes
}