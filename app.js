// GLOBAL VARIABLES
var pokeCard = document.getElementById('pokeCard');
var pokeId = document.getElementById('pokeId');
var pokeName = document.getElementById('pokeName');
var pokeHp = document.getElementById('pokeHp');
var length = document.getElementById('length');
var width = document.getElementById('width');
var move = document.getElementsByClassName('move');
// ======================================================
// POKECARD REVEAL/HIDE
document.getElementById('btn').addEventListener('click', reveal);

function reveal(pokeCard){
  pkcd = document.getElementById('pokeCard');
  pkcd.classList.remove('hidden');
  pkcd.classList.add('reveal');
}
// ======================================================
