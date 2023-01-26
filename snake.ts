import { getInputDirection } from "./input";

export const SNAKE_SPEED = 1;

interface SnakeBody {
    x: number
    y: number
}

const snakeBody: SnakeBody[] = [
    {x:10, y:11},
    {x:11, y:11},
    {x:12, y:11},
];

export const updateSnake = () => {
    const inputDirections = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    // snakeBody[0].x += 0;
    // snakeBody[0].y ++;
}

export const drawSnake = (gameBoard:any) => {
    snakeBody.forEach((segment,idx) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y.toString();
        snakeElement.style.gridColumnStart = segment.x.toString();
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    })
    
}