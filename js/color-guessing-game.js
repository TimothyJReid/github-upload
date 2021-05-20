function rungame()

let guessString = '';
    let guessColor = 0;
    let correct = false;
    numTries = 0;

    do {
        guessString = prompt('I am thinking of a color in the range of 1 to 100.\n\nWhat is the number?');     
        guessNumber = +guessString;
        if (guessString === null) {
            return;
        }
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert('You got it! the number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly.');
    
}