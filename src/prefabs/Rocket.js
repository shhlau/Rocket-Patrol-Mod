//rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame); 

        //add object to existing scene
        scene.add.existing(this); //add to existing displaylist, updatelist
        this.sfxRocket = scene.sound.add('sfx_rocket'); //add rocket sound fx
        this.isFiring = false; //track rocket firing status
        
    }

    update() {
        //left right movement   // if commented out able to move
        //if(!this.isFiring) {
            if(keyLeft.isDown && this.x >= 47){ 
                this.x -= 2;
            }else if (keyRight.isDown && this.x <= 598) {
                this.x += 2;
            }   
        //}
        //fire button 
        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); // play sfx
        }
        //if fired move up
        if(this.isFiring && this.y >= 108) {
            this.y -=2;
        }
        //resets on miss
        if(this.y <= 108) {
            this.reset();
        }
    }

    //reset rocket 
    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}