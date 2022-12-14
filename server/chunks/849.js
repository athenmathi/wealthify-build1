"use strict";
exports.id = 849;
exports.ids = [849];
exports.modules = {

/***/ 6891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DoctorDashboard__Wrappers",
  componentId: "sc-15qront-0"
})(["margin-top:3rem;.calendar{margin-left:5rem;display:flex;flex-direction:column;justify-content:center;margin:3rem;}.calendar-2{margin-left:2rem;}.patient-list{margin-bottom:3rem;display:flex;align-items:center;}.btn{background-color:var(--primary-700);padding:1rem 2rem;border-radius:1rem;color:white;margin-left:5rem;}.bottom{display:flex;flex-wrap:wrap;}.left{}.card{padding:2rem 3rem;box-shadow:var(--shadow-1);width:fit-content;height:fit-content;margin:3rem 5rem;}p:first-child{font-size:2rem;color:green;position:relative;}p:first-child::after{content:\"\";height:2px;width:100%;position:absolute;bottom:-1rem;left:-20px;background:var(--line-color-gray);}.right{margin:3rem;}.called{background-color:green;}.not-called{color:black;position:relative;}.not-called:before{content:\"\";position:absolute;background:var(--primary-700);height:100px;width:8px;top:6px;left:0;border-radius:1rem;}li{width:50vw;padding:1rem;border-radius:1rem;color:white;margin-bottom:2rem;box-shadow:var(--shadow-1);}li div{font-size:1.4rem;}@media (max-width:900px){li{width:300px;}ul{margin-left:-1.5rem;}}@media (max-width:400px){.calendar-2{margin-left:-2.2rem;}.right{margin:0 auto;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 8162:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5101);
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8434);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_wrappers_DoctorDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6891);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_appContext__WEBPACK_IMPORTED_MODULE_5__]);
_context_appContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const DoctorDashboard = () => {
  const {
    0: value,
    1: onChange
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
  const {
    details
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_5__/* .useAppcontext */ .fE)();

  if (details.length == 0) {
    return;
  }

  const {
    doc_id,
    doc_name,
    phone_number
  } = details[0];
  console.log(details);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_assets_wrappers_DoctorDashboard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "bottom",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            children: [" ", doc_name, " "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            children: [" ", doc_id, " "]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            children: "Chennai"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "calendar",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "patient-list",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/eachPatient",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
                className: "btn",
                children: "Patient List"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "calendar-2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_calendar__WEBPACK_IMPORTED_MODULE_2__.Calendar, {
              onChange: onChange,
              value: value
            })
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            className: "called",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              children: "Call with john"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "Lorem ipsum dolor sit amet."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            className: "not-called",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              children: "Call with john"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "Lorem ipsum dolor sit amet."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            className: "not-called",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              children: "Call with john"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "Lorem ipsum dolor sit amet."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            className: "not-called",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              children: "Call with john"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "Lorem ipsum dolor sit amet."
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoctorDashboard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Loading = ({
  center
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: center ? "loading loading-center" : "loading"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ })

};
;