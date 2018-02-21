// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione

// declara el prompt
var password = prompt("Ingresa tu contraseña");

function user (password) {
// escribe tu código aqui...
  if(password === "laboratoria"){
    console.log("verdadero");
  } else {
    console.log("falso");
  }
}

user (password);




// comenta todo lo anterior y escribelo en ES6


let password = prompt("Ingresa tu contraseña");

const user = user => {
  if(password === "laboratoria"){
    console.log("verdadero");
  } else {
    console.log("falso");
  }
}
