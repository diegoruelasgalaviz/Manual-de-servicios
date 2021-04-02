module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/_App/GoTop.js":
/*!**********************************!*\
  !*** ./components/_App/GoTop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Manual de Servicio\\ston-react-disinfection-sanitization-services-template\\ston\\components\\_App\\GoTop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GoTop = ({
  scrollStepInPx,
  delayInMs
}) => {
  const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  };

  const renderGoTopIcon = () => {
    return __jsx("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx("i", {
      className: "bx bx-chevrons-up",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }), __jsx("i", {
      className: "bx bx-chevrons-up",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, renderGoTopIcon());
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoTop */ "./components/_App/GoTop.js");
/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Preloader */ "./components/_App/Preloader.js");
var _jsxFileName = "D:\\Manual de Servicio\\ston-react-disinfection-sanitization-services-template\\ston\\components\\_App\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Layout = ({
  children
}) => {
  // Preloader
  const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setTimeout(() => setLoader(false), 1000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Manuales Emerymark"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Manuales de Emerymark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "Manuales de Emerymark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "Manuales de Emerymark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "canonical",
    href: "https://ston-react.envytheme.com/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })), children, loader ? __jsx(_Preloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 23
    }
  }) : null, __jsx(_GoTop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    scrollStepInPx: "100",
    delayInMs: "10.50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_1__["Slide"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/_App/Preloader.js":
/*!**************************************!*\
  !*** ./components/_App/Preloader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Manual de Servicio\\ston-react-disinfection-sanitization-services-template\\ston\\components\\_App\\Preloader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Preloader = () => {
  return __jsx("div", {
    className: "loader-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "loader-section section-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "loader-section section-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Preloader);

/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ "./public/css/bootstrap.min.css");
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_css_animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/animate.css */ "./public/css/animate.css");
/* harmony import */ var _public_css_animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_animate_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/boxicons.min.css */ "./public/css/boxicons.min.css");
/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/flaticon.css */ "./public/css/flaticon.css");
/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_css_meanmenu_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/css/meanmenu.css */ "./public/css/meanmenu.css");
/* harmony import */ var _public_css_meanmenu_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_meanmenu_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ "./node_modules/react-modal-video/css/modal-video.min.css");
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/css/style.css */ "./public/css/style.css");
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/css/responsive.css */ "./public/css/responsive.css");
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_reducers_reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/reducers/reducers */ "./store/reducers/reducers.js");
var _jsxFileName = "D:\\Manual de Servicio\\ston-react-disinfection-sanitization-services-template\\ston\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















const MyApp = ({
  Component,
  pageProps
}) => {
  const store = Object(_store_reducers_reducers__WEBPACK_IMPORTED_MODULE_14__["useStore"])(pageProps.initialReduxState);
  return __jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_13__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/css/animate.css":
/*!********************************!*\
  !*** ./public/css/animate.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/boxicons.min.css":
/*!*************************************!*\
  !*** ./public/css/boxicons.min.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/flaticon.css":
/*!*********************************!*\
  !*** ./public/css/flaticon.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/meanmenu.css":
/*!*********************************!*\
  !*** ./public/css/meanmenu.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/actions/action-types/action-names.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/action-names.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, COLLAPSED_STATE, SIDEBAR_MODAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLAPSED_STATE", function() { return COLLAPSED_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_MODAL_STATE", function() { return SIDEBAR_MODAL_STATE; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';
const COLLAPSED_STATE = 'COLLAPSED_STATE';
const SIDEBAR_MODAL_STATE = 'SIDEBAR_MODAL_STATE';

/***/ }),

/***/ "./store/data/products.js":
/*!********************************!*\
  !*** ./store/data/products.js ***!
  \********************************/
/*! exports provided: productsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsData", function() { return productsData; });
const productsData = [{
  id: "5f05ab914875b805d9f87b09",
  title: "COVID-19 Protect Mask",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 20,
  image: "/img/products/product1.jpg",
  type: "thriller"
}, {
  id: "5f0cc6063ab06e21b560184b",
  title: "Surgical Hand Gloves",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 25,
  image: "/img/products/product2.jpg",
  type: "drugs"
}, {
  id: "5f0df3a63ab06e21b560184c",
  title: "Cleaning Agent Solve",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 30,
  image: "/img/products/product3.jpg",
  type: "war"
}, {
  id: "5f0e24bb4c722b06d3de91e9",
  title: "Antiseptics",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 55,
  image: "/img/products/product4.jpg",
  type: "thriller"
}, {
  id: "5f0e987692991f78159ca345",
  title: "Medical Gloves",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 54,
  image: "/img/products/product5.jpg",
  type: "war"
}, {
  id: "5f0ea1d392991f78159ca346",
  title: "Drugs",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 55,
  image: "/img/products/product6.jpg",
  type: "crime"
}, {
  id: "5f0ec35892991f78159ca347",
  title: "Asprin",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 59,
  image: "/img/products/product7.jpg",
  type: "crime"
}, {
  id: "5f0ee94a92991f78159ca348",
  title: "Sanitizer",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 69,
  image: "/img/products/product8.jpg",
  type: "family"
}, {
  id: "5f0f5f1e92991f78159ca349",
  title: "Hand Sanitizer",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 49,
  image: "/img/products/product9.jpg",
  type: "drugs"
}];

/***/ }),

