import { onSnake, expandSnake,  } from './snake.js';
import { randomGridPosition } from './grid.js';
import { expansionRate } from './input.js';

let food = getRandomFoodPosition();

export function updateFood() {
    if (onSnake(food)) {
        expandSnake(expansionRate);
        food = getRandomFoodPosition();
    }
}

export function drawFood(gameBoard: any) {
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