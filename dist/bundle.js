/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BIRD_HEIGHT\": () => (/* binding */ BIRD_HEIGHT),\n/* harmony export */   \"FLAP_VELOCITY\": () => (/* binding */ FLAP_VELOCITY),\n/* harmony export */   \"GAME_FPS\": () => (/* binding */ GAME_FPS),\n/* harmony export */   \"GAME_GRAVITY\": () => (/* binding */ GAME_GRAVITY),\n/* harmony export */   \"GAME_HEIGHT\": () => (/* binding */ GAME_HEIGHT),\n/* harmony export */   \"GAME_SPEED\": () => (/* binding */ GAME_SPEED),\n/* harmony export */   \"GAME_WIDTH\": () => (/* binding */ GAME_WIDTH),\n/* harmony export */   \"PIPE_DISTANCE\": () => (/* binding */ PIPE_DISTANCE),\n/* harmony export */   \"PIPE_WIDTH\": () => (/* binding */ PIPE_WIDTH)\n/* harmony export */ });\nconst GAME_WIDTH = 288;\r\nconst GAME_HEIGHT = 512;\r\nconst GAME_FPS = 40;\r\nconst GAME_SPEED = 2;\r\nconst GAME_GRAVITY = 0.2;\r\nconst FLAP_VELOCITY = 10;\r\nconst PIPE_DISTANCE = 200;\r\nconst PIPE_WIDTH = 52;\r\nconst BIRD_HEIGHT = 24;\r\nconst PIPE_LONG = 320;\r\n\r\n\n\n//# sourceURL=webpack:///./src/config/config.ts?");

/***/ }),

/***/ "./src/game/game.ts":
/*!**************************!*\
  !*** ./src/game/game.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.ts\");\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\r\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\r\n};\r\nvar _Game_instances, _Game_checkCollision, _Game_updateFrame;\r\n\r\nclass Game {\r\n    constructor(id) {\r\n        _Game_instances.add(this);\r\n        this.totalScore = 0;\r\n        this.isPassedThroughPipe = false;\r\n        this.isCollision = false;\r\n        this.countFrame = 0;\r\n        this.isEndGame = false;\r\n        const canvas = document.getElementById(id);\r\n        this.context = canvas.getContext('2d');\r\n        canvas.width = _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_WIDTH;\r\n        canvas.height = _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_HEIGHT;\r\n        canvas.addEventListener('click', () => {\r\n            if (!this.isCollision) {\r\n                this.bird.flap();\r\n            }\r\n        });\r\n    }\r\n    setBird(bird) {\r\n        this.bird = bird;\r\n    }\r\n    setBackground(bg) {\r\n        this.bg = bg;\r\n    }\r\n    setBase(base) {\r\n        this.base = base;\r\n    }\r\n    setPipe(pipe) {\r\n        this.pipe = pipe;\r\n    }\r\n    setScore(score) {\r\n        this.score = score;\r\n        console.log('Init');\r\n    }\r\n    setGameover(gameover) {\r\n        this.gameover = gameover;\r\n    }\r\n    start() {\r\n        __classPrivateFieldGet(this, _Game_instances, \"m\", _Game_updateFrame).call(this);\r\n    }\r\n}\r\n_Game_instances = new WeakSet(), _Game_checkCollision = function _Game_checkCollision() {\r\n    // if(this.isCollision === true) {;}\r\n    if ((this.bird.position.x + 34) < (this.pipe.position.x + 52) && (this.bird.position.x) > (this.pipe.position.x - 34)) {\r\n        if (!(this.bird.position.y > this.pipe.position.y + 320 && this.bird.position.y < this.pipe.position.y + 320 + _config_config__WEBPACK_IMPORTED_MODULE_0__.PIPE_DISTANCE)) {\r\n            this.isCollision = true;\r\n        }\r\n    }\r\n    if (this.bird.position.y >= 456 || this.bird.position.y <= 0) {\r\n        this.isCollision = true;\r\n    }\r\n    if (this.bird.position.y >= this.base.position.y - _config_config__WEBPACK_IMPORTED_MODULE_0__.BIRD_HEIGHT) {\r\n        this.isEndGame = true;\r\n    }\r\n    if (this.bird.position.x < (this.pipe.position.x + 54)) {\r\n        this.isPassedThroughPipe = false;\r\n    }\r\n    else if (this.isPassedThroughPipe === false) {\r\n        this.isPassedThroughPipe = true;\r\n        this.totalScore += 5;\r\n    }\r\n}, _Game_updateFrame = function _Game_updateFrame() {\r\n    if (!this.isEndGame) {\r\n        // console.count('update frame')\r\n        __classPrivateFieldGet(this, _Game_instances, \"m\", _Game_checkCollision).call(this);\r\n        this.countFrame++;\r\n        this.context.clearRect(0, 0, _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_WIDTH, _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_HEIGHT);\r\n        this.bg.update();\r\n        this.pipe.update();\r\n        this.base.update();\r\n        this.bird.update();\r\n        this.score.update(this.totalScore);\r\n        setTimeout(() => __classPrivateFieldGet(this, _Game_instances, \"m\", _Game_updateFrame).call(this), 1000 / _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_FPS);\r\n    }\r\n    else {\r\n        this.gameover.update();\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/game/game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game */ \"./src/game/game.ts\");\n/* harmony import */ var _object_game_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object-game/background */ \"./src/object-game/background.ts\");\n/* harmony import */ var _object_game_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object-game/base */ \"./src/object-game/base.ts\");\n/* harmony import */ var _object_game_bird__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object-game/bird */ \"./src/object-game/bird.ts\");\n/* harmony import */ var _object_game_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object-game/pipe */ \"./src/object-game/pipe.ts\");\n/* harmony import */ var _object_game_score__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object-game/score */ \"./src/object-game/score.ts\");\n/* harmony import */ var _object_game_gameover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object-game/gameover */ \"./src/object-game/gameover.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction main() {\r\n    // const tittle = document.getElementById('title');\r\n    const game = new _game_game__WEBPACK_IMPORTED_MODULE_0__.Game('game');\r\n    const bird = new _object_game_bird__WEBPACK_IMPORTED_MODULE_3__.Bird(game, './assets/img/redbird-upflap.png', './assets/img/redbird-midflap.png', './assets/img/redbird-downflap.png');\r\n    const bg = new _object_game_background__WEBPACK_IMPORTED_MODULE_1__.BackGround(game, './assets/img/background-night.png');\r\n    const base = new _object_game_base__WEBPACK_IMPORTED_MODULE_2__.Base(game, './assets/img/base.png');\r\n    const pipe = new _object_game_pipe__WEBPACK_IMPORTED_MODULE_4__.Pipe(game, './assets/img/pipe-green.png');\r\n    const score = new _object_game_score__WEBPACK_IMPORTED_MODULE_5__.Score(game, './assets/img/0.png');\r\n    const gameover = new _object_game_gameover__WEBPACK_IMPORTED_MODULE_6__.Gameover(game, './assets/img/gameover.png');\r\n    game.setBird(bird);\r\n    game.setBackground(bg);\r\n    game.setBase(base);\r\n    game.setPipe(pipe);\r\n    game.setScore(score);\r\n    game.setGameover(gameover);\r\n    game.start();\r\n}\r\nmain();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/object-game/background.ts":
