var request = new XMLHttpRequest();
var url = '"https://pokeapi.co/api/v2/pokemon/';

class Trainer {
  constructor(name) {
    thisname = name;
    this.pokemon = [];
  }
}

function loadPokemon(pokemon) {
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);

    }
  };
}
request.open("GET", url, true);
request.send();


function getPokemon() {
  for (var i = 0; i < pokemon.length; i++) {
    if (this.pokemon[i].id === pokemon) {
      return this;
    }
  }
}


class Pokemon {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

function loadPokemon(pokemon) {
  return $.ajax({
    url: url + id,
    dataType: 'json',
    type: "GET",
  }).done(function)
}
