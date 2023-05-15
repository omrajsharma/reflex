const gameStartBtn = document.getElementById('game-start');
const gameIndicator = document.getElementById('game-indicator');
const gameClickBtn = document.getElementById('game-click');
const gameSection = document.getElementById('game');

let startTime;
let endTime;

gameStartBtn.addEventListener('click', () => {
    gameStartBtn.style.display = 'none';
    gameSection.style.display = 'flex';

    setTimeout(() => {
        gameIndicator.style.backgroundColor = 'green';
        gameIndicator.style.color = 'white';
        gameIndicator.innerText = 'Click!';

        startTime = new Date();
    }, Math.floor(Math.random() * 10000));
});

gameClickBtn.addEventListener('click', () => {
    endTime = new Date();
    const result = endTime - startTime;
    gameIndicator.innerText = `${result}ms`;
    gameIndicator.style.backgroundColor = 'white';
    gameIndicator.style.color = 'black';
});