"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawFood = exports.updateFood = void 0;
const snake_js_1 = require("./snake.js");
const grid_js_1 = require("./grid.js");
const input_js_1 = require("./input.js");
let food = getRandomFoodPosition();
let score = 0;
const scoreText = document.getElementById("score");
function updateFood() {
    if ((0, snake_js_1.onSnake)(food)) {
        (0, snake_js_1.expandSnake)(input_js_1.expansionRate);
        food = getRandomFoodPosition();
        score++;
        if (scoreText)
            scoreText.innerHTML = score.toString();
    }
}
exports.updateFood = updateFood;
function drawFood(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y.toString();
    foodElement.style.gridColumnStart = food.x.toString();
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}
exports.drawFood = drawFood;
function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || (0, snake_js_1.onSnake)(newFoodPosition)) {
        newFoodPosition = (0, grid_js_1.randomGridPosition)();
    }
    return newFoodPosition;
}
