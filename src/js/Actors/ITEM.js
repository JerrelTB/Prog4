import { Actor, CollisionType, Engine, Input, Scene, Sound, Vector, Label, Color, Font, FontUnit} from "excalibur";
import { Meteors } from "./Meteors";
import { Resources } from "../resources";
import { Ship } from "./Ship";

export class ITEM extends Actor{


    movehelp

    constructor(){
        super({
            scale: new Vector(1.5, 1.2)
        })
    }

    onInitialize(){
        this.graphics.use(Resources.Halo.toSprite())

        
        this.movehelp = new Label({
            text: `......`,
            pos: new Vector(20,1),
            scale: new Vector(0.1, 0.1),
            color: Color.White,
            font: new Font({
                family: 'impact',
                unit: FontUnit.Rem
            })
        })

        this.addChild(this.movehelp)
    }
    
    test(){
        console.log('score')
    }
}