const fetch = require("node-fetch");
const stats = require("./stats");
const chalk = require("chalk");

module.exports = (validateLinks) => {
  const validateFetch = validateLinks.map((element) => {
    return fetch(element.links).then((res) => {
      console.log(`{
        ${chalk.bgCyan.bold("href:")} ${chalk.cyan(res.url)},
        ${chalk.bgMagenta.bold("texto:")} ${chalk.magenta(element.texto)},
        ${chalk.bgGreen.bold("file:")}  ${chalk.green(element.file)},
        ${chalk.bgBlue.bold("status:")}  ${chalk.blue(res.status)} ,
        ${chalk.bgYellow.bold("statusText:")}  ${chalk.yellow(res.statusText)}
      };`);
    });
  });

  // Promise.all(validateFetch).then((respArray) => {
  //   stats(respArray);
  // });
};
// ${res.status === "200"} ? ${chalk.bgBlue("status:")}  ${chalk.blue(
//   res.status
// )} ,
