import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Resources } from "../resources";

export class Bullet extends Actor{

    constructor(spawnPoint,rotation) {
        super({
            pos: spawnPoint,
            vel: new Vector(Math.cos(rotation) * 300, Math.sin(rotation) * 300),
            rotation: rotation,
            width: Resources.Bullet.width,
            height: Resources.Bullet.height,
            CollisionType: CollisionType.Active

        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Bullet.toSprite())
        this.on('collisionstart', (event) => {

        })
        this.on('exitviewport', (event) =>{
            console.log(this.pos)
            this.kill
        })
    }

    onPreUpdate(){

    }
}