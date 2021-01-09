

//Deletes every child from parent
function clearParent(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function appendToParent(parent,element) {
    parent.append(element)
}

function getMainContainer() {
    return document.querySelector('.container');
}

function getCounterDom() {
    return document.querySelector('.counter');
}

function setMT(margin) {

    const isMedia = window.matchMedia("(max-width:600px)");
    const counter = getCounterDom();
    if(isMedia.matches) counter.style.marginTop = margin;
    return;
}

function changeMargin(number) {
    (number < 9)
    ? setMT("50px")
    : setMT("0px")
} 

function containerWidth(number) {
    const container = document.querySelector(".container")
    
    const DICE_WIDTH = 108;
    let width = null;
    console.log(number)
    if(number == 1 || number == 2) {
        width = (DICE_WIDTH*number).toString() + "px"
        container.style.gridGap = "25px"
    } else {
        width = "450px"
       
    }
    console.log(width)
    container.style.maxWidth = width
    return 
}

(function () {
    const MAX_DICES = 9;
    const parent = document.querySelector("#dices");

    for (let i = 1; i <= MAX_DICES; i++) {
        const option = document.createElement('option')
        option.value = i
        option.innerHTML = String(i)
        appendToParent(parent,option)
    }
})()



export {    clearParent,
            appendToParent,
            getMainContainer,
            getCounterDom,
            changeMargin,
            containerWidth,
       }