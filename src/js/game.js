import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Rock } from './rock'

export class Game extends Engine {

    constructor() {
        super({ width: 1920, height: 1080 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10,0)
        this.add(fish)

        let Rock = new Rock(100, 100)
        this.add(Rock)
    }
}

new Game()
