
let containerHidd = document.querySelector('.container-hidden');
const play = document.querySelector('.play');
console.log(play);
const testo = document.querySelector('.testo');

let selezione = document.getElementById('selezione');
console.log(selezione);
let inpFacile = document.getElementById('facile').value;
console.log(inpFacile);
let inpMedio = document.getElementById('medio').value;
console.log(inpMedio);
let inpDifficile = document.getElementById('difficile').value;
console.log(inpDifficile);

function getselectedValue(){
    let selectedValue = document.getElementById('selezione');
    console.log(selectedValue);
}
getselectedValue();


play.addEventListener('click', function(){
  

 
    let container = document.querySelector('.countain-wrap');
    console.log(container);
    
// creo un ciclo for in cui inserisco gli square
for( let i = 1; i < 101; i++){
    
    const sq = document.createElement('div');
    sq.className = 'square';
    sq.innerHTML = `<span> ${numerRandom(1, 100)}</span>`;
    container.append(sq);
    sq.addEventListener('click', function(){
        this.classList.add('clicked');
    });
  
}

    testo.classList.add('none');
    containerHidd.classList.remove('none');
    
});

  








function numerRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}