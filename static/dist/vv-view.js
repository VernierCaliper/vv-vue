(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vv-view"] = factory();
	else
		root["vv-view"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'swiper',
  data: function data() {
    return {
      slidesLength: 1,
      _width: 0,
      auto: true,
      slideing: true,
      timer1: '',
      className: '',
      dom: {},
      t: {
        sx: 0,
        s: 0,
        m: 0,
        e: 0
      }
    };
  },

  props: {
    options: {
      default: {
        autoplay: true,
        duration: 500,
        interval: 2500,
        showPagenation: true,
        notActiveClass: '',
        activeClass: 'yq_swiper_active',
        index: 1
      }
    }
  },
  mounted: function mounted() {
    this.init();
  },

  methods: {
    init: function init() {
      var _this = this;

      setTimeout(function () {
        _this.cloneDom();
        _this.dom.transform = 'translate3d(' + _this._width * -_this.options.index + 'px, 0px, 0px)';
        _this.dom['-webkit-transform'] = 'translate3d(' + _this._width * -_this.options.index + 'px, 0px, 0px)';
        _this.dom['-ms-transform'] = 'translate3d(' + _this._width * -_this.options.index + 'px, 0px, 0px)';
        if (_this.options.autoplay) {
          _this.setTime();
        }
      }, 100);
    },
    touchStart: function touchStart(e) {
      if (this.slideing) {
        this.clearTimeOut();
        this.t.sx = this.getTransform();
        this.t.s = e.touches[e.touches.length - 1].clientX;
      }
    },
    touchMove: function touchMove(e) {
      if (this.slideing && this.t.s !== -1) {
        this.clearTimeOut();
        this.t.m = e.touches[e.touches.length - 1].clientX - this.t.s;
        this.setTransform(this.t.m + this.t.sx);
      }
    },
    touchEnd: function touchEnd() {
      if (this.slideing && this.t.s !== -1) {
        this.clearTimeOut();
        this.setTransform(this.t.m + this.t.sx);
        var x = this.getTransform();
        x += this.t.m > 0 ? this._width * 0.3 : this._width * -0.3;
        this.options.index = Math.round(x / this._width) * -1;
        this.wh('touch');
      }
    },
    setTransform: function setTransform(num) {
      this.dom.transform = 'translate3d(' + num + 'px, 0px, 0px)';
      this.dom['-webkit-transform'] = 'translate3d(' + num + 'px, 0px, 0px)';
      this.dom['-ms-transform'] = 'translate3d(' + num + 'px, 0px, 0px)';
    },
    getTransform: function getTransform() {
      var x = this.dom.transform || this.dom['-webkit-transform'] || this.dom['-ms-transform'];
      x = x.substring(12);
      x = x.match(/(\S*)px/)[1];
      return Number(x);
    },
    fn: function fn(e) {
      e.preventDefault();
    },

    prevSlide: function prevSlide() {
      this.clearTimeOut();
      this.options.index--;
      this.wh();
    },
    nextSlide: function nextSlide() {
      this.clearTimeOut();
      this.options.index++;
      this.wh();
    },
    slideTo: function slideTo(index) {
      this.clearTimeOut();
      this.options.index = index + 1;
      this.wh();
    },
    wh: function wh(type) {
      var _this2 = this;

      this.slideing = false;
      this.dom.transition = type === 'touch' ? '250ms' : this.options.duration + 'ms';
      this.setTransform(this.options.index * -1 * this._width);
      this.t.m = 0;
      this.t.s = -1;
      if (this.options.autoplay) {
        this.setTime();
      }
      var timeDuration = type === 'touch' ? '250' : this.options.duration;
      setTimeout(function () {
        _this2.dom.transition = '0s';
        if (_this2.options.index >= _this2.slidesLength + 1) {
          _this2.options.index = 1;
          _this2.setTransform(_this2.options.index * -1 * _this2._width);
        }
        if (_this2.options.index <= 0) {
          _this2.options.index = _this2.slidesLength;
          _this2.setTransform(_this2.options.index * -1 * _this2._width);
        }
        _this2.$emit('transtionend', _this2.options.index - 1);
        _this2.auto = true;
        _this2.slideing = true;
      }, timeDuration);
    },
    setTime: function setTime() {
      var _this3 = this;

      this.timer1 = setTimeout(function () {
        if (_this3.auto) {
          _this3.options.index++;
          _this3.wh();
        } else {
          clearTimeout(_this3.timer1);
        }
      }, this.options.interval);
    },
    cloneDom: function cloneDom() {
      var SlideDom = this.$refs.swiperWrap;
      this.slidesLength = SlideDom.getElementsByClassName('yq_slide').length;
      if (this.slidesLength > 1) {
        var cloneDom1 = SlideDom.getElementsByClassName('yq_slide')[0].cloneNode(true);
        var cloneDom2 = SlideDom.getElementsByClassName('yq_slide')[this.slidesLength - 1].cloneNode(true);
        SlideDom.insertBefore(cloneDom2, SlideDom.getElementsByClassName('yq_slide')[0]);
        SlideDom.appendChild(cloneDom1);
        this._width = SlideDom.offsetWidth;
        this.dom = SlideDom.style;
      }
    },
    clearTimeOut: function clearTimeOut() {
      this.auto = false;
      clearTimeout(this.timer1);
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'slide',
  data: function data() {
    return {};
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swiper__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide__ = __webpack_require__(7);


var install = function install(Vue) {
  if (install.installed) return;
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__swiper__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__swiper__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__slide__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__slide__["a" /* default */]);
};
// Vue 是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  install: install,
  swiper: __WEBPACK_IMPORTED_MODULE_0__swiper__["a" /* default */],
  slide: __WEBPACK_IMPORTED_MODULE_1__slide__["a" /* default */]
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__(1);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_020f750c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__(6);
function injectStyle (ssrContext) {
  __webpack_require__(5)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_020f750c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"yq_content",on:{"touchmove":_vm.fn}},[_c('div',{ref:"swiperWrap",staticClass:"yq_swiper",on:{"touchstart":_vm.touchStart,"touchmove":_vm.touchMove,"touchend":_vm.touchEnd}},[_vm._t("default")],2),_vm._v(" "),(_vm.options.showPagenation)?_c('div',{staticClass:"yq_pagenation"},_vm._l((_vm.slidesLength),function(item,$index){return _c('div',{staticClass:"yq_pagenation_item",class:[_vm.options.index-1===$index?_vm.options.activeClass:'',_vm.options.notActiveClass]})})):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_slide_vue__ = __webpack_require__(2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ba11fac_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_slide_vue__ = __webpack_require__(9);
function injectStyle (ssrContext) {
  __webpack_require__(8)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_slide_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ba11fac_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_slide_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yq_slide"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});