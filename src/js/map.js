import { Actor, Camera, CollisionType, Input, Vector } from "excalibur";
import { Resources } from "./resources";
import { Game } from "./game";

export class Map extends Actor{


    constructor(){
        super({
            scale: new Vector(7, 7)
            
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Testroom.toSprite())
        

    }
}