exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 3641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "EachDoctorDetails__Wrappers",
  componentId: "sc-jsl3my-0"
})(["position:fixed;top:0px;left:0;height:100%;width:100%;background-color:rgba(0,0,0,0.7);z-index:100;.container{top:20%;background-color:white;height:470px;width:70%;margin:0 auto;border-radius:2rem;overflow:auto;position:relative;}.doctor-details{display:flex;flex-wrap:wrap;gap:1rem;width:70%;margin:0 auto;justify-content:space-around;align-items:center;margin-bottom:1rem;}.close-btn{position:absolute;right:1rem;top:1rem;font-size:1rem;padding:0;border:none;background-color:none;}.doctor-heading{border-collapse:collapse;width:max(400px,80%);margin:0 auto;}tr:has(th){position:sticky;top:0;}.doctor-heading th{text-align:center;padding:1rem 0;background-color:#a1c334;}.doctor-heading td{padding:0.75rem 0;text-align:center;}.doctor-heading tr:nth-child(odd){background-color:#c9cbc5;}.btn{background-color:var(--primary-700);padding:0.5rem 2rem;border-radius:2rem;color:white;cursor:pointer;}.calender-selector{position:relative;}.calender-selector label{position:absolute;}@media (max-width:400px){background-color:white;overflow:hidden;.container{border-radius:0;position:absolute;width:100%;top:5%;bottom:0;right:0;left:0;}.table-container{width:350px;overflow:scroll;}table{width:400px;height:300px;overflow:scroll;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 4170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_wrappers_EachDoctorDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3641);
/* harmony import */ var _assets_image_redCloseBtn_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8158);
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5101);
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8434);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7647);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_appContext__WEBPACK_IMPORTED_MODULE_6__]);
_context_appContext__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const data = [{
  patientId: "1212",
  attendedPatient: "john",
  callDuration: "12:45 PM - 1:00PM ,15 mins"
}, {
  patientId: "1232",
  attendedPatient: "john",
  callDuration: "12:45 PM - 1:00PM ,15 mins "
}, {
  patientId: "1232",
  attendedPatient: "john",
  callDuration: "12:45 PM - 1:00PM ,15 mins "
}, {
  patientId: "1232",
  attendedPatient: "john",
  callDuration: "12:45 PM - 1:00PM ,15 mins "
}, {
  patientId: "1232",
  attendedPatient: "john",
  callDuration: "12:45 PM - 1:00PM ,15 mins "
}, {
  patientId: "1232",
  attendedPatient: "john",
  callDuration: "12:45 PM - 1:00PM ,15 mins "
}, {
  patientId: "1232",
  attendedPatient: "john",
  callDuration: "12:45 PM - 1:00PM ,15 mins "
}, {
  patientId: "1232",
  attendedPatient: "john",
  callDuration: "12:45 PM - 1:00PM ,15 mins "
}];

const EachDoctorDetails = ({
  setState
}) => {
  const {
    getArrOfObj,
    getAdminHome,
    details
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_6__/* .useAppcontext */ .fE)();

  if (!details) {
    return;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_assets_wrappers_EachDoctorDetails__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "doctor-details",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "doctor-id",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h4", {
            children: "Doctor Id"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
            children: "34523454"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "doctor-name",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h4", {
            children: "Doctor Name"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
            children: "john"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
          href: "/adminHome",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "close-btn",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
              src: _assets_image_redCloseBtn_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "table-container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("table", {
          className: "doctor-heading",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("thead", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "Patient ID"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "Attended patient"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "Call Duration"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "Prescription"
              })]
            }), details.map(item => {
              const {
                p_id
              } = item;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  children: p_id
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  children: "sd"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("td", {
                  children: [" ", "12:45 PM - 1:00PM ,15 mins ", " "]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
                    className: "btn",
                    children: "View"
                  })
                })]
              });
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EachDoctorDetails);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8434:
/***/ (() => {



/***/ })

};
;