"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _generateDataClass = _interopRequireDefault(require("../../../../lib/utils/generate-data-class"));

var _Button = _interopRequireWildcard(require("./Button.styled"));

var oneOfProps = {
  color: ['green-light', 'green', 'green-medium', 'green-dark', 'yellow', 'yellow-dark', 'pink', 'pink-dark', 'red', 'red-dark', 'purple', 'purple-medium', 'purple-dark', 'orange', 'orange-medium', 'orange-dark', 'blue', 'blue-medium', 'blue-dark', 'white', 'almost-light', 'grey-light', 'grey', 'grey-medium', 'grey-dark', 'almost-black'],
  textSize: ['small']
};

var Tag = function Tag(_ref) {
  var href = _ref.href,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["href", "children"]);

  if (href) {
    return _react.default.createElement(_Button.ButtonLinkTag, (0, _extends2.default)({
      href: href
    }, rest), children);
  }

  return _react.default.createElement(_Button.default, rest, children);
};
/**
 * The only true button.
 *
 * @version 1.0.0
 * @author [Edwin Joseph](https://github.com/edwinjoseph)
 */


var Button = function Button(_ref2) {
  var children = _ref2.children,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["children"]);
  var classNames = (0, _generateDataClass.default)('button', rest, ['raised', 'outlined', 'unstyled', 'textSize', 'fullWidth', 'disabled', 'color']);
  return _react.default.createElement(Tag, (0, _extends2.default)({
    "data-classnames": classNames
  }, rest), children);
};

Button.propTypes = {
  href: _propTypes.default.string,
  className: _propTypes.default.string,
  raised: _propTypes.default.bool,
  outlined: _propTypes.default.bool,
  unstyled: _propTypes.default.bool,
  disabled: _propTypes.default.bool,

  /** Span the button across the available parent space */
  fullWidth: _propTypes.default.bool,

  /** Change the color of a button */
  color: _propTypes.default.oneOf(oneOfProps.color),
  textSize: _propTypes.default.oneOf(oneOfProps.textSize),
  onClick: _propTypes.default.func,
  children: _propTypes.default.node.isRequired
};
Button.defaultProps = {
  color: 'grey-medium',
  raised: false
};
var _default = Button;
exports.default = _default;