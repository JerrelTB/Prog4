import * as ex from 'excalibur';
import '../css/style.css'
import { Actor, Color, Engine, Resolution, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player'
import { Room } from './Rooms/testroom';



export class Game extends Engine {

    constructor() {
        super({ 
        viewport: { width: 1280, height: 720},
        resolution: {width: 1920, height: 1080},
        backgroundColor: Color.Black,
        fixedUpdateFps: 60,
        antialiasing: false 
        
        })

 
        this.start(ResourceLoader).then(() => this.startGame())
    }


    startGame() {

        this.addScene('room', new Room())
        this.goToScene('room')




        // let player = new Player(0, 0)
        // this.add(player)

        this.showDebug(true)
        this.showDebug.transform.showAll = true

        
    }
}

new Game()
