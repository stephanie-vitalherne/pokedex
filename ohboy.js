console.log('JavaScript is enabled!');
class Trainer {
  constructor(pokemon) {
    this.name = name;
    this.pokemon = pokemon;
  }
}

changeCard(card){
  this.name = card.constructor.name
}

class Pokemon extends Trainer{
  constructor(id, name, hp, stats, move, ability){
    super();
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.stats = {species: species, length: length, weight: weight};
    this.move = [];
    this ability = [];
  }
}

var poke1 = ;

function loadPokemon(pokemon) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      poke1 = JSON.parse(this.responseText);
      console.log(poke1);
      poke1 = new pokemon()
      document.getElementById("cardTop").innerHTML = poke1.name;
    }
  };



  xhttp.open("GET", "http://pokeapi.co/api/v2/pokemon/" + id, true);
  xhttp.send();
}
