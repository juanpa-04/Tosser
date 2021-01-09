import {Dice} from './javascripts/dice'
import {getMainContainer,getCounterDom,changeMargin} from './javascripts/dom'
import {clickTossHandler,setNumberOfDicesHandler} from './javascripts/handlers'
import {getRand} from './javascripts/random'
import {Game} from './javascripts/gameObjects'
import './styles/style.css'

const container = getMainContainer();
const select = document.querySelector("#dices")

container.onclick = clickTossHandler;
select.onchange = setNumberOfDicesHandler;

const game = Game();

export function render() {
  
    const currentGame = game.getObjects();
    const counterDom = getCounterDom();
    
    currentGame.forEach(die=>die.value(getRand(1,6)));
    const sum = getTotalSum(currentGame);
   
    counterDom.innerHTML = sum;
}

export function renderDices (number) {
    changeMargin(number)
    game.renderObjects(number)
}

function getTotalSum(currentGame) {
    return currentGame.reduce((sum,current)=>sum + current.getValue(),0);
}

(function initialRender()  {
    const INTIAL_VALUE = 9
    renderDices(INTIAL_VALUE)

})()

