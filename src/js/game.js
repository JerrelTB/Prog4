
import '../css/style.css'
import { Actor, Color, Engine, Resolution, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

import {Space } from './Rooms/testroom';




export class Game extends Engine {

    constructor() {
        super({ 
        viewport: { width: 1280, height:720},
        resolution: {width: 960, height: 540},
        backgroundColor: Color.Black,
        fixedUpdateFps: 60,
        antialiasing: false 
        
        })
        
 
        this.start(ResourceLoader).then(() => this.startGame())
    }


    startGame() {
        //scenes
        this.addScene('Gameover', new GameOver() )
        this.addScene('Space', new Space())
        this.goToScene('Space')




        // let player = new Player(0, 0)
        // this.add(player)

        // this.showDebug(true)
        this.showDebug.transform.showAll = true

        
    }
}

new Game()
