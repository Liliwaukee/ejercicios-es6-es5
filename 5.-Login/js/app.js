
// ES5 ------------------------------------------------------
//
/*
var password = prompt("Ingresa tu contraseña");

function user (password) {
  if(password === "laboratoria"){
    return "verdadero";
  } else {
    return "falso";
  }
}

console.log(user());
*/


// ES6 ------------------------------------------------------
//

let password = prompt("Ingresa tu contraseña");

const user = user => {
  if(password === "laboratoria"){
    return "verdadero";
  } else {
    return "falso";
  }
}

console.log(user());
