import { Actor, CollisionType, Input, Scene, Sound, Vector, Label, Color, Font, FontUnit} from "excalibur";
import { Player } from "../player";
import { Ship } from "../Actors/Ship";
import { Resources, Sounds} from '../resources';
import { Meteors } from "../Actors/Meteors";
import { Bullet } from "../Actors/bullet";
import { LivesUI } from "../UI/livesleft";



export class Space extends Scene{

//maxlives for the space ship
givenLives
score = 0

//ui labels
liveCountLabel
scoreCountLabel


onInitialize(engine){
    this.game = engine
    this.givenLives = 3

    //music
    Sounds.Countdown.play(0.7)
    Sounds.Battletheme.play(0.1)
    Sounds.Battletheme.loop =  true







    //actors

    //player
    let spaceship = new Ship(480,270, this.givenLives)
    this.add(spaceship)

    //Objects
    let bigmeteor = new Meteors()
    this.add(bigmeteor)


    //UI
    this.lifeCountLabel = new Label({
        text: `Lives: ${this.givenLives}`,
        pos: new Vector(10,30),
        scale: new Vector(0.2, 0.2),
        color: Color.White,
        font: new Font({
            family: 'impact',
            unit: FontUnit.Rem
        })
    })
    this.add(this.lifeCountLabel)





    this.scoreCountLabel = new Label({
        text: `Score: ${this.score}`,
        pos: new Vector(200,30),
        scale: new Vector(0.2, 0.2),
        color: Color.White,
        font: new Font({
            family: 'impact',
            unit: FontUnit.Rem
        })
    })
    this.add(this.scoreCountLabel)

}

onActivate(){
}




hitrecieved(){
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

die(){
    this.givenLives -= 1
    console.log(`you wasted your given lives.. lives left: ${this.givenLives}`)
    this.updateLivesLabel()
}

updateScore(){
    this.score += 100
    this.scoreCountLabel.text = `Score: ${this.score}`
}


updateLivesLabel(){
    this.lifeCountLabel.text = `Lives: ${this.givenLives}`
}
}