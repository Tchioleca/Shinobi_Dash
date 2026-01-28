class Player {

    constructor(){
// properties here (the node is what we are seeing on the screen )
    this.node = document.createElement("img")
    this.node.src = "/Assets/images/Player/player.png"

    gameBoxNode.append(this.node)

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
    

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`


}
// methods  here 

}

