"use strict";
exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 8933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LoggedInHome__Wrappers",
  componentId: "sc-zc3i6r-0"
})([".container{display:flex;justify-content:space-between;margin-left:3rem;}@media (max-width:480px){.container{display:flex;flex-wrap:wrap;justify-content:center;}.sidebar{display:none;}}.sidebar{}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 2078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ManageProfile__Wrappers",
  componentId: "sc-47qkfc-0"
})([".right-icon{display:none;}.container{box-shadow:0px 0px 15px rgba(0,0,0,0.161);min-width:700px;border-radius:1rem;padding:1rem 3rem;display:flex;flex-direction:column;margin-top:1rem;margin-right:5rem;margin-left:3rem;}.name{color:var(--primary-700);}.name::after{content:\"\";display:flex;width:100%;height:1px;background-color:var(--line-color-gray);margin-top:1rem;}.subtitle{display:flex;align-items:center;justify-content:space-between;}@media (max-width:480px){.container{min-width:350px;margin-right:1rem;margin-left:-2rem;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 9981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Sidebar__Wrappers",
  componentId: "sc-17rdb68-0"
})([".container{background-color:white;max-width:450px;}li{list-style-type:none;}.item{display:flex;justify-content:space-between;align-items:center;box-shadow:0px 0px 15px rgba(0,0,0,0.161);border-radius:1rem;padding:1rem;}.item:active{border-left:2px solid var(--primary-700);border-right:2px solid var(--primary-700);border-top:1px solid var(--primary-700);border-bottom:1px solid var(--primary-700);}.text{cursor:pointer;margin-left:2rem;width:20rem;}.disable{pointer-events:none;background-color:#f2f2f2;}#activeHealthRecords{background-color:white;}@media (max-width:480px){.container{margin:0 auto;}.item{width:350px;margin-left:-2.5rem;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 1577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_wrappers_LoggedInHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8933);
/* harmony import */ var _ManageProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2281);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5128);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ManageProfile__WEBPACK_IMPORTED_MODULE_2__, _Sidebar__WEBPACK_IMPORTED_MODULE_3__]);
([_ManageProfile__WEBPACK_IMPORTED_MODULE_2__, _Sidebar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const LoggedInHome = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_assets_wrappers_LoggedInHome__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "sidebar",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "rightside",
        children: children
      })]
    })
  });
};

LoggedInHome.Layout = _ManageProfile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoggedInHome);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_wrappers_ManageProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2078);
/* harmony import */ var _assets_image_rightArrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9322);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7647);
/* harmony import */ var _utils_dateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1085);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_appContext__WEBPACK_IMPORTED_MODULE_4__]);
_context_appContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










let patientId;

if (false) {}

const ManageProfile = () => {
  const {
    firstName,
    lastName,
    sex,
    phoneNumber,
    dob
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_4__/* .useAppcontext */ .fE)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_assets_wrappers_ManageProfile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "right-icon",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _assets_image_rightArrow_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        width: "40px",
        height: "40px"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h2", {
        className: "name",
        children: [" ", firstName, " ", lastName, " "]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "subtitle",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          children: [sex, ": | ", phoneNumber]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          children: ["DOB: ", (0,_utils_dateFormat__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(dob)]
        })]
      })]
    })]
  });
};

ManageProfile.Layout = ManageProfile;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageProfile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_RightCheveron)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./assets/image/rightCheveron.svg
/* harmony default export */ const rightCheveron = ({"src":"/_next/static/media/rightCheveron.04ef6e43.svg","height":26,"width":16});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/RightCheveron.js





const RightCheveron = () => {
  return /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
    src: rightCheveron
  });
};

/* harmony default export */ const components_RightCheveron = (RightCheveron);

/***/ }),

