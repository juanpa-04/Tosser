import {Dice} from './javascripts/dice'
import {getMainContainer,appendToParent,clearParent} from './javascripts/dom'
import './styles/style.css'


const button = document.querySelector('.click')


button.onclick = () => {
    render();
}

function render(toggle) {
    clearParent(getMainContainer())
    const newDice = Dice(getRand(1,6))
    appendToParent(getMainContainer(),newDice.DOM)

    
}

function  getRand(min,max) {
    return Math.floor(Math.random()*max + min)
}

