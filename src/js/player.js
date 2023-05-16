import { Actor, Input, Vector } from "excalibur";
import { Resources } from "./resources";

const MAX_SPEED = 300

export class Player extends Actor{

    constructor(x, y){
        // Om waardes door tre geven aan een actor gebruik in de contsructor een nieuwe functie
        super({
            pos: new Vector(x, y),
            scale: new Vector(2, 2)
        })
    }

    
    onInitialize(engine){
        this.graphics.use(Resources.Player.toSprite())
    }

    onPreUpdate(engine){

    let xspeed = 0
    let yspeed = 0

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            yspeed = -MAX_SPEED
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {
            yspeed = MAX_SPEED
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            xspeed = -MAX_SPEED 
        }  
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            xspeed = MAX_SPEED
        }
        

        this.vel = new Vector(xspeed, yspeed)
    }
}