/***/ "./store/reducers/reducers.js":
/*!************************************!*\
  !*** ./store/reducers/reducers.js ***!
  \************************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/action-types/action-names */ "./store/actions/action-types/action-names.js");
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/products */ "./store/data/products.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let store;
const initialState = {
  products: _data_products__WEBPACK_IMPORTED_MODULE_4__["productsData"],
  addedItems: [],
  total: 0,
  shipping: 0,
  collapsedState: true,
  sidebarModalState: false
};

const reducer = (state = initialState, action) => {
  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_3__["ADD_TO_CART"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY_WITH_NUMBER"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.price * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_3__["REMOVE_ITEM"]) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_3__["SUB_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_3__["ADD_SHIPPING"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_3__["RESET_CART"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_3__["COLLAPSED_STATE"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      collapsedState: !state.collapsedState
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_MODAL_STATE"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      sidebarModalState: !state.sidebarModalState
    });
  } else {
    return state;
  }
};

const initStore = (preloadedState = initialState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])()));
};

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL0dvVG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2FjdGlvbi1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9kYXRhL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3JlZHVjZXJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiXSwibmFtZXMiOlsiR29Ub3AiLCJzY3JvbGxTdGVwSW5QeCIsImRlbGF5SW5NcyIsInRoZVBvc2l0aW9uIiwic2V0VGhlUG9zaXRpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwidGltZW91dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJvblNjcm9sbFN0ZXAiLCJwYWdlWU9mZnNldCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50Iiwic2Nyb2xsIiwic2Nyb2xsVG9Ub3AiLCJzZXRJbnRlcnZhbCIsInJlbmRlckdvVG9wSWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwibG9hZGVyIiwic2V0TG9hZGVyIiwic2V0VGltZW91dCIsIlNsaWRlIiwiUHJlbG9hZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJBRERfVE9fQ0FSVCIsIlJFTU9WRV9JVEVNIiwiU1VCX1FVQU5USVRZIiwiQUREX1FVQU5USVRZIiwiQUREX1NISVBQSU5HIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwiT1JERVJfRk9STSIsIkNIRUNLT1VUX0NIQVJHRSIsIlJFU0VUX0NBUlQiLCJDT0xMQVBTRURfU1RBVEUiLCJTSURFQkFSX01PREFMX1NUQVRFIiwicHJvZHVjdHNEYXRhIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpbWFnZSIsInR5cGUiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0cyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsInNoaXBwaW5nIiwiY29sbGFwc2VkU3RhdGUiLCJzaWRlYmFyTW9kYWxTdGF0ZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImFkZGVkSXRlbSIsImZpbmQiLCJpdGVtIiwiZXhpc3RlZF9pdGVtIiwicXVhbnRpdHkiLCJuZXdUb3RhbCIsInF0eSIsIml0ZW1Ub1JlbW92ZSIsIm5ld19pdGVtcyIsImZpbHRlciIsImluaXRTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBQ0MsZ0JBQUQ7QUFBaUJDO0FBQWpCLENBQUQsS0FBaUM7QUFFM0MsUUFBTSxDQUFDQyxXQUFELEVBQWNDLGNBQWQsSUFBZ0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQXRDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHRiw0Q0FBSyxDQUFDRyxNQUFOLENBQWEsSUFBYixDQUFuQjtBQUVBSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLE1BQU07QUFDbEJDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsTUFBTTtBQUN0QyxVQUFJQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsR0FBckIsRUFBMEI7QUFDdEJULHNCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsT0FGRCxNQUVPO0FBQ0hBLHNCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FSRCxFQVFHLEVBUkg7O0FBVUEsUUFBTVUsWUFBWSxHQUFHLE1BQU07QUFDdkIsUUFBSUYsTUFBTSxDQUFDRyxXQUFQLEtBQXVCLENBQTNCLEVBQTZCO0FBQ3pCQyxtQkFBYSxDQUFDVCxVQUFVLENBQUNVLE9BQVosQ0FBYjtBQUNIOztBQUNETCxVQUFNLENBQUNNLE1BQVAsQ0FBYyxDQUFkLEVBQWlCTixNQUFNLENBQUNHLFdBQVAsR0FBcUJkLGNBQXRDO0FBQ0gsR0FMRDs7QUFPQSxRQUFNa0IsV0FBVyxHQUFHLE1BQU07QUFDdEJaLGNBQVUsQ0FBQ1UsT0FBWCxHQUFxQkcsV0FBVyxDQUFDTixZQUFELEVBQWVaLFNBQWYsQ0FBaEM7QUFDSCxHQUZEOztBQUlBLFFBQU1tQixlQUFlLEdBQUcsTUFBTTtBQUMxQixXQUNJO0FBQUssZUFBUyxFQUFHLFVBQVNsQixXQUFXLEdBQUcsUUFBSCxHQUFjLEVBQUcsRUFBdEQ7QUFBeUQsYUFBTyxFQUFFZ0IsV0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsZUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJO0FBQUcsZUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixDQURKO0FBTUgsR0FQRDs7QUFTQSxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0UsZUFBZSxFQURwQixDQURKO0FBS0gsQ0F4Q0Q7O0FBMENlckIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNc0IsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBRTdCO0FBQ0EsUUFBTSxDQUFDQyxNQUFELEVBQVNDLFNBQVQsSUFBc0JwQiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUE1QjtBQUVBRCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLE1BQU07QUFDbEJpQixjQUFVLENBQUMsTUFBTUQsU0FBUyxDQUFDLEtBQUQsQ0FBaEIsRUFBeUIsSUFBekIsQ0FBVjtBQUNILEdBRkQsRUFFRyxFQUZIO0FBSUEsU0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVJO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVEQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBQyx1QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixZQUFRLEVBQUMsVUFBL0I7QUFBMEMsV0FBTyxFQUFDLHVCQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLFdBQU8sRUFBQyx1QkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBTSxPQUFHLEVBQUMsV0FBVjtBQUFzQixRQUFJLEVBQUMsbUNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURKLEVBVUtGLFFBVkwsRUFZS0MsTUFBTSxHQUFHLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQW1CLElBWjlCLEVBY0ksTUFBQyw4Q0FBRDtBQUFPLGtCQUFjLEVBQUMsS0FBdEI7QUFBNEIsYUFBUyxFQUFDLE9BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWdCSSxNQUFDLDZEQUFEO0FBQWdCLGNBQVUsRUFBRUcsb0RBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkosQ0FESjtBQW9CSCxDQTdCRDs7QUErQmVMLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBOztBQUVBLE1BQU1NLFNBQVMsR0FBRyxNQUFNO0FBQ3BCLFNBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURLLEVBRUw7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZLLEVBR0w7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhLLENBREo7QUFPSCxDQVJEOztBQVVlQSx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxLQUFLLEdBQUksQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUN6QyxRQUFNQyxLQUFLLEdBQUdDLDBFQUFRLENBQUNGLFNBQVMsQ0FBQ0csaUJBQVgsQ0FBdEI7QUFDQSxTQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFBVSxTQUFLLEVBQUVGLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FESixDQURKO0FBT0gsQ0FURDs7QUFXZUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxNQUFNTSxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QixDOzs7Ozs7Ozs7Ozs7QUNYUDtBQUFBO0FBQU8sTUFBTUMsWUFBWSxHQUFHLENBQ3hCO0FBQ0lDLElBQUUsRUFBRSwwQkFEUjtBQUVJQyxPQUFLLEVBQUUsdUJBRlg7QUFHSUMsYUFBVyxFQUFFLCtiQUhqQjtBQUlJQyxPQUFLLEVBQUUsRUFKWDtBQUtJQyxPQUFLLEVBQUUsNEJBTFg7QUFNSUMsTUFBSSxFQUFFO0FBTlYsQ0FEd0IsRUFTeEI7QUFDSUwsSUFBRSxFQUFFLDBCQURSO0FBRUlDLE9BQUssRUFBRSxzQkFGWDtBQUdJQyxhQUFXLEVBQUUsK2JBSGpCO0FBSUlDLE9BQUssRUFBRSxFQUpYO0FBS0lDLE9BQUssRUFBRSw0QkFMWDtBQU1JQyxNQUFJLEVBQUU7QUFOVixDQVR3QixFQWlCeEI7QUFDSUwsSUFBRSxFQUFFLDBCQURSO0FBRUlDLE9BQUssRUFBRSxzQkFGWDtBQUdJQyxhQUFXLEVBQUUsK2JBSGpCO0FBSUlDLE9BQUssRUFBRSxFQUpYO0FBS0lDLE9BQUssRUFBRSw0QkFMWDtBQU1JQyxNQUFJLEVBQUU7QUFOVixDQWpCd0IsRUF5QnhCO0FBQ0lMLElBQUUsRUFBRSwwQkFEUjtBQUVJQyxPQUFLLEVBQUUsYUFGWDtBQUdJQyxhQUFXLEVBQUUsK2JBSGpCO0FBSUlDLE9BQUssRUFBRSxFQUpYO0FBS0lDLE9BQUssRUFBRSw0QkFMWDtBQU1JQyxNQUFJLEVBQUU7QUFOVixDQXpCd0IsRUFpQ3hCO0FBQ0lMLElBQUUsRUFBRSwwQkFEUjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsYUFBVyxFQUFFLCtiQUhqQjtBQUlJQyxPQUFLLEVBQUUsRUFKWDtBQUtJQyxPQUFLLEVBQUUsNEJBTFg7QUFNSUMsTUFBSSxFQUFFO0FBTlYsQ0FqQ3dCLEVBeUN4QjtBQUNJTCxJQUFFLEVBQUUsMEJBRFI7QUFFSUMsT0FBSyxFQUFFLE9BRlg7QUFHSUMsYUFBVyxFQUFFLCtiQUhqQjtBQUlJQyxPQUFLLEVBQUUsRUFKWDtBQUtJQyxPQUFLLEVBQUUsNEJBTFg7QUFNSUMsTUFBSSxFQUFFO0FBTlYsQ0F6Q3dCLEVBaUR4QjtBQUNJTCxJQUFFLEVBQUUsMEJBRFI7QUFFSUMsT0FBSyxFQUFFLFFBRlg7QUFHSUMsYUFBVyxFQUFFLCtiQUhqQjtBQUlJQyxPQUFLLEVBQUUsRUFKWDtBQUtJQyxPQUFLLEVBQUUsNEJBTFg7QUFNSUMsTUFBSSxFQUFFO0FBTlYsQ0FqRHdCLEVBeUR4QjtBQUNJTCxJQUFFLEVBQUUsMEJBRFI7QUFFSUMsT0FBSyxFQUFFLFdBRlg7QUFHSUMsYUFBVyxFQUFFLCtiQUhqQjtBQUlJQyxPQUFLLEVBQUUsRUFKWDtBQUtJQyxPQUFLLEVBQUUsNEJBTFg7QUFNSUMsTUFBSSxFQUFFO0FBTlYsQ0F6RHdCLEVBaUV4QjtBQUNJTCxJQUFFLEVBQUUsMEJBRFI7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLGFBQVcsRUFBRSwrYkFIakI7QUFJSUMsT0FBSyxFQUFFLEVBSlg7QUFLSUMsT0FBSyxFQUFFLDRCQUxYO0FBTUlDLE1BQUksRUFBRTtBQU5WLENBakV3QixDQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQSxJQUFJcEIsS0FBSjtBQUdBLE1BQU1xQixZQUFZLEdBQUc7QUFDakJDLFVBQVEsRUFBRVIsMkRBRE87QUFFakJTLFlBQVUsRUFBRSxFQUZLO0FBR2pCQyxPQUFLLEVBQUUsQ0FIVTtBQUlqQkMsVUFBUSxFQUFFLENBSk87QUFLakJDLGdCQUFjLEVBQUUsSUFMQztBQU1qQkMsbUJBQWlCLEVBQUU7QUFORixDQUFyQjs7QUFTQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHUixZQUFULEVBQXVCUyxNQUF2QixLQUFrQztBQUU5QyxNQUFHQSxNQUFNLENBQUNWLElBQVAsS0FBZ0JqQiw4RUFBbkIsRUFBK0I7QUFDM0IsUUFBSTRCLFNBQVMsR0FBR0YsS0FBSyxDQUFDUCxRQUFOLENBQWVVLElBQWYsQ0FBb0JDLElBQUksSUFBSUEsSUFBSSxDQUFDbEIsRUFBTCxLQUFZZSxNQUFNLENBQUNmLEVBQS9DLENBQWhCLENBRDJCLENBRTNCOztBQUNBLFFBQUltQixZQUFZLEdBQUdMLEtBQUssQ0FBQ04sVUFBTixDQUFpQlMsSUFBakIsQ0FBc0JDLElBQUksSUFBSUgsTUFBTSxDQUFDZixFQUFQLEtBQWNrQixJQUFJLENBQUNsQixFQUFqRCxDQUFuQjs7QUFDQSxRQUFHbUIsWUFBSCxFQUFnQjtBQUNaSCxlQUFTLENBQUNJLFFBQVYsSUFBc0IsQ0FBdEI7QUFDQSw2Q0FDT04sS0FEUDtBQUVJTCxhQUFLLEVBQUVLLEtBQUssQ0FBQ0wsS0FBTixHQUFjTyxTQUFTLENBQUNiO0FBRm5DO0FBSUgsS0FORCxNQU1PO0FBQ0hhLGVBQVMsQ0FBQ0ksUUFBVixHQUFxQixDQUFyQixDQURHLENBRUg7O0FBQ0EsVUFBSUMsUUFBUSxHQUFHUCxLQUFLLENBQUNMLEtBQU4sR0FBY08sU0FBUyxDQUFDYixLQUF2QztBQUVBLDZDQUNPVyxLQURQO0FBRUlOLGtCQUFVLEVBQUUsQ0FBQyxHQUFHTSxLQUFLLENBQUNOLFVBQVYsRUFBc0JRLFNBQXRCLENBRmhCO0FBR0lQLGFBQUssRUFBRVk7QUFIWDtBQUtIO0FBQ0o7O0FBRUQsTUFBR04sTUFBTSxDQUFDVixJQUFQLEtBQWdCWiwyRkFBbkIsRUFBNEM7QUFDeEMsUUFBSXVCLFNBQVMsR0FBR0YsS0FBSyxDQUFDUCxRQUFOLENBQWVVLElBQWYsQ0FBb0JDLElBQUksSUFBSUEsSUFBSSxDQUFDbEIsRUFBTCxLQUFZZSxNQUFNLENBQUNmLEVBQS9DLENBQWhCLENBRHdDLENBRXhDOztBQUNBLFFBQUltQixZQUFZLEdBQUdMLEtBQUssQ0FBQ04sVUFBTixDQUFpQlMsSUFBakIsQ0FBc0JDLElBQUksSUFBR0gsTUFBTSxDQUFDZixFQUFQLEtBQWNrQixJQUFJLENBQUNsQixFQUFoRCxDQUFuQjs7QUFDQSxRQUFHbUIsWUFBSCxFQUNBO0FBQ0lILGVBQVMsQ0FBQ0ksUUFBVixJQUFzQkwsTUFBTSxDQUFDTyxHQUE3QjtBQUNBLDZDQUNPUixLQURQO0FBRUlMLGFBQUssRUFBRUssS0FBSyxDQUFDTCxLQUFOLEdBQWNPLFNBQVMsQ0FBQ2IsS0FBVixHQUFrQlksTUFBTSxDQUFDTztBQUZsRDtBQUlILEtBUEQsTUFPTztBQUNITixlQUFTLENBQUNJLFFBQVYsR0FBcUJMLE1BQU0sQ0FBQ08sR0FBNUIsQ0FERyxDQUVIOztBQUNBLFVBQUlELFFBQVEsR0FBR1AsS0FBSyxDQUFDTCxLQUFOLEdBQWNPLFNBQVMsQ0FBQ2IsS0FBVixHQUFrQlksTUFBTSxDQUFDTyxHQUF0RDtBQUVBLDZDQUNPUixLQURQO0FBRUlOLGtCQUFVLEVBQUUsQ0FBQyxHQUFHTSxLQUFLLENBQUNOLFVBQVYsRUFBc0JRLFNBQXRCLENBRmhCO0FBR0lQLGFBQUssRUFBRVk7QUFIWDtBQU1IO0FBQ0o7O0FBRUQsTUFBR04sTUFBTSxDQUFDVixJQUFQLEtBQWdCaEIsOEVBQW5CLEVBQStCO0FBQzNCLFFBQUlrQyxZQUFZLEdBQUdULEtBQUssQ0FBQ04sVUFBTixDQUFpQlMsSUFBakIsQ0FBc0JDLElBQUksSUFBR0gsTUFBTSxDQUFDZixFQUFQLEtBQWNrQixJQUFJLENBQUNsQixFQUFoRCxDQUFuQjtBQUNBLFFBQUl3QixTQUFTLEdBQUdWLEtBQUssQ0FBQ04sVUFBTixDQUFpQmlCLE1BQWpCLENBQXdCUCxJQUFJLElBQUdILE1BQU0sQ0FBQ2YsRUFBUCxLQUFja0IsSUFBSSxDQUFDbEIsRUFBbEQsQ0FBaEIsQ0FGMkIsQ0FJM0I7O0FBQ0EsUUFBSXFCLFFBQVEsR0FBR1AsS0FBSyxDQUFDTCxLQUFOLEdBQWVjLFlBQVksQ0FBQ3BCLEtBQWIsR0FBcUJvQixZQUFZLENBQUNILFFBQWhFO0FBRUEsMkNBQ09OLEtBRFA7QUFFSU4sZ0JBQVUsRUFBRWdCLFNBRmhCO0FBR0lmLFdBQUssRUFBRVk7QUFIWDtBQUtIOztBQUVELE1BQUdOLE1BQU0sQ0FBQ1YsSUFBUCxLQUFnQmQsK0VBQW5CLEVBQWdDO0FBQzVCLFFBQUl5QixTQUFTLEdBQUdGLEtBQUssQ0FBQ1AsUUFBTixDQUFlVSxJQUFmLENBQW9CQyxJQUFJLElBQUdBLElBQUksQ0FBQ2xCLEVBQUwsS0FBWWUsTUFBTSxDQUFDZixFQUE5QyxDQUFoQjtBQUNBZ0IsYUFBUyxDQUFDSSxRQUFWLElBQXNCLENBQXRCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHUCxLQUFLLENBQUNMLEtBQU4sR0FBY08sU0FBUyxDQUFDYixLQUF2QztBQUNBLDJDQUNPVyxLQURQO0FBRUlMLFdBQUssRUFBRVk7QUFGWDtBQUlIOztBQUVELE1BQUdOLE1BQU0sQ0FBQ1YsSUFBUCxLQUFnQmYsK0VBQW5CLEVBQWdDO0FBQzVCLFFBQUkwQixTQUFTLEdBQUdGLEtBQUssQ0FBQ1AsUUFBTixDQUFlVSxJQUFmLENBQW9CQyxJQUFJLElBQUdBLElBQUksQ0FBQ2xCLEVBQUwsS0FBWWUsTUFBTSxDQUFDZixFQUE5QyxDQUFoQixDQUQ0QixDQUU1Qjs7QUFDQSxRQUFHZ0IsU0FBUyxDQUFDSSxRQUFWLEtBQXVCLENBQTFCLEVBQTRCO0FBQ3hCLFVBQUlJLFNBQVMsR0FBR1YsS0FBSyxDQUFDTixVQUFOLENBQWlCaUIsTUFBakIsQ0FBd0JQLElBQUksSUFBRUEsSUFBSSxDQUFDbEIsRUFBTCxLQUFZZSxNQUFNLENBQUNmLEVBQWpELENBQWhCO0FBQ0EsVUFBSXFCLFFBQVEsR0FBR1AsS0FBSyxDQUFDTCxLQUFOLEdBQWNPLFNBQVMsQ0FBQ2IsS0FBdkM7QUFDQSw2Q0FDT1csS0FEUDtBQUVJTixrQkFBVSxFQUFFZ0IsU0FGaEI7QUFHSWYsYUFBSyxFQUFFWTtBQUhYO0FBS0gsS0FSRCxNQVFPO0FBQ0hMLGVBQVMsQ0FBQ0ksUUFBVixJQUFzQixDQUF0QjtBQUNBLFVBQUlDLFFBQVEsR0FBR1AsS0FBSyxDQUFDTCxLQUFOLEdBQWNPLFNBQVMsQ0FBQ2IsS0FBdkM7QUFDQSw2Q0FDT1csS0FEUDtBQUVJTCxhQUFLLEVBQUVZO0FBRlg7QUFJSDtBQUNKOztBQUVELE1BQUdOLE1BQU0sQ0FBQ1YsSUFBUCxLQUFnQmIsK0VBQW5CLEVBQWdDO0FBQzVCLDJDQUNPc0IsS0FEUDtBQUVJSixjQUFRLEVBQUVJLEtBQUssQ0FBQ0osUUFBTixJQUFrQjtBQUZoQztBQUlIOztBQUVELE1BQUdLLE1BQU0sQ0FBQ1YsSUFBUCxLQUFnQixjQUFuQixFQUFrQztBQUM5QiwyQ0FDT1MsS0FEUDtBQUVJSixjQUFRLEVBQUVJLEtBQUssQ0FBQ0osUUFBTixJQUFrQjtBQUZoQztBQUlIOztBQUVELE1BQUdLLE1BQU0sQ0FBQ1YsSUFBUCxLQUFnQlQsNkVBQW5CLEVBQThCO0FBQzFCLDJDQUNPa0IsS0FEUDtBQUVJTixnQkFBVSxFQUFFLEVBRmhCO0FBR0lDLFdBQUssRUFBRSxDQUhYO0FBSUlDLGNBQVEsRUFBRTtBQUpkO0FBTUg7O0FBRUQsTUFBR0ssTUFBTSxDQUFDVixJQUFQLEtBQWdCUixrRkFBbkIsRUFBbUM7QUFDL0IsMkNBQ09pQixLQURQO0FBRUlILG9CQUFjLEVBQUUsQ0FBQ0csS0FBSyxDQUFDSDtBQUYzQjtBQUlIOztBQUVELE1BQUdJLE1BQU0sQ0FBQ1YsSUFBUCxLQUFnQlAsc0ZBQW5CLEVBQXVDO0FBQ25DLDJDQUNPZ0IsS0FEUDtBQUVJRix1QkFBaUIsRUFBRSxDQUFDRSxLQUFLLENBQUNGO0FBRjlCO0FBSUgsR0FMRCxNQU9LO0FBQ0QsV0FBT0UsS0FBUDtBQUNIO0FBQ0osQ0F2SUQ7O0FBeUlBLE1BQU1ZLFNBQVMsR0FBRyxDQUFDQyxjQUFjLEdBQUdyQixZQUFsQixLQUFtQztBQUNqRCxTQUFPc0IseURBQVcsQ0FDZGYsT0FEYyxFQUVkYyxjQUZjLEVBR2RFLG9GQUFtQixDQUFDQyw2REFBZSxFQUFoQixDQUhMLENBQWxCO0FBS0gsQ0FORDs7QUFRTyxNQUFNQyxlQUFlLEdBQUlKLGNBQUQsSUFBb0I7QUFBQTs7QUFDL0MsTUFBSUssTUFBTSxjQUFHL0MsS0FBSCw2Q0FBWXlDLFNBQVMsQ0FBQ0MsY0FBRCxDQUEvQixDQUQrQyxDQUcvQztBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUkxQyxLQUF0QixFQUE2QjtBQUN6QitDLFVBQU0sR0FBR04sU0FBUyxpQ0FDWHpDLEtBQUssQ0FBQ2dELFFBQU4sRUFEVyxHQUVYTixjQUZXLEVBQWxCLENBRHlCLENBS3pCOztBQUNBMUMsU0FBSyxHQUFHaUQsU0FBUjtBQUNILEdBWjhDLENBYy9DOzs7QUFDQSxZQUFtQyxPQUFPRixNQUFQLENBZlksQ0FnQi9DOztBQUNBLE1BQUksQ0FBQy9DLEtBQUwsRUFBWUEsS0FBSyxHQUFHK0MsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDSCxDQXBCTTtBQXNCQSxTQUFTOUMsUUFBVCxDQUFrQm9CLFlBQWxCLEVBQWdDO0FBQ25DLFFBQU1yQixLQUFLLEdBQUdrRCxxREFBTyxDQUFDLE1BQU1KLGVBQWUsQ0FBQ3pCLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9yQixLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUQsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEdvVG9wID0gKHtzY3JvbGxTdGVwSW5QeCwgZGVsYXlJbk1zfSkgPT4ge1xuXG4gICAgY29uc3QgW3RoZVBvc2l0aW9uLCBzZXRUaGVQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24odHJ1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24oZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSlcbiAgICBcbiAgICBjb25zdCBvblNjcm9sbFN0ZXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgd2luZG93LnBhZ2VZT2Zmc2V0IC0gc2Nyb2xsU3RlcEluUHgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbChvblNjcm9sbFN0ZXAsIGRlbGF5SW5Ncyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyR29Ub3BJY29uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bnby10b3AgJHt0aGVQb3NpdGlvbiA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb25zLXVwXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4LWNoZXZyb25zLXVwXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7cmVuZGVyR29Ub3BJY29uKCl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb1RvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgU2xpZGUgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IEdvVG9wIGZyb20gJy4vR29Ub3AnXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vUHJlbG9hZGVyJ1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgICAvLyBQcmVsb2FkZXJcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldExvYWRlcihmYWxzZSksIDEwMDApO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TWFudWFsZXMgRW1lcnltYXJrPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJNYW51YWxlcyBkZSBFbWVyeW1hcmtcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTWFudWFsZXMgZGUgRW1lcnltYXJrXCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiTWFudWFsZXMgZGUgRW1lcnltYXJrXCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3N0b24tcmVhY3QuZW52eXRoZW1lLmNvbS9cIj48L2xpbms+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICAgICAge2xvYWRlciA/IDxQcmVsb2FkZXIgLz4gOiBudWxsfVxuICAgICAgICBcbiAgICAgICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjEwMFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz5cblxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHRyYW5zaXRpb249e1NsaWRlfSAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFByZWxvYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci13cmFwcGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkZXItc2VjdGlvbiBzZWN0aW9uLWxlZnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLXNlY3Rpb24gc2VjdGlvbi1yaWdodFwiPjwvZGl2PlxuXHRcdDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyXG4iLCJpbXBvcnQgJy4uL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvYW5pbWF0ZS5jc3MnXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvYm94aWNvbnMubWluLmNzcydcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9mbGF0aWNvbi5jc3MnXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvbWVhbm1lbnUuY3NzJ1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLm1pbi5jc3MnXG5pbXBvcnQgJ3JlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZmFuY3ktZXhhbXBsZS5jc3MnXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9zdHlsZS5jc3MnXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvcmVzcG9uc2l2ZS5jc3MnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9fQXBwL0xheW91dCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2Vycy9yZWR1Y2VycydcblxuY29uc3QgTXlBcHAgPSAgKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiLy9UeXBlcyBzaG91bGQgYmUgaW4gY29uc3QgdG8gYXZvaWQgdHlwb3MgYW5kIGR1cGxpY2F0aW9uIHNpbmNlIGl0J3MgYSBzdHJpbmcgYW5kIGNvdWxkIGJlIGVhc2lseSBtaXNzIHNwZWxsZWRcbmV4cG9ydCBjb25zdCBBRERfVE9fQ0FSVCA9ICdBRERfVE9fQ0FSVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0lURU0gPSAnUkVNT1ZFX0lURU0nO1xuZXhwb3J0IGNvbnN0IFNVQl9RVUFOVElUWSA9ICdTVUJfUVVBTlRJVFknO1xuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWSA9ICdBRERfUVVBTlRJVFknO1xuZXhwb3J0IGNvbnN0IEFERF9TSElQUElORyA9ICdBRERfU0hJUFBJTkcnO1xuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUiA9ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInO1xuZXhwb3J0IGNvbnN0IE9SREVSX0ZPUk0gPSAnT1JERVJfRk9STSc7XG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfQ0hBUkdFID0gJ0NIRUNLT1VUX0NIQVJHRSc7XG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSVCA9ICdSRVNFVF9DQVJUJztcbmV4cG9ydCBjb25zdCBDT0xMQVBTRURfU1RBVEUgPSAnQ09MTEFQU0VEX1NUQVRFJztcbmV4cG9ydCBjb25zdCBTSURFQkFSX01PREFMX1NUQVRFID0gJ1NJREVCQVJfTU9EQUxfU1RBVEUnOyIsImV4cG9ydCBjb25zdCBwcm9kdWN0c0RhdGEgPSBbXG4gICAge1xuICAgICAgICBpZDogXCI1ZjA1YWI5MTQ4NzViODA1ZDlmODdiMDlcIixcbiAgICAgICAgdGl0bGU6IFwiQ09WSUQtMTkgUHJvdGVjdCBNYXNrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcbiAgICAgICAgcHJpY2U6IDIwLFxuICAgICAgICBpbWFnZTogXCIvaW1nL3Byb2R1Y3RzL3Byb2R1Y3QxLmpwZ1wiLFxuICAgICAgICB0eXBlOiBcInRocmlsbGVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiNWYwY2M2MDYzYWIwNmUyMWI1NjAxODRiXCIsXG4gICAgICAgIHRpdGxlOiBcIlN1cmdpY2FsIEhhbmQgR2xvdmVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcbiAgICAgICAgcHJpY2U6IDI1LFxuICAgICAgICBpbWFnZTogXCIvaW1nL3Byb2R1Y3RzL3Byb2R1Y3QyLmpwZ1wiLFxuICAgICAgICB0eXBlOiBcImRydWdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiNWYwZGYzYTYzYWIwNmUyMWI1NjAxODRjXCIsXG4gICAgICAgIHRpdGxlOiBcIkNsZWFuaW5nIEFnZW50IFNvbHZlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcbiAgICAgICAgcHJpY2U6IDMwLFxuICAgICAgICBpbWFnZTogXCIvaW1nL3Byb2R1Y3RzL3Byb2R1Y3QzLmpwZ1wiLFxuICAgICAgICB0eXBlOiBcIndhclwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcIjVmMGUyNGJiNGM3MjJiMDZkM2RlOTFlOVwiLFxuICAgICAgICB0aXRsZTogXCJBbnRpc2VwdGljc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXG4gICAgICAgIHByaWNlOiA1NSxcbiAgICAgICAgaW1hZ2U6IFwiL2ltZy9wcm9kdWN0cy9wcm9kdWN0NC5qcGdcIixcbiAgICAgICAgdHlwZTogXCJ0aHJpbGxlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcIjVmMGU5ODc2OTI5OTFmNzgxNTljYTM0NVwiLFxuICAgICAgICB0aXRsZTogXCJNZWRpY2FsIEdsb3Zlc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXG4gICAgICAgIHByaWNlOiA1NCxcbiAgICAgICAgaW1hZ2U6IFwiL2ltZy9wcm9kdWN0cy9wcm9kdWN0NS5qcGdcIixcbiAgICAgICAgdHlwZTogXCJ3YXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCI1ZjBlYTFkMzkyOTkxZjc4MTU5Y2EzNDZcIixcbiAgICAgICAgdGl0bGU6IFwiRHJ1Z3NcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxuICAgICAgICBwcmljZTogNTUsXG4gICAgICAgIGltYWdlOiBcIi9pbWcvcHJvZHVjdHMvcHJvZHVjdDYuanBnXCIsXG4gICAgICAgIHR5cGU6IFwiY3JpbWVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCI1ZjBlYzM1ODkyOTkxZjc4MTU5Y2EzNDdcIixcbiAgICAgICAgdGl0bGU6IFwiQXNwcmluXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcbiAgICAgICAgcHJpY2U6IDU5LFxuICAgICAgICBpbWFnZTogXCIvaW1nL3Byb2R1Y3RzL3Byb2R1Y3Q3LmpwZ1wiLFxuICAgICAgICB0eXBlOiBcImNyaW1lXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiNWYwZWU5NGE5Mjk5MWY3ODE1OWNhMzQ4XCIsXG4gICAgICAgIHRpdGxlOiBcIlNhbml0aXplclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIsXG4gICAgICAgIHByaWNlOiA2OSxcbiAgICAgICAgaW1hZ2U6IFwiL2ltZy9wcm9kdWN0cy9wcm9kdWN0OC5qcGdcIixcbiAgICAgICAgdHlwZTogXCJmYW1pbHlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCI1ZjBmNWYxZTkyOTkxZjc4MTU5Y2EzNDlcIixcbiAgICAgICAgdGl0bGU6IFwiSGFuZCBTYW5pdGl6ZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxuICAgICAgICBwcmljZTogNDksXG4gICAgICAgIGltYWdlOiBcIi9pbWcvcHJvZHVjdHMvcHJvZHVjdDkuanBnXCIsXG4gICAgICAgIHR5cGU6IFwiZHJ1Z3NcIlxuICAgIH1cbl0iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuXG5pbXBvcnQgeyBcbiAgICBBRERfVE9fQ0FSVCxcbiAgICBSRU1PVkVfSVRFTSxcbiAgICBTVUJfUVVBTlRJVFksXG4gICAgQUREX1FVQU5USVRZLCBcbiAgICBBRERfU0hJUFBJTkcsXG4gICAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxuICAgIFJFU0VUX0NBUlQsXG4gICAgQ09MTEFQU0VEX1NUQVRFLFxuICAgIFNJREVCQVJfTU9EQUxfU1RBVEUsXG59IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2FjdGlvbi1uYW1lcydcbmltcG9ydCB7IHByb2R1Y3RzRGF0YSB9IGZyb20gJy4uL2RhdGEvcHJvZHVjdHMnXG5sZXQgc3RvcmVcblxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzRGF0YSxcbiAgICBhZGRlZEl0ZW1zOiBbXSxcbiAgICB0b3RhbDogMCxcbiAgICBzaGlwcGluZzogMCxcbiAgICBjb2xsYXBzZWRTdGF0ZTogdHJ1ZSxcbiAgICBzaWRlYmFyTW9kYWxTdGF0ZTogZmFsc2UsXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9UT19DQVJUKXtcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKXtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2UgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSAxO1xuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUil7XG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2UgKiBhY3Rpb24ucXR5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlICogYWN0aW9uLnF0eVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVNT1ZFX0lURU0pe1xuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxuICAgICAgICBcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLnByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFkpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2VcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gU1VCX1FVQU5USVRZKXsgIFxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcbiAgICAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXG4gICAgICAgIGlmKGFkZGVkSXRlbS5xdWFudGl0eSA9PT0gMSl7XG4gICAgICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbT0+aXRlbS5pZCAhPT0gYWN0aW9uLmlkKVxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ucHJpY2VcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5IC09IDFcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLnByaWNlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9TSElQUElORyl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSA2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gJ1NVQl9TSElQUElORycpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gNlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFJFU0VUX0NBUlQpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgc2hpcHBpbmc6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBDT0xMQVBTRURfU1RBVEUpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBjb2xsYXBzZWRTdGF0ZTogIXN0YXRlLmNvbGxhcHNlZFN0YXRlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFNJREVCQVJfTU9EQUxfU1RBVEUpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzaWRlYmFyTW9kYWxTdGF0ZTogIXN0YXRlLnNpZGViYXJNb2RhbFN0YXRlLFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmNvbnN0IGluaXRTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICAgICAgcmVkdWNlcixcbiAgICAgICAgcHJlbG9hZGVkU3RhdGUsXG4gICAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXG4gICAgKVxufVxuICBcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcbiAgICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxuICBcbiAgICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcbiAgICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICAgIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xuICAgICAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxuICAgICAgICB9KVxuICAgICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxuICAgICAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICAgIH1cbiAgXG4gICAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcbiAgICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxuICAgIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG4gIFxuICAgIHJldHVybiBfc3RvcmVcbn1cbiAgXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcbiAgICByZXR1cm4gc3RvcmVcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=