"use strict";
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 8860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MobileNavbar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./assets/wrappers/MobileNavbar.js

const Wrappers = external_styled_components_default().div.withConfig({
  displayName: "MobileNavbar__Wrappers",
  componentId: "sc-ij74fu-0"
})(["position:fixed;z-index:100;.container{position:relative;background-color:white;width:100vw;height:100vh;display:flex;align-items:center;}.close-btn,li{cursor:pointer;}.close-btn::after,.close-btn::before{position:absolute;top:3rem;right:2rem;content:\"\";width:40px;height:2px;background:black;}.close-btn::after{transform:rotate(45deg);}.close-btn::before{transform:rotate(135deg);}ul{width:100%;margin-top:6rem;text-align:center;}li{font-size:1.2rem;margin-bottom:2rem;}li:nth-child(6){text-decoration:underline;}"]);
/* harmony default export */ const MobileNavbar = (Wrappers);
// EXTERNAL MODULE: ./components/NavLink.js
var NavLink = __webpack_require__(5867);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/MobileNavbar.js






const MobileNavbar_MobileNavbar = ({
  setMenubar
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(MobileNavbar, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        onClick: () => setMenubar(false),
        children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          url: "homeLoggedOut",
          name: "Home"
        }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          url: "aboutus",
          name: "About Us"
        }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          url: "plans",
          name: "Plans"
        }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          url: "recipe",
          name: "Recipe"
        }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          url: "nutrition",
          name: "Nutrition"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "Login"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "btn btn-primary",
            children: "Doctor Login"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "close-btn",
        onClick: () => setMenubar(false)
      })]
    })
  });
};

/* harmony default export */ const components_MobileNavbar = (MobileNavbar_MobileNavbar);

/***/ }),

/***/ 5867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const NavLink = ({
  url,
  name
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: url,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
      children: name
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ })

};
;