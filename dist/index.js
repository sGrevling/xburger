"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let timeout;

const Button = _ref => {
  let {
    open,
    transitionTime,
    c
  } = _ref;
  const [stage2open, setStage2open] = (0, _react.useState)(open);
  const tt = transitionTime * .6;
  (0, _react.useEffect)(() => {
    if (timeout) clearTimeout(timeout);
    timeout = undefined;
    if (open === stage2open) return;
    timeout = setTimeout(() => setStage2open(s2o => !s2o), tt * .6); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, stage2open]);

  const renderPath = (d1, d2, o) => /*#__PURE__*/_react.default.createElement("path", {
    style: {
      transition: "d ".concat(tt, "ms ease-out")
    },
    d: o ? d2 : d1,
    fill: c,
    className: 'mainShape'
  });

  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "xburgerButton",
    viewBox: "0 0 132.29166 132.29167",
    height: "30",
    width: "30"
  }, renderPath("m 4.0263095,14.267981 125.3180305,-0.01822 0.003,18.591625 -125.3180367,0.01823 z", "M 28.846694,14.020461 117.45992,106.30873 104.83715,119.455 16.223931,27.166726 Z", open), renderPath("M 3.4245129,57.752314 H 128.74254 V 76.343939 H 3.4245129 Z", "M 67.752314,57.752314 H 67.752314 V 76.343939 H 67.752314 Z", stage2open), renderPath("m 3.3906325,100.69908 125.3180175,0.008 -0.001,18.59162 -125.3180167,-0.008 z", "M 16.175122,106.15278 104.78835,13.864516 117.41112,27.010786 28.79789,119.29905 Z", open));
};

const Menu = _ref2 => {
  let {
    children,
    onCloseClickOverride,
    shouldCloseOnClick,
    transitionTime,
    zIndexLow,
    color,
    bgColor,
    backdropColor
  } = _ref2;
  const [show, setShow] = (0, _react.useState)(false);
  const tt = transitionTime !== null && transitionTime !== void 0 ? transitionTime : 400,
        zi = zIndexLow !== null && zIndexLow !== void 0 ? zIndexLow : 2,
        c = color !== null && color !== void 0 ? color : 'white',
        bgc = bgColor !== null && bgColor !== void 0 ? bgColor : 'rebeccapurple',
        bdc = backdropColor !== null && backdropColor !== void 0 ? backdropColor : '#e3e6e850';
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "xburgerTouchOutsideSensor ".concat(show ? ' show' : ''),
    onClick: () => setShow(false),
    style: {
      transition: "opacity ".concat(tt, "ms ease-out"),
      zIndex: zi,
      backgroundColor: bdc
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: 'xburgerMenuButton',
    onClick: () => onCloseClickOverride ? onCloseClickOverride() : setShow(!show),
    style: {
      zIndex: zi + 2,
      backgroundColor: bgc
    }
  }, /*#__PURE__*/_react.default.createElement(Button, {
    open: !!(show || onCloseClickOverride),
    transitionTime: tt,
    c: c
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "xburgerMenu ".concat(show ? ' show' : ''),
    onClick: e => shouldCloseOnClick && shouldCloseOnClick(e) && setShow(false),
    style: {
      transition: "left ".concat(tt, "ms ease-out, right ").concat(tt, "ms ease-out"),
      zIndex: zi + 1,
      color: c,
      backgroundColor: bgc
    }
  }, children));
};

var _default = Menu;
exports.default = _default;