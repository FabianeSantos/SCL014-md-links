// total = 0;
// sumandos = "";
// for (i = 2; i < process.argv.length; i++) {
//   total += +process.argv[i];
//   if (i > 2) {
//     sumandos += " + ";
//   }
//   sumandos += Number(process.argv[i]);
// }
// //console.log(sumandos+" = " +total);
// console.log(total);

// const frutas = ["platano", "manzana", "platano", "pera"];
// frutas.forEach((item) => {
//   console.log(item);
// });

const { frutas, dinero } = require("./dos");
frutas.forEach((item) => {
  console.log(item);
});
console.log(dinero);
