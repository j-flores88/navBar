/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/navBarGenerator.js":
/*!********************************!*\
  !*** ./src/navBarGenerator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navBarGenerator)
/* harmony export */ });
/* harmony import */ var _navBurgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBurgerMenu */ "./src/navBurgerMenu.js");


const navSection = document.querySelector('nav');

const navBarGenerator = (pageTitle, titleClass, ...links) => {
    const navTitle = document.createElement('div');
    const navList = document.createElement('ul');

    navTitle.innerText = pageTitle;
    if(titleClass) navTitle.classList.add(titleClass);

    navSection.appendChild(navTitle);
    navSection.appendChild((0,_navBurgerMenu__WEBPACK_IMPORTED_MODULE_0__.default)());
    navSection.appendChild(navList);
    

    links.forEach((link) => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `
            <a href=#>${link}</a>
        `
        navList.appendChild(newLi);
    });
}




/***/ }),

/***/ "./src/navBurgerMenu.js":
/*!******************************!*\
  !*** ./src/navBurgerMenu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navBurgerMenu)
/* harmony export */ });
const navBurgerMenu = () => {
    const burgerDiv = document.createElement('div');
    burgerDiv.classList.add('burger');
    burgerDiv.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
    `
    return burgerDiv
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navBarGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBarGenerator */ "./src/navBarGenerator.js");


(0,_navBarGenerator__WEBPACK_IMPORTED_MODULE_0__.default)('NavBar', 'logo', 'Home', 'About', 'Contact', 'Social');

const showDropDown = () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('ul');

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('burgerDropDown')
    });

    window.addEventListener('resize', () => {
        if(window.innerWidth > 786 && mobileMenu.classList.contains('burgerDropDown'))
        mobileMenu.classList.remove('burgerDropDown')
    })
}

showDropDown()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHVEQUFhO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEtBQUs7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFc0M7Ozs7Ozs7Ozs7Ozs7OztBQ3pCdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9DOzs7Ozs7O1VDWHBDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0Q7O0FBRWhELHlEQUFlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsYyIsInNvdXJjZXMiOlsid2VicGFjazovL25hdmJhci8uL3NyYy9uYXZCYXJHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbmF2YmFyLy4vc3JjL25hdkJ1cmdlck1lbnUuanMiLCJ3ZWJwYWNrOi8vbmF2YmFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25hdmJhci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmF2YmFyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmF2YmFyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmF2YmFyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYXZCdXJnZXJNZW51IGZyb20gXCIuL25hdkJ1cmdlck1lbnVcIjtcblxuY29uc3QgbmF2U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuXG5jb25zdCBuYXZCYXJHZW5lcmF0b3IgPSAocGFnZVRpdGxlLCB0aXRsZUNsYXNzLCAuLi5saW5rcykgPT4ge1xuICAgIGNvbnN0IG5hdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBuYXZUaXRsZS5pbm5lclRleHQgPSBwYWdlVGl0bGU7XG4gICAgaWYodGl0bGVDbGFzcykgbmF2VGl0bGUuY2xhc3NMaXN0LmFkZCh0aXRsZUNsYXNzKTtcblxuICAgIG5hdlNlY3Rpb24uYXBwZW5kQ2hpbGQobmF2VGl0bGUpO1xuICAgIG5hdlNlY3Rpb24uYXBwZW5kQ2hpbGQobmF2QnVyZ2VyTWVudSgpKTtcbiAgICBuYXZTZWN0aW9uLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuICAgIFxuXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld0xpLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxhIGhyZWY9Iz4ke2xpbmt9PC9hPlxuICAgICAgICBgXG4gICAgICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBuYXZCYXJHZW5lcmF0b3IgYXMgZGVmYXVsdCB9O1xuIiwiY29uc3QgbmF2QnVyZ2VyTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBidXJnZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXJnZXJEaXYuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyJyk7XG4gICAgYnVyZ2VyRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICBgXG4gICAgcmV0dXJuIGJ1cmdlckRpdlxufVxuXG5leHBvcnQgeyBuYXZCdXJnZXJNZW51IGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG5hdkJhckdlbmVyYXRvciBmcm9tIFwiLi9uYXZCYXJHZW5lcmF0b3JcIjtcblxubmF2QmFyR2VuZXJhdG9yKCdOYXZCYXInLCAnbG9nbycsICdIb21lJywgJ0Fib3V0JywgJ0NvbnRhY3QnLCAnU29jaWFsJyk7XG5cbmNvbnN0IHNob3dEcm9wRG93biA9ICgpID0+IHtcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyRHJvcERvd24nKVxuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiA3ODYgJiYgbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlckRyb3BEb3duJykpXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyRHJvcERvd24nKVxuICAgIH0pXG59XG5cbnNob3dEcm9wRG93bigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9