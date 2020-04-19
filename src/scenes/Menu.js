class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
        //background menu
        let menuConfig  = {
            fontFamily: 'Arial Black',
            fontSize: '28px',
            backgroundColor:  '#000000',
            color:  '#843605',  
            allign: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        //console.log(this);
        //display menu
        let centerX = game.config.width/2;
        let centerY = game.config.width/2;
        let textSpacer = 64;

        //this.add.text(20, 20, "Rocket Patrol Menu");
        this.add.text(centerX, centerY- 200, '🚀Rocket Patrol🚀', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY- 150, '↓Instructions↓', menuConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY, 'Use ←→arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color= '#000' ;
        this.add.text(centerX, centerY, 'Use ←→arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);

        //play scene play
        //this.scene.start("playScene");
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLeft)) {
            //easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyRight)) {
            //hard mode
            game.settings = {
                spaceshipSpeed: 4,

                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
     }
}