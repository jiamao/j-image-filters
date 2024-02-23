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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  function BrightnessFilter(option) {
    var _this4;
    _classCallCheck(this, BrightnessFilter);
    _this4 = _callSuper(this, BrightnessFilter, [option]);
    _defineProperty(_assertThisInitialized(_this4), "name", 'BrightnessFilter');
    _defineProperty(_assertThisInitialized(_this4), "displayName", '亮度');
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
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
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
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
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
    if (option) _this8.option = option;
    _this8.option = _objectSpread({
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
    }, _this8.option);
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
    _this9.option = Object.assign({
      radius: 10,
      sigma: 5
    }, _this9.option);
    return _this9;
  }
  _createClass(BlurFilter, [{
    key: "genGaussMatrix",
    value: function genGaussMatrix() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.option;
      var matrix = [];
      var sum = 0;
      var b = -1 / (2 * option.sigma * option.sigma),
        a = 1 / (Math.sqrt(2 * Math.PI) * option.sigma);
      // 生成高斯矩阵
      for (var i = 0, x = -option.radius; x <= option.radius; x++, i++) {
        var g = a * Math.exp(b * x * x);
        matrix[i] = g;
        sum += g;
      }
      // 归一化，保证高斯矩阵的值 在0-1之间
      for (var _i = 0; _i < matrix.length; _i++) {
        matrix[_i] /= sum;
      }
      return matrix;
    }
  }, {
    key: "filter",
    value: function filter(data) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option;
      var matrix = this.genGaussMatrix(option);
      // X方向一维高斯运算
      for (var y = 0; y < data.height; y++) {
        for (var x = 0; x < data.width; x++) {
          var r = 0,
            g = 0,
            b = 0;
          var sum = 0;
          for (var j = -option.radius; j <= option.radius; j++) {
            var k = x + j;
            // 确保K没超出X范围
            if (k >= 0 && k < data.width) {
              var _i2 = (y * data.width + k) * 4;
              var mi = matrix[j + option.radius];
              r += data.data[_i2] * mi;
              g += data.data[_i2 + 1] * mi;
              b += data.data[_i2 + 2] * mi;
              sum += mi;
            }
          }
          var i = (y * data.width + x) * 4;
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
            _b = 0;
          var _sum = 0;
          for (var _j = -option.radius; _j <= option.radius; _j++) {
            var _k = _y + _j;
            // 确保K没超出y范围
            if (_k >= 0 && _k < data.height) {
              var _i3 = (_k * data.width + _x) * 4;
              var _mi = matrix[_j + option.radius];
              _r += data.data[_i3] * _mi;
              _g += data.data[_i3 + 1] * _mi;
              _b += data.data[_i3 + 2] * _mi;
              _sum += _mi;
            }
          }
          var _i4 = (_y * data.width + _x) * 4;
          // 除以sum是为了消除处于边缘的像素，高斯运算不足问题
          data.data[_i4] = _r / _sum;
          data.data[_i4 + 1] = _g / _sum;
          data.data[_i4 + 2] = _b / _sum;
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
    _this10.option = Object.assign({
      blur: 6 // 马赛克范围
    }, _this10.option);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2ZpbHRlcnMuanMiLCJkaXN0L2ltYWdlRmlsdGVyLmpzIiwiZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQWEsTUFBTSxHQUFBLE9BQUEsQ0FBQSxNQUFBO0VBQ2YsU0FBQSxPQUFZLE1BQU0sRUFBRTtJQUFBLGVBQUEsT0FBQSxNQUFBO0lBQUEsZUFBQTtJQUFBLGVBQUE7SUFBQSxlQUFBLGlCQU1YO01BQ0wsU0FBUyxFQUFFO0lBQ2YsQ0FBQztJQUtEO0lBQUEsZUFBQSwwQkFDa0IsVUFBQyxDQUFDLEVBQUs7TUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztNQUNwQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ2xCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUNqQixPQUFPLENBQUM7SUFDWixDQUFDO0lBbEJHLElBQUksTUFBTSxFQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtFQUM1QjtFQUFDLFlBQUEsQ0FBQSxNQUFBO0lBQUEsR0FBQTtJQUFBLEtBQUEsRUFNRCxTQUFBLFlBQVksS0FBSyxFQUFFO01BQ2YsT0FBTyxLQUFLO0lBQ2hCO0VBQUM7RUFBQSxPQUFBLE1BQUE7QUFBQTtBQVVMO0FBQ0E7QUFDQTtBQUZBLElBR2EsYUFBYSxHQUFBLE9BQUEsQ0FBQSxhQUFBLDBCQUFBLFFBQUE7RUFBQSxTQUFBLENBQUEsYUFBQSxFQUFBLFFBQUE7RUFBQSxTQUFBLGNBQUE7SUFBQSxJQUFBLEtBQUE7SUFBQSxlQUFBLE9BQUEsYUFBQTtJQUFBLFNBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsSUFBQSxPQUFBLEtBQUEsQ0FBQSxJ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RyxJQUFJLENBQUMsS0FBSyxFQUFFO2NBQzFCLElBQU0sR0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUM7Y0FDbEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2NBQ3BDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxHQUFHLEVBQUU7Y0FDdEIsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7Y0FDMUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7Y0FDMUIsR0FBRyxJQUFJLEVBQUU7WUFDYjtVQUNKO1VBQ0EsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQztVQUNsQztVQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUc7VUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUc7VUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUc7UUFDOUI7TUFDSjtNQUNBO01BQ0EsS0FBSyxJQUFJLEVBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxFQUFFLEVBQUU7UUFDakMsS0FBSyxJQUFJLEVBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUU7VUFDbEMsSUFBSSxFQUFDLEdBQUcsQ0FBQztZQUFFLEVBQUMsR0FBRyxDQUFDO1lBQUUsRUFBQyxHQUFHLENBQUM7VUFDdkIsSUFBSSxJQUFHLEdBQUcsQ0FBQztVQUNYLEtBQUssSUFBSSxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFFO1lBQ2xELElBQUksRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDO1lBQ2I7WUFDQSxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7Y0FDM0IsSUFBTSxHQUFDLEdBQUcsQ0FBQyxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFDLElBQUksQ0FBQztjQUNsQyxJQUFNLEdBQUUsR0FBRyxNQUFNLENBQUMsRUFBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Y0FDcEMsRUFBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEdBQUcsR0FBRTtjQUN0QixFQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRTtjQUMxQixFQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRTtjQUMxQixJQUFHLElBQUksR0FBRTtZQUNiO1VBQ0o7VUFDQSxJQUFNLEdBQUMsR0FBRyxDQUFDLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUMsSUFBSSxDQUFDO1VBQ2xDO1VBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsSUFBRztVQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsSUFBRztVQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsSUFBRztRQUM5QjtNQUNKO01BQ0EsT0FBTyxJQUFJO0lBQ2Y7RUFBQztFQUFBLE9BQUEsVUFBQTtBQUFBLEVBN0UyQixNQUFNO0FBK0V0QztBQUNBO0FBQ0E7QUFGQSxJQUdhLFlBQVksR0FBQSxPQUFBLENBQUEsWUFBQSwwQkFBQSxTQUFBO0VBQUEsU0FBQSxDQUFBLFlBQUEsRUFBQSxTQUFBO0VBQ3JCLFNBQUEsYUFBWSxNQUFNLEVBQUU7SUFBQSxJQUFBLE9BQUE7SUFBQSxlQUFBLE9BQUEsWUFBQTtJQUNoQixPQUFBLEdBQUEsVUFBQSxPQUFBLFlBQUEsR0FBTSxNQUFNO0lBQUUsZUFBQSxDQUFBLHNCQUFBLENBQUEsT0FBQSxXQUtYLGNBQWM7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxPQUFBLGtCQUNQLEtBQUs7SUFMZixPQUFBLENBQUssTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDeEIsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsRUFBRSxPQUFBLENBQUssTUFBTSxDQUFDO0lBQUMsT0FBQSxPQUFBO0VBQ3BCO0VBQUMsWUFBQSxDQUFBLFlBQUE7SUFBQSxHQUFBO0lBQUEsS0FBQSxFQUdELFNBQUEsT0FBTyxJQUFJLEVBQXdCO01BQUEsSUFBdEIsTUFBTSxHQUFBLFNBQUEsQ0FBQSxNQUFBLFFBQUEsU0FBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLE1BQUcsSUFBSSxDQUFDLE1BQU07TUFDN0IsSUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztNQUNqQyxJQUFNLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSztNQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRTtVQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUUsQ0FBQyxHQUFHLENBQUM7WUFBRSxDQUFDLEdBQUcsQ0FBQztVQUN2QixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN2RCxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtjQUN2RCxJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztjQUN0RCxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Y0FDckIsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztjQUN6QixDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzdCO1VBQ0o7VUFDQSxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSztZQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSztZQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSztVQUNsRCxLQUFLLElBQUksS0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFJLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxLQUFJLEVBQUUsRUFBRTtZQUN2RCxLQUFLLElBQUksS0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFJLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxLQUFJLEVBQUUsRUFBRTtjQUN2RCxJQUFNLE1BQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQztjQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQUssQ0FBQyxHQUFHLEVBQUU7Y0FDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtjQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQzdCO1VBQ0o7UUFDSjtNQUNKO01BQ0EsT0FBTyxJQUFJO0lBQ2Y7RUFBQztFQUFBLE9BQUEsWUFBQTtBQUFBLEVBbkM2QixNQUFNO0FBcUN4QyxJQUFNLE9BQU8sR0FBRztFQUNaLGFBQWEsRUFBYixhQUFhO0VBQ2IsVUFBVSxFQUFWLFVBQVU7RUFDVixXQUFXLEVBQVgsV0FBVztFQUNYLGdCQUFnQixFQUFoQixnQkFBZ0I7RUFDaEIsU0FBUyxFQUFULFNBQVM7RUFDVCxhQUFhLEVBQWIsYUFBYTtFQUNiLGFBQWEsRUFBYixhQUFhO0VBQ2IsY0FBYyxFQUFkLGNBQWM7RUFDZCxVQUFVLEVBQVYsVUFBVTtFQUNWLFlBQVksRUFBWjtBQUNKLENBQUM7QUFBQyxJQUFBLFFBQUEsR0FBQSxPQUFBLGNBQ2EsT0FBTzs7Ozs7Ozs7Ozs7K0NDcFR0QixxSkFBQSxtQkFBQSxZQUFBLG9CQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxjQUFBLEVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxLQUFBLENBQUEsd0JBQUEsTUFBQSxHQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsa0JBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxhQUFBLHVCQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSw4QkFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLFVBQUEsTUFBQSxZQUFBLE1BQUEsUUFBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLFdBQUEsTUFBQSxtQkFBQSxDQUFBLElBQUEsTUFBQSxZQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLGdCQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsWUFBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsRUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxHQUFBLENBQUEsT0FBQSxPQUFBLENBQUEsQ0FBQSxnQkFBQSxDQUFBLENBQUEsQ0FBQSxlQUFBLEtBQUEsRUFBQSxnQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsYUFBQSxTQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxtQkFBQSxJQUFBLFlBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsY0FBQSxDQUFBLGFBQUEsSUFBQSxXQUFBLEdBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxxQkFBQSxDQUFBLHFCQUFBLENBQUEsZ0JBQUEsQ0FBQSxnQkFBQSxDQUFBLGdCQUFBLFVBQUEsY0FBQSxrQkFBQSxjQUFBLDJCQUFBLFNBQUEsQ0FBQSxPQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxxQ0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxZQUFBLHNCQUFBLENBQUEsZ0NBQUEsT0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsWUFBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxzQkFBQSxjQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLFNBQUEsQ0FBQSxnQkFBQSxPQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLE1BQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxJQUFBLFdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsV0FBQSxNQUFBLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsS0FBQSxXQUFBLE1BQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSwyQkFBQSxlQUFBLENBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSwwQkFBQSxFQUFBLDBCQUFBLElBQUEsMEJBQUEscUJBQUEsaUJBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxZQUFBLEtBQUEsc0NBQUEsQ0FBQSxLQUFBLENBQUEsb0JBQUEsQ0FBQSxRQUFBLENBQUEsV0FBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLG1CQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsbUJBQUEsQ0FBQSxxQkFBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxzQkFBQSxDQUFBLENBQUEsTUFBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLHVCQUFBLENBQUEsQ0FBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxxQkFBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxtQkFBQSxvQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLGFBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLGtCQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsU0FBQSx1Q0FBQSxDQUFBLGlCQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxPQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsU0FBQSxzQ0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsY0FBQSxhQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsTUFBQSxFQUFBLENBQUEsWUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxVQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxRQUFBLEdBQUEsQ0FBQSxXQUFBLFVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxjQUFBLGNBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLG9CQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLGFBQUEsUUFBQSxDQUFBLFNBQUEsVUFBQSxNQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFlBQUEsY0FBQSxLQUFBLGlCQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSw0QkFBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsT0FBQSxLQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxZQUFBLEtBQUEsYUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxTQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxZQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxnQkFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsa0NBQUEsaUJBQUEsQ0FBQSxTQUFBLEdBQUEsMEJBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxLQUFBLEVBQUEsMEJBQUEsRUFBQSxZQUFBLFNBQUEsQ0FBQSxDQUFBLDBCQUFBLG1CQUFBLEtBQUEsRUFBQSxpQkFBQSxFQUFBLFlBQUEsU0FBQSxpQkFBQSxDQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsMEJBQUEsRUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxtQkFBQSxhQUFBLENBQUEsUUFBQSxDQUFBLHdCQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsV0FBQSxXQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsaUJBQUEsNkJBQUEsQ0FBQSxDQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxXQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsMEJBQUEsS0FBQSxDQUFBLENBQUEsU0FBQSxHQUFBLDBCQUFBLEVBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxLQUFBLGFBQUEsQ0FBQSxhQUFBLE9BQUEsRUFBQSxDQUFBLE9BQUEscUJBQUEsQ0FBQSxhQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxhQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsaUNBQUEsQ0FBQSxDQUFBLGFBQUEsR0FBQSxhQUFBLEVBQUEsQ0FBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxlQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsT0FBQSxPQUFBLENBQUEsT0FBQSxhQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsV0FBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLFdBQUEscUJBQUEsQ0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxpQ0FBQSxNQUFBLENBQUEsQ0FBQSw2REFBQSxDQUFBLENBQUEsSUFBQSxhQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLGdCQUFBLENBQUEsSUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsYUFBQSxLQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxTQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxXQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLE9BQUEsQ0FBQSxTQUFBLEtBQUEsV0FBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLFdBQUEsTUFBQSxDQUFBLGFBQUEsSUFBQSxXQUFBLElBQUEsV0FBQSxJQUFBLFFBQUEsS0FBQSxHQUFBLENBQUEsT0FBQSxJQUFBLFlBQUEsUUFBQSxjQUFBLE1BQUEsZ0JBQUEsR0FBQSxHQUFBLENBQUEsT0FBQSxVQUFBLENBQUEsT0FBQSxDQUFBLGFBQUEsSUFBQSxDQUFBLFdBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxNQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsSUFBQSxXQUFBLEtBQUEsU0FBQSxJQUFBLFdBQUEsQ0FBQSxRQUFBLFVBQUEsSUFBQSxVQUFBLGtCQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEsY0FBQSxJQUFBLEtBQUEsaUJBQUEsV0FBQSxrQkFBQSxDQUFBLGFBQUEsSUFBQSxRQUFBLENBQUEsTUFBQSxDQUFBLGtCQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsTUFBQSxTQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsTUFBQSxTQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxhQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxnQkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsY0FBQSxDQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLHFCQUFBLENBQUEsWUFBQSxLQUFBLHFEQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxZQUFBLE1BQUEsV0FBQSxPQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsd0JBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxLQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGNBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxTQUFBLE1BQUEsZ0JBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLEVBQUEsQ0FBQSxTQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsUUFBQSxXQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxxQkFBQSxDQUFBLENBQUEsSUFBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxnQkFBQSxDQUFBLENBQUEsSUFBQSxTQUFBLElBQUEsUUFBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxNQUFBLGtCQUFBLElBQUEseUJBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLFVBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLFVBQUEsS0FBQSxDQUFBLGNBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxhQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEseUJBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxhQUFBLENBQUEsQ0FBQSxZQUFBLENBQUEsZ0JBQUEsS0FBQSw4QkFBQSxhQUFBLFdBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsUUFBQSxLQUFBLFFBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsT0FBQSxFQUFBLENBQUEsb0JBQUEsTUFBQSxVQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUE7QUFBQSxTQUFBLG1CQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsY0FBQSxJQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLE9BQUEsS0FBQSxHQUFBLElBQUEsQ0FBQSxLQUFBLFdBQUEsS0FBQSxJQUFBLE1BQUEsQ0FBQSxLQUFBLGlCQUFBLElBQUEsQ0FBQSxJQUFBLElBQUEsT0FBQSxDQUFBLEtBQUEsWUFBQSxPQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLENBQUEsS0FBQSxFQUFBLE1BQUE7QUFBQSxTQUFBLGtCQUFBLEVBQUEsNkJBQUEsSUFBQSxTQUFBLElBQUEsR0FBQSxTQUFBLGFBQUEsT0FBQSxXQUFBLE9BQUEsRUFBQSxNQUFBLFFBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsWUFBQSxNQUFBLEtBQUEsSUFBQSxrQkFBQSxDQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLFVBQUEsS0FBQSxjQUFBLE9BQUEsR0FBQSxJQUFBLGtCQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsV0FBQSxHQUFBLEtBQUEsS0FBQSxDQUFBLFNBQUE7QUFBQSxTQUFBLG1CQUFBLEdBQUEsV0FBQSxrQkFBQSxDQUFBLEdBQUEsS0FBQSxnQkFBQSxDQUFBLEdBQUEsS0FBQSwyQkFBQSxDQUFBLEdBQUEsS0FBQSxrQkFBQTtBQUFBLFNBQUEsbUJBQUEsY0FBQSxTQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsTUFBQSxTQUFBLENBQUEscUJBQUEsQ0FBQSxzQkFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBLE9BQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsbUJBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSwrREFBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUE7QUFBQSxTQUFBLGlCQUFBLElBQUEsZUFBQSxNQUFBLG9CQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxhQUFBLElBQUEsK0JBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBO0FBQUEsU0FBQSxtQkFBQSxHQUFBLFFBQUEsS0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLFVBQUEsaUJBQUEsQ0FBQSxHQUFBO0FBQUEsU0FBQSxrQkFBQSxHQUFBLEVBQUEsR0FBQSxRQUFBLEdBQUEsWUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLE1BQUEsSUFBQSxPQUFBLEtBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLElBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFB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TSxLQUFLLE1BQU0sRUFBRTtZQUNwSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQzdCO1FBQ0o7TUFDSjtJQUNKO0VBQUM7RUFBQSxPQUFBLFlBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhMLElBQUEsWUFBQSxHQUFBLE9BQUE7QUFBQSxNQUFBLENBQUEsSUFBQSxDQUFBLFlBQUEsRUFBQSxPQUFBLFdBQUEsR0FBQTtFQUFBLElBQUEsR0FBQSxrQkFBQSxHQUFBO0VBQUEsSUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsWUFBQSxFQUFBLEdBQUE7RUFBQSxJQUFBLEdBQUEsSUFBQSxPQUFBLElBQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxZQUFBLENBQUEsR0FBQTtFQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLEdBQUE7SUFBQSxVQUFBO0lBQUEsR0FBQSxXQUFBLElBQUE7TUFBQSxPQUFBLFlBQUEsQ0FBQSxHQUFBO0lBQUE7RUFBQTtBQUFBO0FBQ0EsSUFBQSxRQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQ0EsSUFBQSxZQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQXdDLFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQUFBLElBQUEsUUFBQSxHQUFBLE9BQUEsY0FFekIsdUJBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbilcbiAgICAgICAgICAgIHRoaXMub3B0aW9uID0gb3B0aW9uO1xuICAgIH1cbiAgICBuYW1lO1xuICAgIGRpc3BsYXlOYW1lO1xuICAgIG9wdGlvbiA9IHtcbiAgICAgICAgbHVtaW5hbmNlOiAwXG4gICAgfTtcbiAgICBmaWx0ZXJDb2xvcihjb2xvcikge1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIDtcbiAgICAvLyDkv53or4HpopzoibLlnKgwLTI1NeS5i+mXtFxuICAgIGNoZWNrQ29sb3JWYWx1ZSA9ICh2KSA9PiB7XG4gICAgICAgIHYgPSBNYXRoLm1pbih2LCAyNTUpO1xuICAgICAgICB2ID0gTWF0aC5tYXgodiwgMCk7XG4gICAgICAgIHYgPSBNYXRoLnJvdW5kKHYpO1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9O1xufVxuLyoqXG4gKiDlj43oibLmu6TplZxcbiAqL1xuZXhwb3J0IGNsYXNzIFJldmVyc2VGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIG5hbWUgPSAnUmV2ZXJzZUZpbHRlcic7XG4gICAgZGlzcGxheU5hbWUgPSAn5Y+N6ImyJztcbiAgICAvLyDpopzoibLlpITnkIZcbiAgICBmaWx0ZXJDb2xvcihjb2xvcikge1xuICAgICAgICBjb2xvci5yID0gMjU1IC0gY29sb3IucjtcbiAgICAgICAgY29sb3IuZyA9IDI1NSAtIGNvbG9yLmc7XG4gICAgICAgIGNvbG9yLmIgPSAyNTUgLSBjb2xvci5iO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxufVxuLyoqXG4gKiDngbDluqbmu6TplZxcbiAqL1xuZXhwb3J0IGNsYXNzIEdyYXlGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgICAgICBpZiAob3B0aW9uKVxuICAgICAgICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgfVxuICAgIG5hbWUgPSAnR3JheUZpbHRlcic7XG4gICAgZGlzcGxheU5hbWUgPSAn54Gw5bqmJztcbiAgICBvcHRpb24gPSB7XG4gICAgICAgIHI6IDAuMywgZzogMC42LCBiOiAwLjFcbiAgICB9O1xuICAgIC8vIOminOiJsuWkhOeQhlxuICAgIGZpbHRlckNvbG9yKGNvbG9yLCBvcHRpb24gPSB0aGlzLm9wdGlvbikge1xuICAgICAgICBjb25zdCBncmF5ID0gdGhpcy5jaGVja0NvbG9yVmFsdWUoY29sb3IuciAqIG9wdGlvbi5yICsgY29sb3IuZyAqIG9wdGlvbi5nICsgY29sb3IuYiAqIG9wdGlvbi5iKTtcbiAgICAgICAgY29sb3IuciA9IGdyYXk7XG4gICAgICAgIGNvbG9yLmcgPSBncmF5O1xuICAgICAgICBjb2xvci5iID0gZ3JheTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbn1cbi8qKlxuICog6buY55m95ruk6ZWcXG4gKi9cbmV4cG9ydCBjbGFzcyBCbGFja0ZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgbmFtZSA9ICdCbGFja0ZpbHRlcic7XG4gICAgZGlzcGxheU5hbWUgPSAn6buR55m9JztcbiAgICAvLyDpopzoibLlpITnkIZcbiAgICBmaWx0ZXJDb2xvcihjb2xvcikge1xuICAgICAgICBjb25zdCBhdmcgPSB0aGlzLmNoZWNrQ29sb3JWYWx1ZSgoY29sb3IuciArIGNvbG9yLmcgKyBjb2xvci5iKSAvIDMpO1xuICAgICAgICBjb25zdCBjID0gYXZnID49IDEyOCA/IDI1NSA6IDA7XG4gICAgICAgIGNvbG9yLnIgPSBjO1xuICAgICAgICBjb2xvci5nID0gYztcbiAgICAgICAgY29sb3IuYiA9IGM7XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG59XG4vKipcbiAqIOS6ruW6pua7pOmVnFxuICovXG5leHBvcnQgY2xhc3MgQnJpZ2h0bmVzc0ZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnQnJpZ2h0bmVzc0ZpbHRlcic7XG4gICAgZGlzcGxheU5hbWUgPSAn5Lqu5bqmJztcbiAgICAvLyDpopzoibLlpITnkIZcbiAgICBmaWx0ZXJDb2xvcihjb2xvciwgb3B0aW9uID0gdGhpcy5vcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbi5sdW1pbmFuY2UgPT09IDApXG4gICAgICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICAgIGNvbG9yLnIgPSB0aGlzLmNoZWNrQ29sb3JWYWx1ZShvcHRpb24ubHVtaW5hbmNlICsgY29sb3Iucik7XG4gICAgICAgIGNvbG9yLmcgPSB0aGlzLmNoZWNrQ29sb3JWYWx1ZShvcHRpb24ubHVtaW5hbmNlICsgY29sb3IuZyk7XG4gICAgICAgIGNvbG9yLmIgPSB0aGlzLmNoZWNrQ29sb3JWYWx1ZShvcHRpb24ubHVtaW5hbmNlICsgY29sb3IuYik7XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG59XG4vKipcbiAqIFJHQumAmumBk+a7pOmVnFxuICovXG5leHBvcnQgY2xhc3MgUkdCRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBuYW1lID0gJ1JHQkZpbHRlcic7XG4gICAgZGlzcGxheU5hbWUgPSAnUkdC6YCa6YGTJztcbiAgICAvLyDpopzoibLlpITnkIZcbiAgICBmaWx0ZXJDb2xvcihjb2xvciwgb3B0aW9uID0gdGhpcy5vcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbi5yKVxuICAgICAgICAgICAgY29sb3IuciA9IHRoaXMuY2hlY2tDb2xvclZhbHVlKG9wdGlvbi5yICsgY29sb3Iucik7XG4gICAgICAgIGlmIChvcHRpb24uZylcbiAgICAgICAgICAgIGNvbG9yLmcgPSB0aGlzLmNoZWNrQ29sb3JWYWx1ZShvcHRpb24uZyArIGNvbG9yLmcpO1xuICAgICAgICBpZiAob3B0aW9uLmIpXG4gICAgICAgICAgICBjb2xvci5iID0gdGhpcy5jaGVja0NvbG9yVmFsdWUob3B0aW9uLmIgKyBjb2xvci5iKTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbn1cbi8qKlxuICog6YCP5piO5bqmXG4gKi9cbmV4cG9ydCBjbGFzcyBPcGFjaXR5RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdPcGFjaXR5RmlsdGVyJztcbiAgICBkaXNwbGF5TmFtZSA9ICfpgI/mmI7luqYnO1xuICAgIC8vIOminOiJsuWkhOeQhlxuICAgIGZpbHRlckNvbG9yKGNvbG9yLCBvcHRpb24gPSB0aGlzLm9wdGlvbikge1xuICAgICAgICBjb2xvci5hID0gdGhpcy5jaGVja0NvbG9yVmFsdWUob3B0aW9uLmx1bWluYW5jZSArIGNvbG9yLmEpO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxufVxuLyoqXG4gKiBSR0LokpnniYjmu6TplZxcbiAqL1xuZXhwb3J0IGNsYXNzIFJHQk1hc2tGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIG5hbWUgPSAnUkdCTWFza0ZpbHRlcic7XG4gICAgZGlzcGxheU5hbWUgPSAnUkdC6JKZ54mIJztcbiAgICAvLyDpopzoibLlpITnkIZcbiAgICBmaWx0ZXJDb2xvcihjb2xvciwgb3B0aW9uID0gdGhpcy5vcHRpb24pIHtcbiAgICAgICAgY29uc3QgYXZnID0gdGhpcy5jaGVja0NvbG9yVmFsdWUoKGNvbG9yLnIgKyBjb2xvci5nICsgY29sb3IuYikgLyAzKTtcbiAgICAgICAgaWYgKG9wdGlvbi5yKVxuICAgICAgICAgICAgY29sb3IuciA9IGF2ZztcbiAgICAgICAgaWYgKG9wdGlvbi5nKVxuICAgICAgICAgICAgY29sb3IuZyA9IGF2ZztcbiAgICAgICAgaWYgKG9wdGlvbi5iKVxuICAgICAgICAgICAgY29sb3IuYiA9IGF2ZztcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbn1cbi8qKlxuICog6ICB54Wn54mH5ruk6ZWcXG4gKi9cbmV4cG9ydCBjbGFzcyBPbGRQaG90b0ZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgICAgIGlmIChvcHRpb24pXG4gICAgICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgdGhpcy5vcHRpb24gPSB7XG4gICAgICAgICAgICByQ29sb3I6IHtcbiAgICAgICAgICAgICAgICByOiAwLjI4LCBnOiAwLjcyLCBiOiAwLjIyLCBhOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ0NvbG9yOiB7XG4gICAgICAgICAgICAgICAgcjogMC4yNSwgZzogMC42MywgYjogMC4xMywgYTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJDb2xvcjoge1xuICAgICAgICAgICAgICAgIHI6IDAuMTcsIGc6IDAuNjYsIGI6IDAuMTMsIGE6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi50aGlzLm9wdGlvblxuICAgICAgICB9O1xuICAgIH1cbiAgICBuYW1lID0gJ09sZFBob3RvRmlsdGVyJztcbiAgICBkaXNwbGF5TmFtZSA9ICfogIHnhafniYcnO1xuICAgIC8vIOminOiJsuWkhOeQhlxuICAgIGZpbHRlckNvbG9yKGNvbG9yLCBvcHRpb24gPSB0aGlzLm9wdGlvbikge1xuICAgICAgICBjb2xvci5yID0gdGhpcy5jaGVja0NvbG9yVmFsdWUoY29sb3IuciAqIG9wdGlvbi5yQ29sb3IuciArIGNvbG9yLmcgKiBvcHRpb24uckNvbG9yLmcgKyBjb2xvci5iICogb3B0aW9uLnJDb2xvci5iKTtcbiAgICAgICAgY29sb3IuZyA9IHRoaXMuY2hlY2tDb2xvclZhbHVlKGNvbG9yLnIgKiBvcHRpb24uZ0NvbG9yLnIgKyBjb2xvci5nICogb3B0aW9uLmdDb2xvci5nICsgY29sb3IuYiAqIG9wdGlvbi5nQ29sb3IuYik7XG4gICAgICAgIGNvbG9yLmIgPSB0aGlzLmNoZWNrQ29sb3JWYWx1ZShjb2xvci5yICogb3B0aW9uLmJDb2xvci5yICsgY29sb3IuZyAqIG9wdGlvbi5iQ29sb3IuZyArIGNvbG9yLmIgKiBvcHRpb24uYkNvbG9yLmIpO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxufVxuLyoqXG4gKiDmqKHns4rmu6TplZxcbiAqL1xuZXhwb3J0IGNsYXNzIEJsdXJGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgICAgICB0aGlzLm9wdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcmFkaXVzOiAxMCxcbiAgICAgICAgICAgIHNpZ21hOiA1XG4gICAgICAgIH0sIHRoaXMub3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdCbHVyRmlsdGVyJztcbiAgICBkaXNwbGF5TmFtZSA9ICfmqKHns4onO1xuICAgIGdlbkdhdXNzTWF0cml4KG9wdGlvbiA9IHRoaXMub3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IFtdO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgbGV0IGIgPSAtMSAvICgyICogb3B0aW9uLnNpZ21hICogb3B0aW9uLnNpZ21hKSwgYSA9IDEgLyAoTWF0aC5zcXJ0KDIgKiBNYXRoLlBJKSAqIG9wdGlvbi5zaWdtYSk7XG4gICAgICAgIC8vIOeUn+aIkOmrmOaWr+efqemYtVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgeCA9IC1vcHRpb24ucmFkaXVzOyB4IDw9IG9wdGlvbi5yYWRpdXM7IHgrKywgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBnID0gYSAqIE1hdGguZXhwKGIgKiB4ICogeCk7XG4gICAgICAgICAgICBtYXRyaXhbaV0gPSBnO1xuICAgICAgICAgICAgc3VtICs9IGc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5b2S5LiA5YyW77yM5L+d6K+B6auY5pav55+p6Zi155qE5YC8IOWcqDAtMeS5i+mXtFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWF0cml4W2ldIC89IHN1bTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgIH1cbiAgICBmaWx0ZXIoZGF0YSwgb3B0aW9uID0gdGhpcy5vcHRpb24pIHtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gdGhpcy5nZW5HYXVzc01hdHJpeChvcHRpb24pO1xuICAgICAgICAvLyBY5pa55ZCR5LiA57u06auY5pav6L+Q566XXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZGF0YS5oZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkYXRhLndpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gLW9wdGlvbi5yYWRpdXM7IGogPD0gb3B0aW9uLnJhZGl1czsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrID0geCArIGo7XG4gICAgICAgICAgICAgICAgICAgIC8vIOehruS/nUvmsqHotoXlh7pY6IyD5Zu0XG4gICAgICAgICAgICAgICAgICAgIGlmIChrID49IDAgJiYgayA8IGRhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAoeSAqIGRhdGEud2lkdGggKyBrKSAqIDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaSA9IG1hdHJpeFtqICsgb3B0aW9uLnJhZGl1c107XG4gICAgICAgICAgICAgICAgICAgICAgICByICs9IGRhdGEuZGF0YVtpXSAqIG1pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZyArPSBkYXRhLmRhdGFbaSArIDFdICogbWk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiICs9IGRhdGEuZGF0YVtpICsgMl0gKiBtaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSBtaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBpID0gKHkgKiBkYXRhLndpZHRoICsgeCkgKiA0O1xuICAgICAgICAgICAgICAgIC8vIOmZpOS7pXN1beaYr+S4uuS6hua2iOmZpOWkhOS6jui+uee8mOeahOWDj+e0oO+8jOmrmOaWr+i/kOeul+S4jei2s+mXrumimFxuICAgICAgICAgICAgICAgIGRhdGEuZGF0YVtpXSA9IHIgLyBzdW07XG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhW2kgKyAxXSA9IGcgLyBzdW07XG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhW2kgKyAyXSA9IGIgLyBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gWOaWueWQkeS4gOe7tOmrmOaWr+i/kOeul1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRhdGEud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBkYXRhLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHIgPSAwLCBnID0gMCwgYiA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IC1vcHRpb24ucmFkaXVzOyBqIDw9IG9wdGlvbi5yYWRpdXM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgayA9IHkgKyBqO1xuICAgICAgICAgICAgICAgICAgICAvLyDnoa7kv51L5rKh6LaF5Ye6eeiMg+WbtFxuICAgICAgICAgICAgICAgICAgICBpZiAoayA+PSAwICYmIGsgPCBkYXRhLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IChrICogZGF0YS53aWR0aCArIHgpICogNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pID0gbWF0cml4W2ogKyBvcHRpb24ucmFkaXVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gZGF0YS5kYXRhW2ldICogbWk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnICs9IGRhdGEuZGF0YVtpICsgMV0gKiBtaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgKz0gZGF0YS5kYXRhW2kgKyAyXSAqIG1pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IG1pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAoeSAqIGRhdGEud2lkdGggKyB4KSAqIDQ7XG4gICAgICAgICAgICAgICAgLy8g6Zmk5Lulc3Vt5piv5Li65LqG5raI6Zmk5aSE5LqO6L6557yY55qE5YOP57Sg77yM6auY5pav6L+Q566X5LiN6Laz6Zeu6aKYXG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhW2ldID0gciAvIHN1bTtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGFbaSArIDFdID0gZyAvIHN1bTtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGFbaSArIDJdID0gYiAvIHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG4vKipcbiAqIOmprOi1m+WFi+a7pOmVnFxuICovXG5leHBvcnQgY2xhc3MgTW9zYWljRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICAgICAgdGhpcy5vcHRpb24gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGJsdXI6IDYgLy8g6ams6LWb5YWL6IyD5Zu0XG4gICAgICAgIH0sIHRoaXMub3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdNb3NhaWNGaWx0ZXInO1xuICAgIGRpc3BsYXlOYW1lID0gJ+mprOi1m+WFiyc7XG4gICAgZmlsdGVyKGRhdGEsIG9wdGlvbiA9IHRoaXMub3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IGJsdXJSID0gMiAqIG9wdGlvbi5ibHVyICsgMTtcbiAgICAgICAgY29uc3QgdG90YWwgPSBibHVyUiAqIGJsdXJSO1xuICAgICAgICBmb3IgKGxldCBpID0gb3B0aW9uLmJsdXI7IGkgPD0gZGF0YS53aWR0aDsgaSArPSBibHVyUikge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IG9wdGlvbi5ibHVyOyBqIDw9IGRhdGEuaGVpZ2h0OyBqICs9IGJsdXJSKSB7XG4gICAgICAgICAgICAgICAgbGV0IHIgPSAwLCBnID0gMCwgYiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGVueSA9IC1vcHRpb24uYmx1cjsgbGVueSA8PSBvcHRpb24uYmx1cjsgbGVueSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGxlbnggPSAtb3B0aW9uLmJsdXI7IGxlbnggPD0gb3B0aW9uLmJsdXI7IGxlbngrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSA0ICogKChqICsgbGVueSkgKiBkYXRhLndpZHRoICsgaSArIGxlbngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSBkYXRhLmRhdGFbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZyArPSBkYXRhLmRhdGFbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgKz0gZGF0YS5kYXRhW2luZGV4ICsgMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHZyID0gciAvIHRvdGFsLCB2ZyA9IGcgLyB0b3RhbCwgdmIgPSBiIC8gdG90YWw7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGVueSA9IC1vcHRpb24uYmx1cjsgbGVueSA8PSBvcHRpb24uYmx1cjsgbGVueSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGxlbnggPSAtb3B0aW9uLmJsdXI7IGxlbnggPD0gb3B0aW9uLmJsdXI7IGxlbngrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSA0ICogKChqICsgbGVueSkgKiBkYXRhLndpZHRoICsgaSArIGxlbngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhW2luZGV4XSA9IHZyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhW2luZGV4ICsgMV0gPSB2ZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YVtpbmRleCArIDJdID0gdmI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuY29uc3QgZmlsdGVycyA9IHtcbiAgICBSZXZlcnNlRmlsdGVyLFxuICAgIEdyYXlGaWx0ZXIsXG4gICAgQmxhY2tGaWx0ZXIsXG4gICAgQnJpZ2h0bmVzc0ZpbHRlcixcbiAgICBSR0JGaWx0ZXIsXG4gICAgT3BhY2l0eUZpbHRlcixcbiAgICBSR0JNYXNrRmlsdGVyLFxuICAgIE9sZFBob3RvRmlsdGVyLFxuICAgIEJsdXJGaWx0ZXIsXG4gICAgTW9zYWljRmlsdGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgZmlsdGVycztcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlRmlsdGVycyB7XG4gICAgY29uc3RydWN0b3IoZmlsdGVycykge1xuICAgICAgICBpZiAoZmlsdGVycyAmJiBmaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goLi4uZmlsdGVycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5YGa5Li66L2s5o2i55qEY2FudmFz5YWD57qxXG4gICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgX2N0eDtcbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N0eClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdHg7XG4gICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdHg7XG4gICAgfVxuICAgIC8vIOaJgOacieaUr+aMgeeahOa7pOmVnFxuICAgIGZpbHRlcnMgPSBuZXcgQXJyYXkoKTtcbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZSgwLCB0aGlzLmZpbHRlcnMubGVuZ3RoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5oqK5Zu+54mH6L2s5oiQ5pWw5o2uXG4gICAgICogQHBhcmFtIGltZ1xuICAgICAqL1xuICAgIGFzeW5jIGNvbnZlcnRUb0ltYWdlRGF0YShpbWcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgZWwuc3JjID0gaW1nO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvSW1hZ2VEYXRhKGVsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICghaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuY29udmVydFRvSW1hZ2VEYXRhKGltZyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBpbWcubmF0dXJhbFdpZHRoIHx8IGltZy53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBpbWcubmF0dXJhbEhlaWdodCB8fCBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlupTnlKjmu6TplZxcbiAgICAgKi9cbiAgICBhc3luYyBmaWx0ZXIoaW1hZ2UsIGZpbHRlcnMgPSB0aGlzLmZpbHRlcnMpIHtcbiAgICAgICAgaWYgKGltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICAgICAgaW1hZ2UgPSBhd2FpdCB0aGlzLmNvbnZlcnRUb0ltYWdlRGF0YShpbWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5ruk6ZWc5aSE55CGLCDlpoLmnpzmmK/lhajph4/nu5/kuIDlpITnkIbnmoTmu6TplZzvvIzliJnnm7TmjqXlpITnkIbljp/lp4vmlbDmja5cbiAgICAgICAgZmlsdGVycy5tYXAoKGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGZpbHRlci5maWx0ZXIgJiYgaW1hZ2UgaW5zdGFuY2VvZiBJbWFnZURhdGEpXG4gICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlcihpbWFnZSwgZmlsdGVyLm9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IHtcbiAgICAgICAgICAgICAgICByOiBpbWFnZS5kYXRhW2ldLFxuICAgICAgICAgICAgICAgIGc6IGltYWdlLmRhdGFbaSArIDFdLFxuICAgICAgICAgICAgICAgIGI6IGltYWdlLmRhdGFbaSArIDJdLFxuICAgICAgICAgICAgICAgIGE6IGltYWdlLmRhdGFbaSArIDNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIOa7pOmVnOWkhOeQhlxuICAgICAgICAgICAgZmlsdGVycy5tYXAoKGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuZmlsdGVyQ29sb3IpXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gZmlsdGVyLmZpbHRlckNvbG9yKGNvbG9yLCBmaWx0ZXIub3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1hZ2UuZGF0YVtpXSA9IGNvbG9yLnI7XG4gICAgICAgICAgICBpbWFnZS5kYXRhW2kgKyAxXSA9IGNvbG9yLmc7XG4gICAgICAgICAgICBpbWFnZS5kYXRhW2kgKyAyXSA9IGNvbG9yLmI7XG4gICAgICAgICAgICBpbWFnZS5kYXRhW2kgKyAzXSA9IGNvbG9yLmE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cbiAgICAvLyDovaxiYXNlNjRcbiAgICB0b0Jhc2U2NChkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgZGF0YS53aWR0aCwgZGF0YS5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApO1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMudG9EYXRhVVJMKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOa7pOmVnFxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKi9cbiAgICBhZGQoZmlsdGVyKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBmaWx0ZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoZik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGZpbHRlckNvbG9yOiBmaWx0ZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOenu+mZpOa7pOmVnFxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKi9cbiAgICByZW1vdmUoZmlsdGVyKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBmaWx0ZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoZik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5maWx0ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyAmJiB0aGlzLmZpbHRlcnNbaV0ubmFtZSA9PT0gZmlsdGVyKSB8fCB0aGlzLmZpbHRlcnNbaV0gPT09IGZpbHRlciB8fCB0aGlzLmZpbHRlcnNbaV0uZmlsdGVyID09PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2ZpbHRlclR5cGVzJztcbmltcG9ydCBmaWx0ZXJzIGZyb20gJy4vZmlsdGVycyc7XG5pbXBvcnQgSW1hZ2VGaWx0ZXIgZnJvbSAnLi9pbWFnZUZpbHRlcic7XG5leHBvcnQgeyBmaWx0ZXJzIH07XG5leHBvcnQgZGVmYXVsdCBJbWFnZUZpbHRlcjtcbiJdfQ==
