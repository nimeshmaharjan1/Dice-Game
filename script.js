let player1 = '';
let player2 = '';

const editNames = () => {
    player1 = prompt("Change Player 1 name.").toUpperCase();
    player2 = prompt("Change Player 2 name.").toUpperCase();
    player1 = player1 ? document.querySelector('p.Player1').innerHTML = player1 :  document.querySelector('p.Player1').innerHTML = 'Player 1';
    player2 = player2 ? document.querySelector('p.Player2').innerHTML = player2 :  document.querySelector('p.Player2').innerHTML = 'Player 2';
}

const rollTheDice = () => {
    num1 = Math.floor(Math.random() * 6) + 1;
    num2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector('.img1').setAttribute('src', '/assets/dice' + num1 + '.png')
    document.querySelector('.img2').setAttribute('src', '/assets/dice' + num2 + '.png')

    num1 === num2 ? document.querySelector("h1").innerHTML = 'DRAW!' :
        num1 > num2 ? document.querySelector("h1").innerHTML = `${player1} Won!` : document.querySelector("h1").innerHTML = `${player2} Won!`
}