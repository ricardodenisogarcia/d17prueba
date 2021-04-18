// Escribir acá la función cuentaPalabras
function cuentaPalabras(texto) {
  var resultado = [];
  var textoAEvaluar = texto;
  var textoTroceado = textoAEvaluar.split(" ");
  console.log(textoTroceado); // imprime el array con cada palabra
  var cantidadDePalabras = textoTroceado.length;
  console.log(cantidadDePalabras); //imprime la cantidad de palabras del array, 30
  console.log(textoTroceado[4].charAt()); // imprime la primer letra de la 4ta palabra, "a"

  for (var i = 0; i < cantidadDePalabras; i++) {
    var conA = 0;
    var letraAEvaluar = textoTroceado[i].charAt();
    var letraA = "a";
    if (letraAEvaluar == letraA) {
      // por lo que lei se usa el == y no el === porque este ultimo daria false.
      conA++;
    }
  }
  console.log(conA); //algo anda mal, porque imprime 0
  var palabrasConA = conA;
  resultado.push({
    cantidadDePalabras: cantidadDePalabras,
    palabrasConA: palabrasConA,
  });
  console.log(
    "el resultado es: " + resultado.cantidadDePalabras,
    resultado.palabrasConA
  );
  return resultado;
}

// no modificar esta funcion
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}
function main() {
  testCuentaPalabras(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere."
  );
}
console.log(
  cuentaPalabras(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere."
  )
);
//main();
