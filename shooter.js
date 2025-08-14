const canvas = document.getElementById("shooterCanvas");
const ctx = canvas.getContext("2d");

let shipX = 275;
let bullets = [];

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") shipX -= 10;
  if (e.key === "ArrowRight") shipX += 10;
  if (e.key === " ") bullets.push({ x: shipX + 15, y: 350 });
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(shipX, 360, 50, 30);

  bullets.forEach((b, i) => {
    b.y -= 5;
    ctx.fillRect(b.x, b.y, 5, 10);
    if (b.y < 0) bullets.splice(i, 1);
  });

  requestAnimationFrame(draw);
}
draw();
