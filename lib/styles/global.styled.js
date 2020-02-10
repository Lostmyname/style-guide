"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _typography = _interopRequireWildcard(require("./typography.styled"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  html, body {\n    ", "\n    font-size: ", "px;\n  }\n  * {\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _typography.default.font.imports, _typography.default.font.base, _typography.BASE_FONT_SIZE);
var _default = GlobalStyle;
exports.default = _default;