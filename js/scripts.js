
let repository = [
    {name: "Bulbasaur",
    weight: "6.9kg",
    height: "0.7",
    types: ['grass', 'poisson']},

    {name: "Ivysaur",
    weight: "13kg",
    height: "1.7",
    types: ['grass', 'poison']},

    {name: "Charmander",
    height: 1,
    weight: "8.5kg",
    types: 'fire'},
];

document.write("<ul>");

for (var i=0; i<repository.length; i++) {
    var pokemon = repository[i];
    if (pokemon.height >= '1.7') {
        console.log(pokemon.name);
        var nameString = "This pokemon's name is " + pokemon.name + ", “Wow, that’s big!”";
    } else {
        var nameString = "This pokemon's name is " + pokemon.name;
    }
    document.write('<li>' + nameString + '</li>');
}
  
document.write("</ul>");
  