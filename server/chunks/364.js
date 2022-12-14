"use strict";
exports.id = 364;
exports.ids = [364];
exports.modules = {

/***/ 3684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AssessmentForm1__Wrappers",
  componentId: "sc-seyksj-0"
})([".container{display:flex;justify-content:space-between;}.heading{font-size:3rem;}.form-section{margin-left:4rem;width:50%;}.img-section{}div div{display:flex;flex-direction:column;position:relative;margin-top:0.6rem;}.first-row{display:flex;flex-direction:row;}input,select{padding:1rem;}.two-row{width:40vh;margin-right:2rem;}label{position:absolute;top:-0.6rem;left:1.5rem;background-color:white;}.two-input{display:flex;flex-direction:row;}.input:first-child{padding-right:2rem;}.input{flex-grow:1;}.one-input{width:calc(100% + 2rem);}.three-input{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;justify-content:space-between;flex-wrap:wrap;}.three-input .input{width:100px;}.img-section{background-color:#f9ed69;width:40%;background-image:url(\"./WealthifyLogo.png\");background-repeat:no-repeat;background-position:center;background-size:25rem;}.bottom{padding-bottom:2rem;background-color:var(--gray-light);}.terms-container{padding-top:2rem;}li{width:90%;margin:0 auto;margin-bottom:1rem;}footer{display:flex;align-items:center;position:relative;width:90%;margin:0 auto;margin-top:4rem;margin-bottom:4rem;}.underline{margin:2rem;height:2px;width:max(60%,300px);background-color:black;}.next,.back{display:flex;align-items:center;justify-content:space-between;}.btn-container{display:flex;align-items:center;justify-content:space-between;}.prev-btn{transform:scaleX(-1);}p{margin-left:1rem;}.agree-btn{display:flex;flex-direction:row;}select{background-color:transparent;}@media (max-width:480px){.heading{font-size:2rem;}.container{display:flex;flex-direction:column;}.img-section{}input{width:300px;margin-left:-1.6rem;}input[type=\"checkbox\"]{width:20px;}select{width:300px;margin-left:-1.6rem;}.two-input{display:flex;flex-wrap:wrap;}footer div:first-child::after{width:50px;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 9364:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AssessmentForm1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8214);
/* harmony import */ var _components_AssessmentForm2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2967);
/* harmony import */ var _components_AssessmentForm3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6699);
/* harmony import */ var _components_AssessmentForm4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6974);
/* harmony import */ var _components_AssessmentForm5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9252);
/* harmony import */ var _customHooks_useMultiStepForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5855);
/* harmony import */ var _image_nextBtn_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1838);
/* harmony import */ var _AssessmentForm1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3684);
/* harmony import */ var _utils_assessmentData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2532);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8498);
/* harmony import */ var fontawesome__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(fontawesome__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _components_AssessmentForm1__WEBPACK_IMPORTED_MODULE_4__, _customHooks_useMultiStepForm__WEBPACK_IMPORTED_MODULE_9__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _components_AssessmentForm1__WEBPACK_IMPORTED_MODULE_4__, _customHooks_useMultiStepForm__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















let mobileNumber;

if (false) {}

if (mobileNumber == null) {
  if (false) {}
}

const AssessmentFormContainer = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
  mobileNumber = router.asPath.split("?")[1]; //assessmentData.mobile_num = mobileNumber;

  console.log(mobileNumber, '====mobileNumber');

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(assessmentData);

    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`
     http://doctor.brandimagetech.com/patient.php`, {
        api_key: "add",
        assessmentData: assessmentData
      }, {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      });

      if (data.status === "success") {
        localStorage.setItem("p_id", data.data.p_id);
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("doctorId", data.data.doctor_id); //router.reload(window.location.pathnames);

        router.push("/membership");
      }

      console.log(data.data.p_id);
    } catch (error) {
      console.log({
        error: error.response
      });
    }
  };

  const updateFeilds = feilds => {
    setAssessmentData(prev => {
      return _objectSpread(_objectSpread({}, prev), feilds);
    });
  };

  const {
    0: assessmentData,
    1: setAssessmentData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_assessmentData__WEBPACK_IMPORTED_MODULE_12__/* .initialData */ .Q);
  const {
    steps,
    currentStepIndex,
    back,
    goTo,
    next,
    step
  } = (0,_customHooks_useMultiStepForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)([/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_AssessmentForm1__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, assessmentData), {}, {
    updateFeilds: updateFeilds
  })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_AssessmentForm2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, assessmentData), {}, {
    updateFeilds: updateFeilds
  })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_AssessmentForm3__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, assessmentData), {}, {
    setAssessmentData: setAssessmentData,
    updateFeilds: updateFeilds
  })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_AssessmentForm4__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, assessmentData), {}, {
    assessmentData: assessmentData,
    updateFeilds: updateFeilds
  })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_AssessmentForm5__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, assessmentData), {}, {
    updateFeilds: updateFeilds
  }))]);
  const {
    0: responseData,
    1: setResponseData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});

  const nextPage = e => {
    e.preventDefault();
    next();
    console.log(currentStepIndex);
    window.scrollTo(0, 0);
  };

  const prevPage = e => {
    e.preventDefault();
    back();
    window.scrollTo(0, 0);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("form", {
      action: "",
      children: [step, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_AssessmentForm1__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("footer", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("p", {
            children: "Assessment form "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "prev btn-container",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
              type: "",
              className: "btn prev-btn",
              onClick: e => prevPage(e),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: _image_nextBtn_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("p", {
              children: "Back"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: "underline"
          }), currentStepIndex === 4 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
            type: "submit",
            className: "btn btn-primary",
            onClick: e => handleSubmit(e),
            children: "submit"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "next btn-container",
            onClick: e => nextPage(e),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
              className: "btn  next-btn",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: _image_nextBtn_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("p", {
              children: "next"
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssessmentFormContainer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_wrappers_AssessmentForm1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3684);
/* harmony import */ var _assets_image_nextBtn_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1838);
/* harmony import */ var _customComponents_js_FormRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4186);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_appContext__WEBPACK_IMPORTED_MODULE_7__]);
_context_appContext__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const data = ["Your signature below indicates your permission and willingness to participate in the below assessments, questionnaires and interviews and consider the potential program or recommendations, including interviews, counselling, medical nutrition therapy, personal training sessions and subsequent dietary/nutrition/exercise/health recommendations. All information and data discussed, written, typed, or communicated will be strictly confidential between the patient and the healthcare team.", "You consent receive to SMS, call, What's App, email, electronic or other means of communication from us, our associates or our third-party service providers.", "You agree that the information you provide in the forms, assessments and interviews is accurate and current to the best of your ability. The healthcare team is dedicated to assisting you in achieving your goals; encouraging and motivating you to overcome obstacles; equipping you to make healthy decisions and not giving up on you or your goals.", "You also acknowledge that healthcare team is not solely responsible for your complete healthcare and any changes or concerns in your health must be communicated to healthcare team.", "Your next program/ diet session depends on the progress made in your earlier session and information shared by you (reply to questions asked by your mentor/dietician/Doctor) hence all the diet sessions cannot and shall not be sent to you together.", "Consent is obtained for the non-refund of the cost (Fee).", "You are responsible for securely preserving your login credentials to prevent account misuse. You must not support any religious or political viewpoints or propaganda."]; //let mobileNumber;

if (false) {} //const router = useRouter();
//const mobileNumber = router.asPath.split("?")[1];


const AssessmentForm1 = ({
  refer_id,
  f_name,
  l_name,
  mobile_num,
  email,
  dob,
  agree,
  updateFeilds
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  mobile_num = router.asPath.split("?")[1];
  console.log(mobile_num, 'mobileNumber');
  const {
    setAgree
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_7__/* .useAppcontext */ .fE)();

  const handleInput = e => {
    console.log(e.target.value);
    let name = e.target.name;
    console.log({
      [e.target.name]: e.target.value
    });
    updateFeilds({
      [e.target.name]: e.target.value
    });
    updateFeilds({
      refer_id: localStorage.getItem("referalId")
    });
    updateFeilds({
      mobile_num: mobile_num
    });
  };

  const handleCheckBox = e => {
    let value = e.target.checked ? e.target.value : "";
    console.log({
      [e.target.name]: value
    });
    setAgree(value);
    updateFeilds({
      [e.target.name]: e.target.value
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_assets_wrappers_AssessmentForm1__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("section", {
        className: "form-section",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h1", {
          className: "heading",
          children: "Nutrition Assessment Forms & Questionnaires"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
          children: "Welcome to Wealthify "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "two-input",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: "input",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_customComponents_js_FormRow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                type: "text",
                name: "f_name",
                value: f_name,
                labelText: "First Name",
                handleChange: e => handleInput(e)
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: "input",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_customComponents_js_FormRow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                type: "text",
                name: "l_name",
                value: l_name,
                labelText: "Last Name",
                handleChange: e => handleInput(e)
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "one-input",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: "input",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_customComponents_js_FormRow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                type: "text",
                name: "mobile_num",
                value: mobile_num,
                labelText: "Phone Number",
                handleChange: e => handleInput(e)
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "one-input",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: "input",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_customComponents_js_FormRow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                type: "text",
                name: "email",
                value: email,
                labelText: "Email",
                handleChange: e => handleInput(e)
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "one-input",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: "input",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_customComponents_js_FormRow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                type: "date",
                name: "dob",
                labelText: "DOB",
                handleChange: handleInput
              })
            })
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("section", {
        className: "img-section"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: "bottom",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "terms-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "agree-btn",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
                type: "checkBox",
                name: "agree",
                value: "1",
                onChange: e => {
                  handleCheckBox(e);
                }
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                children: "I agree to terms & condition"
              })]
            })
          }), data.map(item => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
              children: item
            });
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {})]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssessmentForm1);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AssessmentForm2)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./assets/wrappers/AssessmentForm1.js
var AssessmentForm1 = __webpack_require__(3684);
// EXTERNAL MODULE: ./assets/image/nextBtn.svg
var nextBtn = __webpack_require__(1838);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/customComponents.js/FormRow.js
var FormRow = __webpack_require__(4186);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/customComponents.js/FormRowSelect.js



