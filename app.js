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
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})
// Remove

yargs.command({
    command: 'remove',
    describe: 'Remove notes',
    handler: function () {
        console.log('Removing')
    }
})

// Read

yargs.command({
    command: 'read',
    describe: 'Gets all Notes',
    handler: function () {
        console.log('Reading')
    }
})

// List

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: function () {
        console.log('Listing')
    }
})

// ************************** //

yargs.parse()

