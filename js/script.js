let pokemonList = [];
pokemonList = [
    {
        name: 'Charizard',
        height: 1.7,
        type: ['fire', 'flying'],
        speed: 100 
    },
    {
        name: 'Psyduck',
        height: 0.8,
        type: ['water'],
        speed: 55
    },
    {
        name: 'Dewgong',
        height: 1.7,
        type: ['water', 'ice'],
        speed: 70
    }
];

const pokemonContainer = document.getElementById('pokemon-container');

pokemonList.forEach(pokemon => {
    let output = pokemon.name + ' (height: ' + pokemon.height + ')';

    if (pokemon.height > 1.6) {
        output += ' - Wow, that\'s big!';
    }

    let pokemonInfo = document.createElement('p');
    pokemonInfo.textContent = output;

    pokemonContainer.appendChild(pokemonInfo);
});