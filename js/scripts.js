
var pokemonList = [{name: "Bulbasaur", weight: "6.9kg", types: ['grass', 'poisson']},
    {name: "Ivysaur", weight: "13kg", types: ['grass', 'poison']},
    {name: "Charmander", weight: "8.5kg", types: 'fire'},
];

document.write("<ul>");

for (var i=0; i<pokemonList.length; i++) {
    document.write(`<li>${pokemonList[i].name} - weight: ${pokemonList[i].weight} - types: ${pokemonList[i].types.join(", ")}</li>`);
}
  
document.write("</ul>");
  