const FormRowSelect = ({
  name,
  value,
  handleChange,
  labelText,
  list,
  disableSelected
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "form-row",
    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: name,
      children: labelText || name
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
      name: name,
      value: value,
      onChange: handleChange,
      className: "form-select",
      children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
        disabled: true,
        children: " Please Select some Values "
      }), list.map((item, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: item,
          children: item
        }, index);
      })]
    })]
  });
};

/* harmony default export */ const customComponents_js_FormRowSelect = (FormRowSelect);
;// CONCATENATED MODULE: ./components/AssessmentForm2.js









const weightRange = () => {
  let arr = [];

  for (let i = 40; i < 120; i++) {
    arr.push(i);
  }

  return arr;
};

const AssessmentForm2 = ({
  todayDate,
  sex,
  age,
  height,
  currentWeight,
  normalWeight,
  pastWeight,
  updateFeilds,
  bloodGroup
}) => {
  const handleInput = e => {
    console.log({
      [e.target.name]: e.target.value
    });
    updateFeilds({
      [e.target.name]: e.target.value
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(AssessmentForm1/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "form-section",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "heading",
          children: "Demographic Data"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Welcome to Wealthify "
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "two-input",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "input",
              children: /*#__PURE__*/jsx_runtime_.jsx(FormRow/* default */.Z, {
                type: "date",
                name: "todayDate",
                value: todayDate,
                labelText: "Today Date",
                handleChange: e => handleInput(e)
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "input",
              children: /*#__PURE__*/jsx_runtime_.jsx(customComponents_js_FormRowSelect, {
                labelText: "Sex",
                type: "text",
                name: "sex",
                value: sex,
                list: ["Male", "Female"],
                handleChange: handleInput
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "one-input",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "input",
              children: /*#__PURE__*/jsx_runtime_.jsx(FormRow/* default */.Z, {
                type: "text",
                name: "age",
                value: age,
                labelText: "Age",
                handleChange: e => handleInput(e)
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "two-input",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "input",
              children: /*#__PURE__*/jsx_runtime_.jsx(FormRow/* default */.Z, {
                type: "text",
                name: "height",
                value: height,
                labelText: "Height",
                handleChange: e => handleInput(e)
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "input",
              children: /*#__PURE__*/jsx_runtime_.jsx(customComponents_js_FormRowSelect, {
                type: "text",
                name: "bloodGroup",
                value: bloodGroup,
                labelText: "Blood Group",
                list: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
                handleChange: e => handleInput(e)
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "one-input"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "three-input",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "input",
              children: /*#__PURE__*/jsx_runtime_.jsx(customComponents_js_FormRowSelect, {
                labelText: "Current Weight",
                type: "text",
                name: "currentWeight",
                value: currentWeight,
                list: weightRange(),
                handleChange: e => handleInput(e)
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "input",
              children: /*#__PURE__*/jsx_runtime_.jsx(customComponents_js_FormRowSelect, {
                labelText: "Normal Weight",
                type: "text",
                name: "normalWeight",
                value: normalWeight,
                list: weightRange(),
                handleChange: e => handleInput(e)
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "input",
              children: /*#__PURE__*/jsx_runtime_.jsx(customComponents_js_FormRowSelect, {
                labelText: "Weight 6 Month Ago",
                type: "text",
                name: "pastWeight",
                value: pastWeight,
                list: weightRange(),
                handleChange: e => handleInput(e)
              })
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "img-section"
      })]
    })
  });
};

/* harmony default export */ const components_AssessmentForm2 = (AssessmentForm2);

/***/ }),

/***/ 6699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AssessmentForm3)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./assets/wrappers/AssessmentForm3.js

const Wrappers = external_styled_components_default().div.withConfig({
  displayName: "AssessmentForm3__Wrappers",
  componentId: "sc-b1an71-0"
})([".container{display:flex;justify-content:space-between;}.heading{font-size:3rem;}.form-section{margin-left:4rem;width:50%;}.img-section{}.form div{display:flex;flex-direction:column;position:relative;margin-top:0.6rem;}.first-row{display:flex;flex-direction:row;}input,select{padding:1rem;}.two-row{width:40vh;margin-right:2rem;}label{margin-bottom:2rem;}.two-input{display:flex;flex-direction:row;}.input:first-child{padding-right:2rem;}.input{flex-grow:1;}.one-input{width:calc(100% + 2rem);}.three-input{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;justify-content:space-between;flex-wrap:wrap;}.three-input .input{width:100px;}.img-section{background-color:#f9ed69;width:40%;background-image:url(\"./WealthifyLogo.png\");background-repeat:no-repeat;background-position:center;background-size:25rem;}.bottom{padding-bottom:2rem;background-color:var(--gray-light);}.terms-container{padding-top:2rem;}li{width:90%;margin:0 auto;margin-bottom:1rem;}footer{display:flex;align-items:center;justify-content:space-between;position:relative;width:90%;margin:0 auto;margin-top:4rem;margin-bottom:4rem;}footer div:first-child::after{content:\"\";position:absolute;top:2rem;left:10rem;height:2px;width:60vw;background:black;}.next{display:flex;align-items:center;justify-content:space-between;}p{margin-left:1rem;}table,th,td{max-width:80%;border:1px solid black;border-collapse:collapse;margin:1% 1% 0% 1%;position:relative;}input{border:none;border-color:black;width:100%;font-size:large;outline:none;}input:focus{border-color:black;}button{position:relative;border-radius:50%;border:none;cursor:pointer;background-color:greenyellow;padding:1.2%;margin:1% 1%;}.bottom-table{margin-left:3.3rem;margin-top:3rem;}@media (max-width:480px){.img-section{display:none;}label,textarea{width:300px;margin-left:-1.5rem;}.bottom-table{overflow:scroll;}}"]);
/* harmony default export */ const AssessmentForm3 = (Wrappers);
// EXTERNAL MODULE: ./utils/assessmentData.js
var assessmentData = __webpack_require__(2532);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/AssessmentForm3.js






const AssessmentForm3_AssessmentForm3 = ({
  medicalCondition,
  seasonalAllergies,
  setAssessmentData,
  updateFeilds
}) => {
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)(assessmentData/* initialData.tableData */.Q.tableData);
  console.log(state);
  const {
    0: inputFields,
    1: setInputFields
  } = (0,external_react_.useState)([{
    description: "",
    dosage: "",
    frequency: "",
    startdate: "",
    stopdate: ""
  }, {
    description: "",
    dosage: "",
    frequency: "",
    startdate: "",
    stopdate: ""
  }, {
    description: "",
    dosage: "",
    frequency: "",
    startdate: "",
    stopdate: ""
  }]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    updateFeilds({
      tableData: inputFields
    });
  };

  const addFields = () => {
    let newfield = {
      description: "",
      dosage: "",
      frequency: "",
      startdate: "",
      stopdate: ""
    };
    setInputFields([...inputFields, newfield]);
  };

  const submit = e => {
    e.preventDefault();
    updateFeilds({
      tableData: inputFields
    });
    console.log(assessmentData/* initialData */.Q); // console.log(...inputFields);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AssessmentForm3, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "form-section",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "heading",
          children: "Health History "
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Welcome to Wealthify "
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "textarea",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              for: "",
              children: "List any medical conditions or diagnoses you have been treated for with prescription, surgery , or medical care in the last 5 years"
            }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
              id: "",
              name: "",
              rows: "4",
              cols: "50",
              onChange: e => updateFeilds({
                medicalCondition: e.target.value
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "textarea",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              for: "",
              children: "List any seasonal allergies and / or food allergies, sensitivities or intolerances"
            }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
              id: "",
              name: "",
              rows: "4",
              cols: "50",
              onChange: e => updateFeilds({
                seasonalAllergies: e.target.value
              })
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "img-section"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bottom-table",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        style: {
          maxWidth: "70%"
        },
        children: "Please list all of the following taken currently or within the last year: medications, hormone replacement therapies, antibiotics or other medically related medications or remedies. (Vitamins, Minerals, Nutraceuticals, etc. will be asked for in a different section.)"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
        id: "myTable",
        children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Name/Description"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Dosage / Quantity"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Frequency"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Start Date"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Stop Date"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
          children: inputFields.map((input, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  name: "description",
                  value: input.description,
                  onChange: event => handleFormChange(index, event)
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  name: "dosage",
                  value: input.dosage,
                  onChange: event => handleFormChange(index, event)
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  name: "frequency",
                  value: input.frequency,
                  onChange: event => handleFormChange(index, event)
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "date",
                  name: "startdate",
                  value: input.startdate,
                  onChange: event => handleFormChange(index, event)
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "date",
                  name: "stopdate",
                  value: input.stopdate,
                  onChange: event => handleFormChange(index, event)
                })
              })]
            }, index);
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: addFields,
        children: "Add More.."
      })]
    })]
  });
};

