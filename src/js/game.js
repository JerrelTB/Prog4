import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Rock } from './rock'
import { Platform } from './platform'
import { Player } from './player'

export class Game extends Engine {

    constructor() {
        super({ width: 600, height: 400 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        // const fish = new Actor()
        // fish.graphics.use(Resources.Fish.toSprite())
        // fish.pos = new Vector(400, 300)
        // fish.vel = new Vector(-10,0)
        // this.add(fish)
    
        let rock = new Rock(100, 100)
        this.add(rock)

        let platform = new Platform(200, 200)
        this.add(platform)

        let player = new Player(300, 300)
        this.add(player)

    }
}

new Game()
