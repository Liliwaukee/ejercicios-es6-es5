
// ES5 ------------------------------------------------------
//
var word = "este ejercicio pasa a mayusculas la primer letra de cada palabra";

var capitalize = function(str) {
  var newStr = str.split(" ");
  var result = [];
  for(var i = 0; i < newStr.length; i++){
    var primerLetra = newStr[i].charAt(0).toUpperCase();
    var mediaPalabra = newStr[i].slice(1, newStr[i].length);
    result.push(primerLetra + mediaPalabra);
  }
  console.log(result.join(" "));
}

capitalize(word);


// ES6 ------------------------------------------------------
//
/*
const word = "este ejercicio pasa a mayusculas la primer letra de cada palabra";

const capitalize = str => {
  let newStr = str.split(" ");
  let result = [];
    newStr.forEach(palabra=> {
      let primerLetra = palabra.charAt(0).toUpperCase();
      let mediaPalabra = palabra.slice(1, palabra.length);
      result.push(primerLetra + mediaPalabra);
    });
    console.log(result.join(" "));
   };

capitalize(word);
*/
