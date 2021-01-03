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
    currentGame.forEach(die=>die.value(getRand(1,6)));
    const sum = getTotalSum(currentGame);
    console.log(sum)
}

function getTotalSum(currentGame) {
    return currentGame.reduce((sum,current)=>sum + current.getValue(),0);
}

(function initialRender()  {
    game.renderObjects(3)

})()

