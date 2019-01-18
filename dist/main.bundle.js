/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/bg-funfacts.jpg":
/*!*****************************!*\
  !*** ./img/bg-funfacts.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ef733a77da3f852cb8fab1275be28061.jpg";

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./scss/style.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./scss/style.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:400,700,600,300|Playfair+Display:700italic,400italic|Crimson+Text:400italic,600italic|Open+Sans:400,700);", ""]);
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../img/bg-funfacts.jpg */ "./img/bg-funfacts.jpg"));

// Module
exports.push([module.i, "/*=======================================================================\n\tFONTS\n=======================================================================*/\n/*=======================================================================\n\tColours\n=======================================================================*/\n/*=======================================================================\n\tGeneral CSS\n=======================================================================*/\n* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  font-family: \"Open Sans\", sans-serif; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-weight: bold;\n  font-family: \"Raleway\", sans-serif; }\n\nimg {\n  max-width: 100%; }\n\n.parallax {\n  background-size: cover; }\n\nbody.section-show {\n  overflow: hidden; }\n\nbody a.close-btn,\nbody.section-show .close-btn {\n  opacity: 1;\n  z-index: 100;\n  transition: opacity 0.4s 1.2s ease, background 0.3s ease;\n  overflow: hidden; }\n\n.close-btn {\n  position: fixed;\n  height: 64px;\n  width: 64px;\n  cursor: pointer;\n  display: block;\n  top: 18px;\n  right: 18px;\n  opacity: 0;\n  z-index: -99; }\n\n.close-btn > span {\n  height: 3px;\n  width: 40px;\n  background: #bbb;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -20px;\n  margin-top: -1.5px; }\n\n.close-btn > span:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  width: 0;\n  height: inherit;\n  background: #b7a389; }\n\n.close-btn > span:nth-of-type(1) {\n  transform: rotate(45deg); }\n\n.close-btn > span:nth-of-type(2) {\n  transform: rotate(-45deg); }\n\n.close-btn > span:nth-of-type(1):before {\n  left: 0; }\n\n.close-btn > span:nth-of-type(2):before {\n  right: 0; }\n\n.close-btn:hover > span {\n  background: transparent; }\n\n.close-btn:hover > span:before {\n  transition: all 0.3s ease;\n  width: 100%; }\n\n.close-btn:hover > span:nth-of-type(2):before {\n  transition-delay: 0.3s; }\n\n.section-header h2 {\n  font-size: 32px;\n  letter-spacing: 6px;\n  color: #333;\n  margin-top: 0;\n  margin-bottom: 35px;\n  font-weight: 300; }\n\n.section-header p {\n  margin-top: 30px;\n  line-height: 1.7em;\n  color: #8a8a8a;\n  font-size: 16px; }\n\n#wrapper {\n  overflow-x: hidden; }\n\n.front-section {\n  background: url(\"https://www.toptal.com/designers/subtlepatterns/patterns/white-waves.png\"); }\n\n.section {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border: solid 4px #bbb;\n  padding-top: 100px;\n  z-index: -9;\n  background: #fff;\n  overflow-y: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease; }\n\nbody.section-show .section.active {\n  transition: opacity 0.4s 1.2s ease;\n  z-index: 99;\n  opacity: 1;\n  visibility: visible; }\n\n.bg-lightgray {\n  background: #f5f5f5; }\n\n.footer {\n  padding: 30px 0;\n  background: #fff;\n  border-top: solid 1px #f0f0f0; }\n\n.footer h4 {\n  font-size: 18px;\n  letter-spacing: 4px;\n  margin: 0;\n  margin-top: 3.5px;\n  font-style: italic;\n  font-family: \"Playfair Display\", serif;\n  color: #999; }\n\n.footer-social {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 0; }\n\n.footer-social > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  margin-left: 30px; }\n\n.footer-social > li > a {\n  text-decoration: none;\n  height: 26px;\n  width: 26px;\n  line-height: 26px;\n  vertical-align: middle;\n  transform: rotate(45deg);\n  transition: all 0.3s ease-in-out;\n  display: block;\n  text-align: center;\n  color: #bbb;\n  background: #f0f0f0;\n  font-size: 0; }\n\n.footer-social > li > a > i {\n  transform: rotate(-45deg);\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  line-height: inherit;\n  width: inherit;\n  height: inherit;\n  vertical-align: middle; }\n\n.footer-social > li > a > i:before {\n  font-size: 14px;\n  line-height: 1em;\n  vertical-align: middle; }\n\n.footer-social > li > a:hover {\n  background: #b7a389;\n  color: #fff; }\n\n.section-block > .container,\n.section-block {\n  position: relative; }\n\n.section-block {\n  overflow: hidden; }\n\n#diamond-wrapper {\n  margin-top: -75px; }\n\n/*=======================================================================\n\tPreloader\n=======================================================================*/\n.js #preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n  z-index: 199;\n  transition: all 0.5s ease; }\n\n.js #preloader .loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.js body.loaded #preloader {\n  transform: scale(0.6) translateY(-100%);\n  opacity: 0;\n  visibility: hidden;\n  z-index: -1; }\n\n.no-js #preloader {\n  display: none; }\n\n.divider-draft {\n  position: relative;\n  height: 2px;\n  background: #333;\n  width: 40px;\n  display: block;\n  margin: 15px 0; }\n\n.divider-draft:before,\n.divider-draft:after {\n  content: \" \";\n  width: 25px;\n  height: 1px;\n  background: #333;\n  position: absolute;\n  left: 0; }\n\n.divider-draft.center {\n  margin: auto; }\n\n.divider-draft.center:before,\n.divider-draft.center:after {\n  right: 0;\n  margin: auto; }\n\n.divider-draft:before {\n  top: -6px; }\n\n.divider-draft:after {\n  bottom: -6px; }\n\n/*=======================================================================\n\tFront Section\n=======================================================================*/\nbody.section-show .transition-mask {\n  position: absolute;\n  top: 260px;\n  height: 500px;\n  width: 500px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 22;\n  transform: rotate(45deg);\n  overflow: hidden;\n  animation: fill2 0.8s 0.4s both ease; }\n\nbody .transition-mask:before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%; }\n\nbody.section-show .transition-mask:before {\n  animation: fill 0.4s both ease;\n  background: #ccc; }\n\n@keyframes fill2 {\n  0% {\n    transform: rotate(45deg); }\n  100% {\n    z-index: 50;\n    transform: rotate(0deg);\n    height: 100%;\n    width: 100%;\n    top: 0;\n    bottom: auto; } }\n\n@keyframes fill {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n.front-section {\n  padding-bottom: 200px;\n  position: relative; }\n\n.front-heading {\n  text-align: center;\n  margin-top: 190px; }\n\n.front-heading > h2 {\n  font-size: 55px;\n  font-weight: lighter;\n  letter-spacing: 15px;\n  position: relative;\n  position: relative;\n  line-height: 1em;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  z-index: 10;\n  color: #999;\n  font-family: \"Playfair Display\", serif;\n  font-style: italic; }\n\n.front-person-img {\n  width: 500px;\n  height: 500px;\n  overflow: hidden;\n  background: #f0f0f0;\n  position: relative;\n  z-index: 15;\n  transition: height 0.5s 0.3s ease, transform 0.5s 0.8s ease;\n  margin: 200px auto;\n  margin-bottom: 0;\n  transform: rotate(405deg);\n  border-left: solid 10px #c7ad88;\n  border-right: solid 10px #ede9ce;\n  border-bottom: solid 10px #64706c;\n  border-top: solid 10px #935347; }\n\n.front-person-img > img {\n  width: 500px;\n  height: 500px;\n  overflow: hidden;\n  position: relative;\n  padding: 50px;\n  transform: rotate(-90deg); }\n\n.front-person-titles {\n  position: relative;\n  z-index: 10;\n  height: 500px;\n  width: 500px;\n  margin: auto;\n  margin-top: -500px;\n  transform: rotate(45deg); }\n\n.front-person-titles > span {\n  position: absolute;\n  z-index: 5;\n  display: block;\n  width: 100%;\n  font-family: Hind, sans-serif;\n  color: #ccc;\n  text-align: center;\n  font-size: 24px;\n  letter-spacing: 25px;\n  line-height: 1em;\n  text-transform: lowercase; }\n\n.front-person-titles > .t1 {\n  left: 5px;\n  bottom: 0;\n  transform: rotate(-90deg) translateY(-100%);\n  transform-origin: 0% 0%; }\n\n.front-person-titles > .t2 {\n  top: 5px;\n  left: 0;\n  transform: translateY(-100%); }\n\n.front-person-titles > .t3 {\n  left: 0;\n  bottom: 5px;\n  transform: translateY(100%) rotate(180deg); }\n\n.front-person-links {\n  margin: auto;\n  width: 500px;\n  height: 500px;\n  margin-top: -500px;\n  z-index: 25;\n  transform: rotate(45deg);\n  position: relative; }\n\n.front-person-links > ul > li {\n  display: block; }\n\n.front-person-links > ul {\n  font-size: 0;\n  z-index: 99;\n  position: absolute;\n  text-align: left;\n  white-space: nowrap;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: -15px; }\n\n.front-person-links > ul > li > a {\n  font-weight: bold;\n  display: block;\n  font-size: 14px;\n  padding: 25px 0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  color: #999;\n  text-align: left;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  text-decoration: none;\n  line-height: 1em; }\n\n.front-person-links > ul > li > a:before,\n.front-person-links > ul > li > a:after {\n  content: \" \";\n  height: 6px;\n  width: 15px;\n  background: #ccc;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  vertical-align: middle;\n  margin-right: 15px;\n  font-size: 0;\n  transition: all 0.3s ease;\n  display: none; }\n\n.front-person-links > ul > li > a:after {\n  margin-left: 15px;\n  margin-right: 0;\n  display: none; }\n\n.front-person-links > ul > li > a:hover {\n  color: #b7a389; }\n\n.front-person-links > ul > li > a:hover:after,\n.front-person-links > ul > li > a:hover:before {\n  width: 25px;\n  background: #999; }\n\n/*=======================================================================\n\tAbout Section\n=======================================================================*/\n.about-section {\n  padding-top: 0; }\n\n.about-icons {\n  padding-top: 110px;\n  padding-bottom: 0px; }\n\n.basic-info {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  position: relative;\n  border-bottom: solid 1px #f0f0f0; }\n\n.basic-info .section-header {\n  margin-bottom: 80px; }\n\n.about-info > p {\n  line-height: 1.8em;\n  margin-top: -0.4em; }\n\n.about-person-img {\n  text-align: center; }\n\n.about-person-img > img {\n  max-width: 100%; }\n\n.info-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  z-index: 10;\n  margin-top: 20px;\n  margin-bottom: 60px; }\n\n.info-list:before,\n.info-list:after {\n  content: \" \";\n  display: table; }\n\n.info-list:after {\n  clear: both; }\n\n.info-list > li {\n  margin-bottom: 20px;\n  float: left;\n  width: 25%; }\n\n.info-list > li > .inner {\n  padding: 15px 0; }\n\n.info-list > li > * {\n  line-height: 1em;\n  margin: 0; }\n\n.info-list > li > .inner > h4 {\n  font-size: 13px;\n  letter-spacing: 4px;\n  margin-right: 16px;\n  margin-bottom: 8px;\n  display: block;\n  color: #333; }\n\n.info-list > li > .inner > p {\n  font-size: 16px;\n  color: #777;\n  display: block; }\n\n.funfacts-block {\n  padding-top: 60px;\n  padding-bottom: 20px;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: cover;\n  background-attachment: fixed; }\n\n.funfact {\n  position: relative;\n  text-align: center;\n  margin-bottom: 40px; }\n\n.funfact:after {\n  content: \" \";\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  right: -10px;\n  top: 50%;\n  margin-top: -10px;\n  border: solid 1px #fff;\n  transform: rotate(45deg);\n  opacity: 0.4;\n  filter: Alpha(opacity=40); }\n\n.funfact:last-of-type:after {\n  display: none; }\n\n@media (max-width: 992px) {\n  .funfact:nth-of-type(2):after {\n    display: none; } }\n\n@media (max-width: 768px) {\n  .funfact:after {\n    display: none; } }\n\n.funfact > .content > h4 {\n  margin: 0;\n  color: #fff;\n  font-size: 55px;\n  margin-bottom: 5px; }\n\n.funfact > .content > p {\n  color: #fff;\n  letter-spacing: 2px;\n  margin-bottom: 0;\n  font-size: 13px;\n  opacity: 0.8; }\n\n.testimonials-block {\n  padding: 100px 0; }\n\n.testimonials-block .section-header {\n  margin-bottom: 45px; }\n\n.testimonials-slider {\n  position: relative; }\n\n.testimonial {\n  text-align: center; }\n\n.testimonial > p {\n  font-size: 22px;\n  line-height: 1.6em;\n  color: #777;\n  font-family: Crimson text, serif;\n  font-weight: lighter;\n  font-style: italic; }\n\n.testimonial > .author {\n  margin-top: 45px; }\n\n.testimonial > .author > h4 {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 14px; }\n\n.testimonial > .author > p {\n  color: #777; }\n\n.testimonials-slider .owl-controls {\n  margin-top: 27px; }\n\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page > span {\n  height: 16px;\n  width: 16px;\n  border-radius: 0;\n  border: solid 1px #b7a389;\n  transform: rotate(-45deg);\n  margin: 11px;\n  background: transparent;\n  opacity: 0.6;\n  transition: all 0.3s ease; }\n\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page.active > span,\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page:hover > span {\n  background: #b7a389;\n  opacity: 0.8; }\n\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page.active > span {\n  opacity: 1; }\n\n/*=======================================================================\n\tResume Section\n=======================================================================*/\n.timeline-block {\n  padding-bottom: 100px; }\n\n.timeline-block .timeline {\n  padding-bottom: 90px;\n  margin-top: 100px; }\n\n.timeline {\n  position: relative;\n  list-style: none;\n  margin: 0; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -1px;\n  height: 100%;\n  width: 2px;\n  background: #bbb;\n  border-radius: 0 0 5px 5px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-desc {\n  float: right; }\n\n.timeline > li > .timeline-desc > h4 {\n  font-size: 14px;\n  letter-spacing: 2px;\n  margin-top: 0; }\n\n.timeline > li > .timeline-content {\n  float: left;\n  text-align: right;\n  position: relative; }\n\n.timeline > li.inverse > .timeline-content {\n  float: right;\n  text-align: left; }\n\n.timeline > li.inverse > .timeline-desc {\n  float: left;\n  text-align: right; }\n\n.timeline > li {\n  margin: 70px 0;\n  position: relative; }\n\n.timeline > li:not(.timeline-header):before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 11px;\n  width: 11px;\n  transform: translateX(-50%) rotate(45deg);\n  background: #b7a389; }\n\n.timeline > li > div {\n  width: 50%;\n  padding: 0 35px; }\n\n.timeline > li > .timeline-content > h4 {\n  margin-top: 0;\n  margin-bottom: 7px;\n  letter-spacing: 2px;\n  font-size: 20px; }\n\n.timeline > li > .timeline-content > span {\n  display: block;\n  margin-bottom: 15px;\n  color: #bbb; }\n\n.timeline > li > .timeline-content > p {\n  margin: 0;\n  line-height: 1.7em;\n  color: #777; }\n\n.timeline > li.timeline-header {\n  background: #fff;\n  position: relative;\n  z-index: 10;\n  text-align: center;\n  margin-bottom: 100px;\n  margin-top: 100px; }\n\n.timeline > li.timeline-header > h4 {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 16px;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  position: relative;\n  margin: 0;\n  letter-spacing: 4px; }\n\n.timeline > li.timeline-header:first-of-type {\n  margin-top: 0; }\n\n.timeline > li.timeline-header > h4:before,\n.timeline > li.timeline-header > h4:after {\n  content: \" \";\n  display: block;\n  height: 2px;\n  background: #bbb;\n  margin: 0 -5px;\n  margin-top: 8px; }\n\n.timeline > li.timeline-header > h4:before {\n  margin-top: 0;\n  margin-bottom: 8px; }\n\n@media (max-width: 992px) {\n  .timeline > li:before,\n  .timeline:before {\n    display: none; }\n  .timeline > li > .timeline-desc {\n    opacity: 0.5;\n    text-align: right;\n    float: left; }\n  .timeline > li.inverse > .timeline-desc {\n    text-align: left;\n    float: right; }\n  .timeline > li > div {\n    width: 85%;\n    float: none;\n    display: block;\n    margin-left: auto;\n    margin-right: auto; }\n  .timeline > li > .timeline-content {\n    text-align: right; } }\n\n.hobbies-block {\n  padding-top: 100px;\n  padding-bottom: 30px; }\n\n.hobbies-block .section-header {\n  margin-bottom: 100px; }\n\n.hobby {\n  position: relative;\n  text-align: center;\n  margin-bottom: 70px;\n  transition: all 0.3s ease-in-out; }\n\n.hobby > .icon {\n  font-size: 0;\n  background: #b7a389;\n  color: #fff;\n  transform: rotate(45deg);\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  margin: auto;\n  margin-bottom: 40px;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  top: 0; }\n\n.hobby:hover > .icon {\n  top: -15px; }\n\n.hobby > .icon > i {\n  display: block;\n  height: inherit;\n  width: inherit;\n  line-height: inherit;\n  text-align: center;\n  transform: rotate(-45deg); }\n\n.hobby > .icon > i:before {\n  vertical-align: middle;\n  font-size: 45px;\n  line-height: 1em; }\n\n.hobby > h4 {\n  font-size: 18px;\n  letter-spacing: 2px;\n  margin-top: 0;\n  margin-top: 2px; }\n\n.skills-block {\n  padding: 100px 0;\n  padding-bottom: 40px; }\n\n.skills-block .section-header {\n  margin-bottom: 80px; }\n\n.skill {\n  position: relative;\n  margin-bottom: 60px; }\n\n.skill > h4 {\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  letter-spacing: 2px;\n  color: #b7a389; }\n\n.skill > .skill-bar {\n  height: 10px;\n  background: #f0f0f0; }\n\n.skill > .skill-bar > .bar {\n  background: #888;\n  height: 100%;\n  width: 0;\n  position: relative; }\n\n.skill > .skill-bar > .bar > .percent {\n  position: absolute;\n  padding: 4px 7px;\n  background: #888;\n  color: #fff;\n  bottom: 100%;\n  right: 0;\n  font-size: 11px;\n  margin-bottom: 10px; }\n\n.skill > .skill-bar > .bar > .percent:after {\n  content: \" \";\n  position: absolute;\n  border-bottom: solid 7px transparent;\n  border-right: solid 7px #888;\n  bottom: -7px;\n  right: 0; }\n\n/*=======================================================================\n\tServices Section\n=======================================================================*/\n.services-section .main-title {\n  margin-bottom: 80px; }\n\n.services-block {\n  padding-top: 50px;\n  padding-bottom: 0;\n  border-bottom: solid 1px #f0f0f0; }\n\n.service {\n  position: relative;\n  text-align: center;\n  margin-bottom: 120px; }\n\n.service > .icon {\n  transform: rotate(45deg);\n  height: 90px;\n  width: 90px;\n  line-height: 90px;\n  vertical-align: middle;\n  text-align: center;\n  margin: auto;\n  transition: all 0.3s ease-in-out;\n  font-size: 0;\n  background: #b7a389;\n  color: #fff;\n  position: relative;\n  top: 0; }\n\n.service:hover > .icon {\n  top: -15px; }\n\n.service > .icon > i:before {\n  line-height: 1em;\n  vertical-align: middle;\n  font-size: 45px; }\n\n.service > .icon > i {\n  display: inline-block;\n  line-height: inherit;\n  height: inherit;\n  width: inherit;\n  transform: rotate(-45deg); }\n\n.service > .content > h4 {\n  font-size: 20px;\n  margin-top: 50px;\n  margin-bottom: 8px;\n  letter-spacing: 2px; }\n\n.service > .content > p {\n  line-height: 1.6em;\n  color: #777; }\n\n.pricing-block {\n  padding: 120px 0; }\n\n.pricing-block .section-header {\n  margin-bottom: 90px; }\n\n.pricing-table {\n  max-width: 300px;\n  margin: auto;\n  background: #f4f4f4;\n  padding: 35px 0;\n  transition: all 0.3s ease; }\n\n.pricing-table > .header > h4 {\n  font-size: 18px;\n  text-transform: uppercase;\n  margin: 0; }\n\n.pricing-table > .header > .price {\n  margin-bottom: 30px;\n  margin-top: 30px; }\n\n.pricing-table > .header > .price > span {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  line-height: 1em; }\n\n.pricing-table > .header > .price > .currency {\n  vertical-align: top;\n  margin-top: 12px; }\n\n.pricing-table > .header > .price > .amount {\n  font-weight: bold;\n  font-size: 80px; }\n\n.pricing-table > .header > .price > .period {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 12px; }\n\n.pricing-table > .table-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 25px;\n  margin-bottom: 30px; }\n\n.pricing-table > .table-items > li {\n  padding: 10px 0; }\n\n.pricing-table > .table-btn {\n  padding: 11px 22px;\n  background: #333;\n  color: #fff;\n  text-decoration: none;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  transition: all 0.3s ease; }\n\n.pricing-table > .table-btn:hover {\n  background: #b7a389; }\n\n.process-block {\n  padding: 100px 0; }\n\n.process-block .section-header {\n  margin-bottom: 80px; }\n\n.process {\n  position: relative; }\n\n.process > .number {\n  font-size: 16px;\n  font-weight: bold;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  line-height: 1em;\n  margin-bottom: 15px;\n  position: relative;\n  transform: rotate(45deg);\n  border: solid 1px #b7a389;\n  transition: all 0.3s ease-in-out;\n  color: #b7a389; }\n\n.process:hover > .number {\n  color: #fff;\n  background: #b7a389; }\n\n.process > .number > span {\n  transform: rotate(-45deg);\n  display: block;\n  height: 28px;\n  width: 28px;\n  line-height: 28px;\n  text-align: center;\n  position: relative; }\n\n.process > .number > span:before {\n  content: \" \";\n  border-top: solid 8px transparent;\n  border-bottom: solid 8px transparent;\n  border-left: solid 8px #b7a389;\n  position: absolute;\n  top: 50%;\n  margin-top: -8px;\n  right: -43px; }\n\n.process.last > .number > span:before {\n  border: solid 4px #b7a389;\n  margin-top: -4px; }\n\n.process > .number > span:after {\n  content: \" \";\n  position: absolute;\n  height: 2px;\n  background: #b7a389;\n  width: 30px;\n  right: -35px;\n  top: 50%;\n  margin-top: -1px; }\n\n.process > .content > h4 {\n  font-size: 20px;\n  letter-spacing: 2px;\n  margin-bottom: 15px; }\n\n.process > .content > p {\n  line-height: 1.7em;\n  color: #777; }\n\n/*=======================================================================\n\tBlog Section\n=======================================================================*/\n.posts-block {\n  padding: 90px 0; }\n\n.posts-block .section-header {\n  margin-bottom: 60px; }\n\n.post {\n  position: relative;\n  margin-bottom: 60px; }\n\n.post > .media > img {\n  max-width: 100%; }\n\n.post > .content {\n  margin-top: 25px; }\n\n.post > .content > h4 {\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 8px; }\n\n.post > .content > h4 > a {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s ease; }\n\n.post > .content > h4 > a:hover {\n  color: #b7a389; }\n\n.post > .content > p {\n  line-height: 1.8em;\n  color: #777;\n  margin-bottom: 22px; }\n\n.post .post-icons {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n  margin-bottom: 22px; }\n\n.post .post-icons > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  font-size: 14px;\n  color: #777;\n  padding-right: 20px; }\n\n.post .post-icons > li > i {\n  margin-right: 5px; }\n\n.post .read-more {\n  color: #333;\n  text-decoration: none;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1; }\n\n.post .read-more:hover {\n  color: #b7a389; }\n\n.post .read-more > i {\n  vertical-align: middle;\n  font-size: 1.5em;\n  margin-left: 8px;\n  position: relative; }\n\n.post-more {\n  text-align: center;\n  margin-bottom: 50px; }\n\n.post-more .more-link,\nbody .symp-btn {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  padding: 12px 22px;\n  background: #333;\n  color: #fff;\n  transition: all 0.3s ease;\n  border: none;\n  text-decoration: none !important; }\n\n.post-more .more-link:hover,\n.symp-btn:hover {\n  background: #b7a389;\n  color: #fff; }\n\n.symp-btn.link-btn {\n  background: transparent;\n  color: #999; }\n\n.symp-btn.link-btn > i {\n  margin-right: 8px; }\n\n.symp-btn.link-btn:hover {\n  color: #333;\n  background: transparent; }\n\n.sidebar {\n  position: relative; }\n\n@media (min-width: 992px) {\n  .sidebar {\n    padding-left: 40px; } }\n\n.search-box {\n  position: relative; }\n\n.search-box > .search-input {\n  display: block;\n  width: 100%;\n  border: none;\n  padding: 0 9px;\n  height: 40px;\n  line-height: 40px;\n  padding-right: 47px;\n  background: #f0f0f0;\n  border: solid 1px #f0f0f0;\n  transition: all 0.3s ease; }\n\n.search-box > .search-input:focus {\n  background: #fff; }\n\n.search-box > .search-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  background: #e0e0e0;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 20px;\n  color: #333;\n  text-decoration: none; }\n\n.search-box > .search-btn:hover {\n  background: #d0d0d0; }\n\n.widget-header {\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: 15px; }\n\n.widget-header > h4 {\n  letter-spacing: 2px; }\n\n.widget-header > h4 > i {\n  margin-right: 8px; }\n\n.sidebar-list {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.sidebar-list > li > a {\n  padding: 7px 0;\n  color: #777;\n  text-decoration: none;\n  display: block;\n  line-height: 1.6em; }\n\n.sidebar-list > li > a:hover {\n  color: #b7a389; }\n\n.sidebar-list.list-inline {\n  font-size: 0; }\n\n.sidebar-list.list-inline > li {\n  font-size: 14px; }\n\n/*=======================================================================\n\tPortfolio Section\n=======================================================================*/\n.portfolio-block {\n  padding-bottom: 100px; }\n\n.portfolio-block .section-header {\n  margin-bottom: 45px; }\n\n.portfolio-items > .item {\n  width: 33.333%;\n  position: relative; }\n\n@media (max-width: 992px) {\n  .portfolio-items > .item {\n    width: 50%; } }\n\n@media (max-width: 768px) {\n  .portfolio-items > .item {\n    width: 100%; } }\n\n.portfolio-items > .item > .inner > img {\n  width: 100%; }\n\n.portfolio-items > .item > .inner {\n  position: relative; }\n\n.portfolio-items > .item > .inner > .caption {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #333;\n  background: rgba(51, 51, 51, 0.8);\n  color: #fff;\n  text-align: center;\n  z-index: 10;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease; }\n\n.portfolio-items > .item > .inner:hover > .caption {\n  opacity: 1;\n  visibility: visible; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 75%; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > h4 {\n  font-size: 22px;\n  margin: 0;\n  margin-bottom: 30px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(15px);\n  transition: all 0.3s 0.1s ease; }\n\n.portfolio-items > .item > .inner:hover > .caption > .caption-inner > h4 {\n  transform: translateY(0);\n  opacity: 1;\n  visibility: visible; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links {\n  list-style: none;\n  color: #fff; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  margin: 0 11px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(15px);\n  transition: all 0.3s 0.2s ease; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li:nth-of-type(2) {\n  transition-delay: 0.3s; }\n\n.portfolio-items > .item > .inner:hover > .caption > .caption-inner > .links > li {\n  transform: translateY(0);\n  opacity: 1;\n  visibility: visible; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a {\n  display: block;\n  height: 30px;\n  width: 30px;\n  line-height: 30px;\n  font-size: 0;\n  border: solid 1px #fff;\n  color: #fff;\n  transform: rotate(45deg); }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a > i {\n  display: block;\n  height: inherit;\n  width: inherit;\n  line-height: inherit;\n  vertical-align: middle;\n  transform: rotate(-45deg); }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a > i:before {\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 1em; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a:hover {\n  background: #fff;\n  background: rgba(255, 255, 255, 0.9);\n  color: #333; }\n\n#portfolio-filters {\n  text-align: center;\n  margin-bottom: 45px; }\n\n#portfolio-filters > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 0; }\n\n#portfolio-filters > ul > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  font-size: 14px;\n  padding: 0 26px;\n  position: relative; }\n\n#portfolio-filters > ul > li:last-of-type:after {\n  display: none; }\n\n#portfolio-filters > ul > li:after {\n  content: \" \";\n  position: absolute;\n  right: -9px;\n  top: 50%;\n  margin-top: -3px;\n  height: 6px;\n  width: 6px;\n  border: solid 1px #e5e5e5;\n  transform: rotate(45deg); }\n\n#portfolio-filters > ul > li > a {\n  display: block;\n  color: #999;\n  text-decoration: none; }\n\n#portfolio-filters > ul > li > a:hover,\n#portfolio-filters > ul > li > a.active {\n  color: #333; }\n\n#portfolio-filters > ul > li > a.active {\n  text-decoration: line-through; }\n\n/*=======================================================================\n\tContact Section\n=======================================================================*/\n.contact-block {\n  padding-bottom: 100px; }\n\n.contact-section .section-header {\n  margin-bottom: 60px; }\n\n.form-control {\n  padding: 10px;\n  height: auto;\n  border: solid 1px #bbb;\n  box-shadow: none;\n  border-radius: 0;\n  vertical-align: middle; }\n\n.form-control:focus {\n  border-color: #b7a389;\n  box-shadow: none; }\n\n.contact-form .form-group {\n  margin-bottom: 25px; }\n\n.contact-form .alert {\n  border-radius: 0; }\n\n/*=======================================================================\n\tSingle Post Page\n=======================================================================*/\n.blog-page .post > .content > .post-icons {\n  margin-bottom: 30px; }\n\n.blog-page .post > .content > h4 {\n  font-size: 28px;\n  margin-bottom: 10px; }\n\n.blog-page .post > .content > p {\n  line-height: 2em;\n  text-align: justify; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./scss/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./js/main.js ./scss/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/main.js */"./js/main.js");
module.exports = __webpack_require__(/*! ./scss/style.scss */"./scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1nL2JnLWZ1bmZhY3RzLmpwZyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3M/YWZlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7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QUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBLGNBQWMsbUJBQU8sQ0FBQyx3TUFBaUc7O0FBRXZILDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlZjczM2E3N2RhM2Y4NTJjYjhmYWIxMjc1YmUyODA2MS5qcGdcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNzAwLDYwMCwzMDB8UGxheWZhaXIrRGlzcGxheTo3MDBpdGFsaWMsNDAwaXRhbGljfENyaW1zb24rVGV4dDo0MDBpdGFsaWMsNjAwaXRhbGljfE9wZW4rU2Fuczo0MDAsNzAwKTtcIiwgXCJcIl0pO1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltZy9iZy1mdW5mYWN0cy5qcGdcIikpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRGT05UU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Q29sb3Vyc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0R2VuZXJhbCBDU1NcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbi5oMSxcXG4uaDIsXFxuLmgzLFxcbi5oNCxcXG4uaDUsXFxuLmg2IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4ucGFyYWxsYXgge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxcblxcbmJvZHkuc2VjdGlvbi1zaG93IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG5ib2R5IGEuY2xvc2UtYnRuLFxcbmJvZHkuc2VjdGlvbi1zaG93IC5jbG9zZS1idG4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyAxLjJzIGVhc2UsIGJhY2tncm91bmQgMC4zcyBlYXNlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgd2lkdGg6IDY0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRvcDogMThweDtcXG4gIHJpZ2h0OiAxOHB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IC05OTsgfVxcblxcbi5jbG9zZS1idG4gPiBzcGFuIHtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtMS41cHg7IH1cXG5cXG4uY2xvc2UtYnRuID4gc3BhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiAjYjdhMzg5OyB9XFxuXFxuLmNsb3NlLWJ0biA+IHNwYW46bnRoLW9mLXR5cGUoMSkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuXFxuLmNsb3NlLWJ0biA+IHNwYW46bnRoLW9mLXR5cGUoMikge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbi5jbG9zZS1idG4gPiBzcGFuOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLmNsb3NlLWJ0biA+IHNwYW46bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcXG4gIHJpZ2h0OiAwOyB9XFxuXFxuLmNsb3NlLWJ0bjpob3ZlciA+IHNwYW4ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyID4gc3BhbjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNsb3NlLWJ0bjpob3ZlciA+IHNwYW46bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7IH1cXG5cXG4uc2VjdGlvbi1oZWFkZXIgaDIge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuXFxuLnNlY3Rpb24taGVhZGVyIHAge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXG4gIGNvbG9yOiAjOGE4YThhO1xcbiAgZm9udC1zaXplOiAxNnB4OyB9XFxuXFxuI3dyYXBwZXIge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuXFxuLmZyb250LXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3d3dy50b3B0YWwuY29tL2Rlc2lnbmVycy9zdWJ0bGVwYXR0ZXJucy9wYXR0ZXJucy93aGl0ZS13YXZlcy5wbmdcXFwiKTsgfVxcblxcbi5zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJvcmRlcjogc29saWQgNHB4ICNiYmI7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICB6LWluZGV4OiAtOTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cXG5cXG5ib2R5LnNlY3Rpb24tc2hvdyAuc2VjdGlvbi5hY3RpdmUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIDEuMnMgZWFzZTtcXG4gIHotaW5kZXg6IDk5O1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG5cXG4uYmctbGlnaHRncmF5IHtcXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7IH1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDMwcHggMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2YwZjBmMDsgfVxcblxcbi5mb290ZXIgaDQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDMuNXB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi5mb290ZXItc29jaWFsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAwOyB9XFxuXFxuLmZvb3Rlci1zb2NpYWwgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBtYXJnaW4tbGVmdDogMzBweDsgfVxcblxcbi5mb290ZXItc29jaWFsID4gbGkgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjYmJiO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGZvbnQtc2l6ZTogMDsgfVxcblxcbi5mb290ZXItc29jaWFsID4gbGkgPiBhID4gaSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG5cXG4uZm9vdGVyLXNvY2lhbCA+IGxpID4gYSA+IGk6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLmZvb3Rlci1zb2NpYWwgPiBsaSA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2I3YTM4OTtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnNlY3Rpb24tYmxvY2sgPiAuY29udGFpbmVyLFxcbi5zZWN0aW9uLWJsb2NrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zZWN0aW9uLWJsb2NrIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4jZGlhbW9uZC13cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IC03NXB4OyB9XFxuXFxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFByZWxvYWRlclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4uanMgI3ByZWxvYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgei1pbmRleDogMTk5O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTsgfVxcblxcbi5qcyAjcHJlbG9hZGVyIC5sb2FkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcblxcbi5qcyBib2R5LmxvYWRlZCAjcHJlbG9hZGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAtMTsgfVxcblxcbi5uby1qcyAjcHJlbG9hZGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZGl2aWRlci1kcmFmdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICB3aWR0aDogNDBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxNXB4IDA7IH1cXG5cXG4uZGl2aWRlci1kcmFmdDpiZWZvcmUsXFxuLmRpdmlkZXItZHJhZnQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLmRpdmlkZXItZHJhZnQuY2VudGVyIHtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbi5kaXZpZGVyLWRyYWZ0LmNlbnRlcjpiZWZvcmUsXFxuLmRpdmlkZXItZHJhZnQuY2VudGVyOmFmdGVyIHtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXFxuLmRpdmlkZXItZHJhZnQ6YmVmb3JlIHtcXG4gIHRvcDogLTZweDsgfVxcblxcbi5kaXZpZGVyLWRyYWZ0OmFmdGVyIHtcXG4gIGJvdHRvbTogLTZweDsgfVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRGcm9udCBTZWN0aW9uXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbmJvZHkuc2VjdGlvbi1zaG93IC50cmFuc2l0aW9uLW1hc2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNjBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB6LWluZGV4OiAyMjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBhbmltYXRpb246IGZpbGwyIDAuOHMgMC40cyBib3RoIGVhc2U7IH1cXG5cXG5ib2R5IC50cmFuc2l0aW9uLW1hc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5ib2R5LnNlY3Rpb24tc2hvdyAudHJhbnNpdGlvbi1tYXNrOmJlZm9yZSB7XFxuICBhbmltYXRpb246IGZpbGwgMC40cyBib3RoIGVhc2U7XFxuICBiYWNrZ3JvdW5kOiAjY2NjOyB9XFxuXFxuQGtleWZyYW1lcyBmaWxsMiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIHotaW5kZXg6IDUwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IGF1dG87IH0gfVxcblxcbkBrZXlmcmFtZXMgZmlsbCB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwJTsgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cXG4uZnJvbnQtc2VjdGlvbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uZnJvbnQtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxOTBweDsgfVxcblxcbi5mcm9udC1oZWFkaW5nID4gaDIge1xcbiAgZm9udC1zaXplOiA1NXB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICB6LWluZGV4OiAxMDtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWltZyB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxNTtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjVzIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuNXMgMC44cyBlYXNlO1xcbiAgbWFyZ2luOiAyMDBweCBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQwNWRlZyk7XFxuICBib3JkZXItbGVmdDogc29saWQgMTBweCAjYzdhZDg4O1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxMHB4ICNlZGU5Y2U7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxMHB4ICM2NDcwNmM7XFxuICBib3JkZXItdG9wOiBzb2xpZCAxMHB4ICM5MzUzNDc7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWltZyA+IGltZyB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XFxuXFxuLmZyb250LXBlcnNvbi10aXRsZXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogLTUwMHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuXFxuLmZyb250LXBlcnNvbi10aXRsZXMgPiBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IEhpbmQsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2NjYztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAyNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7IH1cXG5cXG4uZnJvbnQtcGVyc29uLXRpdGxlcyA+IC50MSB7XFxuICBsZWZ0OiA1cHg7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7IH1cXG5cXG4uZnJvbnQtcGVyc29uLXRpdGxlcyA+IC50MiB7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpOyB9XFxuXFxuLmZyb250LXBlcnNvbi10aXRsZXMgPiAudDMge1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogNXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZSgxODBkZWcpOyB9XFxuXFxuLmZyb250LXBlcnNvbi1saW5rcyB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luLXRvcDogLTUwMHB4O1xcbiAgei1pbmRleDogMjU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5mcm9udC1wZXJzb24tbGlua3MgPiB1bCB7XFxuICBmb250LXNpemU6IDA7XFxuICB6LWluZGV4OiA5OTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbGVmdDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGEge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmc6IDI1cHggMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogIzk5OTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07IH1cXG5cXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGE6YmVmb3JlLFxcbi5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBoZWlnaHQ6IDZweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBmb250LXNpemU6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGE6aG92ZXIge1xcbiAgY29sb3I6ICNiN2EzODk7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGE6aG92ZXI6YWZ0ZXIsXFxuLmZyb250LXBlcnNvbi1saW5rcyA+IHVsID4gbGkgPiBhOmhvdmVyOmJlZm9yZSB7XFxuICB3aWR0aDogMjVweDtcXG4gIGJhY2tncm91bmQ6ICM5OTk7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0QWJvdXQgU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4uYWJvdXQtc2VjdGlvbiB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5hYm91dC1pY29ucyB7XFxuICBwYWRkaW5nLXRvcDogMTEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4OyB9XFxuXFxuLmJhc2ljLWluZm8ge1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMGYwZjA7IH1cXG5cXG4uYmFzaWMtaW5mbyAuc2VjdGlvbi1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogODBweDsgfVxcblxcbi5hYm91dC1pbmZvID4gcCB7XFxuICBsaW5lLWhlaWdodDogMS44ZW07XFxuICBtYXJnaW4tdG9wOiAtMC40ZW07IH1cXG5cXG4uYWJvdXQtcGVyc29uLWltZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uYWJvdXQtcGVyc29uLWltZyA+IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4uaW5mby1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcblxcbi5pbmZvLWxpc3Q6YmVmb3JlLFxcbi5pbmZvLWxpc3Q6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7IH1cXG5cXG4uaW5mby1saXN0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoOyB9XFxuXFxuLmluZm8tbGlzdCA+IGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAyNSU7IH1cXG5cXG4uaW5mby1saXN0ID4gbGkgPiAuaW5uZXIge1xcbiAgcGFkZGluZzogMTVweCAwOyB9XFxuXFxuLmluZm8tbGlzdCA+IGxpID4gKiB7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLmluZm8tbGlzdCA+IGxpID4gLmlubmVyID4gaDQge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4uaW5mby1saXN0ID4gbGkgPiAuaW5uZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uZnVuZmFjdHMtYmxvY2sge1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyB9XFxuXFxuLmZ1bmZhY3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxcblxcbi5mdW5mYWN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBmaWx0ZXI6IEFscGhhKG9wYWNpdHk9NDApOyB9XFxuXFxuLmZ1bmZhY3Q6bGFzdC1vZi10eXBlOmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC5mdW5mYWN0Om50aC1vZi10eXBlKDIpOmFmdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZnVuZmFjdDphZnRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbi5mdW5mYWN0ID4gLmNvbnRlbnQgPiBoNCB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogNTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxcblxcbi5mdW5mYWN0ID4gLmNvbnRlbnQgPiBwIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBvcGFjaXR5OiAwLjg7IH1cXG5cXG4udGVzdGltb25pYWxzLWJsb2NrIHtcXG4gIHBhZGRpbmc6IDEwMHB4IDA7IH1cXG5cXG4udGVzdGltb25pYWxzLWJsb2NrIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA0NXB4OyB9XFxuXFxuLnRlc3RpbW9uaWFscy1zbGlkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnRlc3RpbW9uaWFsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXN0aW1vbmlhbCA+IHAge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LWZhbWlseTogQ3JpbXNvbiB0ZXh0LCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLnRlc3RpbW9uaWFsID4gLmF1dGhvciB7XFxuICBtYXJnaW4tdG9wOiA0NXB4OyB9XFxuXFxuLnRlc3RpbW9uaWFsID4gLmF1dGhvciA+IGg0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuLnRlc3RpbW9uaWFsID4gLmF1dGhvciA+IHAge1xcbiAgY29sb3I6ICM3Nzc7IH1cXG5cXG4udGVzdGltb25pYWxzLXNsaWRlciAub3dsLWNvbnRyb2xzIHtcXG4gIG1hcmdpbi10b3A6IDI3cHg7IH1cXG5cXG4udGVzdGltb25pYWxzLXNsaWRlciAub3dsLWNvbnRyb2xzID4gLm93bC1wYWdpbmF0aW9uID4gLm93bC1wYWdlID4gc3BhbiB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjYjdhMzg5O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIG1hcmdpbjogMTFweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3BhY2l0eTogMC42O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgfVxcblxcbi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5vd2wtY29udHJvbHMgPiAub3dsLXBhZ2luYXRpb24gPiAub3dsLXBhZ2UuYWN0aXZlID4gc3BhbixcXG4udGVzdGltb25pYWxzLXNsaWRlciAub3dsLWNvbnRyb2xzID4gLm93bC1wYWdpbmF0aW9uID4gLm93bC1wYWdlOmhvdmVyID4gc3BhbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjdhMzg5O1xcbiAgb3BhY2l0eTogMC44OyB9XFxuXFxuLnRlc3RpbW9uaWFscy1zbGlkZXIgLm93bC1jb250cm9scyA+IC5vd2wtcGFnaW5hdGlvbiA+IC5vd2wtcGFnZS5hY3RpdmUgPiBzcGFuIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0UmVzdW1lIFNlY3Rpb25cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxuLnRpbWVsaW5lLWJsb2NrIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDsgfVxcblxcbi50aW1lbGluZS1ibG9jayAudGltZWxpbmUge1xcbiAgcGFkZGluZy1ib3R0b206IDkwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDsgfVxcblxcbi50aW1lbGluZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLnRpbWVsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7IH1cXG5cXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXFxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7IH1cXG5cXG4udGltZWxpbmUgPiBsaTphZnRlciB7XFxuICBjbGVhcjogYm90aDsgfVxcblxcbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWRlc2Mge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtZGVzYyA+IGg0IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtY29udGVudCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnRpbWVsaW5lID4gbGkuaW52ZXJzZSA+IC50aW1lbGluZS1jb250ZW50IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udGltZWxpbmUgPiBsaS5pbnZlcnNlID4gLnRpbWVsaW5lLWRlc2Mge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi50aW1lbGluZSA+IGxpIHtcXG4gIG1hcmdpbjogNzBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnRpbWVsaW5lID4gbGk6bm90KC50aW1lbGluZS1oZWFkZXIpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBoZWlnaHQ6IDExcHg7XFxuICB3aWR0aDogMTFweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgYmFja2dyb3VuZDogI2I3YTM4OTsgfVxcblxcbi50aW1lbGluZSA+IGxpID4gZGl2IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAwIDM1cHg7IH1cXG5cXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1jb250ZW50ID4gaDQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDdweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1jb250ZW50ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBjb2xvcjogI2JiYjsgfVxcblxcbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWNvbnRlbnQgPiBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXG4gIGNvbG9yOiAjNzc3OyB9XFxuXFxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7IH1cXG5cXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1oZWFkZXIgPiBoNCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxuICBsZXR0ZXItc3BhY2luZzogNHB4OyB9XFxuXFxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaGVhZGVyOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWhlYWRlciA+IGg0OmJlZm9yZSxcXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1oZWFkZXIgPiBoNDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZDogI2JiYjtcXG4gIG1hcmdpbjogMCAtNXB4O1xcbiAgbWFyZ2luLXRvcDogOHB4OyB9XFxuXFxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaGVhZGVyID4gaDQ6YmVmb3JlIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC50aW1lbGluZSA+IGxpOmJlZm9yZSxcXG4gIC50aW1lbGluZTpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1kZXNjIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC50aW1lbGluZSA+IGxpLmludmVyc2UgPiAudGltZWxpbmUtZGVzYyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZsb2F0OiByaWdodDsgfVxcbiAgLnRpbWVsaW5lID4gbGkgPiBkaXYge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG4gIC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfSB9XFxuXFxuLmhvYmJpZXMtYmxvY2sge1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7IH1cXG5cXG4uaG9iYmllcy1ibG9jayAuc2VjdGlvbi1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7IH1cXG5cXG4uaG9iYnkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0OyB9XFxuXFxuLmhvYmJ5ID4gLmljb24ge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgYmFja2dyb3VuZDogI2I3YTM4OTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBsaW5lLWhlaWdodDogODBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDsgfVxcblxcbi5ob2JieTpob3ZlciA+IC5pY29uIHtcXG4gIHRvcDogLTE1cHg7IH1cXG5cXG4uaG9iYnkgPiAuaWNvbiA+IGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbi5ob2JieSA+IC5pY29uID4gaTpiZWZvcmUge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07IH1cXG5cXG4uaG9iYnkgPiBoNCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi10b3A6IDJweDsgfVxcblxcbi5za2lsbHMtYmxvY2sge1xcbiAgcGFkZGluZzogMTAwcHggMDtcXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4OyB9XFxuXFxuLnNraWxscy1ibG9jayAuc2VjdGlvbi1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogODBweDsgfVxcblxcbi5za2lsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4OyB9XFxuXFxuLnNraWxsID4gaDQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBjb2xvcjogI2I3YTM4OTsgfVxcblxcbi5za2lsbCA+IC5za2lsbC1iYXIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDsgfVxcblxcbi5za2lsbCA+IC5za2lsbC1iYXIgPiAuYmFyIHtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5za2lsbCA+IC5za2lsbC1iYXIgPiAuYmFyID4gLnBlcmNlbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZzogNHB4IDdweDtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvdHRvbTogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5za2lsbCA+IC5za2lsbC1iYXIgPiAuYmFyID4gLnBlcmNlbnQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgN3B4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCA3cHggIzg4ODtcXG4gIGJvdHRvbTogLTdweDtcXG4gIHJpZ2h0OiAwOyB9XFxuXFxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFNlcnZpY2VzIFNlY3Rpb25cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxuLnNlcnZpY2VzLXNlY3Rpb24gLm1haW4tdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogODBweDsgfVxcblxcbi5zZXJ2aWNlcy1ibG9jayB7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMGYwZjA7IH1cXG5cXG4uc2VydmljZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMjBweDsgfVxcblxcbi5zZXJ2aWNlID4gLmljb24ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgd2lkdGg6IDkwcHg7XFxuICBsaW5lLWhlaWdodDogOTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGJhY2tncm91bmQ6ICNiN2EzODk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDsgfVxcblxcbi5zZXJ2aWNlOmhvdmVyID4gLmljb24ge1xcbiAgdG9wOiAtMTVweDsgfVxcblxcbi5zZXJ2aWNlID4gLmljb24gPiBpOmJlZm9yZSB7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZvbnQtc2l6ZTogNDVweDsgfVxcblxcbi5zZXJ2aWNlID4gLmljb24gPiBpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLnNlcnZpY2UgPiAuY29udGVudCA+IGg0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4OyB9XFxuXFxuLnNlcnZpY2UgPiAuY29udGVudCA+IHAge1xcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xcbiAgY29sb3I6ICM3Nzc7IH1cXG5cXG4ucHJpY2luZy1ibG9jayB7XFxuICBwYWRkaW5nOiAxMjBweCAwOyB9XFxuXFxuLnByaWNpbmctYmxvY2sgLnNlY3Rpb24taGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDkwcHg7IH1cXG5cXG4ucHJpY2luZy10YWJsZSB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gIHBhZGRpbmc6IDM1cHggMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cXG5cXG4ucHJpY2luZy10YWJsZSA+IC5oZWFkZXIgPiBoNCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlID4gc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBsaW5lLWhlaWdodDogMWVtOyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlID4gLmN1cnJlbmN5IHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tdG9wOiAxMnB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlID4gLmFtb3VudCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogODBweDsgfVxcblxcbi5wcmljaW5nLXRhYmxlID4gLmhlYWRlciA+IC5wcmljZSA+IC5wZXJpb2Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4ucHJpY2luZy10YWJsZSA+IC50YWJsZS1pdGVtcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAudGFibGUtaXRlbXMgPiBsaSB7XFxuICBwYWRkaW5nOiAxMHB4IDA7IH1cXG5cXG4ucHJpY2luZy10YWJsZSA+IC50YWJsZS1idG4ge1xcbiAgcGFkZGluZzogMTFweCAyMnB4O1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgfVxcblxcbi5wcmljaW5nLXRhYmxlID4gLnRhYmxlLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYjdhMzg5OyB9XFxuXFxuLnByb2Nlc3MtYmxvY2sge1xcbiAgcGFkZGluZzogMTAwcHggMDsgfVxcblxcbi5wcm9jZXNzLWJsb2NrIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4OyB9XFxuXFxuLnByb2Nlc3Mge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnByb2Nlc3MgPiAubnVtYmVyIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjYjdhMzg5O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBjb2xvcjogI2I3YTM4OTsgfVxcblxcbi5wcm9jZXNzOmhvdmVyID4gLm51bWJlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNiN2EzODk7IH1cXG5cXG4ucHJvY2VzcyA+IC5udW1iZXIgPiBzcGFuIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMjhweDtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucHJvY2VzcyA+IC5udW1iZXIgPiBzcGFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBib3JkZXItdG9wOiBzb2xpZCA4cHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCA4cHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItbGVmdDogc29saWQgOHB4ICNiN2EzODk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxuICByaWdodDogLTQzcHg7IH1cXG5cXG4ucHJvY2Vzcy5sYXN0ID4gLm51bWJlciA+IHNwYW46YmVmb3JlIHtcXG4gIGJvcmRlcjogc29saWQgNHB4ICNiN2EzODk7XFxuICBtYXJnaW4tdG9wOiAtNHB4OyB9XFxuXFxuLnByb2Nlc3MgPiAubnVtYmVyID4gc3BhbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNiN2EzODk7XFxuICB3aWR0aDogMzBweDtcXG4gIHJpZ2h0OiAtMzVweDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTFweDsgfVxcblxcbi5wcm9jZXNzID4gLmNvbnRlbnQgPiBoNCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcblxcbi5wcm9jZXNzID4gLmNvbnRlbnQgPiBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXG4gIGNvbG9yOiAjNzc3OyB9XFxuXFxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdEJsb2cgU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4ucG9zdHMtYmxvY2sge1xcbiAgcGFkZGluZzogOTBweCAwOyB9XFxuXFxuLnBvc3RzLWJsb2NrIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4OyB9XFxuXFxuLnBvc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcblxcbi5wb3N0ID4gLm1lZGlhID4gaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTsgfVxcblxcbi5wb3N0ID4gLmNvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogMjVweDsgfVxcblxcbi5wb3N0ID4gLmNvbnRlbnQgPiBoNCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuXFxuLnBvc3QgPiAuY29udGVudCA+IGg0ID4gYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cXG5cXG4ucG9zdCA+IC5jb250ZW50ID4gaDQgPiBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjYjdhMzg5OyB9XFxuXFxuLnBvc3QgPiAuY29udGVudCA+IHAge1xcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgY29sb3I6ICM3Nzc7XFxuICBtYXJnaW4tYm90dG9tOiAyMnB4OyB9XFxuXFxuLnBvc3QgLnBvc3QtaWNvbnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIycHg7IH1cXG5cXG4ucG9zdCAucG9zdC1pY29ucyA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxcblxcbi5wb3N0IC5wb3N0LWljb25zID4gbGkgPiBpIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuXFxuLnBvc3QgLnJlYWQtbW9yZSB7XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTsgfVxcblxcbi5wb3N0IC5yZWFkLW1vcmU6aG92ZXIge1xcbiAgY29sb3I6ICNiN2EzODk7IH1cXG5cXG4ucG9zdCAucmVhZC1tb3JlID4gaSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucG9zdC1tb3JlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7IH1cXG5cXG4ucG9zdC1tb3JlIC5tb3JlLWxpbmssXFxuYm9keSAuc3ltcC1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgcGFkZGluZzogMTJweCAyMnB4O1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLnBvc3QtbW9yZSAubW9yZS1saW5rOmhvdmVyLFxcbi5zeW1wLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYjdhMzg5O1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc3ltcC1idG4ubGluay1idG4ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi5zeW1wLWJ0bi5saW5rLWJ0biA+IGkge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG5cXG4uc3ltcC1idG4ubGluay1idG46aG92ZXIge1xcbiAgY29sb3I6ICMzMzM7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcblxcbi5zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLnNpZGViYXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7IH0gfVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zZWFyY2gtYm94ID4gLnNlYXJjaC1pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMCA5cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ3cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2YwZjBmMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cXG5cXG4uc2VhcmNoLWJveCA+IC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5zZWFyY2gtYm94ID4gLnNlYXJjaC1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbi5zZWFyY2gtYm94ID4gLnNlYXJjaC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2QwZDBkMDsgfVxcblxcbi53aWRnZXQtaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XFxuXFxuLndpZGdldC1oZWFkZXIgPiBoNCB7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4OyB9XFxuXFxuLndpZGdldC1oZWFkZXIgPiBoNCA+IGkge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG5cXG4uc2lkZWJhci1saXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuLnNpZGViYXItbGlzdCA+IGxpID4gYSB7XFxuICBwYWRkaW5nOiA3cHggMDtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMS42ZW07IH1cXG5cXG4uc2lkZWJhci1saXN0ID4gbGkgPiBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjYjdhMzg5OyB9XFxuXFxuLnNpZGViYXItbGlzdC5saXN0LWlubGluZSB7XFxuICBmb250LXNpemU6IDA7IH1cXG5cXG4uc2lkZWJhci1saXN0Lmxpc3QtaW5saW5lID4gbGkge1xcbiAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdFBvcnRmb2xpbyBTZWN0aW9uXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbi5wb3J0Zm9saW8tYmxvY2sge1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4OyB9XFxuXFxuLnBvcnRmb2xpby1ibG9jayAuc2VjdGlvbi1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogNDVweDsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSB7XFxuICB3aWR0aDogMzMuMzMzJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtIHtcXG4gICAgd2lkdGg6IDUwJTsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciA+IC5jYXB0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCA1MSwgNTEsIDAuOCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXI6aG92ZXIgPiAuY2FwdGlvbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciA+IC5jYXB0aW9uID4gLmNhcHRpb24taW5uZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA3NSU7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gaDQge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjFzIGVhc2U7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXI6aG92ZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gaDQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gLmxpbmtzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciA+IC5jYXB0aW9uID4gLmNhcHRpb24taW5uZXIgPiAubGlua3MgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBtYXJnaW46IDAgMTFweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzIGVhc2U7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gLmxpbmtzID4gbGk6bnRoLW9mLXR5cGUoMikge1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zczsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lcjpob3ZlciA+IC5jYXB0aW9uID4gLmNhcHRpb24taW5uZXIgPiAubGlua3MgPiBsaSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciA+IC5jYXB0aW9uID4gLmNhcHRpb24taW5uZXIgPiAubGlua3MgPiBsaSA+IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAwO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IC5saW5rcyA+IGxpID4gYSA+IGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gLmxpbmtzID4gbGkgPiBhID4gaTpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gLmxpbmtzID4gbGkgPiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbiNwb3J0Zm9saW8tZmlsdGVycyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA0NXB4OyB9XFxuXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXNpemU6IDA7IH1cXG5cXG4jcG9ydGZvbGlvLWZpbHRlcnMgPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmc6IDAgMjZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbiNwb3J0Zm9saW8tZmlsdGVycyA+IHVsID4gbGk6bGFzdC1vZi10eXBlOmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jcG9ydGZvbGlvLWZpbHRlcnMgPiB1bCA+IGxpOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtOXB4O1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICB3aWR0aDogNnB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2U1ZTVlNTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblxcbiNwb3J0Zm9saW8tZmlsdGVycyA+IHVsID4gbGkgPiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICM5OTk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4jcG9ydGZvbGlvLWZpbHRlcnMgPiB1bCA+IGxpID4gYTpob3ZlcixcXG4jcG9ydGZvbGlvLWZpbHRlcnMgPiB1bCA+IGxpID4gYS5hY3RpdmUge1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4jcG9ydGZvbGlvLWZpbHRlcnMgPiB1bCA+IGxpID4gYS5hY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0Q29udGFjdCBTZWN0aW9uXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbi5jb250YWN0LWJsb2NrIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDsgfVxcblxcbi5jb250YWN0LXNlY3Rpb24gLnNlY3Rpb24taGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7IH1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXI6IHNvbGlkIDFweCAjYmJiO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLmZvcm0tY29udHJvbDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNiN2EzODk7XFxuICBib3gtc2hhZG93OiBub25lOyB9XFxuXFxuLmNvbnRhY3QtZm9ybSAuZm9ybS1ncm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XFxuXFxuLmNvbnRhY3QtZm9ybSAuYWxlcnQge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRTaW5nbGUgUG9zdCBQYWdlXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbi5ibG9nLXBhZ2UgLnBvc3QgPiAuY29udGVudCA+IC5wb3N0LWljb25zIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cXG5cXG4uYmxvZy1wYWdlIC5wb3N0ID4gLmNvbnRlbnQgPiBoNCB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXFxuLmJsb2ctcGFnZSAucG9zdCA+IC5jb250ZW50ID4gcCB7XFxuICBsaW5lLWhlaWdodDogMmVtO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIic7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9