import { Actor, Camera, CollisionType, Input, Random, Vector } from "excalibur";
import {Resources, Sounds} from "../resources"
import { Ship } from "./Ship";

export class Meteors extends Actor{

    MeteorCount = 0
    points = 100

    constructor(x, y){
        super({
            pos: new Vector(x, y),
            scale: new Vector(3, 3),
            vel: new Vector(0, 0),
            width: 22,
            height: 18,
            CollisionType: CollisionType.Active
        })
    }

    onInitialize(engine){
        this.game = engine
        this.MeteorCount ++
        this.graphics.use(Resources.BigMeteor.toSprite())

        //position and excludes
        let posX, posY
        do {
            posX = this.getRandomPositionExcludingRange(280, 590);
            posY = this.getRandomPositionExcludingRange(180, 320);
        } while (this.isOverlappingShip(posX, posY));
          


        //direction and speed
        let velX = Math.random() * 400 - 200
        let velY = Math.random() * 400 - 200

        //random scale not below 1
        let scalerandom = Math.random()*1.5 + 1.2

        this.pos = new Vector(posX, posY)
        this.vel = new Vector(velX,velY )
        this.scale = new Vector( scalerandom, scalerandom)
    
    }

    onPreUpdate(engine){
        this.offscreenMeteor()
        this.meteorRotations()


    }

    getRandomPositionExcludingRange(min,max){
        let position;
        do {
          position = Math.random() * 960;
        } while (position >= min && position <= max);
        return position;
    }

    isOverlappingShip(x, y) {
        // Assuming the ship actor is named "spaceship"
        let shipActor = this.game.currentScene.actors.find(actor => actor instanceof Ship);
        if (shipActor) {
          const shipPos = shipActor.pos;

          return (
            x >= shipPos.x - shipActor.width / 2 &&
            x <= shipPos.x + shipActor.width / 2 &&
            y >= shipPos.y - shipActor.height / 2 &&
            y <= shipPos.y + shipActor.height / 2
          );
        }
        return false;
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
        console.log('crashed with meteor')
        this.kill()
    }

    hitByBullet(){
        console.log('meteor is destroyed')
        Sounds.Meteorhit.play(0.6)
        this.game.currentScene.updateScore()
        this.kill()
    }


        
}