/* harmony default export */ const components_AssessmentForm3 = (AssessmentForm3_AssessmentForm3);

/***/ }),

/***/ 6974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AssessmentForm4)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./assets/wrappers/Assessment4.js

const Wrappers = external_styled_components_default().div.withConfig({
  displayName: "Assessment4__Wrappers",
  componentId: "sc-ax0lzn-0"
})(["width:90%;margin:0 auto;.heading{padding:2rem;}table,th,td{border:1px solid black;border-collapse:collapse;}th:first-child{width:50%;}th,td{padding:0.4rem;}.checkbox,.text-area{display:flex;justify-content:center;align-content:center;}textarea{width:100%;outline:none;border:none;}.text-area{width:100%;}.check{display:flex;align-items:center;}.checkbox:checked:before{background-color:green;}input{font-size:2rem;}.checkbox-container{margin-left:1rem;margin-top:2rem;display:flex;flex-wrap:wrap;gap:3rem;justify-content:space-around;width:700px;}.check{width:200px;}.check label{margin-left:0.5rem;}.questions div{display:flex;}.questions{margin-left:-3.5rem;}.questions p{font-size:1.4rem;}.questions label{font-size:1.1rem;margin-right:1rem;}.text-area{}.bottom-question{margin-left:2rem;}@media (max-width:480px){overflow:scroll;.checkbox{width:200px;justify-content:space-between;}}"]);
/* harmony default export */ const Assessment4 = (Wrappers);
// EXTERNAL MODULE: ./components/customComponents.js/FormRow.js
var FormRow = __webpack_require__(4186);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/AssessmentForm4.js






