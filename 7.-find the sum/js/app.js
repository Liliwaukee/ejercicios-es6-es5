
// ES5 ------------------------------------------------------
//
/*
var findPairForSum = function(array, sumNum){
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      if(array[i] + array[j] === sumNum){
        return [array[i], array[j]]
      }
    }
  }
}

var numbers = [3, 34, 4, 12, 5, 2];
console.log(findPairForSum(numbers, 9));
*/


// ES5 ------------------------------------------------------
//

const findPairForSum = (array, sumNum) => {
  for (let a of array) {
    for (let b of array) {
      if(a + b === sumNum){
        return [a,b]
      }
    }
  }
}

let numbers = [3, 34, 4, 12, 5, 2];
console.log(findPairForSum(numbers, 9))
