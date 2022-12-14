"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 3558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Popup)
});

// UNUSED EXPORTS: Popup

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./assets/wrappers/Popup.js

const wrappers = external_styled_components_default().div.withConfig({
  displayName: "Popup__wrappers",
  componentId: "sc-1yots40-0"
})(["position:fixed;top:30%;left:0;background-color:rgba(0,0,0,0.7);left:30%;z-index:100;background-color:gray;display:flex;align-content:center;justify-content:center;width:fit-content;padding:8rem;.input-container{display:flex;flex-direction:column;}.submit-btn{}"]);
/* harmony default export */ const Popup = (wrappers);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Popup.js




const Popup_Popup = ({
  onSubmit
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Popup, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      action: "",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "input-container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "",
          children: "Name"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "input-container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: "",
          children: "Email Address"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "btn submit-buttom",
        children: "Submit"
      })]
    })
  });
};
/* harmony default export */ const components_Popup = (Popup_Popup);

/***/ })

};
;