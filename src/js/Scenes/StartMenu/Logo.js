import { Actor, CollisionType, Input, Vector, Shape, } from "excalibur";
import { Resources } from "../../resources.js";


export class Logo extends Actor {

    constructor() {
        super({
            pos: new Vector(0, 0)
        });

        this.scale = new Vector(2, 2);
        this.pos = new Vector(480, 200)
        this.graphics.use(Resources.Logo.toSprite())
    }

}