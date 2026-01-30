class Tile {
  constructor() {
    // properties here (the node is what we are seeing on the screen )
    this.node = document.createElement("img");
    this.node.src = "./Assets/images/tile/FloorTile.png";

    gameBoxNode.append(this.node);

    this.x = 800;
    this.y = 400;
    this.width = 90;
    this.height = 90;

    /* player starting possition :
    this.x = 0
    this.y = 300
    this.width = 90
    this.height = 90
*/

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.speed = 2; //hardcoded needs to be slow 
  }
  // methods  here
  paralaxMovement() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }

}

//game box sizes:
// width:900px;
// height:500px;
