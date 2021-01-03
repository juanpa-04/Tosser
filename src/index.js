import {Dice} from './javascripts/dice'
import {getMainContainer,getCounterDom,setCounterMarginTop} from './javascripts/dom'
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
    changeMarginIfNeeded(number)
    game.renderObjects(number)
}

function getTotalSum(currentGame) {
    return currentGame.reduce((sum,current)=>sum + current.getValue(),0);
}

function changeMarginIfNeeded(number) {

    if(number < 9) {
        console.log("yes")
        setCounterMarginTop("50px")
    } else {
        console.log("yes")
        setCounterMarginTop("0px")
    }
}

(function initialRender()  {
    const INTIAL_VALUE = 9
    renderDices(INTIAL_VALUE)

})()

