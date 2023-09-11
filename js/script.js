let pokemonRepository = (function () {
    let pokemonList = [
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

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "type" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("Pokemon is not correct");
        }
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonListContainer = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonListContainer.appendChild(listpokemon);

        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };
})(); 

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
