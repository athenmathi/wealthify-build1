"use strict";
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bf": () => (/* binding */ GET_DOCTOR_ID_BEGIN),
/* harmony export */   "C8": () => (/* binding */ GET_DOCTOR_ID_SUCCESS),
/* harmony export */   "CP": () => (/* binding */ GET_ARRAY_OF_OBJECT_BEGIN),
/* harmony export */   "CY": () => (/* binding */ GETDATA_SUCCESS),
/* harmony export */   "Dt": () => (/* binding */ GET_COMMON_DATA_BEGIN),
/* harmony export */   "I3": () => (/* binding */ GET_RECIPE_SUCCESS),
/* harmony export */   "LC": () => (/* binding */ GET_ARRAY_OF_OBJECT_ERROR),
/* harmony export */   "LG": () => (/* binding */ GET_EACHDOCTOR_PATIENT_SUCCESS),
/* harmony export */   "M4": () => (/* binding */ GET_ADMIN_HOME_BEGIN),
/* harmony export */   "ME": () => (/* binding */ POST_OTP_LOGIN_BEGIN),
/* harmony export */   "Nl": () => (/* binding */ GET_TEST_REPORTS_BEGIN),
/* harmony export */   "OA": () => (/* binding */ GET_EACHDOCTOR_PATIENT_BEGIN),
/* harmony export */   "XC": () => (/* binding */ GET_COMMON_DATA_SUCCESS),
/* harmony export */   "ZG": () => (/* binding */ GET_ARRAY_OF_OBJECT_SUCCESS),
/* harmony export */   "dS": () => (/* binding */ GET_NUTRITION_SUCESS),
/* harmony export */   "dW": () => (/* binding */ POST_OTP_LOGIN_SUCCESS),
/* harmony export */   "eW": () => (/* binding */ GET_ADMIN_HOME_SUCCESS),
/* harmony export */   "gn": () => (/* binding */ GET_SUBCRIPTION_BEGIN),
/* harmony export */   "k1": () => (/* binding */ GET_COMMON_DATA_ERROR),
/* harmony export */   "mM": () => (/* binding */ BUYSUBSCRIPTION_BEGIN),
/* harmony export */   "nv": () => (/* binding */ SUBSCRIPTION_SUCCESS),
/* harmony export */   "rz": () => (/* binding */ SET_AGREE),
/* harmony export */   "tC": () => (/* binding */ GET_TEST_REPORTS_SUCCESS),
/* harmony export */   "tF": () => (/* binding */ GET_ADMIN_HOME_ERROR),
/* harmony export */   "yk": () => (/* binding */ GETDATA_BEGIN)
/* harmony export */ });
/* unused harmony exports GETDATA_ERROR, SET_QUERY_ID */
const GET_SUBCRIPTION_BEGIN = "GET_SUBCRIPTION_BEGIN";
const POST_OTP_LOGIN_BEGIN = "POST_OTP_LOGIN_BEGIN";
const POST_OTP_LOGIN_SUCCESS = "POST_OTP_LOGIN_SUCCESS";
const BUYSUBSCRIPTION_BEGIN = "BUYSUBSCRIPTION_BEGIN";
const SUBSCRIPTION_SUCCESS = "SUBSCRIPTION_SUCCESS";
const GETDATA_BEGIN = "GETDATA_BEGIN";
const GETDATA_SUCCESS = "GETDATA_SUCCESS";
const GETDATA_ERROR = "GETDATA_ERROR";
const SET_AGREE = "SET_AGREE";
const GET_EACHDOCTOR_PATIENT_BEGIN = "GET_EACHDOCTOR_PATIENT_SUCCESS";
const GET_EACHDOCTOR_PATIENT_SUCCESS = "GET_EACHDOCTOR_PATIENT_SUCCESS";
const GET_TEST_REPORTS_BEGIN = "GET_TEST_REPORTS_BEGIN";
const GET_TEST_REPORTS_SUCCESS = "GET_TEST_REPORTS_SUCCESS";
const GET_ARRAY_OF_OBJECT_BEGIN = "GET_ARRAY_OF_OBJECT_BEGIN";
const GET_ARRAY_OF_OBJECT_SUCCESS = "GET_ARRAY_OF_OBJECT_SUCCESS";
const GET_ARRAY_OF_OBJECT_ERROR = "GET_ARRAY_OF_OBJECT_ERROR";
const GET_ADMIN_HOME_BEGIN = "GET_ADMIN_HOME_BEGIN";
const GET_ADMIN_HOME_SUCCESS = "GET_ADMIN_HOME_SUCCESS";
const GET_ADMIN_HOME_ERROR = "GET_ADMIN_HOME_ERROR";
const SET_QUERY_ID = "SET_QUERY_ID";
const GET_COMMON_DATA_BEGIN = "GET_COMMON_DATA_BEGIN";
const GET_COMMON_DATA_SUCCESS = "GET_COMMON_DATA_SUCCESS";
const GET_COMMON_DATA_ERROR = "GET_COMMON_DATA_ERROR"; //

const GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS";
const GET_NUTRITION_SUCESS = "GET_NUTRITION_SUCESS";
const GET_DOCTOR_ID_BEGIN = "GET_DOCTOR_ID_BEGIN";
const GET_DOCTOR_ID_SUCCESS = "GET_DOCTOR_ID_SUCCESS";

/***/ }),

/***/ 7647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fE": () => (/* binding */ useAppcontext),
/* harmony export */   "wI": () => (/* binding */ AppProvider)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(812);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5332);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const initialState = {
  loading: true,
  queryId: "",
  subscription: "",
  phoneNumber: "",
  referalId: "",
  patientId: "",
  doctorId: "",
  uniqueDoctorId: "",
  userType: "",
  numberExist: "",
  subscriptionPlan: "",
  subscriptionPlanCount: "",
  commonData: "",
  sex: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dob: "",
  bloodGroup: "",
  age: "",
  height: "",
  currentWeight: "",
  normalWeight: "",
  weight_6_month_ago: "",
  agree: "",
  imageData: [],
  details: [],
  adminDetails: [],
  planDetails: {},
  commonData: "",
  //
  recipeData: [],
  nutritionData: []
};
const AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();

const AppProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, initialState); //    axios

  const authFetch = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    baseURL: "http://doctor.brandimagetech.com/"
  });
  authFetch.interceptors.request.use(config => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  }, error => {
    return Promise.reject(error);
  });
  authFetch.interceptors.response.use(response => {
    response.headers["Content-Type"] = "application/json;charset=UTF-8";
    return response;
  }, error => {
    return Promise.reject(error);
  }); // get the current subscription

  const getSubscription = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_SUBCRIPTION_BEGIN */ .gn
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
      const planCount = data.current_plan.length;
      const plan = data.current_plan[0];
      const planDetails = data.current_plan[1];
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .SUBSCRIPTION_SUCCESS */ .nv,
        payload: {
          planCount,
          plan,
          planDetails
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const buySubscription = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .BUYSUBSCRIPTION_BEGIN */ .mM
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
    } catch (error) {
      console.log(error);
    }
  };

  const otpLogin = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .POST_OTP_LOGIN_BEGIN */ .ME
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
      const {
        ph_num,
        referal_id
      } = obj;
      const {
        otp
      } = data;
      const {
        p_id,
        doc_id,
        user_type,
        number_exist
      } = data.data;
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .POST_OTP_LOGIN_SUCCESS */ .dW,
        payload: {
          ph_num,
          referal_id,
          p_id,
          doc_id,
          user_type,
          number_exist,
          otp
        }
      });
      console.log(p_id, number_exist);
      localStorage.setItem("phoneNumber", ph_num);
      localStorage.setItem("user_type", user_type);
      localStorage.setItem("phoneNumber", ph_num);
      localStorage.setItem("doctorId", doc_id);
      localStorage.setItem("referalId", referal_id);
      localStorage.setItem("p_id", p_id);
    } catch (error) {}
  };

  const getData = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GETDATA_BEGIN */ .yk
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GETDATA_SUCCESS */ .CY,
        payload: {
          data: data.data
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .BUYSUBSCRIPTION_BEGIN */ .mM
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
    } catch (error) {
      console.log(error);
    }
  };

  const getTestReport = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_TEST_REPORTS_BEGIN */ .Nl
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_TEST_REPORTS_SUCCESS */ .tC,
        payload: data
      });
    } catch (error) {}
  };

  const getDoctorList = async (url, obj) => {};

  const getEachDoctorPatient = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_EACHDOCTOR_PATIENT_BEGIN */ .OA
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_EACHDOCTOR_PATIENT_SUCCESS */ .LG,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setAgree = value => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .SET_AGREE */ .rz,
      payload: value
    });
  };

  const getArrOfObj = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_ARRAY_OF_OBJECT_BEGIN */ .CP
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_ARRAY_OF_OBJECT_SUCCESS */ .ZG,
        payload: data.data
      });
    } catch (error) {
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_ARRAY_OF_OBJECT_ERROR */ .LC
      });
      console.log(error);
    }
  };

  const getAdminHome = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_ADMIN_HOME_BEGIN */ .M4
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_ADMIN_HOME_SUCCESS */ .eW,
        payload: data.data
      });
    } catch (error) {
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_ADMIN_HOME_ERROR */ .tF
      });
      console.log(error);
    }
  }; // const setQueryId = (id) => {
  //   dispatch({ type: SET_QUERY_ID, payload: id });
  // };


  const getCommonData = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_COMMON_DATA_BEGIN */ .Dt
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_COMMON_DATA_SUCCESS */ .XC,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_COMMON_DATA_ERROR */ .k1
      });
    }
  }; // merging code nove 15 nutrition and recipe
  //nov 11


  const getRecipe = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_ADMIN_HOME_BEGIN */ .M4
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
      console.log("da", data.data);
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_RECIPE_SUCCESS */ .I3,
        payload: data.data
      });
    } catch (error) {
      console.log("appContextGetRecipeErr", error);
    }
  }; //nov 14


  const getNutrition = async (url, obj) => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_ADMIN_HOME_BEGIN */ .M4
    });

    try {
      const {
        data
      } = await authFetch.post(`${url}.php`, obj);
      console.log("appcontext_data", data.data);
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_NUTRITION_SUCESS */ .dS,
        payload: data.data
      });
    } catch (error) {
      console.log("appContext_GetNutritionErr", error);
    }
  };

  const getDoctorId = async queryId => {
    dispatch({
      type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_DOCTOR_ID_BEGIN */ .Bf
    });

    try {
      let patientId;

      if (true) {
        patientId = localStorage.getItem("p_id");
      }

      const pat_id = queryId ? queryId : patientId;
      const {
        data
      } = await authFetch.post("healthrecord.php", {
        api_key: "get_doctor_id",
        p_id: queryId
      });
      dispatch({
        type: _action__WEBPACK_IMPORTED_MODULE_5__/* .GET_DOCTOR_ID_SUCCESS */ .C8,
        payload: data.doc_id
      });
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AppContext.Provider, {
    value: _objectSpread(_objectSpread({}, state), {}, {
      getSubscription,
      otpLogin,
      getData,
      postData,
      setAgree,
      getEachDoctorPatient,
      getTestReport,
      getArrOfObj,
      getAdminHome,
      // setQueryId,
      getCommonData,
      //
      getRecipe,
      getNutrition,
      getDoctorId
    }),
    children: children
  });
};