const AssessmentForm4 = ({
  updateFeilds,
  allergies_self,
  allergies_family,
  allergies_specifics,
  anemia_self,
  anemia_family,
  anemia_specifics,
  asthma_self,
  asthma_family,
  asthma_specifics,
  anxiety_or_panic_attacks_self,
  anxiety_or_panic_attacks_family,
  anxiety_or_panic_attacks_specifics,
  arthritis_self,
  arthritis_family,
  arthritis_specifics,
  autoimmune_condition_self,
  autoimmune_condition_family,
  autoimmune_condition_specifics,
  bronchitis_self,
  bronchitis_family,
  bronchitis_specifics,
  cancer_self,
  cancer_family,
  cancer_specifics,
  chronic_fatigue_syndrome_self,
  chronic_fatigue_syndrome_family,
  chronic_fatigue_syndrome_specifics,
  crohns_disease_or_ulcerative_colitis_self,
  crohns_disease_or_ulcerative_colitis_family,
  crohns_disease_or_ulcerative_colitis_specifics,
  depression_self,
  depression_family,
  depression_specifics,
  diabetes_self,
  diabetes_family,
  diabetes_specifics,
  dry_itchyskin_rashes_dermatitis_self,
  dry_itchyskin_rashes_dermatitis_family,
  dry_itchyskin_rashes_dermatitis_specifics,
  eczema_self,
  eczema_family,
  eczema_specifics,
  emphysema_self,
  emphysema_family,
  emphysema_specifics,
  epilepsy_convulsions_or_seizures_self,
  epilepsy_convulsions_or_seizures_family,
  epilepsy_convulsions_or_seizures_specifics,
  eye_disease_self,
  eye_disease_family,
  eye_disease_specifics,
  fibromyalgia_self,
  fibromyalgia_family,
  fibromyalgia_specifics,
  food_allergies_or_sensitivities_self,
  food_allergies_or_sensitivities_family,
  food_allergies_or_sensitivities_specifics,
  fungal_Infection_self,
  fungal_Infection_family,
  fungal_Infection_specifics,
  gallbladder_disease_self,
  gallbladder_disease_family,
  gallbladder_disease_specifics,
  gout_self,
  gout_family,
  gout_specifics,
  heart_attack_self,
  heart_attack_family,
  heart_attack_specifics,
  heartburn_self,
  heartburn_family,
  heartburn_specifics,
  heart_disease_self,
  heart_disease_family,
  heart_disease_specifics,
  hepatitis_self,
  hepatitis_family,
  hepatitis_specifics,
  high_blood_fats_self,
  high_blood_fats_family,
  high_blood_fats_specifics,
  high_blood_pressure_self,
  high_blood_pressure_family,
  high_blood_pressure_specifics,
  hypoglycemia_self,
  hypoglycemia_family,
  hypoglycemia_specifics,
  intestinal_disease_self,
  intestinal_disease_family,
  intestinal_disease_specifics,
  inflammatory_bowel_disease_self,
  inflammatory_bowel_disease_family,
  inflammatory_bowel_disease_specifics,
  irritable_bowel_syndrome_self,
  irritable_bowel_syndrome_family,
  irritable_bowel_syndrome_specifics,
  kidney_disease_self,
  kidney_disease_family,
  kidney_disease_specifics,
  lung_disease_self,
  lung_disease_family,
  lung_disease_specifics,
  liverdisease_self,
  liverdisease_family,
  liverdisease_specifics,
  mononucleosis_self,
  mononucleosis_family,
  mononucleosis_specifics,
  osteoporosis_self,
  osteoporosis_family,
  osteoporosis_specifics,
  pms_self,
  pms_family,
  pms_specifics,
  polycystic_ovarian_syndrome_self,
  polycystic_ovarian_syndrome_family,
  polycystic_ovarian_syndrome_specifics,
  pneumonia_self,
  pneumonia_family,
  pneumonia_specifics,
  prostate_problems_self,
  prostate_problems_family,
  prostate_problems_specifics,
  psychiatric_conditions_self,
  psychiatric_conditions_family,
  psychiatric_conditions_specifics,
  seizures_or_epilepsy_self,
  seizures_or_epilepsy_family,
  seizures_or_epilepsy_specifics,
  sinusitis_self,
  sinusitis_family,
  sinusitis_specifics,
  sleep_apnea_self,
  sleep_apnea_family,
  sleep_apnea_specifics,
  stroke_self,
  stroke_family,
  stroke_specifics,
  thyroid_disease_self,
  thyroid_disease_family,
  thyroid_disease_specifics,
  urinary_tract_infection_self,
  urinary_tract_infection_family,
  urinary_tract_infection_specifics,
  pfc_other_self,
  pfc_other_family,
  pfc_other_specifics
}) => {
  const data = [{
    name: "Allergies (Please Specify type of allergy)",
    property: "allergies",
    value: [allergies_self, allergies_family, allergies_specifics]
  }, {
    name: "Anemia",
    property: "anemia",
    value: [anemia_self, anemia_family, anemia_specifics]
  }, {
    name: "Anxiety or Panic Attacks",
    property: "anxiety_or_panic_attacks",
    value: [anxiety_or_panic_attacks_self, anxiety_or_panic_attacks_family, anxiety_or_panic_attacks_specifics]
  }, {
    name: "Arthritis (osteoarthritis or rheumatoid",
    property: "arthritis",
    value: [arthritis_self, arthritis_family, arthritis_specifics]
  }, {
    name: "Asthma",
    property: "asthma",
    value: [asthma_self, asthma_family, asthma_specifics]
  }, {
    name: "Autoimmune condition(specify type)",
    property: "autoimmune_condition",
    value: [autoimmune_condition_self, autoimmune_condition_family, autoimmune_condition_specifics]
  }, {
    name: "Bronchitis",
    property: "bronchitis",
    value: [bronchitis_self, bronchitis_family, bronchitis_specifics]
  }, {
    name: "Cancer (specify type)",
    property: "cancer",
    value: [cancer_self, cancer_family, cancer_specifics]
  }, {
    name: "Chronic Fatigue Syndrome",
    property: "chronic_fatigue_syndrome",
    value: [chronic_fatigue_syndrome_self, chronic_fatigue_syndrome_family, chronic_fatigue_syndrome_specifics]
  }, {
    name: "Crohn's Disease or ulcerative Colitis",
    property: "crohns_disease_or_ulcerative_colitis",
    value: [crohns_disease_or_ulcerative_colitis_self, crohns_disease_or_ulcerative_colitis_family, crohns_disease_or_ulcerative_colitis_specifics]
  }, {
    name: "Depression",
    property: "depression",
    value: [depression_self, depression_family, depression_specifics]
  }, {
    name: "Diabetes (Specify:Type 1, 2, Prediabetes , Gestational Diabetes) ",
    property: "diabetes",
    value: [diabetes_self, diabetes_family, diabetes_specifics]
  }, {
    name: "Dry , itchy skin , rashes, dermatitis",
    property: "dry_itchyskin_rashes_dermatitis",
    value: [dry_itchyskin_rashes_dermatitis_self, dry_itchyskin_rashes_dermatitis_family, dry_itchyskin_rashes_dermatitis_specifics]
  }, {
    name: "Eczema",
    property: "eczema",
    value: [eczema_self, eczema_family, eczema_specifics]
  }, {
    name: "Emphysema",
    property: "emphysema",
    value: [emphysema_self, emphysema_family, emphysema_specifics]
  }, {
    name: "Epilepsy , convulsions or seizures",
    property: "epilepsy_convulsions_or_seizures",
    value: [epilepsy_convulsions_or_seizures_self, epilepsy_convulsions_or_seizures_family, epilepsy_convulsions_or_seizures_specifics]
  }, {
    name: "Eye Disease (please specify)",
    property: "eye_disease",
    value: [eye_disease_self, eye_disease_family, eye_disease_specifics]
  }, {
    name: "Fibromyalgia",
    property: "fibromyalgia",
    value: [fibromyalgia_self, fibromyalgia_family, fibromyalgia_specifics]
  }, {
    name: "Food Allergies or Sensitivities",
    property: "food_allergies_or_sensitivities",
    value: [food_allergies_or_sensitivities_self, food_allergies_or_sensitivities_family, food_allergies_or_sensitivities_specifics]
  }, {
    name: "Fungal Infection (athlete's food , ringworm, other",
    property: "fungal_Infection",
    value: [fungal_Infection_self, fungal_Infection_family, fungal_Infection_specifics]
  }, {
    name: "Gallbladder Disease/Gallstones(specify)",
    property: "gallbladder_disease",
    value: [gallbladder_disease_self, gallbladder_disease_family, gallbladder_disease_specifics]
  }, {
    name: "Gout",
    property: "gout",
    value: [gout_self, gout_family, gout_specifics]
  }, {
    name: "Heart attack/ Angina",
    property: "heart_attack",
    value: [heart_attack_self, heart_attack_family, heart_attack_specifics]
  }, {
    name: "Heartburn",
    property: "heartburn",
    value: [heartburn_self, heartburn_family, heartburn_specifics]
  }, {
    name: "Heart disease specify",
    property: "heart_disease",
    value: [heart_disease_self, heart_disease_family, heart_disease_specifics]
  }, {
    name: "Hepatitis",
    property: "hepatitis",
    value: [hepatitis_self, hepatitis_family, hepatitis_specifics]
  }, {
    name: "High blood fats (cholesterol, triglycerides)",
    property: "high_blood_fats",
    value: [high_blood_fats_self, high_blood_fats_family, high_blood_fats_specifics]
  }, {
    name: "High blood pressure (hypertension)",
    property: "high_blood_pressure",
    value: [high_blood_pressure_self, high_blood_pressure_family, high_blood_pressure_specifics]
  }, {
    name: "Hypoglycemia (low blood sugar)",
    property: "hypoglycemia",
    value: [hypoglycemia_self, hypoglycemia_family, hypoglycemia_specifics]
  }, {
    name: "Intestinal Disease (specify)",
    property: "intestinal_disease",
    value: [intestinal_disease_self, intestinal_disease_family, intestinal_disease_specifics]
  }, {
    name: "Inflammatory Bowel Disease (Crohn's or Ulcerative Colitis)",
    property: "inflammatory_bowel_disease",
    value: [inflammatory_bowel_disease_self, inflammatory_bowel_disease_family, inflammatory_bowel_disease_specifics]
  }, {
    name: "Irritable bowel syndrome",
    property: "irritable_bowel_syndrome",
    value: [irritable_bowel_syndrome_self, irritable_bowel_syndrome_family, irritable_bowel_syndrome_specifics]
  }, {
    name: "Kidney disease/failure or Kidney stones",
    property: "kidney_disease",
    value: [kidney_disease_self, kidney_disease_family, kidney_disease_specifics]
  }, {
    name: "Lung disease (specify)",
    property: "lung_disease",
    value: [lung_disease_self, lung_disease_family, lung_disease_specifics]
  }, {
    name: "Liver disease",
    property: "liverdisease",
    value: [liverdisease_self, liverdisease_family, liverdisease_specifics]
  }, {
    name: "Mononucleosis",
    property: "mononucleosis",
    value: [mononucleosis_self, mononucleosis_family, mononucleosis_specifics]
  }, {
    name: "Osteoporosis",
    property: "osteoporosis",
    value: [osteoporosis_self, osteoporosis_family, osteoporosis_specifics]
  }, {
    name: "PMS",
    property: "pms",
    value: [pms_self, pms_family, pms_specifics]
  }, {
    name: "Polycystic Ovarian Syndrome",
    property: "polycystic_ovarian_syndrome",
    value: [polycystic_ovarian_syndrome_self, polycystic_ovarian_syndrome_family, polycystic_ovarian_syndrome_specifics]
  }, {
    name: "Pneumonia",
    property: "pneumonia",
    value: [pneumonia_self, pneumonia_family, pneumonia_specifics]
  }, {
    name: "Prostate Problems",
    property: "prostate_problems",
    value: [prostate_problems_self, prostate_problems_family, prostate_problems_specifics]
  }, {
    name: "Psychiatric Conditions",
    property: "psychiatric_conditions",
    value: [psychiatric_conditions_self, psychiatric_conditions_family, psychiatric_conditions_specifics]
  }, {
    name: "Seizures or epilepsy",
    property: "seizures_or_epilepsy",
    value: [seizures_or_epilepsy_self, seizures_or_epilepsy_family, seizures_or_epilepsy_specifics]
  }, {
    name: "Sinusitis",
    property: "sinusitis",
    value: [sinusitis_self, sinusitis_family, sinusitis_specifics]
  }, {
    name: "Sleep apnea",
    property: "sleep_apnea",
    value: [sleep_apnea_self, sleep_apnea_family, sleep_apnea_specifics]
  }, {
    name: "Stroke",
    property: "stroke",
    value: [stroke_self, stroke_family, stroke_specifics]
  }, {
    name: "Thyroid disease (hypo- or hyperthyroid)",
    property: "thyroid_disease",
    value: [thyroid_disease_self, thyroid_disease_family, thyroid_disease_specifics]
  }, {
    name: "Urinary Tract Infection",
    property: "urinary_tract_infection",
    value: [urinary_tract_infection_self, urinary_tract_infection_family, urinary_tract_infection_specifics]
  }, {
    name: "Other (describe)",
    property: "pfc_other",
    value: [pfc_other_self, pfc_other_family, pfc_other_specifics]
  }];

  const handleInput = e => {
    let value = e.target.checked ? e.target.value : "";
    console.log({
      [e.target.name]: value
    });
    updateFeilds({
      [e.target.name]: e.target.value
    });
  };

  const ref = (0,external_react_.useRef)(null);
  return /*#__PURE__*/jsx_runtime_.jsx(Assessment4, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Please indicate if you of a blood relative has been diagnose with or experienced any of the following conditions or symptoms"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Self or Family Member?"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "Specifics(Date, Explaisn, etc) "
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: data.map(item => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: item.name
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "checkbox",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  htmlFor: "self",
                  children: "Self"
                }), item.value[0] === "1" ? /*#__PURE__*/jsx_runtime_.jsx("input", {
                  ref: ref,
                  id: "self",
                  type: "checkBox",
                  value: "",
                  checked: true,
                  name: item.property + "_self",
                  onChange: e => handleInput(e)
                }) : /*#__PURE__*/jsx_runtime_.jsx("input", {
                  ref: ref,
                  id: "self",
                  type: "checkBox",
                  value: "1",
                  name: item.property + "_self",
                  onChange: e => handleInput(e)
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  htmlFor: "self",
                  children: "Family"
                }), item.value[1] === "1" ? /*#__PURE__*/jsx_runtime_.jsx("input", {
                  ref: ref,
                  id: "self",
                  type: "checkBox",
                  value: "",
                  checked: true,
                  name: item.property + "_family",
                  onChange: e => handleInput(e)
                }) : /*#__PURE__*/jsx_runtime_.jsx("input", {
                  ref: ref,
                  id: "self",
                  type: "checkBox",
                  value: "1",
                  name: item.property + "_family",
                  onChange: e => handleInput(e)
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-area",
                children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                  type: "text",
                  name: item.property + "_specifics" // name={item.property.split(" ")[0] + "_specific"}
                  ,
                  value: item.value[2],
                  onChange: e => handleInput(e)
                })
              })
            })]
          });
        })
      })]
    })
  });
};

