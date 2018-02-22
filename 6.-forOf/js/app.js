                            // ES5

// declara la variable
/*
var computeSumOfAllElements = function(array){
  var totalSum = 0;
  for(var i = 0; i < array.length; i++){
    totalSum += array[i]
  }
  var average = totalSum / array.length;
  return "El promedio de este arreglo es: " + average ;
}

var numbers = [10, 20, 30, 20, 30, 40, 60];
console.log(computeSumOfAllElements(numbers));
*/

//imprimir en consola el mensaje... "El promedio de este arreglo es: 30" "210"
//ES6
// Comenta todo lo anterior y escribelo en ES6

const computeSumOfAllElements = array => {


  let sumTotal = 0;
  for (let value of array) {
    sumTotal += value
  }
  return sumTotal/array.length
}

var numbers = [10, 20, 30, 20, 30, 40, 60];
console.log(computeSumOfAllElements(numbers));
