"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _reactViewportUtils = require("react-viewport-utils");

var _breakpoints = _interopRequireDefault(require("../../lib/config/breakpoints"));

var calculateResponsiveness = function calculateResponsiveness(currentWidth) {
  return function (_ref) {
    var _ref$maxWidth = _ref.maxWidth,
        maxWidth = _ref$maxWidth === void 0 ? currentWidth : _ref$maxWidth,
        _ref$minWidth = _ref.minWidth,
        minWidth = _ref$minWidth === void 0 ? currentWidth : _ref$minWidth;
    return currentWidth <= maxWidth && currentWidth >= minWidth;
  };
};

var useResponsive = function useResponsive() {
  var _useDimensions = (0, _reactViewportUtils.useDimensions)(),
      outerWidth = _useDimensions.outerWidth;

  return _lodash.default.chain(_breakpoints.default).mapKeys(function (value, key) {
    return _lodash.default.camelCase("is_".concat(key));
  }).mapValues(calculateResponsiveness(outerWidth)).value();
};

var _default = useResponsive;
exports.default = _default;