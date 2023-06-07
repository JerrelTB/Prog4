
import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Player } from "../player";
import { Ship } from "../Actors/Ship";
import { Resources, Sounds} from '../resources';
import { Meteors } from "../Actors/Meteors";



export class Space extends Scene{
    can_move = true
    



onInitialize(engine){
    let spaceship = new Ship(480,270)
    //this.camera.strategy.elasticToActor(spaceship, 0.2, .8)
    this.add(spaceship)

    Sounds.Countdown.play(0.5)
    Sounds.Battletheme.play(0.1)


    let bigmeteor = new Meteors(200, 200)
    this.add(bigmeteor)
    

}

onPreUpdate(engine){

}
}

