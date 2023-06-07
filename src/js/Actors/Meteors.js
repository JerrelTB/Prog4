import { Actor, Camera, CollisionType, Input, Vector } from "excalibur";
import {Resources} from "../resources"

export class Meteors extends Actor{
    

    rotationSpeed
    speed
    points

    machine = createMachine({

    })

    constructor(x, y){
        super({
            pos: new Vector(x, y)
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.BigMeteor.toSprite)
    }
}