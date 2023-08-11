const canvas = document.getElementById("pacman-canvas");
const ctx = canvas.getContext("2d");

const pacSize = 60;
const pacHalfSize = pacSize / 2;
const edgeBuffer = pacHalfSize + 10; // Buffer to keep Pac-Man away from the edges
let pacX = canvas.width / 2;
let pacY = canvas.height / 2;
let pacMouthOpen = true;
let pacDirectionX = getRandomDirection();
let pacDirectionY = getRandomDirection();

function getRandomDirection() {
    const directions = [-1, 1];
    return directions[Math.floor(Math.random() * directions.length)];
}

function drawPacMan() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pacX += pacDirectionX * 2;
    pacY += pacDirectionY * 2;

    // Change direction when Pac-Man reaches near canvas edges
    if (pacX + pacHalfSize > canvas.width - edgeBuffer || pacX - pacHalfSize < edgeBuffer) {
        pacDirectionX *= -1;
    }
    if (pacY + pacHalfSize > canvas.height - edgeBuffer || pacY - pacHalfSize < edgeBuffer) {
        pacDirectionY *= -1;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(pacX, pacY - pacHalfSize);
    ctx.lineTo(pacX + pacHalfSize, pacY + pacHalfSize);
    ctx.lineTo(pacX - pacHalfSize, pacY + pacHalfSize);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();

    pacMouthOpen = !pacMouthOpen;

    requestAnimationFrame(drawPacMan);
}

canvas.width = 800;
canvas.height = 400;

drawPacMan();