/***/ 5128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_wrappers_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9981);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_RightCheveron_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1539);
/* harmony import */ var _assets_image_profile_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3463);
/* harmony import */ var _assets_image_rupees_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5055);
/* harmony import */ var _assets_image_address_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3379);
/* harmony import */ var _assets_image_notification_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5829);
/* harmony import */ var _assets_image_needHelp_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9653);
/* harmony import */ var _components_ManageProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2281);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8927);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ManageProfile__WEBPACK_IMPORTED_MODULE_10__, _context_appContext__WEBPACK_IMPORTED_MODULE_13__]);
([_components_ManageProfile__WEBPACK_IMPORTED_MODULE_10__, _context_appContext__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function Sidebar() {
  const {
    subscriptionPlanCount
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_13__/* .useAppcontext */ .fE)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
  const queryId = router.asPath.split("?")[1];
  let doctorId;

  if (false) {}

  let patientId;

  if (false) {}

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {// getSubscription("subscription", { api_key: "get", p_id: patientId });
  }, []);

  const logoutUser = () => {
    localStorage.clear();
    router.reload(window.location.pathnames);
  };

  console.log(patientId);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_assets_wrappers_Sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("li", {
        children: [doctorId =  true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ul", {
          className: `item ${subscriptionPlanCount ? "" : "disable"} `,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _assets_image_profile_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "text",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              route: "/managedProfile",
              children: "Managed Profile"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "rightCheveron",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_RightCheveron_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
          })]
        }) : /*#__PURE__*/0, doctorId =  true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ul", {
          className: `item ${subscriptionPlanCount ? "" : "disable"}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _assets_image_rupees_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/payments",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("a", {
              className: "text",
              href: "",
              children: "My Payments"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "rightCheveron",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_RightCheveron_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
          })]
        }) : /*#__PURE__*/0, doctorId =  true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ul", {
          className: `item ${subscriptionPlanCount ? "" : "disable activeHealthRecords"}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _assets_image_profile_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/healthRecords",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("a", {
              className: "text",
              href: "",
              children: "Health Records"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "rightCheveron",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_RightCheveron_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
          })]
        }) : /*#__PURE__*/0, doctorId =  true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ul", {
          className: `item ${subscriptionPlanCount ? "" : "disable"}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _assets_image_profile_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/membership",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("a", {
              className: "text",
              href: "",
              children: "Subscription"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "rightCheveron",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_RightCheveron_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
          })]
        }) : /*#__PURE__*/0, doctorId =  true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ul", {
          className: `item  ${subscriptionPlanCount ? "" : "disable"}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _assets_image_address_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/addressBook",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("a", {
              className: "text",
              href: "",
              children: "Address Book"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "rightCheveron",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_RightCheveron_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
          })]
        }) : /*#__PURE__*/0, doctorId =  true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ul", {
          className: `item ${subscriptionPlanCount ? "" : "disable"}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _assets_image_needHelp_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/needHelp",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("a", {
              className: "text",
              href: "",
              children: "Need Help"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "rightCheveron",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_RightCheveron_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
          })]
        }) : /*#__PURE__*/0, doctorId =  true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ul", {
          className: `item ${subscriptionPlanCount ? "" : "disable"}
            `,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _assets_image_notification_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/notification",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("a", {
              className: "text",
              href: "",
              children: "Notification Preference"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "rightCheveron",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_RightCheveron_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
          })]
        }) : /*#__PURE__*/0, doctorId =  true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ul", {
          className: `item`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _assets_image_notification_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "",
            onClick: () => {
              logoutUser();
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("p", {
              className: "text",
              children: "Logout"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
            className: "rightCheveron",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_RightCheveron_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
          })]
        }) : /*#__PURE__*/0]
      })
    })
  });
} // Sidebar.Layout = ManageProfile;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);


const formatDate = date => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("Do MMM YY"); // return IsoDateTo;
  // const IsoDateTo = moment("2105-03-04").format("YYYY-MM-DD[T]HH:mm:ss");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);

/***/ }),

/***/ 3379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/address.2effcb5e.svg","height":47,"width":35});

/***/ }),

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/needHelp.aa860bc5.svg","height":39,"width":40});

/***/ }),

/***/ 5829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/notification.69eb33d0.svg","height":42,"width":43});

/***/ }),

/***/ 3463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/profile.c5571fed.svg","height":40,"width":40});

/***/ }),

/***/ 5055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/rupees.ccbcdad8.svg","height":40,"width":39});

/***/ })

};
;