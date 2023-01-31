"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_js_1 = require("./food.js");
const grid_js_1 = require("./grid.js");
const snake_js_1 = require("./snake.js");
const input_js_1 = require("./input.js");
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
const main = (currentTime) => {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/';
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / input_js_1.snakeSpeed)
        return;
    lastRenderTime = currentTime;
    update();
    draw();
};
window.requestAnimationFrame(main);
const update = () => {
    (0, snake_js_1.updateSnake)();
    (0, food_js_1.updateFood)();
    checkDeath();
};
const draw = () => {
    if (gameBoard)
        gameBoard.innerHTML = ""; //cleanup before draw new snake/food
    (0, snake_js_1.drawSnake)(gameBoard);
    (0, food_js_1.drawFood)(gameBoard);
};
function checkDeath() {
    gameOver = (0, grid_js_1.outsideGrid)((0, snake_js_1.getSnakeHead)()) || (0, snake_js_1.snakeIntersection)();
}