/*!***************************************!*\
  !*** ./src/object-game/background.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BackGround\": () => (/* binding */ BackGround)\n/* harmony export */ });\n/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-object */ \"./src/object-game/game-object.ts\");\n\r\nclass BackGround extends _game_object__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(game, imagePath) {\r\n        super(game, imagePath);\r\n        this.position = {\r\n            x: 0,\r\n            y: 0,\r\n        };\r\n    }\r\n    update() {\r\n        // console.log(this.image);\r\n        this.game.context.drawImage(this.image, this.position.x, this.position.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/background.ts?");

/***/ }),

/***/ "./src/object-game/base.ts":
/*!*********************************!*\
  !*** ./src/object-game/base.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Base\": () => (/* binding */ Base)\n/* harmony export */ });\n/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-object */ \"./src/object-game/game-object.ts\");\n\r\nclass Base extends _game_object__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(game, imagePath) {\r\n        super(game, imagePath);\r\n        this.position = {\r\n            x: 0,\r\n            y: 400,\r\n        };\r\n    }\r\n    update() {\r\n        this.game.context.drawImage(this.image, this.position.x, this.position.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/base.ts?");

/***/ }),

/***/ "./src/object-game/bird.ts":
/*!*********************************!*\
  !*** ./src/object-game/bird.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bird\": () => (/* binding */ Bird)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.ts\");\n/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-object */ \"./src/object-game/game-object.ts\");\n\r\n\r\nclass Bird extends _game_object__WEBPACK_IMPORTED_MODULE_1__.GameObject {\r\n    constructor(game, imageUp, imageMid, imageDown) {\r\n        super(game, imageUp);\r\n        this.velocity = 1;\r\n        this.images = [];\r\n        this.flapIndexImage = 0;\r\n        const imageMidElement = new Image();\r\n        imageMidElement.src = imageMid;\r\n        const imageDownElement = new Image();\r\n        imageDownElement.src = imageDown;\r\n        this.images = [this.image, imageMidElement, imageDownElement];\r\n        this.position = {\r\n            x: 100,\r\n            y: 100,\r\n        };\r\n    }\r\n    update() {\r\n        this.velocity += _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_GRAVITY;\r\n        this.position.y += this.velocity;\r\n        if (this.position.y >= 456) {\r\n            this.position.y = 456;\r\n        }\r\n        /**\r\n         *\r\n         */\r\n        if (this.game.countFrame % 10 === 0) {\r\n            this.flapIndexImage++;\r\n            if (this.flapIndexImage === 3) {\r\n                this.flapIndexImage = 0;\r\n            }\r\n        }\r\n        let drawImage = this.images[this.flapIndexImage];\r\n        if (this.game.isCollision) {\r\n            drawImage = this.images[1];\r\n        }\r\n        this.game.context.drawImage(drawImage, this.position.x, this.position.y);\r\n    }\r\n    flap() {\r\n        this.velocity -= _config_config__WEBPACK_IMPORTED_MODULE_0__.FLAP_VELOCITY;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/bird.ts?");

