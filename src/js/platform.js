import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Platform extends Actor{
    
    constructor(x, y){
        // Om waardes door tre geven aan een actor gebruik in de contsructor een nieuwe functie
        super({
            pos: new Vector(x, y),
            scale: new Vector(2, 2)
        })
    }


    onInitialize(engine){
        this.graphics.use(Resources.Platform.toSprite())
    }
}