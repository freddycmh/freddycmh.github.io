
const resetButton = document.querySelector('#reset');

const checkButton = document.querySelector('#check');

const input = document.querySelector('input');

let isGameOver = false;

let randomNumber = Math.floor(Math.random() * 100) + 1;


const h2 = document.querySelector('h2');

const centerpic = document.querySelector('.centerpic');

const won = document.querySelector('#won');

const live = document.querySelector('#live');

const score = document.querySelector('#score');

const guesshs = document.querySelector('h3');



let vida = 10;
// let vida2 = 5;

let items = [];




console.log(randomNumber);

// INPUT


checkButton.addEventListener('click', function () {

    console.log(`${input.value}`);
    if (vida > 0) {

        if (!Number(input.value)) {
            h2.textContent = 'Enter a number';
        } else if (Number(input.value) < 0 || Number(input.value) > 100) {
            h2.textContent = 'Guess a number between 1 and 100';
        } else if (Number(input.value) < randomNumber) {
            h2.textContent = 'Your Guess is too low!';
            vida -= 1;
            live.textContent = vida;
            items.push(Number(input.value));
            h3.textContent = `${items}`;

        } else if (Number(input.value) > randomNumber) {
            h2.textContent = 'Your Guess is too high!';
            vida -= 1;
            live.textContent = vida;
        } else {
            h2.textContent = 'You are correct';
            isGameOver = true;
            checkButton.disabled = true;
            centerpic.style.backgroundColor = '#91BE89';

            score.textContent = vida;
        }
    }
    else {
        h2.textContent = 'You lose';
        isGameOver = true;
        checkButton.disabled = true;
        centerpic.style.backgroundColor = '#FA3E18';

    }
});










// RESET BUTTON
resetButton.addEventListener('click', reset)


function reset() {

    isGameOver = false;
    checkButton.disabled = false;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    h2.textContent = "Good Luck";
    vida = 5;
    live.textContent = vida;
    centerpic.style.backgroundColor = '#6fcb9f';
}
