import { Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from "excalibur";

export class GameOver extends Scene{

    onInitialize(){
        
        this.createGameOverText()
        this.createFinalScore()

    }





    createGameOverText(){
        const gameOverText = new Label({
            text: 'GAME OVER',
            pos: new Vector(130,270),
            TextAlign: TextAlign.Center,
            color: Color.White,
            font: new Font({
                family: 'impact',
                sizes: 10,
                unit: FontUnit.Rem
            })
        })
        this.add(gameOverText)
    }

    createFinalScore(){
        const gameOverScore = new Label({
            text: `Score: L score`,
            pos: new Vector(400,330),
            scale: new Vector(0.2, 0.2),
            color: Color.White,
            font: new Font({
                family: 'impact',
                unit: FontUnit.Rem
            })
        })
        this.add(gameOverScore)
        console.log(`score added`)
    }


}