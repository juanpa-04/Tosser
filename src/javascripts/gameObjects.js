import {getMainContainer,appendToParent,clearParent} from './dom'
import {Dice} from './dice'
import {getRand} from './random'

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

    return {renderObjects,getObjects}

}

export {Game}