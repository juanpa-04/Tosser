import {Dice} from './javascripts/dice'
import {getMainContainer,appendToParent,clearParent} from './javascripts/dom'
import {clickTossHandler} from './javascripts/handlers'
import {getRand} from './javascripts/random'
import {Game} from './javascripts/gameObjects'
import './styles/style.css'



const container = getMainContainer();

container.onclick = clickTossHandler;

const game = Game();


export function render() {

    const currentGame = game.getObjects();
    currentGame.forEach(die=>die.value(getRand(1,6)))
}

(function initialRender()  {
    game.renderObjects(2)

})()

