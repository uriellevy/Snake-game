import { drawFood, updateFood } from "./food.js";
import { outsideGrid } from "./grid.js";
import { updateSnake, drawSnake, getSnakeHead, snakeIntersection } from "./snake.js";
import { snakeSpeed } from "./input.js";

declare var window: Window;

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

const main = (currentTime: number) => {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/';
        }
        return;
    }
    
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return;
    lastRenderTime = currentTime;
    
    update();
    draw();
}

window.requestAnimationFrame(main);

const update = () => {
    updateSnake();
    updateFood();
    checkDeath();
}

const draw = () => {
    if (gameBoard) gameBoard.innerHTML = ""; //cleanup before draw new snake/food
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}