/* harmony default export */ const components_AssessmentForm4 = (AssessmentForm4);

/***/ }),

/***/ 9252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AssessmentForm5)
});

// EXTERNAL MODULE: external "fontawesome"
var external_fontawesome_ = __webpack_require__(8498);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./assets/wrappers/AssessementForm5.js

const Wrappers = external_styled_components_default().div.withConfig({
  displayName: "AssessementForm5__Wrappers",
  componentId: "sc-197yfpq-0"
})(["width:90%;margin:0 auto;.heading{padding:2rem;}table,th,td{border:1px solid black;border-collapse:collapse;}th:first-child{width:50%;}th,td{padding:0.4rem;}.checkbox,.text-area{display:flex;justify-content:center;align-content:center;}textarea{width:100%;outline:none;border:none;}.text-area{width:100%;}.check{display:flex;align-items:center;}.checkbox:checked:before{background-color:green;}input{font-size:2rem;}.checkbox-container{margin-left:1rem;margin-top:2rem;display:flex;flex-wrap:wrap;gap:3rem;justify-content:space-around;width:700px;}.check{width:200px;}.check label{margin-left:0.5rem;}.questions div{display:flex;}.questions{margin-left:-3.5rem;}.questions p{font-size:1.4rem;}.questions label{font-size:1.1rem;margin-right:1rem;}.text-area{}.bottom-container{margin-left:1rem;margin-top:5rem;}.bottom-container p{font-size:1.3rem;}.questions-container{margin-top:2rem;}.questions-input{display:flex;}.food-area p{margin:3rem 0;font-size:1.3rem;}.food-area textarea{width:60%;outline:1px solid black;}@media (max-width:480px){.table-one,.table-two{overflow:scroll;}.checkbox{width:180px;justify-content:space-between;}.checkbox-container{width:100px;justify-content:space-between;}}"]);
/* harmony default export */ const AssessementForm5 = (Wrappers);
// EXTERNAL MODULE: ./components/customComponents.js/FormRow.js
var FormRow = __webpack_require__(4186);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/AssessmentForm5.js






