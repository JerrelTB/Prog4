import { Actor, CollisionType, Input, Scene, Sound, Vector, Label, Color, Font, FontUnit, Engine} from "excalibur";
import { Player } from "../player";
import { Ship } from "../Actors/Ship";
import { Resources, Sounds} from '../resources';
import { Meteors } from "../Actors/Meteors";
import { Bullet } from "../Actors/bullet";
import { LivesUI } from "../UI/livesleft";
import { Spaceimg } from "./StartMenu/Background";



export class Space extends Scene{

//maxlives for the space ship
givenLives
score = 0

//booleans for better gameplay
can_move = false
can_crash = false
can_shoot = false

//ui labels
liveCountLabel
scoreCountLabel


onInitialize(engine){
    this.game = engine
    this.givenLives = 3

    let Background = new Spaceimg
    this.add(Background)

    //countdown prefences 
    this.startTimer(3000, () => {
        this.startValueChange();
    });






    //actors

    //player
    let spaceship = new Ship(480,270, this.givenLives, this.can_move, this.can_crash, this.can_shoot)
    this.add(spaceship)

    //Objects
    let bigmeteor = new Meteors()
    this.add(bigmeteor)

    let meteors = [];
    const totalMeteors = 4;
    const minMeteorsOnScreen = 2;
  
    for (let i = 0; i < totalMeteors; i++) {
      let meteor = new Meteors();
      meteors.push(meteor);
      this.add(meteor);
    }

    const checkMeteorsOnScreen = () => {
        let meteorsOnScreen = meteors.filter(meteor => meteor.visible);
        if (meteorsOnScreen.length < minMeteorsOnScreen) {
          const meteorsToAdd = minMeteorsOnScreen - meteorsOnScreen.length;
          for (let i = 0; i < meteorsToAdd; i++) {
            let meteor = new Meteors();
            meteors.push(meteor);
            this.add(meteor);
          }
        }
    };


    setInterval(checkMeteorsOnScreen, 800);


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
        //music
        Sounds.Countdown.play(0.7)

        Sounds.Battletheme.loop = true
        Sounds.Battletheme.play(0.3)
}

onDeactivate(){
    Sounds.Battletheme.pause()
}


startTimer(delay, callback) {
    setTimeout(callback, delay);
}

startValueChange(){
    this.can_move = true
    this.can_crash = true
    this.can_shoot = true
    console.log("Values changed")
    console.log(this.can_move)
    
}


onPreUpdate(engine){
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
    this.game.goToScene('GameOver', {finalscore: this.score})

    let data = {
        score: this.score
    }
    localStorage.setItem("score", JSON.stringify(data))
    
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