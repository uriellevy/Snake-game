let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener('keydown', (e:KeyboardEvent) => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
    };
});

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}

export let snakeSpeed = 1;
export let expansionRate = 1;


const speedInput = document.querySelector(".speedInput") as HTMLInputElement | null;
speedInput?.addEventListener("change", () => {
    snakeSpeed = parseInt(speedInput?.value);
})

const expansionInput = document.querySelector(".expansionRateInput") as HTMLInputElement | null;
expansionInput?.addEventListener("change", () => {
    expansionRate = parseInt(expansionInput?.value);
})