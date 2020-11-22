const fetch = require("node-fetch");
const stats = require("./stats");
const chalk = require("chalk");

const validateLinks = (allLinks) => {
  allLinks.map((element) => {
    return fetch(element.links).then((res) => {
      console.log(`
        ${chalk.bgCyan.bold("href:")} ${chalk.cyan(res.url)},
        ${chalk.bgMagenta.bold("text:")} ${chalk.magenta(element.texto)},
        ${chalk.bgGreen.bold("file:")}  ${chalk.green(element.file)},
        ${chalk.bgBlue.bold("status:")}  ${chalk.blue(res.status)} ,
        ${chalk.bgYellow.bold("statusText:")}  ${chalk.yellow(res.statusText)}
        `);
    });
  });

  // Promise.all(validateFetch).then((respArray) => {
  //   stats(respArray);
  // });
};

// ${chalk.bgBlue.bold("status:")}  ${chalk.blue(res.status)} ,
// ${chalk.bgYellow.bold("statusText:")}  ${chalk.yellow(res.statusText)}

module.exports = validateLinks;
