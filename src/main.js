/*
__starting__
moving while firing + 10 
random spaceship spawns +10
random scrolling background + 10

__novice__
new title menu +15

__int__
new assets rocket space explosion +25
smaller spaceship worth more point/faster +25

__facade__
sonic icon ui... +5 :D
*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);

//game setting 
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000
}
//reserve some keyboard variables
let keyF, keyLeft,keyRight;