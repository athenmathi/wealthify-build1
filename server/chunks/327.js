"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 3327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Plans)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./assets/image/thyroid.svg
/* harmony default export */ const thyroid = ({"src":"/_next/static/media/thyroid.e0916c39.svg","height":203,"width":304});
;// CONCATENATED MODULE: ./assets/image/obesity.svg
/* harmony default export */ const obesity = ({"src":"/_next/static/media/obesity.265f1f63.svg","height":317,"width":375});
;// CONCATENATED MODULE: ./assets/image/pocs.svg
/* harmony default export */ const pocs = ({"src":"/_next/static/media/pocs.4653bd93.svg","height":212,"width":318});
;// CONCATENATED MODULE: ./assets/image/diabetes.jpeg
/* harmony default export */ const diabetes = ({"src":"/_next/static/media/diabetes.e7ed14bb.jpeg","height":190,"width":284,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAKoVf//EABsQAAIDAAMAAAAAAAAAAAAAAAEDAgQRABIx/9oACAEBAAE/AKrGhtruyUwWAxB8iMzBz//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/AAv/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMygf/aAAgBAwEBPwCW+I//2Q==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Card.js





const Wrappers = external_styled_components_default().div.withConfig({
  displayName: "Card__Wrappers",
  componentId: "sc-1i67hsj-0"
})(["width:300px;display:flex;flex-direction:column;justify-content:center;border-radius:1rem;box-shadow:0px 0px 6px rgba(0,0,0,0.161);.img{display:flex;align-items:center;justify-content:center;height:240px;}.name,.subtitle{margin-left:1.5rem;}.subtitle{max-width:280px;}.bottom{height:140px;margin-top:3rem;}.join-btn{width:200px;background-color:var(--primary-700);padding:0.75rem 1.5rem;border-radius:1.5rem;text-decoration:none;border:none;color:white;margin:0 auto;margin-bottom:2rem;margin-top:2rem;}"]);

const Card = ({
  img,
  name,
  subtitle
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrappers, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "img",
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: img
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bottom",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "name",
        children: name
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "subtitle",
        children: subtitle
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "join-btn",
      children: "Join Now"
    })]
  });
};

/* harmony default export */ const components_Card = (Card);
;// CONCATENATED MODULE: ./components/Plans.js

 // images








const Plans_Wrappers = external_styled_components_default().div.withConfig({
  displayName: "Plans__Wrappers",
  componentId: "sc-wtusnd-0"
})(["margin:3rem 0;.cards{display:flex;justify-content:center;gap:2rem;flex-wrap:wrap;}.line-container{display:flex;flex-direction:column;align-items:center;margin-bottom:3rem;}"]);

const Plans = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Plans_Wrappers, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "line-container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "heading",
        children: "Active and Fit Plans"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "green-line"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "cards",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Card, {
        img: thyroid,
        name: "Thyroid",
        subtitle: "Can you control thyroid andweight issue with food?"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Card, {
        img: obesity,
        name: "Obesity",
        subtitle: "Can you lose weight andsubstain it by eating more?"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Card, {
        img: diabetes,
        name: "Diabetes",
        subtitle: "Is it possible to bring diabetesunder control with help of food"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Card, {
        img: pocs,
        name: "Pocs",
        subtitle: "Can my diet managePcos Issues?"
      })]
    })]
  });
};

/* harmony default export */ const components_Plans = (Plans);

/***/ })

};
;