"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Navbar__Wrappers",
  componentId: "sc-18218t8-0"
})(["z-index:200;.right-icon{display:none;}.navbar-container{display:flex;align-items:center;justify-content:space-around;margin-left:-2rem;}a{text-decoration:none;}li{list-style:none;}.first-item{}@media (max-width:480px){.hamburger-menu div{background:black;width:50px;height:5px;margin-top:0.5rem;}.hamburger-menu{cursor:pointer;position:absolute;right:2rem;top:3rem;}.right-icon{display:block;position:absolute;top:3.5rem;left:2rem;}}.second-item > li{margin-left:-8rem;display:flex;align-items:center;justify-content:space-evenly;}.third-item{}.btn-primary{background-color:var(--primary-700);padding:0.75rem 2.5rem;border-radius:1.5rem;text-decoration:none;border:none;color:white;}@media (max-width:800px){.second-item{display:none;}.third-item{display:none;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 3148:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var _OtpPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5406);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5452);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_7__, _OtpPage__WEBPACK_IMPORTED_MODULE_8__, _context_appContext__WEBPACK_IMPORTED_MODULE_10__]);
([axios__WEBPACK_IMPORTED_MODULE_7__, _OtpPage__WEBPACK_IMPORTED_MODULE_8__, _context_appContext__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const DoctorLogin = ({
  setModal
}) => {
  const {
    otpLogin
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_10__/* .useAppcontext */ .fE)();
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
    otpLogin("doctor", {
      api_key: "send_otp",
      ph_num: loginData.mobileNumber,
      referal_id: loginData.referalId
    });
    setNextPage(true);
  };

  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_assets_wrappers_Login__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    children: !nextPage ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
      className: "overlay",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("h1", {
          className: "name",
          children: "Hi"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          className: "close-btn",
          onClick: () => setModal(false),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
            src: _assets_image_closeBtn_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("h3", {
          children: "Please enter your mobile number to login"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
          action: "",
          typeof: "submit",
          onSubmit: e => handleSubmit(e),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "enter-btn",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("input", {
              className: "number",
              type: "text",
              required: "required",
              placeholder: "+91",
              name: "mobileNumber",
              value: loginData.mobileNumber,
              onChange: e => handleChange(e)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("button", {
              className: "btn",
              type: "submit",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                src: _assets_image_loginBtn_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("p", {
            className: "subtitle",
            children: "OTP will be sent to this number by SMS And Whatsapp"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "signup",
            children: [loginData.agree === "agreed" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("input", {
              type: "checkbox",
              name: "agree",
              id: "",
              required: true,
              checked: true,
              value: "",
              onChange: e => handleChange(e)
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("input", {
              type: "checkbox",
              name: "agree",
              id: "",
              required: true,
              value: "agreed",
              onChange: e => handleChange(e)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("p", {
              children: "By signing up, I agree to the"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("h4", {
          children: "Privacy Policy, Terms and conditions of Dr. Wealthify"
        })]
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_OtpPage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      otpValue: resData.otp,
      loginInformation: resData.data,
      setNextPage: setNextPage,
      setModal: setModal,
      mobileNumber: loginData.mobileNumber
    })
  }), document.getElementById("modal-root"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoctorLogin);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./assets/image/footerLogo.svg
/* harmony default export */ const footerLogo = ({"src":"/_next/static/media/footerLogo.333c8603.svg","height":198,"width":151});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./assets/wrappers/Footer.js

const Wrappers = external_styled_components_default().div.withConfig({
  displayName: "Footer__Wrappers",
  componentId: "sc-sxqoqp-0"
})(["@import url(\"https://fonts.googleapis.com/css2?family=poppins&display=swap\");margin-top:4rem;*{padding:0;box-sizing:border-box;}.quick{margin-top:-1rem;}.location2{margin-top:-0.5rem;}.container{max-width:1870px;height:366px;background-color:#404040;}.row{display:flex;flex-direction:row;justify-content:center;}ul{list-style:none;}.footer{padding:0;height:350px;max-width:100%;}.footerLogo{margin:10px;}.footer-col{display:flex;flex-direction:column;align-items:center;justify-content:center;width:25%;padding:0 15px;}.footer-col-div{margin-top:-3.5rem;}.location{margin-top:-2.2rem;}.contact-us{margin-top:-3.6rem;}.footer-col span{font-size:30px;color:#ffffff;text-transform:capitalize;margin-bottom:30px;font-weight:300;position:relative;width:150px;height:40px;line-height:3;padding-left:30px;}.footer-col-div ul{padding:0 0 0 10px;}.quicklinks{padding:0 0 0 30px;flex-wrap:wrap;align-items:stretch;}.footer-col ul ul:not(:last-child){margin-bottom:10px;}.footer-col ul a{font-size:16px;text-transform:capitalize;text-decoration:none;font-weight:200;color:#ffffff;display:block;}.footer-col ul ul{color:white;}.footer-col2 ul{flex-direction:column;background-color:red;}.rectangle{height:303px;width:3px;margin-top:2rem;background-color:#707070;border-radius:3px;}.a{color:revert;}#follow{padding:20 20 0 0;margin:10 10 0 10;font-size:22px;color:#ffffff;}.socialLinks{margin-top:1rem;}.socialLinks a{margin-right:0.5rem;}.quick-links{color:white;font-size:2rem;}.socialLinks a i{border-radius:60%;border:4px solid white;width:43px;height:43;color:white;padding:20 7 20;justify-content:space-between;margin:0 0 0 3;}.socialLinks a:link{color:black;}.weight{font-weight:600;}.common{display:flex;flex-direction:row;margin-top:0rem;justify-content:center;}.quicklinks2{justify-content:space-around;margin-left:47px;}.cc{background-color:#1e1e1e;max-width:1870px;height:72px;}.cc-content{color:#ffffff;margin-top:0px;margin-bottom:0px;padding-top:16px;text-align:center;}@media all and (max-width:500px){*{box-sizing:initial;}.container{background-color:#404040;max-width:435px;height:auto;}.footer-col{width:auto;height:auto;}.footer-col span{padding:0 0 0 0;justify-content:center;text-align:center;font-size:24px;padding-left:5em;}.quicklinks{justify-content:center;padding-left:0%;margin:0% 0%;font-size:20px;margin-top:10px;}.quicklinks2{justify-content:center;padding-left:inherit;font-size:20px;margin-left:0%;}.footer-col-div ul{justify-content:center;font-size:20px;padding-left:2em;}.footerLogo{display:none;}.footer-rec{position:relative;padding:0 0 0 0;justify-content:space-evenly;}.none{display:none;}.rectangle{justify-self:center;height:3.43px;width:90%;margin-left:25px;background-color:#707070;border-radius:3px;}#follow{display:none;}.socialLinks{display:none;}.row{flex-direction:column;flex-wrap:wrap;}.common{display:block;flex-direction:column;justify-content:center;}.location{margin-top:0rem;}.contact-us{margin-top:-1rem;}.cc{max-width:100%;max-height:fit-content;display:100%;}.cc-content{text-align:center;position:relative;padding-top:25px;}}"]);
/* harmony default export */ const Footer = (Wrappers);
;// CONCATENATED MODULE: ./assets/image/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.e9129bec.svg","height":44,"width":44});
;// CONCATENATED MODULE: ./assets/image/twitter.svg
/* harmony default export */ const twitter = ({"src":"/_next/static/media/twitter.3214bada.svg","height":44,"width":44});
;// CONCATENATED MODULE: ./assets/image/instagram.svg
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.8118ff9e.svg","height":44,"width":44});
;// CONCATENATED MODULE: ./assets/image/youtube.png
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.4caaf835.png","height":43,"width":43,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42jXMyw0BAQBF0bdmpwMkowCfSgg1YlbzUQRFTEQsFHFiJsPu3Zu8m8Ra5aLU2GZAtWWGNdf2SqUwcXQys1LHOfHw0nlmINfE3cdbN4pGYWrv8L/s3H7RhdYm6ZVGqRzxC2sjTLTCa3pnAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer.js











const Footer_Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Footer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      className: "footer",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "footer-col",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "footerLogo",
              children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                src: footerLogo
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              id: "follow",
              children: "Follow Us"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "socialLinks",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                  src: facebook
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                  src: twitter
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                  src: instagram
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                  src: youtube
                })
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "footer-rec",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "none rectangle"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "footer-col quick",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "quick-links",
              children: "Quick links"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "common",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "quicklinks",
                children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Home"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "About Us"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Plan's"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "quicklinks2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Enroll Us"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Blog"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "FAQ"
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "footer-rec",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "rectangle"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "footer-col",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "footer-col-div contact-us",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Contact Us"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: ["Email: dr.wealthify@gmail.com", /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: ["Phone: +91 6383 6465 41", /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#"
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "footer-rec",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "rectangle"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "footer-col location2",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "footer-col-div location",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Location"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
                  className: "weight",
                  children: "HeadQuaters Address"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: ["637/2 Vallalar Nagar, Pachal,", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Tiruppatur District."]
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "cc",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "cc-content",
          children: "\xA9 2022 \xA0 | \xA0 Privacy Policy \xA0 | \xA0 Terms of Service"
        })
      })]
    })
  });
};

/* harmony default export */ const components_Footer = (Footer_Footer);

/***/ }),

/***/ 6734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MobileSidebar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./assets/wrappers/MobileSidbar.js

const Wrappers = external_styled_components_default().div.withConfig({
  displayName: "MobileSidbar__Wrappers",
  componentId: "sc-1f7iuiz-0"
})(["position:fixed;z-index:101;.container{position:relative;background-color:white;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;}.close-btn{position:absolute;top:2rem;right:2rem;}ul{}li{margin-bottom:2rem;text-align:center;}"]);
/* harmony default export */ const MobileSidbar = (Wrappers);
// EXTERNAL MODULE: ./assets/image/redCloseBtn.svg
var redCloseBtn = __webpack_require__(8158);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/NavLink.js
var NavLink = __webpack_require__(5867);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/MobileSidebar.js








const MobileSidebar = ({
  setMobileSidebar
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(MobileSidbar, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "close-btn",
        onClick: () => setMobileSidebar(false),
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: redCloseBtn/* default */.Z
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        onClick: () => {
          setMobileSidebar(false);
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          name: "Managed Profile",
          url: "/"
        }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          name: "My Payment",
          url: "/payments"
        }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          name: "Health Record",
          url: "/healthRecords"
        }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          name: "Subscription",
          url: "/membership"
        }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          name: "Address Book",
          url: "/addressBook"
        }), /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          name: "Notification",
          url: "/notification"
        })]
      })]
    })
  });
};

