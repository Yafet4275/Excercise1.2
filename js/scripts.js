let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Bulbasaur', type: ['grass', 'poison'], height: 0.7},
    {name: 'Charmander', type: ['fire'], height: 0.6},
    {name: 'Squirtle', type: ['water'], height: 0.5}
  ];

  return {
    getAll: function() {
      return pokemonList;
    },
    add: function(newPokemon) {
      if (typeof newPokemon === 'object' && Object.keys(newPokemon).length === 3 && 
          typeof newPokemon.name === 'string' && typeof newPokemon.type === 'object' &&
          Array.isArray(newPokemon.type) && newPokemon.type.length > 0 &&
          typeof newPokemon.height === 'number') {
        pokemonList.push(newPokemon);
      } else {
        console.log('You can only add an object with keys "name", "type", and "height" to the pokemonList.');
      }
    },
    findByName: function(name) {
      let filteredList = pokemonList.filter(function(pokemon) {
        return pokemon.name.toLowerCase() === name.toLowerCase();
      });
      return filteredList.length ? filteredList[0] : null;
    }
  };
})();

pokemonRepository.add({name: 'NewPokemon', type: ['newFeature'], height: 0.3});
pokemonRepository.add('Invalid data');

let pokemonListElement = document.getElementById('pokemonList');
      pokemonRepository.getAll().forEach(function(pokemon) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<h2>' + pokemon.name + '</h2><p>Type: ' + pokemon.type.join(', ') + '</p><p>Height: ' + pokemon.height + '</p>';
        pokemonListElement.appendChild(listItem);
      });

console.log(pokemonRepository.findByName('bulbasaur'));
console.log(pokemonRepository.findByName('Pikachu'));
