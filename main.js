/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBar": () => (/* binding */ navBar),
/* harmony export */   "sideBar": () => (/* binding */ sideBar),
/* harmony export */   "sideBarItem": () => (/* binding */ sideBarItem),
/* harmony export */   "mainTab": () => (/* binding */ mainTab),
/* harmony export */   "mainItems": () => (/* binding */ mainItems)
/* harmony export */ });


const navBar = (() => {
    const nav = document.createElement('nav')
    const name = document.createElement('h1')
    name.innerHTML = 'Toding'
    const settings = document.createElement('button')
    settings.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="no' +
        'ne" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id' +
        '="Gear"><path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269v0c0 .578-.396 1.074-.' +
        '935 1.286-.085.034-.17.07-.253.106-.531.23-1.162.16-1.572-.249v0a1.269 1.269 0 00-1.794 0L4.412 5.446a1.269 ' +
        '1.269 0 000 1.794v0c.41.41.48 1.04.248 1.572a7.946 7.946 0 00-.105.253c-.212.539-.708.935-1.286.935v0C2.568 ' +
        '10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14v0c.578 0 1.074.396 1.286.935.034.085.07.17.105.253.231' +
        '.531.161 1.162-.248 1.572v0a1.269 1.269 0 000 1.794l1.034 1.034a1.269 1.269 0 001.794 0v0c.41-.41 1.04-.48 1' +
        '.572-.249.083.037.168.072.253.106.539.212.935.708.935 1.286v0c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.26' +
        '9-.568 1.269-1.269v0c0-.578.396-1.074.935-1.287.085-.033.17-.068.253-.104.531-.232 1.162-.161 1.571.248v0a1.' +
        '269 1.269 0 001.795 0l1.034-1.034a1.269 1.269 0 000-1.794v0c-.41-.41-.48-1.04-.249-1.572.037-.083.072-.168.1' +
        '06-.253.212-.539.708-.935 1.286-.935v0c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269v0c-' +
        '.578 0-1.074-.396-1.287-.935a7.755 7.755 0 00-.105-.253c-.23-.531-.16-1.162.249-1.572v0a1.269 1.269 0 000-1.' +
        '794l-1.034-1.034a1.269 1.269 0 00-1.794 0v0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 00-.253-.106C14.396 4.34' +
        '3 14 3.847 14 3.27v0z"/><path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>'

    nav.appendChild(name)
    nav.appendChild(settings)

    return { nav }
})()

const sideBar = (() => {
    const bar = document.createElement('section')
    bar.setAttribute('class', 'sideBar')
    const title = document.createElement('h2')
    title.innerHTML = 'Your tasks'
    const items = document.createElement('div')
    items.setAttribute('class', 'items')
    const newButton = document.createElement('button')
    newButton.setAttribute('class', 'button newButton')
    newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="n' +
        'one" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="P' +
        'lus"><path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></svg>'

    newButton.addEventListener('click', () => {
        sideBarAdd()
    })
    bar.appendChild(title)
    bar.appendChild(items)
    bar.appendChild(newButton)

    return { bar }
})()

const sideBarItem = (itemName, id) => {
    const item = document.createElement('div')
    item.setAttribute('id', id)
    const name = document.createElement('h3')
    name.innerHTML = `${itemName}`
    const buttons = document.createElement('div')
    const cancelButton = document.createElement('button')
    cancelButton.setAttribute('class', 'itemButton cancel')
    const doneButton = document.createElement('button')
    doneButton.document.setAttribute('class', 'itemButton done')

    buttons.appendChild(cancelButton)
    buttons.appendChild(doneButton)

    item.appendChild(name)
    item.appendChild(buttons)

    return { item }
}

const mainTab = (() => {
    const tab = document.createElement('div')
    tab.setAttribute('class', 'mainTab')

    return { tab }
})()

const mainItems = (itemName, id, project, startDate, endDate, description) => {
    const card = document.createElement('div')
    card.setAttribute('class', `card ${project}`)
    card.setAttribute('id', id)
    const name = document.createElement('h3')
    name.innerHTML = `${itemName}`
    const projectName = document.createElement('span')
    projectName.innerHTML = `${project}`

    return card
}

const sideBarAdd = () => {
    const bar = document.querySelector('.sideBar')
    bar.innerHTML = ''
    const title = document.createElement('h2')
    title.innerHTML = 'Adding'
    bar.appendChild(title)
    const inputs = ['Name', 'Project', 'Starting Date', 'Ending Date', 'Description']
    const types = ['text', 'text', 'date', 'date', 'text']
    for (let i = 0; i < inputs.length; i++) {
        const inputName = document.createElement('h3')
        inputName.style.marginBottom = '5px'
        inputName.innerHTML = `${inputs[i]}`
        const inputBox = document.createElement('input')
        inputBox.setAttribute('class', 'inputBox')
        inputBox.setAttribute('id', `${'add'+inputs[i].replace(' ','')}`)
        inputBox.setAttribute('type', `${types[i]}`)
        bar.appendChild(inputName)
        bar.appendChild(inputBox)
    }
    const addButton = document.createElement('button')
    addButton.setAttribute('class', 'button addButton')
    addButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>'
    bar.appendChild(addButton)
    const cancelButton = document.createElement('button')
    cancelButton.setAttribute('class', 'button cancelButton')
    cancelButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>'
    bar.appendChild(cancelButton)
}




/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const loadPage = (() => {
    const content = document.querySelector('.content')
    content.appendChild(_elements__WEBPACK_IMPORTED_MODULE_0__.navBar.nav)
    content.appendChild(_elements__WEBPACK_IMPORTED_MODULE_0__.sideBar.bar)
    content.appendChild(_elements__WEBPACK_IMPORTED_MODULE_0__.mainTab.tab)
})()
})();

/******/ })()
;