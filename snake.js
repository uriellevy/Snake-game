import { getInputDirection } from "./input.js";
export let SNAKE_SPEED = 1;
const speedInput = document.getElementById("speedInput");
speedInput === null || speedInput === void 0 ? void 0 : speedInput.addEventListener("change", () => {
    SNAKE_SPEED = parseInt(speedInput === null || speedInput === void 0 ? void 0 : speedInput.value);
    console.log(SNAKE_SPEED);
});
let newSegments = 0;
const snakeBody = [{ x: 10, y: 11 }];
export const updateSnake = () => {
    addSegments();
    const inputDirections = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = Object.assign({}, snakeBody[i]);
    }
    snakeBody[0].x += inputDirections.x;
    snakeBody[0].y += inputDirections.y;
};
export const drawSnake = (gameBoard) => {
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y.toString();
        snakeElement.style.gridColumnStart = segment.x.toString();
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });
};
export const expandSnake = (amount) => {
    newSegments += amount;
};
export const onSnake = (position, { ignoreHead = false } = {}) => {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0)
            return false;
        return equalPositions(segment, position);
    });
};
const equalPositions = (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
};
const addSegments = () => {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push(Object.assign({}, snakeBody[snakeBody.length - 1]));
    }
    newSegments = 0;
};
export const getSnakeHead = () => {
    return snakeBody[0];
};
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}
