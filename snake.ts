import { getInputDirection } from "./input.js";
import { Position } from "./interface";


let newSegments = 0;
const snakeBody: Position[] = [{ x: 10, y: 11 }];

export const updateSnake = () => {
    addSegments();
    const inputDirections = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirections.x;
    snakeBody[0].y += inputDirections.y;
}

export const drawSnake = (gameBoard: any) => {
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y.toString();
        snakeElement.style.gridColumnStart = segment.x.toString();
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    })
}

export const expandSnake = (amount: number) => {
    newSegments += amount;
}

export const onSnake = (position: Position, { ignoreHead = false } = {}) => {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    })
}

const equalPositions = (pos1: Position, pos2: Position) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

const addSegments = () => {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0;
}

export const getSnakeHead = () => {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}

