"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabledButton = exports.unstyledButton = exports.raisedButton = exports.outlinedButton = exports.defaultButton = void 0;

var _styledComponents = require("styled-components");

var _polished = require("polished");

var _colors = require("src/styles/colors.styled");

var _typography = require("src/styles/typography.styled");

var buttonBoxShadow = function buttonBoxShadow(baseColor) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return (0, _styledComponents.css)(["box-shadow:0px ", " ", ";"], (0, _typography.baseRem)(size), baseColor);
};

var defaultButton = function defaultButton(baseColor, hoverColor) {
  return (0, _styledComponents.css)(["background-color:", ";color:", " ", ";"], _colors.palette[baseColor] || _colors.palette['grey-medium'], _colors.palette.white, function (_ref) {
    var disabled = _ref.disabled;
    return !disabled && (0, _styledComponents.css)(["&:hover,&:focus{background:", ";color:", "}&:active,&:active:hover,&:active:focus{transform:scale(0.95);}"], hoverColor || (0, _polished.darken)(0.15, _colors.palette[baseColor] || _colors.palette['grey-medium']), _colors.palette.white);
  });
};

exports.defaultButton = defaultButton;

var outlinedButton = function outlinedButton(baseColor) {
  return (0, _styledComponents.css)(["background-color:transparent;border:", " solid ", ";border-bottom:", ";color:", ";padding:8px 38px;", ""], (0, _typography.baseRem)(2), function (_ref2) {
    var raised = _ref2.raised;

    if (raised) {
      return (0, _polished.darken)(0.15, _colors.palette[baseColor] || _colors.palette['grey-medium']);
    }

    return _colors.palette[baseColor] || _colors.palette['grey-medium'];
  }, function (_ref3) {
    var raised = _ref3.raised;
    return raised && 'none';
  }, function (_ref4) {
    var raised = _ref4.raised;

    if (raised) {
      return (0, _polished.darken)(0.15, _colors.palette[baseColor] || _colors.palette['grey-medium']);
    }

    return _colors.palette[baseColor] || _colors.palette['grey-medium'];
  }, function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled && (0, _styledComponents.css)(["&:hover,&:focus{", " padding-bottom:6px;transform:translateY(-4px);margin-bottom:2px;}&:active,&:active:hover,&:active:focus{background:", ";box-shadow:none;padding-bottom:8px;margin-bottom:0;color:", ";transform:scale(0.95) translateY(0);}"], buttonBoxShadow(_colors.palette[baseColor] || _colors.palette['grey-medium'], 2), _colors.palette[baseColor] || _colors.palette['grey-medium'], _colors.palette.white);
  });
};

exports.outlinedButton = outlinedButton;

var raisedButton = function raisedButton(baseColor) {
  return (0, _styledComponents.css)(["", " padding-bottom:6px;margin-bottom:4px;", ";"], buttonBoxShadow((0, _polished.darken)(0.15, _colors.palette[baseColor] || _colors.palette['grey-medium'])), function (_ref6) {
    var disabled = _ref6.disabled;
    return !disabled && (0, _styledComponents.css)(["&:hover,&:focus{", " color:", " border-color:", ";}&:active,&:active:hover,&:active:focus{border-color:transparent;box-shadow:none;transform:translateY(2px);padding-bottom:8px;margin-bottom:0;}"], buttonBoxShadow((0, _polished.darken)(0.30, _colors.palette[baseColor] || _colors.palette['grey-medium'])), _colors.palette.white, (0, _polished.darken)(0.30, _colors.palette[baseColor] || _colors.palette['grey-medium']));
  });
};

exports.raisedButton = raisedButton;
var unstyledButton = (0, _styledComponents.css)(["background-color:transparent;border-color:transparent;color:", ";padding-left:0;padding-right:0;&:hover,&:focus{color:", ";}"], _colors.palette['almost-black'], function (_ref7) {
  var color = _ref7.color;
  return _colors.palette[color] || _colors.palette['grey-medium'];
});
exports.unstyledButton = unstyledButton;
var disabledButton = (0, _styledComponents.css)(["&,&:hover,&:focus,&:active{background-color:", ";border-color:", ";color:", ";", ";cursor:not-allowed;transform:translateY(0);}"], function (_ref8) {
  var outlined = _ref8.outlined;
  return !outlined && _colors.palette['grey-light'];
}, function (_ref9) {
  var outlined = _ref9.outlined;
  return outlined && _colors.palette['grey-light'];
}, function (_ref10) {
  var outlined = _ref10.outlined;
  return outlined ? _colors.palette['grey-light'] : _colors.palette['almost-black'];
}, function (_ref11) {
  var raised = _ref11.raised;
  return raised && buttonBoxShadow((0, _polished.darken)(0.15, _colors.palette['grey-light']));
});
exports.disabledButton = disabledButton;