const name = require('./util.js')
const add = require('./util.js')
const fonksiyon = require ('./note.js')
const validator = require('validator')
const chalk = require('chalk')

console.log(name)

const sum = add(4,-2)
console.log(sum)

const mesaj = fonksiyon()
console.log(mesaj)

console.log(validator.isEmail('can@btu.edu'))
//@ varken true yokken false çıktısını verecek.
console.log(validator.isURL('www.btu.edu'))
console.log(chalk.green.bold('Success!'))
console.log(chalk.red.bold('Error'))