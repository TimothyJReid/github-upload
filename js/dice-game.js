function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You rolled a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (goldCoins > 0 && roll === 4) {
            goldCoins -= 1;
            alert('You have rolled a 4 and lost a coin\n\n' + 'Gold Coins:' + goldCoins)
        }
        if (roll < 5) {
            continue;
        }
        goldCoins += roll;
        alert('Congratulations, you win ' + roll + ' gold coins!' + '\nYour total coins are ' + goldCoins);
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}