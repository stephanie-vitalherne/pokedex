
  var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

  jsonURL = JSON.parse(request.responseText);

console.log("this is " + jsonURL.name);

    }
}
const url = 'https://raw.githubusercontent.com/stephanie-vitalherne/data/master/palkia.json';
  request.open("GET", url, true);
  request.send();

function render(){
  document.getElementById('cardfront').src = 'images/palkia-card-empty.jpg';
  // document.getElementById('cardfront').classList.add('flipInY');
  // document.getElementById('pkecd').classList.remove('span-hidden');
  document.getElementById('pokeId').innerHTML = 'ID #: '+jsonURL.id;
 document.getElementById('pokeName').innerHTML = jsonURL.name;
 document.getElementById('pokeHp').innerHTML = jsonURL.stats[5].base_stat + ' HP';
 document.getElementById('move').innerHTML = jsonURL.moves[4].move.name;
 document.getElementById('abil').innerHTML = jsonURL.abilities[0].ability.name;

}
