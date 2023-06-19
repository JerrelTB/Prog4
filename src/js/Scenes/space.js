import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Player } from "../player";
import { Ship } from "../Actors/Ship";
import { Resources, Sounds} from '../resources';
import { Meteors } from "../Actors/Meteors";
import { Bullet } from "../Actors/bullet";



export class Space extends Scene{
    



onInitialize(engine){
    this.game = engine

    let spaceship = new Ship(480,270)
    this.add(spaceship)

    Sounds.Countdown.play(0.7)
    Sounds.Battletheme.play(0.1)
    Sounds.Battletheme.loop =  true

    let meteor = new Meteors



    let bigmeteor = new Meteors()
    this.add(bigmeteor)

}

onPreUpdate(engine){
}


hitrecieved(event){
    this.camera.shake(15,15,100)
}

addBullet(spawnPoint, rotation){
    this.add(new Bullet(spawnPoint,rotation))
    
}

gameOver(){
    Sounds.Battletheme.stop()
    Sounds.Deathsound.play(0.3)
    this.game.goToScene('GameOver')
    
}


}