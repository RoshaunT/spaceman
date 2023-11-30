
const words = [
    ['apple', 'fruit'],
    ['banana', 'fruit'],
    ['cherry', 'fruit'],
    ['carrot', 'vegetable'],
    ['broccoli', 'vegetable'],
    ['spinach', 'vegetable'],
];

let currentWord;
let wordCategory;
let guessedLetters = [];
let incorrectGuesses = 0;

function newGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex][0];
    wordCategory = words[randomIndex][1];

    guessedLetters = [];
    incorrectGuesses = 0;

    updateDisplay();
}

function updateDisplay() {
    const wordDisplay = document.getElementById('word');
    const categoryDisplay = document.getElementById('category');
    const statusDisplay = document.getElementById('status');

    wordDisplay.innerHTML = '';
    categoryDisplay.innerHTML = wordCategory;

    currentWord.split('').forEach(letter => {
        if (guessedLetters.includes(letter)) {
            wordDisplay.innerHTML += letter + ' ';
        } else {
            wordDisplay.innerHTML += '_ ';
        }
    });

    if (incorrectGuesses === 6) {
        statusDisplay.innerHTML = 'You lose!';
    } else if (wordDisplay.innerHTML === currentWord.split('').join(' ') + ' ') {
        statusDisplay.innerHTML = 'You win!';
    } else {
        statusDisplay.innerHTML = '';
    }
}

function makeGuess() {
    const letter = document.getElementById('letterInput').value.toLowerCase();
    document.getElementById('letterInput').value = '';

    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);

        if (!currentWord.includes(letter)) {
            incorrectGuesses++;
        }
    }

    updateDisplay();
}

document.getElementById('letterButton').addEventListener('click', makeGuess);
newGame();
