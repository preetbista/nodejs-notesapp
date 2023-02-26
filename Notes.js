const fs = require('fs')
const chalk = require("chalk");

const getNote = () => {
    return "Your notes...";
}
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New Note Added!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}
const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green('Note removed successfully!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red('No note found!'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNotes: removeNotes
}