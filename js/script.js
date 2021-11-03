

document.querySelector('.play').addEventListener('click', function(){
   play();
});

function play(){
    const level = document.getElementById('selezione').value;
    console.log(level);
    const grigliaLevel = [100, 81, 49];
    console.log(grigliaLevel);
    const numeroCelle = grigliaLevel[level-1];
    console.log(numeroCelle);
    const celleForRow = Math.sqrt(numeroCelle);
    console.log(celleForRow);

}






// const testo = document.querySelector('.testo');

// let selezione = document.getElementById('selezione');
// console.log(selezione);


// function getselectedValue(){
//     let selectedValue = document.getElementById('selezione');
//     console.log(selectedValue);
// }
// getselectedValue();


// play.addEventListener('click', function(){
  

 
//     let container = document.querySelector('.countain-wrap');
//     console.log(container);
    
// // creo un ciclo for in cui inserisco gli square
// for( let i = 1; i < 101; i++){
    
//     const sq = document.createElement('div');
//     sq.className = 'square';
//     sq.innerHTML = `<span> ${numerRandom(1, 100)}</span>`;
//     container.append(sq);
//     sq.addEventListener('click', function(){
//         this.classList.add('clicked');
//     });
  
// }

//     testo.classList.add('none');
//     containerHidd.classList.remove('none');
    
// });

  








function numerRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}