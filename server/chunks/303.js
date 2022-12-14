"use strict";
exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 6343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrappers = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Recipes__Wrappers",
  componentId: "sc-d35hbg-0"
})(["margin-top:5rem;@import url(\"https://fonts.googleapis.com/css2?family=poppins&display=swap\");body{font-family:\"poppins\";background-color:#fafafa;}.weekRecipe{display:flex;flex-direction:row;justify-content:space-evenly;margin-left:100px;margin-right:80px;}.weekRecipe .tag{color:green;font-size:20px;}.weekRecipe span,.trendingRecipe span{font-size:30;}.weekRecipe .details,.trendingRecipe .details{font-size:20;color:gray;}.weekRecipe button,.trendingRecipe button{text-align:center;justify-content:center;background-color:green;border:none;border-radius:8px;width:230px;height:59px;color:white;margin-top:1.3rem;font-size:18px;}.weekRecipe img{width:739px;height:600px;margin-bottom:20px;}.trendingRecipe{display:flex;flex-direction:row;background-color:#ffffff;border:2px none;height:422px;margin-left:40px;margin-right:70px;}.trendingRecipe img{width:709px;height:441;}.trendingRecipe .tag{color:green;font-size:20px;}@media only screen and (max-width:600px){.weekRecipe{display:flex;flex-direction:column-reverse;justify-content:space-evenly;margin-left:20px;margin-right:20px;}.weekRecipe img{width:280px;height:292px;margin-bottom:20px;margin-top:20px;}.trendingRecipe{display:flex;flex-direction:column;background-color:#ffffff;border:2px none;width:100%;height:422px;margin-left:10px;margin-right:10px;}.trendingRecipe img{width:100%;height:441px;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrappers);

/***/ }),

/***/ 4303:
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
/* harmony import */ var _assets_wrappers_Recipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6343);
/* harmony import */ var _assets_image_recipeCircle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4896);
/* harmony import */ var _assets_image_recipeRectangle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8652);
/* harmony import */ var _utils_recipeData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2530);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Recipes = () => {
  // const [recipeData, setRecipeData] = useState([]);
  // useEffect(() => {
  //   const getRecipeData = async () => {
  //     const { data } = await axios.get(
  //       "http://doctor.brandimagetech.com/recipes.php?api_key=GET"
  //     );
  //     setRecipeData(data.data);
  //   };
  //   getRecipeData();
  // }, []);
  // console.log(recipeData);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_assets_wrappers_Recipes__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    children: _utils_recipeData__WEBPACK_IMPORTED_MODULE_6__/* .recipeData.map */ .J.map(item => {
      const {
        Srno,
        RecipeName,
        TranslatedRecipeName,
        Ingredients,
        TranslatedIngredients,
        PrepTimeInMins,
        CookTimeInMins,
        TotalTimeInMins,
        Servings,
        Cuisine,
        Course,
        Diet,
        Instructions,
        TranslatedInstructions,
        URL
      } = item;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "weekRecipe",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: "tag",
              children: "Recipe of the week"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              children: RecipeName
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: "details",
              children: Instructions
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
              children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
                href: URL,
                children: "Get the Recipe"
              }), " "]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              src: _assets_image_recipeCircle_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "trendingRecipe",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "image",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              src: _assets_image_recipeRectangle_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: "tag",
              children: "Trending Recipe"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              children: "Four-Cheese Lasagna With Fresh Pasta"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: "details",
              children: "This is not your Aunt Mary\u2019s lasagna\u2014or one you\u2019ve likely encountered from any family member! There\u2019s no tomato sauce and no meat. Just fresh pasta sheets layered with four different kinds of delicious cheese"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: "details",
              children: "This lasagna is golden with crispy-chewy edges on top and creamy insides in the middle. This makes a heavenly and"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
              children: "Get the Recipe"
            })]
          })]
        })]
      });
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recipes);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ recipeData)
/* harmony export */ });
const recipeData = [{
  Srno: "1",
  RecipeName: "Masala Karela Recipe",
  TranslatedRecipeName: "Masala Karela Recipe",
  Ingredients: "6 Karela (Bitter Gourd/ Pavakkai) - deseeded,Salt - to taste,1 Onion - thinly sliced,3 tablespoon Gram flour (besan),2 teaspoons Turmeric powder (Haldi),1 tablespoon Red Chilli powder,2 teaspoons Cumin seeds (Jeera),1 tablespoon Coriander Powder (Dhania),1 tablespoon Amchur (Dry Mango Powder),Sunflower Oil - as required",
  TranslatedIngredients: "6 Karela (Bitter Gourd/ Pavakkai) - deseeded,Salt - to taste,1 Onion - thinly sliced,3 tablespoon Gram flour (besan),2 teaspoons Turmeric powder (Haldi),1 tablespoon Red Chilli powder,2 teaspoons Cumin seeds (Jeera),1 tablespoon Coriander Powder (Dhania),1 tablespoon Amchur (Dry Mango Powder),Sunflower Oil - as required",
  PrepTimeInMins: "15",
  CookTimeInMins: "30",
  TotalTimeInMins: "45",
  Servings: "6",
  Cuisine: "Indian",
  Course: "Side Dish",
  Diet: "Diabetic Friendly",
  Instructions: "To begin making the Masala Karela Recipe,de-seed the karela and slice. Do not remove the skin as the skin has all the nutrients. Add the karela to the pressure cooker with 3 tablespoon of water, salt and turmeric powder and pressure cook for three whistles. Release the pressure immediately and open the lids. Keep aside.Heat oil in a heavy bottomed pan or a kadhai. Add cumin seeds and let it sizzle.Once the cumin seeds have sizzled, add onions and saute them till it turns golden brown in color.Add the karela, red chilli powder, amchur powder, coriander powder and besan. Stir to combine the masalas into the karela.Drizzle a little extra oil on the top and mix again. Cover the pan and simmer Masala Karela stirring occasionally until everything comes together well. Turn off the heat.Transfer Masala Karela into a serving bowl and serve.Serve Masala Karela along with Panchmel Dal and Phulka for a weekday meal with your family. \r\n",
  TranslatedInstructions: "To begin making the Masala Karela Recipe,de-seed the karela and slice. Do not remove the skin as the skin has all the nutrients. Add the karela to the pressure cooker with 3 tablespoon of water, salt and turmeric powder and pressure cook for three whistles. Release the pressure immediately and open the lids. Keep aside.Heat oil in a heavy bottomed pan or a kadhai. Add cumin seeds and let it sizzle.Once the cumin seeds have sizzled, add onions and saute them till it turns golden brown in color.Add the karela, red chilli powder, amchur powder, coriander powder and besan. Stir to combine the masalas into the karela.Drizzle a little extra oil on the top and mix again. Cover the pan and simmer Masala Karela stirring occasionally until everything comes together well. Turn off the heat.Transfer Masala Karela into a serving bowl and serve.Serve Masala Karela along with Panchmel Dal and Phulka for a weekday meal with your family. ",
  URL: "https://www.archanaskitchen.com/masala-karela-recipe"
}];

/***/ }),

/***/ 4896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/recipeCircle.36920129.svg","height":752,"width":734});

/***/ }),

/***/ 8652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/recipeRectangle.d9a5dbd8.svg","height":550,"width":817});

/***/ })

};
;