const useAppcontext = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(812);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const reducer = (state, action) => {
  if (action.type === _action__WEBPACK_IMPORTED_MODULE_0__/* .POST_OTP_LOGIN_SUCCESS */ .dW) {
    const {
      ph_num,
      referal_id,
      p_id,
      number_exist,
      doctorId,
      userType,
      otp
    } = action.payload;
    return _objectSpread(_objectSpread({}, state), {}, {
      phoneNumber: ph_num,
      referalId: referal_id,
      patientId: p_id,
      numberExist: number_exist,
      otpValue: otp,
      doctorId: doctorId,
      userType,
      alertType: "success",
      alertText: "Enter your otp"
    });
  }

  if (action.type === _action__WEBPACK_IMPORTED_MODULE_0__/* .GET_SUBCRIPTION_BEGIN */ .gn) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loading: true
    });
  }

  if (action.type === _action__WEBPACK_IMPORTED_MODULE_0__/* .SUBSCRIPTION_SUCCESS */ .nv) {
    const {
      plan,
      planCount,
      planDetails
    } = action.payload;
    return _objectSpread(_objectSpread({}, state), {}, {
      loading: false,
      planDetails,
      subscriptionPlanCount: planCount,
      subscriptionPlan: plan
    });
  }

  if (action.type === _action__WEBPACK_IMPORTED_MODULE_0__/* .GETDATA_SUCCESS */ .CY) {
    const {
      sex,
      first_name,
      last_name,
      phone_number,
      dob,
      blood_group,
      age,
      height,
      current_weight,
      normal_weight,
      weight_6_month_ago
    } = action.payload.data;
    return _objectSpread(_objectSpread({}, state), {}, {
      sex: sex,
      firstName: first_name,
      lastName: last_name,
      phoneNumber: phone_number,
      dob: dob,
      bloodGroup: blood_group,
      age: age,
      height: height,
      currentWeight: current_weight,
      normalWeight: normal_weight,
      weight_6_month_ago
    });
  }

  if (action.type === _action__WEBPACK_IMPORTED_MODULE_0__/* .GET_DOCTOR_ID_SUCCESS */ .C8) {
    console.log(action.payload);
    return _objectSpread(_objectSpread({}, state), {}, {
      uniqueDoctorId: action.payload
    });
  }

  if (action.type === "SET_AGREE") {
    return _objectSpread(_objectSpread({}, state), {}, {
      agree: action.payload
    });
  }

  if (action.type === "GET_TEST_REPORTS_SUCCESS") {
    return _objectSpread(_objectSpread({}, state), {}, {
      imageData: action.payload.url
    });
  }

  if (action.type === "GET_ARRAY_OF_OBJECT_SUCCESS") {
    return _objectSpread(_objectSpread({}, state), {}, {
      details: action.payload
    });
  }

  if (action.type === "GET_ADMIN_HOME_SUCCESS") {
    return _objectSpread(_objectSpread({}, state), {}, {
      adminDetails: action.payload
    });
  }

  if (action.type === "GET_RECIPE_SUCCESS") {
    return _objectSpread(_objectSpread({}, state), {}, {
      recipeData: action.payload
    });
  } // if ((action.type = "SET_QUERY_ID")) {
  //   return {
  //     ...state,
  //     queryId: action.payload,
  //   };
  // }


  if (action.type = "GET_COMMON_DATA_SUCCESS") {
    return _objectSpread(_objectSpread({}, state), {}, {
      commonData: action.payload
    });
  } //  code merge nutrition and recipe


  if (action.type === "GET_NUTRITION_SUCESS") {
    return _objectSpread(_objectSpread({}, state), {}, {
      nutritionData: action.payload
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ })

};
;