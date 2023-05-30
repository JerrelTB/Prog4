import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import player from '../images/Player/mainChar.png'
import testroom from '../images/rooms/testroom.png'


const Resources = {
    Player: new ImageSource(player),
    Testroom: new ImageSource(testroom)
}

const ResourceLoader = new Loader([Resources.Testroom, Resources.Player])

export { Resources, ResourceLoader }