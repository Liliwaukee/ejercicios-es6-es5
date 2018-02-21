

         // ES5

// declaracion de las variables
/*
var [teachersTeam, members] = [
  'formacion',
     ['Amalia',
      'Karla',
      'Silvana',
      'Manu',
      'Jonh',
      'Mike'
    ],
];

var formatTeamMessage = function (teachersTeam, members) {
  var message = 'Hay ' + members.length + " " + 'personas en el equipo de' + " " + teachersTeam + "\n" + "Ellos son" + " " + members.join(", ") + ".";
  console.log(message)
  return message;
};

formatTeamMessage(teachersTeam, members);
*/
// Ahora comenta todo el código anterior y escribelo en ES6


                            //  ES6
// declaracion de las variables
const [teamName, product] = [
  'formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
];


const formatTeamMessage = (teamName, people) => {
//   // escribe tu código en ES6 aqui...

  let message = `Hay ${people.length} personas en el equipo de formación.
  
Ellos son: ${people.join(", ")}.`
console.log(message);

  const container = document.getElementById("team");
  let exerciseTitle = document.createElement("h3");
  let exercise = document.createElement("p");

  exerciseTitle.textContent = "The team";
  exercise.innerHTML = message;

  container.appendChild(exerciseTitle);
  container.appendChild(exercise);

}

formatTeamMessage(teamName, product);
