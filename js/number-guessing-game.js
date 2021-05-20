function runGame() {

    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    numTries = 0;

    const randomnumber = Math.random() * 100;
    const randomInterger = Math.floor(randomnumber);
    const target = randomInterger + 1;

   
    do {
        guessString = prompt('I am thinking of a number in the range of 1 to 100.\n\nWhat is the number?');     
        guessNumber = +guessString;
        if (guessString === null) {
            return;
        }
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert('You got it! the number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly.');
    
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('You have not entered a number\n\nPlease enter a number in the 1-100 range');
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('Please enter a number in the 1-100 range');
    } else if (guessNumber > target) {
        alert('Your number is to large');
    } else if (guessNumber < target) {
        alert('Your number is to small');
    } else {
        correct = true;
    }
    return correct;
}