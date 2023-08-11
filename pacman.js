const canvas = document.getElementById("pacman-canvas");
const ctx = canvas.getContext("2d");

const pacSize = 30;
let pacX = canvas.width - pacSize;
let pacY = 0;
let pacAngle = 0;
let pacMouthOpen = true;

function drawPacMan() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(pacX, pacY, pacSize, 0.2 * Math.PI, 1.8 * Math.PI, pacMouthOpen);
    ctx.lineTo(pacX, pacY);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

    pacAngle += 0.1;
    pacMouthOpen = !pacMouthOpen;

    requestAnimationFrame(drawPacMan);
}

canvas.width = 200;
canvas.height = 200;

drawPacMan();
