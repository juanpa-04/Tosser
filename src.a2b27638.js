// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/javascripts/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearParent = clearParent;
exports.appendToParent = appendToParent;
exports.getMainContainer = getMainContainer;
exports.getCounterDom = getCounterDom;
exports.changeMargin = changeMargin;
exports.containerWidth = containerWidth;
exports.gameArea = gameArea;

//Deletes every child from parent
function clearParent(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function appendToParent(parent, element) {
  parent.append(element);
}

function getMainContainer() {
  return document.querySelector('.container');
}

function getCounterDom() {
  return document.querySelector('.counter');
}

function gameArea() {
  return document.querySelector('.game-area');
}

function setMT(margin) {
  var isMedia = window.matchMedia("(max-width:600px)");
  var counter = getCounterDom();
  if (isMedia.matches) counter.style.marginTop = margin;
  return;
}

function changeMargin(number) {
  number < 9 ? setMT("20vh") : setMT("0px");
}

function containerWidth(number) {
  var container = document.querySelector(".container");
  var DICE_WIDTH = 108;
  var width = null;
  console.log(number);

  if (number == 1 || number == 2) {
    width = (DICE_WIDTH * number).toString() + "px";
    container.style.gridGap = "25px";
  } else {
    width = "450px";
  }

  console.log(width);
  container.style.maxWidth = width;
  return;
}

(function () {
  var MAX_DICES = 9;
  var parent = document.querySelector("#dices");

  for (var i = 1; i <= MAX_DICES; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.innerHTML = String(i);
    appendToParent(parent, option);
  }
})();
},{}],"src/images/Colones.png":[function(require,module,exports) {
module.exports = "/Colones.89121fdd.png";
},{}],"src/images/Colones2.png":[function(require,module,exports) {
module.exports = "/Colones2.c96dc85c.png";
},{}],"src/javascripts/Coin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildCoin = buildCoin;
exports.resetAnimationCount = resetAnimationCount;
exports.coin_flip = coin_flip;
exports.restartAnimation = restartAnimation;

var _dom = require("./dom");

var _Colones = _interopRequireDefault(require("../images/Colones.png"));

