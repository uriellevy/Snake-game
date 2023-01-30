import { onSnake, expandSnake, expansionRate } from './snake.js';
import { randomGridPosition } from './grid.js';
let food = getRandomFoodPosition();
export function updateFood() {
    if (onSnake(food)) {
        expandSnake(expansionRate);
        food = getRandomFoodPosition();
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
