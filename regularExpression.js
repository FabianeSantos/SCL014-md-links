#!/usr/bin/env node
const validateLinks = require("./validate");
const mk = (file, pathFile) => {
  // console.log("cheguei");
  const contentNoSpace = file.split("\n");

  const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm;
  const singleMatch = /\[([^\[]+)\]\((.*)\)/;
  const linkArray = [];

  contentNoSpace.forEach((eachLine) => {
    // console.log("element -------------", eachLine);
    const links = eachLine.match(regexMdLinks);
    // console.log("links>>>>", links);

    // si es diferente de null es link!
    if (links !== null) {
      for (let i = 0; i < links.length; i++) {
        const text = singleMatch.exec(links[i]);
        if (text[2].includes("https://")) {
          linkArray.push({
            links: text[2],
            texto: text[1].slice(0, 51).toUpperCase(),
            file: pathFile,
          });
          // console.log("text", text[1]);
        }
      }
    }
  });
  return linkArray;
  // validateLinks(linkArray);
};
module.exports = mk;
