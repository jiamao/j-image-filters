(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ReverseFilter = exports.RGBMaskFilter = exports.RGBFilter = exports.OpacityFilter = exports.OldPhotoFilter = exports.MosaicFilter = exports.GrayFilter = exports.Filter = exports.BrightnessFilter = exports.BlurFilter = exports.BlackFilter = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Filter = exports.Filter = /*#__PURE__*/function () {
  function Filter(option) {
    _classCallCheck(this, Filter);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "displayName", void 0);
    _defineProperty(this, "option", {
      luminance: 0
    });
    // 保证颜色在0-255之间
    _defineProperty(this, "checkColorValue", function (v) {
      v = Math.min(v, 255);
      v = Math.max(v, 0);
      v = Math.round(v);
      return v;
    });
    if (option) this.option = option;
  }
  _createClass(Filter, [{
    key: "filterColor",
    value: function filterColor(color) {
      return color;
    }
  }]);
  return Filter;
}();
/**
 * 反色滤镜
 */
var ReverseFilter = exports.ReverseFilter = /*#__PURE__*/function (_Filter2) {
  _inherits(ReverseFilter, _Filter2);
  function ReverseFilter() {
    var _this;
    _classCallCheck(this, ReverseFilter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ReverseFilter, [].concat(args));
    _defineProperty(_assertThisInitialized(_this), "name", 'ReverseFilter');
    _defineProperty(_assertThisInitialized(_this), "displayName", '反色');
    return _this;
  }
  _createClass(ReverseFilter, [{
    key: "filterColor",
    value:
    // 颜色处理
    function filterColor(color) {
      color.r = 255 - color.r;
      color.g = 255 - color.g;
      color.b = 255 - color.b;
      return color;
    }
  }]);
  return ReverseFilter;
}(Filter);
/**
 * 灰度滤镜
 */
var GrayFilter = exports.GrayFilter = /*#__PURE__*/function (_Filter3) {
  _inherits(GrayFilter, _Filter3);
  function GrayFilter(option) {
    var _this2;
    _classCallCheck(this, GrayFilter);
    _this2 = _callSuper(this, GrayFilter, [option]);
    _defineProperty(_assertThisInitialized(_this2), "name", 'GrayFilter');
    _defineProperty(_assertThisInitialized(_this2), "displayName", '灰度');
    _defineProperty(_assertThisInitialized(_this2), "option", {
      r: 0.3,
      g: 0.6,
      b: 0.1
    });
    if (option) _this2.option = option;
    return _this2;
  }
  _createClass(GrayFilter, [{
    key: "filterColor",
    value:
    // 颜色处理
    function filterColor(color) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option;
      var gray = this.checkColorValue(color.r * option.r + color.g * option.g + color.b * option.b);
      color.r = gray;
      color.g = gray;
      color.b = gray;
      return color;
    }
  }]);
  return GrayFilter;
}(Filter);
/**
 * 默白滤镜
 */
var BlackFilter = exports.BlackFilter = /*#__PURE__*/function (_Filter4) {
  _inherits(BlackFilter, _Filter4);
  function BlackFilter() {
    var _this3;
    _classCallCheck(this, BlackFilter);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this3 = _callSuper(this, BlackFilter, [].concat(args));
    _defineProperty(_assertThisInitialized(_this3), "name", 'BlackFilter');
    _defineProperty(_assertThisInitialized(_this3), "displayName", '黑白');
    return _this3;
  }
  _createClass(BlackFilter, [{
    key: "filterColor",
    value:
    // 颜色处理
    function filterColor(color) {
      var avg = this.checkColorValue((color.r + color.g + color.b) / 3);
      var c = avg >= 128 ? 255 : 0;
      color.r = c;
      color.g = c;
      color.b = c;
      return color;
    }
  }]);
  return BlackFilter;
}(Filter);
/**
 * 亮度滤镜
 */
var BrightnessFilter = exports.BrightnessFilter = /*#__PURE__*/function (_Filter5) {
  _inherits(BrightnessFilter, _Filter5);
  function BrightnessFilter() {
    var _this4;
    _classCallCheck(this, BrightnessFilter);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this4 = _callSuper(this, BrightnessFilter, [].concat(args));
    _defineProperty(_assertThisInitialized(_this4), "name", 'BrightnessFilter');
    _defineProperty(_assertThisInitialized(_this4), "displayName", '亮度');
    _defineProperty(_assertThisInitialized(_this4), "option", {
      luminance: 0
    });
    return _this4;
  }
  _createClass(BrightnessFilter, [{
    key: "filterColor",
    value:
    // 颜色处理
    function filterColor(color) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option;
      if (option.luminance === 0) return color;
      color.r = this.checkColorValue(option.luminance + color.r);
      color.g = this.checkColorValue(option.luminance + color.g);
      color.b = this.checkColorValue(option.luminance + color.b);
      return color;
    }
  }]);
  return BrightnessFilter;
}(Filter);
/**
 * RGB通道滤镜
 */
var RGBFilter = exports.RGBFilter = /*#__PURE__*/function (_Filter6) {
  _inherits(RGBFilter, _Filter6);
  function RGBFilter() {
    var _this5;
    _classCallCheck(this, RGBFilter);
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    _this5 = _callSuper(this, RGBFilter, [].concat(args));
    _defineProperty(_assertThisInitialized(_this5), "name", 'RGBFilter');
    _defineProperty(_assertThisInitialized(_this5), "displayName", 'RGB通道');
    return _this5;
  }
  _createClass(RGBFilter, [{
    key: "filterColor",
    value:
    // 颜色处理
    function filterColor(color) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option;
      if (option.r) color.r = this.checkColorValue(option.r + color.r);
      if (option.g) color.g = this.checkColorValue(option.g + color.g);
      if (option.b) color.b = this.checkColorValue(option.b + color.b);
      return color;
    }
  }]);
  return RGBFilter;
}(Filter);
/**
 * 透明度
 */
var OpacityFilter = exports.OpacityFilter = /*#__PURE__*/function (_Filter7) {
  _inherits(OpacityFilter, _Filter7);
  function OpacityFilter(option) {
    var _this6;
    _classCallCheck(this, OpacityFilter);
    _this6 = _callSuper(this, OpacityFilter, [option]);
    _defineProperty(_assertThisInitialized(_this6), "name", 'OpacityFilter');
    _defineProperty(_assertThisInitialized(_this6), "displayName", '透明度');
    return _this6;
  }
  _createClass(OpacityFilter, [{
    key: "filterColor",
    value:
    // 颜色处理
    function filterColor(color) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option;
      color.a = this.checkColorValue(option.luminance + color.a);
      return color;
    }
  }]);
  return OpacityFilter;
}(Filter);
/**
 * RGB蒙版滤镜
 */
var RGBMaskFilter = exports.RGBMaskFilter = /*#__PURE__*/function (_Filter8) {
  _inherits(RGBMaskFilter, _Filter8);
  function RGBMaskFilter() {
    var _this7;
    _classCallCheck(this, RGBMaskFilter);
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    _this7 = _callSuper(this, RGBMaskFilter, [].concat(args));
    _defineProperty(_assertThisInitialized(_this7), "name", 'RGBMaskFilter');
    _defineProperty(_assertThisInitialized(_this7), "displayName", 'RGB蒙版');
    return _this7;
  }
  _createClass(RGBMaskFilter, [{
    key: "filterColor",
    value:
    // 颜色处理
    function filterColor(color) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option;
      var avg = this.checkColorValue((color.r + color.g + color.b) / 3);
      if (option.r) color.r = avg;
      if (option.g) color.g = avg;
      if (option.b) color.b = avg;
      return color;
    }
  }]);
  return RGBMaskFilter;
}(Filter);
/**
 * 老照片滤镜
 */
