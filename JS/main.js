//* GLOBAL GAME AUDIO

const backgroundMusic = new Audio(
  "/Assets/Sound/2026-01-27 12-43-08 shinobi das main game music.mp3",
);
backgroundMusic.loop = true;
backgroundMusic.volume = 0.2; // 0.0 to 1.0

const endmusic = new Audio(
  "/Assets/Sound/2026-01-27 12-46-28 shinobi dash end music.mp3",
);
endmusic.loop = true;
endmusic.volume = 0.2; // 0.0 to 1.0

// GLOBAL DOM ELEMENTS

// screens

const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

// buttons

const startBtnNode = document.querySelector("#start-btn");

// game box

const gameBoxNode = document.querySelector("#game-box");

//* GLOBAL GAME VARIABLES



let tileArr = [];
let enemyArr = [];
let playerObj = null;
// again draw order matthers : player on top of enemies on top of tiles

let gameIntervalId = null
let enemySpawnIntervalId = null
let tileIntervalId = null


//* GLOBAL GAME FUNCTIONS

function startGame() {
  //start game music
  backgroundMusic.currentTime = 0;
  backgroundMusic.play();

  // 1 hide start screen
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  // 2 add initial game  elements

  playerObj = new Player();

  console.log(playerObj);
 

  // 3 start game loop
  gameIntervalId = setInterval(gameLoop, Math.round(1000 / 60)); // 60fps (dont change this)
  enemySpawnIntervalId = setInterval(enemySpawn, 5500); // tweek untill no overlap!(5000+ seems safe)

  // 4 start all intervals that are needed

  tileIntervalId = setInterval(tileSpawn, 500); // tweek latter now its uggly... but works
}
function gameLoop() {
  //console.log("game running at 60fps")remove after its working
  //all movements
  // all colision checks
  playerObj.gravity();


  enemyArr.forEach((eachEnemyObj) => {
    eachEnemyObj.automaticMovement();
  });

  tileArr.forEach((eachTileObj) => {
    eachTileObj.paralaxMovement();
  });
  enemyDespawnCheck();
  playerhurtbox();
}

function enemySpawn() {
  // ramdom speed betewwn ( for each  type is diff case diff)
  function pickRandomS(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function pickRandomY(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let enemy1 = new Enemy(
    pickRandomS([11.0, 8.0, 7.5, 9.1, 18, 7.2, 8.3, 7.4, 7.55, 4.5, 3.8]),
    "fast",
    pickRandomY([100, 950, 120, 150, 111, 123, 125, 146, 132, 124]),
  ); //verry uglly code :(
  enemyArr.push(enemy1);
  console.log(enemyArr);

  let enemy2 = new Enemy(pickRandomS([2.6, 2.8, 3.0]), "slow", 330);
  // slow movement add sparinggly
  enemyArr.push(enemy2);
  console.log(enemyArr);

  let enemy3 = new Enemy(pickRandomS([3.6, 4.0, 3.5, 3.7]), "medium", 330); // each X secons main enemy
  enemyArr.push(enemy3);
  console.log(enemyArr);
}

function tileSpawn() {
  let tile1 = new Tile();
  tileArr.push(tile1);
  console.log(tileArr);
}

function enemyDespawnCheck() {
  console.log(enemyArr[0].x); ///still gives error because of timer spawn, same will happen to the tiles(stops at 324 erros)

  if (enemyArr[0] && enemyArr[0].x <= -100) {
    enemyArr[0].node.remove();
    enemyArr.shift();
  }
}

function tileDespawnCheck() {
  console.log(tileArr[0].x); ///still gives error because of timer spawn, same will happen to the tiles(stops at 324 erros)

  if (tileArr[0] && tileArr[0].x <= -900) {
    tileArr[0].node.remove();
    tileArr.shift();
  }
}

function playerhurtbox() {
  enemyArr.forEach((eachEnemyObj) => {
    let isColliding = checkCollision(playerObj, eachEnemyObj)
    if (isColliding) {
      console.log(" the player is DEAD")
      gameOver()
    }
  })
}

function checkCollision(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
}

function gameOver(){

  clearInterval(gameIntervalId)
  clearInterval(enemySpawnIntervalId)
  clearInterval(tileIntervalId)
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;

  //2. then go to last:
  gameScreenNode.style.display = "none"
  gameOverScreenNode.style.display ="flex"
  endmusic.currentTime = 0;
  endmusic.play();

}

//* EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
/*
gameBoxNode.addEventListener("click", () => {
  playerObj.jump();
});
*/

document.addEventListener("keydown", (event) => {
  if (event.key === "w") {
    playerObj.jump();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "s") {
    playerObj.dive();
  }
});

document.getElementById("replay-btn").addEventListener("click", () => {
  location.reload();
});

