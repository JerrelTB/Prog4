import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import player from '../images/Player/mainChar.png'
import testroom from '../images/rooms/testroom.png'

import spaceship from '../images/Ship/spaceship.png'
import bigmeteor from '../images/Meteors/big_meteor.png'
import bigmeteor2 from '../images/Meteors/BigMeteor2.png'
import points from '../images/Meteors/points.png'
import bullet from '../images/Ship/bullet.png'

import halo from '../images/Player/ITEM1.png'


//startmenu
import playbutton from '../images/Startmenu/Playbutton.png'
import logo from '../images/Startmenu/Logo.png'
import spaceimg from '../images/Startmenu/space.png'

//sounds
import blastershot from './Sounds/blastershot.mp3'
import countdown from './Sounds/countdown.mp3'
import battletheme from './Sounds/battletheme.mp3'
import shiphit from './Sounds/shiphit.mp3'
import deathsound from "./Sounds/deathsound.mp3"
import meteorhit from "./Sounds/meteorhit.mp3"



const Resources = {
    Player: new ImageSource(player),
    Testroom: new ImageSource(testroom),
    Spaceship: new ImageSource(spaceship),
    BigMeteor: new ImageSource(bigmeteor),
    BigMeteor2: new ImageSource(bigmeteor2),
    Points: new ImageSource(points),
    Bullet: new ImageSource(bullet),

    Halo: new ImageSource(halo),

    PlayButton: new ImageSource(playbutton),
    Logo: new ImageSource(logo),
    SpaceBG: new ImageSource(spaceimg)

}

const Sounds = {
    Countdown: new Sound(countdown),
    Battletheme: new Sound(battletheme),
    Blastershot: new Sound(blastershot),
    Shiphit: new Sound(shiphit),
    Meteorhit: new Sound(meteorhit),
    Deathsound: new Sound(deathsound),


}

const ResourceLoader = new Loader([Resources.Testroom, Resources.Player,
     Resources.Spaceship, Resources.BigMeteor,
     Resources.Bullet,  Resources.PlayButton,
     Resources.Logo,Resources.SpaceBG,
     Resources.BigMeteor2, Resources.Points,
     Resources.Halo,
    Sounds.Countdown, Sounds.Battletheme,
     Sounds.Blastershot, Sounds.Shiphit,
    Sounds.Deathsound, Sounds.Meteorhit,
    ])


export { Resources, Sounds, ResourceLoader }