var OldPhotoFilter = exports.OldPhotoFilter = /*#__PURE__*/function (_Filter9) {
  _inherits(OldPhotoFilter, _Filter9);
  function OldPhotoFilter(option) {
    var _this8;
    _classCallCheck(this, OldPhotoFilter);
    _this8 = _callSuper(this, OldPhotoFilter, [option]);
    _defineProperty(_assertThisInitialized(_this8), "name", 'OldPhotoFilter');
    _defineProperty(_assertThisInitialized(_this8), "displayName", '老照片');
    _defineProperty(_assertThisInitialized(_this8), "option", {
      rColor: {
        r: 0.28,
        g: 0.72,
        b: 0.22,
        a: 1
      },
      gColor: {
        r: 0.25,
        g: 0.63,
        b: 0.13,
        a: 1
      },
      bColor: {
        r: 0.17,
        g: 0.66,
        b: 0.13,
        a: 1
      }
    });
    if (option) _this8.option = option;
    return _this8;
  }
  _createClass(OldPhotoFilter, [{
    key: "filterColor",
    value:
    // 颜色处理
    function filterColor(color) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option;
      color.r = this.checkColorValue(color.r * option.rColor.r + color.g * option.rColor.g + color.b * option.rColor.b);
      color.g = this.checkColorValue(color.r * option.gColor.r + color.g * option.gColor.g + color.b * option.gColor.b);
      color.b = this.checkColorValue(color.r * option.bColor.r + color.g * option.bColor.g + color.b * option.bColor.b);
      return color;
    }
  }]);
  return OldPhotoFilter;
}(Filter);
/**
 * 模糊滤镜
 */
var BlurFilter = exports.BlurFilter = /*#__PURE__*/function (_Filter10) {
  _inherits(BlurFilter, _Filter10);
  function BlurFilter(option) {
    var _this9;
    _classCallCheck(this, BlurFilter);
    _this9 = _callSuper(this, BlurFilter, [option]);
    _defineProperty(_assertThisInitialized(_this9), "name", 'BlurFilter');
    _defineProperty(_assertThisInitialized(_this9), "displayName", '模糊');
    _defineProperty(_assertThisInitialized(_this9), "option", {
      radius: 10,
      sigma: 5
    });
    return _this9;
  }
  _createClass(BlurFilter, [{
    key: "genGaussMatrix",
    value: function genGaussMatrix() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.option;
      var matrix = [];
      var sum = 0,
        x = 0,
        i = 0,
        len = 0;
      var r = 0,
        g = 0,
        b = -1 / (2 * option.sigma * option.sigma),
        a = 1 / (Math.sqrt(2 * Math.PI) * option.sigma);
      // 生成高斯矩阵
      for (i = 0, x = -option.radius; x <= option.radius; x++, i++) {
        g = a * Math.exp(b * x * x);
        matrix[i] = g;
        sum += g;
      }
      // 归一化，保证高斯矩阵的值 在0-1之间
      for (i = 0, len = matrix.length; i < len; i++) {
        matrix[i] /= sum;
      }
      return matrix;
    }
  }, {
    key: "filter",
    value: function filter(data) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option;
      var matrix = this.genGaussMatrix(option);
      var sum = 0;
      // X方向一维高斯运算
      for (var y = 0; y < data.height; y++) {
        for (var x = 0; x < data.width; x++) {
          var r = 0,
            g = 0,
            b = 0,
            i = 0;
          sum = 0;
          for (var j = -option.radius; j <= option.radius; j++) {
            var k = x + j;
            // 确保K没超出X范围
            if (k >= 0 && k < data.width) {
              i = (y * data.width + k) * 4;
              var mi = matrix[j + option.radius];
              r += data.data[i] * mi;
              g += data.data[i + 1] * mi;
              b += data.data[i + 2] * mi;
              sum += mi;
            }
          }
          i = (y * data.width + x) * 4;
          // 除以sum是为了消除处于边缘的像素，高斯运算不足问题
          data.data[i] = r / sum;
          data.data[i + 1] = g / sum;
          data.data[i + 2] = b / sum;
        }
      }
      // X方向一维高斯运算
      for (var _x = 0; _x < data.width; _x++) {
        for (var _y = 0; _y < data.height; _y++) {
          var _r = 0,
            _g = 0,
            _b = 0,
            _i = 0;
          sum = 0;
          for (var _j = -option.radius; _j <= option.radius; _j++) {
            var _k = _y + _j;
            // 确保K没超出y范围
            if (_k >= 0 && _k < data.height) {
              _i = (_y * data.width + _k) * 4;
              var _mi = matrix[_j + option.radius];
              _r += data.data[_i] * _mi;
              _g += data.data[_i + 1] * _mi;
              _b += data.data[_i + 2] * _mi;
              sum += _mi;
            }
          }
          _i = (_y * data.width + _x) * 4;
          // 除以sum是为了消除处于边缘的像素，高斯运算不足问题
          data.data[_i] = _r / sum;
          data.data[_i + 1] = _g / sum;
          data.data[_i + 2] = _b / sum;
        }
      }
      return data;
    }
  }]);
  return BlurFilter;
}(Filter);
/**
 * 马赛克滤镜
 */
