import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Resources } from "../resources";
import { Meteors } from "./Meteors";

export class Bullet extends Actor{

    constructor(spawnPoint,rotation) {
        super({
            pos: spawnPoint,
            vel: new Vector(Math.cos(rotation) * 600, Math.sin(rotation) * 600),
            rotation: rotation,
            width: Resources.Bullet.width,
            height: Resources.Bullet.height,
            CollisionType: CollisionType.Active

        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Bullet.toSprite())
        this.on('collisionstart', (event) => {
            this.destroyMeteors(event)
        })
        this.on('exitviewport', (event) =>{
            this.kill()
        })
    }

    onPreUpdate(){

    }


    destroyMeteors(event){
        if (event.other instanceof Meteors){
            event.other.hitByBullet()
            this.kill()

        }
    }
}