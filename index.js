const validatePath = require("./md-links");
const chalk = require("chalk");
const validateLinks = require("./validate");

// variables personalizadas
const pathFile = process.argv[2];
const firstArg = process.argv[3];
const secondArg = process.argv[4];

// valida si el usuario ingresó alguna entrada. Si hay entrada, la valida.
if (
  (pathFile && firstArg === "--validate" && secondArg === "--stats") ||
  (firstArg === "--stats" && secondArg === "--validate")
) {
  console.log("sou validate e stats");
  // validatePath(pathFile);
} else if (pathFile && firstArg === "--validate") {
  // validatePath(pathFile);
  console.log("sou validate");
} else if (pathFile && firstArg === "--stats") {
  console.log("sou stats");
  // validatePath(pathFile);
} else if (pathFile) {
  console.log("sou ruta");
  validatePath(pathFile);
} else {
  console.log(
    chalk.bgRed(
      "¡Ingrese la ruta de un archivo de extensión markdown para empezar!"
    )
  );
}
