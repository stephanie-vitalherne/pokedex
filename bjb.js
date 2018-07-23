const url = 'https://raw.githubusercontent.com/stephanie-vitalherne/data/master/palkia.json';

function Get(url){
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  return request.responseText;
}
var jsonURL = JSON.parse(Get(url));
console.log("this is " + jsonURL.name);

document.getElementById('pokeId').innerHTML = jsonURL.id;
document.getElementById('pokeName').innerHTML = jsonURL.name;
document.getElementById('pokeHp').innerHTML = jsonURL.stats[5].base_stat;
document.getElementById('move').innerHTML = jsonURL.moves[4].move.name;
document.getElementById('abil').innerHTML = jsonURL.abilities[0].ability.name;
