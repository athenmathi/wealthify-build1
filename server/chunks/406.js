"use strict";
exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 4801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "OtpPage__Wrappers",
  componentId: "sc-13kg8o-0"
})(["position:fixed;top:0;left:0;bottom:0;right:0;width:100%;display:flex;justify-content:center;align-items:center;background:center;background-color:rgba(0,0,0,0.7);input{outline:none;}.container{position:relative;background-color:white;box-shadow:0px 0px 15px rgba(0,0,0,0.161);border-radius:2rem;width:300px;height:100%;padding:1rem;padding-bottom:2rem;z-index:100;margin:0 auto;}.name{color:var(--primary-700);}.number{border:none;border-bottom:1px solid black;}.referal{position:relative;height:4rem;}.referal label{position:absolute;top:1rem;}.referal input{position:absolute;top:3rem;}h4{margin-top:-0.5rem;}.close-btn{position:absolute;right:1rem;top:1rem;cursor:pointer;}.signup{display:flex;}.enter-btn{display:flex;justify-content:space-between;align-items:center;}.login-btn{margin-right:2rem;cursor:pointer;}.otp-container{display:flex;justify-content:space-around;}input[type=\"number\"]::-webkit-inner-spin-button{-webkit-appearance:none;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 5406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_wrappers_OtpPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4801);
/* harmony import */ var _assets_image_loginBtn_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1164);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_appContext__WEBPACK_IMPORTED_MODULE_7__]);
_context_appContext__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










let userType;

if (false) {}

const OtpPage = ({
  setModal,
  setNextPage,
  mobileNumber,
  loginInformation
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    otpValue,
    numberExist,
    patientId,
    doctorId,
    phoneNumber
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_7__/* .useAppcontext */ .fE)();
  const {
    0: otp,
    1: setOtp
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const handleChange = e => {
    setOtp(e.target.value);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    userType = localStorage.getItem("user_type");
  });

  const handleSubmit = e => {
    e.preventDefault();
    var decodedString = window.btoa(otp); // if (otpValue === decodedString) {

    if (otpValue) {
      //localStorage.setItem("loggedIn", true);
      if (numberExist === 0) {
        router.push(`/assessment?${phoneNumber}`);
      } else if (userType === "doctor") {
        localStorage.setItem("loggedIn", true); //localStorage.setItem("doctorId", doctorId);

        router.push("/doctorHome");
      } else if (numberExist === 1) {
        localStorage.setItem("loggedIn", true); //localStorage.setItem("doctorId", doctorId);

        router.reload(window.location.pathnames);
      }

      setModal(false);
      console.log("sucess"); // router.reload(window.location.pathnames);
    } else {
      alert("Otp is wrong please try again");
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_assets_wrappers_OtpPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: "overlay",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "top-section",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "left-arrrow",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineArrowLeft, {
              onClick: () => setNextPage(false)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "close-btn",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineClose, {
              onClick: () => setModal(false)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h2", {
            children: "great"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
            children: `Now type in the OTP sent to  ${mobileNumber} for authentication`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "otp-container",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
              className: "text",
              type: "text",
              name: "otp",
              id: "",
              onChange: e => handleChange(e)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
              className: "btn",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                src: _assets_image_loginBtn_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                onClick: e => handleSubmit(e)
              })
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OtpPage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/loginBtn.834895b6.png","height":30,"width":30,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAuklEQVR42mP4////0/cvKje18092kp7qVrm54+mHF0BBBiBlOTucoYNJcpITQ482QzuD1exwoFIGoBIgh6FbW22qZ8XmdoYeTYY2hspNHQy8kx3FJzklri5PXFU27diyFWc2MfQZik1xZuCZ7Cgx2TltTVXG2prZJ1YuPwuUMBKb4gLUBTFKXXuaD8jYblWgUSDG0/cQy9kkJjky9GgxtDMBLQe6iAHoMiAF1Cc4xVl6ihuQAVT6//9/AE0+XRJ/KfBcAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ })

};
;