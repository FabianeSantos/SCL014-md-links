const fetch = require("node-fetch");
const chalk = require("chalk");

const stats = (links) => {
  let allLinks = links.map((link) => link.href);
  let linksTotal = allLinks.length;
  let linksUnique = [...new Set(allLinks)].length;
  let linksBroken = [];
  links.filter((link) => {
    if (link.response === "fail") {
      linksBroken.push(link.response);
    }
  });
  linksBroken = linksBroken.length;
  let result = {
    Total: linksTotal,
    Unique: linksUnique,
    Broken: linksBroken,
  };
  console.log("STATS ----->>>>", result);
};

module.exports = stats;
