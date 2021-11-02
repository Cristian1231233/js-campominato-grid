
const container = document.querySelector('.countain-wrap');
console.log(container);
const play = document.querySelector('.play');
console.log(play);


// creo un ciclo for in cui inserisco gli square
for( let i = 1; i < 64; i++){
    const sq = document.createElement('div');
    sq.className = 'square';
    container.append(sq);
    
}