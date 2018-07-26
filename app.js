// POKECARD REVEAL/HIDE
document.getElementById('bttn').addEventListener('click', reveal);

function reveal(pokeCard){
  crdBtn = document.getElementById('crdBtn');
  crdBtn.setAttribute('class', 'fadeInDown');
  row = document.getElementById('rowShow');
  row.classList.remove('row-hidden');
  row.classList.add('row-reveal');
  pkcd = document.getElementById('pokeCard');
  pkcd.classList.remove('hidden');
  pkcd.classList.add('reveal');
  cardfront = document.getElementById('cardfront');
  cardfront.src = 'images/cardback.png';
  pkecd = document.getElementById('pkecd');
  pkecd.classList.add('span-hidden');
  cardfront.setAttribute('class','flipInY');

  setTimeout(function(){
    cardfront = document.getElementById('cardfront');
    cardfront.classList.remove('flipInY');
  }, 3550);
}
// ======================================================
