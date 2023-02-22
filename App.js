const chalk = require('chalk')
const getNote = require('./Notes.js')

const disp = getNote()
console.log(disp)

const blueMsg = chalk.blue('Hello') + chalk.green('world') + chalk.red('!');
console.log(blueMsg);
