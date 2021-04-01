webpackHotUpdate_N_E("pages/index",{

/***/ "./components/_App/Navbar.js":
/*!***********************************!*\
  !*** ./components/_App/Navbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopHeader */ "./components/_App/TopHeader.js");
var _jsxFileName = "D:\\Manual de Servicio\\ston-react-disinfection-sanitization-services-template\\ston\\components\\_App\\Navbar.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Navbar = function Navbar() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.addedItems;
  });
  var collapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.collapsedState;
  });

  var toggleNavbar = function toggleNavbar() {
    dispatch({
      type: 'COLLAPSED_STATE'
    });
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var elementId = document.getElementById("navbar");
    document.addEventListener("scroll", function () {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });
  var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "header-area fixed-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "navbar",
    className: "navbar-area",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "main-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "logo-size",
    src: "/img/logo.png",
    alt: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }))), __jsx("button", {
    onClick: toggleNavbar,
    className: classTwo,
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "icon-bar top-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  }), __jsx("span", {
    className: "icon-bar middle-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }), __jsx("span", {
    className: "icon-bar bottom-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: classOne,
    id: "navbarSupportedContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("ul", {
    className: "navbar-nav m-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "#",
    activeClassName: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 45
    }
  }, __jsx("a", {
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    className: "nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 49
    }
  }, "Manuales de Servicio ", __jsx("i", {
    className: "bx bx-chevron-down",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 74
    }
  }))), __jsx("ul", {
    className: "dropdown-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 45
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 49
    }
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    activeClassName: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 53
    }
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 57
    }
  }, "Manual de Equipos EMP")))))))))))));
};

_s(Navbar, "HvancxyhFDA+XQtVcNI8TcYyu+o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL05hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicHJvZHVjdHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWRkZWRJdGVtcyIsImNvbGxhcHNlZCIsImNvbGxhcHNlZFN0YXRlIiwidG9nZ2xlTmF2YmFyIiwidHlwZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2Nyb2xsVG8iLCJjbGFzc09uZSIsImNsYXNzVHdvIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsVUFBakI7QUFBQSxHQUFELENBQTVCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLGNBQWpCO0FBQUEsR0FBRCxDQUE3Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCUixZQUFRLENBQUM7QUFDTFMsVUFBSSxFQUFFO0FBREQsS0FBRCxDQUFSO0FBR0gsR0FKRDs7QUFNQUMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ2xCLFFBQUlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWhCO0FBQ0FELFlBQVEsQ0FB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QUFBcUMsYUFBUyxFQUFDLFVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ3lCO0FBQUcsYUFBUyxFQUFDLG9CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEekIsQ0FESixDQURKLEVBT0k7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsbUJBQWUsRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxXQUFPLEVBQUVqQixZQUFaO0FBQTBCLGFBQVMsRUFBQyxVQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLENBREosQ0FESixDQVBKLENBREosQ0FESixDQXJCSixDQURKLENBREosQ0FESixDQUpKLENBREosQ0FESjtBQWlFSCxDQTNGRDs7R0FBTVQsTTtVQUNlRSx1RCxFQUNBRSx1RCxFQUNDQSx1RDs7O0tBSGhCSixNO0FBNkZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNTExMmI1MTMzYjM5YjhlMGFiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vdXRpbHMvQWN0aXZlTGluayc7XG5pbXBvcnQgVG9wSGVhZGVyIGZyb20gJy4vVG9wSGVhZGVyJztcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hZGRlZEl0ZW1zKVxuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29sbGFwc2VkU3RhdGUpXG4gICAgXG4gICAgY29uc3QgdG9nZ2xlTmF2YmFyID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnQ09MTEFQU0VEX1NUQVRFJyxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5hZGQoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0pXG4gXG4gICAgY29uc3QgY2xhc3NPbmUgPSBjb2xsYXBzZWQgPyAnY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlJyA6ICdjb2xsYXBzZSBuYXZiYXItY29sbGFwc2Ugc2hvdyc7XG4gICAgY29uc3QgY2xhc3NUd28gPSBjb2xsYXBzZWQgPyAnbmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHQgY29sbGFwc2VkJyA6ICduYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlci1hcmVhIGZpeGVkLXRvcFwiPlxuICAgICAgICAgICAgICAgIHsvKiBUb3BIZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhci1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlTmF2YmFyfSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28tc2l6ZVwiIHNyYz1cIi9pbWcvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1R3b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhciB0b3AtYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXIgbWlkZGxlLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyIGJvdHRvbS1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc09uZX0gaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbnVhbGVzIGRlIFNlcnZpY2lvIDxpIGNsYXNzTmFtZT0nYnggYngtY2hldnJvbi1kb3duJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlTmF2YmFyfSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk1hbnVhbCBkZSBFcXVpcG9zIEVNUDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRm9yIE1vYmlsZSBEZXZpY2UgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==