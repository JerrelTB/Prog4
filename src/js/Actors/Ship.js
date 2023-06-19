import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction } from "excalibur";
import {Resources, Sounds} from "../resources"
import { Meteors } from "./Meteors";
import { Space } from "../Scenes/space";
import { Game } from "../game";


export class Ship extends Actor{
    can_move
    can_crash

    

    //half of resolution width and height needed for pos reset, ScreenWidth, ScreenHeight
    sw_reset = 480
    sh_reset = 270
    

    ROTATION_SPEED = 0.08
    lives

    constructor(x, y, lives){
        super({
            pos: new Vector(x, y),
            scale: new Vector(1.5, 1.5),
            rotation: 0.90,
            width: Resources.Spaceship.width,
            height: Resources.Spaceship.height,
            CollisionType: CollisionType.Active
        })

        this.lives = 3
    }

    onInitialize(engine){
        this.game = engine
        this.graphics.use(Resources.Spaceship.toSprite())

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

        if (event.other instanceof Meteors){
            event.other.hitBySpaceship()
            Sounds.Shiphit.play(0.5)
            this.lives -= 1
            console.log(`Lives left: `)
        }
    }

    CrashAndDie(event){
        if (event.other instanceof Meteors){
            this.pos = new Vector(480,270)
            this.actions.blink(200,200,3)
            if( this.lives === 0 ){
                this.game.currentScene.gameOver()
            }        
        }
    }


}