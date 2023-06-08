import { Actor, Camera, CollisionType, Input, Random, Vector } from "excalibur";
import {Resources, Sounds} from "../resources"

export class Meteors extends Actor{

    

    constructor(x, y){
        super({
            pos: new Vector(x, y),
            scale: new Vector(3, 3),
            vel: new Vector(0, 200),
            width: 25,
            height: 20,
            CollisionType: CollisionType.Active
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.BigMeteor.toSprite())
        console.log(this.pos)


        this.pos = new Vector(Math.random()*960, Math.random()*600)
        this.vel = new Vector(Math.random()*200, Math.random()*200 )
    
    }

    onPreUpdate(engine){
        this.offscreenMeteor()
        this.meteorRotations()


    }




    offscreenMeteor() {
        let screenWidth = 960
        let screenHeight = 540
        let margin = 100

        //if above or under screen reset position
        if (this.pos.y < -margin){
            this.pos = new Vector(this.pos.x, (screenHeight + margin))
        }else if(this.pos.y > (screenHeight + margin)){
            this.pos = new Vector(this.pos.x, -margin)
        }

        // if left or right from screen reset position
        if(this.pos.x < -margin){
            this.pos = new Vector((screenWidth + margin), this.pos.y)
        } else if (this.pos.x > (screenWidth + margin)){
            this.pos = new Vector(0, this.pos.y)
        }
    }

    meteorRotations(){
        this.rotation -= 0.005
    }

    hitBySpaceship(event){
        console.log('crash')
    }
}