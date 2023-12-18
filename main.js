// Rectangle Collision (Easier)
// When rectangle Collides with a wall, teleport back to original position

// Canvas Setup
// let wrld = document.getElementById("myWorld");
// let ctx1 = wrld.getContext("2d");
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
// wrld.width = 1750;
// wrld.height = 600;
cnv.width = 800;
cnv.height = 600;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

// Player Characteristics
let player = {
  x: cnv.width / 2,
  y: 565,
  w: 25,
  h: 25,
  dx: 5,
  dy: 0,
  a: 0.1,
  jumpSpeed: -15,
  color: "blue"
};


// Global Variables
let walls = [];
// walls.push({ x: 500, y: 0, w: 20, h: 200 });
// walls.push({ x: 100, y: 20, w: 20, h: 200 });
walls.push({ x: 300, y: 300, w: 100, h: 20 });
// walls.push({ x: 500, y: 500, w: 20, h: 200 });
// walls.push({ x: 200, y: 450, w: 20, h: 200 });
walls.push({ x: 500, y: 375, w: 200, h: 20 });


// Draw Function
window.addEventListener("load", drawWrld);

function drawWrld() {
  // LOGIC

  // Horizontal Movement
  if (rightPressed) {
    player.x += player.dx;
  } else if (leftPressed) {
    player.x -= player.dx;
  } 

  //Vertical Movement
  player.dy += player.a; // Accelerate
  player.y += player.dy; // Move

  // Land on Floor
  if (player.y + player.h > cnv.height) {
    player.y = cnv.height - player.h;
    player.dy = 0;
  }
  
  // else if (upPressed) {
  //   player.y -= player.speed;
  // } else if (downPressed) {
  //   player.y += player.speed;
  // }
  

  // DRAWING
  // Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Walls
  ctx.fillStyle = "black";
  for (let i = 0; i < walls.length; i++) {
    let wall = walls[i];
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
  }

  // Draw Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);

  //Check if Player collides with any wall
  // for (let i = 0; i <walls.length; i++) {
  //   let wall = walls[i];
  //   if (rectX < wall.x + wall.w &&
  //     rectX + size > wall.x &&
  //     rectY < wall.y + wall.h &&
  //     rectY + size > wall.y
  // ) {
  //     rectX = 20;
  //     rectY = 300;
  //  }
  // }

  // if (rectX < 0 ||
  //   rectX + size > cnv.width ||
  //   rectY < 0 ||
  //   rectY + size > cnv.height) {
  //     rectX = 20;
  //     rectY = 300;
  //   }
  // Animation Loop
  requestAnimationFrame(drawWrld);

  // Constrain view and PLAYER at 0 and 1750
  // view goes back to zero or stays at 1750
}

function drawCnv() {
    cnv.x = player.x - 200;
}

// Event Listeners & Handlers
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(e) {
    //Check for keys pressed
  if (e.code === "ArrowUp") {
      upPressed = true;
    } else if (e.code === "ArrowDown") {
      downPressed = true;
    } else if (e.code === "ArrowLeft") {
      leftPressed = true;
    } else if (e.code === "ArrowRight") {
      rightPressed = true;
  }

  // if (upPressed) {
  //     rectY -= 7;
  //   } else if (downPressed) {
  //     rectY += 7;
  //   } else if (leftPressed) {
  //     rectX -= 7;
  //   } else if (rightPressed) {
  //     rectX += 7;
  //   }
}

function keyupHandler(e) {
    //Check for keys pressed
    if (e.code === "ArrowUp") {
        upPressed = false;
    } else if (e.code === "ArrowDown") {
        downPressed = false;
    } else if (e.code === "ArrowLeft") {
      leftPressed = false;
  } else if (e.code === "ArrowRight") {
      rightPressed = false;
  } 
}