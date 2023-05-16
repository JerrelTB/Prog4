import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import platform from '../images/Sprite-0001.png'
import player from '../images/Player.png'


const Resources = {
    Fish: new ImageSource(fishImage),
    Platform: new ImageSource(platform),
    Pllayer: new ImageSource(player)
}

const ResourceLoader = new Loader([Resources.Fish, Resources.Platform, Resources.Player])

export { Resources, ResourceLoader }