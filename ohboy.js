console.log('JavaScript is enabled!');

class Pokemon {
  constructor(id, name, hp, ability) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.ability = ability;
  }
}

poke1 = new Pokemon()

function loadPokemon(poke1) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
       poke1 = new Pokemon (
        myObj.id,
        myObj.name,
        myObj.stats[5].base_stat,

        myObj.abilities[0].ability.name,
      );
      document.getElementById('pokeId').innerHTML = poke1.id;
      document.getElementById('pokeName').innerHTML = poke1.name;
      document.getElementById('pokeHp').innerHTML = poke1.hp;
      document.getElementById('abil').innerHTML = poke1.ability;
  }

  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/484", true);
  xhttp.send();
}
loadPokemon(poke1);
}
// function render(){
//   document.getElementById('cardfront').src = 'images/palkia-card-empty.jpg';
//   document.getElementById('cardfront').classList.add('flipInY');
//   document.getElementById('pkecd').classList.remove('span-hidden');
//
//   document.getElementById('blue').addEventListener('click', loadPokemon(poke1));
// }
