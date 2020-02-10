"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = void 0;

var _styledComponents = require("styled-components");

var _mapKeys = _interopRequireDefault(require("lodash/mapKeys"));

var _kebabCase = _interopRequireDefault(require("lodash/kebabCase"));

var _breakpoints = _interopRequireDefault(require("lib/config/breakpoints"));

var on = function on(label) {
  return function () {
    var remappedBreakpoints = (0, _mapKeys.default)(_breakpoints.default, function (value, key) {
      return (0, _kebabCase.default)(key);
    });

    var _ref = remappedBreakpoints[label] || {},
        minWidth = _ref.minWidth,
        maxWidth = _ref.maxWidth;

    if (minWidth && maxWidth) {
      return (0, _styledComponents.css)(["@media (min-width:", "px) and (max-width:", "px){", ";}"], minWidth, maxWidth, _styledComponents.css.apply(void 0, arguments));
    }

    if (minWidth) {
      return (0, _styledComponents.css)(["@media (min-width:", "px){", ";}"], minWidth, _styledComponents.css.apply(void 0, arguments));
    }

    if (maxWidth) {
      return (0, _styledComponents.css)(["@media (max-width:", "px){", ";}"], maxWidth, _styledComponents.css.apply(void 0, arguments));
    }
  };
};

exports.on = on;