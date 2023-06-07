import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import player from '../images/Player/mainChar.png'
import npc from '../images/Player/mainChar.png'
import testroom from '../images/rooms/testroom.png'

import spaceship from '../images/Ship/spaceship.png'
import bigmeteor from '../images/Meteors/big_meteor.png'

import blastershot from './Sounds/blastershot.mp3'
import countdown from './Sounds/countdown.mp3'
import battletheme from './Sounds/battletheme.mp3'

const Resources = {
    Player: new ImageSource(player),
    Testroom: new ImageSource(testroom),
    Spaceship: new ImageSource(spaceship),
    BigMeteor: new ImageSource(bigmeteor)

}

const Sounds = {
    Countdown: new Sound(countdown),
    Battletheme: new Sound(battletheme),
    Blastershot: new Sound(blastershot)
}

const ResourceLoader = new Loader([Resources.Testroom, Resources.Player, Resources.Spaceship, 
    Sounds.Countdown, Sounds.Battletheme, Sounds.Blastershot])


export { Resources, Sounds, ResourceLoader }