/* harmony default export */ const components_MobileSidebar = (MobileSidebar);

/***/ }),

/***/ 8578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_WealthifyLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2011);
/* harmony import */ var _assets_wrappers_Navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8228);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4844);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8927);
/* harmony import */ var _MobileNavbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8860);
/* harmony import */ var _MobileSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6734);
/* harmony import */ var _assets_image_rightArrow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9322);
/* harmony import */ var _DoctorLogin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3148);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Login__WEBPACK_IMPORTED_MODULE_5__, _DoctorLogin__WEBPACK_IMPORTED_MODULE_11__]);
([_Login__WEBPACK_IMPORTED_MODULE_5__, _DoctorLogin__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Navbar = () => {
  let loggedIn;

  if (false) {}

  const {
    0: modal,
    1: setModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: menu,
    1: setMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: singleDoctor,
    1: setSingleDoctor
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: menubar,
    1: setMenubar
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: mobileSidebar,
    1: setMobileSidebar
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: openDoctor,
    1: setOpenDoctor
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  let p_id;

  if (false) {}

  const effectRan = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (effectRan.current === false) {
      console.log({
        navBar: "1"
      });
      return () => {
        console.log("unmounted");
        effectRan.current = true;
      };
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_assets_wrappers_Navbar_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    children: [mobileSidebar ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_MobileSidebar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      setMobileSidebar: setMobileSidebar
    }) : null, menubar ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_MobileNavbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      setMenubar: setMenubar
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "navbar-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "first-item",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          className: "logo",
          src: _assets_image_WealthifyLogo_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
          width: "200px",
          height: "200px"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          onClick: () => setMenubar(true),
          className: "hamburger-menu",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {})]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: "right-icon",
        onClick: () => setMobileSidebar(true),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: _assets_image_rightArrow_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
          width: "40px",
          height: "40px"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: "second-item",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("ul", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("ul", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              route: p_id === null ? "homeLoggedOut" : "/",
              children: "Home"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("ul", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              route: "/aboutus",
              children: "About us"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("ul", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              route: "/plans",
              children: "Plans"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("ul", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              route: "/recipe",
              children: "Recipe"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("ul", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              route: "/nutrition",
              children: "Nutrition DataBase"
            })
          }), loggedIn === "true" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("ul", {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("ul", {
            onClick: () => setModal(!modal),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("a", {
                href: "",
                children: " Login"
              })
            })
          })]
        })
      })]
    }), modal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Login__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      setModal: setModal,
      url: "portal"
    }), openDoctor && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_DoctorLogin__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      setModal: setOpenDoctor,
      url: "doctor"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8578);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1765);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4844);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7647);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar_js__WEBPACK_IMPORTED_MODULE_0__, _components_Login__WEBPACK_IMPORTED_MODULE_2__, _context_appContext__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Navbar_js__WEBPACK_IMPORTED_MODULE_0__, _components_Login__WEBPACK_IMPORTED_MODULE_2__, _context_appContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  const Layout = Component.Layout || HomeLayout;
  let loggedIn;

  if (false) {}

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (loggedIn === "true") {//router.push("/");
    } else {
      router.push("/homeLoggedOut");
    }
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_context_appContext__WEBPACK_IMPORTED_MODULE_3__/* .AppProvider */ .wI, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Navbar_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Layout, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Component, _objectSpread({}, pageProps))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})]
    })
  });
}

const HomeLayout = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/WealthifyLogo.5c0cbd99.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtElEQVR42mOAgwn2TCDq/38WZoY+MBsBAhbYgAXil9qINmyxTAKxwxbZMIMl27ZbgBkd2y0cO3ZYbMtaZb23cYulLUgMqJiZIWuFFSuIA5QoL11v9bB9h8WN9JU2JSCx7JVAuZ2PnRlBnNr1Zg59u8xmZ66wmlu8ytwVJDb/HNQtQiWaki616tYGBcqWViXKFo41ai58JVpiKA6t7ZDhLO1Q4K/qV+Ytq5PgRJEUKNZgZMABAKGtNF8lJVWgAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/redCloseBtn.c7507455.svg","height":51,"width":51});

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 5452:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,647,208,406,844,860], () => (__webpack_exec__(2551)));
module.exports = __webpack_exports__;

})();