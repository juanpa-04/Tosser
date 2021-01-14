import {gameArea,appendToParent} from './dom'
import colones from '../images/Colones.png'
import colones2 from '../images/Colones2.png'

let MAIN_BODY;
let COIN_BODY;
let COIN1;
let COIN2;
let headcount = 0;let tailcount = 0;
let animationCount = 0;
let currentCoin = 0;


export function buildCoin() { //Esta funcion construye la moneda bb
    console.log("Building Coin!")
    
    MAIN_BODY = document.createElement('div');
    //document.body.appendChild(MAIN_BODY);
    console.log("Main body built");
    MAIN_BODY.setAttribute("class","main-block");
    console.log("Main body atribute set");
    

    COIN_BODY = document.createElement('div');
    console.log("Coin body built");
    COIN_BODY.setAttribute("id","coin-body");
    MAIN_BODY.appendChild(COIN_BODY);

    COIN2 = document.createElement('img');
    COIN2.setAttribute("id", "coin-image2");
    COIN2.setAttribute("src", colones2);
    COIN2.setAttribute("type", "png");
    COIN_BODY.appendChild(COIN2);
    console.log("Built Coin 2");

    COIN1 = document.createElement('img');
    COIN1.setAttribute("id", "coin-image");
    COIN1.setAttribute("src", colones);
    COIN1.setAttribute("type", "png");
    COIN_BODY.appendChild(COIN1);
    console.log("Built Coin 1");
    resetAnimationCount()

    
    appendToParent(gameArea(),MAIN_BODY)
   
}


function result() { //true = Heads, false = Tails
    let randomfloat = Math.random();
    if(randomfloat <= 0.509) {
        currentCoin = true;
        return true;
    } else {
        currentCoin = false;
        return false;
    }
} 

export function resetAnimationCount() {
    animationCount = 0
    console.log("Restarting Count");
}

export function coin_flip() {
    console.log(animationCount)
    if(animationCount == 0) {
        COIN1.classList.remove("TAILS1");
        COIN2.classList.remove("TAILS2");
        if(result()) {
            console.log("Head");
            COIN_BODY.classList.add("coinbkanimationhead");
            COIN1.classList.add("coin1animationhead");
            COIN2.classList.add("coin2animationhead");


        } else {
            console.log("Tails");
            COIN_BODY.classList.add("coinbkanimationtail");
            COIN1.classList.add("coin1animationtail");
            COIN2.classList.add("coin2animationtail");

        }
    }
}

export function restartAnimation() {
    animationCount++;
    console.log("RESTARTANIMATION",animationCount);
    if (animationCount >= 9) {
        console.log("Restarting");
        COIN_BODY.classList.remove("coinbkanimationhead");
        COIN1.classList.remove("coin1animationhead");
        COIN2.classList.remove("coin2animationhead");
        COIN_BODY.classList.remove("coinbkanimationtail");
        COIN1.classList.remove("coin1animationtail");
        COIN2.classList.remove("coin2animationtail");
        console.log(currentCoin);
        if(currentCoin == false) {
            COIN1.classList.add("TAILS1");
            COIN2.classList.add("TAILS2");
        }
        animationCount = 0;   
    }
 
}


