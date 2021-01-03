import {render,renderDices} from '../index'

const clickTossHandler = (event) => {
    let target = event.target.closest('.dice');
    render()
}

const setNumberOfDicesHandler = (event) => {
    const numberOfDices = event.target.value;
    renderDices(numberOfDices)
    console.log(event.target.value)
}

export {clickTossHandler,setNumberOfDicesHandler}