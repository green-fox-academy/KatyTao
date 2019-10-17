'use strict';

const Pokemon = require('./Pokemon');

const pokemonOfAsh = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

const wildPokemon = new Pokemon('Oddish', 'leaf', 'water');
let chosenOne = ``;
for(let i = 0; i < pokemonOfAsh.length; i++) {
    if(wildPokemon.isEffectiveAgainst(pokemonOfAsh[i])) {
        chosenOne = pokemonOfAsh[i].name;
    }
}
// Which pokemon should Ash use?

console.log('I choose you, '+chosenOne);

function initializePokemon() {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}