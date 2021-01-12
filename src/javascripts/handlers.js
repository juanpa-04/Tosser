import {render,renderDices} from '../index'
import {clearParent,gameArea} from './dom'
import {Game} from './gameObjects'


const diceRadio = document.querySelector("#dice")
const coinRadio = document.querySelector("#coin")

diceRadio.onclick= (event) => {
    clearParent(gameArea())
    const game = Game()
    game.diceContainerDOM()
    renderDices(1)
}

coinRadio.onclick = (event) => {
    clearParent(gameArea())
    console.log(coin)
}

const clickTossHandler = (event) => {
    render()
}

const setNumberOfDicesHandler = (event) => {
    const numberOfDices = event.target.value;
    renderDices(numberOfDices)
    console.log(event.target.value)
}

const sideBar = document.querySelector(".header")

let current = false;
sideBar.onclick = () => {
    const sideMenu = document.querySelector(".side-menu");
    current = !current;
    console.log(current);
    (current)? sideMenu.style.display = "block" :sideMenu.style.display = "none"

}



export {clickTossHandler,setNumberOfDicesHandler}