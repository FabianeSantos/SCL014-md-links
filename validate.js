const fetch = require("node-fetch");
const stats = require("./stats");
const chalk = require("chalk");

const validateLinks = (linkArray, isStats) => {
  let linksWithStatus = [];
  linkArray.map((element, i) => {
    return fetch(element.links).then((res) => {
      linksWithStatus.push({
        href: res.url,
        text: element.texto,
        file: element.file,
        status: res.status,
        response: res.statusText,
      });
      // console.log("size", linkArray.length);
      // console.log("index", i);
      // console.log("logica", i === linkArray.length - 1);
      if (isStats) {
        if (i === linkArray.length - 1) {
          stats(linksWithStatus);
        }
      } else {
        // validate
        console.log(`{
          ${chalk.bgCyan.bold("href:")} ${chalk.cyan(res.url)},
          ${chalk.bgMagenta.bold("text:")} ${chalk.magenta(element.texto)},
          ${chalk.bgGreen.bold("file:")}  ${chalk.green(element.file)},
          ${chalk.bgBlue.bold("status:")}  ${chalk.blue(res.status)} ,
          ${
            res.statusText === "OK"
              ? chalk.bgYellow.bold("statusText:") +
                chalk.yellow(res.statusText)
              : chalk.bgRed.bold("statusText: ") + chalk.red(res.statusText)
          }
         } `);
      }
    });
  });

  // Promise.all(validateFetch).then((respArray) => {
  //   stats(respArray);
  // });
};

module.exports = validateLinks;

// ${chalk.bgBlue.bold("status:")}  ${chalk.blue(res.status)} ,
// ${chalk.bgYellow.bold("statusText:")}  ${chalk.yellow(res.statusText)}
