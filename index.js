const validatePath = require("./md-links");
const chalk = require("chalk");
const validateLinks = require("./validate");

// variables personalizadas
const pathFile = process.argv[2];
const firstArg = process.argv[3];
const secondArg = process.argv[4];

// valida si el usuario ingresó alguna entrada. Si hay entrada, la valida.
if (pathFile && firstArg === "--stats" && secondArg === "--validate") {
  // console.log("validate y stats");
  validatePath(pathFile)
    .then((response) => {
      validateLinks(response, true);
      validatePath(pathFile).then((response) => {
        validateLinks(response);
      });
    })
    .catch((error) => {
      console.log(chalk.bgRed(error));
    });
} else if (pathFile && firstArg === "--validate" && secondArg === "--stats") {
  // console.log("validate y stats");
  validatePath(pathFile)
    .then((response) => {
      validatePath(pathFile).then((response) => {
        validateLinks(response);
      });
      validateLinks(response, true);
    })
    .catch((error) => {
      console.log(chalk.bgRed(error));
    });
} else if (pathFile && firstArg === "--validate") {
  // console.log("sou validate");
  validatePath(pathFile)
    .then((response) => {
      validateLinks(response);
    })
    .catch((error) => {
      console.log(chalk.bgRed(error));
    });
} else if (pathFile && firstArg === "--stats") {
  // console.log("sou stats");
  validatePath(pathFile)
    .then((response) => {
      validateLinks(response, true);
    })
    .catch((error) => {
      console.log(chalk.bgRed(error));
    });
} else if (pathFile) {
  // console.log("sou ruta");
  validatePath(pathFile)
    .then((response) => {
      // console.log("index ---->");
      response.map((res) => {
        console.log(`
          ${chalk.bgCyan.bold("href:")} ${chalk.cyan(res.links)},
          ${chalk.bgMagenta.bold("text:")} ${chalk.magenta(res.texto)},
          ${chalk.bgGreen.bold("file:")}  ${chalk.green(res.file)},
          `);
      });
    })
    .catch((error) => {
      console.log(chalk.bgRed(error));
    });
} else {
  console.log(
    chalk.bgRed(
      "¡Ingrese la ruta de un archivo de extensión markdown para empezar!"
    )
  );
}

// console.table(Object.entries(console).sort());
