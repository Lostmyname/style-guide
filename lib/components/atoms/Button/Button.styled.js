"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLinkTag = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = _interopRequireDefault(require("src/styles/typography.styled"));

var _helpers = require("./helpers.styled");

var ButtonTag = _styledComponents.default.button.withConfig({
  displayName: "Buttonstyled__ButtonTag",
  componentId: "xu8mp4-0"
})(["", " font-family:inherit;border:none;cursor:pointer;display:inline-block;padding:10px 40px;border-radius:4px;text-align:center;transition:all 0.25s cubic-bezier(0.17,0.67,0.52,0.97);width:", ";&:hover,&:focus,&:active{outline:none;}", ";", ";", ";", ";", ";"], function (_ref) {
  var textSize = _ref.textSize;
  return textSize === 'small' ? _typography.default.micro : _typography.default.base;
}, function (_ref2) {
  var fullWidth = _ref2.fullWidth;
  return fullWidth && '100%';
}, function (_ref3) {
  var outlined = _ref3.outlined,
      unstyled = _ref3.unstyled,
      color = _ref3.color;
  return !outlined && !unstyled && (0, _helpers.defaultButton)(color);
}, function (_ref4) {
  var outlined = _ref4.outlined,
      unstyled = _ref4.unstyled,
      color = _ref4.color;
  return outlined && !unstyled && (0, _helpers.outlinedButton)(color);
}, function (_ref5) {
  var raised = _ref5.raised,
      unstyled = _ref5.unstyled,
      color = _ref5.color;
  return raised && !unstyled && (0, _helpers.raisedButton)(color);
}, function (_ref6) {
  var unstyled = _ref6.unstyled;
  return unstyled && _helpers.unstyledButton;
}, function (_ref7) {
  var disabled = _ref7.disabled;
  return disabled && _helpers.disabledButton;
});
/** @component */


var _default = ButtonTag;
/** @component */

exports.default = _default;
var ButtonLinkTag = ButtonTag.withComponent('a');
exports.ButtonLinkTag = ButtonLinkTag;