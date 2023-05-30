import { Actor, CollisionType, Input, Scene, Vector } from "excalibur";
import { Resources } from "../resources";
import { Game } from "../game";
import { Player } from "../player";
import { Map } from "../map";


export class Room extends Scene{
onInitialize(engine){
    let map = new Map
    this.add(map)

    let player = new Player(0, 0)
    this.add(player)
    
    this.camera.strategy.elasticToActor(player, 0.05, 0)
    


}
}

