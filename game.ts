import {SNAKE_SPEED, updateSnake, drawSnake} from "./snake.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

const main = (currentTime: number) => {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  
  
    lastRenderTime = currentTime
  
    update();
    draw();
}

window.requestAnimationFrame(main);

const update = () => {
    updateSnake();
}

const draw = () => {
    if(gameBoard) gameBoard.innerHTML = "";
    console.log(gameBoard)
    drawSnake(gameBoard);
    console.log(gameBoard)

}