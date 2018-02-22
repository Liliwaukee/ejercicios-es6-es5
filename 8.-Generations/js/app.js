                        // ES5


// 1.1- Mostrar en la consola un mensaje que diga... "El numero de generaciones es (numero de generaciones en total)"

var generations = function(data){
  var numberOfGenerations = Object.keys(data.generaciones).length;
  return "El número de generaciones es: " + numberOfGenerations;
}

console.log(generations(laboratoria));



// 1.2- Mostrar en la consola un mensaje que diga ... "La (numero de generacion) tuvo (numero de alumnas en esa generacion) alumnas" [Un mensaje por cada generacion]

var studentsGenerations = function(data) {
  for (generation in data.generaciones) {
    var students = data.generaciones[generation].alumnas;
    console.log("La " + generation + " generación tuvo " + students + " alumnas");
  }
}
studentsGenerations(laboratoria)
//console.log(studentsGenerations(laboratoria));
//laboratoria.generaciones.primera.alumnas


// 1.3- Mostrar en la consola un mensaje que diga "El promedio de edad de la (numero de generacion) generacion es de (promedio de numero de alumas en la generacion)" [un mensaje por generacion]

var averageAge = function(data) {
  for (generation in data.generaciones) {
    var age = data.generaciones[generation]["edad-promedio"];
    console.log("El promedio de edad de la " + generation + " generación es de " + age);
  }
}

averageAge(laboratoria)





// 1.4- Mostrar en la consola un mensaje que diga "El nombre mas comun de la (numero de generacion) generacion es: (nombre mas comun de esa generacion)"

var famedName = function(data) {
  for (generation in data.generaciones) {
    var name = data.generaciones[generation]["nombre-mas-comun"];
    console.log("El nombre más común de la " + generation + " generación es " + name);
  }
}

famedName(laboratoria)





// Alcance 2...


// 2.1- Mostrar en la consola un mensaje que diga... ""El numero total de alumnas en todas las generaciones es: (total de alumnas de todas las generaciones) y en promedio (el promedio de alumnas por generacion) mujeres  cursan Laboratoria cada generacion"


var totalStudentsGenerations = function(data) {
  var numberGenerations = Object.keys(data.generaciones).length;
  var totalStudents = 0;
  for (generation in data.generaciones) {
     totalStudents += data.generaciones[generation].alumnas;

  }

  return "El número total de alumnas en todas las generaciones es: " + totalStudents + "  y en promedio " + totalStudents/numberGenerations + " mujeres cursan Laboratoria cada generación"
   ;
}

console.log(totalStudentsGenerations(laboratoria));




// 2.2- Mostrar en consola un mensaje que diga "La edad promedio de las mujeres que cursan laboratoria es:  (promedio de la edad promedio de todas las generaciones)"

var ageAverageGenerations = function(data) {
  var numberGenerations = Object.keys(data.generaciones).length;
  var totalAge = 0;
  for (generation in data.generaciones) {
    totalAge += data.generaciones[generation]["edad-promedio"]
  }
  return "La edad promedio de las mujeres que cursan laboratoria es: " + totalAge/numberGenerations + " años."
}

console.log(ageAverageGenerations(laboratoria));



// 2.3- Mostrar en consola un mensaje que diga "En las (numero de generaciones) los nombres mas comunes fueron (los nombres mas comunes de todas las generaciones separados por una (,)).

var mostPopularName = function(data) {
  var names = [];
  var numberGenerations = Object.keys(data.generaciones).length;
  for (generation in data.generaciones) {
    names.push(data.generaciones[generation]["nombre-mas-comun"]);
   }
   return "En las " + numberGenerations + " generaciones los nombres más comúnes fueron " + names;
}

console.log(mostPopularName(laboratoria));


// Alcance 3....

// Crear botones para disparar cada uno de los puntos y pintarlos por medio del DOM


var containerData = document.getElementById("data-container")
var dataInfo = document.createElement("p");
containerData.appendChild(dataInfo);


var btnGenerationNumber = document.getElementById("generation-number");
var btnStudents = document.getElementById("students");
var btnAgeAverage = document.getElementById("age-average");
var btnPopularName = document.getElementById("popular-name");
var btnTotalStudents= document.getElementById("total-students");
var btnTotalAgeAverage = document.getElementById("total-age-average");
var btnMostPopularName = document.getElementById("most-popular-name");





// Alcance 4....

// Agregar la siguiente generacion a la data desde una funcion obteniendo los datos por medio de prompts:

//  "sexta", "alumnas": 120, "edad-promedio": 28, "nombre-mas-comun" : "Silvana"





// ----------------------------Ahora comenta todo el código anterior y escribelo en ES6----------------
