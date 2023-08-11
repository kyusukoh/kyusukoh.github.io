const canvas = document.getElementById("pacman-canvas");
const ctx = canvas.getContext("2d");

const pacSize = 60;
let pacX = canvas.width - pacSize;
let pacY = canvas.height / 2;
let pacAngle = 0;
let pacMouthOpen = true;
let pacDirection = "right";

function drawPacMan() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (pacDirection === "right") {
        pacX += 2; // Move Pac-Man to the right
    } else {
        pacX -= 2; // Move Pac-Man to the left
    }

    ctx.beginPath();
    ctx.arc(pacX, pacY, pacSize, 0.2 * Math.PI, 1.8 * Math.PI, pacMouthOpen);
    ctx.lineTo(pacX, pacY);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

    pacAngle += 0.1;
    pacMouthOpen = !pacMouthOpen;

    if (pacX > canvas.width) {
        pacX = -pacSize; // Reset Pac-Man position to the left
        pacDirection = "right";
    } else if (pacX < -pacSize) {
        pacX = canvas.width; // Reset Pac-Man position to the right
        pacDirection = "left";
    }

    requestAnimationFrame(drawPacMan);
}

canvas.width = 800;
canvas.height = 400;

drawPacMan();
