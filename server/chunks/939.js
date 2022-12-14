"use strict";
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 6102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "MembershipCard__Wrappers",
  componentId: "sc-8rvhtl-0"
})(["position:relative;background-color:white;box-shadow:0px 0px 15px rgba(0,0,0,0.161);border-radius:2rem;width:300px;padding:1rem;padding-bottom:3rem;margin:0 auto;.tag-container{position:absolute;top:-7px;right:2rem;}.price{position:absolute;top:-7px;right:0rem;text-align:center;color:white;font-size:15px;}.container{}ul{margin-top:4rem;}.upgrade-div{margin:0 auto;}.upgrade-btn{position:absolute;bottom:9%;left:10%;color:white;background-color:var(--primary-700);padding:1rem 6rem;border-radius:2rem;display:block;margin:0 auto;}li:first-child{font-weight:500;font-size:1.3rem;}li{margin-bottom:1rem;}ul{margin-left:-1rem;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 3939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_wrappers_MembershipCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6102);
/* harmony import */ var _assets_image_Tag_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9342);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var _utils_request_postRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2080);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__, _utils_request_postRequest__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_4__, _utils_request_postRequest__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









let patientId;

if (false) {}

const MembershipCard = ({
  price,
  planType,
  month,
  calls,
  dietChart,
  planId,
  buttonType
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    patientId = localStorage.getItem("p_id");
  }, []);

  const buyPlans = async () => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(`
     http://doctor.brandimagetech.com/subscription.php`, {
        api_key: "add",
        data: {
          p_id: patientId,
          plan_type: planType,
          plan_id: planId
        }
      }, {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      });

      if (data.status === "success") {
        router.reload(window.location.pathnames);
      }
    } catch (error) {
      console.log({
        error: error.response
      });
    } // postRequest("subscription", {
    //   api_key: "add",
    //   data: { p_id: patientId, plan_type: planType, plan_id: planId },
    // });
    //router.reload(window.location.pathnames);

  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_assets_wrappers_MembershipCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "tag-container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _assets_image_Tag_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
        className: "price",
        children: [price, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("br", {}), "INR"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: month
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: calls
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: dietChart
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "upgrade-div",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
          className: "upgrade-btn  btn",
          onClick: () => {
            buyPlans();
          },
          children: buttonType
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MembershipCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports postRequest, getRequest */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*"
};
const postRequest = async (url, obj) => {
  console.log(obj);

  try {
    const {
      data
    } = await axios.post(`http://doctor.brandimagetech.com/${url}.php`, obj, headers);
  } catch (error) {
    console.log(error);
  }
};
const getRequest = async (url, obj) => {
  try {
    const {
      data
    } = await axios.post(`http://doctor.brandimagetech.com/${url}.php`, obj, headers);
  } catch (error) {
    console.log(error);
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Tag.d677bb92.svg","height":81,"width":76});

/***/ })

};
;