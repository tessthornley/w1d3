var chalk = require("chalk");

var message = chalk.bold.yellow.bgMagenta.underline("Hello ") + chalk.blue.bold.bgGreen("World");
console.log(message);