const data3 = ["Appetite", "Constipation", "Menstrual difficulties", "Bleeding gums", "Diarrhea", "Seeing in dim light", "Bruising", "Edema", "Sudden weight change", "Chewing or swallowing", "Indigestion", "Stress"];
const data4 = [{
  name: "Do you use tobacco in any way?",
  property: "tobacco"
}, {
  name: "Do you use alcohol in any way?",
  property: "alcohol"
}, {
  name: "Did you recently stop smoking?",
  property: "smoking"
}];

const AssessmentForm5 = ({
  updateFeilds,
  back_injury_self,
  back_injury_family,
  back_injury_specifics,
  broken_self,
  broken_family,
  broken_specifics,
  head_injury_self,
  head_injury_family,
  head_injury_specifics,
  neck_injury_self,
  neck_injury_family,
  neck_injury_specifics,
  pfi_other_self,
  pfi_other_family,
  pfi_other_specifics,
  barium_benema_self,
  barium_benema_family,
  barium_benema_specifics,
  bone_scan_self,
  bone_scan_family,
  bone_scan_specifics,
  cat_scan_self,
  cat_scan_family,
  cat_scan_specifics,
  chest_x_ray_self,
  chest_x_ray_family,
  chest_x_ray_specifics,
  colonoscopy_or_sigmoidoscopy_self,
  colonoscopy_or_sigmoidoscopy_family,
  colonoscopy_or_sigmoidoscopy_specifics,
  ekg_self,
  ekg_family,
  ekg_specifics,
  liver_scan_self,
  liver_scan_family,
  liver_scan_specifics,
  nmr_mri_self,
  nmr_mri_family,
  nmr_mri_specifics,
  upper_gi_series_self,
  upper_gi_series_family,
  upper_gi_series_specifics,
  ds_other_self,
  ds_other_family,
  ds_other_specifics,
  operations_self,
  operations_family,
  operations_specifics,
  dental_self,
  dental_family,
  dental_specifics,
  gall_bladder_self,
  gall_bladder_family,
  gall_bladder_specifics,
  hernia_self,
  hernia_family,
  hernia_specifics,
  hysterectomy_self,
  hysterectomy_family,
  hysterectomy_specifics,
  tonsillectomy_self,
  tonsillectomy_family,
  tonsillectomy_specifics
}) => {
  const data1 = [{
    name: "Back injury",
    property: "back_injury",
    value: [back_injury_self, back_injury_family, back_injury_specifics]
  }, {
    name: "Broken (specify)",
    property: "broken",
    value: [broken_self, broken_family, broken_specifics]
  }, {
    name: "Head injury",
    property: "head_injury",
    value: [head_injury_self, head_injury_family, head_injury_specifics]
  }, {
    name: "Neck injury",
    property: "neck_injury",
    value: [neck_injury_self, neck_injury_family, neck_injury_specifics]
  }, {
    name: "Other (describe)",
    property: "pfi_other",
    value: [pfi_other_self, pfi_other_family, pfi_other_specifics]
  }];
  const data2 = [{
    name: "Barium Enema",
    property: "barium_benema",
    value: [barium_benema_self, barium_benema_family, barium_benema_specifics]
  }, {
    name: "Bone Scan",
    property: "bone_scan",
    value: [bone_scan_self, bone_scan_family, bone_scan_specifics]
  }, {
    name: "CAT Scan: Abdomen, Brain, Spine (specify)",
    property: "cat_scan",
    value: [cat_scan_self, cat_scan_family, cat_scan_specifics]
  }, {
    name: "Chest X-ray",
    property: "chest_x_ray",
    value: [chest_x_ray_self, chest_x_ray_family, chest_x_ray_specifics]
  }, {
    name: "Colonoscopy or Sigmoidoscopy (specify)",
    property: "colonoscopy_or_sigmoidoscopy",
    value: [colonoscopy_or_sigmoidoscopy_self, colonoscopy_or_sigmoidoscopy_family, colonoscopy_or_sigmoidoscopy_specifics]
  }, {
    name: "EKG",
    property: "ekg",
    value: [ekg_self, ekg_family, ekg_specifics]
  }, {
    name: "Liver scan",
    property: "liver_scan",
    value: [liver_scan_self, liver_scan_family, liver_scan_specifics]
  }, {
    name: "NMR/MRI",
    property: "nmr_mri",
    value: [nmr_mri_self, nmr_mri_family, nmr_mri_specifics]
  }, {
    name: "Upper GI Series",
    property: "upper_gi_series",
    value: [upper_gi_series_self, upper_gi_series_family, upper_gi_series_specifics]
  }, {
    name: "Other (describe)",
    property: "ds_other",
    value: [ds_other_self, ds_other_family, ds_other_specifics]
  }, {
    name: "Operations",
    property: "operations",
    value: [operations_self, operations_family, operations_specifics]
  }, {
    name: "Dental Surgery",
    property: "dental surgery",
    value: [dental_self, dental_family, dental_specifics]
  }, {
    name: "Gall Bladder",
    property: "gall_bladder",
    value: [gall_bladder_self, gall_bladder_family, gall_bladder_specifics]
  }, {
    name: "Hernia",
    property: "hernia",
    value: [hernia_self, hernia_family, hernia_specifics]
  }, {
    name: "Hysterectomy",
    property: "hysterectomy",
    value: [hysterectomy_self, hysterectomy_family, hysterectomy_specifics]
  }, {
    name: "Tonsillectomy",
    property: "tonsillectomy",
    value: [tonsillectomy_self, tonsillectomy_family, tonsillectomy_specifics]
  }];

  const handleSubmit = e => {
    e.preventDefault();
    useEffect(() => {
      const getData = async () => {
        console.log('getData');
        /*const { data } = await axios.post(
          `http://doctor.brandimagetech.com/patient.php?api_key=get_patient&ph_num=918939068212`,
          { f_name: "rajesh" }
        );
        setResponseData(data);*/
      };

      getData();
    }, []); // next();
    // window.scrollTo(0, 0);
  };

  const handleInput = e => {
    let value = e.target.checked ? e.target.value : "";
    console.log({
      [e.target.name]: value
    }); // console.log(e.target.checked);

    updateFeilds({
      [e.target.name]: e.target.value
    });
  };

  const handleRadio = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    updateFeilds({
      [e.target.name]: e.target.value
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AssessementForm5, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "heading",
      children: "INJURIES"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "table-one",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Please indicate if you of a blood relative has been diagnose with or experienced any of the following conditions or symptoms"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Self or Family Member?"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Specifics(Date, Explain, etc) "
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
          children: data1.map(item => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                children: item.name
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "checkbox",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "self",
                    children: "Self"
                  }), item.value[0] === "1" ? /*#__PURE__*/jsx_runtime_.jsx("input", {
                    id: "self",
                    type: "checkBox",
                    value: "",
                    checked: true,
                    name: item.property + "_self",
                    onChange: e => handleInput(e)
                  }) : /*#__PURE__*/jsx_runtime_.jsx("input", {
                    id: "self",
                    type: "checkBox",
                    value: "1",
                    name: item.property + "_self",
                    onChange: e => handleInput(e)
                  }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "self",
                    children: "Family"
                  }), item.value[1] === "1" ? /*#__PURE__*/jsx_runtime_.jsx("input", {
                    id: "self",
                    type: "checkBox",
                    value: "",
                    checked: true,
                    name: item.property + "_family",
                    onChange: e => handleInput(e)
                  }) : /*#__PURE__*/jsx_runtime_.jsx("input", {
                    id: "self",
                    type: "checkBox",
                    value: "1",
                    name: item.property + "_family",
                    onChange: e => handleInput(e)
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "text-area",
                  children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    type: "text",
                    name: item.property + "_specifics",
                    value: item.value[2],
                    onChange: e => handleInput(e)
                  })
                })
              })]
            });
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "heading",
      children: "DIAGNOSTIC STUDIES"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "table-two",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Please indicate if you of a blood relative has been diagnose with or experienced any of the following conditions or symptoms"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Self or Family Member?"
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "Specifics(Date, Explain, etc) "
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
          children: data2.map(item => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                children: item.name
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "checkbox",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "self",
                    children: "Self"
                  }), item.value[0] === "1" ? /*#__PURE__*/jsx_runtime_.jsx("input", {
                    id: "self",
                    type: "checkBox",
                    value: "",
                    checked: true,
                    name: item.property + "_self",
                    onChange: e => handleInput(e)
                  }) : /*#__PURE__*/jsx_runtime_.jsx("input", {
                    id: "self",
                    type: "checkBox",
                    value: "1",
                    name: item.property + "_self",
                    onChange: e => handleInput(e)
                  }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "self",
                    children: "Family"
                  }), item.value[1] === "1" ? /*#__PURE__*/jsx_runtime_.jsx("input", {
                    id: "self",
                    type: "checkBox",
                    value: "",
                    checked: true,
                    name: item.property + "_family",
                    onChange: e => handleInput(e)
                  }) : /*#__PURE__*/jsx_runtime_.jsx("input", {
                    id: "self",
                    type: "checkBox",
                    value: "1",
                    name: item.property + "_family",
                    onChange: e => handleInput(e)
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "text-area",
                  children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    type: "text",
                    name: item.property + "_specifics" // name={item.property.split(" ")[0] + "_specific"}
                    ,
                    value: item.value[2],
                    onChange: e => handleInput(e)
                  })
                })
              })]
            });
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "heading",
      children: "Do you have complaints about any of the following ?"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "checkbox-container",
      children: data3.map(item => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "check",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "checkBox",
            className: "checkbox",
            name: item,
            value: "1",
            onChange: e => handleInput(e)
          }), /*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "",
            children: item
          })]
        });
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bottom-container",
      children: data4.map((item, index) => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "questions-container",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [" ", item.name, " "]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "questions-input",
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "radio",
              className: "checkbox",
              value: "yes",
              name: item.property,
              onChange: e => handleRadio(e)
            }), "Yes", /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "radio",
              className: "checkbox",
              value: "No",
              name: item.property,
              onChange: e => handleRadio(e)
            }), "NO"]
          })]
        });
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "food-area",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Are there certain foods that you do not eat ever? Why?"
      }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
        className: "food-textarea",
        name: "food_never_eat",
        id: "",
        cols: "30",
        rows: "10",
        onChange: e => handleRadio(e)
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onSubmit: e => handleSubmit(e),
      className: "btn",
      type: "submit",
      children: "submit"
    })]
  });
};

/* harmony default export */ const components_AssessmentForm5 = (AssessmentForm5);

