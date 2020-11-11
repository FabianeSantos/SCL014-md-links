// let fs = require("fs");

// const carpetas = () => {
//   fs.readdir("./src", { withFileTypes: true }, (err, items) => {
//     if (err) {
//       console.log("La carpeta ingresada no existe!!!!");
//     } else {
//       console.log(items);
//     }
//   });
// };
// carpetas();

// const archivos = () => {
//   fs.readFile("./README.md", "utf-8", (err, data) => {
//     if (err) {
//       console.log("La ruta ingresada nos es valida!!!!");
//     } else {
//       console.log(data);
//     }
//   });
// };
// archivos();

// const http = require("http");
// const url = process.argv[2];
// console.log(url);
// console.log(http);

// http.get(url, function callback(respuesta) {
//   const { statusCode } = respuesta;
//   console.log(statusCode);

//   respuesta.on("data", (param) => {
//     console.log(param.toString());
//   });
// });

// const RegEx = /https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*/g

// const express = require("express");
// const morgan = require("morgan");
// const app = express();

// app.use(morgan(":method :url"));

// app
//   .get("/", (req, res) => {
//     console.log(res.send("heloooo"));
//   })
//   .listen(3000);

const marked = require("marked");
const fs = require("fs");
const request = require("request-promise");
const lista = {
  ruta: process.argv[2],
  link: process.argv[4],
  texto: process.argv[5],
};
console.log(lista);

const carpetas = () => {
  fs.readdir("./src", { withFileTypes: true }, (err, items) => {
    if (err) {
      console.log("La carpeta ingresada no existe!!!!");
    } else {
      console.log(items);
    }
  });
};
carpetas();

const archivos = () => {
  fs.readFile("./README.md", "utf-8", (err, data) => {
    data.map((item) => item);
    if (err) {
      console.log("La ruta ingresada nos es valida!!!!");
    } else {
      console.log(data);
    }
  });
};
archivos();
