//spaceship prefab
class smallship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.points = pointValue*5;
    }

    update() { 
        this.x -= game.settings.spaceshipSpeed*1.5;
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}