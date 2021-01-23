import {getMainContainer,appendToParent,clearParent,gameArea} from './dom'
import {Dice} from './dice'
import {getRand} from './math'

const Game = () => {
    let currentObjects = [];

    const renderObjects = (number) => {
        clearParent(getMainContainer())
        currentObjects = []
       
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
        const game_dice = document.createElement('div')

        counter.className = "counter center"
        container.className = "container center"
        game_dice.className = "dice-game"

        counter.innerHTML = "-"

        appendToParent(gameArea(),counter)
        appendToParent(game_dice,container)
        appendToParent(gameArea(),game_dice)

    }

    return {renderObjects,getObjects,diceContainerDOM}

}

export {Game}