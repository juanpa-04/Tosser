import {Dice} from './javascripts/dice'
import {getMainContainer,appendToParent,clearParent} from './javascripts/dom'
import {clickTossHandler} from './javascripts/handlers'
import './styles/style.css'


const button = document.querySelector('.click')

const container = getMainContainer();

container.onclick = clickTossHandler;

export function render() {
    clearParent(getMainContainer())
    const newDice = Dice(getRand(1,6))
    appendToParent(getMainContainer(),newDice.DOM)
}

function getRand(min,max) {
    return Math.floor(Math.random()*max + min)
}

(function initialRender()  {
    const newDice = Dice(1);
    appendToParent(getMainContainer(),newDice.DOM)
})()

