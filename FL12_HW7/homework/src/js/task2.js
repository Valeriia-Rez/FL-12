let winningNum, totalPrize, maxPrize, initialRange;
let isRestartGame = true;
const two = 2;
const four = 4;
const maxAttempt = 3;
let confirmMessage = confirm('Do you want to play a game?');

while (confirmMessage) {
    if (isRestartGame) {
        totalPrize = 0;
        maxPrize = 100;
        initialRange = 8;
        winningNum = Math.floor(Math.random() * initialRange + 1);
    }

    console.log(winningNum);

    for (let i = 1; i <= maxAttempt; i++) {
        let guess = prompt(`
        Choose a roulette pocket number from 0 to ${initialRange}.
        Attempts left: ${maxAttempt - i + 1}.
        Total prize: ${totalPrize}$.
        Possible prize on current attempt: ${maxPrize}$.`);
        guess = parseInt(guess);

        if (winningNum === guess) {
            totalPrize = totalPrize + maxPrize;
            let continueGame = confirm(
                `Congratulation, you won!!Your prize is: ${maxPrize}$!Do you want to continue?`
            );
            if (continueGame) {
                maxPrize = maxPrize * two;
                initialRange = initialRange + four;
                winningNum = Math.floor(Math.random() * initialRange + 1);
                isRestartGame = false;
            } else {
                alert(
                    `Thank you for your participation. Your prize is: ${totalPrize}$`
                );
                confirmMessage = confirm('Do you want play again?');
                isRestartGame = true;
            }


            break;
        } else if (i === maxAttempt) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);

            confirmMessage = confirm('Do you want play again?');
            isRestartGame = true;
            break;
        } else {
            maxPrize = maxPrize / two;
        }
    }
}
alert('You did not become a billionaire, but can.');