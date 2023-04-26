// Pokemon list array
let pokemonList = [
  { name: 'Bulbasaur', type: 'grass', level: 10 },
  { name: 'Charmander', type: 'fire', level: 8 },
  { name: 'Squirtle', type: 'water', level: 7 }
];

// Select element
let pokemonListElement = document.querySelector('.pokemon-list');

// Define the IIFE
let pokemonApp = (function() {
  function addListItem(pokemon) {
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    // console.log(listItem);
    pokemonListElement.appendChild(listItem);
    button.addEventListener('click', function() {
        showDetails(pokemon);
      });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  // Loop through the pokemonList array and call the addListItem function for each object
  pokemonList.forEach(function(pokemon) {
    addListItem(pokemon);
  });
  
  // Return an object with the addListItem function as a method
  return {
    addListItem: addListItem
  };
})();

// Call the addListItem method outside of the IIFE and pass a Pokemon object as a parameter
pokemonApp.addListItem({ name: 'Pikachu', type: 'electric', level: 12 });