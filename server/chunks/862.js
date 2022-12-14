"use strict";
exports.id = 862;
exports.ids = [862];
exports.modules = {

/***/ 7862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_wrappers_DoctorHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7537);
/* harmony import */ var _assets_image_redCloseBtn_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8158);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_appContext__WEBPACK_IMPORTED_MODULE_6__]);
_context_appContext__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const data = [{
  patientName: "2435346",
  callDuration: "sanjay"
}, {
  patientName: "3452345",
  callDuration: "john"
}, {
  patientName: "3452345",
  callDuration: "john"
}, {
  patientName: "3452345",
  callDuration: "john"
}, {
  patientName: "3452345",
  callDuration: "john"
}, {
  patientName: "3452345",
  callDuration: "john"
}, {
  patientName: "3452345",
  callDuration: "john"
}, {
  patientName: "3452345",
  callDuration: "john"
}, {
  patientName: "3452345",
  callDuration: "john"
}];







const EachPatientDetails = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    details
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_6__/* .useAppcontext */ .fE)();

  const redirectToHealthRecords = id => {
    router.push(`/healthRecords?${id}`);
  };

  if (!details) {
    return;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_assets_wrappers_DoctorHome__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("table", {
      className: "doctor-heading",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("thead", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
            children: "Patient Id"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
            children: "Patient Name"
          })]
        }), details.map(item => {
          const {
            p_id,
            first_name,
            last_name
          } = item;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
            onClick: () => redirectToHealthRecords(p_id),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
              children: p_id
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
              children: [" ", first_name + last_name, " "]
            })]
          });
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EachPatientDetails);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;