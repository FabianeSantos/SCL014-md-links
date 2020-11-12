const readFile = require("./md-links");
const file = process.argv[2];
const chalk = require("chalk");

if (file) {
  readFile(file);
} else {
  console.log(chalk.bgRed("¡Ingrese un archivo para empezar!"));
}
