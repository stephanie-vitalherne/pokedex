// GLOBAL VARIABLES
var pokeCard = document.getElementById('pokeCard');
var pokeId = document.getElementById('pokeId');
var pokeName = document.getElementById('pokeName');
var pokeHp = document.getElementById('pokeHp');
var length = document.getElementById('length');
var weight = document.getElementById('weight');
var move = document.getElementsByClassName('move');
// ======================================================
// POKECARD REVEAL/HIDE
document.getElementById('bttn').addEventListener('click', reveal);

function reveal(pokeCard){
  row = document.getElementById('rowShow');
  row.classList.remove('row-hidden');
  row.classList.add('row-reveal');
  pkcd = document.getElementById('pokeCard');
  pkcd.classList.remove('hidden');
  pkcd.classList.add('reveal');
}
// ======================================================
