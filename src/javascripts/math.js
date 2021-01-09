
function getRand(min,max) {
    return Math.floor(Math.random()*max + min)
}

function getTotal(currentGame) {
    return currentGame.reduce((sum,current)=>sum + current.getValue(),0);
}

export {getRand,getTotal}