/***/ }),

/***/ "./src/object-game/game-object.ts":
/*!****************************************!*\
  !*** ./src/object-game/game-object.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameObject\": () => (/* binding */ GameObject)\n/* harmony export */ });\nclass GameObject {\r\n    constructor(game, imagePath) {\r\n        this.game = game;\r\n        this.image = new Image();\r\n        this.image.src = imagePath;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/game-object.ts?");

/***/ }),

/***/ "./src/object-game/gameover.ts":
/*!*************************************!*\
  !*** ./src/object-game/gameover.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameover\": () => (/* binding */ Gameover)\n/* harmony export */ });\n/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-object */ \"./src/object-game/game-object.ts\");\n\r\nclass Gameover extends _game_object__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(game, imagePath) {\r\n        super(game, imagePath);\r\n        this.position = {\r\n            x: 60,\r\n            y: 210,\r\n        };\r\n    }\r\n    update() {\r\n        console.log('gameover');\r\n        this.game.context.drawImage(this.image, this.position.x, this.position.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/gameover.ts?");

/***/ }),

/***/ "./src/object-game/pipe.ts":
/*!*********************************!*\
  !*** ./src/object-game/pipe.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pipe\": () => (/* binding */ Pipe)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.ts\");\n/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-object */ \"./src/object-game/game-object.ts\");\n\r\n\r\nclass Pipe extends _game_object__WEBPACK_IMPORTED_MODULE_1__.GameObject {\r\n    constructor(game, imagePath) {\r\n        super(game, imagePath);\r\n        this.position = {\r\n            x: _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_WIDTH,\r\n            y: -150,\r\n        };\r\n    }\r\n    update() {\r\n        if (!this.game.isCollision) {\r\n            this.position.x -= 2;\r\n        }\r\n        if (this.position.x === -52) {\r\n            this.position.x = _config_config__WEBPACK_IMPORTED_MODULE_0__.GAME_WIDTH;\r\n            this.position.y = -Math.floor(Math.random() * 320);\r\n        }\r\n        this.game.context.drawImage(this.image, this.position.x, this.position.y);\r\n        this.game.context.drawImage(this.image, this.position.x, this.position.y + 320 + _config_config__WEBPACK_IMPORTED_MODULE_0__.PIPE_DISTANCE);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/pipe.ts?");

/***/ }),

/***/ "./src/object-game/score.ts":
/*!**********************************!*\
  !*** ./src/object-game/score.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Score\": () => (/* binding */ Score)\n/* harmony export */ });\n/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-object */ \"./src/object-game/game-object.ts\");\n\r\nclass Score extends _game_object__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(game, imagePath) {\r\n        super(game, imagePath);\r\n        this.position = {\r\n            x: 140,\r\n            y: 20,\r\n        };\r\n    }\r\n    update(totalScore) {\r\n        const arrOfStr = Array.from(String(totalScore));\r\n        for (let i = 0; i < arrOfStr.length; i++) {\r\n            // console.log(`${arrOfStr[i]}.png`);\r\n            this.image = new Image();\r\n            this.image.src = `./assets/img/${arrOfStr[i]}.png`;\r\n            this.game.context.drawImage(this.image, this.position.x + i * 20, this.position.y);\r\n        }\r\n        // this.game.context.drawImage(this.image, this.position.x, this.position.y);\r\n        // this.game.context.drawImage(this.image, this.position.x+25, this.position.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/object-game/score.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;