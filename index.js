// module.exports = () => {
//   // ...
// };

//instalar modulo axios
const axios = require("axios");

const greet = (name) => "Hello" + name;
// hacer una petición a una api, que contiene datos
// me retorna una promesa
const users = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/users?_limit=2"
  );
  return res.data;
};
users().then((res) => console.log(res));

module.exports = { users, greet };
