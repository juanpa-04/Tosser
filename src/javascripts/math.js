
function getRand(min,max) {
    return Math.floor(Math.random()*max + min)
}

function getTotal(currentGame) {
    return currentGame.reduce((sum,current)=>sum + current.getValue(),0);
}

function testRandom(tests) {
    const list = []
    for (let i = 0; i < tests;++i) {
       list.push(getRand(1,6))
    }
    return list
}

function sum (list) {
    return list.reduce((accu,i)=>accu+i)
}
function average (list) {

    return list.map(((item)=>Math.round((item/sum(list))*100)))
}
function tally (list) {
    const tally = {}
    list.forEach((i)=>tally[i]=(tally[i]||0)+1)
    return tally
}
function toArr(object) {
    return Object.values(object)
}

function test() {
    const list = [...testRandom(50)]
    const tly  = tally(list)
    const tlya = toArr(tly)
    const avr = average(tlya)
    console.table(avr)

}






export {getRand,getTotal}