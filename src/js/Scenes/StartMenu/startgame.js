import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { PlayButton } from "./Playbutton";
import { Logo } from "./Logo";
import music from "../../Sounds/menumusic.mp3";
import { Spaceimg } from "./Background";

export class startGame extends Scene{
    onInitialize(){

        let Background = new Spaceimg()
        this.add(Background)

        const logo = new Logo()
        this.add(logo)

        
        const playbutton = new PlayButton()
        this.add(playbutton)

        console.log('StartMenu')
    }

    onActivate(){
        this.menumusic = new Audio(music)
        this.menumusic.loop = true
        this.menumusic.play()
        this.menumusic.volume = 0.3
    }

    onDeactivate(){
        this.menumusic.pause()
    }
}