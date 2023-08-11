const canvas = document.getElementById("pacman-canvas");
const ctx = canvas.getContext("2d");

const pacSize = 60;
const pacHalfSize = pacSize / 2;
let pacX = canvas.width * 3 / 4;
let pacY = canvas.height / 2;
let pacMouthOpen = true;
let pacDirectionX = getRandomDirection(); // Initialize with random X direction
let pacDirectionY = getRandomDirection(); // Initialize with random Y direction

function getRandomDirection() {
    const directions = [-1, 1];
    return directions[Math.floor(Math.random() * directions.length)];
}

function drawPacMan() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pacX += pacDirectionX * 2; // Move Pac-Man along the X-axis
    pacY += pacDirectionY * 2; // Move Pac-Man along the Y-axis

    // Change direction when Pac-Man hits canvas edges
    if (pacX + pacHalfSize > canvas.width || pacX - pacHalfSize < 0) {
        pacDirectionX = getRandomDirection();
    }
    if (pacY + pacHalfSize > canvas.height || pacY - pacHalfSize < 0) {
        pacDirectionY = getRandomDirection();
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
