console.log('JavaScript is enabled!');

class Pokemon {
  constructor(id, name, hp, ability) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.ability = ability;
  }
}



const url = 'https://pokeapi.co/api/v2/pokemon/484/';

function Get(url){
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  return request.responseText;
}
var jsonURL = JSON.parse(Get(url));
console.log("this is " + jsonURL.name);


poke1 = new Pokemon()

function loadPokemon(poke1){
  poke1 = new Pokemon(
    jsonURL['id'],
    jsonURL['name'],
    jsonURL.stats[5].base_stat,
    jsonURL.abilities[0].ability.name
  );

document.getElementById('pokeId').innerHTML = poke1.id;
document.getElementById('pokeName').innerHTML = poke1.name;
document.getElementById('pokeHp').innerHTML = poke1.stats[5].base_stat + ' HP';
document.getElementById('move').innerHTML = poke1.moves[4].move.name;
document.getElementById('abil').innerHTML = poke1.abilities[0].ability.name;

}














// poke1 = new Pokemon()
//
// function loadPokemon(poke1) {
//   var request = new XMLHttpRequest();
//   request.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var data = JSON.parse(this.responseText);
//        poke1 = new Pokemon (
//         data['id'],
//         data['name'],
//         data.stats[5].base_stat,
//
//         data.abilities[0].ability.name,
//       );
//       document.getElementById('pokeId').innerHTML = poke1.id;
//       document.getElementById('pokeName').innerHTML = poke1.name;
//       document.getElementById('pokeHp').innerHTML = poke1.hp;
//       document.getElementById('abil').innerHTML = poke1.ability;
//   }
//
//   // request.open("GET", "https://pokeapi.co/api/v2/pokemon/484", true);
//   request.open("GET", "https://raw.githubusercontent.com/stephanie-vitalherne/data/master/palkia.json", true);
//   request.send();
// }
// loadPokemon(poke1);
// }
poke2 = new Pokemon()

function loadPokemon(poke2) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
       poke2 = new Pokemon (
        myObj.id,
        myObj.name,
        myObj.stats[5].base_stat,

        myObj.abilities[0].ability.name,
      );
      document.getElementById('pokeId').innerHTML = poke2.id;
      document.getElementById('pokeName').innerHTML = poke2.name;
      document.getElementById('pokeHp').innerHTML = poke2.hp;
      document.getElementById('abil').innerHTML = poke2.ability;
  }

  // xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/772", true);
  xhttp.open("GET", "https://raw.githubusercontent.com/stephanie-vitalherne/data/master/type-null.json", true);
  xhttp.send();
}
loadPokemon(poke1);
}


poke3 = new Pokemon()

function loadPokemon(poke3) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
       poke3 = new Pokemon (
        myObj.id,
        myObj.name,
        myObj.stats[5].base_stat,

        myObj.abilities[0].ability.name,
      );
      document.getElementById('pokeId').innerHTML = poke3.id;
      document.getElementById('pokeName').innerHTML = poke3.name;
      document.getElementById('pokeHp').innerHTML = poke3.hp;
      document.getElementById('abil').innerHTML = poke3.ability;
  }

  // xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/689", true);
  xhttp.open("GET", "https://raw.githubusercontent.com/stephanie-vitalherne/data/master/barbaracle.json", true);
  xhttp.send();
}
loadPokemon(poke3);
}
