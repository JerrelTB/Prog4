import { Actor, Camera, CollisionType, Input, Vector } from "excalibur";
import {Resources, Sounds} from "../resources"

export class Ship extends Actor{

    
    ROTATION_SPEED = 0.08
    can_move

    constructor(x, y){
        super({
            pos: new Vector(x, y),
            scale: new Vector(2.5, 2.5),
            rotation: 0.90
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Spaceship.toSprite())
    }

    onPreUpdate(engine){
        this.movement(engine)
        this.offscreenShip(engine)
        this.Shooting(engine)
    }

    movement(engine){
        

        let speed = 0;

        if (
        engine.input.keyboard.isHeld(Input.Keys.W) ||
        engine.input.keyboard.isHeld(Input.Keys.Up)
        ){
            speed = 350;
        }else {
            
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

        let direction = new Vector(
            Math.cos(this.rotation) * speed,
            Math.sin(this.rotation) * speed
          );
        
        this.vel = direction;

    }

    offscreenShip(engine) {
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

    Shooting(engine){
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)){
            Sounds.Blastershot.play(0.2)
        }
    }



}