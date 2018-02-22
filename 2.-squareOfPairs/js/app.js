
// ES5 ------------------------------------------------------
//
/*
function square(array) {
  var squareArray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] > 0){
      squareArray.push(array[i] * array[i]);
    } else {
      squareArray.push(array[i])
    }
  }
  return squareArray
}

//var number = [2, 4, 6];
var number = [-3, 2, -8, 12, 5];
// var number = [1, 2, 3, 4, 5];

console.log(square(number));
*/

// ES6 ------------------------------------------------------
//

const square = array => {
  let squareNumber = array.map(number => {
    if(number > 0){
      return number * number;
    } else {
      return number
    }
  })
  return squareNumber
}


//var number = [2, 4, 6];
var number = [-3, 2, -8, 12, 5];
// var number = [1, 2, 3, 4, 5];

console.log(square(number));
