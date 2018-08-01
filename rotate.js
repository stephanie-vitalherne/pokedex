function render(pokemonName) {
  document.getElementById('cardfront').src = `images/${pokemonName}-card-empty.jpg`;
  document.getElementById('cardfront').classList.add('flipInY');
  document.getElementById('pkecd').classList.remove('span-hidden');
  blue = document.getElementById('blue');
  green = document.getElementById('green');
  red = document.getElementById('red');
// if you click on this color that load this pokemon
if('click' === blue){
  blue.addEventListener('click', loadPokemon("${pokemonName}"));
}
  setTimeout(function() {
    cardfront = document.getElementById('cardfront');
    cardfront.classList.remove('flipInY');
  }, 3550);
}

function render2() {
  document.getElementById('cardfront').src = 'images/type-null-card-empty.jpg';
  document.getElementById('cardfront').classList.add('flipInY');
  document.getElementById('pkecd').classList.remove('span-hidden');

  document.getElementById('green').addEventListener('click', loadPokemon('type-null'));
  setTimeout(function() {
    cardfront = document.getElementById('cardfront');
    cardfront.classList.remove('flipInY');
  }, 3550);
}

function render3() {
  document.getElementById('cardfront').src = 'images/barbaracle-card-empty.jpg';
  document.getElementById('cardfront').classList.add('flipInY');
  document.getElementById('pkecd').classList.remove('span-hidden');

  document.getElementById('red').addEventListener('click', loadPokemon('barbaracle'));
  setTimeout(function() {
    cardfront = document.getElementById('cardfront');
    cardfront.classList.remove('flipInY');
  }, 3550);
}
