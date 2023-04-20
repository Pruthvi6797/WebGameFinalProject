
//Main game
var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    scene: [Startup,MainGame],
    pixelArt: true,
  
    //Adding game physics
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}


//Start of the game
var game = new Phaser.Game(config);