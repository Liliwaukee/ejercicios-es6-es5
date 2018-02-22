
// ES5 ------------------------------------------------------
//
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


// ES6 ------------------------------------------------------
//

const [teamName, product] = [
  'formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
];

const formatTeamMessage = (teamName, people) => {

  return `Hay ${people.length} personas en el equipo de formación.
Ellos son: ${people.join(", ")}.`
}

console.log(formatTeamMessage(teamName, product));
