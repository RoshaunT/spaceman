const words = [
    ['apple', 'fruit'],
    ['banana', 'fruit'],
    ['cherry', 'fruit'],
    ['mango', 'fruit'],
    ['carrot', 'vegetable'],
    ['broccoli', 'vegetable'],
    ['spinach', 'vegetable'],
    ['lettuce' , 'vegetable'],
    ['america' , 'country'],
    ['japan' , 'country'],
    ['england' , 'country'],
    ['china' , 'country'],
];

let currentWord;
let wordCategory;
let guessedLetters = [];
let incorrectGuesses = 0;
let maxGuesses = 6;

function newGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex][0];
    wordCategory = words[randomIndex][1];

    guessedLetters = [];
    incorrectGuesses = 0;

    updateDisplay();

    // Enable the restart button after each new game
    document.getElementById('restartButton').disabled = false;
}

function updateDisplay() {
    const wordDisplay = document.getElementById('word');
    const categoryDisplay = document.getElementById('category');
    const statusDisplay = document.getElementById('status');
    const incorrectGuessesDisplay = document.getElementById('incorrectGuesses');

    wordDisplay.innerHTML = '';
    categoryDisplay.innerHTML = wordCategory;
    currentWord.split('').forEach(letter => {
        if (guessedLetters.includes(letter)) {
            wordDisplay.innerHTML += letter + ' ';
        } else {
            wordDisplay.innerHTML += '_ ';
        }
    });

    if (incorrectGuesses === maxGuesses) {
        statusDisplay.innerHTML = 'You lose! Try Again?';
    } else if (wordDisplay.innerHTML === currentWord.split('').join(' ') + ' ') {
        statusDisplay.innerHTML = 'You win! Your smart!';
    } else {
        statusDisplay.innerHTML = '';
    }

    incorrectGuessesDisplay.innerHTML = 'Incorrect guesses: ' + incorrectGuesses;

    // Disable the restart button after the maximum number of guesses
    if (incorrectGuesses === maxGuesses) {
        document.getElementById('restartButton').disabled = true;
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
document.getElementById('restartButton').addEventListener('click', newGame);
newGame();