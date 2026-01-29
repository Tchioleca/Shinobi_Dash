//* GLOBAL GAME AUDIO

const backgroundMusic = new Audio("/Assets/Sound/2026-01-27 12-43-08 shinobi das main game music.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.2; // 0.0 to 1.0

// GLOBAL DOM ELEMENTS

// screens
const startScreenNode = document.querySelector("#start-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// buttons
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")


//* GLOBAL GAME VARIABLES
let playerObj = null
let tileObj = null
let enemyObj = null 

//* GLOBAL GAME FUNCTIONS

function startGame() {
    //start game music
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
    // 1 hide start screen
startScreenNode.style.display = "none"
gameScreenNode.style.display = "flex" 
    // 2 add initial elements
     tileObj = new tile()
     playerObj = new Player()
     enemyObj = new Enemy()
    
    console.log(playerObj)
    console.log(tileObj)
    console.log(enemyObj)


    // 3 start game loop 
    setInterval(gameLoop, Math.round(1000/60)) // 60fps (dont change this)




    // 4 start all intervals that are needed
}
 function gameLoop() {
    //console.log("game running at 60fps")remove after its working
    //all movements
    // all colision checks
    playerObj.gravity()



 }
  


//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)

gameBoxNode.addEventListener("click", () => {
    playerObj.jump()
})


document.addEventListener("keydown", (event) => {
    if (event.key === "w") {
       playerObj.jump() 
    }
    
})





//* planning session

//1
// player object(x, y, w, h)
//properties of player
//player movement up down left right ()

//2
//terrain  object (x, y, w, h) (were the player is) 
//terrain spwan 
//  move rigth to left x decrease
//terrain deletion on reaching left
//platform where the player is

//3
//enemy    (x, y, w, h)
//enemy random spawn 


//4 logic
// collision logic for player hit 


// logs to see if things are here or not :

