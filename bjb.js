// const url = 'https://raw.githubusercontent.com/stephanie-vitalherne/data/master/palkia.json';
// const url = 'https://pokeapi.co/api/v2/pokemon/484/';

class Trainer {
  constructor(name, pokemon) {
    this.name = name,
      this.pokemon = []
  }
}

class Pokemon {
  constructor(id, name, hp, move, ability) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.move = move;
    this.ability = ability;
  }
}

function loadPokemon() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

        poke1 = new Pokemon(
          response['id'],
          response['name'],
          response.stats[5].base_stat, //when using a class object, you can define what you're grabbing when making a new class, but when assigning the information, use the variables you gave for the class skeleton
          response.moves[4].move.name,
          response.abilities[0].ability.name
)


        document.getElementById('pokeId').innerHTML = poke1.id;
        document.getElementById('pokeName').innerHTML = poke1.name;
        document.getElementById('pokeHp').innerHTML = poke1.hp;
        document.getElementById('move').innerHTML = poke1.move;
        document.getElementById('abil').innerHTML = poke1.ability;
      }
    };

    // function render(){
    //   document.getElementById('cardfront').src = 'images/palkia-card-empty.jpg';
    //   document.getElementById('cardfront').classList.add('flipInY');
    //   document.getElementById('pkecd').classList.remove('span-hidden');
    // };

    request.open("GET", "https://raw.githubusercontent.com/stephanie-vitalherne/data/master/palkia.json", true);
    request.send();



  }
loadPokemon();
