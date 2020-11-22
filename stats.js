const fetch = require("node-fetch");
const chalk = require("chalk");

const stats = (links) => {
  let allLinks = links.map((link) => link.href);
  let linksTotal = allLinks.length;
  let linksUnique = [...new Set(allLinks)].length;

  // let linksUnique = [];
  // links.filter((link) => {
  //   if (link.response === "OK") {
  //     linksUnique.push(link.response);
  //   }
  // });
  // linksUnique = linksUnique.length;

  let linksBroken = [];
  links.filter((link) => {
    if (link.response === "Not Found") {
      linksBroken.push(link.response);
    }
  });
  linksBroken = linksBroken.length;

  console.log(`
  ${chalk.bgCyan.bold("Total:")} ${chalk.cyan(linksTotal)},
  ${chalk.bgMagenta.bold("Unique:")} ${chalk.magenta(linksUnique)},
  ${chalk.bgGreen.bold("Broken:")} ${chalk.green(linksBroken)},
  
  `);

  // console.log("STATS ----->>>>", result);
};

module.exports = stats;
