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
exports.push([module.i, "/*Importing Google Fonts */\n/*=======================================================================\n\tGeneral CSS\n=======================================================================*/\n* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  font-family: Open Sans, sans-serif; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-weight: bold;\n  font-family: Raleway, sans-serif; }\n\nimg {\n  max-width: 100%; }\n\n.parallax {\n  background-size: cover; }\n\nbody.section-show {\n  overflow: hidden; }\n\nbody a.close-btn,\nbody.section-show .close-btn {\n  opacity: 1;\n  z-index: 100;\n  transition: opacity .4s 1.2s ease, background .3s ease;\n  overflow: hidden; }\n\n.close-btn {\n  position: fixed;\n  height: 64px;\n  width: 64px;\n  cursor: pointer;\n  display: block;\n  top: 18px;\n  right: 18px;\n  opacity: 0;\n  z-index: -99; }\n\n.close-btn > span {\n  height: 3px;\n  width: 40px;\n  background: #BBB;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -20px;\n  margin-top: -1.5px; }\n\n.close-btn > span:before {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  width: 0;\n  height: inherit;\n  background: #B7A389; }\n\n.close-btn > span:nth-of-type(1) {\n  transform: rotate(45deg); }\n\n.close-btn > span:nth-of-type(2) {\n  transform: rotate(-45deg); }\n\n.close-btn > span:nth-of-type(1):before {\n  left: 0; }\n\n.close-btn > span:nth-of-type(2):before {\n  right: 0; }\n\n.close-btn:hover > span {\n  background: transparent; }\n\n.close-btn:hover > span:before {\n  transition: all .3s ease;\n  width: 100%; }\n\n.close-btn:hover > span:nth-of-type(2):before {\n  transition-delay: .3s; }\n\n.section-header h2 {\n  font-size: 32px;\n  letter-spacing: 6px;\n  color: #333;\n  margin-top: 0;\n  margin-bottom: 35px;\n  font-weight: 300; }\n\n.section-header p {\n  margin-top: 30px;\n  line-height: 1.7em;\n  color: #8A8A8A;\n  font-size: 16px; }\n\n#wrapper {\n  overflow-x: hidden; }\n\n.front-section {\n  background: #FFF; }\n\n.section {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border: solid 4px #BBB;\n  padding-top: 100px;\n  z-index: -9;\n  background: #FFF;\n  overflow-y: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: all .3s ease; }\n\nbody.section-show .section.active {\n  transition: opacity .4s 1.2s ease;\n  z-index: 99;\n  opacity: 1;\n  visibility: visible; }\n\n.bg-lightgray {\n  background: #F5F5F5; }\n\n.footer {\n  padding: 30px 0;\n  background: #FFF;\n  border-top: solid 1px #F0F0F0; }\n\n.footer h4 {\n  font-size: 18px;\n  letter-spacing: 4px;\n  margin: 0;\n  margin-top: 3.5px;\n  font-style: italic;\n  font-family: 'Playfair Display', serif;\n  color: #999; }\n\n.footer-social {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 0; }\n\n.footer-social > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  margin-left: 30px; }\n\n.footer-social > li > a {\n  text-decoration: none;\n  height: 26px;\n  width: 26px;\n  line-height: 26px;\n  vertical-align: middle;\n  transform: rotate(45deg);\n  transition: all .3s ease-in-out;\n  display: block;\n  text-align: center;\n  color: #BBB;\n  background: #F0F0F0;\n  font-size: 0; }\n\n.footer-social > li > a > i {\n  transform: rotate(-45deg);\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  line-height: inherit;\n  width: inherit;\n  height: inherit;\n  vertical-align: middle; }\n\n.footer-social > li > a > i:before {\n  font-size: 14px;\n  line-height: 1em;\n  vertical-align: middle; }\n\n.footer-social > li > a:hover {\n  background: #B7A389;\n  color: #FFF; }\n\n.section-block > .container,\n.section-block {\n  position: relative; }\n\n.section-block {\n  overflow: hidden; }\n\n/*=======================================================================\n\tPreloader\n=======================================================================*/\n.js #preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #FFF;\n  z-index: 199;\n  transition: all .5s ease; }\n\n.js #preloader .loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.js body.loaded #preloader {\n  transform: scale(0.6) translateY(-100%);\n  opacity: 0;\n  visibility: hidden;\n  z-index: -1; }\n\n.no-js #preloader {\n  display: none; }\n\n.divider-draft {\n  position: relative;\n  height: 2px;\n  background: #333;\n  width: 40px;\n  display: block;\n  margin: 15px 0; }\n\n.divider-draft:before,\n.divider-draft:after {\n  content: ' ';\n  width: 25px;\n  height: 1px;\n  background: #333;\n  position: absolute;\n  left: 0; }\n\n.divider-draft.center {\n  margin: auto; }\n\n.divider-draft.center:before,\n.divider-draft.center:after {\n  right: 0;\n  margin: auto; }\n\n.divider-draft:before {\n  top: -6px; }\n\n.divider-draft:after {\n  bottom: -6px; }\n\n/*=======================================================================\n\tFront Section\n=======================================================================*/\nbody.section-show .transition-mask {\n  position: absolute;\n  top: 260px;\n  height: 500px;\n  width: 500px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 22;\n  transform: rotate(45deg);\n  overflow: hidden;\n  animation: fill2 .8s .4s both ease; }\n\nbody .transition-mask:before {\n  content: ' ';\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%; }\n\nbody.section-show .transition-mask:before {\n  animation: fill .4s both ease;\n  background: #CCC; }\n\n@keyframes fill2 {\n  0% {\n    transform: rotate(45deg); }\n  100% {\n    z-index: 50;\n    transform: rotate(0deg);\n    height: 100%;\n    width: 100%;\n    top: 0;\n    bottom: auto; } }\n\n@keyframes fill {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n.front-section {\n  padding-top: 60px;\n  padding-bottom: 200px;\n  position: relative; }\n\n.front-heading {\n  text-align: center;\n  margin-top: 190px; }\n\n.front-heading > h2 {\n  font-size: 55px;\n  font-weight: lighter;\n  letter-spacing: 15px;\n  position: relative;\n  position: relative;\n  line-height: 1em;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  z-index: 10;\n  color: #999;\n  font-family: 'Playfair Display', serif;\n  font-style: italic; }\n\n.front-person-img {\n  width: 500px;\n  height: 500px;\n  overflow: hidden;\n  background: #F0F0F0;\n  position: relative;\n  z-index: 15;\n  transition: height .5s .3s ease, transform .5s .8s ease;\n  margin: 200px auto;\n  margin-bottom: 0;\n  transform: rotate(405deg);\n  border-radius: 0; }\n\n.front-person-img > img {\n  width: 500px;\n  height: 500px;\n  overflow: hidden;\n  background: #F0F0F0;\n  position: relative;\n  padding: 50px;\n  transform: rotate(-90deg); }\n\n.front-person-titles {\n  position: relative;\n  z-index: 10;\n  height: 500px;\n  width: 500px;\n  margin: auto;\n  margin-top: -500px;\n  transform: rotate(45deg); }\n\n.front-person-titles > span {\n  position: absolute;\n  z-index: 5;\n  display: block;\n  width: 100%;\n  font-family: Hind, sans-serif;\n  color: #CCC;\n  text-align: center;\n  font-size: 24px;\n  letter-spacing: 25px;\n  line-height: 1em;\n  text-transform: lowercase; }\n\n.front-person-titles > .t1 {\n  left: 5px;\n  bottom: 0;\n  transform: rotate(-90deg) translateY(-100%);\n  transform-origin: 0% 0%; }\n\n.front-person-titles > .t2 {\n  top: 5px;\n  left: 0;\n  transform: translateY(-100%); }\n\n.front-person-titles > .t3 {\n  left: 0;\n  bottom: 5px;\n  transform: translateY(100%) rotate(180deg); }\n\n.front-person-links {\n  margin: auto;\n  width: 500px;\n  height: 500px;\n  margin-top: -500px;\n  z-index: 25;\n  transform: rotate(45deg);\n  position: relative; }\n\n.front-person-links > ul > li {\n  display: block; }\n\n.front-person-links > ul {\n  font-size: 0;\n  z-index: 99;\n  position: absolute;\n  text-align: left;\n  white-space: nowrap;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: -15px; }\n\n.front-person-links > ul > li > a {\n  font-weight: bold;\n  display: block;\n  font-size: 14px;\n  padding: 25px 0;\n  cursor: pointer;\n  transition: all .3s ease;\n  position: relative;\n  color: #999;\n  text-align: left;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  text-decoration: none;\n  line-height: 1em; }\n\n.front-person-links > ul > li > a:before,\n.front-person-links > ul > li > a:after {\n  content: ' ';\n  height: 6px;\n  width: 15px;\n  background: #CCC;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  vertical-align: middle;\n  margin-right: 15px;\n  font-size: 0;\n  transition: all .3s ease;\n  display: none; }\n\n.front-person-links > ul > li > a:after {\n  margin-left: 15px;\n  margin-right: 0;\n  display: none; }\n\n.front-person-links > ul > li > a:hover {\n  color: #B7A389; }\n\n.front-person-links > ul > li > a:hover:after,\n.front-person-links > ul > li > a:hover:before {\n  width: 25px;\n  background: #999; }\n\n/*=======================================================================\n\tAbout Section\n=======================================================================*/\n.about-section {\n  padding-top: 0; }\n\n.about-icons {\n  padding-top: 110px;\n  padding-bottom: 0px; }\n\n.basic-info {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  position: relative;\n  border-bottom: solid 1px #F0F0F0; }\n\n.basic-info .section-header {\n  margin-bottom: 80px; }\n\n.about-info > p {\n  line-height: 1.8em;\n  margin-top: -.4em; }\n\n.about-person-img {\n  text-align: center; }\n\n.about-person-img > img {\n  max-width: 100%; }\n\n.info-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  z-index: 10;\n  margin-top: 20px;\n  margin-bottom: 60px; }\n\n.info-list:before,\n.info-list:after {\n  content: ' ';\n  display: table; }\n\n.info-list:after {\n  clear: both; }\n\n.info-list > li {\n  margin-bottom: 20px;\n  float: left;\n  width: 25%; }\n\n.info-list > li > .inner {\n  padding: 15px 0; }\n\n.info-list > li > * {\n  line-height: 1em;\n  margin: 0; }\n\n.info-list > li > .inner > h4 {\n  font-size: 13px;\n  letter-spacing: 4px;\n  margin-right: 16px;\n  margin-bottom: 8px;\n  display: block;\n  color: #333; }\n\n.info-list > li > .inner > p {\n  font-size: 16px;\n  color: #777;\n  display: block; }\n\n.funfacts-block {\n  padding-top: 60px;\n  padding-bottom: 20px;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: cover;\n  background-attachment: fixed; }\n\n.funfact {\n  position: relative;\n  text-align: center;\n  margin-bottom: 40px; }\n\n.funfact:after {\n  content: ' ';\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  right: -10px;\n  top: 50%;\n  margin-top: -10px;\n  border: solid 1px #FFF;\n  transform: rotate(45deg);\n  opacity: .4;\n  filter: Alpha(opacity=40); }\n\n.funfact:last-of-type:after {\n  display: none; }\n\n@media (max-width: 992px) {\n  .funfact:nth-of-type(2):after {\n    display: none; } }\n\n@media (max-width: 768px) {\n  .funfact:after {\n    display: none; } }\n\n.funfact > .content > h4 {\n  margin: 0;\n  color: #FFF;\n  font-size: 55px;\n  margin-bottom: 5px; }\n\n.funfact > .content > p {\n  color: #FFF;\n  letter-spacing: 2px;\n  margin-bottom: 0;\n  font-size: 13px;\n  opacity: .8; }\n\n.testimonials-block {\n  padding: 100px 0; }\n\n.testimonials-block .section-header {\n  margin-bottom: 45px; }\n\n.testimonials-slider {\n  position: relative; }\n\n.testimonial {\n  text-align: center; }\n\n.testimonial > p {\n  font-size: 22px;\n  line-height: 1.6em;\n  color: #777;\n  font-family: crimson text, serif;\n  font-weight: lighter;\n  font-style: italic; }\n\n.testimonial > .author {\n  margin-top: 45px; }\n\n.testimonial > .author > h4 {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 14px; }\n\n.testimonial > .author > p {\n  color: #777; }\n\n.testimonials-slider .owl-controls {\n  margin-top: 27px; }\n\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page > span {\n  height: 16px;\n  width: 16px;\n  border-radius: 0;\n  border: solid 1px #B7A389;\n  transform: rotate(-45deg);\n  margin: 11px;\n  background: transparent;\n  opacity: .6;\n  transition: all .3s ease; }\n\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page.active > span,\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page:hover > span {\n  background: #B7A389;\n  opacity: .8; }\n\n.testimonials-slider .owl-controls > .owl-pagination > .owl-page.active > span {\n  opacity: 1; }\n\n/*=======================================================================\n\tResume Section\n=======================================================================*/\n.timeline-block {\n  padding-bottom: 100px; }\n\n.timeline-block .timeline {\n  padding-bottom: 90px;\n  margin-top: 100px; }\n\n.timeline {\n  position: relative;\n  list-style: none;\n  margin: 0; }\n\n.timeline:before {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -1px;\n  height: 100%;\n  width: 2px;\n  background: #BBB;\n  border-radius: 0 0 5px 5px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: ' ';\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-desc {\n  float: right; }\n\n.timeline > li > .timeline-desc > h4 {\n  font-size: 14px;\n  letter-spacing: 2px;\n  margin-top: 0; }\n\n.timeline > li > .timeline-content {\n  float: left;\n  text-align: right;\n  position: relative; }\n\n.timeline > li.inverse > .timeline-content {\n  float: right;\n  text-align: left; }\n\n.timeline > li.inverse > .timeline-desc {\n  float: left;\n  text-align: right; }\n\n.timeline > li {\n  margin: 70px 0;\n  position: relative; }\n\n.timeline > li:not(.timeline-header):before {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 11px;\n  width: 11px;\n  transform: translateX(-50%) rotate(45deg);\n  background: #B7A389; }\n\n.timeline > li > div {\n  width: 50%;\n  padding: 0 35px; }\n\n.timeline > li > .timeline-content > h4 {\n  margin-top: 0;\n  margin-bottom: 7px;\n  letter-spacing: 2px;\n  font-size: 20px; }\n\n.timeline > li > .timeline-content > span {\n  display: block;\n  margin-bottom: 15px;\n  color: #BBB; }\n\n.timeline > li > .timeline-content > p {\n  margin: 0;\n  line-height: 1.7em;\n  color: #777; }\n\n.timeline > li.timeline-header {\n  background: #FFF;\n  position: relative;\n  z-index: 10;\n  text-align: center;\n  margin-bottom: 100px;\n  margin-top: 100px; }\n\n.timeline > li.timeline-header > h4 {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 16px;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  position: relative;\n  margin: 0;\n  letter-spacing: 4px; }\n\n.timeline > li.timeline-header:first-of-type {\n  margin-top: 0; }\n\n.timeline > li.timeline-header > h4:before,\n.timeline > li.timeline-header > h4:after {\n  content: ' ';\n  display: block;\n  height: 2px;\n  background: #BBB;\n  margin: 0 -5px;\n  margin-top: 8px; }\n\n.timeline > li.timeline-header > h4:before {\n  margin-top: 0;\n  margin-bottom: 8px; }\n\n@media (max-width: 992px) {\n  .timeline > li:before,\n  .timeline:before {\n    display: none; }\n  .timeline > li > .timeline-desc {\n    opacity: .5;\n    text-align: right;\n    float: left; }\n  .timeline > li.inverse > .timeline-desc {\n    text-align: left;\n    float: right; }\n  .timeline > li > div {\n    width: 85%;\n    float: none;\n    display: block;\n    margin-left: auto;\n    margin-right: auto; }\n  .timeline > li > .timeline-content {\n    text-align: right; } }\n\n.hobbies-block {\n  padding-top: 100px;\n  padding-bottom: 30px; }\n\n.hobbies-block .section-header {\n  margin-bottom: 100px; }\n\n.hobby {\n  position: relative;\n  text-align: center;\n  margin-bottom: 70px;\n  transition: all .3s ease-in-out; }\n\n.hobby > .icon {\n  font-size: 0;\n  background: #B7A389;\n  color: #FFF;\n  transform: rotate(45deg);\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  margin: auto;\n  margin-bottom: 40px;\n  transition: all .3s ease-in-out;\n  position: relative;\n  top: 0; }\n\n.hobby:hover > .icon {\n  top: -15px; }\n\n.hobby > .icon > i {\n  display: block;\n  height: inherit;\n  width: inherit;\n  line-height: inherit;\n  text-align: center;\n  transform: rotate(-45deg); }\n\n.hobby > .icon > i:before {\n  vertical-align: middle;\n  font-size: 45px;\n  line-height: 1em; }\n\n.hobby > h4 {\n  font-size: 18px;\n  letter-spacing: 2px;\n  margin-top: 0;\n  margin-top: 2px; }\n\n.skills-block {\n  padding: 100px 0;\n  padding-bottom: 40px; }\n\n.skills-block .section-header {\n  margin-bottom: 80px; }\n\n.skill {\n  position: relative;\n  margin-bottom: 60px; }\n\n.skill > h4 {\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  letter-spacing: 2px;\n  color: #B7A389; }\n\n.skill > .skill-bar {\n  height: 10px;\n  background: #F0F0F0; }\n\n.skill > .skill-bar > .bar {\n  background: #888;\n  height: 100%;\n  width: 0;\n  position: relative; }\n\n.skill > .skill-bar > .bar > .percent {\n  position: absolute;\n  padding: 4px 7px;\n  background: #888;\n  color: #FFF;\n  bottom: 100%;\n  right: 0;\n  font-size: 11px;\n  margin-bottom: 10px; }\n\n.skill > .skill-bar > .bar > .percent:after {\n  content: ' ';\n  position: absolute;\n  border-bottom: solid 7px transparent;\n  border-right: solid 7px #888;\n  bottom: -7px;\n  right: 0; }\n\n/*=======================================================================\n\tServices Section\n=======================================================================*/\n.services-section .main-title {\n  margin-bottom: 80px; }\n\n.services-block {\n  padding-top: 50px;\n  padding-bottom: 0;\n  border-bottom: solid 1px #F0F0F0; }\n\n.service {\n  position: relative;\n  text-align: center;\n  margin-bottom: 120px; }\n\n.service > .icon {\n  transform: rotate(45deg);\n  height: 90px;\n  width: 90px;\n  line-height: 90px;\n  vertical-align: middle;\n  text-align: center;\n  margin: auto;\n  transition: all .3s ease-in-out;\n  font-size: 0;\n  background: #B7A389;\n  color: #FFF;\n  position: relative;\n  top: 0; }\n\n.service:hover > .icon {\n  top: -15px; }\n\n.service > .icon > i:before {\n  line-height: 1em;\n  vertical-align: middle;\n  font-size: 45px; }\n\n.service > .icon > i {\n  display: inline-block;\n  line-height: inherit;\n  height: inherit;\n  width: inherit;\n  transform: rotate(-45deg); }\n\n.service > .content > h4 {\n  font-size: 20px;\n  margin-top: 50px;\n  margin-bottom: 8px;\n  letter-spacing: 2px; }\n\n.service > .content > p {\n  line-height: 1.6em;\n  color: #777; }\n\n.pricing-block {\n  padding: 120px 0; }\n\n.pricing-block .section-header {\n  margin-bottom: 90px; }\n\n.pricing-table {\n  max-width: 300px;\n  margin: auto;\n  background: #F4F4F4;\n  padding: 35px 0;\n  transition: all .3s ease; }\n\n.pricing-table > .header > h4 {\n  font-size: 18px;\n  text-transform: uppercase;\n  margin: 0; }\n\n.pricing-table > .header > .price {\n  margin-bottom: 30px;\n  margin-top: 30px; }\n\n.pricing-table > .header > .price > span {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  line-height: 1em; }\n\n.pricing-table > .header > .price > .currency {\n  vertical-align: top;\n  margin-top: 12px; }\n\n.pricing-table > .header > .price > .amount {\n  font-weight: bold;\n  font-size: 80px; }\n\n.pricing-table > .header > .price > .period {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 12px; }\n\n.pricing-table > .table-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 25px;\n  margin-bottom: 30px; }\n\n.pricing-table > .table-items > li {\n  padding: 10px 0; }\n\n.pricing-table > .table-btn {\n  padding: 11px 22px;\n  background: #333;\n  color: #FFF;\n  text-decoration: none;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  transition: all .3s ease; }\n\n.pricing-table > .table-btn:hover {\n  background: #B7A389; }\n\n.process-block {\n  padding: 100px 0; }\n\n.process-block .section-header {\n  margin-bottom: 80px; }\n\n.process {\n  position: relative; }\n\n.process > .number {\n  font-size: 16px;\n  font-weight: bold;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  line-height: 1em;\n  margin-bottom: 15px;\n  position: relative;\n  transform: rotate(45deg);\n  border: solid 1px #B7A389;\n  transition: all .3s ease-in-out;\n  color: #B7A389; }\n\n.process:hover > .number {\n  color: #FFF;\n  background: #B7A389; }\n\n.process > .number > span {\n  transform: rotate(-45deg);\n  display: block;\n  height: 28px;\n  width: 28px;\n  line-height: 28px;\n  text-align: center;\n  position: relative; }\n\n.process > .number > span:before {\n  content: ' ';\n  border-top: solid 8px transparent;\n  border-bottom: solid 8px transparent;\n  border-left: solid 8px #B7A389;\n  position: absolute;\n  top: 50%;\n  margin-top: -8px;\n  right: -43px; }\n\n.process.last > .number > span:before {\n  border: solid 4px #B7A389;\n  margin-top: -4px; }\n\n.process > .number > span:after {\n  content: ' ';\n  position: absolute;\n  height: 2px;\n  background: #B7A389;\n  width: 30px;\n  right: -35px;\n  top: 50%;\n  margin-top: -1px; }\n\n.process > .content > h4 {\n  font-size: 20px;\n  letter-spacing: 2px;\n  margin-bottom: 15px; }\n\n.process > .content > p {\n  line-height: 1.7em;\n  color: #777; }\n\n/*=======================================================================\n\tBlog Section\n=======================================================================*/\n.posts-block {\n  padding: 90px 0; }\n\n.posts-block .section-header {\n  margin-bottom: 60px; }\n\n.post {\n  position: relative;\n  margin-bottom: 60px; }\n\n.post > .media > img {\n  max-width: 100%; }\n\n.post > .content {\n  margin-top: 25px; }\n\n.post > .content > h4 {\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 8px; }\n\n.post > .content > h4 > a {\n  color: inherit;\n  text-decoration: none;\n  transition: all .3s ease; }\n\n.post > .content > h4 > a:hover {\n  color: #B7A389; }\n\n.post > .content > p {\n  line-height: 1.8em;\n  color: #777;\n  margin-bottom: 22px; }\n\n.post .post-icons {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n  margin-bottom: 22px; }\n\n.post .post-icons > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  font-size: 14px;\n  color: #777;\n  padding-right: 20px; }\n\n.post .post-icons > li > i {\n  margin-right: 5px; }\n\n.post .read-more {\n  color: #333;\n  text-decoration: none;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1; }\n\n.post .read-more:hover {\n  color: #B7A389; }\n\n.post .read-more > i {\n  vertical-align: middle;\n  font-size: 1.5em;\n  margin-left: 8px;\n  position: relative; }\n\n.post-more {\n  text-align: center;\n  margin-bottom: 50px; }\n\n.post-more .more-link,\nbody .symp-btn {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  padding: 12px 22px;\n  background: #333;\n  color: #FFF;\n  transition: all .3s ease;\n  border: none;\n  text-decoration: none !important; }\n\n.post-more .more-link:hover,\n.symp-btn:hover {\n  background: #B7A389;\n  color: #FFF; }\n\n.symp-btn.link-btn {\n  background: transparent;\n  color: #999; }\n\n.symp-btn.link-btn > i {\n  margin-right: 8px; }\n\n.symp-btn.link-btn:hover {\n  color: #333;\n  background: transparent; }\n\n.sidebar {\n  position: relative; }\n\n@media (min-width: 992px) {\n  .sidebar {\n    padding-left: 40px; } }\n\n.search-box {\n  position: relative; }\n\n.search-box > .search-input {\n  display: block;\n  width: 100%;\n  border: none;\n  padding: 0 9px;\n  height: 40px;\n  line-height: 40px;\n  padding-right: 47px;\n  background: #F0F0F0;\n  border: solid 1px #F0F0F0;\n  transition: all .3s ease; }\n\n.search-box > .search-input:focus {\n  background: #FFF; }\n\n.search-box > .search-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  background: #E0E0E0;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 20px;\n  color: #333;\n  text-decoration: none; }\n\n.search-box > .search-btn:hover {\n  background: #D0D0D0; }\n\n.widget-header {\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: 15px; }\n\n.widget-header > h4 {\n  letter-spacing: 2px; }\n\n.widget-header > h4 > i {\n  margin-right: 8px; }\n\n.sidebar-list {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.sidebar-list > li > a {\n  padding: 7px 0;\n  color: #777;\n  text-decoration: none;\n  display: block;\n  line-height: 1.6em; }\n\n.sidebar-list > li > a:hover {\n  color: #B7A389; }\n\n.sidebar-list.list-inline {\n  font-size: 0; }\n\n.sidebar-list.list-inline > li {\n  font-size: 14px; }\n\n/*=======================================================================\n\tPortfolio Section\n=======================================================================*/\n.portfolio-block {\n  padding-bottom: 100px; }\n\n.portfolio-block .section-header {\n  margin-bottom: 45px; }\n\n.portfolio-items > .item {\n  width: 33.333%;\n  position: relative; }\n\n@media (max-width: 992px) {\n  .portfolio-items > .item {\n    width: 50%; } }\n\n@media (max-width: 768px) {\n  .portfolio-items > .item {\n    width: 100%; } }\n\n.portfolio-items > .item > .inner > img {\n  width: 100%; }\n\n.portfolio-items > .item > .inner {\n  position: relative; }\n\n.portfolio-items > .item > .inner > .caption {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #333;\n  background: rgba(51, 51, 51, 0.8);\n  color: #FFF;\n  text-align: center;\n  z-index: 10;\n  opacity: 0;\n  visibility: hidden;\n  transition: all .3s ease; }\n\n.portfolio-items > .item > .inner:hover > .caption {\n  opacity: 1;\n  visibility: visible; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 75%; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > h4 {\n  font-size: 22px;\n  margin: 0;\n  margin-bottom: 30px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(15px);\n  transition: all .3s .1s ease; }\n\n.portfolio-items > .item > .inner:hover > .caption > .caption-inner > h4 {\n  transform: translateY(0);\n  opacity: 1;\n  visibility: visible; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links {\n  list-style: none;\n  color: #FFF; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  margin: 0 11px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(15px);\n  transition: all .3s .2s ease; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li:nth-of-type(2) {\n  transition-delay: .3s; }\n\n.portfolio-items > .item > .inner:hover > .caption > .caption-inner > .links > li {\n  transform: translateY(0);\n  opacity: 1;\n  visibility: visible; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a {\n  display: block;\n  height: 30px;\n  width: 30px;\n  line-height: 30px;\n  font-size: 0;\n  border: solid 1px #FFF;\n  color: #FFF;\n  transform: rotate(45deg); }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a > i {\n  display: block;\n  height: inherit;\n  width: inherit;\n  line-height: inherit;\n  vertical-align: middle;\n  transform: rotate(-45deg); }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a > i:before {\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 1em; }\n\n.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a:hover {\n  background: #FFF;\n  background: rgba(255, 255, 255, 0.9);\n  color: #333; }\n\n#portfolio-filters {\n  text-align: center;\n  margin-bottom: 45px; }\n\n#portfolio-filters > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 0; }\n\n#portfolio-filters > ul > li {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  font-size: 14px;\n  padding: 0 26px;\n  position: relative; }\n\n#portfolio-filters > ul > li:last-of-type:after {\n  display: none; }\n\n#portfolio-filters > ul > li:after {\n  content: ' ';\n  position: absolute;\n  right: -9px;\n  top: 50%;\n  margin-top: -3px;\n  height: 6px;\n  width: 6px;\n  border: solid 1px #E5E5E5;\n  transform: rotate(45deg); }\n\n#portfolio-filters > ul > li > a {\n  display: block;\n  color: #999;\n  text-decoration: none; }\n\n#portfolio-filters > ul > li > a:hover,\n#portfolio-filters > ul > li > a.active {\n  color: #333; }\n\n#portfolio-filters > ul > li > a.active {\n  text-decoration: line-through; }\n\n/*=======================================================================\n\tContact Section\n=======================================================================*/\n.contact-block {\n  padding-bottom: 100px; }\n\n.contact-section .section-header {\n  margin-bottom: 60px; }\n\n.form-control {\n  padding: 10px;\n  height: auto;\n  border: solid 1px #BBB;\n  box-shadow: none;\n  border-radius: 0;\n  vertical-align: middle; }\n\n.form-control:focus {\n  border-color: #B7A389;\n  box-shadow: none; }\n\n.contact-form .form-group {\n  margin-bottom: 25px; }\n\n.contact-form .alert {\n  border-radius: 0; }\n\n/*=======================================================================\n\tWork Page\n=======================================================================*/\n.single-work {\n  padding-top: 80px;\n  padding-bottom: 130px; }\n\n.work-info {\n  list-style: none;\n  margin: 0;\n  margin-top: 50px; }\n\n@media (min-width: 992px) {\n  .work-info {\n    padding-left: 25px;\n    margin-top: 0; } }\n\n.work-info > li {\n  margin-bottom: 55px;\n  margin-top: 5px;\n  padding: 0; }\n\n.work-info > li > h4 > i {\n  margin-right: 8px; }\n\n.work-info > li > h4 {\n  font-size: 16px;\n  letter-spacing: 2px;\n  margin: 0;\n  margin-bottom: 10px;\n  font-weight: bold; }\n\n.work-info > li > p {\n  color: #777; }\n\n.work-content > .block {\n  margin-top: 60px; }\n\n.work-content > .block h4 {\n  font-size: 18px;\n  margin-bottom: 15px;\n  letter-spacing: 2px; }\n\n.work-content > .block p {\n  line-height: 1.9em; }\n\n/*=======================================================================\n\tSingle Post Page\n=======================================================================*/\n.blog-page .post > .content > .post-icons {\n  margin-bottom: 30px; }\n\n.blog-page .post > .content > h4 {\n  font-size: 28px;\n  margin-bottom: 10px; }\n\n.blog-page .post > .content > p {\n  line-height: 2em;\n  text-align: justify; }\n\n/*=======================================================================\n\tResponsive CSS\n=======================================================================*/\n@media (max-width: 992px) {\n  .about-person-img {\n    margin-bottom: 40px;\n    text-align: center; }\n  .info-list > li {\n    width: 50%; }\n  .front-section {\n    padding-bottom: 110px; }\n  .front-heading > h2 {\n    font-size: 50px; }\n  .front-person-img {\n    height: 360px;\n    width: 360px; }\n  .front-person-img > img {\n    transform: rotate(-45deg) translateY(45px); }\n  .front-person-links {\n    transform: rotate(0deg);\n    margin-top: 110px;\n    text-align: center;\n    position: relative;\n    margin-bottom: 0;\n    width: auto;\n    height: auto; }\n  .front-person-links > ul {\n    top: 0;\n    left: auto;\n    position: relative;\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    transform: none; }\n  .front-person-links > ul > li {\n    margin-bottom: 1px;\n    display: block; }\n  .front-person-links > ul > li > a:before,\n  .front-person-links > ul > li > a:after {\n    position: absolute;\n    left: 0;\n    height: 2px;\n    top: 50%;\n    margin-top: -1px;\n    display: block;\n    box-shadow: none;\n    opacity: .5;\n    display: none; }\n  .front-person-links > ul > li > a:after {\n    left: auto;\n    right: 0; }\n  .front-person-links > ul > li > a:hover:before {\n    width: 15px; }\n  .front-person-links > ul > li > a {\n    text-align: center;\n    padding: 22px 48px;\n    display: block;\n    font-size: 22px;\n    letter-spacing: 2px;\n    text-transform: none; }\n  .front-person-titles {\n    margin-top: 125px;\n    transform: none;\n    text-align: center;\n    width: 80%;\n    height: auto;\n    opacity: 1; }\n  .front-person-titles > span {\n    position: relative;\n    transform: none !important;\n    display: block;\n    margin: 25px 0;\n    letter-spacing: 10px;\n    font-size: 16px;\n    text-transform: uppercase;\n    top: auto !important;\n    left: auto !important;\n    bottom: auto !important; }\n  .front-heading {\n    margin-top: 80px; } }\n\n@media (max-width: 768px) {\n  .front-person-links {\n    margin-top: 65px; }\n  .front-person-img {\n    width: 65%;\n    padding-top: 65%;\n    height: 0;\n    margin-top: 120px; }\n  .front-person-img > img {\n    transform: rotate(-45deg) translateY(100px);\n    position: absolute;\n    bottom: 0;\n    left: -40px; } }\n", ""]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1nL2JnLWZ1bmZhY3RzLmpwZyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3M/YWZlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBLGNBQWMsbUJBQU8sQ0FBQyx3TUFBaUc7O0FBRXZILDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlZjczM2E3N2RhM2Y4NTJjYjhmYWIxMjc1YmUyODA2MS5qcGdcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNzAwLDYwMCwzMDB8UGxheWZhaXIrRGlzcGxheTo3MDBpdGFsaWMsNDAwaXRhbGljfENyaW1zb24rVGV4dDo0MDBpdGFsaWMsNjAwaXRhbGljfE9wZW4rU2Fuczo0MDAsNzAwKTtcIiwgXCJcIl0pO1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltZy9iZy1mdW5mYWN0cy5qcGdcIikpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qSW1wb3J0aW5nIEdvb2dsZSBGb250cyAqL1xcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRHZW5lcmFsIENTU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjsgfVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbi5oMSxcXG4uaDIsXFxuLmgzLFxcbi5oNCxcXG4uaDUsXFxuLmg2IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXksIHNhbnMtc2VyaWY7IH1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuLnBhcmFsbGF4IHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG5cXG5ib2R5LnNlY3Rpb24tc2hvdyB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuYm9keSBhLmNsb3NlLWJ0bixcXG5ib2R5LnNlY3Rpb24tc2hvdyAuY2xvc2UtYnRuIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyAxLjJzIGVhc2UsIGJhY2tncm91bmQgLjNzIGVhc2U7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICB3aWR0aDogNjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdG9wOiAxOHB4O1xcbiAgcmlnaHQ6IDE4cHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogLTk5OyB9XFxuXFxuLmNsb3NlLWJ0biA+IHNwYW4ge1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJhY2tncm91bmQ6ICNCQkI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gIG1hcmdpbi10b3A6IC0xLjVweDsgfVxcblxcbi5jbG9zZS1idG4gPiBzcGFuOmJlZm9yZSB7XFxuICBjb250ZW50OiAnICc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6ICNCN0EzODk7IH1cXG5cXG4uY2xvc2UtYnRuID4gc3BhbjpudGgtb2YtdHlwZSgxKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG5cXG4uY2xvc2UtYnRuID4gc3BhbjpudGgtb2YtdHlwZSgyKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLmNsb3NlLWJ0biA+IHNwYW46bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uY2xvc2UtYnRuID4gc3BhbjpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xcbiAgcmlnaHQ6IDA7IH1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyID4gc3BhbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jbG9zZS1idG46aG92ZXIgPiBzcGFuOmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jbG9zZS1idG46aG92ZXIgPiBzcGFuOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAuM3M7IH1cXG5cXG4uc2VjdGlvbi1oZWFkZXIgaDIge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuXFxuLnNlY3Rpb24taGVhZGVyIHAge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXG4gIGNvbG9yOiAjOEE4QThBO1xcbiAgZm9udC1zaXplOiAxNnB4OyB9XFxuXFxuI3dyYXBwZXIge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuXFxuLmZyb250LXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI0ZGRjsgfVxcblxcbi5zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJvcmRlcjogc29saWQgNHB4ICNCQkI7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICB6LWluZGV4OiAtOTtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTsgfVxcblxcbmJvZHkuc2VjdGlvbi1zaG93IC5zZWN0aW9uLmFjdGl2ZSB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyAxLjJzIGVhc2U7XFxuICB6LWluZGV4OiA5OTtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuXFxuLmJnLWxpZ2h0Z3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjRjVGNUY1OyB9XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAzMHB4IDA7XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNGMEYwRjA7IH1cXG5cXG4uZm9vdGVyIGg0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiAzLjVweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4uZm9vdGVyLXNvY2lhbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMDsgfVxcblxcbi5mb290ZXItc29jaWFsID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cXG5cXG4uZm9vdGVyLXNvY2lhbCA+IGxpID4gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjQkJCO1xcbiAgYmFja2dyb3VuZDogI0YwRjBGMDtcXG4gIGZvbnQtc2l6ZTogMDsgfVxcblxcbi5mb290ZXItc29jaWFsID4gbGkgPiBhID4gaSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG5cXG4uZm9vdGVyLXNvY2lhbCA+IGxpID4gYSA+IGk6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLmZvb3Rlci1zb2NpYWwgPiBsaSA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI0I3QTM4OTtcXG4gIGNvbG9yOiAjRkZGOyB9XFxuXFxuLnNlY3Rpb24tYmxvY2sgPiAuY29udGFpbmVyLFxcbi5zZWN0aW9uLWJsb2NrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zZWN0aW9uLWJsb2NrIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0UHJlbG9hZGVyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbi5qcyAjcHJlbG9hZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICB6LWluZGV4OiAxOTk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7IH1cXG5cXG4uanMgI3ByZWxvYWRlciAubG9hZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG5cXG4uanMgYm9keS5sb2FkZWQgI3ByZWxvYWRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSgtMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgei1pbmRleDogLTE7IH1cXG5cXG4ubm8tanMgI3ByZWxvYWRlciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmRpdmlkZXItZHJhZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTVweCAwOyB9XFxuXFxuLmRpdmlkZXItZHJhZnQ6YmVmb3JlLFxcbi5kaXZpZGVyLWRyYWZ0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDsgfVxcblxcbi5kaXZpZGVyLWRyYWZ0LmNlbnRlciB7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cXG4uZGl2aWRlci1kcmFmdC5jZW50ZXI6YmVmb3JlLFxcbi5kaXZpZGVyLWRyYWZ0LmNlbnRlcjphZnRlciB7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbi5kaXZpZGVyLWRyYWZ0OmJlZm9yZSB7XFxuICB0b3A6IC02cHg7IH1cXG5cXG4uZGl2aWRlci1kcmFmdDphZnRlciB7XFxuICBib3R0b206IC02cHg7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0RnJvbnQgU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG5ib2R5LnNlY3Rpb24tc2hvdyAudHJhbnNpdGlvbi1tYXNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjYwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgei1pbmRleDogMjI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYW5pbWF0aW9uOiBmaWxsMiAuOHMgLjRzIGJvdGggZWFzZTsgfVxcblxcbmJvZHkgLnRyYW5zaXRpb24tbWFzazpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmJvZHkuc2VjdGlvbi1zaG93IC50cmFuc2l0aW9uLW1hc2s6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbjogZmlsbCAuNHMgYm90aCBlYXNlO1xcbiAgYmFja2dyb3VuZDogI0NDQzsgfVxcblxcbkBrZXlmcmFtZXMgZmlsbDIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICB6LWluZGV4OiA1MDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiBhdXRvOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZpbGwge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMCU7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXFxuLmZyb250LXNlY3Rpb24ge1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uZnJvbnQtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxOTBweDsgfVxcblxcbi5mcm9udC1oZWFkaW5nID4gaDIge1xcbiAgZm9udC1zaXplOiA1NXB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICB6LWluZGV4OiAxMDtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWltZyB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxNTtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAuNXMgLjNzIGVhc2UsIHRyYW5zZm9ybSAuNXMgLjhzIGVhc2U7XFxuICBtYXJnaW46IDIwMHB4IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWltZyA+IGltZyB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxcblxcbi5mcm9udC1wZXJzb24tdGl0bGVzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IC01MDBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi5mcm9udC1wZXJzb24tdGl0bGVzID4gc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA1O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBIaW5kLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNDQ0M7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlOyB9XFxuXFxuLmZyb250LXBlcnNvbi10aXRsZXMgPiAudDEge1xcbiAgbGVmdDogNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlOyB9XFxuXFxuLmZyb250LXBlcnNvbi10aXRsZXMgPiAudDIge1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgfVxcblxcbi5mcm9udC1wZXJzb24tdGl0bGVzID4gLnQzIHtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGUoMTgwZGVnKTsgfVxcblxcbi5mcm9udC1wZXJzb24tbGlua3Mge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbi10b3A6IC01MDBweDtcXG4gIHotaW5kZXg6IDI1O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmZyb250LXBlcnNvbi1saW5rcyA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgei1pbmRleDogOTk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGxlZnQ6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4OyB9XFxuXFxuLmZyb250LXBlcnNvbi1saW5rcyA+IHVsID4gbGkgPiBhIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiAyNXB4IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogIzk5OTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07IH1cXG5cXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGE6YmVmb3JlLFxcbi5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBoZWlnaHQ6IDZweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogI0NDQztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBmb250LXNpemU6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmZyb250LXBlcnNvbi1saW5rcyA+IHVsID4gbGkgPiBhOmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTpob3ZlciB7XFxuICBjb2xvcjogI0I3QTM4OTsgfVxcblxcbi5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTpob3ZlcjphZnRlcixcXG4uZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGE6aG92ZXI6YmVmb3JlIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZDogIzk5OTsgfVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRBYm91dCBTZWN0aW9uXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbi5hYm91dC1zZWN0aW9uIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLmFib3V0LWljb25zIHtcXG4gIHBhZGRpbmctdG9wOiAxMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7IH1cXG5cXG4uYmFzaWMtaW5mbyB7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0YwRjBGMDsgfVxcblxcbi5iYXNpYy1pbmZvIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4OyB9XFxuXFxuLmFib3V0LWluZm8gPiBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gIG1hcmdpbi10b3A6IC0uNGVtOyB9XFxuXFxuLmFib3V0LXBlcnNvbi1pbWcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmFib3V0LXBlcnNvbi1pbWcgPiBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuLmluZm8tbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7IH1cXG5cXG4uaW5mby1saXN0OmJlZm9yZSxcXG4uaW5mby1saXN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIGRpc3BsYXk6IHRhYmxlOyB9XFxuXFxuLmluZm8tbGlzdDphZnRlciB7XFxuICBjbGVhcjogYm90aDsgfVxcblxcbi5pbmZvLWxpc3QgPiBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMjUlOyB9XFxuXFxuLmluZm8tbGlzdCA+IGxpID4gLmlubmVyIHtcXG4gIHBhZGRpbmc6IDE1cHggMDsgfVxcblxcbi5pbmZvLWxpc3QgPiBsaSA+ICoge1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5pbmZvLWxpc3QgPiBsaSA+IC5pbm5lciA+IGg0IHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuLmluZm8tbGlzdCA+IGxpID4gLmlubmVyID4gcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzc3NztcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLmZ1bmZhY3RzLWJsb2NrIHtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgfVxcblxcbi5mdW5mYWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cXG5cXG4uZnVuZmFjdDphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjRkZGO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgb3BhY2l0eTogLjQ7XFxuICBmaWx0ZXI6IEFscGhhKG9wYWNpdHk9NDApOyB9XFxuXFxuLmZ1bmZhY3Q6bGFzdC1vZi10eXBlOmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC5mdW5mYWN0Om50aC1vZi10eXBlKDIpOmFmdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZnVuZmFjdDphZnRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbi5mdW5mYWN0ID4gLmNvbnRlbnQgPiBoNCB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtc2l6ZTogNTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxcblxcbi5mdW5mYWN0ID4gLmNvbnRlbnQgPiBwIHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBvcGFjaXR5OiAuODsgfVxcblxcbi50ZXN0aW1vbmlhbHMtYmxvY2sge1xcbiAgcGFkZGluZzogMTAwcHggMDsgfVxcblxcbi50ZXN0aW1vbmlhbHMtYmxvY2sgLnNlY3Rpb24taGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7IH1cXG5cXG4udGVzdGltb25pYWxzLXNsaWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4udGVzdGltb25pYWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRlc3RpbW9uaWFsID4gcCB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBsaW5lLWhlaWdodDogMS42ZW07XFxuICBjb2xvcjogIzc3NztcXG4gIGZvbnQtZmFtaWx5OiBjcmltc29uIHRleHQsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4udGVzdGltb25pYWwgPiAuYXV0aG9yIHtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7IH1cXG5cXG4udGVzdGltb25pYWwgPiAuYXV0aG9yID4gaDQge1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG4udGVzdGltb25pYWwgPiAuYXV0aG9yID4gcCB7XFxuICBjb2xvcjogIzc3NzsgfVxcblxcbi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5vd2wtY29udHJvbHMge1xcbiAgbWFyZ2luLXRvcDogMjdweDsgfVxcblxcbi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5vd2wtY29udHJvbHMgPiAub3dsLXBhZ2luYXRpb24gPiAub3dsLXBhZ2UgPiBzcGFuIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNCN0EzODk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgbWFyZ2luOiAxMXB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvcGFjaXR5OiAuNjtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTsgfVxcblxcbi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5vd2wtY29udHJvbHMgPiAub3dsLXBhZ2luYXRpb24gPiAub3dsLXBhZ2UuYWN0aXZlID4gc3BhbixcXG4udGVzdGltb25pYWxzLXNsaWRlciAub3dsLWNvbnRyb2xzID4gLm93bC1wYWdpbmF0aW9uID4gLm93bC1wYWdlOmhvdmVyID4gc3BhbiB7XFxuICBiYWNrZ3JvdW5kOiAjQjdBMzg5O1xcbiAgb3BhY2l0eTogLjg7IH1cXG5cXG4udGVzdGltb25pYWxzLXNsaWRlciAub3dsLWNvbnRyb2xzID4gLm93bC1wYWdpbmF0aW9uID4gLm93bC1wYWdlLmFjdGl2ZSA+IHNwYW4ge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRSZXN1bWUgU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4udGltZWxpbmUtYmxvY2sge1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4OyB9XFxuXFxuLnRpbWVsaW5lLWJsb2NrIC50aW1lbGluZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogOTBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4OyB9XFxuXFxuLnRpbWVsaW5lIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4udGltZWxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNCQkI7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDsgfVxcblxcbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcXG4udGltZWxpbmUgPiBsaTphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBkaXNwbGF5OiB0YWJsZTsgfVxcblxcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoOyB9XFxuXFxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtZGVzYyB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1kZXNjID4gaDQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1jb250ZW50IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4udGltZWxpbmUgPiBsaS5pbnZlcnNlID4gLnRpbWVsaW5lLWNvbnRlbnQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi50aW1lbGluZSA+IGxpLmludmVyc2UgPiAudGltZWxpbmUtZGVzYyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRpbWVsaW5lID4gbGkge1xcbiAgbWFyZ2luOiA3MHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4udGltZWxpbmUgPiBsaTpub3QoLnRpbWVsaW5lLWhlYWRlcik6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIGhlaWdodDogMTFweDtcXG4gIHdpZHRoOiAxMXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICBiYWNrZ3JvdW5kOiAjQjdBMzg5OyB9XFxuXFxuLnRpbWVsaW5lID4gbGkgPiBkaXYge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDAgMzVweDsgfVxcblxcbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWNvbnRlbnQgPiBoNCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWNvbnRlbnQgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGNvbG9yOiAjQkJCOyB9XFxuXFxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtY29udGVudCA+IHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xcbiAgY29sb3I6ICM3Nzc7IH1cXG5cXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDsgfVxcblxcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWhlYWRlciA+IGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7IH1cXG5cXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1oZWFkZXI6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaGVhZGVyID4gaDQ6YmVmb3JlLFxcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWhlYWRlciA+IGg0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjQkJCO1xcbiAgbWFyZ2luOiAwIC01cHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7IH1cXG5cXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1oZWFkZXIgPiBoNDpiZWZvcmUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxcbiAgLnRpbWVsaW5lOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWRlc2Mge1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAudGltZWxpbmUgPiBsaS5pbnZlcnNlID4gLnRpbWVsaW5lLWRlc2Mge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG4gIC50aW1lbGluZSA+IGxpID4gZGl2IHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XFxuICAudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH0gfVxcblxcbi5ob2JiaWVzLWJsb2NrIHtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4OyB9XFxuXFxuLmhvYmJpZXMtYmxvY2sgLnNlY3Rpb24taGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4OyB9XFxuXFxuLmhvYmJ5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyB9XFxuXFxuLmhvYmJ5ID4gLmljb24ge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgYmFja2dyb3VuZDogI0I3QTM4OTtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBsaW5lLWhlaWdodDogODBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwOyB9XFxuXFxuLmhvYmJ5OmhvdmVyID4gLmljb24ge1xcbiAgdG9wOiAtMTVweDsgfVxcblxcbi5ob2JieSA+IC5pY29uID4gaSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLmhvYmJ5ID4gLmljb24gPiBpOmJlZm9yZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZm9udC1zaXplOiA0NXB4O1xcbiAgbGluZS1oZWlnaHQ6IDFlbTsgfVxcblxcbi5ob2JieSA+IGg0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLXRvcDogMnB4OyB9XFxuXFxuLnNraWxscy1ibG9jayB7XFxuICBwYWRkaW5nOiAxMDBweCAwO1xcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7IH1cXG5cXG4uc2tpbGxzLWJsb2NrIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4OyB9XFxuXFxuLnNraWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7IH1cXG5cXG4uc2tpbGwgPiBoNCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGNvbG9yOiAjQjdBMzg5OyB9XFxuXFxuLnNraWxsID4gLnNraWxsLWJhciB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRjBGMEYwOyB9XFxuXFxuLnNraWxsID4gLnNraWxsLWJhciA+IC5iYXIge1xcbiAgYmFja2dyb3VuZDogIzg4ODtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnNraWxsID4gLnNraWxsLWJhciA+IC5iYXIgPiAucGVyY2VudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiA0cHggN3B4O1xcbiAgYmFja2dyb3VuZDogIzg4ODtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXFxuLnNraWxsID4gLnNraWxsLWJhciA+IC5iYXIgPiAucGVyY2VudDphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCA3cHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDdweCAjODg4O1xcbiAgYm90dG9tOiAtN3B4O1xcbiAgcmlnaHQ6IDA7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0U2VydmljZXMgU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4uc2VydmljZXMtc2VjdGlvbiAubWFpbi10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4OyB9XFxuXFxuLnNlcnZpY2VzLWJsb2NrIHtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0YwRjBGMDsgfVxcblxcbi5zZXJ2aWNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEyMHB4OyB9XFxuXFxuLnNlcnZpY2UgPiAuaWNvbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICB3aWR0aDogOTBweDtcXG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XFxuICBmb250LXNpemU6IDA7XFxuICBiYWNrZ3JvdW5kOiAjQjdBMzg5O1xcbiAgY29sb3I6ICNGRkY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7IH1cXG5cXG4uc2VydmljZTpob3ZlciA+IC5pY29uIHtcXG4gIHRvcDogLTE1cHg7IH1cXG5cXG4uc2VydmljZSA+IC5pY29uID4gaTpiZWZvcmUge1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBmb250LXNpemU6IDQ1cHg7IH1cXG5cXG4uc2VydmljZSA+IC5pY29uID4gaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbi5zZXJ2aWNlID4gLmNvbnRlbnQgPiBoNCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDsgfVxcblxcbi5zZXJ2aWNlID4gLmNvbnRlbnQgPiBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG4gIGNvbG9yOiAjNzc3OyB9XFxuXFxuLnByaWNpbmctYmxvY2sge1xcbiAgcGFkZGluZzogMTIwcHggMDsgfVxcblxcbi5wcmljaW5nLWJsb2NrIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA5MHB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XFxuICBwYWRkaW5nOiAzNXB4IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7IH1cXG5cXG4ucHJpY2luZy10YWJsZSA+IC5oZWFkZXIgPiBoNCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlID4gc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBsaW5lLWhlaWdodDogMWVtOyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlID4gLmN1cnJlbmN5IHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tdG9wOiAxMnB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAuaGVhZGVyID4gLnByaWNlID4gLmFtb3VudCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogODBweDsgfVxcblxcbi5wcmljaW5nLXRhYmxlID4gLmhlYWRlciA+IC5wcmljZSA+IC5wZXJpb2Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4ucHJpY2luZy10YWJsZSA+IC50YWJsZS1pdGVtcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAudGFibGUtaXRlbXMgPiBsaSB7XFxuICBwYWRkaW5nOiAxMHB4IDA7IH1cXG5cXG4ucHJpY2luZy10YWJsZSA+IC50YWJsZS1idG4ge1xcbiAgcGFkZGluZzogMTFweCAyMnB4O1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjRkZGO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlOyB9XFxuXFxuLnByaWNpbmctdGFibGUgPiAudGFibGUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNCN0EzODk7IH1cXG5cXG4ucHJvY2Vzcy1ibG9jayB7XFxuICBwYWRkaW5nOiAxMDBweCAwOyB9XFxuXFxuLnByb2Nlc3MtYmxvY2sgLnNlY3Rpb24taGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7IH1cXG5cXG4ucHJvY2VzcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucHJvY2VzcyA+IC5udW1iZXIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNCN0EzODk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbiAgY29sb3I6ICNCN0EzODk7IH1cXG5cXG4ucHJvY2Vzczpob3ZlciA+IC5udW1iZXIge1xcbiAgY29sb3I6ICNGRkY7XFxuICBiYWNrZ3JvdW5kOiAjQjdBMzg5OyB9XFxuXFxuLnByb2Nlc3MgPiAubnVtYmVyID4gc3BhbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICB3aWR0aDogMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnByb2Nlc3MgPiAubnVtYmVyID4gc3BhbjpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgYm9yZGVyLXRvcDogc29saWQgOHB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgOHB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDhweCAjQjdBMzg5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgcmlnaHQ6IC00M3B4OyB9XFxuXFxuLnByb2Nlc3MubGFzdCA+IC5udW1iZXIgPiBzcGFuOmJlZm9yZSB7XFxuICBib3JkZXI6IHNvbGlkIDRweCAjQjdBMzg5O1xcbiAgbWFyZ2luLXRvcDogLTRweDsgfVxcblxcbi5wcm9jZXNzID4gLm51bWJlciA+IHNwYW46YWZ0ZXIge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjQjdBMzg5O1xcbiAgd2lkdGg6IDMwcHg7XFxuICByaWdodDogLTM1cHg7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xcHg7IH1cXG5cXG4ucHJvY2VzcyA+IC5jb250ZW50ID4gaDQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cXG5cXG4ucHJvY2VzcyA+IC5jb250ZW50ID4gcCB7XFxuICBsaW5lLWhlaWdodDogMS43ZW07XFxuICBjb2xvcjogIzc3NzsgfVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRCbG9nIFNlY3Rpb25cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxuLnBvc3RzLWJsb2NrIHtcXG4gIHBhZGRpbmc6IDkwcHggMDsgfVxcblxcbi5wb3N0cy1ibG9jayAuc2VjdGlvbi1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcblxcbi5wb3N0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7IH1cXG5cXG4ucG9zdCA+IC5tZWRpYSA+IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4ucG9zdCA+IC5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7IH1cXG5cXG4ucG9zdCA+IC5jb250ZW50ID4gaDQge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxcblxcbi5wb3N0ID4gLmNvbnRlbnQgPiBoNCA+IGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7IH1cXG5cXG4ucG9zdCA+IC5jb250ZW50ID4gaDQgPiBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjQjdBMzg5OyB9XFxuXFxuLnBvc3QgPiAuY29udGVudCA+IHAge1xcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgY29sb3I6ICM3Nzc7XFxuICBtYXJnaW4tYm90dG9tOiAyMnB4OyB9XFxuXFxuLnBvc3QgLnBvc3QtaWNvbnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIycHg7IH1cXG5cXG4ucG9zdCAucG9zdC1pY29ucyA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxcblxcbi5wb3N0IC5wb3N0LWljb25zID4gbGkgPiBpIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuXFxuLnBvc3QgLnJlYWQtbW9yZSB7XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTsgfVxcblxcbi5wb3N0IC5yZWFkLW1vcmU6aG92ZXIge1xcbiAgY29sb3I6ICNCN0EzODk7IH1cXG5cXG4ucG9zdCAucmVhZC1tb3JlID4gaSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucG9zdC1tb3JlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7IH1cXG5cXG4ucG9zdC1tb3JlIC5tb3JlLWxpbmssXFxuYm9keSAuc3ltcC1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgcGFkZGluZzogMTJweCAyMnB4O1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjRkZGO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4ucG9zdC1tb3JlIC5tb3JlLWxpbms6aG92ZXIsXFxuLnN5bXAtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNCN0EzODk7XFxuICBjb2xvcjogI0ZGRjsgfVxcblxcbi5zeW1wLWJ0bi5saW5rLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjOTk5OyB9XFxuXFxuLnN5bXAtYnRuLmxpbmstYnRuID4gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcblxcbi5zeW1wLWJ0bi5saW5rLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzMzMztcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuXFxuLnNpZGViYXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuc2lkZWJhciB7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDsgfSB9XFxuXFxuLnNlYXJjaC1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnNlYXJjaC1ib3ggPiAuc2VhcmNoLWlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDlweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy1yaWdodDogNDdweDtcXG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjRjBGMEYwO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlOyB9XFxuXFxuLnNlYXJjaC1ib3ggPiAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNGRkY7IH1cXG5cXG4uc2VhcmNoLWJveCA+IC5zZWFyY2gtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQ6ICNFMEUwRTA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4uc2VhcmNoLWJveCA+IC5zZWFyY2gtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNEMEQwRDA7IH1cXG5cXG4ud2lkZ2V0LWhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcblxcbi53aWRnZXQtaGVhZGVyID4gaDQge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDsgfVxcblxcbi53aWRnZXQtaGVhZGVyID4gaDQgPiBpIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuXFxuLnNpZGViYXItbGlzdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5zaWRlYmFyLWxpc3QgPiBsaSA+IGEge1xcbiAgcGFkZGluZzogN3B4IDA7XFxuICBjb2xvcjogIzc3NztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDEuNmVtOyB9XFxuXFxuLnNpZGViYXItbGlzdCA+IGxpID4gYTpob3ZlciB7XFxuICBjb2xvcjogI0I3QTM4OTsgfVxcblxcbi5zaWRlYmFyLWxpc3QubGlzdC1pbmxpbmUge1xcbiAgZm9udC1zaXplOiAwOyB9XFxuXFxuLnNpZGViYXItbGlzdC5saXN0LWlubGluZSA+IGxpIHtcXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXHRQb3J0Zm9saW8gU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4ucG9ydGZvbGlvLWJsb2NrIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDsgfVxcblxcbi5wb3J0Zm9saW8tYmxvY2sgLnNlY3Rpb24taGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0ge1xcbiAgd2lkdGg6IDMzLjMzMyU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSB7XFxuICAgIHdpZHRoOiA1MCU7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7IH0gfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciA+IGltZyB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgYmFja2dyb3VuZDogcmdiYSg1MSwgNTEsIDUxLCAwLjgpO1xcbiAgY29sb3I6ICNGRkY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXI6aG92ZXIgPiAuY2FwdGlvbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciA+IC5jYXB0aW9uID4gLmNhcHRpb24taW5uZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA3NSU7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gaDQge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIC4xcyBlYXNlOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyOmhvdmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IGg0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IC5saW5rcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgY29sb3I6ICNGRkY7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gLmxpbmtzID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgbWFyZ2luOiAwIDExcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyAuMnMgZWFzZTsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciA+IC5jYXB0aW9uID4gLmNhcHRpb24taW5uZXIgPiAubGlua3MgPiBsaTpudGgtb2YtdHlwZSgyKSB7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAuM3M7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXI6aG92ZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gLmxpbmtzID4gbGkge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG5cXG4ucG9ydGZvbGlvLWl0ZW1zID4gLml0ZW0gPiAuaW5uZXIgPiAuY2FwdGlvbiA+IC5jYXB0aW9uLWlubmVyID4gLmxpbmtzID4gbGkgPiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNGRkY7XFxuICBjb2xvcjogI0ZGRjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi5wb3J0Zm9saW8taXRlbXMgPiAuaXRlbSA+IC5pbm5lciA+IC5jYXB0aW9uID4gLmNhcHRpb24taW5uZXIgPiAubGlua3MgPiBsaSA+IGEgPiBpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IC5saW5rcyA+IGxpID4gYSA+IGk6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBsaW5lLWhlaWdodDogMWVtOyB9XFxuXFxuLnBvcnRmb2xpby1pdGVtcyA+IC5pdGVtID4gLmlubmVyID4gLmNhcHRpb24gPiAuY2FwdGlvbi1pbm5lciA+IC5saW5rcyA+IGxpID4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4jcG9ydGZvbGlvLWZpbHRlcnMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNDVweDsgfVxcblxcbiNwb3J0Zm9saW8tZmlsdGVycyA+IHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAwOyB9XFxuXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiAwIDI2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4jcG9ydGZvbGlvLWZpbHRlcnMgPiB1bCA+IGxpOmxhc3Qtb2YtdHlwZTphZnRlciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwgPiBsaTphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTlweDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgd2lkdGg6IDZweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNFNUU1RTU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG5cXG4jcG9ydGZvbGlvLWZpbHRlcnMgPiB1bCA+IGxpID4gYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjOTk5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwgPiBsaSA+IGE6aG92ZXIsXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwgPiBsaSA+IGEuYWN0aXZlIHtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuI3BvcnRmb2xpby1maWx0ZXJzID4gdWwgPiBsaSA+IGEuYWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyB9XFxuXFxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcdENvbnRhY3QgU2VjdGlvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4uY29udGFjdC1ibG9jayB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7IH1cXG5cXG4uY29udGFjdC1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4OyB9XFxuXFxuLmZvcm0tY29udHJvbCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0JCQjtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcblxcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjQjdBMzg5O1xcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxcblxcbi5jb250YWN0LWZvcm0gLmZvcm0tZ3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxcblxcbi5jb250YWN0LWZvcm0gLmFsZXJ0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0V29yayBQYWdlXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbi5zaW5nbGUtd29yayB7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMzBweDsgfVxcblxcbi53b3JrLWluZm8ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC53b3JrLWluZm8ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7IH0gfVxcblxcbi53b3JrLWluZm8gPiBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiA1NXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi53b3JrLWluZm8gPiBsaSA+IGg0ID4gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcblxcbi53b3JrLWluZm8gPiBsaSA+IGg0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4ud29yay1pbmZvID4gbGkgPiBwIHtcXG4gIGNvbG9yOiAjNzc3OyB9XFxuXFxuLndvcmstY29udGVudCA+IC5ibG9jayB7XFxuICBtYXJnaW4tdG9wOiA2MHB4OyB9XFxuXFxuLndvcmstY29udGVudCA+IC5ibG9jayBoNCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDsgfVxcblxcbi53b3JrLWNvbnRlbnQgPiAuYmxvY2sgcCB7XFxuICBsaW5lLWhlaWdodDogMS45ZW07IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0U2luZ2xlIFBvc3QgUGFnZVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cXG4uYmxvZy1wYWdlIC5wb3N0ID4gLmNvbnRlbnQgPiAucG9zdC1pY29ucyB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuXFxuLmJsb2ctcGFnZSAucG9zdCA+IC5jb250ZW50ID4gaDQge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5ibG9nLXBhZ2UgLnBvc3QgPiAuY29udGVudCA+IHAge1xcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cXG5cXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFx0UmVzcG9uc2l2ZSBDU1NcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAuYWJvdXQtcGVyc29uLWltZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmluZm8tbGlzdCA+IGxpIHtcXG4gICAgd2lkdGg6IDUwJTsgfVxcbiAgLmZyb250LXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7IH1cXG4gIC5mcm9udC1oZWFkaW5nID4gaDIge1xcbiAgICBmb250LXNpemU6IDUwcHg7IH1cXG4gIC5mcm9udC1wZXJzb24taW1nIHtcXG4gICAgaGVpZ2h0OiAzNjBweDtcXG4gICAgd2lkdGg6IDM2MHB4OyB9XFxuICAuZnJvbnQtcGVyc29uLWltZyA+IGltZyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSg0NXB4KTsgfVxcbiAgLmZyb250LXBlcnNvbi1saW5rcyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87IH1cXG4gIC5mcm9udC1wZXJzb24tbGlua3MgPiB1bCB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICpkaXNwbGF5OiBpbmxpbmU7XFxuICAgICp6b29tOiAxO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7IH1cXG4gIC5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmZyb250LXBlcnNvbi1saW5rcyA+IHVsID4gbGkgPiBhOmJlZm9yZSxcXG4gIC5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgb3BhY2l0eTogLjU7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYTphZnRlciB7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIHJpZ2h0OiAwOyB9XFxuICAuZnJvbnQtcGVyc29uLWxpbmtzID4gdWwgPiBsaSA+IGE6aG92ZXI6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDE1cHg7IH1cXG4gIC5mcm9udC1wZXJzb24tbGlua3MgPiB1bCA+IGxpID4gYSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjJweCA0OHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxcbiAgLmZyb250LXBlcnNvbi10aXRsZXMge1xcbiAgICBtYXJnaW4tdG9wOiAxMjVweDtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgLmZyb250LXBlcnNvbi10aXRsZXMgPiBzcGFuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMjVweCAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBib3R0b206IGF1dG8gIWltcG9ydGFudDsgfVxcbiAgLmZyb250LWhlYWRpbmcge1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4OyB9IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5mcm9udC1wZXJzb24tbGlua3Mge1xcbiAgICBtYXJnaW4tdG9wOiA2NXB4OyB9XFxuICAuZnJvbnQtcGVyc29uLWltZyB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIHBhZGRpbmctdG9wOiA2NSU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7IH1cXG4gIC5mcm9udC1wZXJzb24taW1nID4gaW1nIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKDEwMHB4KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IC00MHB4OyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCwgbmVlZFF1b3Rlcykge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==