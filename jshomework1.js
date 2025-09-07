let countries = ['france', 'russian', 'england', 'turkey', 'azerbaijan'];

function findWord() {
    let chooseCountry = countries[Math.floor(Math.random() * countries.length)];
    let hiddenCountry = "_".repeat(chooseCountry.length).split("");
    let lives = 5;
    let guessedLetters = [];

    while (lives > 0 && hiddenCountry.includes("_")) {
        alert("Country: " + hiddenCountry.join(" "));

        let guess = prompt("Enter your guess");

        if (guess === null) {
            alert("Game cancelled!");
            return;
        }

        guess = guess.toLowerCase();

        if (!guess) {
            alert("Please enter something!");
            continue;
        }

        if (guess.length !== 1) {
            alert("Please enter a single letter!");
            continue;
        }

        if (guessedLetters.includes(guess)) {
            alert("You already guessed that letter!");
            continue;
        }

        guessedLetters.push(guess);

        if (chooseCountry.includes(guess)) {
            for (let i = 0; i < chooseCountry.length; i++) {
                if (chooseCountry[i] === guess) {
                    hiddenCountry[i] = guess;
                }
            }
        } else {
            lives--;
            alert("Wrong guess! Lives left: " + lives);
        }

        if (!hiddenCountry.includes("_")) {
            alert("Congratulations! You guessed the word: " + chooseCountry);
            if (confirm("Do you want to play again?")) {
                findWord();
            }
        }
    }

    alert("Game Over! The word was: " + chooseCountry);

    if (confirm("Do you want to play again?")) {
        findWord();
    }
}


findWord();