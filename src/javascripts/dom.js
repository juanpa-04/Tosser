

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

function setCounterMarginTop(margin) {

    const isMedia = window.matchMedia("(min-width:600px)");
    const counter = getCounterDom();

    
    if(isMedia.matches) {
        counter.style.marginTop = margin;
    } 
    
    return;
}

export {    clearParent,
            appendToParent,
            getMainContainer,
            getCounterDom,
            setCounterMarginTop,
       }