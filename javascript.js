//reverse
let texto = ["hola", "Chau"];

const reversive = () => {
  return texto.reverse("");
};
console.log(reversive());
//funciones
//anonima
const anonimo = function () {
  console.log("Funcion anónima");
};
//declarada
function declarada() {
  console.log("Funcion declarada");
}
//arrow
const arrow = () => {
  console.log("Funcion flecha");
};

//async await asincronica donde a la funcion le asignamos el async y con el try ejecutamos el codigo y verificamos que no haya errores dentro si hay errores lo manda al catch, dentro de la funcion usamos el await

// async function ejemplo(req, resp) {
//   try {
//     const idUsuario = await User.findById(req.userID);
//     const task = await Task.findById(user.taskID);
//   } catch (e) {
//     console.log(e)
//     resp.send(e) //enviamos el error donde necesitemos o queremos
//   }
// }
