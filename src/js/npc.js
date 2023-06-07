import { Actor, Camera, CollisionType, Input, Vector } from "excalibur";
import { Resources } from "./resources";


export class NPC extends Actor{
 


    constructor(x, y){
        super({
            pos: new Vector(760, 291),
            scale: new Vector(2, 2),
            width: Resources.npc.width,
            height: Resources.npc.height,
            CollisionType: CollisionType.Fixed
        })
        this.graphics.layers.create({
            name: 'forground', order: 1
        })
        this.body.mass
    }

    onInitialize(engine){
        this.graphics.use(Resources.npc.toSprite())
        console.log("npc ready")
        

    }

    onPreUpdate(engine){
    }

    hitByPlayer(event){
        console.log("Player convo possible")

    }
}