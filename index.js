// JavaScript code here
let words = {
    fruits: ["apple", "banana", "orange", "grape", "pineapple"],
    countries: ["thailand", "japan", "france", "usa", "china"],
    brands: ["apple", "samsung", "sony", "nike", "adidas"]
};

let randomWord;
let wordArray;
let guessedWord = [];
let score = 0;

function displayWord() {
    document.getElementById("wordDisplay").textContent = guessedWord.join(' ');
}

function checkGuess() {
    let guess = document.getElementById("guessInput").value.toLowerCase();
    if (guess.length === 1) {
        if (wordArray.includes(guess)) {
            for (let i = 0; i < wordArray.length; i++) {
                if (wordArray[i] === guess) {
                    guessedWord[i] = guess;
                }
            }
            displayWord();
            document.getElementById("resultDisplay").textContent = "Correct!";
            score += 10;
            document.getElementById("score").textContent = score;
            if (!guessedWord.includes('_')) {
                alert("Congratulations! You guessed the word!");
                // Additional logic to restart the game or display high score
            }
        } else {
            document.getElementById("resultDisplay").textContent = "Incorrect!";
        }
    } else {
        alert("Please enter only one letter.");
    }
    document.getElementById("guessInput").value = "";
}

function startNewGame(category) {
    let selectedWords = words[category];
    randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
    wordArray = randomWord.split('');
    guessedWord = [];
    score = 0;
    document.getElementById("score").textContent = score;
    initGame();
}

function initGame() {
    guessedWord = new Array(wordArray.length).fill('_');
    displayWord();
}

function startNewGame(category) {
    let selectedWords;
    if (category === 'custom') {
        let customWord = document.getElementById("customWordInput").value.toLowerCase();
        if (customWord.trim() === "") {
            alert("Please enter a word.");
            return;
        }
        selectedWords = [customWord];
    } else {
        selectedWords = words[category];
    }
    randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
    wordArray = randomWord.split('');
    guessedWord = [];
    score = 0;
    document.getElementById("score").textContent = score;
    initGame();
}

function startCustomGame() {
    let customWord = document.getElementById("customWordInput").value.toLowerCase();
    if (customWord.trim() === "") {
        alert("Please enter a word.");
        return;
    }
    startNewGame('custom');
}



// Initialize the game
initGame();