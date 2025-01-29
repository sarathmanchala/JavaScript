const myBox = document.getElementById('myBox');

// Movement amount in pixels
const moveAmount = 10;

// Track the initial position
let x = 50; // Matches the initial `left` value in CSS
let y = 50; // Matches the initial `top` value in CSS

// Add a keydown event listener to move the box
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
