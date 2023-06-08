import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import player from '../images/Player/mainChar.png'
import npc from '../images/Player/mainChar.png'
import testroom from '../images/rooms/testroom.png'

import spaceship from '../images/Ship/spaceship.png'
import bigmeteor from '../images/Meteors/big_meteor.png'
import bullet from '../images/Ship/bullet.png'

//sounds
import blastershot from './Sounds/blastershot.mp3'
import countdown from './Sounds/countdown.mp3'
import battletheme from './Sounds/battletheme.mp3'
import shiphit from './Sounds/shiphit.mp3'

const Resources = {
    Player: new ImageSource(player),
    Testroom: new ImageSource(testroom),
    Spaceship: new ImageSource(spaceship),
    BigMeteor: new ImageSource(bigmeteor),
    Bullet: new ImageSource(bullet)

}

const Sounds = {
    Countdown: new Sound(countdown),
    Battletheme: new Sound(battletheme),
    Blastershot: new Sound(blastershot),
    Shiphit: new Sound(shiphit)
}

const ResourceLoader = new Loader([Resources.Testroom, Resources.Player,
     Resources.Spaceship, Resources.BigMeteor,
     Resources.Bullet,
    Sounds.Countdown, Sounds.Battletheme,
     Sounds.Blastershot, Sounds.Shiphit])


export { Resources, Sounds, ResourceLoader }