import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction } from "excalibur";
import {Resources, Sounds} from "../resources"
import { Meteors } from "./Meteors";
import { Space } from "../Scenes/space";
import { Game } from "../game";


export class Ship extends Actor{

    can_move 
    can_crash 
    can_shoot 
    

    //half of resolution width and height needed for pos reset, ScreenWidth, ScreenHeight
    sw_reset = 480
    sh_reset = 270

    DECELERATION = 50
    ROTATION_SPEED = 0.09

    lives

    constructor(x, y, givenLives,CM,CC,CS){
        super({
            pos: new Vector(x, y),
            scale: new Vector(1.5, 1.5),
            rotation: 0.90,
            width: Resources.Spaceship.width,
            height: Resources.Spaceship.height,
            CollisionType: CollisionType.Active
        })
        
        this.lives = givenLives
        this.can_move = CM
        this.can_crash = CC
        this.can_shoot = CS

    }

    onInitialize(engine){
        this.game = engine
        this.graphics.use(Resources.Spaceship.toSprite())
        this.can_crash = true
        console.log(this.can_move)

        this.on('collisionstart', (event) => {
            this.hitMeteor(event),
            this.CrashAndDie(event)
        })
        
    }

    onPreUpdate(engine){
        this.movement(engine)


        this.offscreenShip()



        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.Shoot()
        }
        
        // this.resetPosition(engine, this.sw_reset, this.sh_reset)
    }






    movement(engine){
        

        let speed = 0;

        if (
        engine.input.keyboard.isHeld(Input.Keys.W) ||
        engine.input.keyboard.isHeld(Input.Keys.Up)
        ){
            speed = 300;
        }

        if (
            engine.input.keyboard.isHeld(Input.Keys.S) ||
            engine.input.keyboard.isHeld(Input.Keys.Down)
            ){
                speed = -150;
            }
    


        //rotation ship
        if (
        engine.input.keyboard.isHeld(Input.Keys.D) ||
        engine.input.keyboard.isHeld(Input.Keys.Right)
        ){
            this.rotation += this.ROTATION_SPEED
        }

        if (
        engine.input.keyboard.isHeld(Input.Keys.A) ||
        engine.input.keyboard.isHeld(Input.Keys.Left)
        ){
            this.rotation -= this.ROTATION_SPEED
        }

        if (engine.input.keyboard.isHeld(Input.Keys.ShiftLeft)){
            speed = 500
        }

        if (engine.input.keyboard.isHeld(Input.Keys.J)){
            speed = 150
        }

        let direction = new Vector(
            Math.cos(this.rotation) * speed,
            Math.sin(this.rotation) * speed
          );
        
        this.vel = direction;

    }

    
    


    offscreenShip() {
        let screenWidth = 960
        let screenHeight = 540
        let margin = 20

        //if above or under screen reset position
        if (this.pos.y < -margin){
            this.pos = new Vector(this.pos.x, (screenHeight + margin))
        }else if(this.pos.y > (screenHeight + margin)){
            this.pos = new Vector(this.pos.x, 0)
        }

        // if left or right from screen reset position
        if(this.pos.x < -margin){
            this.pos = new Vector((screenWidth + margin), this.pos.y)
        } else if (this.pos.x > (screenWidth + margin)){
            this.pos = new Vector(0, this.pos.y)
        }
    }

    Shoot(){
        this.game.currentScene.addBullet(this.pos, this.rotation)
        Sounds.Blastershot.play(0.2)
    }

        
    

    hitMeteor(event){
        if (this.can_crash) {
            if (event.other instanceof Meteors){
                event.other.hitBySpaceship()
                Sounds.Shiphit.play(0.5)
                this.game.currentScene.die()
                this.game.currentScene.hitrecieved()
                this.lives -= 1
                this.givenLives = this.lives
                console.log(`Lives left: ${this.lives}`)
            }
        }

    }

    CrashAndDie(event) {
        if (this.can_crash) {
            if (event.other instanceof Meteors) {
                this.pos = new Vector(480, 270);
                
                const blinkDuration = 250; // Duration of the blink animation in milliseconds
                const blinkCount = 3; // Number of times the object should blink
                this.can_crash	= false
                this.actions.blink(blinkDuration, blinkDuration, blinkCount);
                
                setTimeout(() => {
                    this.can_crash = true;
                }, blinkDuration * blinkCount);
                if (this.lives === 0) {
                    this.game.currentScene.gameOver();
                    console.log(`you had ${this.givenLives} lives left, you died`);
                }
            }
        }
    }


}