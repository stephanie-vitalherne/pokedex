// const url = 'https://raw.githubusercontent.com/stephanie-vitalherne/data/master/palkia.json';
// const url = 'https://pokeapi.co/api/v2/pokemon/484/';

allPokemon = [];//collects the pokemon that are pushed from the loadPokemon function

class Trainer {
  constructor(name, pokemon) {
    this.name = name;
    this.pokemon = allPokemon;
  }

  get(name){
    for(var i = 0; i < allPokemon.length; i++){//rotate thru the array of pokemon
      if(allPokemon[i][name] === name){//if the name of the pokemon in the array matches the name submitted then
        return allPokemon[i];//return the pokemon information that was collected
      }
    }
    return allPokemon;//return the pokemon that was pushed into allPokemon array.
  }

  all(){
    return this.pokemon; //return THIS TRAINER POKEMON
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

function loadPokemon(pokemonName) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      poke1 = new Pokemon(//i'm not sure if still need this to be poke1
        response['id'],
        response['name'],
        response.stats[5].base_stat, //when using a class object, you can define what you're grabbing when making a new class, but when assigning the information, use the variables you gave in the class skeleton
        response.moves[4].move.name,
        response.abilities[0].ability.name
      )

      document.getElementById('pokeId').innerHTML = "#" + poke1.id + ": ";
      document.getElementById('pokeName').innerHTML = poke1.name;
      document.getElementById('pokeHp').innerHTML = poke1.hp + " HP";
      document.getElementById('move').innerHTML = "Move: " + poke1.move;
      document.getElementById('abil').innerHTML = "Ability: " + poke1.ability;

      allPokemon.push(poke1); //this line pushes the data to the empty array provided above
    }
  };
  request.open("GET", `https://raw.githubusercontent.com/stephanie-vitalherne/data/master/${pokemonName}.json`, true);//the backticks allowed for the onclick with the loadPokemon attached to it to load the correct pokemon at the correct time
  request.send();
}
loadPokemon();

// function for cardChange

// function for randomId?
