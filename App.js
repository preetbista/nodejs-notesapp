const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./Notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    handler: () => {
        console.log('Removing the note!')
    }
})

//create list command 
yargs.command({
    command: 'list',
    describe: 'List your note',
    handler: () => {
        console.log('Listing out all notes!')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a list',
    handler: () => {
        console.log('Reading the list!')
    }
})

yargs.parse()

// console.log(yargs.argv)