/***/ }),

/***/ 4186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_wrappers_AssessmentForm1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3684);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  unMatch,
  isChecked,
  className
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_assets_wrappers_AssessmentForm1__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
      htmlFor: name,
      children: labelText || name
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      id: "self",
      type: type,
      value: value,
      name: name,
      onChange: handleChange,
      checked: isChecked,
      className: className
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormRow);

/***/ }),

/***/ 5855:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7647);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_appContext__WEBPACK_IMPORTED_MODULE_1__]);
_context_appContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useMultiStepForm = steps => {
  const {
    agree
  } = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_1__/* .useAppcontext */ .fE)();
  const {
    0: currentStepIndex,
    1: setCurrentStepIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  function next() {
    setCurrentStepIndex(prev => {
      if (prev >= steps.length - 1) {
        return prev;
      }

      if (!agree) {
        alert("please agree to the terms and condition to proceed");
        return prev;
      }

      return prev + 1;
    });
  }

  function back() {
    setCurrentStepIndex(prev => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  function goTo(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    goTo,
    next,
    back
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMultiStepForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ initialData)
/* harmony export */ });
let mobileNumber;

if (false) {}

const initialData = {
  refer_id: "",
  f_name: "",
  l_name: "",
  mobile_num: mobileNumber,
  email: "",
  dob: "",
  agree: "",
  todayDate: "",
  sex: "Male",
  age: "",
  height: "",
  current_weight: "40",
  normal_weight: "40",
  weight_6_month_ago: "40",
  bloodGroup: "",
  medical_condition: "",
  allergies: "",
  allergies_self: "",
  allergies_family: "",
  allergies_specifics: "",
  anemia_self: "",
  anemia_family: "",
  anemia_specifics: "",
  asthma_self: "",
  asthma_family: "",
  asthma_specifics: "",
  anxiety_or_panic_attacks_self: "",
  anxiety_or_panic_attacks_family: "",
  anxiety_or_panic_attacks_specifics: "",
  arthritis_self: "",
  arthritis_family: "",
  arthritis_specifics: "",
  autoimmune_condition_self: "",
  autoimmune_condition_family: "",
  autoimmune_condition_specifics: "",
  bronchitis_self: "",
  bronchitis_family: "",
  bronchitis_specifics: "",
  cancer_self: "",
  cancer_family: "",
  cancer_specifics: "",
  chronic_fatigue_syndrome_self: "",
  chronic_fatigue_syndrome_family: "",
  chronic_fatigue_syndrome_specifics: "",
  crohns_disease_or_ulcerative_colitis_self: "",
  crohns_disease_or_ulcerative_colitis_family: "",
  crohns_disease_or_ulcerative_colitis_specifics: "",
  depression_self: "",
  depression_family: "",
  depression_specifics: "",
  diabetes_self: "",
  diabetes_family: "",
  diabetes_specifics: "",
  dry_itchyskin_rashes_dermatitis_self: "",
  dry_itchyskin_rashes_dermatitis_family: "",
  dry_itchyskin_rashes_dermatitis_specifics: "",
  eczema_self: "",
  eczema_family: "",
  eczema_specifics: "",
  emphysema_self: "",
  emphysema_family: "",
  emphysema_specifics: "",
  epilepsy_convulsions_or_seizures_self: "",
  epilepsy_convulsions_or_seizures_family: "",
  epilepsy_convulsions_or_seizures_specifics: "",
  eye_disease_self: "",
  eye_disease_family: "",
  eye_disease_specifics: "",
  fibromyalgia_self: "",
  fibromyalgia_family: "",
  fibromyalgia_specifics: "",
  food_allergies_or_sensitivities_self: "",
  food_allergies_or_sensitivities_family: "",
  food_allergies_or_sensitivities_specifics: "",
  fungal_Infection_self: "",
  fungal_Infection_family: "",
  fungal_Infection_specifics: "",
  gallbladder_disease_self: "",
  gallbladder_disease_family: "",
  gallbladder_disease_specifics: "",
  gout_self: "",
  gout_family: "",
  gout_specifics: "",
  heart_attack_self: "",
  heart_attack_family: "",
  heart_attack_specifics: "",
  heartburn_self: "",
  heartburn_family: "",
  heartburn_specifics: "",
  heart_disease_self: "",
  heart_disease_family: "",
  heart_disease_specifics: "",
  hepatitis_self: "",
  hepatitis_family: "",
  hepatitis_specifics: "",
  high_blood_fats_self: "",
  high_blood_fats_family: "",
  high_blood_fats_specifics: "",
  high_blood_pressure_self: "",
  high_blood_pressure_family: "",
  high_blood_pressure_specifics: "",
  hypoglycemia_self: "",
  hypoglycemia_family: "",
  hypoglycemia_specifics: "",
  intestinal_disease_self: "",
  intestinal_disease_family: "",
  intestinal_disease_specifics: "",
  inflammatory_bowel_disease_self: "",
  inflammatory_bowel_disease_family: "",
  inflammatory_bowel_disease_specifics: "",
  irritable_bowel_syndrome_self: "",
  irritable_bowel_syndrome_family: "",
  irritable_bowel_syndrome_specifics: "",
  kidney_disease_self: "",
  kidney_disease_family: "",
  kidney_disease_specifics: "",
  lung_disease_self: "",
  lung_disease_family: "",
  lung_disease_specifics: "",
  liverdisease_self: "",
  liverdisease_family: "",
  liverdisease_specifics: "",
  mononucleosis_self: "",
  mononucleosis_family: "",
  mononucleosis_specifics: "",
  osteoporosis_self: "",
  osteoporosis_family: "",
  osteoporosis_specifics: "",
  pms_self: "",
  pms_family: "",
  pms_specifics: "",
  polycystic_ovarian_syndrome_self: "",
  polycystic_ovarian_syndrome_family: "",
  polycystic_ovarian_syndrome_specifics: "",
  pneumonia_self: "",
  pneumonia_family: "",
  pneumonia_specifics: "",
  prostate_problems_self: "",
  prostate_problems_family: "",
  prostate_problems_specifics: "",
  psychiatric_conditions_self: "",
  psychiatric_conditions_family: "",
  psychiatric_conditions_specifics: "",
  seizures_or_epilepsy_self: "",
  seizures_or_epilepsy_family: "",
  seizures_or_epilepsy_specifics: "",
  sinusitis_self: "",
  sinusitis_family: "",
  sinusitis_specifics: "",
  sleep_apnea_self: "",
  sleep_apnea_family: "",
  sleep_apnea_specifics: "",
  stroke_self: "",
  stroke_family: "",
  stroke_specifics: "",
  thyroid_disease_self: "",
  thyroid_disease_family: "",
  thyroid_disease_specifics: "",
  urinary_tract_infection_self: "",
  urinary_tract_infection_family: "",
  urinary_tract_infection_specifics: "",
  pfc_other_self: "",
  pfc_other_family: "",
  pfc_other_specifics: "",
  back_injury_self: "",
  back_injury_family: "",
  back_injury_specifics: "",
  broken_self: "",
  broken_family: "",
  broken_specifics: "",
  head_injury_self: "",
  head_injury_family: "",
  head_injury_specifics: "",
  neck_injury_self: "",
  neck_injury_family: "",
  neck_injury_specifics: "",
  pfi_other_self: "",
  pfi_other_family: "",
  pfi_other_specifics: "",
  barium_benema_self: "",
  barium_benema_family: "",
  barium_benema_specifics: "",
  bone_scan_self: "",
  bone_scan_family: "",
  bone_scan_specifics: "",
  cat_scan_self: "",
  cat_scan_family: "",
  cat_scan_specifics: "",
  chest_x_ray_self: "",
  chest_x_ray_family: "",
  chest_x_ray_specifics: "",
  colonoscopy_or_sigmoidoscopy_self: "",
  colonoscopy_or_sigmoidoscopy_family: "",
  colonoscopy_or_sigmoidoscopy_specifics: "",
  ekg_self: "",
  ekg_family: "",
  ekg_specifics: "",
  liver_scan_self: "",
  liver_scan_family: "",
  liver_scan_specifics: "",
  nmr_mri_self: "",
  nmr_mri_family: "",
  nmr_mri_specifics: "",
  upper_gi_series_self: "",
  upper_gi_series_family: "",
  upper_gi_series_specifics: "",
  ds_other_self: "",
  ds_other_family: "",
  ds_other_specific: "",
  operations_self: "",
  operations_family: "",
  operations_specifics: "",
  dental_self: "",
  dental_family: "",
  dental_specifics: "",
  gall_bladder_self: "",
  gall_bladder_family: "",
  gall_bladder_specifics: "",
  hernia_self: "",
  hernia_family: "",
  hernia_specifics: "",
  hysterectomy_self: "",
  hysterectomy_family: "",
  hysterectomy_specifics: "",
  tonsillectomy_self: "",
  tonsillectomy_family: "",
  tonsillectomy_specifics: "",
  tobacco: "",
  alcohol: "",
  smoking: "",
  food_never_eat: "",
  appetite: "",
  constipation: "",
  menstrual_difficulties: "",
  bleeding_gums: "",
  diarrhea: "",
  seeing_in_dim_light: "",
  bruising: "",
  edema: "",
  sudden_weight_change: "",
  chewing_or_swallowing: "",
  indigestion: "",
  stress: "",
  medicine_dose: "",
  tableData: []
};

/***/ }),

/***/ 1838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/nextBtn.9573f831.svg","height":64,"width":64});

/***/ })

};
;