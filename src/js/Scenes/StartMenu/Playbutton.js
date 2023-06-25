import { Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from "excalibur";
import { Resources } from "../../resources";



export class PlayButton extends Actor {

    constructor() {
        super({
            width: Resources.PlayButton.width,
            height: Resources.PlayButton.height,
        });

        //this.scale = new Vector(0.2, 0.2);
        this.pos = new Vector(480, 400)
        this.graphics.use(Resources.PlayButton.toSprite())
    }

    onInitialize(engine) {
        this.engine = engine;
        this.on('pointerup', () => {
            this.resetGame();
        });
    }

    resetGame() {
        this.engine.goToScene('Space');
    }
}