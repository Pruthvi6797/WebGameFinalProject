//Main game will be here
class MainGame extends Phaser.Scene {

  constructor() {
    super("startgame");
  }

  init() {


  }





  create() {
    //Create animation -- demo test
    this.anims.create({
      key: 'walk',
      frames: 'mummy',
      frameRate: 20,
      repeat: -1,
    });

    this.add.sprite(500, 600).setScale(1).play('walk');

    //Create music -- demo test
    this.music = this.sound.add("music");
    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    }

    this.music.play(musicConfig);





  }

}
