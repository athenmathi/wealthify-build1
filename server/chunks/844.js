"use strict";
exports.id = 844;
exports.ids = [844];
exports.modules = {

/***/ 6850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Login__Wrappers",
  componentId: "sc-nd34rk-0"
})(["position:fixed;top:0;left:0;bottom:0;right:0;width:100%;display:flex;justify-content:center;align-items:center;background:center;background-color:rgba(0,0,0,0.7);input{outline:none;}.container{position:relative;background-color:white;box-shadow:0px 0px 15px rgba(0,0,0,0.161);border-radius:2rem;width:300px;height:100%;padding:1rem;z-index:100;margin:0 auto;}.name{color:var(--primary-700);}.number{border:none;border-bottom:1px solid black;}.referal{position:relative;height:4rem;}.referal label{position:absolute;top:1rem;}.referal input{position:absolute;top:3rem;}h4{margin-top:-0.5rem;}.close-btn{position:absolute;right:1rem;top:1rem;cursor:pointer;}.signup{display:flex;}.enter-btn{display:flex;justify-content:space-between;align-items:center;}.login-btn{margin-right:2rem;cursor:pointer;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 4844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_wrappers_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6850);
/* harmony import */ var _assets_image_closeBtn_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2466);
/* harmony import */ var _assets_image_loginBtn_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1164);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var _OtpPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5406);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5452);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_6__, _OtpPage__WEBPACK_IMPORTED_MODULE_7__, _context_appContext__WEBPACK_IMPORTED_MODULE_9__]);
([axios__WEBPACK_IMPORTED_MODULE_6__, _OtpPage__WEBPACK_IMPORTED_MODULE_7__, _context_appContext__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const Login = ({
  setModal
}) => {
  const {
    otpLogin,
    p_id,
    doctorId
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_9__/* .useAppcontext */ .fE)();
  console.log(p_id, doctorId);
  const {
    0: resData,
    1: setResData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: nextPage,
    1: setNextPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const loginInfo = {
    mobileNumber: "",
    referalId: "",
    agree: ""
  };
  const {
    0: loginData,
    1: setLoginData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(loginInfo);

  const updateFeilds = feilds => {
    setLoginData(prev => {
      return _objectSpread(_objectSpread({}, prev), feilds);
    });
  };

  const handleChange = e => {
    updateFeilds({
      [e.target.name]: e.target.value
    });
    console.log({
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    otpLogin("portal", {
      api_key: "send_otp",
      ph_num: loginData.mobileNumber,
      referal_id: loginData.referalId
    });
    setNextPage(true);
  };

  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_assets_wrappers_Login__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    children: !nextPage ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: "overlay",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h1", {
          className: "name",
          children: "Hi"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
          className: "close-btn",
          onClick: () => setModal(false),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
            src: _assets_image_closeBtn_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h3", {
          children: "Please enter your mobile number to login"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
          action: "",
          typeof: "submit",
          onSubmit: e => handleSubmit(e),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "enter-btn",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", {
              className: "number",
              type: "text",
              required: "required",
              placeholder: "+91",
              name: "mobileNumber",
              value: loginData.mobileNumber // value={""}
              ,
              onChange: e => handleChange(e)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("button", {
              className: "btn",
              type: "submit",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                src: _assets_image_loginBtn_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "referal",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
              htmlFor: "",
              children: "Referal Id"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", {
              type: "text",
              className: "number",
              name: "referalId",
              value: loginData.referalId,
              onChange: e => handleChange(e)
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
            className: "subtitle",
            children: "OTP will be sent to this number by SMS And Whatsapp"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "signup",
            children: [loginData.agree === "agreed" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", {
              type: "checkbox",
              name: "agree",
              id: "",
              required: true,
              checked: true,
              value: "",
              onChange: e => handleChange(e)
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", {
              type: "checkbox",
              name: "agree",
              id: "",
              required: true,
              value: "agreed",
              onChange: e => handleChange(e)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
              children: "By signing up, I agree to the"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h4", {
          children: "Privacy Policy, Terms and conditions of Dr. Wealthify"
        })]
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_OtpPage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      otpValue: resData.otp,
      loginInformation: resData.data,
      setNextPage: setNextPage,
      setModal: setModal,
      mobileNumber: loginData.mobileNumber
    })
  }), document.getElementById("modal-root"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/closeBtn.ff44d065.svg","height":26,"width":27});

/***/ })

};
;