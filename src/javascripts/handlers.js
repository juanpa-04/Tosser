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

const sideBar = document.querySelector(".header")

let current = false;
sideBar.onclick = () => {
    const sideMenu = document.querySelector(".side-menu");
    current = !current;
    console.log(current);
    (current)? sideMenu.style.display = "block" :sideMenu.style.display = "none"

}



export {clickTossHandler,setNumberOfDicesHandler}