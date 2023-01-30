export let snakeSpeed = 1;
export let expansionRate = 1;
let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0)
                break;
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0)
                break;
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0)
                break;
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0)
                break;
            inputDirection = { x: 1, y: 0 };
            break;
    }
    ;
});
export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}
const speedInput = document.querySelector(".speedInput");
speedInput === null || speedInput === void 0 ? void 0 : speedInput.addEventListener("change", () => {
    snakeSpeed = parseInt(speedInput === null || speedInput === void 0 ? void 0 : speedInput.value);
});
const expansionInput = document.querySelector(".expansionRateInput");
expansionInput === null || expansionInput === void 0 ? void 0 : expansionInput.addEventListener("change", () => {
    expansionRate = parseInt(expansionInput === null || expansionInput === void 0 ? void 0 : expansionInput.value);
});
