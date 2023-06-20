import { Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from "excalibur";

export class GameOver extends Scene{

    onInitialize(){
        
        this.createGameOverText()

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



}