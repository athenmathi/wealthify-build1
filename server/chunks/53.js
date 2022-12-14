"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 6053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_wrappers_DoctorHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7537);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7647);
/* harmony import */ var _EachDoctorDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4170);
/* harmony import */ var _OpenCalender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8855);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_appContext__WEBPACK_IMPORTED_MODULE_4__, _EachDoctorDetails__WEBPACK_IMPORTED_MODULE_5__]);
([_context_appContext__WEBPACK_IMPORTED_MODULE_4__, _EachDoctorDetails__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const data = [{
  id: 23034534,
  workingHours: "8hrs",
  name: "john"
}, {
  id: 23034534,
  workingHours: "8hrs",
  name: "john"
}, {
  id: 23034534,
  workingHours: "8hrs",
  name: "john"
}, {
  id: 23034534,
  workingHours: "8hrs",
  name: "john"
}, {
  id: 23034534,
  workingHours: "8hrs",
  name: "john"
}, {
  id: 23034534,
  workingHours: "8hrs",
  name: "john"
}, {
  id: 23034534,
  workingHours: "8hrs",
  name: "john"
}];

const DoctorHome = () => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: openCalender,
    1: setOpenCalender
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    adminDetails,
    details
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_4__/* .useAppcontext */ .fE)();

  if (!adminDetails) {
    return;
  }

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  const handleClick = () => {
    router.push("/eachDoctorDetails");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_assets_wrappers_DoctorHome__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    children: [openCalender ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_OpenCalender__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      setOpenCalender: setOpenCalender
    }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "table-container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("table", {
        className: "doctor-heading",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("thead", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
              children: "Doctor Id"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
              children: "Doctor Name"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
              children: "Working Hours"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
              children: "Export"
            })]
          }), adminDetails.map(item => {
            const {
              doc_id,
              doc_name,
              working_hrs
            } = item;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                onClick: () => handleClick(),
                children: doc_id
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
                onClick: () => handleClick(),
                children: [" ", doc_name, " "]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                onClick: () => handleClick(),
                children: working_hrs
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
                  className: "btn",
                  onClick: () => setOpenCalender(true),
                  children: "download"
                })
              })]
            });
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoctorHome);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_wrappers_EachDoctorDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3641);
/* harmony import */ var _assets_image_redCloseBtn_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8158);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const OpenCalender = ({
  setOpenCalender
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_assets_wrappers_EachDoctorDetails__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "close-btn",
        onClick: () => setOpenCalender(false),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: _assets_image_redCloseBtn_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
        className: "heading",
        children: "Please select the date range to download Doctor data"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("form", {
        action: "",
        onSubmit: e => e.preventDefault(),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "input",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
              htmlFor: "",
              children: "From Date"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
              type: "date"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "input",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
              htmlFor: "",
              children: "To Date"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
              type: "date"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
            className: "btn btn1",
            type: "submit",
            children: "Download"
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenCalender);

/***/ })

};
;