var MosaicFilter = exports.MosaicFilter = /*#__PURE__*/function (_Filter11) {
  _inherits(MosaicFilter, _Filter11);
  function MosaicFilter(option) {
    var _this10;
    _classCallCheck(this, MosaicFilter);
    _this10 = _callSuper(this, MosaicFilter, [option]);
    _defineProperty(_assertThisInitialized(_this10), "name", 'MosaicFilter');
    _defineProperty(_assertThisInitialized(_this10), "displayName", '马赛克');
    _defineProperty(_assertThisInitialized(_this10), "option", {
      blur: 6 // 马赛克范围
    });
    return _this10;
  }
  _createClass(MosaicFilter, [{
    key: "filter",
    value: function filter(data) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option;
      var blurR = 2 * option.blur + 1;
      var total = blurR * blurR;
      for (var i = option.blur; i <= data.width; i += blurR) {
        for (var j = option.blur; j <= data.height; j += blurR) {
          var r = 0,
            g = 0,
            b = 0;
          for (var leny = -option.blur; leny <= option.blur; leny++) {
            for (var lenx = -option.blur; lenx <= option.blur; lenx++) {
              var index = 4 * ((j + leny) * data.width + i + lenx);
              r += data.data[index];
              g += data.data[index + 1];
              b += data.data[index + 2];
            }
          }
          var vr = r / total,
            vg = g / total,
            vb = b / total;
          for (var _leny = -option.blur; _leny <= option.blur; _leny++) {
            for (var _lenx = -option.blur; _lenx <= option.blur; _lenx++) {
              var _index = 4 * ((j + _leny) * data.width + i + _lenx);
              data.data[_index] = vr;
              data.data[_index + 1] = vg;
              data.data[_index + 2] = vb;
            }
          }
        }
      }
      return data;
    }
  }]);
  return MosaicFilter;
}(Filter);
var filters = {
  ReverseFilter: ReverseFilter,
  GrayFilter: GrayFilter,
  BlackFilter: BlackFilter,
  BrightnessFilter: BrightnessFilter,
  RGBFilter: RGBFilter,
  OpacityFilter: OpacityFilter,
  RGBMaskFilter: RGBMaskFilter,
  OldPhotoFilter: OldPhotoFilter,
  BlurFilter: BlurFilter,
  MosaicFilter: MosaicFilter
};
var _default = exports["default"] = filters;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ImageFilters = exports["default"] = /*#__PURE__*/function () {
  function ImageFilters(filters) {
    _classCallCheck(this, ImageFilters);
    // 做为转换的canvas元纱
    _defineProperty(this, "canvas", document.createElement('canvas'));
    _defineProperty(this, "_ctx", void 0);
    // 所有支持的滤镜
    _defineProperty(this, "filters", new Array());
    if (filters && filters.length) {
      var _this$filters;
      (_this$filters = this.filters).push.apply(_this$filters, _toConsumableArray(filters));
    }
  }
  _createClass(ImageFilters, [{
    key: "context",
    get: function get() {
      if (this._ctx) return this._ctx;
      this._ctx = this.canvas.getContext('2d');
      return this._ctx;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.filters.splice(0, this.filters.length);
    }
    /**
     * 把图片转成数据
     * @param img
     */
  }, {
    key: "convertToImageData",
    value: (function () {
      var _convertToImageData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(img) {
        var _this = this;
        var el;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof img === 'string')) {
                _context2.next = 4;
                break;
              }
              el = new Image();
              el.src = img;
              return _context2.abrupt("return", this.convertToImageData(el));
            case 4:
              return _context2.abrupt("return", new Promise(function (resolve) {
                if (!img.complete) {
                  img.onload = /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                      var res;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this.convertToImageData(img);
                          case 2:
                            res = _context.sent;
                            resolve(res);
                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function (_x2) {
                      return _ref.apply(this, arguments);
                    };
                  }();
                } else {
                  _this.canvas.width = img.naturalWidth || img.width;
                  _this.canvas.height = img.naturalHeight || img.height;
                  _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                  _this.context.drawImage(img, 0, 0);
                  var data = _this.context.getImageData(0, 0, _this.canvas.width, _this.canvas.height);
                  resolve(data);
                }
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function convertToImageData(_x) {
        return _convertToImageData.apply(this, arguments);
      }
      return convertToImageData;
    }()
    /**
     * 应用滤镜
     */
    )
  }, {
    key: "filter",
    value: (function () {
      var _filter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(image) {
        var filters,
          _loop,
          i,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              filters = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : this.filters;
              if (!(image instanceof HTMLImageElement)) {
                _context4.next = 5;
                break;
              }
              _context4.next = 4;
              return this.convertToImageData(image);
            case 4:
              image = _context4.sent;
            case 5:
              // 滤镜处理, 如果是全量统一处理的滤镜，则直接处理原始数据
              filters.map(function (filter) {
                if (filter.filter && image instanceof ImageData) filter.filter(image, filter.option);
              });
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                var color;
                return _regeneratorRuntime().wrap(function _loop$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      color = {
                        r: image.data[i],
                        g: image.data[i + 1],
                        b: image.data[i + 2],
                        a: image.data[i + 3]
                      }; // 滤镜处理
                      filters.map(function (filter) {
                        if (filter.filterColor) color = filter.filterColor(color, filter.option);
                      });
                      image.data[i] = color.r;
                      image.data[i + 1] = color.g;
                      image.data[i + 2] = color.b;
                      image.data[i + 3] = color.a;
                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }, _loop);
              });
              i = 0;
            case 8:
              if (!(i < image.data.length)) {
                _context4.next = 13;
                break;
              }
              return _context4.delegateYield(_loop(), "t0", 10);
            case 10:
              i += 4;
              _context4.next = 8;
              break;
            case 13:
              return _context4.abrupt("return", image);
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee3, this);
      }));
      function filter(_x3) {
        return _filter.apply(this, arguments);
      }
      return filter;
    }() // 转base64
    )
  }, {
    key: "toBase64",
    value: function toBase64(data) {
      this.canvas.width = data.width;
      this.canvas.height = data.height;
      this.context.clearRect(0, 0, data.width, data.height);
      this.context.putImageData(data, 0, 0);
      return this.canvas.toDataURL();
    }
    /**
     * 添加滤镜
     * @param filter
     */
  }, {
    key: "add",
    value: function add(filter) {
      if (Array.isArray(filter)) {
        var _iterator = _createForOfIteratorHelper(filter),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var f = _step.value;
            this.add(f);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else if (typeof filter === 'function') {
        this.filters.push({
          name: '',
          filterColor: filter
        });
      } else this.filters.push(filter);
    }
    /**
     * 移除滤镜
     * @param filter
     */
  }, {
    key: "remove",
    value: function remove(filter) {
      if (Array.isArray(filter)) {
        var _iterator2 = _createForOfIteratorHelper(filter),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var f = _step2.value;
            this.remove(f);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        for (var i = this.filters.length - 1; i >= 0; i--) {
          if (typeof filter === 'string' && this.filters[i].name === filter || this.filters[i] === filter || this.filters[i].filter === filter) {
            this.filters.splice(i, 1);
          }
        }
      }
    }
  }]);
  return ImageFilters;
}();

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  filters: true
};
exports["default"] = void 0;
Object.defineProperty(exports, "filters", {
  enumerable: true,
  get: function get() {
    return _filters["default"];
  }
});
var _filterTypes = require("./filterTypes");
Object.keys(_filterTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _filterTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filterTypes[key];
    }
  });
});
var _filters = _interopRequireDefault(require("./filters"));
var _imageFilter = _interopRequireDefault(require("./imageFilter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _imageFilter["default"];

},{"./filterTypes":1,"./filters":2,"./imageFilter":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2ZpbHRlcnMuanMiLCJkaXN0L2ltYWdlRmlsdGVyLmpzIiwiZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FhLE1BQU0sR0FBQSxPQUFBLENBQUEsTUFBQTtFQUNmLFNBQUEsT0FBWSxNQUFNLEVBQUU7SUFBQSxlQUFBLE9BQUEsTUFBQTtJQUFBLGVBQUE7SUFBQSxlQUFBO0lBQUEsZUFBQSxpQkFNWDtNQUNMLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFLRDtJQUFBLGVBQUEsMEJBQ2tCLFVBQUMsQ0FBQyxFQUFLO01BQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDcEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDakIsT0FBTyxDQUFDO0lBQ1osQ0FBQztJQWxCRyxJQUFJLE1BQU0sRUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07RUFDNUI7RUFBQyxZQUFBLENBQUEsTUFBQTtJQUFBLEdBQUE7SUFBQSxLQUFBLEVBTUQsU0FBQSxZQUFZLEtBQUssRUFBRTtNQUNmLE9BQU8sS0FBSztJQUNoQjtFQUFDO0VBQUEsT0FBQSxNQUFBO0FBQUE7QUFVTDtBQUNBO0FBQ0E7QUFGQSxJQUdhLGFBQWEsR0FBQSxPQUFBLENBQUEsYUFBQSwwQkFBQSxRQUFBO0VBQUEsU0FBQSxDQUFBLGFBQUEsRUFBQSxRQUFBO0VBQUEsU0FBQSxjQUFBO0lBQUEsSUFBQSxLQUFBO0lBQUEsZUFBQSxPQUFBLGFBQUE7SUFBQSxTQUFBLElBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLElBQUEsT0FBQSxLQUFBLENBQUEsSUFB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QUFFLENBQUMsRUFBRSxFQUFFO1VBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxDQUFDLEdBQUcsQ0FBQztZQUFFLENBQUMsR0FBRyxDQUFDO1lBQUUsQ0FBQyxHQUFHLENBQUM7VUFDOUIsR0FBRyxHQUFHLENBQUM7VUFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUNiO1lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO2NBQzFCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDO2NBQzVCLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztjQUNwQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO2NBQ3RCLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO2NBQzFCLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO2NBQzFCLEdBQUcsSUFBSSxFQUFFO1lBQ2I7VUFDSjtVQUNBLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDO1VBQzVCO1VBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRztVQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRztVQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFD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SyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUU7UUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUU7VUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFFLENBQUMsR0FBRyxDQUFDO1lBQUUsQ0FBQyxHQUFHLENBQUM7VUFDdkIsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDdkQsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7Y0FDdkQsSUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Y0FDdEQsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2NBQ3JCLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Y0FDekIsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM3QjtVQUNKO1VBQ0EsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUs7WUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUs7WUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUs7VUFDbEQsS0FBSyxJQUFJLEtBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSSxFQUFFLEVBQUU7WUFDdkQsS0FBSyxJQUFJLEtBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSSxFQUFFLEVBQUU7Y0FDdkQsSUFBTSxNQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUM7Y0FDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFLLENBQUMsR0FBRyxFQUFFO2NBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7Y0FDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUM3QjtVQUNKO1FBQ0o7TUFDSjtNQUNBLE9BQU8sSUFBSTtJQUNmO0VBQUM7RUFBQSxPQUFBLFlBQUE7QUFBQSxFQW5DNkIsTUFBTTtBQXFDeEMsSUFBTSxPQUFPLEdBQUc7RUFDWixhQUFhLEVBQWIsYUFBYTtFQUNiLFVBQVUsRUFBVixVQUFVO0VBQ1YsV0FBVyxFQUFYLFdBQVc7RUFDWCxnQkFBZ0IsRUFBaEIsZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBVCxTQUFTO0VBQ1QsYUFBYSxFQUFiLGFBQWE7RUFDYixhQUFhLEVBQWIsYUFBYTtFQUNiLGNBQWMsRUFBZCxjQUFjO0VBQ2QsVUFBVSxFQUFWLFVBQVU7RUFDVixZQUFZLEVBQVo7QUFDSixDQUFDO0FBQUMsSUFBQSxRQUFBLEdBQUEsT0FBQSxjQUNhLE9BQU87Ozs7Ozs7Ozs7OytDQ3BUdEIscUpBQUEsbUJBQUEsWUFBQSxvQkFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxjQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsS0FBQSxDQUFBLHdCQUFBLE1BQUEsR0FBQSxNQUFBLE9BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLGtCQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsYUFBQSx1QkFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsOEJBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLE1BQUEsWUFBQSxNQUFBLFFBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxXQUFBLE1BQUEsbUJBQUEsQ0FBQSxJQUFBLE1BQUEsWUFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxnQkFBQSxLQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLFlBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLEVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLE9BQUEsT0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBLENBQUEsZUFBQSxLQUFBLEVBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsTUFBQSxDQUFBLGFBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsbUJBQUEsSUFBQSxZQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGNBQUEsQ0FBQSxhQUFBLElBQUEsV0FBQSxHQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEscUJBQUEsQ0FBQSxxQkFBQSxDQUFBLGdCQUFBLENBQUEsZ0JBQUEsQ0FBQSxnQkFBQSxVQUFBLGNBQUEsa0JBQUEsY0FBQSwyQkFBQSxTQUFBLENBQUEsT0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEscUNBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsMEJBQUEsQ0FBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsWUFBQSxzQkFBQSxDQUFBLGdDQUFBLE9BQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQSxnQkFBQSxPQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsc0JBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxTQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxXQUFBLENBQUEsSUFBQSxNQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLENBQUEsSUFBQSxNQUFBLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLEVBQUEsSUFBQSxXQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsTUFBQSxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLEtBQUEsV0FBQSxNQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsMkJBQUEsZUFBQSxDQUFBLFdBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsMEJBQUEsRUFBQSwwQkFBQSxJQUFBLDBCQUFBLHFCQUFBLGlCQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsWUFBQSxLQUFBLHNDQUFBLENBQUEsS0FBQSxDQUFBLG9CQUFBLENBQUEsUUFBQSxDQUFBLFdBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxJQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxtQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLG1CQUFBLENBQUEscUJBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsc0JBQUEsQ0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSx1QkFBQSxDQUFBLENBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxLQUFBLENBQUEscUJBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLGtCQUFBLENBQUEsQ0FBQSxJQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsbUJBQUEsb0JBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFFBQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxrQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFNBQUEsdUNBQUEsQ0FBQSxpQkFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsT0FBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFNBQUEsc0NBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLGNBQUEsYUFBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBLE1BQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxRQUFBLEdBQUEsQ0FBQSxXQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsV0FBQSxVQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsY0FBQSxjQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxvQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxVQUFBLEdBQUEsQ0FBQSxhQUFBLFFBQUEsQ0FBQSxTQUFBLFVBQUEsTUFBQSxNQUFBLGFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxZQUFBLGNBQUEsS0FBQSxpQkFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLFdBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsNEJBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLE9BQUEsS0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsWUFBQSxLQUFBLGFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxVQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsU0FBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsWUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsZ0JBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLGtDQUFBLGlCQUFBLENBQUEsU0FBQSxHQUFBLDBCQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsS0FBQSxFQUFBLDBCQUFBLEVBQUEsWUFBQSxTQUFBLENBQUEsQ0FBQSwwQkFBQSxtQkFBQSxLQUFBLEVBQUEsaUJBQUEsRUFBQSxZQUFBLFNBQUEsaUJBQUEsQ0FBQSxXQUFBLEdBQUEsTUFBQSxDQUFBLDBCQUFBLEVBQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsbUJBQUEsYUFBQSxDQUFBLFFBQUEsQ0FBQSx3QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLGlCQUFBLDZCQUFBLENBQUEsQ0FBQSxXQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxhQUFBLENBQUEsV0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLDBCQUFBLEtBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsYUFBQSxPQUFBLEVBQUEsQ0FBQSxPQUFBLHFCQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsRUFBQSxDQUFBLGlDQUFBLENBQUEsQ0FBQSxhQUFBLEdBQUEsYUFBQSxFQUFBLENBQUEsQ0FBQSxLQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLE9BQUEsT0FBQSxDQUFBLE9BQUEsYUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxJQUFBLFdBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxXQUFBLHFCQUFBLENBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsaUNBQUEsTUFBQSxDQUFBLENBQUEsNkRBQUEsQ0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxnQkFBQSxDQUFBLElBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLGFBQUEsS0FBQSxXQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsV0FBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxHQUFBLE1BQUEsRUFBQSxPQUFBLENBQUEsU0FBQSxLQUFBLFdBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxXQUFBLE1BQUEsQ0FBQSxhQUFBLElBQUEsV0FBQSxJQUFBLFdBQUEsSUFBQSxRQUFBLEtBQUEsR0FBQSxDQUFBLE9BQUEsSUFBQSxZQUFBLFFBQUEsY0FBQSxNQUFBLGdCQUFBLEdBQUEsR0FBQSxDQUFBLE9BQUEsVUFBQSxDQUFBLE9BQUEsQ0FBQSxhQUFBLElBQUEsQ0FBQSxXQUFBLENBQUEsa0JBQUEsQ0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsTUFBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLEtBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLElBQUEsV0FBQSxLQUFBLFNBQUEsSUFBQSxXQUFBLENBQUEsUUFBQSxVQUFBLElBQUEsVUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLGNBQUEsSUFBQSxLQUFBLGlCQUFBLFdBQUEsa0JBQUEsQ0FBQSxhQUFBLElBQUEsUUFBQSxDQUFBLE1BQUEsQ0FBQSxrQkFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLElBQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsaUJBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxNQUFBLGFBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxlQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEsZ0JBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLGNBQUEsQ0FBQSxhQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxxQkFBQSxDQUFBLFlBQUEsS0FBQSxxREFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsWUFBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLHdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLGFBQUEsQ0FBQSxpQkFBQSxDQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxJQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsS0FBQSxDQUFBLGNBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxjQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxNQUFBLGdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxFQUFBLENBQUEsU0FBQSxRQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsV0FBQSxTQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEscUJBQUEsQ0FBQSxDQUFBLElBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxJQUFBLFFBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsTUFBQSxrQkFBQSxJQUFBLHlCQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxVQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLE1BQUEsV0FBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFBLEtBQUEsQ0FBQSxjQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLEdBQUEsYUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLHlCQUFBLE9BQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGtCQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsYUFBQSxDQUFBLENBQUEsWUFBQSxDQUFBLGdCQUFBLEtBQUEsOEJBQUEsYUFBQSxXQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFFBQUEsS0FBQSxRQUFBLEVBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQSxDQUFBLG9CQUFBLE1BQUEsVUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsT0FBQSxDQUFBO0FBQUEsU0FBQSxtQkFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLGNBQUEsSUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxPQUFBLEtBQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxXQUFBLEtBQUEsSUFBQSxNQUFBLENBQUEsS0FBQSxpQkFBQSxJQUFBLENBQUEsSUFBQSxJQUFBLE9BQUEsQ0FBQSxLQUFBLFlBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxFQUFBLDZCQUFBLElBQUEsU0FBQSxJQUFBLEdBQUEsU0FBQSxhQUFBLE9BQUEsV0FBQSxPQUFBLEVBQUEsTUFBQSxRQUFBLEdBQUEsR0FBQSxFQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLFlBQUEsTUFBQSxLQUFBLElBQUEsa0JBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxVQUFBLEtBQUEsY0FBQSxPQUFBLEdBQUEsSUFBQSxrQkFBQSxDQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLFdBQUEsR0FBQSxLQUFBLEtBQUEsQ0FBQSxTQUFBO0FBQUEsU0FBQSxtQkFBQSxHQUFBLFdBQUEsa0JBQUEsQ0FBQSxHQUFBLEtBQUEsZ0JBQUEsQ0FBQSxHQUFBLEtBQUEsMkJBQUEsQ0FBQSxHQUFBLEtBQUEsa0JBQUE7QUFBQSxTQUFBLG1CQUFBLGNBQUEsU0FBQTtBQUFBLFNBQUEsNEJBQUEsQ0FBQSxFQUFBLE1BQUEsU0FBQSxDQUFBLHFCQUFBLENBQUEsc0JBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLG1CQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsK0RBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxpQkFBQSxJQUFBLGVBQUEsTUFBQSxvQkFBQSxJQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsYUFBQSxJQUFBLCtCQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQTtBQUFBLFNBQUEsbUJBQUEsR0FBQSxRQUFBLEtBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxVQUFBLGlCQUFBLENBQUEsR0FBQTtBQUFBLFNBQUEsa0JBQUEsR0FBQSxFQUFBLEdBQUEsUUFBQSxHQUFBLFlBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxNQUFBLElBQUEsT0FBQSxLQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBO0FBQUEsU0FBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxVQUFBLFFBQUEsWUFBQSxXQUFBLGVBQUEsU0FBQTtBQUFBLFNBQUEsa0JBQUEsTUFBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLFVBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsV0FBQSxVQUFBLENBQUEsWUFBQSx3QkFBQSxVQUFBLEVBQUEsVUFBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxjQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsR0FBQSxVQUFBO0FBQUEsU0FBQSxhQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxRQUFBLFVBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsQ0FBQSxTQUFB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QSxPQUFBLGNBRXpCLHVCQUFXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24pXG4gICAgICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbjtcbiAgICB9XG4gICAgbmFtZTtcbiAgICBkaXNwbGF5TmFtZTtcbiAgICBvcHRpb24gPSB7XG4gICAgICAgIGx1bWluYW5jZTogMFxuICAgIH07XG4gICAgZmlsdGVyQ29sb3IoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICA7XG4gICAgLy8g5L+d6K+B6aKc6Imy5ZyoMC0yNTXkuYvpl7RcbiAgICBjaGVja0NvbG9yVmFsdWUgPSAodikgPT4ge1xuICAgICAgICB2ID0gTWF0aC5taW4odiwgMjU1KTtcbiAgICAgICAgdiA9IE1hdGgubWF4KHYsIDApO1xuICAgICAgICB2ID0gTWF0aC5yb3VuZCh2KTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn1cbi8qKlxuICog5Y+N6Imy5ruk6ZWcXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXZlcnNlRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBuYW1lID0gJ1JldmVyc2VGaWx0ZXInO1xuICAgIGRpc3BsYXlOYW1lID0gJ+WPjeiJsic7XG4gICAgLy8g6aKc6Imy5aSE55CGXG4gICAgZmlsdGVyQ29sb3IoY29sb3IpIHtcbiAgICAgICAgY29sb3IuciA9IDI1NSAtIGNvbG9yLnI7XG4gICAgICAgIGNvbG9yLmcgPSAyNTUgLSBjb2xvci5nO1xuICAgICAgICBjb2xvci5iID0gMjU1IC0gY29sb3IuYjtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbn1cbi8qKlxuICog54Gw5bqm5ruk6ZWcXG4gKi9cbmV4cG9ydCBjbGFzcyBHcmF5RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICAgICAgaWYgKG9wdGlvbilcbiAgICAgICAgICAgIHRoaXMub3B0aW9uID0gb3B0aW9uO1xuICAgIH1cbiAgICBuYW1lID0gJ0dyYXlGaWx0ZXInO1xuICAgIGRpc3BsYXlOYW1lID0gJ+eBsOW6pic7XG4gICAgb3B0aW9uID0ge1xuICAgICAgICByOiAwLjMsIGc6IDAuNiwgYjogMC4xXG4gICAgfTtcbiAgICAvLyDpopzoibLlpITnkIZcbiAgICBmaWx0ZXJDb2xvcihjb2xvciwgb3B0aW9uID0gdGhpcy5vcHRpb24pIHtcbiAgICAgICAgY29uc3QgZ3JheSA9IHRoaXMuY2hlY2tDb2xvclZhbHVlKGNvbG9yLnIgKiBvcHRpb24uciArIGNvbG9yLmcgKiBvcHRpb24uZyArIGNvbG9yLmIgKiBvcHRpb24uYik7XG4gICAgICAgIGNvbG9yLnIgPSBncmF5O1xuICAgICAgICBjb2xvci5nID0gZ3JheTtcbiAgICAgICAgY29sb3IuYiA9IGdyYXk7XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG59XG4vKipcbiAqIOm7mOeZvea7pOmVnFxuICovXG5leHBvcnQgY2xhc3MgQmxhY2tGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIG5hbWUgPSAnQmxhY2tGaWx0ZXInO1xuICAgIGRpc3BsYXlOYW1lID0gJ+m7keeZvSc7XG4gICAgLy8g6aKc6Imy5aSE55CGXG4gICAgZmlsdGVyQ29sb3IoY29sb3IpIHtcbiAgICAgICAgY29uc3QgYXZnID0gdGhpcy5jaGVja0NvbG9yVmFsdWUoKGNvbG9yLnIgKyBjb2xvci5nICsgY29sb3IuYikgLyAzKTtcbiAgICAgICAgY29uc3QgYyA9IGF2ZyA+PSAxMjggPyAyNTUgOiAwO1xuICAgICAgICBjb2xvci5yID0gYztcbiAgICAgICAgY29sb3IuZyA9IGM7XG4gICAgICAgIGNvbG9yLmIgPSBjO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxufVxuLyoqXG4gKiDkuq7luqbmu6TplZxcbiAqL1xuZXhwb3J0IGNsYXNzIEJyaWdodG5lc3NGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIG5hbWUgPSAnQnJpZ2h0bmVzc0ZpbHRlcic7XG4gICAgZGlzcGxheU5hbWUgPSAn5Lqu5bqmJztcbiAgICBvcHRpb24gPSB7XG4gICAgICAgIGx1bWluYW5jZTogMFxuICAgIH07XG4gICAgLy8g6aKc6Imy5aSE55CGXG4gICAgZmlsdGVyQ29sb3IoY29sb3IsIG9wdGlvbiA9IHRoaXMub3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24ubHVtaW5hbmNlID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICBjb2xvci5yID0gdGhpcy5jaGVja0NvbG9yVmFsdWUob3B0aW9uLmx1bWluYW5jZSArIGNvbG9yLnIpO1xuICAgICAgICBjb2xvci5nID0gdGhpcy5jaGVja0NvbG9yVmFsdWUob3B0aW9uLmx1bWluYW5jZSArIGNvbG9yLmcpO1xuICAgICAgICBjb2xvci5iID0gdGhpcy5jaGVja0NvbG9yVmFsdWUob3B0aW9uLmx1bWluYW5jZSArIGNvbG9yLmIpO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxufVxuLyoqXG4gKiBSR0LpgJrpgZPmu6TplZxcbiAqL1xuZXhwb3J0IGNsYXNzIFJHQkZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgbmFtZSA9ICdSR0JGaWx0ZXInO1xuICAgIGRpc3BsYXlOYW1lID0gJ1JHQumAmumBkyc7XG4gICAgLy8g6aKc6Imy5aSE55CGXG4gICAgZmlsdGVyQ29sb3IoY29sb3IsIG9wdGlvbiA9IHRoaXMub3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24ucilcbiAgICAgICAgICAgIGNvbG9yLnIgPSB0aGlzLmNoZWNrQ29sb3JWYWx1ZShvcHRpb24uciArIGNvbG9yLnIpO1xuICAgICAgICBpZiAob3B0aW9uLmcpXG4gICAgICAgICAgICBjb2xvci5nID0gdGhpcy5jaGVja0NvbG9yVmFsdWUob3B0aW9uLmcgKyBjb2xvci5nKTtcbiAgICAgICAgaWYgKG9wdGlvbi5iKVxuICAgICAgICAgICAgY29sb3IuYiA9IHRoaXMuY2hlY2tDb2xvclZhbHVlKG9wdGlvbi5iICsgY29sb3IuYik7XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG59XG4vKipcbiAqIOmAj+aYjuW6plxuICovXG5leHBvcnQgY2xhc3MgT3BhY2l0eUZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnT3BhY2l0eUZpbHRlcic7XG4gICAgZGlzcGxheU5hbWUgPSAn6YCP5piO5bqmJztcbiAgICAvLyDpopzoibLlpITnkIZcbiAgICBmaWx0ZXJDb2xvcihjb2xvciwgb3B0aW9uID0gdGhpcy5vcHRpb24pIHtcbiAgICAgICAgY29sb3IuYSA9IHRoaXMuY2hlY2tDb2xvclZhbHVlKG9wdGlvbi5sdW1pbmFuY2UgKyBjb2xvci5hKTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbn1cbi8qKlxuICogUkdC6JKZ54mI5ruk6ZWcXG4gKi9cbmV4cG9ydCBjbGFzcyBSR0JNYXNrRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBuYW1lID0gJ1JHQk1hc2tGaWx0ZXInO1xuICAgIGRpc3BsYXlOYW1lID0gJ1JHQuiSmeeJiCc7XG4gICAgLy8g6aKc6Imy5aSE55CGXG4gICAgZmlsdGVyQ29sb3IoY29sb3IsIG9wdGlvbiA9IHRoaXMub3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IGF2ZyA9IHRoaXMuY2hlY2tDb2xvclZhbHVlKChjb2xvci5yICsgY29sb3IuZyArIGNvbG9yLmIpIC8gMyk7XG4gICAgICAgIGlmIChvcHRpb24ucilcbiAgICAgICAgICAgIGNvbG9yLnIgPSBhdmc7XG4gICAgICAgIGlmIChvcHRpb24uZylcbiAgICAgICAgICAgIGNvbG9yLmcgPSBhdmc7XG4gICAgICAgIGlmIChvcHRpb24uYilcbiAgICAgICAgICAgIGNvbG9yLmIgPSBhdmc7XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG59XG4vKipcbiAqIOiAgeeFp+eJh+a7pOmVnFxuICovXG5leHBvcnQgY2xhc3MgT2xkUGhvdG9GaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgICAgICBpZiAob3B0aW9uKVxuICAgICAgICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgfVxuICAgIG5hbWUgPSAnT2xkUGhvdG9GaWx0ZXInO1xuICAgIGRpc3BsYXlOYW1lID0gJ+iAgeeFp+eJhyc7XG4gICAgb3B0aW9uID0ge1xuICAgICAgICByQ29sb3I6IHtcbiAgICAgICAgICAgIHI6IDAuMjgsIGc6IDAuNzIsIGI6IDAuMjIsIGE6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ0NvbG9yOiB7XG4gICAgICAgICAgICByOiAwLjI1LCBnOiAwLjYzLCBiOiAwLjEzLCBhOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGJDb2xvcjoge1xuICAgICAgICAgICAgcjogMC4xNywgZzogMC42NiwgYjogMC4xMywgYTogMVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDpopzoibLlpITnkIZcbiAgICBmaWx0ZXJDb2xvcihjb2xvciwgb3B0aW9uID0gdGhpcy5vcHRpb24pIHtcbiAgICAgICAgY29sb3IuciA9IHRoaXMuY2hlY2tDb2xvclZhbHVlKGNvbG9yLnIgKiBvcHRpb24uckNvbG9yLnIgKyBjb2xvci5nICogb3B0aW9uLnJDb2xvci5nICsgY29sb3IuYiAqIG9wdGlvbi5yQ29sb3IuYik7XG4gICAgICAgIGNvbG9yLmcgPSB0aGlzLmNoZWNrQ29sb3JWYWx1ZShjb2xvci5yICogb3B0aW9uLmdDb2xvci5yICsgY29sb3IuZyAqIG9wdGlvbi5nQ29sb3IuZyArIGNvbG9yLmIgKiBvcHRpb24uZ0NvbG9yLmIpO1xuICAgICAgICBjb2xvci5iID0gdGhpcy5jaGVja0NvbG9yVmFsdWUoY29sb3IuciAqIG9wdGlvbi5iQ29sb3IuciArIGNvbG9yLmcgKiBvcHRpb24uYkNvbG9yLmcgKyBjb2xvci5iICogb3B0aW9uLmJDb2xvci5iKTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbn1cbi8qKlxuICog5qih57OK5ruk6ZWcXG4gKi9cbmV4cG9ydCBjbGFzcyBCbHVyRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdCbHVyRmlsdGVyJztcbiAgICBkaXNwbGF5TmFtZSA9ICfmqKHns4onO1xuICAgIG9wdGlvbiA9IHtcbiAgICAgICAgcmFkaXVzOiAxMCxcbiAgICAgICAgc2lnbWE6IDVcbiAgICB9O1xuICAgIGdlbkdhdXNzTWF0cml4KG9wdGlvbiA9IHRoaXMub3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IFtdO1xuICAgICAgICBsZXQgc3VtID0gMCwgeCA9IDAsIGkgPSAwLCBsZW4gPSAwO1xuICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gLTEgLyAoMiAqIG9wdGlvbi5zaWdtYSAqIG9wdGlvbi5zaWdtYSksIGEgPSAxIC8gKE1hdGguc3FydCgyICogTWF0aC5QSSkgKiBvcHRpb24uc2lnbWEpO1xuICAgICAgICAvLyDnlJ/miJDpq5jmlq/nn6npmLVcbiAgICAgICAgZm9yIChpID0gMCwgeCA9IC1vcHRpb24ucmFkaXVzOyB4IDw9IG9wdGlvbi5yYWRpdXM7IHgrKywgaSsrKSB7XG4gICAgICAgICAgICBnID0gYSAqIE1hdGguZXhwKGIgKiB4ICogeCk7XG4gICAgICAgICAgICBtYXRyaXhbaV0gPSBnO1xuICAgICAgICAgICAgc3VtICs9IGc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5b2S5LiA5YyW77yM5L+d6K+B6auY5pav55+p6Zi155qE5YC8IOWcqDAtMeS5i+mXtFxuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBtYXRyaXgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIG1hdHJpeFtpXSAvPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICB9XG4gICAgZmlsdGVyKGRhdGEsIG9wdGlvbiA9IHRoaXMub3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMuZ2VuR2F1c3NNYXRyaXgob3B0aW9uKTtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIC8vIFjmlrnlkJHkuIDnu7Tpq5jmlq/ov5DnrpdcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBkYXRhLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRhdGEud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGxldCByID0gMCwgZyA9IDAsIGIgPSAwLCBpID0gMDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAtb3B0aW9uLnJhZGl1czsgaiA8PSBvcHRpb24ucmFkaXVzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGsgPSB4ICsgajtcbiAgICAgICAgICAgICAgICAgICAgLy8g56Gu5L+dS+ayoei2heWHuljojIPlm7RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsgPj0gMCAmJiBrIDwgZGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9ICh5ICogZGF0YS53aWR0aCArIGspICogNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pID0gbWF0cml4W2ogKyBvcHRpb24ucmFkaXVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gZGF0YS5kYXRhW2ldICogbWk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnICs9IGRhdGEuZGF0YVtpICsgMV0gKiBtaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgKz0gZGF0YS5kYXRhW2kgKyAyXSAqIG1pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IG1pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgPSAoeSAqIGRhdGEud2lkdGggKyB4KSAqIDQ7XG4gICAgICAgICAgICAgICAgLy8g6Zmk5Lulc3Vt5piv5Li65LqG5raI6Zmk5aSE5LqO6L6557yY55qE5YOP57Sg77yM6auY5pav6L+Q566X5LiN6Laz6Zeu6aKYXG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhW2ldID0gciAvIHN1bTtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGFbaSArIDFdID0gZyAvIHN1bTtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGFbaSArIDJdID0gYiAvIHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBY5pa55ZCR5LiA57u06auY5pav6L+Q566XXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZGF0YS53aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGRhdGEuaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMCwgaSA9IDA7XG4gICAgICAgICAgICAgICAgc3VtID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gLW9wdGlvbi5yYWRpdXM7IGogPD0gb3B0aW9uLnJhZGl1czsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrID0geSArIGo7XG4gICAgICAgICAgICAgICAgICAgIC8vIOehruS/nUvmsqHotoXlh7p56IyD5Zu0XG4gICAgICAgICAgICAgICAgICAgIGlmIChrID49IDAgJiYgayA8IGRhdGEuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gKHkgKiBkYXRhLndpZHRoICsgaykgKiA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWkgPSBtYXRyaXhbaiArIG9wdGlvbi5yYWRpdXNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSBkYXRhLmRhdGFbaV0gKiBtaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGcgKz0gZGF0YS5kYXRhW2kgKyAxXSAqIG1pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYiArPSBkYXRhLmRhdGFbaSArIDJdICogbWk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gbWk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSA9ICh5ICogZGF0YS53aWR0aCArIHgpICogNDtcbiAgICAgICAgICAgICAgICAvLyDpmaTku6VzdW3mmK/kuLrkuobmtojpmaTlpITkuo7ovrnnvJjnmoTlg4/ntKDvvIzpq5jmlq/ov5DnrpfkuI3otrPpl67pophcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGFbaV0gPSByIC8gc3VtO1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YVtpICsgMV0gPSBnIC8gc3VtO1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YVtpICsgMl0gPSBiIC8gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn1cbi8qKlxuICog6ams6LWb5YWL5ruk6ZWcXG4gKi9cbmV4cG9ydCBjbGFzcyBNb3NhaWNGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ01vc2FpY0ZpbHRlcic7XG4gICAgZGlzcGxheU5hbWUgPSAn6ams6LWb5YWLJztcbiAgICBvcHRpb24gPSB7XG4gICAgICAgIGJsdXI6IDYgLy8g6ams6LWb5YWL6IyD5Zu0XG4gICAgfTtcbiAgICBmaWx0ZXIoZGF0YSwgb3B0aW9uID0gdGhpcy5vcHRpb24pIHtcbiAgICAgICAgY29uc3QgYmx1clIgPSAyICogb3B0aW9uLmJsdXIgKyAxO1xuICAgICAgICBjb25zdCB0b3RhbCA9IGJsdXJSICogYmx1clI7XG4gICAgICAgIGZvciAobGV0IGkgPSBvcHRpb24uYmx1cjsgaSA8PSBkYXRhLndpZHRoOyBpICs9IGJsdXJSKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gb3B0aW9uLmJsdXI7IGogPD0gZGF0YS5oZWlnaHQ7IGogKz0gYmx1clIpIHtcbiAgICAgICAgICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBsZW55ID0gLW9wdGlvbi5ibHVyOyBsZW55IDw9IG9wdGlvbi5ibHVyOyBsZW55KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbGVueCA9IC1vcHRpb24uYmx1cjsgbGVueCA8PSBvcHRpb24uYmx1cjsgbGVueCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IDQgKiAoKGogKyBsZW55KSAqIGRhdGEud2lkdGggKyBpICsgbGVueCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByICs9IGRhdGEuZGF0YVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBnICs9IGRhdGEuZGF0YVtpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYiArPSBkYXRhLmRhdGFbaW5kZXggKyAyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdnIgPSByIC8gdG90YWwsIHZnID0gZyAvIHRvdGFsLCB2YiA9IGIgLyB0b3RhbDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBsZW55ID0gLW9wdGlvbi5ibHVyOyBsZW55IDw9IG9wdGlvbi5ibHVyOyBsZW55KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbGVueCA9IC1vcHRpb24uYmx1cjsgbGVueCA8PSBvcHRpb24uYmx1cjsgbGVueCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IDQgKiAoKGogKyBsZW55KSAqIGRhdGEud2lkdGggKyBpICsgbGVueCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGFbaW5kZXhdID0gdnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGFbaW5kZXggKyAxXSA9IHZnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhW2luZGV4ICsgMl0gPSB2YjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5jb25zdCBmaWx0ZXJzID0ge1xuICAgIFJldmVyc2VGaWx0ZXIsXG4gICAgR3JheUZpbHRlcixcbiAgICBCbGFja0ZpbHRlcixcbiAgICBCcmlnaHRuZXNzRmlsdGVyLFxuICAgIFJHQkZpbHRlcixcbiAgICBPcGFjaXR5RmlsdGVyLFxuICAgIFJHQk1hc2tGaWx0ZXIsXG4gICAgT2xkUGhvdG9GaWx0ZXIsXG4gICAgQmx1ckZpbHRlcixcbiAgICBNb3NhaWNGaWx0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJzO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VGaWx0ZXJzIHtcbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXJzKSB7XG4gICAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMucHVzaCguLi5maWx0ZXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlgZrkuLrovazmjaLnmoRjYW52YXPlhYPnurFcbiAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBfY3R4O1xuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5fY3R4KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N0eDtcbiAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N0eDtcbiAgICB9XG4gICAgLy8g5omA5pyJ5pSv5oyB55qE5ruk6ZWcXG4gICAgZmlsdGVycyA9IG5ldyBBcnJheSgpO1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKDAsIHRoaXMuZmlsdGVycy5sZW5ndGgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmiorlm77niYfovazmiJDmlbDmja5cbiAgICAgKiBAcGFyYW0gaW1nXG4gICAgICovXG4gICAgYXN5bmMgY29udmVydFRvSW1hZ2VEYXRhKGltZykge1xuICAgICAgICBpZiAodHlwZW9mIGltZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBlbC5zcmMgPSBpbWc7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9JbWFnZURhdGEoZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbWcuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5jb252ZXJ0VG9JbWFnZURhdGEoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IGltZy5uYXR1cmFsV2lkdGggfHwgaW1nLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGltZy5uYXR1cmFsSGVpZ2h0IHx8IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOW6lOeUqOa7pOmVnFxuICAgICAqL1xuICAgIGFzeW5jIGZpbHRlcihpbWFnZSwgZmlsdGVycyA9IHRoaXMuZmlsdGVycykge1xuICAgICAgICBpZiAoaW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICBpbWFnZSA9IGF3YWl0IHRoaXMuY29udmVydFRvSW1hZ2VEYXRhKGltYWdlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmu6TplZzlpITnkIYsIOWmguaenOaYr+WFqOmHj+e7n+S4gOWkhOeQhueahOa7pOmVnO+8jOWImeebtOaOpeWkhOeQhuWOn+Wni+aVsOaNrlxuICAgICAgICBmaWx0ZXJzLm1hcCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyLmZpbHRlciAmJiBpbWFnZSBpbnN0YW5jZW9mIEltYWdlRGF0YSlcbiAgICAgICAgICAgICAgICBmaWx0ZXIuZmlsdGVyKGltYWdlLCBmaWx0ZXIub3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2UuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0ge1xuICAgICAgICAgICAgICAgIHI6IGltYWdlLmRhdGFbaV0sXG4gICAgICAgICAgICAgICAgZzogaW1hZ2UuZGF0YVtpICsgMV0sXG4gICAgICAgICAgICAgICAgYjogaW1hZ2UuZGF0YVtpICsgMl0sXG4gICAgICAgICAgICAgICAgYTogaW1hZ2UuZGF0YVtpICsgM10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8g5ruk6ZWc5aSE55CGXG4gICAgICAgICAgICBmaWx0ZXJzLm1hcCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlci5maWx0ZXJDb2xvcilcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBmaWx0ZXIuZmlsdGVyQ29sb3IoY29sb3IsIGZpbHRlci5vcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWFnZS5kYXRhW2ldID0gY29sb3IucjtcbiAgICAgICAgICAgIGltYWdlLmRhdGFbaSArIDFdID0gY29sb3IuZztcbiAgICAgICAgICAgIGltYWdlLmRhdGFbaSArIDJdID0gY29sb3IuYjtcbiAgICAgICAgICAgIGltYWdlLmRhdGFbaSArIDNdID0gY29sb3IuYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuICAgIC8vIOi9rGJhc2U2NFxuICAgIHRvQmFzZTY0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBkYXRhLndpZHRoLCBkYXRhLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5re75Yqg5ruk6ZWcXG4gICAgICogQHBhcmFtIGZpbHRlclxuICAgICAqL1xuICAgIGFkZChmaWx0ZXIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBmIG9mIGZpbHRlcilcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChmKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZmlsdGVyQ29sb3I6IGZpbHRlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goZmlsdGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog56e76Zmk5ruk6ZWcXG4gICAgICogQHBhcmFtIGZpbHRlclxuICAgICAqL1xuICAgIHJlbW92ZShmaWx0ZXIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBmIG9mIGZpbHRlcilcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShmKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmZpbHRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBmaWx0ZXIgPT09ICdzdHJpbmcnICYmIHRoaXMuZmlsdGVyc1tpXS5uYW1lID09PSBmaWx0ZXIpIHx8IHRoaXMuZmlsdGVyc1tpXSA9PT0gZmlsdGVyIHx8IHRoaXMuZmlsdGVyc1tpXS5maWx0ZXIgPT09IGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZmlsdGVyVHlwZXMnO1xuaW1wb3J0IGZpbHRlcnMgZnJvbSAnLi9maWx0ZXJzJztcbmltcG9ydCBJbWFnZUZpbHRlciBmcm9tICcuL2ltYWdlRmlsdGVyJztcbmV4cG9ydCB7IGZpbHRlcnMgfTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlRmlsdGVyO1xuIl19