var _Colones2 = _interopRequireDefault(require("../images/Colones2.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAIN_BODY;
var COIN_BODY;
var COIN1;
var COIN2;
var headcount = 0;
var tailcount = 0;
var animationCount = 0;
var currentCoin = 0;

function buildCoin() {
  //Esta funcion construye la moneda bb
  console.log("Building Coin!");
  MAIN_BODY = document.createElement('div'); //document.body.appendChild(MAIN_BODY);

  console.log("Main body built");
  MAIN_BODY.setAttribute("class", "main-block");
  console.log("Main body atribute set");
  COIN_BODY = document.createElement('div');
  console.log("Coin body built");
  COIN_BODY.setAttribute("id", "coin-body");
  MAIN_BODY.appendChild(COIN_BODY);
  COIN2 = document.createElement('img');
  COIN2.setAttribute("id", "coin-image2");
  COIN2.setAttribute("src", _Colones2.default);
  COIN2.setAttribute("type", "png");
  COIN_BODY.appendChild(COIN2);
  console.log("Built Coin 2");
  COIN1 = document.createElement('img');
  COIN1.setAttribute("id", "coin-image");
  COIN1.setAttribute("src", _Colones.default);
  COIN1.setAttribute("type", "png");
  COIN_BODY.appendChild(COIN1);
  console.log("Built Coin 1");
  resetAnimationCount();
  (0, _dom.appendToParent)((0, _dom.gameArea)(), MAIN_BODY);
}

function result() {
  //true = Heads, false = Tails
  var randomfloat = Math.random();

  if (randomfloat <= 0.509) {
    currentCoin = true;
    return true;
  } else {
    currentCoin = false;
    return false;
  }
}

function resetAnimationCount() {
  animationCount = 0;
  console.log("Restarting Count");
}

function coin_flip() {
  console.log(animationCount);

  if (animationCount == 0) {
    COIN1.classList.remove("TAILS1");
    COIN2.classList.remove("TAILS2");

    if (result()) {
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
  console.log("RESTARTANIMATION", animationCount);

  if (animationCount >= 9) {
    console.log("Restarting");
    COIN_BODY.classList.remove("coinbkanimationhead");
    COIN1.classList.remove("coin1animationhead");
    COIN2.classList.remove("coin2animationhead");
    COIN_BODY.classList.remove("coinbkanimationtail");
    COIN1.classList.remove("coin1animationtail");
    COIN2.classList.remove("coin2animationtail");
    console.log(currentCoin);

    if (currentCoin == false) {
      COIN1.classList.add("TAILS1");
      COIN2.classList.add("TAILS2");
    }

    animationCount = 0;
  }
}
},{"./dom":"src/javascripts/dom.js","../images/Colones.png":"src/images/Colones.png","../images/Colones2.png":"src/images/Colones2.png"}],"src/javascripts/dice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dice = void 0;

var _dom = require("./dom");

/*
grid-template-areas:
    "a . b"
    "c d e"
    "f . g" ;
*/
var Dice = function Dice(faceValue) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var DOM = createDice();
  var diceValue = faceValue;
  if (type === null) type = createDotFace;

  var value = function value(newFace) {
    diceValue = newFace;
    changeFace(DOM, newFace, type);
  };

  var getValue = function getValue() {
    return diceValue;
  };

  if (faceValue !== undefined) value(faceValue);
  return {
    DOM: DOM,
    value: value,
    getValue: getValue
  };
};

exports.Dice = Dice;

function getDotPositions(number) {
  var diceFace = {
    1: ['d'],
    2: ['a', 'g'],
    3: ['a', 'd', 'g'],
    4: ['a', 'b', 'f', 'g'],
    5: ['a', 'b', 'd', 'f', 'g'],
    6: ['a', 'b', 'c', 'e', 'f', 'g']
  };
  return diceFace[number];
}

function createDice() {
  var newDice = document.createElement('div');
  newDice.className = "dice game";
  return newDice;
}

function changeFace(dice, number, type) {
  (0, _dom.clearParent)(dice);
  type(number, dice);
}

function createDotFace(number, parent) {
  console.log("jsdhfdkjahs");
  var positions = getDotPositions(number);
  positions.forEach(function (pos) {
    var div = document.createElement('div');
    div.className = "dot";
    div.style.gridArea = pos;
    (0, _dom.appendToParent)(parent, div);
  });
}
},{"./dom":"src/javascripts/dom.js"}],"src/javascripts/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRand = getRand;
exports.getTotal = getTotal;

function getRand(min, max) {
  return Math.floor(Math.random() * max + min);
}

function getTotal(currentGame) {
  return currentGame.reduce(function (sum, current) {
    return sum + current.getValue();
  }, 0);
}
/*

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

*/
},{}],"src/javascripts/gameObjects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _dom = require("./dom");

var _dice = require("./dice");

var _math = require("./math");

var Game = function Game() {
  var currentObjects = [];

  var renderObjects = function renderObjects(number) {
    (0, _dom.clearParent)((0, _dom.getMainContainer)());
    currentObjects = [];
    console.log((0, _dom.getMainContainer)(), "!");

    for (var i = 0; i < number; i++) {
      var newDice = (0, _dice.Dice)((0, _math.getRand)(1, 6));
      (0, _dom.appendToParent)((0, _dom.getMainContainer)(), newDice.DOM);
      currentObjects.push(newDice);
    }
  };

  var getObjects = function getObjects() {
    return currentObjects;
  };

  var diceContainerDOM = function diceContainerDOM() {
    var counter = document.createElement('div');
    var container = document.createElement('div');
    var game_dice = document.createElement('div');
    counter.className = "counter center";
    container.className = "container center";
    game_dice.className = "dice-game";
    counter.innerHTML = "-";
    (0, _dom.appendToParent)((0, _dom.gameArea)(), counter);
    (0, _dom.appendToParent)(game_dice, container);
    (0, _dom.appendToParent)((0, _dom.gameArea)(), game_dice);
  };

  return {
    renderObjects: renderObjects,
    getObjects: getObjects,
    diceContainerDOM: diceContainerDOM
  };
};

exports.Game = Game;
},{"./dom":"src/javascripts/dom.js","./dice":"src/javascripts/dice.js","./math":"src/javascripts/math.js"}],"src/javascripts/handlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNumberOfDicesHandler = exports.clickTossHandler = void 0;

var _index = require("../index");

var _dom = require("./dom");

var _Coin = require("./Coin");

