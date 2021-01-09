const COIN_BODY = document.querySelector("#coin-body");
const COIN1 = document.querySelector("#coin-image");
const COIN2 = document.querySelector("#coin-image2");
console.log(COIN_BODY);
console.log(COIN1);
console.log(COIN2);
let headcount = 0;
let tailcount = 0;
let animationCount = 0;
let currentCoin = 0;

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

function coin_flip() {
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

function restartAnimation() {
    animationCount++;
    console.log(animationCount);
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

COIN_BODY.addEventListener('click', coin_flip);
COIN_BODY.addEventListener('animationend', restartAnimation);



/*function start() { //TEST DE QUE LA MONEDA SEA 50/50
    for(let i = 0; i <= 1000 ; i++) {
        testing(i);
    }   
}


function testing(i) {
    setTimeout(() => {
        console.log("Testing...")
        if(result()) {
            headcount++;
        } else {
            tailcount++;
        }
        console.log("Heads: " + headcount);
        console.log("Tails: " + tailcount);
    }, 5 * i);
    
} */
   
//127.0.0.1