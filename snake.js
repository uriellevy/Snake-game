"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeIntersection = exports.getSnakeHead = exports.onSnake = exports.expandSnake = exports.drawSnake = exports.updateSnake = void 0;
const input_js_1 = require("./input.js");
let newSegments = 0;
const snakeBody = [{ x: 10, y: 11 }];
const updateSnake = () => {
    addSegments();
    const inputDirections = (0, input_js_1.getInputDirection)();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = Object.assign({}, snakeBody[i]);
    }
    snakeBody[0].x += inputDirections.x;
    snakeBody[0].y += inputDirections.y;
};
exports.updateSnake = updateSnake;
const drawSnake = (gameBoard) => {
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y.toString();
        snakeElement.style.gridColumnStart = segment.x.toString();
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });
};
exports.drawSnake = drawSnake;
const expandSnake = (amount) => {
    newSegments += amount;
};
exports.expandSnake = expandSnake;
const onSnake = (position, { ignoreHead = false } = {}) => {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0)
            return false;
        return equalPositions(segment, position);
    });
};
exports.onSnake = onSnake;
const equalPositions = (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
};
const addSegments = () => {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push(Object.assign({}, snakeBody[snakeBody.length - 1]));
    }
    newSegments = 0;
};
const getSnakeHead = () => {
    return snakeBody[0];
};
exports.getSnakeHead = getSnakeHead;
function snakeIntersection() {
    return (0, exports.onSnake)(snakeBody[0], { ignoreHead: true });
}
exports.snakeIntersection = snakeIntersection;
