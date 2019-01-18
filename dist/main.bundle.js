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
exports.push([module.i, "/*Importing Google Fonts */\n/*Importing Google Fonts */\n/*=======================================================================\n\tGeneral CSS\n=======================================================================*/\n* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  font-family: Open Sans, sans-serif; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-weight: bold;\n  font-family: Raleway, sans-serif; }\n\nimg {\n  max-width: 100%; }\n\n.parallax {\n  background-size: cover; }\n\nbody.section-show {\n  overflow: hidden; }\n\nbody a.close-btn,\nbody.section-show .close-btn {\n  opacity: 1;\n  z-index: 100;\n  transition: opacity 0.4s 1.2s ease, background 0.3s ease;\n  overflow: hidden; }\n\n.close-btn {\n  position: fixed;\n  height: 64px;\n  width: 64px;\n  cursor: pointer;\n  display: block;\n  top: 18px;\n  right: 18px;\n  opacity: 0;\n  z-index: -99; }\n\n.close-btn > span {\n  height: 3px;\n  width: 40px;\n  background: #bbb;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -20px;\n  margin-top: -1.5px; }\n\n.close-btn > span:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  width: 0;\n  height: inherit;\n  background: #b7a389; }\n\n.close-btn > span:nth-of-type(1) {\n  transform: rotate(45deg); }\n\n.close-btn > span:nth-of-type(2) {\n  transform: rotate(-45deg); }\n\n.close-btn > span:nth-of-type(1):before {\n  left: 0; }\n\n.close-btn > span:nth-of-type(2):before {\n  right: 0; }\n\n.close-btn:hover > span {\n  background: transparent; }\n\n.close-btn:hover > span:before {\n  transition: all 0.3s ease;\n  width: 100%; }\n\n.close-btn:hover > span:nth-of-type(2):before {\n  transition-delay: 0.3s; }\n\n.section-header h2 {\n  font-size: 32px;\n  letter-spacing: 6px;\n  color: #333;\n  margin-top: 0;\n  margin-bottom: 35px;\n  font-weight: 300; }\n\n.section-header p {\n  margin-top: 30px;\n  line-height: 1.7em;\n  color: #8a8a8a;\n  font-size: 16px; }\n\n#wrapper {\n  overflow-x: hidden; }\n\n.front-section {\n  background: #fff; }\n\n.section {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border: solid 4px #bbb;\n  padding-top: 100px;\n  z-index: -9;\n  background: #fff;\n  overflow-y: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease; }\n\nbody.section-show .section.active {\n  transition: opacity 0.4s 1.2s ease;\n  z-index: 99;\n  opacity: 1;\n  visibility: visible; }\n\n.bg-lightgray {\n  background: #f5f5f5; }\n\n.footer {\n  padding: 30px 0;\n  background: #fff;\n  border-top: solid 1px #f0f0f0; }\n\n.footer h4 {\n  font-size: 18px;\n  letter-spacing: 4px;\n  margin: 0;\n  margin-top: 3.5px;\n  font-style: italic;\n  font-family: \"Playfair Display\", serif;\n  color: #999; }\n\n.footer-social {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 0; }\n\n.footer-social > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  margin-left: 30px; }\n\n.footer-social > li > a {\n  text-decoration: none;\n  height: 26px;\n  width: 26px;\n  line-height: 26px;\n  vertical-align: middle;\n  transform: rotate(45deg);\n  transition: all 0.3s ease-in-out;\n  display: block;\n  text-align: center;\n  color: #bbb;\n  background: #f0f0f0;\n  font-size: 0; }\n\n.footer-social > li > a > i {\n  transform: rotate(-45deg);\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  line-height: inherit;\n  width: inherit;\n  height: inherit;\n  vertical-align: middle; }\n\n.footer-social > li > a > i:before {\n  font-size: 14px;\n  line-height: 1em;\n  vertical-align: middle; }\n\n.footer-social > li > a:hover {\n  background: #b7a389;\n  color: #fff; }\n\n.section-block > .container,\n.section-block {\n  position: relative; }\n\n.section-block {\n  overflow: hidden; }\n\n/*=======================================================================\n\tPreloader\n=======================================================================*/\n.js #preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #FFF;\n  z-index: 199;\n  transition: all .5s ease; }\n\n.js #preloader .loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.js body.loaded #preloader {\n  transform: scale(0.6) translateY(-100%);\n  opacity: 0;\n  visibility: hidden;\n  z-index: -1; }\n\n.no-js #preloader {\n  display: none; }\n\n.divider-draft {\n  position: relative;\n  height: 2px;\n  background: #333;\n  width: 40px;\n  display: block;\n  margin: 15px 0; }\n\n.divider-draft:before,\n.divider-draft:after {\n  content: ' ';\n  width: 25px;\n  height: 1px;\n  background: #333;\n  position: absolute;\n  left: 0; }\n\n.divider-draft.center {\n  margin: auto; }\n\n.divider-draft.center:before,\n.divider-draft.center:after {\n  right: 0;\n  margin: auto; }\n\n.divider-draft:before {\n  top: -6px; }\n\n.divider-draft:after {\n  bottom: -6px; }\n\n/*=======================================================================\n\tFront Section\n=======================================================================*/\nbody.section-show .transition-mask {\n  position: absolute;\n  top: 260px;\n  height: 500px;\n  width: 500px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 22;\n  transform: rotate(45deg);\n  overflow: hidden;\n  animation: fill2 .8s .4s both ease; }\n\nbody .transition-mask:before {\n  content: ' ';\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%; }\n\nbody.section-show .transition-mask:before {\n  animation: fill .4s both ease;\n  background: #CCC; }\n\n@keyframes fill2 {\n  0% {\n    transform: rotate(45deg); }\n  100% {\n    z-index: 50;\n    transform: rotate(0deg);\n    height: 100%;\n    width: 100%;\n    top: 0;\n    bottom: auto; } }\n\n@keyframes fill {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n.front-section {\n  padding-top: 60px;\n  padding-bottom: 200px;\n  position: relative; }\n\n.front-heading {\n  text-align: center;\n  margin-top: 190px; }\n\n.front-heading > h2 {\n  font-size: 55px;\n  font-weight: lighter;\n  letter-spacing: 15px;\n  position: relative;\n  position: relative;\n  line-height: 1em;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  z-index: 10;\n  color: #999;\n  font-family: 'Playfair Display', serif;\n  font-style: italic; }\n\n.front-person-img {\n  width: 500px;\n  height: 500px;\n  overflow: hidden;\n  background: #F0F0F0;\n  position: relative;\n  z-index: 15;\n  transition: height .5s .3s ease, transform .5s .8s ease;\n  margin: 200px auto;\n  margin-bottom: 0;\n  transform: rotate(405deg);\n  border-radius: 0; }\n\n.front-person-img > img {\n  width: 500px;\n  height: 500px;\n  overflow: hidden;\n  background: #F0F0F0;\n  position: relative;\n  padding: 50px;\n  transform: rotate(-90deg); }\n\n.front-person-titles {\n  position: relative;\n  z-index: 10;\n  height: 500px;\n  width: 500px;\n  margin: auto;\n  margin-top: -500px;\n  transform: rotate(45deg); }\n\n.front-person-titles > span {\n  position: absolute;\n  z-index: 5;\n  display: block;\n  width: 100%;\n  font-family: Hind, sans-serif;\n  color: #CCC;\n  text-align: center;\n  font-size: 24px;\n  letter-spacing: 25px;\n  line-height: 1em;\n  text-transform: lowercase; }\n\n.front-person-titles > .t1 {\n  left: 5px;\n  bottom: 0;\n  transform: rotate(-90deg) translateY(-100%);\n  transform-origin: 0% 0%; }\n\n.front-person-titles > .t2 {\n  top: 5px;\n  left: 0;\n  transform: translateY(-100%); }\n\n.front-person-titles > .t3 {\n  left: 0;\n  bottom: 5px;\n  transform: translateY(100%) rotate(180deg); }\n\n.front-person-links {\n  margin: auto;\n  width: 500px;\n  height: 500px;\n  margin-top: -500px;\n  z-index: 25;\n  transform: rotate(45deg);\n  position: relative; }\n\n.front-person-links > ul > li {\n  display: block; }\n\n.front-person-links > ul {\n  font-size: 0;\n  z-index: 99;\n  position: absolute;\n  text-align: left;\n  white-space: nowrap;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: -15px; }\n\n.front-person-links > ul > li > a {\n  font-weight: bold;\n  display: block;\n  font-size: 14px;\n  padding: 25px 0;\n  cursor: pointer;\n  transition: all .3s ease;\n  position: relative;\n  color: #999;\n  text-align: left;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  text-decoration: none;\n  line-height: 1em; }\n\n.front-person-links > ul > li > a:before,\n.front-person-links > ul > li > a:after {\n  content: ' ';\n  height: 6px;\n  width: 15px;\n  background: #CCC;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  vertical-align: middle;\n  margin-right: 15px;\n  font-size: 0;\n  transition: all .3s ease;\n  display: none; }\n\n.front-person-links > ul > li > a:after {\n  margin-left: 15px;\n  margin-right: 0;\n  display: none; }\n\n.front-person-links > ul > li > a:hover {\n  color: #B7A389; }\n\n.front-person-links > ul > li > a:hover:after,\n.front-person-links > ul > li > a:hover:before {\n  width: 25px;\n  background: #999; }\n\n/*=======================================================================\n\tAbout Section\n=======================================================================*/\n.about-section {\n  padding-top: 0; }\n\n.about-icons {\n  padding-top: 110px;\n  padding-bottom: 0px; }\n\n.basic-info {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  position: relative;\n  border-bottom: solid 1px #F0F0F0; }\n\n.basic-info .section-header {\n  margin-bottom: 80px; }\n\n.about-info > p {\n  line-height: 1.8em;\n  margin-top: -.4em; }\n\n.about-person-img {\n  text-align: center; }\n\n.about-person-img > img {\n  max-width: 100%; }\n\n.info-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  z-index: 10;\n  margin-top: 20px;\n  margin-bottom: 60px; }\n\n.info-list:before,\n.info-list:after {\n  content: ' ';\n  display: table; }\n\n.info-list:after {\n  clear: both; }\n\n.info-list > li {\n  margin-bottom: 20px;\n  float: left;\n  width: 25%; }\n\n.info-list > li > .inner {\n  padding: 15px 0; }\n\n.info-list > li > * {\n  line-height: 1em;\n  margin: 0; }\n\n.info-list > li > .inner > h4 {\n  font-size: 13px;\n  letter-spacing: 4px;\n  margin-right: 16px;\n  margin-bottom: 8px;\n  display: block;\n  color: #333; }\n\n.info-list > li > .inner > p {\n  font-size: 16px;\n  color: #777;\n  display: block; }\n\n.funfacts-block {\n  padding-top: 60px;\n  padding-bottom: 20px;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: cover;\n  background-attachment: fixed; }\n\n.funfact {\n  position: relative;\n  text-align: center;\n  margin-bottom: 40px; }\n\n.funfact:after {\n  content: ' ';\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  right: -10px;\n  top: 50%;\n  margin-top: -10px;\n  border: solid 1px #FFF;\n  transform: rotate(45deg);\n  opacity: .4;\n  filter: Alpha(opacity=40); }\n\n.funfact:last-of-type:after {\n  display: none; }\n\n@media (max-width: 992px) {\n  .funfact:nth-of-type(2):after {\n    display: none; } }\n\n@media (max-width: 768px) {\n  .funfact:after {\n    display: none; } }\n\n.funfact > .content > h4 {\n  margin: 0;\n  color: #FFF;\n  font-size: 55px;\n  margin-bottom: 5px; }\n\n.funfact > .content > p {\n  color: #FFF;\n  letter-spacing: 2px;\n  margin-bottom: 0;\n  font-size: 13px;\n  opacity: .8; }\n\n.testimonials-block {\n  padding: 100px 0; }\n\n.testimonials-block .section-header {\n  margin-bottom: 45px; }\n\n.testimonials-slider {\n  position: relative; }\n\n.testimonial {\n  text-align: center; }\n\n.testimonial > p {\n  font-size: 22px;\n  line-height: 1.6em;\n  color: #777;\n  font-family: crimson text, serif;\n  font-weight: lighter;\n  font-style: italic; }\n\n.testimonial > .author {\n  margin-top: 45px; }\n\n.testimonial > .author > h4 {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 14px; }\n\n.testimonial > .author > p {\n  color: #777; }\n\n.testimonials-slider .owl-controls {\n  margin-top: 27px; }\n\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page > span {\n  height: 16px;\n  width: 16px;\n  border-radius: 0;\n  border: solid 1px #B7A389;\n  transform: rotate(-45deg);\n  margin: 11px;\n  background: transparent;\n  opacity: .6;\n  transition: all .3s ease; }\n\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page.active > span,\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page:hover > span {\n  background: #B7A389;\n  opacity: .8; }\n\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page.active > span {\n  opacity: 1; }\n\n/*=======================================================================\n\tResume Section\n=======================================================================*/\n.timeline-block {\n  padding-bottom: 100px; }\n\n.timeline-block .timeline {\n  padding-bottom: 90px;\n  margin-top: 100px; }\n\n.timeline {\n  position: relative;\n  list-style: none;\n  margin: 0; }\n\n.timeline:before {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -1px;\n  height: 100%;\n  width: 2px;\n  background: #BBB;\n  border-radius: 0 0 5px 5px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: ' ';\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-desc {\n  float: right; }\n\n.timeline > li > .timeline-desc > h4 {\n  font-size: 14px;\n  letter-spacing: 2px;\n  margin-top: 0; }\n\n.timeline > li > .timeline-content {\n  float: left;\n  text-align: right;\n  position: relative; }\n\n.timeline > li.inverse > .timeline-content {\n  float: right;\n  text-align: left; }\n\n.timeline > li.inverse > .timeline-desc {\n  float: left;\n  text-align: right; }\n\n.timeline > li {\n  margin: 70px 0;\n  position: relative; }\n\n.timeline > li:not(.timeline-header):before {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 11px;\n  width: 11px;\n  transform: translateX(-50%) rotate(45deg);\n  background: #B7A389; }\n\n.timeline > li > div {\n  width: 50%;\n  padding: 0 35px; }\n\n.timeline > li > .timeline-content > h4 {\n  margin-top: 0;\n  margin-bottom: 7px;\n  letter-spacing: 2px;\n  font-size: 20px; }\n\n.timeline > li > .timeline-content > span {\n  display: block;\n  margin-bottom: 15px;\n  color: #BBB; }\n\n.timeline > li > .timeline-content > p {\n  margin: 0;\n  line-height: 1.7em;\n  color: #777; }\n\n.timeline > li.timeline-header {\n  background: #FFF;\n  position: relative;\n  z-index: 10;\n  text-align: center;\n  margin-bottom: 100px;\n  margin-top: 100px; }\n\n.timeline > li.timeline-header > h4 {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 16px;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  position: relative;\n  margin: 0;\n  letter-spacing: 4px; }\n\n.timeline > li.timeline-header:first-of-type {\n  margin-top: 0; }\n\n.timeline > li.timeline-header > h4:before,\n.timeline > li.timeline-header > h4:after {\n  content: ' ';\n  display: block;\n  height: 2px;\n  background: #BBB;\n  margin: 0 -5px;\n  margin-top: 8px; }\n\n.timeline > li.timeline-header > h4:before {\n  margin-top: 0;\n  margin-bottom: 8px; }\n\n@media (max-width: 992px) {\n  .timeline > li:before,\n  .timeline:before {\n    display: none; }\n  .timeline > li > .timeline-desc {\n    opacity: .5;\n    text-align: right;\n    float: left; }\n  .timeline > li.inverse > .timeline-desc {\n    text-align: left;\n    float: right; }\n  .timeline > li > div {\n    width: 85%;\n    float: none;\n    display: block;\n    margin-left: auto;\n    margin-right: auto; }\n  .timeline > li > .timeline-content {\n    text-align: right; } }\n\n.hobbies-block {\n  padding-top: 100px;\n  padding-bottom: 30px; }\n\n.hobbies-block .section-header {\n  margin-bottom: 100px; }\n\n.hobby {\n  position: relative;\n  text-align: center;\n  margin-bottom: 70px;\n  transition: all .3s ease-in-out; }\n\n.hobby > .icon {\n  font-size: 0;\n  background: #B7A389;\n  color: #FFF;\n  transform: rotate(45deg);\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  margin: auto;\n  margin-bottom: 40px;\n  transition: all .3s ease-in-out;\n  position: relative;\n  top: 0; }\n\n.hobby:hover > .icon {\n  top: -15px; }\n\n.hobby > .icon > i {\n  display: block;\n  height: inherit;\n  width: inherit;\n  line-height: inherit;\n  text-align: center;\n  transform: rotate(-45deg); }\n\n.hobby > .icon > i:before {\n  vertical-align: middle;\n  font-size: 45px;\n  line-height: 1em; }\n\n.hobby > h4 {\n  font-size: 18px;\n  letter-spacing: 2px;\n  margin-top: 0;\n  margin-top: 2px; }\n\n.skills-block {\n  padding: 100px 0;\n  padding-bottom: 40px; }\n\n.skills-block .section-header {\n  margin-bottom: 80px; }\n\n.skill {\n  position: relative;\n  margin-bottom: 60px; }\n\n.skill > h4 {\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  letter-spacing: 2px;\n  color: #B7A389; }\n\n.skill > .skill-bar {\n  height: 10px;\n  background: #F0F0F0; }\n\n.skill > .skill-bar > .bar {\n  background: #888;\n  height: 100%;\n  width: 0;\n  position: relative; }\n\n.skill > .skill-bar > .bar > .percent {\n  position: absolute;\n  padding: 4px 7px;\n  background: #888;\n  color: #FFF;\n  bottom: 100%;\n  right: 0;\n  font-size: 11px;\n  margin-bottom: 10px; }\n\n.skill > .skill-bar > .bar > .percent:after {\n  content: ' ';\n  position: absolute;\n  border-bottom: solid 7px transparent;\n  border-right: solid 7px #888;\n  bottom: -7px;\n  right: 0; }\n\n/*=======================================================================\n\tServices Section\n=======================================================================*/\n.services-section .main-title {\n  margin-bottom: 80px; }\n\n.services-block {\n  padding-top: 50px;\n  padding-bottom: 0;\n  border-bottom: solid 1px #F0F0F0; }\n\n.service {\n  position: relative;\n  text-align: center;\n  margin-bottom: 120px; }\n\n.service > .icon {\n  transform: rotate(45deg);\n  height: 90px;\n  width: 90px;\n  line-height: 90px;\n  vertical-align: middle;\n  text-align: center;\n  margin: auto;\n  transition: all .3s ease-in-out;\n  font-size: 0;\n  background: #B7A389;\n  color: #FFF;\n  position: relative;\n  top: 0; }\n\n.service:hover > .icon {\n  top: -15px; }\n\n.service > .icon > i:before {\n  line-height: 1em;\n  vertical-align: middle;\n  font-size: 45px; }\n\n.service > .icon > i {\n  display: inline-block;\n  line-height: inherit;\n  height: inherit;\n  width: inherit;\n  transform: rotate(-45deg); }\n\n.service > .content > h4 {\n  font-size: 20px;\n  margin-top: 50px;\n  margin-bottom: 8px;\n  letter-spacing: 2px; }\n\n.service > .content > p {\n  line-height: 1.6em;\n  color: #777; }\n\n.pricing-block {\n  padding: 120px 0; }\n\n.pricing-block .section-header {\n  margin-bottom: 90px; }\n\n.pricing-table {\n  max-width: 300px;\n  margin: auto;\n  background: #F4F4F4;\n  padding: 35px 0;\n  transition: all .3s ease; }\n\n.pricing-table > .header > h4 {\n  font-size: 18px;\n  text-transform: uppercase;\n  margin: 0; }\n\n.pricing-table > .header > .price {\n  margin-bottom: 30px;\n  margin-top: 30px; }\n\n.pricing-table > .header > .price > span {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  line-height: 1em; }\n\n.pricing-table > .header > .price > .currency {\n  vertical-align: top;\n  margin-top: 12px; }\n\n.pricing-table > .header > .price > .amount {\n  font-weight: bold;\n  font-size: 80px; }\n\n.pricing-table > .header > .price > .period {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 12px; }\n\n.pricing-table > .table-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 25px;\n  margin-bottom: 30px; }\n\n.pricing-table > .table-items > li {\n  padding: 10px 0; }\n\n.pricing-table > .table-btn {\n  padding: 11px 22px;\n  background: #333;\n  color: #FFF;\n  text-decoration: none;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  transition: all .3s ease; }\n\n.pricing-table > .table-btn:hover {\n  background: #B7A389; }\n\n.process-block {\n  padding: 100px 0; }\n\n.process-block .section-header {\n  margin-bottom: 80px; }\n\n.process {\n  position: relative; }\n\n.process > .number {\n  font-size: 16px;\n  font-weight: bold;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  line-height: 1em;\n  margin-bottom: 15px;\n  position: relative;\n  transform: rotate(45deg);\n  border: solid 1px #B7A389;\n  transition: all .3s ease-in-out;\n  color: #B7A389; }\n\n.process:hover > .number {\n  color: #FFF;\n  background: #B7A389; }\n\n.process > .number > span {\n  transform: rotate(-45deg);\n  display: block;\n  height: 28px;\n  width: 28px;\n  line-height: 28px;\n  text-align: center;\n  position: relative; }\n\n.process > .number > span:before {\n  content: ' ';\n  border-top: solid 8px transparent;\n  border-bottom: solid 8px transparent;\n  border-left: solid 8px #B7A389;\n  position: absolute;\n  top: 50%;\n  margin-top: -8px;\n  right: -43px; }\n\n.process.last > .number > span:before {\n  border: solid 4px #B7A389;\n  margin-top: -4px; }\n\n.process > .number > span:after {\n  content: ' ';\n  position: absolute;\n  height: 2px;\n  background: #B7A389;\n  width: 30px;\n  right: -35px;\n  top: 50%;\n  margin-top: -1px; }\n\n.process > .content > h4 {\n  font-size: 20px;\n  letter-spacing: 2px;\n  margin-bottom: 15px; }\n\n.process > .content > p {\n  line-height: 1.7em;\n  color: #777; }\n\n/*=======================================================================\n\tBlog Section\n=======================================================================*/\n.posts-block {\n  padding: 90px 0; }\n\n.posts-block .section-header {\n  margin-bottom: 60px; }\n\n.post {\n  position: relative;\n  margin-bottom: 60px; }\n\n.post > .media > img {\n  max-width: 100%; }\n\n.post > .content {\n  margin-top: 25px; }\n\n.post > .content > h4 {\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 8px; }\n\n.post > .content > h4 > a {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s ease; }\n\n.post > .content > h4 > a:hover {\n  color: #b7a389; }\n\n.post > .content > p {\n  line-height: 1.8em;\n  color: #777;\n  margin-bottom: 22px; }\n\n.post .post-icons {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n  margin-bottom: 22px; }\n\n.post .post-icons > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  font-size: 14px;\n  color: #777;\n  padding-right: 20px; }\n\n.post .post-icons > li > i {\n  margin-right: 5px; }\n\n.post .read-more {\n  color: #333;\n  text-decoration: none;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1; }\n\n.post .read-more:hover {\n  color: #b7a389; }\n\n.post .read-more > i {\n  vertical-align: middle;\n  font-size: 1.5em;\n  margin-left: 8px;\n  position: relative; }\n\n.post-more {\n  text-align: center;\n  margin-bottom: 50px; }\n\n.post-more .more-link,\nbody .symp-btn {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  padding: 12px 22px;\n  background: #333;\n  color: #fff;\n  transition: all 0.3s ease;\n  border: none;\n  text-decoration: none !important; }\n\n.post-more .more-link:hover,\n.symp-btn:hover {\n  background: #b7a389;\n  color: #fff; }\n\n.symp-btn.link-btn {\n  background: transparent;\n  color: #999; }\n\n.symp-btn.link-btn > i {\n  margin-right: 8px; }\n\n.symp-btn.link-btn:hover {\n  color: #333;\n  background: transparent; }\n\n.sidebar {\n  position: relative; }\n\n@media (min-width: 992px) {\n  .sidebar {\n    padding-left: 40px; } }\n\n.search-box {\n  position: relative; }\n\n.search-box > .search-input {\n  display: block;\n  width: 100%;\n  border: none;\n  padding: 0 9px;\n  height: 40px;\n  line-height: 40px;\n  padding-right: 47px;\n  background: #f0f0f0;\n  border: solid 1px #f0f0f0;\n  transition: all 0.3s ease; }\n\n.search-box > .search-input:focus {\n  background: #fff; }\n\n.search-box > .search-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  background: #e0e0e0;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 20px;\n  color: #333;\n  text-decoration: none; }\n\n.search-box > .search-btn:hover {\n  background: #d0d0d0; }\n\n.widget-header {\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: 15px; }\n\n.widget-header > h4 {\n  letter-spacing: 2px; }\n\n.widget-header > h4 > i {\n  margin-right: 8px; }\n\n.sidebar-list {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.sidebar-list > li > a {\n  padding: 7px 0;\n  color: #777;\n  text-decoration: none;\n  display: block;\n  line-height: 1.6em; }\n\n.sidebar-list > li > a:hover {\n  color: #b7a389; }\n\n.sidebar-list.list-inline {\n  font-size: 0; }\n\n.sidebar-list.list-inline > li {\n  font-size: 14px; }\n\n/*=======================================================================\n\tPortfolio Section\n=======================================================================*/\n.portfolio-block {\n  padding-bottom: 100px; }\n\n.portfolio-block .section-header {\n  margin-bottom: 45px; }\n\n.portfolio-items > .item {\n  width: 33.333%;\n  position: relative; }\n\n@media (max-width: 992px) {\n  .portfolio-items > .item {\n    width: 50%; } }\n\n@media (max-width: 768px) {\n  .portfolio-items > .item {\n    width: 100%; } }\n\n.portfolio-items > .item > .inner > img {\n  width: 100%; }\n\n.portfolio-items > .item > .inner {\n  position: relative; }\n\n.portfolio-items > .item > .inner > .caption {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #333;\n  background: rgba(51, 51, 51, 0.8);\n  color: #fff;\n  text-align: center;\n  z-index: 10;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease; }\n\n.portfolio-items > .item > .inner:hover > .caption {\n  opacity: 1;\n  visibility: visible; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 75%; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > h4 {\n  font-size: 22px;\n  margin: 0;\n  margin-bottom: 30px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(15px);\n  transition: all 0.3s 0.1s ease; }\n\n.portfolio-items > .item > .inner:hover > .caption > .caption-inner > h4 {\n  transform: translateY(0);\n  opacity: 1;\n  visibility: visible; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links {\n  list-style: none;\n  color: #fff; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  margin: 0 11px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(15px);\n  transition: all 0.3s 0.2s ease; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li:nth-of-type(2) {\n  transition-delay: 0.3s; }\n\n.portfolio-items > .item > .inner:hover > .caption > .caption-inner > .links > li {\n  transform: translateY(0);\n  opacity: 1;\n  visibility: visible; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a {\n  display: block;\n  height: 30px;\n  width: 30px;\n  line-height: 30px;\n  font-size: 0;\n  border: solid 1px #fff;\n  color: #fff;\n  transform: rotate(45deg); }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a > i {\n  display: block;\n  height: inherit;\n  width: inherit;\n  line-height: inherit;\n  vertical-align: middle;\n  transform: rotate(-45deg); }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a > i:before {\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 1em; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a:hover {\n  background: #fff;\n  background: rgba(255, 255, 255, 0.9);\n  color: #333; }\n\n#portfolio-filters {\n  text-align: center;\n  margin-bottom: 45px; }\n\n#portfolio-filters > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 0; }\n\n#portfolio-filters > ul > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  font-size: 14px;\n  padding: 0 26px;\n  position: relative; }\n\n#portfolio-filters > ul > li:last-of-type:after {\n  display: none; }\n\n#portfolio-filters > ul > li:after {\n  content: \" \";\n  position: absolute;\n  right: -9px;\n  top: 50%;\n  margin-top: -3px;\n  height: 6px;\n  width: 6px;\n  border: solid 1px #e5e5e5;\n  transform: rotate(45deg); }\n\n#portfolio-filters > ul > li > a {\n  display: block;\n  color: #999;\n  text-decoration: none; }\n\n#portfolio-filters > ul > li > a:hover,\n#portfolio-filters > ul > li > a.active {\n  color: #333; }\n\n#portfolio-filters > ul > li > a.active {\n  text-decoration: line-through; }\n\n/*=======================================================================\n\tContact Section\n=======================================================================*/\n.contact-block {\n  padding-bottom: 100px; }\n\n.contact-section .section-header {\n  margin-bottom: 60px; }\n\n.form-control {\n  padding: 10px;\n  height: auto;\n  border: solid 1px #bbb;\n  box-shadow: none;\n  border-radius: 0;\n  vertical-align: middle; }\n\n.form-control:focus {\n  border-color: #b7a389;\n  box-shadow: none; }\n\n.contact-form .form-group {\n  margin-bottom: 25px; }\n\n.contact-form .alert {\n  border-radius: 0; }\n\n/*=======================================================================\n\tSingle Post Page\n=======================================================================*/\n.blog-page .post > .content > .post-icons {\n  margin-bottom: 30px; }\n\n.blog-page .post > .content > h4 {\n  font-size: 28px;\n  margin-bottom: 10px; }\n\n.blog-page .post > .content > p {\n  line-height: 2em;\n  text-align: justify; }\n\n/*=======================================================================\n\tResponsive CSS\n=======================================================================*/\n@media (max-width: 992px) {\n  .about-person-img {\n    margin-bottom: 40px;\n    text-align: center; }\n  .info-list > li {\n    width: 50%; }\n  .front-section {\n    padding-bottom: 110px; }\n  .front-heading > h2 {\n    font-size: 50px; }\n  .front-person-img {\n    height: 360px;\n    width: 360px; }\n  .front-person-img > img {\n    transform: rotate(-45deg) translateY(45px); }\n  .front-person-links {\n    transform: rotate(0deg);\n    margin-top: 110px;\n    text-align: center;\n    position: relative;\n    margin-bottom: 0;\n    width: auto;\n    height: auto; }\n  .front-person-links > ul {\n    top: 0;\n    left: auto;\n    position: relative;\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    transform: none; }\n  .front-person-links > ul > li {\n    margin-bottom: 1px;\n    display: block; }\n  .front-person-links > ul > li > a:before,\n  .front-person-links > ul > li > a:after {\n    position: absolute;\n    left: 0;\n    height: 2px;\n    top: 50%;\n    margin-top: -1px;\n    display: block;\n    box-shadow: none;\n    opacity: 0.5;\n    display: none; }\n  .front-person-links > ul > li > a:after {\n    left: auto;\n    right: 0; }\n  .front-person-links > ul > li > a:hover:before {\n    width: 15px; }\n  .front-person-links > ul > li > a {\n    text-align: center;\n    padding: 22px 48px;\n    display: block;\n    font-size: 22px;\n    letter-spacing: 2px;\n    text-transform: none; }\n  .front-person-titles {\n    margin-top: 125px;\n    transform: none;\n    text-align: center;\n    width: 80%;\n    height: auto;\n    opacity: 1; }\n  .front-person-titles > span {\n    position: relative;\n    transform: none !important;\n    display: block;\n    margin: 25px 0;\n    letter-spacing: 10px;\n    font-size: 16px;\n    text-transform: uppercase;\n    top: auto !important;\n    left: auto !important;\n    bottom: auto !important; }\n  .front-heading {\n    margin-top: 80px; } }\n\n@media (max-width: 768px) {\n  .front-person-links {\n    margin-top: 65px; }\n  .front-person-img {\n    width: 65%;\n    padding-top: 65%;\n    height: 0;\n    margin-top: 120px; }\n  .front-person-img > img {\n    transform: rotate(-45deg) translateY(100px);\n    position: absolute;\n    bottom: 0;\n    left: -40px; } }\n", ""]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1nL2JnLWZ1bmZhY3RzLmpwZyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3M/YWZlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RkEsY0FBYyxtQkFBTyxDQUFDLHdNQUFpRzs7QUFFdkgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVmNzMzYTc3ZGEzZjg1MmNiOGZhYjEyNzViZTI4MDYxLmpwZ1wiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjQwMCw3MDAsNjAwLDMwMHxQbGF5ZmFpcitEaXNwbGF5OjcwMGl0YWxpYyw0MDBpdGFsaWN8Q3JpbXNvbitUZXh0OjQwMGl0YWxpYyw2MDBpdGFsaWN8T3BlbitTYW5zOjQwMCw3MDApO1wiLCBcIlwiXSk7XG52YXIgdXJsRXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL2JnLWZ1bmZhY3RzLmpwZ1wiKSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypJbXBvcnRpbmcgR29vZ2xlIEZvbnRzICovXFxuLypJbXBvcnRpbmcgR29vZ2xlIEZvbnRzICovXFxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdEdlbmVyYWwgQ1NTXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmOyB9XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuLmgxLFxcbi5oMixcXG4uaDMsXFxuLmg0LFxcbi5oNSxcXG4uaDYge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjsgfVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4ucGFyYWxsYXgge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxcblxcbmJvZHkuc2VjdGlvbi1zaG93IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG5ib2R5IGEuY2xvc2UtYnRuLFxcbmJvZHkuc2VjdGlvbi1zaG93IC5jbG9zZS1idG4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyAxLjJzIGVhc2UsIGJhY2tncm91bmQgMC4zcyBlYXNlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgd2lkdGg6IDY0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRvcDogMThweDtcXG4gIHJpZ2h0OiAxOHB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IC05OTsgfVxcblxcbi5jbG9zZS1idG4gPiBzcGFuIHtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtMS41cHg7IH1cXG5cXG4uY2xvc2UtYnRuID4gc3BhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiAjYjdhMzg5OyB9XFxuXFxuLmNsb3NlLWJ0biA+IHNwYW46bnRoLW9mLXR5cGUoMSkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuXFxuLmNsb3NlLWJ0biA+IHNwYW46bnRoLW9mLXR5cGUoMikge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbi5jbG9zZS1idG4gPiBzcGFuOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLmNsb3NlLWJ0biA+IHNwYW46bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcXG4gIHJpZ2h0OiAwOyB9XFxuXFxuLmNsb3NlLWJ0bjpob3ZlciA+IHNwYW4ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyID4gc3BhbjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNsb3NlLWJ0bjpob3ZlciA+IHNwYW46bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7IH1cXG5cXG4uc2VjdGlvbi1oZWFkZXIgaDIge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuXFxuLnNlY3Rpb24taGVhZGVyIHAge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXG4gIGNvbG9yOiAjOGE4YThhO1xcbiAgZm9udC1zaXplOiAxNnB4OyB9XFxuXFxuI3dyYXBwZXIge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuXFxuLmZyb250LXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJvcmRlcjogc29saWQgNHB4ICNiYmI7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICB6LWluZGV4OiAtOTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cXG5cXG5ib2R5LnNlY3Rpb24tc2hvdyAuc2VjdGlvbi5hY3RpdmUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIDEuMnMgZWFzZTtcXG4gIHotaW5kZXg6IDk5O1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG5cXG4uYmctbGlnaHRncmF5IHtcXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7IH1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDMwcHggMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2YwZjBmMDsgfVxcblxcbi5mb290ZXIgaDQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDMuNXB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi5mb290ZXItc29jaWFsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAwOyB9XFxuXFxuLmZvb3Rlci1zb2NpYWwgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBtYXJnaW4tbGVmdDogMzBweDsgfVxcblxcbi5mb290ZXItc29jaWFsID4gbGkgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjYmJiO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGZvbnQtc2l6ZTogMDsgfVxcblxcbi5mb290ZXItc29jaWFsID4gbGkgPiBhID4gaSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG5cXG4uZm9vdGVyLXNvY2lhbCA+IGxpID4gYSA+IGk6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLmZvb3Rlci1zb2NpYWwgPiBsaSA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2I3YTM4OTtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnNlY3Rpb24tYmxvY2sgPiAuY29udGFpbmVyLFxcbi5zZWN0aW9uLWJsb2NrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zZWN0aW9uLWJsb2NrIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0UHJlbG9hZGVyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbi5qcyAjcHJlbG9hZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICB6LWluZGV4OiAxOTk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7IH1cXG5cXG4uanMgI3ByZWxvYWRlciAubG9hZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG5cXG4uanMgYm9keS5sb2FkZWQgI3ByZWxvYWRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSgtMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgei1pbmRleDogLTE7IH1cXG5cXG4ubm8tanMgI3ByZWxvYWRlciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmRpdmlkZXItZHJhZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTVweCAwOyB9XFxuXFxuLmRpdmlkZXItZHJhZnQ6YmVmb3JlLFxcbi5kaXZpZGVyLWRyYWZ0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDsgfVxcblxcbi5kaXZpZGVyLWRyYWZ0LmNlbnRlciB7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cXG4uZGl2aWRlci1kcmFmdC5jZW50ZXI6YmVmb3JlLFxcbi5kaXZpZGVyLWRyYWZ0LmNlbnRlcjphZnRlciB7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbi5kaXZpZGVyLWRyYWZ0OmJlZm9yZSB7XFxuICB0b3A6IC02cHg7IH1cXG5cXG4uZGl2aWRlci1kcmFmdDphZnRlciB7XFxuICBib3R0b206IC02cHg7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0RnJvbnQgU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG5ib2R5LnNlY3Rpb24tc2hvdyAudHJhbnNpdGlvbi1tYXNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjYwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgei1pbmRleDogMjI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYW5pbWF0aW9uOiBmaWxsMiAuOHMgLjRzIGJvdGggZWFzZTsgfVxcblxcbmJvZHkgLnRyYW5zaXRpb24tbWFzazpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmJvZHkuc2VjdGlvbi1zaG93IC50cmFuc2l0aW9uLW1hc2s6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbjogZmlsbCAuNHMgYm90aCBlYXNlO1xcbiAgYmFja2dyb3VuZDogI0NDQzsgfVxcblxcbkBrZXlmcmFtZXMgZmlsbDIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICB6LWluZGV4OiA1MDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiBhdXRvOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZpbGwge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMCU7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXFxuLmZyb250LXNlY3Rpb24ge1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uZnJvbnQtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxOTBweDsgfVxcblxcbi5mcm9udC1oZWFkaW5nID4gaDIge1xcbiAgZm9udC1zaXplOiA1NXB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICB6LWluZGV4OiAxMDtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWltZyB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxNTtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAuNXMgLjNzIGVhc2UsIHRyYW5zZm9ybSAuNXMgLjhzIGVhc2U7XFxuICBtYXJnaW46IDIwMHB4IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWltZyA+IGltZyB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxcblxcbi5mcm9udC1wZXJzb24tdGl0bGVzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IC01MDBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi5mcm9udC1wZXJzb24tdGl0bGVzID4gc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA1O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBIaW5kLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNDQ0M7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlOyB9XFxuXFxuLmZyb250LXBlcnNvbi10aXRsZXMgPiAudDEge1xcbiAgbGVmdDogNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlOyB9XFxuXFxuLmZyb250LXBlcnNvbi10aXRsZXMgPiAudDIge1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgfVxcblxcbi5mcm9udC1wZXJzb24tdGl0bGVzID4gLnQzIHtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGUoMTgwZGVnKTsgfVxcblxcbi5mcm9udC1wZXJzb24tbGlua3Mge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbi10b3A6IC01MDBweDtcXG4gIHotaW5kZXg6IDI1O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmZyb250LXBlcnNvbi1saW5rcyA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgei1pbmRleDogOTk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGxlZnQ6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4OyB9XFxuXFxuLmZyb250LXBlcnNvbi1saW5rcyA+IHVsID4gbGkgPiBhIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiAyNXB4IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogIzk5OTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07IH1cXG5cXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGE6YmVmb3JlLFxcbi5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBoZWlnaHQ6IDZweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogI0NDQztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBmb250LXNpemU6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmZyb250LXBlcnNvbi1saW5rcyA+IHVsID4gbGkgPiBhOmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTpob3ZlciB7XFxuICBjb2xvcjogI0I3QTM4OTsgfVxcblxcbi5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTpob3ZlcjphZnRlcixcXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGE6aG92ZXI6YmVmb3JlIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZDogIzk5OTsgfVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRBYm91dCBTZWN0aW9uXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbi5hYm91dC1zZWN0aW9uIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLmFib3V0LWljb25zIHtcXG4gIHBhZGRpbmctdG9wOiAxMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7IH1cXG5cXG4uYmFzaWMtaW5mbyB7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0YwRjBGMDsgfVxcblxcbi5iYXNpYy1pbmZvIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4OyB9XFxuXFxuLmFib3V0LWluZm8gPiBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gIG1hcmdpbi10b3A6IC0uNGVtOyB9XFxuXFxuLmFib3V0LXBlcnNvbi1pbWcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmFib3V0LXBlcnNvbi1pbWcgPiBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuLmluZm8tbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7IH1cXG5cXG4uaW5mby1saXN0OmJlZm9yZSxcXG4uaW5mby1saXN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIGRpc3BsYXk6IHRhYmxlOyB9XFxuXFxuLmluZm8tbGlzdDphZnRlciB7XFxuICBjbGVhcjogYm90aDsgfVxcblxcbi5pbmZvLWxpc3QgPiBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMjUlOyB9XFxuXFxuLmluZm8tbGlzdCA+IGxpID4gLmlubmVyIHtcXG4gIHBhZGRpbmc6IDE1cHggMDsgfVxcblxcbi5pbmZvLWxpc3QgPiBsaSA+ICoge1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5pbmZvLWxpc3QgPiBsaSA+IC5pbm5lciA+IGg0IHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuLmluZm8tbGlzdCA+IGxpID4gLmlubmVyID4gcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzc3NztcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLmZ1bmZhY3RzLWJsb2NrIHtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgfVxcblxcbi5mdW5mYWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cXG5cXG4uZnVuZmFjdDphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjRkZGO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgb3BhY2l0eTogLjQ7XFxuICBmaWx0ZXI6IEFscGhhKG9wYWNpdHk9NDApOyB9XFxuXFxuLmZ1bmZhY3Q6bGFzdC1vZi10eXBlOmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC5mdW5mYWN0Om50aC1vZi10eXBlKDIpOmFmdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZnVuZmFjdDphZnRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbi5mdW5mYWN0ID4gLmNvbnRlbnQgPiBoNCB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtc2l6ZTogNTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxcblxcbi5mdW5mYWN0ID4gLmNvbnRlbnQgPiBwIHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBvcGFjaXR5OiAuODsgfVxcblxcbi50ZXN0aW1vbmlhbHMtYmxvY2sge1xcbiAgcGFkZGluZzogMTAwcHggMDsgfVxcblxcbi50ZXN0aW1vbmlhbHMtYmxvY2sgLnNlY3Rpb24taGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7IH1cXG5cXG4udGVzdGltb25pYWxzLXNsaWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4udGVzdGltb25pYWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRlc3RpbW9uaWFsID4gcCB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBsaW5lLWhlaWdodDogMS42ZW07XFxuICBjb2xvcjogIzc3NztcXG4gIGZvbnQtZmFtaWx5OiBjcmltc29uIHRleHQsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4udGVzdGltb25pYWwgPiAuYXV0aG9yIHtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7IH1cXG5cXG4udGVzdGltb25pYWwgPiAuYXV0aG9yID4gaDQge1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG4udGVzdGltb25pYWwgPiAuYXV0aG9yID4gcCB7XFxuICBjb2xvcjogIzc3NzsgfVxcblxcbi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5vd2wtY29udHJvbHMge1xcbiAgbWFyZ2luLXRvcDogMjdweDsgfVxcblxcbi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5vd2wtY29udHJvbHMgPiAub3dsLXBhZ2luYXRpb24gPiAub3dsLXBhZ2UgPiBzcGFuIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNCN0EzODk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgbWFyZ2luOiAxMXB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvcGFjaXR5OiAuNjtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTsgfVxcblxcbi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5vd2wtY29udHJvbHMgPiAub3dsLXBhZ2luYXRpb24gPiAub3dsLXBhZ2UuYWN0aXZlID4gc3BhbixcXG4udGVzdGltb25pYWxzLXNsaWRlciAub3dsLWNvbnRyb2xzID4gLm93bC1wYWdpbmF0aW9uID4gLm93bC1wYWdlOmhvdmVyID4gc3BhbiB7XFxuICBiYWNrZ3JvdW5kOiAjQjdBMzg5O1xcbiAgb3BhY2l0eTogLjg7IH1cXG5cXG4udGVzdGltb25pYWxzLXNsaWRlciAub3dsLWNvbnRyb2xzID4gLm93bC1wYWdpbmF0aW9uID4gLm93bC1wYWdlLmFjdGl2ZSA+IHNwYW4ge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRSZXN1bWUgU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4udGltZWxpbmUtYmxvY2sge1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4OyB9XFxuXFxuLnRpbWVsaW5lLWJsb2NrIC50aW1lbGluZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogOTBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4OyB9XFxuXFxuLnRpbWVsaW5lIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4udGltZWxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNCQkI7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDsgfVxcblxcbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcXG4udGltZWxpbmUgPiBsaTphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBkaXNwbGF5OiB0YWJsZTsgfVxcblxcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoOyB9XFxuXFxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtZGVzYyB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1kZXNjID4gaDQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1jb250ZW50IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4udGltZWxpbmUgPiBsaS5pbnZlcnNlID4gLnRpbWVsaW5lLWNvbnRlbnQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi50aW1lbGluZSA+IGxpLmludmVyc2UgPiAudGltZWxpbmUtZGVzYyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRpbWVsaW5lID4gbGkge1xcbiAgbWFyZ2luOiA3MHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4udGltZWxpbmUgPiBsaTpub3QoLnRpbWVsaW5lLWhlYWRlcik6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIGhlaWdodDogMTFweDtcXG4gIHdpZHRoOiAxMXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICBiYWNrZ3JvdW5kOiAjQjdBMzg5OyB9XFxuXFxuLnRpbWVsaW5lID4gbGkgPiBkaXYge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDAgMzVweDsgfVxcblxcbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWNvbnRlbnQgPiBoNCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWNvbnRlbnQgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGNvbG9yOiAjQkJCOyB9XFxuXFxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtY29udGVudCA+IHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xcbiAgY29sb3I6ICM3Nzc7IH1cXG5cXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDsgfVxcblxcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWhlYWRlciA+IGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7IH1cXG5cXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1oZWFkZXI6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaGVhZGVyID4gaDQ6YmVmb3JlLFxcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWhlYWRlciA+IGg0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjQkJCO1xcbiAgbWFyZ2luOiAwIC01cHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7IH1cXG5cXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1oZWFkZXIgPiBoNDpiZWZvcmUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxcbiAgLnRpbWVsaW5lOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWRlc2Mge1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAudGltZWxpbmUgPiBsaS5pbnZlcnNlID4gLnRpbWVsaW5lLWRlc2Mge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG4gIC50aW1lbGluZSA+IGxpID4gZGl2IHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XFxuICAudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH0gfVxcblxcbi5ob2JiaWVzLWJsb2NrIHtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4OyB9XFxuXFxuLmhvYmJpZXMtYmxvY2sgLnNlY3Rpb24taGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4OyB9XFxuXFxuLmhvYmJ5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyB9XFxuXFxuLmhvYmJ5ID4gLmljb24ge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgYmFja2dyb3VuZDogI0I3QTM4OTtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBsaW5lLWhlaWdodDogODBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwOyB9XFxuXFxuLmhvYmJ5OmhvdmVyID4gLmljb24ge1xcbiAgdG9wOiAtMTVweDsgfVxcblxcbi5ob2JieSA+IC5pY29uID4gaSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLmhvYmJ5ID4gLmljb24gPiBpOmJlZm9yZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZm9udC1zaXplOiA0NXB4O1xcbiAgbGluZS1oZWlnaHQ6IDFlbTsgfVxcblxcbi5ob2JieSA+IGg0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLXRvcDogMnB4OyB9XFxuXFxuLnNraWxscy1ibG9jayB7XFxuICBwYWRkaW5nOiAxMDBweCAwO1xcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7IH1cXG5cXG4uc2tpbGxzLWJsb2NrIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4OyB9XFxuXFxuLnNraWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7IH1cXG5cXG4uc2tpbGwgPiBoNCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGNvbG9yOiAjQjdBMzg5OyB9XFxuXFxuLnNraWxsID4gLnNraWxsLWJhciB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRjBGMEYwOyB9XFxuXFxuLnNraWxsID4gLnNraWxsLWJhciA+IC5iYXIge1xcbiAgYmFja2dyb3VuZDogIzg4ODtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnNraWxsID4gLnNraWxsLWJhciA+IC5iYXIgPiAucGVyY2VudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiA0cHggN3B4O1xcbiAgYmFja2dyb3VuZDogIzg4ODtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXFxuLnNraWxsID4gLnNraWxsLWJhciA+IC5iYXIgPiAucGVyY2VudDphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCA3cHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDdweCAjODg4O1xcbiAgYm90dG9tOiAtN3B4O1xcbiAgcmlnaHQ6IDA7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0U2VydmljZXMgU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4uc2VydmljZXMtc2VjdGlvbiAubWFpbi10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4OyB9XFxuXFxuLnNlcnZpY2VzLWJsb2NrIHtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0YwRjBGMDsgfVxcblxcbi5zZXJ2aWNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEyMHB4OyB9XFxuXFxuLnNlcnZpY2UgPiAuaWNvbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICB3aWR0aDogOTBweDtcXG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XFxuICBmb250LXNpemU6IDA7XFxuICBiYWNrZ3JvdW5kOiAjQjdBMzg5O1xcbiAgY29sb3I6ICNGRkY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7IH1cXG5cXG4uc2VydmljZTpob3ZlciA+IC5pY29uIHtcXG4gIHRvcDogLTE1cHg7IH1cXG5cXG4uc2VydmljZSA+IC5pY29uID4gaTpiZWZvcmUge1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBmb250LXNpemU6IDQ1cHg7IH1cXG5cXG4uc2VydmljZSA+IC5pY29uID4gaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbi5zZXJ2aWNlID4gLmNvbnRlbnQgPiBoNCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDsgfVxcblxcbi5zZXJ2aWNlID4gLmNvbnRlbnQgPiBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG4gIGNvbG9yOiAjNzc3OyB9XFxuXFxuLnByaWNpbmctYmxvY2sge1xcbiAgcGFkZGluZzogMTIwcHggMDsgfVxcblxcbi5wcmljaW5nLWJsb2NrIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA5MHB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XFxuICBwYWRkaW5nOiAzNXB4IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7IH1cXG5cXG4ucHJpY2luZy10YWJsZSA+IC5oZWFkZXIgPiBoNCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlID4gc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBsaW5lLWhlaWdodDogMWVtOyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlID4gLmN1cnJlbmN5IHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tdG9wOiAxMnB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlID4gLmFtb3VudCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogODBweDsgfVxcblxcbi5wcmljaW5nLXRhYmxlID4gLmhlYWRlciA+IC5wcmljZSA+IC5wZXJpb2Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4ucHJpY2luZy10YWJsZSA+IC50YWJsZS1pdGVtcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAudGFibGUtaXRlbXMgPiBsaSB7XFxuICBwYWRkaW5nOiAxMHB4IDA7IH1cXG5cXG4ucHJpY2luZy10YWJsZSA+IC50YWJsZS1idG4ge1xcbiAgcGFkZGluZzogMTFweCAyMnB4O1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjRkZGO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlOyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAudGFibGUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNCN0EzODk7IH1cXG5cXG4ucHJvY2Vzcy1ibG9jayB7XFxuICBwYWRkaW5nOiAxMDBweCAwOyB9XFxuXFxuLnByb2Nlc3MtYmxvY2sgLnNlY3Rpb24taGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7IH1cXG5cXG4ucHJvY2VzcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucHJvY2VzcyA+IC5udW1iZXIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNCN0EzODk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbiAgY29sb3I6ICNCN0EzODk7IH1cXG5cXG4ucHJvY2Vzczpob3ZlciA+IC5udW1iZXIge1xcbiAgY29sb3I6ICNGRkY7XFxuICBiYWNrZ3JvdW5kOiAjQjdBMzg5OyB9XFxuXFxuLnByb2Nlc3MgPiAubnVtYmVyID4gc3BhbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICB3aWR0aDogMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnByb2Nlc3MgPiAubnVtYmVyID4gc3BhbjpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgYm9yZGVyLXRvcDogc29saWQgOHB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgOHB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDhweCAjQjdBMzg5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgcmlnaHQ6IC00M3B4OyB9XFxuXFxuLnByb2Nlc3MubGFzdCA+IC5udW1iZXIgPiBzcGFuOmJlZm9yZSB7XFxuICBib3JkZXI6IHNvbGlkIDRweCAjQjdBMzg5O1xcbiAgbWFyZ2luLXRvcDogLTRweDsgfVxcblxcbi5wcm9jZXNzID4gLm51bWJlciA+IHNwYW46YWZ0ZXIge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjQjdBMzg5O1xcbiAgd2lkdGg6IDMwcHg7XFxuICByaWdodDogLTM1cHg7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xcHg7IH1cXG5cXG4ucHJvY2VzcyA+IC5jb250ZW50ID4gaDQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cXG5cXG4ucHJvY2VzcyA+IC5jb250ZW50ID4gcCB7XFxuICBsaW5lLWhlaWdodDogMS43ZW07XFxuICBjb2xvcjogIzc3NzsgfVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRCbG9nIFNlY3Rpb25cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxuLnBvc3RzLWJsb2NrIHtcXG4gIHBhZGRpbmc6IDkwcHggMDsgfVxcblxcbi5wb3N0cy1ibG9jayAuc2VjdGlvbi1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcblxcbi5wb3N0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7IH1cXG5cXG4ucG9zdCA+IC5tZWRpYSA+IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4ucG9zdCA+IC5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7IH1cXG5cXG4ucG9zdCA+IC5jb250ZW50ID4gaDQge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxcblxcbi5wb3N0ID4gLmNvbnRlbnQgPiBoNCA+IGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XFxuXFxuLnBvc3QgPiAuY29udGVudCA+IGg0ID4gYTpob3ZlciB7XFxuICBjb2xvcjogI2I3YTM4OTsgfVxcblxcbi5wb3N0ID4gLmNvbnRlbnQgPiBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgbWFyZ2luLWJvdHRvbTogMjJweDsgfVxcblxcbi5wb3N0IC5wb3N0LWljb25zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMnB4OyB9XFxuXFxuLnBvc3QgLnBvc3QtaWNvbnMgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzc3NztcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cXG5cXG4ucG9zdCAucG9zdC1pY29ucyA+IGxpID4gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcblxcbi5wb3N0IC5yZWFkLW1vcmUge1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7IH1cXG5cXG4ucG9zdCAucmVhZC1tb3JlOmhvdmVyIHtcXG4gIGNvbG9yOiAjYjdhMzg5OyB9XFxuXFxuLnBvc3QgLnJlYWQtbW9yZSA+IGkge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnBvc3QtbW9yZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4OyB9XFxuXFxuLnBvc3QtbW9yZSAubW9yZS1saW5rLFxcbmJvZHkgLnN5bXAtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIHBhZGRpbmc6IDEycHggMjJweDtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5wb3N0LW1vcmUgLm1vcmUtbGluazpob3ZlcixcXG4uc3ltcC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2I3YTM4OTtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnN5bXAtYnRuLmxpbmstYnRuIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4uc3ltcC1idG4ubGluay1idG4gPiBpIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuXFxuLnN5bXAtYnRuLmxpbmstYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uc2lkZWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4OyB9IH1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uc2VhcmNoLWJveCA+IC5zZWFyY2gtaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAgOXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0N3B4O1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNmMGYwZjA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XFxuXFxuLnNlYXJjaC1ib3ggPiAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG5cXG4uc2VhcmNoLWJveCA+IC5zZWFyY2gtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4uc2VhcmNoLWJveCA+IC5zZWFyY2gtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkMGQwZDA7IH1cXG5cXG4ud2lkZ2V0LWhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcblxcbi53aWRnZXQtaGVhZGVyID4gaDQge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDsgfVxcblxcbi53aWRnZXQtaGVhZGVyID4gaDQgPiBpIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuXFxuLnNpZGViYXItbGlzdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5zaWRlYmFyLWxpc3QgPiBsaSA+IGEge1xcbiAgcGFkZGluZzogN3B4IDA7XFxuICBjb2xvcjogIzc3NztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDEuNmVtOyB9XFxuXFxuLnNpZGViYXItbGlzdCA+IGxpID4gYTpob3ZlciB7XFxuICBjb2xvcjogI2I3YTM4OTsgfVxcblxcbi5zaWRlYmFyLWxpc3QubGlzdC1pbmxpbmUge1xcbiAgZm9udC1zaXplOiAwOyB9XFxuXFxuLnNpZGViYXItbGlzdC5saXN0LWlubGluZSA+IGxpIHtcXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRQb3J0Zm9saW8gU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4ucG9ydGZvbGlvLWJsb2NrIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDsgfVxcblxcbi5wb3J0Zm9saW8tYmxvY2sgLnNlY3Rpb24taGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0ge1xcbiAgd2lkdGg6IDMzLjMzMyU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSB7XFxuICAgIHdpZHRoOiA1MCU7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7IH0gfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciA+IGltZyB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgYmFja2dyb3VuZDogcmdiYSg1MSwgNTEsIDUxLCAwLjgpO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyOmhvdmVyID4gLmNhcHRpb24ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNzUlOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IGg0IHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4xcyBlYXNlOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyOmhvdmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IGg0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IC5saW5rcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gLmxpbmtzID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgbWFyZ2luOiAwIDExcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycyBlYXNlOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IC5saW5rcyA+IGxpOm50aC1vZi10eXBlKDIpIHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXI6aG92ZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gLmxpbmtzID4gbGkge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gLmxpbmtzID4gbGkgPiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciA+IC5jYXB0aW9uID4gLmNhcHRpb24taW5uZXIgPiAubGlua3MgPiBsaSA+IGEgPiBpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IC5saW5rcyA+IGxpID4gYSA+IGk6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBsaW5lLWhlaWdodDogMWVtOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IC5saW5rcyA+IGxpID4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4jcG9ydGZvbGlvLWZpbHRlcnMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNDVweDsgfVxcblxcbiNwb3J0Zm9saW8tZmlsdGVycyA+IHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAwOyB9XFxuXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiAwIDI2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4jcG9ydGZvbGlvLWZpbHRlcnMgPiB1bCA+IGxpOmxhc3Qtb2YtdHlwZTphZnRlciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwgPiBsaTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTlweDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgd2lkdGg6IDZweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNlNWU1ZTU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG5cXG4jcG9ydGZvbGlvLWZpbHRlcnMgPiB1bCA+IGxpID4gYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjOTk5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwgPiBsaSA+IGE6aG92ZXIsXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwgPiBsaSA+IGEuYWN0aXZlIHtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwgPiBsaSA+IGEuYWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyB9XFxuXFxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdENvbnRhY3QgU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4uY29udGFjdC1ibG9jayB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7IH1cXG5cXG4uY29udGFjdC1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4OyB9XFxuXFxuLmZvcm0tY29udHJvbCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JiYjtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcblxcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjYjdhMzg5O1xcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxcblxcbi5jb250YWN0LWZvcm0gLmZvcm0tZ3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxcblxcbi5jb250YWN0LWZvcm0gLmFsZXJ0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0U2luZ2xlIFBvc3QgUGFnZVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4uYmxvZy1wYWdlIC5wb3N0ID4gLmNvbnRlbnQgPiAucG9zdC1pY29ucyB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuXFxuLmJsb2ctcGFnZSAucG9zdCA+IC5jb250ZW50ID4gaDQge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5ibG9nLXBhZ2UgLnBvc3QgPiAuY29udGVudCA+IHAge1xcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0UmVzcG9uc2l2ZSBDU1NcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAuYWJvdXQtcGVyc29uLWltZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmluZm8tbGlzdCA+IGxpIHtcXG4gICAgd2lkdGg6IDUwJTsgfVxcbiAgLmZyb250LXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7IH1cXG4gIC5mcm9udC1oZWFkaW5nID4gaDIge1xcbiAgICBmb250LXNpemU6IDUwcHg7IH1cXG4gIC5mcm9udC1wZXJzb24taW1nIHtcXG4gICAgaGVpZ2h0OiAzNjBweDtcXG4gICAgd2lkdGg6IDM2MHB4OyB9XFxuICAuZnJvbnQtcGVyc29uLWltZyA+IGltZyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSg0NXB4KTsgfVxcbiAgLmZyb250LXBlcnNvbi1saW5rcyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87IH1cXG4gIC5mcm9udC1wZXJzb24tbGlua3MgPiB1bCB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICpkaXNwbGF5OiBpbmxpbmU7XFxuICAgICp6b29tOiAxO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7IH1cXG4gIC5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmZyb250LXBlcnNvbi1saW5rcyA+IHVsID4gbGkgPiBhOmJlZm9yZSxcXG4gIC5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGE6YWZ0ZXIge1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICByaWdodDogMDsgfVxcbiAgLmZyb250LXBlcnNvbi1saW5rcyA+IHVsID4gbGkgPiBhOmhvdmVyOmJlZm9yZSB7XFxuICAgIHdpZHRoOiAxNXB4OyB9XFxuICAuZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIycHggNDhweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IH1cXG4gIC5mcm9udC1wZXJzb24tdGl0bGVzIHtcXG4gICAgbWFyZ2luLXRvcDogMTI1cHg7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIC5mcm9udC1wZXJzb24tdGl0bGVzID4gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDI1cHggMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7IH1cXG4gIC5mcm9udC1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogODBweDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZnJvbnQtcGVyc29uLWxpbmtzIHtcXG4gICAgbWFyZ2luLXRvcDogNjVweDsgfVxcbiAgLmZyb250LXBlcnNvbi1pbWcge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBwYWRkaW5nLXRvcDogNjUlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IDEyMHB4OyB9XFxuICAuZnJvbnQtcGVyc29uLWltZyA+IGltZyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgxMDBweCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAtNDBweDsgfSB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=