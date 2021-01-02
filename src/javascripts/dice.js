
/*
grid-template-areas:
    "a . b"
    "c d e"
    "f . g" ;
*/

import {clearParent,appendToParent} from './dom'

export const Dice = (faceValue,type=null) => {

    const DOM = createDice();
    
    if(type === null) type = createDotFace
    
    const value = (newFace) => {
        changeFace(DOM,newFace,type);
    }

    if(faceValue !== undefined) value(faceValue)
    return {DOM,value}
}

function getDotPositions(number) {
    const diceFace = {
        1:['d'],
        2:['a','g'],
        3:['a','d','g'],
        4:['a','b','f','g'],
        5:['a','b','d','f','g'],
        6:['a','b','c','e','f','g'],
    }
    
    return diceFace[number]
}

function createDice() {

    const newDice  = document.createElement('div');
    newDice.className = "dice"
    return newDice;
  
}

function changeFace(dice,number,type) {
    clearParent(dice);
    type(number,dice);
}

function createDotFace(number,parent) {
    const positions = getDotPositions(number);

    positions.forEach((pos) => {
        let div = document.createElement('div');
        div.className = "dot";
        div.style.gridArea = pos;
        appendToParent(parent,div)
    });

}

