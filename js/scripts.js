alert("Do you want to see the list pokemon?")
var pokemonList = [{Name: "Bulbasaur", Weight: "6.9kg", Type: ['grass', 'poisson']},
    {Name: "Ivysaur", Weight: "13kg", Type: ['grass', 'poison']},
    {Name: "Charmander", Weight: "8.5kg", Type: 'fire'},
];

    // alert("Click here to see pokemin list");
    
document.write("<ul>");

for (var i=0; i<pokemonList.length; i++) {
    document.write(`<li>${pokemonList[i].Name} - Weight: ${pokemonList[i].Weight} - Type: ${pokemonList[i].Type.join(", ")}</li>`);
}
  
document.write("</ul>");
  