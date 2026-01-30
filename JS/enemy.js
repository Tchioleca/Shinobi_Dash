class Enemy {
  constructor(runSpeed, type, posY) {
    // properties here (the node is what we are seeing on the screen )
    this.type = type // to acess the type later
    this.node = document.createElement("img");
    if (type === "medium") {
      this.node.src = "./Assets/images/Enemy/Enemy1.png";
    } else if (type === "fast") {
      this.node.src = "./Assets/images/Enemy/Enemy2.png";
    } else if (type === "slow") {
      this.node.src = "./Assets/images/Enemy/Enemy3.png";
    }

    //make png on photoshop to be transparent again

    gameBoxNode.append(this.node);
    this.x = 800; //less = left / more = right
    this.y = posY; // 330 is same as player when on the floor
    this.width = 90;
    this.height = 90;

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

    this.speed = runSpeed; //original : 3.5, now is beeing called in the main.js as a parameter

    //this.gravitySpeed = 3.6 does not jump
    //this.jumpSpeed = 230    does not jump
  }
  // methods  here for enemy : move from rigth to left and collision with player , disapears

  automaticMovement() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }
}

//game box sizes:
// width:900px;
// height:500px;
