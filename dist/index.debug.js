/*!
 * vue-touch
 * Description:vue touch events
 * Author: 清扬陌客 <qingyangmoke@qq.com>
 * Version: v0.1.1
 * Github: https://github.com/qingyangmoke/vue-plugin-touch.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueTouch"] = factory();
	else
		root["VueTouch"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/song/Develop/github/vue-touch/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _VueTouch = __webpack_require__(2);

	var _VueTouch2 = _interopRequireDefault(_VueTouch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _VueTouch2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author: @采东
	 * @description:
	 * 为了避免在Vue的代码中直接操作dom 比如去自己获取dom 手动注册事件 造成代码的混乱
	 * 保持Vue代码的统一性 增加touch插件 来注册touch相关的事件
	 * 很简单的一个插件 只是把原生touch事件暴露给vue
	 */
	var VueTouch = {};
	// 暴露出的全局配置项，也就是在调用 Vue.use(Vue, options) 时传入的第二个选项参数
	VueTouch.config = {};
	// 这里用来配置支持的事件类型
	VueTouch.customEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
	// 核心部分，插件的具体逻辑均在此实现
	VueTouch.install = function (Vue) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  // v-touch
	  Vue.directive('touch', {
	    isFn: true,
	    bind: function bind(el, binding) {
	      var event = binding.arg;
	      if (VueTouch.customEvents.indexOf(event) === -1) throw Error('\u6682\u4E0D\u652F\u6301 v-touch:' + event + ' \u6307\u4EE4');
	      if (typeof binding.value !== 'function') throw Error('v-touch:' + event + ' \u503C\u5FC5\u987B\u4E3Afunction');
	      el.addEventListener(event, binding.value);
	    },
	    update: function update(el, binding) {
	      var event = binding.arg;
	      el.removeEventListener(event, binding.oldValue);
	      el.addEventListener(event, binding.value, false);
	    },
	    unbind: function unbind(el, binding) {
	      var event = binding.arg;
	      el.removeEventListener(event, binding.value);
	    }
	  });
	};

	exports.default = VueTouch;

/***/ })
/******/ ])
});
;