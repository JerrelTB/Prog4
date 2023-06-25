
//engine
import '../css/style.css'
import { Actor, Color, Engine, Resolution, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


//scenes
import { Space } from './Scenes/space';
import { GameOver } from './Scenes/gameover';
import { Leaderboard } from './Scenes/leaderboard';
import { startGame } from './Scenes/StartMenu/startgame';
import { Settings } from './Scenes/settings';


fetch("images\Logo.png").then(Response => {
    console.log(Response)
    return Response.blob()
    }).then()




export class Game extends Engine {

    constructor() {
        super({ 
        viewport: { width: 1664, height: 936},
        resolution: {width: 960, height: 540},
        backgroundColor: Color.Black,
        fixedUpdateFps: 60,
        antialiasing: false 
        
        })
        
 
        this.start(ResourceLoader).then(() => this.startGame())
    }


    startGame() {


        //scenes
        this.addScene('Settings', new Settings)
        this.addScene ('StartGame', new startGame())
        this.addScene ('Leaderboard', new Leaderboard())
        this.addScene('GameOver', new GameOver() )
        this.addScene('Space', new Space())

        this.goToScene('StartGame')





        //this.showDebug(true)

        
    }
}

new Game()
