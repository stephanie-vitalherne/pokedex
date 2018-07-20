console.log('JavaScript is enabled!');

class Pokemon {
  constructor(id, name, hp, stats, move, ability) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.stats = {
      species: species,
      length: length,
      weight: weight
    };
    this.move = [];
    this.ability = [];
  }
}

var poke1 = '';
function loadPokemon() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      poke1 = JSON.parse(this.responseText);
      console.log(poke1);
      document.getElementById('pokeId').innerHTML = poke1.id;
    }
  }

  // xhttp.open("GET", "http://pokeapi.co/api/v2/pokemon/" + id, true);
  xhttp.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/484/", true);
  xhttp.send();
}
