const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "The title of the note",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})
// Remove

yargs.command({
    command: 'remove',
    describe: 'Remove notes',
    builder: {
        title: {
            describe: "The Title of the note to be removed",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

// Read

yargs.command({
    command: 'read',
    describe: 'Gets all Notes',
    builder: {
        title: {
            describe: "The title of the note to be printed",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// List

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler() {
        notes.listNotes()
    }
})

// ************************** //

yargs.parse()

