import { onSnake, expandSnake, } from './snake.js';
import { randomGridPosition } from './grid.js';
import { expansionRate } from './input.js';
let food = getRandomFoodPosition();
let score = 0;
const scoreText = document.getElementById("score");
export function updateFood() {
    if (onSnake(food)) {
        expandSnake(expansionRate);
        food = getRandomFoodPosition();
        score++;
        if (scoreText)
            scoreText.innerHTML = score.toString();
    }
}
export function drawFood(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y.toString();
    foodElement.style.gridColumnStart = food.x.toString();
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}
function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}
