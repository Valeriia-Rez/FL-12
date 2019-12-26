let isRestartGame = false;
let playGame = true;
let confirmMessage = confirm("Do you want to play a game?");
let totalPrize = 0;
let maxPrize = 100;
let initialRange = 8;
let winningNum = Math.floor(Math.random() * initialRange + 1);

while (playGame) {
    if (isRestartGame) {
        totalPrize = 0;
        maxPrize = 100;
        initialRange = 8;
        winningNum = Math.floor(Math.random() * initialRange + 1);
    }
    const maxAttempt = 3;
    let isWin = false;
    console.log(winningNum);
    if (confirmMessage) {
        for (let i = 1; i <= maxAttempt; i++) {
            let guessPrompt = prompt(`
        Choose a roulette pocket number from 0 to ${initialRange}.
        Attempts left: ${maxAttempt - i + 1}.
        Total prize: ${totalPrize}$.
        Possible prize on current attempt: ${maxPrize}$.`);
            guessPrompt = parseInt(guessPrompt);

            if (winningNum === guessPrompt) {
                isWin = true;
                totalPrize = totalPrize + maxPrize;
                let continueGame = confirm(
                    `Congratulation, you won!!Your prize is: ${maxPrize}$!Do you want to continue?`
                );
                if (continueGame) {
                    maxPrize = maxPrize * 2;
                    initialRange = initialRange + 4;
                    winningNum = Math.floor(Math.random() * initialRange + 1);
                } else {
                    alert(
                        `Thank you for your participation. Your prize is: ${totalPrize}$`
                    );
                    confirmMessage = confirm("Do you want play again?");
                    isRestartGame = true;
                }

                break;
            } else if (i === maxAttempt && !isWin) {
                alert(
                    `Thank you for your participation. Your prize is: ${totalPrize}$`
                );

                confirmMessage = confirm("Do you want play again?");
                isRestartGame = true;
                break;
            }
            maxPrize = maxPrize / 2;
        }
    } else {
        alert("You did not become a billionaire, but can.");
        break;
    }
}