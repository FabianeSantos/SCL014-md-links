const fs = require("fs");
const path = require("path");
const mk = require("./regularExpression");
const chalk = require("chalk");

// valida la ruta del archivo
const validatePath = (pathFile) => {
  // arregla el formato de la ruta link documentacion: https://nodejs.org/api/path.html#path_path_resolve_paths
  let pathResolve = path.resolve(pathFile);
  console.log("resolve ruta", pathResolve);

  // normaliza la ruta (ej.: //-> /) link documentación: https://nodejs.org/api/path.html#path_path_normalize_path
  let pathNormalize = path.normalize(pathResolve);
  console.log("normalize ruta", pathNormalize);

  // ja resolvi y normalizei. Preciso saber se é um arquivo ou diretorio.
  // valida si la ruta existe.
  return new Promise((resolve, reject) => {
    fs.readFile(pathNormalize, "utf-8", (err, data) => {
      if (err) {
        reject("¡Esa no es una ruta valida!");
      } else {
        resolve(isMarkdown(data, pathNormalize));
        // console.log("data", data);

        console.log("readFile success", pathNormalize);
      }
    });
  });
};

// verificar cual es la extensión
const isMarkdown = (file, pathFile) => {
  let result;
  console.log(path.extname(pathFile));
  if (path.extname(pathFile) === ".md") {
    console.log("readFile");
    result = mk(file, pathFile);
    return result;
  } else {
    console.log(
      chalk.bgRed(
        "Extensión invalida. Ingrese una ruta de un archivo de extensión markdown"
      )
    );
  }
};
module.exports = validatePath;

// Parametro es la idea que esperas recibir. (incognita).
// Argumento es cuando uno llama la función y le pasa el valor que se espera.
// ctrl k -U -> ctrl k- c no es necesario selecionar la linea
