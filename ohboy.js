const POKEMON_URL = "https://pokeapi.co./api/v2/pokemon/";

class Trainer {
  constructor(name, pokemon){
    this.name = name;
    this.pokemon = [];
  }
  collect(){
    return this.pokemon;
  }
}

class Pokemon extends Trainer{
  constructor(id, name, hp, species, height, weight, move, abil, image){
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.species = species;
    this.height = height;
    this.weight = weight;
    this.move = [];
    this.abil = [];
    this.image = image;

    document.getElementById('red').addEventListener('click', spin);

    this.render = function(image){
      cardfront.setAttribute('class','flipInY');
      document.getElementById('cardfront').setAttribute('src', "images/bar-card.jpg");
      document.getElementById('pkecd').classList.remove('span-hidden');
    }
  }
}
