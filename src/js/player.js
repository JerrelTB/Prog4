import { Actor, Camera, CollisionType, Input, Vector } from "excalibur";
import { Resources } from "./resources";
import { Game } from "./game";
import { NPC } from "./npc";

export class Player extends Actor{
    MAX_SPEED = 500

    horizontalAxis = 0
    verticalAxis = 0

    constructor(x, y){
        // Om waardes door tre geven aan een actor gebruik in de contsructor een nieuwe functie
        super({
            pos: new Vector(x, y),
            width: Resources.Player.width,
            height: Resources.Player.height,
            CollisionType: CollisionType.Active
        })
        this.graphics.layers.create({
            name: 'forground', order: 1
        })

    }

    
    onInitialize(engine){
        this.graphics.use(Resources.Player.toSprite())
        this.on('collisionstart', (event) => {this.hitsomething(event)})

    }



    onPreUpdate(engine){
        this.movement(engine)

    }
    
    
    hitsomething(event){
        if( event.other instanceof NPC){
            event.other.hitByPlayer()
        }
    }





    
    movement(engine){
        this.horizontalAxis = 0
        this.verticalAxis = 0

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            this.verticalAxis = -this.MAX_SPEED
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {
            this.verticalAxis = this.MAX_SPEED
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            this.horizontalAxis = -this.MAX_SPEED
        }  
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            this.horizontalAxis = this.MAX_SPEED
        }
        
        this.vel = new Vector(this.horizontalAxis, this.verticalAxis)
    }

    gridmovement(engine){

    }

}
