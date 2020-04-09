class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        console.log(this);
        //display menu
        this.add.text(20, 20, "Rocket Patrol Menu");

        //play scene play
        this.scene.start("playScene");
    }
}