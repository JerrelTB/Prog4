import { Actor, Camera, CollisionType, Input, Vector } from "excalibur";
import { Resources } from "./resources";
import { Game } from "./game";

export class Player extends Actor{
    MAX_SPEED = 500

    horizontalAxis = 0
    verticalAxis = 0

    constructor(x, y){
        // Om waardes door tre geven aan een actor gebruik in de contsructor een nieuwe functie
        super({
            pos: new Vector(x, y),
            scale: new Vector(2, 2),
            width: Resources.Player.width,
            height: Resources.Player.height,
            CollisionType: CollisionType.Active
        })

    }

    
    onInitialize(engine){
        this.graphics.use(Resources.Player.toSprite())
        

    }



    onPreUpdate(engine){

        this.horizontalAxis = 0
        this.verticalAxis = 0

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            this.verticalAxis = -1
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {
            this.verticalAxis = 1
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            this.horizontalAxis = -1
        }  
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            this.horizontalAxis = 1
        }
        
        this.vel = new Vector(this.horizontalAxis * this.MAX_SPEED, this.verticalAxis * this.MAX_SPEED)
    }

}
