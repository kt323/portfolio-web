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

/*console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Charizard", height: 1.7, types: ["fire"]});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

  var size;
  if (item.height > 1) {
    size = "Wow, that\'s big!";
  } else {
    size = "It\'s small pokemon";
  }

  var result;
  item.types.forEach(function (typeItem) {
    if (typeItem == "fire") {
      result = '<span styple="color:orange;"> ';
    } else if (typeItem == "water") {
      result = '<span style="color:blue"> ';
    } else if (typeItem == "flying") {
      result = '<span style="color:green"> ';
    } else if (typeItem == "ice") {
      result = '<span style="color:yellow"> ';
    }
});
document.write {
  '<div class="box">' +
    item.name +
    "(height: " +
    item.height +
    "m" +
    ")" +
    "<br>" +
    item.types +
    "<br>" +
    "</div"
};
});


//function add (pokemon) {
  //pokemonList.push(pokemon);
//}*/
