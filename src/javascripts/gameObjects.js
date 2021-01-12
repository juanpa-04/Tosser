import {getMainContainer,appendToParent,clearParent,gameArea} from './dom'
import {Dice} from './dice'
import {getRand} from './math'

const Game = () => {
    let currentObjects = [];

    const renderObjects = (number) => {
        clearParent(getMainContainer())
        currentObjects = []
        console.log(getMainContainer(),"!")
        for (let i = 0; i < number; i++) {
            const newDice = Dice(getRand(1,6))
            appendToParent(getMainContainer(),newDice.DOM)
            currentObjects.push(newDice)
        }
    }

    const getObjects = () => {
        return currentObjects
    }

    const diceContainerDOM = () => {
        const counter = document.createElement('div')
        const container = document.createElement('div')

        counter.className = "counter center"
        container.className = "container center"

        counter.innerHTML = "-"

        appendToParent(gameArea(),counter)
        appendToParent(gameArea(),container)

    }

    return {renderObjects,getObjects,diceContainerDOM}

}

export {Game}