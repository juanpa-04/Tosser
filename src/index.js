import {getCounterDom,changeMargin,containerWidth} from './javascripts/dom'
import {getRand,getTotal} from './javascripts/math'
import {Game} from './javascripts/gameObjects'
import './styles/style.css'



const game = Game();

export function render() {
  
    const currentGame = game.getObjects();
    const counterDom = getCounterDom();
    
    currentGame.forEach(die=>die.value(getRand(1,6)));
    const sum = getTotal(currentGame);
   
    counterDom.innerHTML = sum;
}

export function renderDices (number) {
    changeMargin(number)
    containerWidth(number)
    game.renderObjects(number)
}

(function initialRender()  {
    const INTIAL_VALUE = 1
    renderDices(INTIAL_VALUE)

})()

