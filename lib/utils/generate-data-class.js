"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pick = _interopRequireDefault(require("lodash/pick"));

var _reduce = _interopRequireDefault(require("lodash/reduce"));

var generateDataClass = function generateDataClass(name, props) {
  var pickedKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.keys(props);
  var pickedProps = (0, _pick.default)(props, pickedKeys);
  return (0, _reduce.default)(pickedProps, function (result, value, key) {
    result += " ".concat(key);

    if (typeof value === 'string') {
      result += "=".concat(value);
    }

    return result;
  }, name);
};

var _default = generateDataClass;
exports.default = _default;