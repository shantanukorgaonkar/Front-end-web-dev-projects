const chalk =require('chalk')

const success=chalk.bold.green.bgBlack 

const error=chalk.bold.bgRed.white

const getNotes=require('./notes.js')

const msg =getNotes()
console.log(success(msg))
console.log(error('Error 404'))
