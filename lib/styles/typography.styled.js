"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.baseRem = exports.BASE_FONT_SIZE = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _polished = require("polished");

var _responsive = require("./responsive.styles");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      font-size: ", ";\n      ", "\n    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var BASE_FONT_SIZE = 16;
exports.BASE_FONT_SIZE = BASE_FONT_SIZE;

var addFont = function addFont(fontName, fileName) {
  var fontWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
  var fontStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'normal';
  var fileFormats = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['eot', 'woff2', 'woff', 'svg'];
  return (0, _styledComponents.css)(["", ""], (0, _polished.fontFace)({
    fontFamily: fontName,
    fontFilePath: "./src/assets/fonts/".concat(fileName),
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    fileFormats: fileFormats
  }));
};

var font = {
  base: (0, _styledComponents.css)(["font-family:'Lato',sans-serif;"]),
  headings: (0, _styledComponents.css)(["font-family:'Wonderbly Boing',sans-serif;"]),
  monospace: (0, _styledComponents.css)(["font-family:'Inconsolata',monospace;"]),
  imports: (0, _styledComponents.css)(["@import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i&display=swap');@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');", ";", " ", ";", ";"], addFont('Wonderbly Boing', 'WonderblyBoing-RegularWEB'), addFont('Wonderbly Boing', 'WonderblyBoing-LightWEB', 200), addFont('Wonderbly Boing', 'WonderblyBoing-MediumWEB', 500), addFont('Wonderbly Boing', 'WonderblyBoing-SemiBoldWEB', 500))
};

var baseRem = function baseRem(value) {
  return (0, _polished.rem)(value, BASE_FONT_SIZE);
};

exports.baseRem = baseRem;

var lineHeight = function lineHeight(value) {
  var useOldCalc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0, _styledComponents.css)(["line-height:", ";"], useOldCalc ? (value + 8) / value : baseRem(value * 1.618));
};

var fontSize = function fontSize(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      desktopValue = _ref.desktopValue,
      _ref$useOldLineHeight = _ref.useOldLineHeightCalc,
      useOldLineHeightCalc = _ref$useOldLineHeight === void 0 ? false : _ref$useOldLineHeight;

  return (0, _styledComponents.css)(["font-size:", ";", ";", ""], baseRem(value), lineHeight(value, useOldLineHeightCalc), desktopValue && desktopValue !== value && (0, _responsive.on)('tablet-up')(_templateObject(), baseRem(desktopValue), lineHeight(desktopValue, useOldLineHeightCalc)));
};

var tera = (0, _styledComponents.css)(["", " ", ";font-weight:600;"], fontSize(30, {
  desktopValue: 36,
  useOldLineHeightCalc: true
}), font.headings);
var giga = (0, _styledComponents.css)(["", " ", ";font-weight:500;"], fontSize(24, {
  desktopValue: 30,
  useOldLineHeightCalc: true
}), font.headings);
var mega = (0, _styledComponents.css)(["", " ", ";font-weight:400;"], fontSize(20, {
  desktopValue: 24,
  useOldLineHeightCalc: true
}), font.headings);
var kilo = (0, _styledComponents.css)(["", " font-weight:400;"], fontSize(18, {
  desktopValue: 20,
  useOldLineHeightCalc: true
}));
var base = (0, _styledComponents.css)(["", " font-weight:400;"], fontSize(16, {
  useOldLineHeightCalc: true
}));
var milli = (0, _styledComponents.css)(["", " font-weight:300;"], fontSize(16, {
  useOldLineHeightCalc: true
}));
var micro = (0, _styledComponents.css)(["", " font-weight:300;"], fontSize(14, {
  useOldLineHeightCalc: true
}));
var _default = {
  rem: baseRem,
  lineHeight: lineHeight,
  fontSize: fontSize,
  font: font,
  tera: tera,
  giga: giga,
  mega: mega,
  kilo: kilo,
  base: base,
  milli: milli,
  micro: micro
};
exports.default = _default;