
let container = document.querySelector('.countain-wrap');
console.log(container);
const play = document.querySelector('.play');
console.log(play);
const testo = document.querySelector('.testo');




// creo un ciclo for in cui inserisco gli square
for( let i = 1; i < 101; i++){
    const sq = document.createElement('div');
    sq.className = 'square';
    sq.innerHTML = `<span> ${numerRandom(1, 100)}</span>`;
    container.append(sq);
    sq.addEventListener('click', function(){
        this.classList.add('clicked');
        sq.className('none');
    });
}








function numerRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}