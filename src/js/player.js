import { Actor, Input, Vector } from "excalibur";
import { Resources } from "./resources";

const MAX_SPEED = 500

let horizontalAxis = 0
let verticalAxis = 0

export class Player extends Actor{

    constructor(x, y){
        // Om waardes door tre geven aan een actor gebruik in de contsructor een nieuwe functie
        super({
            pos: new Vector(x, y),
            scale: new Vector(2, 2),
            width: Resources.Player.width,
            height: Resources.Player.height
        })
    }

    
    onInitialize(engine){
        this.graphics.use(Resources.Player.toSprite())
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event){
        null
    }

    onPreUpdate(engine){

    let horizontalAxis = 0
    let verticalAxis = 0

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            verticalAxis = -1
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {
            verticalAxis = 1
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            horizontalAxis = -1
        }  
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            horizontalAxis = 1
        }
        

        this.vel = new Vector(horizontalAxis * MAX_SPEED, verticalAxis * MAX_SPEED)
    }
}
