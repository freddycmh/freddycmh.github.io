
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

let vida = 10;






console.log(randomNumber);

// INPUT


checkButton.addEventListener('click', function () {

    console.log(`${input.value}`);
    if (vida > 0) {

        if (!Number(input.value)) {
            h2.textContent = 'Enter a number';
        }
        else if (Number(input.value) < randomNumber) {
            h2.textContent = 'Your Guess is too low!';
            vida -= 1;
            live.textContent = vida;

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
    }
});










// RESET BUTTON
resetButton.addEventListener('click', reset)


function reset() {

    isGameOver = false;
    checkButton.disabled = false;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    h2.textContent = "";
    vida = 10;
    live.textContent = vida;
    centerpic.style.backgroundColor = '#E3C3A9';

}
