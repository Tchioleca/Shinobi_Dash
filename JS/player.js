class Player {
  constructor() {
    // properties here (the node is what we are seeing on the screen )
    this.node = document.createElement("img");
    this.node.src = "./Assets/images/Player/player.png";

    gameBoxNode.append(this.node);
    this.x = 350; //less = left / more = right
    this.y = 0; //more = lower / less = higher
    this.width = 90;
    this.height = 90;

    /* original possition where i want it : 
    this.x = 0   //less = left / more = right
    this.y = 330 //more = lower / less = higher
    this.width = 90
    this.height = 90
// how to place the player image on top ? = object draw order is from last = top , when declared in game constants 

   /* tiles spawn possition reference :
    this.x = 0
    this.y = 400
    this.width = 90
    this.height = 90
*/

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    this.gravitySpeed = 2.7;
    this.jumpSpeed = 440; // 230 original value
    //this.diveDownSpeed = 500; reversed
    this.isOnGround = false; // should be false because this is for spawn and respawn so the player is on the air on spwan (changing this to true or false does nothing the states are being updated elsewere ?)
  }
  // methods  here
  gravity() {
    if (this.y < 330) {
      this.y += this.gravitySpeed;
      this.node.style.top = `${this.y}px`;
    } else {
      this.isOnGround = true;
    } //check if is on ground or not then update the value of true or false in the player (this is also creating the floor effect)
  }

  jump() {
    if (this.isOnGround) {
      this.y -= this.jumpSpeed;
      this.isOnGround = false;

      this.node.style.top = `${this.y}px`;
      // now does not allow double jumps
    }
  }

  dive() {
    if (this.y < 330) {
      this.y = 334.5 ;
      this.node.style.top = `${this.y}px`;
    }
  }
}

//game box sizes:
// width:900px;
// height:500px;