var _gameObjects = require("./gameObjects");

var diceRadio = document.querySelector("#dice");
var coinRadio = document.querySelector("#coin");
var menu = document.querySelector(".side-menu");

diceRadio.onclick = function () {
  (0, _dom.clearParent)((0, _dom.gameArea)());
  document.body.style.backgroundColor = "#eb5661fc";
  menu.style.backgroundColor = "coral";
  document.querySelector("#dices").style.display = "block";
  var game = (0, _gameObjects.Game)();
  game.diceContainerDOM();
  (0, _index.renderDices)(1);
};
/*

 margin-bottom: 25vh;
        margin-top: 10vh;
        */


coinRadio.onclick = function () {
  (0, _dom.clearParent)((0, _dom.gameArea)());
  document.body.style.backgroundColor = "cornflowerblue";
  document.querySelector("#dices").style.display = "none";
  menu.style.backgroundColor = "#edbc64";
  (0, _Coin.buildCoin)();
};

var clickTossHandler = function clickTossHandler(event) {
  (0, _index.render)();
};

exports.clickTossHandler = clickTossHandler;

var setNumberOfDicesHandler = function setNumberOfDicesHandler(event) {
  var numberOfDices = event.target.value;
  (0, _index.renderDices)(numberOfDices);
  console.log(event.target.value);
};

exports.setNumberOfDicesHandler = setNumberOfDicesHandler;
var sideBar = document.querySelector(".header");
var select = document.querySelector("#dices");
select.addEventListener('change', setNumberOfDicesHandler);
var current = false;

sideBar.onclick = function () {
  var sideMenu = document.querySelector(".side-menu");
  current = !current;
  console.log(current);
  current ? sideMenu.style.display = "block" : sideMenu.style.display = "none";
};

document.addEventListener('click', function (event) {
  var DICE_AROUND = 'dice-game';
  var DICE_BODY = 'dice game';
  var DICE_GAPS = 'container center';
  var COIN = 'main-block';
  var TAILS = 'coin-image2';
  var HEADS = 'coin-image';
  var target = event.target.className;
  var targetID = event.target.id;
  console.log(event.target);

  if (target === DICE_AROUND || target === DICE_BODY || target === DICE_GAPS) {
    clickTossHandler();
  } else if (target === COIN || targetID === TAILS || targetID === HEADS) {
    //resetAnimationCount()
    (0, _Coin.coin_flip)();
  }
});
(0, _dom.gameArea)().addEventListener('animationend', _Coin.restartAnimation);
},{"../index":"src/index.js","./dom":"src/javascripts/dom.js","./Coin":"src/javascripts/Coin.js","./gameObjects":"src/javascripts/gameObjects.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles/coin.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/styles/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./coin.css":"src/styles/coin.css","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.renderDices = renderDices;

var _dom = require("./javascripts/dom");

var _handlers = require("./javascripts/handlers");

var _math = require("./javascripts/math");

var _gameObjects = require("./javascripts/gameObjects");

require("./styles/style.css");

var container = (0, _dom.getMainContainer)();
var select = document.querySelector("#dices");
container.onclick = _handlers.clickTossHandler;
select.onchange = _handlers.setNumberOfDicesHandler;
var game = (0, _gameObjects.Game)();

function render() {
  var currentGame = game.getObjects();
  var counterDom = (0, _dom.getCounterDom)();
  currentGame.forEach(function (die) {
    return die.value((0, _math.getRand)(1, 6));
  });
  var sum = (0, _math.getTotal)(currentGame);
  counterDom.style.opacity = "0.5";
  setTimeout(renderCounter, 150, counterDom, sum);
}

function renderCounter(dom, sum) {
  dom.style.opacity = "1";
  return dom.innerHTML = sum;
}

function renderDices(number) {
  (0, _dom.changeMargin)(number);
  (0, _dom.containerWidth)(number);
  game.renderObjects(number);
}

(function initialRender() {
  var INTIAL_VALUE = 1;
  renderDices(INTIAL_VALUE);
})();
},{"./javascripts/dom":"src/javascripts/dom.js","./javascripts/handlers":"src/javascripts/handlers.js","./javascripts/math":"src/javascripts/math.js","./javascripts/gameObjects":"src/javascripts/gameObjects.js","./styles/style.css":"src/styles/style.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "38819" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map