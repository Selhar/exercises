webpackHotUpdate(0,{

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

var invariant = __webpack_require__(0);
var defaultClickRejectionStrategy = __webpack_require__(675);

var alreadyInjected = false;

module.exports = function injectTapEventPlugin (strategyOverrides) {
  strategyOverrides = strategyOverrides || {}
  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;

  if (true) {
    invariant(
      !alreadyInjected,
      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
It is recommended to call injectTapEventPlugin() just before you call \
ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
itself, please contact the maintainer as it shouldn\'t be called in library code and \
should be injected by the application.'
    )
  }

  alreadyInjected = true;

  __webpack_require__(60).injection.injectEventPluginsByName({
    'TapEventPlugin':       __webpack_require__(676)(shouldRejectClick)
  });
};


/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = function(lastTouchEvent, clickTimestamp) {
  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
    return true;
  }
};


/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule TapEventPlugin
 * @typechecks static-only
 */



var EventConstants = __webpack_require__(677);
var EventPluginUtils = __webpack_require__(125);
var EventPropagators = __webpack_require__(59);
var SyntheticUIEvent = __webpack_require__(61);
var TouchEventUtils = __webpack_require__(678);
var ViewportMetrics = __webpack_require__(208);

var keyOf = __webpack_require__(679);
var topLevelTypes = EventConstants.topLevelTypes;

var isStartish = EventPluginUtils.isStartish;
var isEndish = EventPluginUtils.isEndish;

var isTouch = function(topLevelType) {
  var touchTypes = [
    'topTouchCancel',
    'topTouchEnd',
    'topTouchStart',
    'topTouchMove'
  ];
  return touchTypes.indexOf(topLevelType) >= 0;
}

/**
 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
 * in order to still be considered a 'tap' event.
 */
var tapMoveThreshold = 10;
var ignoreMouseThreshold = 750;
var startCoords = {x: null, y: null};
var lastTouchEvent = null;

var Axis = {
  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
};

function getAxisCoordOfEvent(axis, nativeEvent) {
  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
  if (singleTouch) {
    return singleTouch[axis.page];
  }
  return axis.page in nativeEvent ?
    nativeEvent[axis.page] :
    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
}

function getDistance(coords, nativeEvent) {
  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
  return Math.pow(
    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
    0.5
  );
}

var touchEvents = [
  'topTouchStart',
  'topTouchCancel',
  'topTouchEnd',
  'topTouchMove',
];

var dependencies = [
  'topMouseDown',
  'topMouseMove',
  'topMouseUp',
].concat(touchEvents);

var eventTypes = {
  touchTap: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchTap: null}),
      captured: keyOf({onTouchTapCapture: null})
    },
    dependencies: dependencies
  }
};

var now = (function() {
  if (Date.now) {
    return Date.now;
  } else {
    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
    return function () {
      return +new Date;
    }
  }
})();

function createTapEventPlugin(shouldRejectClick) {
  return {

    tapMoveThreshold: tapMoveThreshold,

    ignoreMouseThreshold: ignoreMouseThreshold,

    eventTypes: eventTypes,

    /**
     * @param {string} topLevelType Record from `EventConstants`.
     * @param {DOMEventTarget} targetInst The listening component root node.
     * @param {object} nativeEvent Native browser event.
     * @return {*} An accumulation of synthetic events.
     * @see {EventPluginHub.extractEvents}
     */
    extractEvents: function(
      topLevelType,
      targetInst,
      nativeEvent,
      nativeEventTarget
    ) {

      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
        return null;
      }

      if (isTouch(topLevelType)) {
        lastTouchEvent = now();
      } else {
        if (shouldRejectClick(lastTouchEvent, now())) {
          return null;
        }
      }

      var event = null;
      var distance = getDistance(startCoords, nativeEvent);
      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
        event = SyntheticUIEvent.getPooled(
          eventTypes.touchTap,
          targetInst,
          nativeEvent,
          nativeEventTarget
        );
      }
      if (isStartish(topLevelType)) {
        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
      } else if (isEndish(topLevelType)) {
        startCoords.x = 0;
        startCoords.y = 0;
      }
      EventPropagators.accumulateTwoPhaseDispatches(event);
      return event;
    }

  };
}

module.exports = createTapEventPlugin;


/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Types of raw signals from the browser caught at the top level.
 */
var topLevelTypes = {
  topAbort: null,
  topAnimationEnd: null,
  topAnimationIteration: null,
  topAnimationStart: null,
  topBlur: null,
  topCanPlay: null,
  topCanPlayThrough: null,
  topChange: null,
  topClick: null,
  topCompositionEnd: null,
  topCompositionStart: null,
  topCompositionUpdate: null,
  topContextMenu: null,
  topCopy: null,
  topCut: null,
  topDoubleClick: null,
  topDrag: null,
  topDragEnd: null,
  topDragEnter: null,
  topDragExit: null,
  topDragLeave: null,
  topDragOver: null,
  topDragStart: null,
  topDrop: null,
  topDurationChange: null,
  topEmptied: null,
  topEncrypted: null,
  topEnded: null,
  topError: null,
  topFocus: null,
  topInput: null,
  topInvalid: null,
  topKeyDown: null,
  topKeyPress: null,
  topKeyUp: null,
  topLoad: null,
  topLoadedData: null,
  topLoadedMetadata: null,
  topLoadStart: null,
  topMouseDown: null,
  topMouseMove: null,
  topMouseOut: null,
  topMouseOver: null,
  topMouseUp: null,
  topPaste: null,
  topPause: null,
  topPlay: null,
  topPlaying: null,
  topProgress: null,
  topRateChange: null,
  topReset: null,
  topScroll: null,
  topSeeked: null,
  topSeeking: null,
  topSelectionChange: null,
  topStalled: null,
  topSubmit: null,
  topSuspend: null,
  topTextInput: null,
  topTimeUpdate: null,
  topTouchCancel: null,
  topTouchEnd: null,
  topTouchMove: null,
  topTouchStart: null,
  topTransitionEnd: null,
  topVolumeChange: null,
  topWaiting: null,
  topWheel: null
};

var EventConstants = {
  topLevelTypes: topLevelTypes
};

module.exports = EventConstants;

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule TouchEventUtils
 */

var TouchEventUtils = {
  /**
   * Utility function for common case of extracting out the primary touch from a
   * touch event.
   * - `touchEnd` events usually do not have the `touches` property.
   *   http://stackoverflow.com/questions/3666929/
   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
   *
   * @param {Event} nativeEvent Native event that may or may not be a touch.
   * @return {TouchesObject?} an object with pageX and pageY or null.
   */
  extractSingleTouch: function(nativeEvent) {
    var touches = nativeEvent.touches;
    var changedTouches = nativeEvent.changedTouches;
    var hasTouches = touches && touches.length > 0;
    var hasChangedTouches = changedTouches && changedTouches.length > 0;

    return !hasTouches && hasChangedTouches ? changedTouches[0] :
           hasTouches ? touches[0] :
           nativeEvent;
  }
};

module.exports = TouchEventUtils;


/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */
var keyOf = function keyOf(oneKeyObj) {
  var key;
  for (key in oneKeyObj) {
    if (!oneKeyObj.hasOwnProperty(key)) {
      continue;
    }
    return key;
  }
  return null;
};

module.exports = keyOf;

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _AppBar = __webpack_require__(681);

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AppBar2.default;

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(111);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(238);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(544);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.getStyles = getStyles;

var _simpleAssign = __webpack_require__(543);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__(653);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _menu = __webpack_require__(667);

var _menu2 = _interopRequireDefault(_menu);

var _Paper = __webpack_require__(551);

var _Paper2 = _interopRequireDefault(_Paper);

var _propTypes3 = __webpack_require__(546);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _warning = __webpack_require__(548);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      appBar = _context$muiTheme.appBar,
      iconButtonSize = _context$muiTheme.button.iconButtonSize,
      zIndex = _context$muiTheme.zIndex;


  var flatButtonSize = 36;

  var styles = {
    root: {
      position: 'relative',
      zIndex: zIndex.appBar,
      width: '100%',
      display: 'flex',
      backgroundColor: appBar.color,
      paddingLeft: appBar.padding,
      paddingRight: appBar.padding
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 0,
      letterSpacing: 0,
      fontSize: 24,
      fontWeight: appBar.titleFontWeight,
      color: appBar.textColor,
      height: appBar.height,
      lineHeight: appBar.height + 'px'
    },
    mainElement: {
      boxFlex: 1,
      flex: '1'
    },
    iconButtonStyle: {
      marginTop: (appBar.height - iconButtonSize) / 2,
      marginRight: 8,
      marginLeft: -16
    },
    iconButtonIconStyle: {
      fill: appBar.textColor,
      color: appBar.textColor
    },
    flatButton: {
      color: appBar.textColor,
      marginTop: (iconButtonSize - flatButtonSize) / 2 + 1
    }
  };

  return styles;
}

var AppBar = function (_Component) {
  (0, _inherits3.default)(AppBar, _Component);

  function AppBar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AppBar.__proto__ || (0, _getPrototypeOf2.default)(AppBar)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTapLeftIconButton = function (event) {
      if (_this.props.onLeftIconButtonTouchTap) {
        _this.props.onLeftIconButtonTouchTap(event);
      }
    }, _this.handleTouchTapRightIconButton = function (event) {
      if (_this.props.onRightIconButtonTouchTap) {
        _this.props.onRightIconButtonTouchTap(event);
      }
    }, _this.handleTitleTouchTap = function (event) {
      if (_this.props.onTitleTouchTap) {
        _this.props.onTitleTouchTap(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AppBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
       true ? (0, _warning2.default)(!this.props.iconElementLeft || !this.props.iconClassNameLeft, 'Material-UI: Properties iconElementLeft\n      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.') : void 0;

       true ? (0, _warning2.default)(!this.props.iconElementRight || !this.props.iconClassNameRight, 'Material-UI: Properties iconElementRight\n      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.') : void 0;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          titleStyle = _props.titleStyle,
          iconStyleLeft = _props.iconStyleLeft,
          iconStyleRight = _props.iconStyleRight,
          onTitleTouchTap = _props.onTitleTouchTap,
          showMenuIconButton = _props.showMenuIconButton,
          iconElementLeft = _props.iconElementLeft,
          iconElementRight = _props.iconElementRight,
          iconClassNameLeft = _props.iconClassNameLeft,
          iconClassNameRight = _props.iconClassNameRight,
          onLeftIconButtonTouchTap = _props.onLeftIconButtonTouchTap,
          onRightIconButtonTouchTap = _props.onRightIconButtonTouchTap,
          className = _props.className,
          style = _props.style,
          zDepth = _props.zDepth,
          children = _props.children,
          other = (0, _objectWithoutProperties3.default)(_props, ['title', 'titleStyle', 'iconStyleLeft', 'iconStyleRight', 'onTitleTouchTap', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'onLeftIconButtonTouchTap', 'onRightIconButtonTouchTap', 'className', 'style', 'zDepth', 'children']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var menuElementLeft = void 0;
      var menuElementRight = void 0;

      // If the title is a string, wrap in an h1 tag.
      // If not, wrap in a div tag.
      var titleComponent = typeof title === 'string' || title instanceof String ? 'h1' : 'div';

      var titleElement = _react2.default.createElement(titleComponent, {
        onTouchTap: this.handleTitleTouchTap,
        style: prepareStyles((0, _simpleAssign2.default)(styles.title, styles.mainElement, titleStyle))
      }, title);

      var iconLeftStyle = (0, _simpleAssign2.default)({}, styles.iconButtonStyle, iconStyleLeft);

      if (showMenuIconButton) {
        if (iconElementLeft) {
          var iconElementLeftProps = {};

          if (iconElementLeft.type.muiName === 'IconButton') {
            var iconElemLeftChildren = iconElementLeft.props.children;
            var iconButtonIconStyle = !(iconElemLeftChildren && iconElemLeftChildren.props && iconElemLeftChildren.props.color) ? styles.iconButtonIconStyle : null;

            iconElementLeftProps.iconStyle = (0, _simpleAssign2.default)({}, iconButtonIconStyle, iconElementLeft.props.iconStyle);
          }

          if (!iconElementLeft.props.onTouchTap && this.props.onLeftIconButtonTouchTap) {
            iconElementLeftProps.onTouchTap = this.handleTouchTapLeftIconButton;
          }

          menuElementLeft = _react2.default.createElement(
            'div',
            { style: prepareStyles(iconLeftStyle) },
            (0, _keys2.default)(iconElementLeftProps).length > 0 ? (0, _react.cloneElement)(iconElementLeft, iconElementLeftProps) : iconElementLeft
          );
        } else {
          menuElementLeft = _react2.default.createElement(
            _IconButton2.default,
            {
              style: iconLeftStyle,
              iconStyle: styles.iconButtonIconStyle,
              iconClassName: iconClassNameLeft,
              onTouchTap: this.handleTouchTapLeftIconButton
            },
            iconClassNameLeft ? '' : _react2.default.createElement(_menu2.default, { style: (0, _simpleAssign2.default)({}, styles.iconButtonIconStyle) })
          );
        }
      }

      var iconRightStyle = (0, _simpleAssign2.default)({}, styles.iconButtonStyle, {
        marginRight: -16,
        marginLeft: 'auto'
      }, iconStyleRight);

      if (iconElementRight) {
        var iconElementRightProps = {};

        switch (iconElementRight.type.muiName) {
          case 'IconMenu':
          case 'IconButton':
            var iconElemRightChildren = iconElementRight.props.children;
            var _iconButtonIconStyle = !(iconElemRightChildren && iconElemRightChildren.props && iconElemRightChildren.props.color) ? styles.iconButtonIconStyle : null;

            iconElementRightProps.iconStyle = (0, _simpleAssign2.default)({}, _iconButtonIconStyle, iconElementRight.props.iconStyle);
            break;

          case 'FlatButton':
            iconElementRightProps.style = (0, _simpleAssign2.default)({}, styles.flatButton, iconElementRight.props.style);
            break;

          default:
        }

        if (!iconElementRight.props.onTouchTap && this.props.onRightIconButtonTouchTap) {
          iconElementRightProps.onTouchTap = this.handleTouchTapRightIconButton;
        }

        menuElementRight = _react2.default.createElement(
          'div',
          { style: prepareStyles(iconRightStyle) },
          (0, _keys2.default)(iconElementRightProps).length > 0 ? (0, _react.cloneElement)(iconElementRight, iconElementRightProps) : iconElementRight
        );
      } else if (iconClassNameRight) {
        menuElementRight = _react2.default.createElement(_IconButton2.default, {
          style: iconRightStyle,
          iconStyle: styles.iconButtonIconStyle,
          iconClassName: iconClassNameRight,
          onTouchTap: this.handleTouchTapRightIconButton
        });
      }

      return _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({}, other, {
          rounded: false,
          className: className,
          style: (0, _simpleAssign2.default)({}, styles.root, style),
          zDepth: zDepth
        }),
        menuElementLeft,
        titleElement,
        menuElementRight,
        children
      );
    }
  }]);
  return AppBar;
}(_react.Component);

AppBar.muiName = 'AppBar';
AppBar.defaultProps = {
  showMenuIconButton: true,
  title: '',
  zDepth: 1
};
AppBar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
AppBar.propTypes =  true ? {
  /**
   * Can be used to render a tab inside an app bar for instance.
   */
  children: _propTypes2.default.node,
  /**
   * Applied to the app bar's root element.
   */
  className: _propTypes2.default.string,
  /**
   * The classname of the icon on the left of the app bar.
   * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
   */
  iconClassNameLeft: _propTypes2.default.string,
  /**
   * Similiar to the iconClassNameLeft prop except that
   * it applies to the icon displayed on the right of the app bar.
   */
  iconClassNameRight: _propTypes2.default.string,
  /**
   * The custom element to be displayed on the left side of the
   * app bar such as an SvgIcon.
   */
  iconElementLeft: _propTypes2.default.element,
  /**
   * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
   */
  iconElementRight: _propTypes2.default.element,
  /**
   * Override the inline-styles of the element displayed on the left side of the app bar.
   */
  iconStyleLeft: _propTypes2.default.object,
  /**
   * Override the inline-styles of the element displayed on the right side of the app bar.
   */
  iconStyleRight: _propTypes2.default.object,
  /**
   * Callback function for when the left icon is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the left `IconButton`.
   */
  onLeftIconButtonTouchTap: _propTypes2.default.func,
  /**
   * Callback function for when the right icon is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the right `IconButton`.
   */
  onRightIconButtonTouchTap: _propTypes2.default.func,
  /**
   * Callback function for when the title text is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the `title` node.
   */
  onTitleTouchTap: _propTypes2.default.func,
  /**
   * Determines whether or not to display the Menu icon next to the title.
   * Setting this prop to false will hide the icon.
   */
  showMenuIconButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The title to display on the app bar.
   */
  title: _propTypes2.default.node,
  /**
   * Override the inline-styles of the app bar's title element.
   */
  titleStyle: _propTypes2.default.object,
  /**
   * The zDepth of the component.
   * The shadow of the app bar is also dependent on this property.
   */
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = AppBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMmVmZjc2MTU3NDVmYjZiM2U1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRhcC1ldmVudC1wbHVnaW4vc3JjL2luamVjdFRhcEV2ZW50UGx1Z2luLmpzPzRiN2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRhcC1ldmVudC1wbHVnaW4vc3JjL2RlZmF1bHRDbGlja1JlamVjdGlvblN0cmF0ZWd5LmpzP2RhNTgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRhcC1ldmVudC1wbHVnaW4vc3JjL1RhcEV2ZW50UGx1Z2luLmpzPzY3N2MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9saWIvRXZlbnRDb25zdGFudHMuanM/NzIwNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdGFwLWV2ZW50LXBsdWdpbi9zcmMvVG91Y2hFdmVudFV0aWxzLmpzP2Y1MzkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2tleU9mLmpzPzlmYWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0FwcEJhci9pbmRleC5qcz81M2Q2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9BcHBCYXIvQXBwQmFyLmpzP2IxNWYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIGRlZmF1bHRDbGlja1JlamVjdGlvblN0cmF0ZWd5ID0gcmVxdWlyZSgnLi9kZWZhdWx0Q2xpY2tSZWplY3Rpb25TdHJhdGVneScpO1xuXG52YXIgYWxyZWFkeUluamVjdGVkID0gZmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5qZWN0VGFwRXZlbnRQbHVnaW4gKHN0cmF0ZWd5T3ZlcnJpZGVzKSB7XG4gIHN0cmF0ZWd5T3ZlcnJpZGVzID0gc3RyYXRlZ3lPdmVycmlkZXMgfHwge31cbiAgdmFyIHNob3VsZFJlamVjdENsaWNrID0gc3RyYXRlZ3lPdmVycmlkZXMuc2hvdWxkUmVqZWN0Q2xpY2sgfHwgZGVmYXVsdENsaWNrUmVqZWN0aW9uU3RyYXRlZ3k7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICAhYWxyZWFkeUluamVjdGVkLFxuICAgICAgJ2luamVjdFRhcEV2ZW50UGx1Z2luKCk6IENhbiBvbmx5IGJlIGNhbGxlZCBvbmNlIHBlciBhcHBsaWNhdGlvbiBsaWZlY3ljbGUuXFxuXFxuXFxcbkl0IGlzIHJlY29tbWVuZGVkIHRvIGNhbGwgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKSBqdXN0IGJlZm9yZSB5b3UgY2FsbCBcXFxuUmVhY3RET00ucmVuZGVyKCkuIElmIHlvdSBhcmUgdXNpbmcgYW4gZXh0ZXJuYWwgbGlicmFyeSB3aGljaCBjYWxscyBpbmplY3RUYXBFdmVudFBsdWdpbigpIFxcXG5pdHNlbGYsIHBsZWFzZSBjb250YWN0IHRoZSBtYWludGFpbmVyIGFzIGl0IHNob3VsZG5cXCd0IGJlIGNhbGxlZCBpbiBsaWJyYXJ5IGNvZGUgYW5kIFxcXG5zaG91bGQgYmUgaW5qZWN0ZWQgYnkgdGhlIGFwcGxpY2F0aW9uLidcbiAgICApXG4gIH1cblxuICBhbHJlYWR5SW5qZWN0ZWQgPSB0cnVlO1xuXG4gIHJlcXVpcmUoJ3JlYWN0LWRvbS9saWIvRXZlbnRQbHVnaW5IdWInKS5pbmplY3Rpb24uaW5qZWN0RXZlbnRQbHVnaW5zQnlOYW1lKHtcbiAgICAnVGFwRXZlbnRQbHVnaW4nOiAgICAgICByZXF1aXJlKCcuL1RhcEV2ZW50UGx1Z2luLmpzJykoc2hvdWxkUmVqZWN0Q2xpY2spXG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRhcC1ldmVudC1wbHVnaW4vc3JjL2luamVjdFRhcEV2ZW50UGx1Z2luLmpzXG4vLyBtb2R1bGUgaWQgPSA2NzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsYXN0VG91Y2hFdmVudCwgY2xpY2tUaW1lc3RhbXApIHtcbiAgaWYgKGxhc3RUb3VjaEV2ZW50ICYmIChjbGlja1RpbWVzdGFtcCAtIGxhc3RUb3VjaEV2ZW50KSA8IDc1MCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdGFwLWV2ZW50LXBsdWdpbi9zcmMvZGVmYXVsdENsaWNrUmVqZWN0aW9uU3RyYXRlZ3kuanNcbi8vIG1vZHVsZSBpZCA9IDY3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgVGFwRXZlbnRQbHVnaW5cbiAqIEB0eXBlY2hlY2tzIHN0YXRpYy1vbmx5XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBFdmVudENvbnN0YW50cyA9IHJlcXVpcmUoJ3JlYWN0LWRvbS9saWIvRXZlbnRDb25zdGFudHMnKTtcbnZhciBFdmVudFBsdWdpblV0aWxzID0gcmVxdWlyZSgncmVhY3QtZG9tL2xpYi9FdmVudFBsdWdpblV0aWxzJyk7XG52YXIgRXZlbnRQcm9wYWdhdG9ycyA9IHJlcXVpcmUoJ3JlYWN0LWRvbS9saWIvRXZlbnRQcm9wYWdhdG9ycycpO1xudmFyIFN5bnRoZXRpY1VJRXZlbnQgPSByZXF1aXJlKCdyZWFjdC1kb20vbGliL1N5bnRoZXRpY1VJRXZlbnQnKTtcbnZhciBUb3VjaEV2ZW50VXRpbHMgPSByZXF1aXJlKCcuL1RvdWNoRXZlbnRVdGlscycpO1xudmFyIFZpZXdwb3J0TWV0cmljcyA9IHJlcXVpcmUoJ3JlYWN0LWRvbS9saWIvVmlld3BvcnRNZXRyaWNzJyk7XG5cbnZhciBrZXlPZiA9IHJlcXVpcmUoJ2ZianMvbGliL2tleU9mJyk7XG52YXIgdG9wTGV2ZWxUeXBlcyA9IEV2ZW50Q29uc3RhbnRzLnRvcExldmVsVHlwZXM7XG5cbnZhciBpc1N0YXJ0aXNoID0gRXZlbnRQbHVnaW5VdGlscy5pc1N0YXJ0aXNoO1xudmFyIGlzRW5kaXNoID0gRXZlbnRQbHVnaW5VdGlscy5pc0VuZGlzaDtcblxudmFyIGlzVG91Y2ggPSBmdW5jdGlvbih0b3BMZXZlbFR5cGUpIHtcbiAgdmFyIHRvdWNoVHlwZXMgPSBbXG4gICAgJ3RvcFRvdWNoQ2FuY2VsJyxcbiAgICAndG9wVG91Y2hFbmQnLFxuICAgICd0b3BUb3VjaFN0YXJ0JyxcbiAgICAndG9wVG91Y2hNb3ZlJ1xuICBdO1xuICByZXR1cm4gdG91Y2hUeXBlcy5pbmRleE9mKHRvcExldmVsVHlwZSkgPj0gMDtcbn1cblxuLyoqXG4gKiBOdW1iZXIgb2YgcGl4ZWxzIHRoYXQgYXJlIHRvbGVyYXRlZCBpbiBiZXR3ZWVuIGEgYHRvdWNoU3RhcnRgIGFuZCBgdG91Y2hFbmRgXG4gKiBpbiBvcmRlciB0byBzdGlsbCBiZSBjb25zaWRlcmVkIGEgJ3RhcCcgZXZlbnQuXG4gKi9cbnZhciB0YXBNb3ZlVGhyZXNob2xkID0gMTA7XG52YXIgaWdub3JlTW91c2VUaHJlc2hvbGQgPSA3NTA7XG52YXIgc3RhcnRDb29yZHMgPSB7eDogbnVsbCwgeTogbnVsbH07XG52YXIgbGFzdFRvdWNoRXZlbnQgPSBudWxsO1xuXG52YXIgQXhpcyA9IHtcbiAgeDoge3BhZ2U6ICdwYWdlWCcsIGNsaWVudDogJ2NsaWVudFgnLCBlbnZTY3JvbGw6ICdjdXJyZW50UGFnZVNjcm9sbExlZnQnfSxcbiAgeToge3BhZ2U6ICdwYWdlWScsIGNsaWVudDogJ2NsaWVudFknLCBlbnZTY3JvbGw6ICdjdXJyZW50UGFnZVNjcm9sbFRvcCd9XG59O1xuXG5mdW5jdGlvbiBnZXRBeGlzQ29vcmRPZkV2ZW50KGF4aXMsIG5hdGl2ZUV2ZW50KSB7XG4gIHZhciBzaW5nbGVUb3VjaCA9IFRvdWNoRXZlbnRVdGlscy5leHRyYWN0U2luZ2xlVG91Y2gobmF0aXZlRXZlbnQpO1xuICBpZiAoc2luZ2xlVG91Y2gpIHtcbiAgICByZXR1cm4gc2luZ2xlVG91Y2hbYXhpcy5wYWdlXTtcbiAgfVxuICByZXR1cm4gYXhpcy5wYWdlIGluIG5hdGl2ZUV2ZW50ID9cbiAgICBuYXRpdmVFdmVudFtheGlzLnBhZ2VdIDpcbiAgICBuYXRpdmVFdmVudFtheGlzLmNsaWVudF0gKyBWaWV3cG9ydE1ldHJpY3NbYXhpcy5lbnZTY3JvbGxdO1xufVxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShjb29yZHMsIG5hdGl2ZUV2ZW50KSB7XG4gIHZhciBwYWdlWCA9IGdldEF4aXNDb29yZE9mRXZlbnQoQXhpcy54LCBuYXRpdmVFdmVudCk7XG4gIHZhciBwYWdlWSA9IGdldEF4aXNDb29yZE9mRXZlbnQoQXhpcy55LCBuYXRpdmVFdmVudCk7XG4gIHJldHVybiBNYXRoLnBvdyhcbiAgICBNYXRoLnBvdyhwYWdlWCAtIGNvb3Jkcy54LCAyKSArIE1hdGgucG93KHBhZ2VZIC0gY29vcmRzLnksIDIpLFxuICAgIDAuNVxuICApO1xufVxuXG52YXIgdG91Y2hFdmVudHMgPSBbXG4gICd0b3BUb3VjaFN0YXJ0JyxcbiAgJ3RvcFRvdWNoQ2FuY2VsJyxcbiAgJ3RvcFRvdWNoRW5kJyxcbiAgJ3RvcFRvdWNoTW92ZScsXG5dO1xuXG52YXIgZGVwZW5kZW5jaWVzID0gW1xuICAndG9wTW91c2VEb3duJyxcbiAgJ3RvcE1vdXNlTW92ZScsXG4gICd0b3BNb3VzZVVwJyxcbl0uY29uY2F0KHRvdWNoRXZlbnRzKTtcblxudmFyIGV2ZW50VHlwZXMgPSB7XG4gIHRvdWNoVGFwOiB7XG4gICAgcGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6IHtcbiAgICAgIGJ1YmJsZWQ6IGtleU9mKHtvblRvdWNoVGFwOiBudWxsfSksXG4gICAgICBjYXB0dXJlZDoga2V5T2Yoe29uVG91Y2hUYXBDYXB0dXJlOiBudWxsfSlcbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogZGVwZW5kZW5jaWVzXG4gIH1cbn07XG5cbnZhciBub3cgPSAoZnVuY3Rpb24oKSB7XG4gIGlmIChEYXRlLm5vdykge1xuICAgIHJldHVybiBEYXRlLm5vdztcbiAgfSBlbHNlIHtcbiAgICAvLyBJRTggc3VwcG9ydDogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85NDMwMzU3L3BsZWFzZS1leHBsYWluLXdoeS1hbmQtaG93LW5ldy1kYXRlLXdvcmtzLWFzLXdvcmthcm91bmQtZm9yLWRhdGUtbm93LWluXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiArbmV3IERhdGU7XG4gICAgfVxuICB9XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXBFdmVudFBsdWdpbihzaG91bGRSZWplY3RDbGljaykge1xuICByZXR1cm4ge1xuXG4gICAgdGFwTW92ZVRocmVzaG9sZDogdGFwTW92ZVRocmVzaG9sZCxcblxuICAgIGlnbm9yZU1vdXNlVGhyZXNob2xkOiBpZ25vcmVNb3VzZVRocmVzaG9sZCxcblxuICAgIGV2ZW50VHlwZXM6IGV2ZW50VHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG9wTGV2ZWxUeXBlIFJlY29yZCBmcm9tIGBFdmVudENvbnN0YW50c2AuXG4gICAgICogQHBhcmFtIHtET01FdmVudFRhcmdldH0gdGFyZ2V0SW5zdCBUaGUgbGlzdGVuaW5nIGNvbXBvbmVudCByb290IG5vZGUuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5hdGl2ZUV2ZW50IE5hdGl2ZSBicm93c2VyIGV2ZW50LlxuICAgICAqIEByZXR1cm4geyp9IEFuIGFjY3VtdWxhdGlvbiBvZiBzeW50aGV0aWMgZXZlbnRzLlxuICAgICAqIEBzZWUge0V2ZW50UGx1Z2luSHViLmV4dHJhY3RFdmVudHN9XG4gICAgICovXG4gICAgZXh0cmFjdEV2ZW50czogZnVuY3Rpb24oXG4gICAgICB0b3BMZXZlbFR5cGUsXG4gICAgICB0YXJnZXRJbnN0LFxuICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICBuYXRpdmVFdmVudFRhcmdldFxuICAgICkge1xuXG4gICAgICBpZiAoIWlzU3RhcnRpc2godG9wTGV2ZWxUeXBlKSAmJiAhaXNFbmRpc2godG9wTGV2ZWxUeXBlKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzVG91Y2godG9wTGV2ZWxUeXBlKSkge1xuICAgICAgICBsYXN0VG91Y2hFdmVudCA9IG5vdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNob3VsZFJlamVjdENsaWNrKGxhc3RUb3VjaEV2ZW50LCBub3coKSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZXZlbnQgPSBudWxsO1xuICAgICAgdmFyIGRpc3RhbmNlID0gZ2V0RGlzdGFuY2Uoc3RhcnRDb29yZHMsIG5hdGl2ZUV2ZW50KTtcbiAgICAgIGlmIChpc0VuZGlzaCh0b3BMZXZlbFR5cGUpICYmIGRpc3RhbmNlIDwgdGFwTW92ZVRocmVzaG9sZCkge1xuICAgICAgICBldmVudCA9IFN5bnRoZXRpY1VJRXZlbnQuZ2V0UG9vbGVkKFxuICAgICAgICAgIGV2ZW50VHlwZXMudG91Y2hUYXAsXG4gICAgICAgICAgdGFyZ2V0SW5zdCxcbiAgICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgICBuYXRpdmVFdmVudFRhcmdldFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3RhcnRpc2godG9wTGV2ZWxUeXBlKSkge1xuICAgICAgICBzdGFydENvb3Jkcy54ID0gZ2V0QXhpc0Nvb3JkT2ZFdmVudChBeGlzLngsIG5hdGl2ZUV2ZW50KTtcbiAgICAgICAgc3RhcnRDb29yZHMueSA9IGdldEF4aXNDb29yZE9mRXZlbnQoQXhpcy55LCBuYXRpdmVFdmVudCk7XG4gICAgICB9IGVsc2UgaWYgKGlzRW5kaXNoKHRvcExldmVsVHlwZSkpIHtcbiAgICAgICAgc3RhcnRDb29yZHMueCA9IDA7XG4gICAgICAgIHN0YXJ0Q29vcmRzLnkgPSAwO1xuICAgICAgfVxuICAgICAgRXZlbnRQcm9wYWdhdG9ycy5hY2N1bXVsYXRlVHdvUGhhc2VEaXNwYXRjaGVzKGV2ZW50KTtcbiAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVUYXBFdmVudFBsdWdpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRhcC1ldmVudC1wbHVnaW4vc3JjL1RhcEV2ZW50UGx1Z2luLmpzXG4vLyBtb2R1bGUgaWQgPSA2NzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBUeXBlcyBvZiByYXcgc2lnbmFscyBmcm9tIHRoZSBicm93c2VyIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsLlxuICovXG52YXIgdG9wTGV2ZWxUeXBlcyA9IHtcbiAgdG9wQWJvcnQ6IG51bGwsXG4gIHRvcEFuaW1hdGlvbkVuZDogbnVsbCxcbiAgdG9wQW5pbWF0aW9uSXRlcmF0aW9uOiBudWxsLFxuICB0b3BBbmltYXRpb25TdGFydDogbnVsbCxcbiAgdG9wQmx1cjogbnVsbCxcbiAgdG9wQ2FuUGxheTogbnVsbCxcbiAgdG9wQ2FuUGxheVRocm91Z2g6IG51bGwsXG4gIHRvcENoYW5nZTogbnVsbCxcbiAgdG9wQ2xpY2s6IG51bGwsXG4gIHRvcENvbXBvc2l0aW9uRW5kOiBudWxsLFxuICB0b3BDb21wb3NpdGlvblN0YXJ0OiBudWxsLFxuICB0b3BDb21wb3NpdGlvblVwZGF0ZTogbnVsbCxcbiAgdG9wQ29udGV4dE1lbnU6IG51bGwsXG4gIHRvcENvcHk6IG51bGwsXG4gIHRvcEN1dDogbnVsbCxcbiAgdG9wRG91YmxlQ2xpY2s6IG51bGwsXG4gIHRvcERyYWc6IG51bGwsXG4gIHRvcERyYWdFbmQ6IG51bGwsXG4gIHRvcERyYWdFbnRlcjogbnVsbCxcbiAgdG9wRHJhZ0V4aXQ6IG51bGwsXG4gIHRvcERyYWdMZWF2ZTogbnVsbCxcbiAgdG9wRHJhZ092ZXI6IG51bGwsXG4gIHRvcERyYWdTdGFydDogbnVsbCxcbiAgdG9wRHJvcDogbnVsbCxcbiAgdG9wRHVyYXRpb25DaGFuZ2U6IG51bGwsXG4gIHRvcEVtcHRpZWQ6IG51bGwsXG4gIHRvcEVuY3J5cHRlZDogbnVsbCxcbiAgdG9wRW5kZWQ6IG51bGwsXG4gIHRvcEVycm9yOiBudWxsLFxuICB0b3BGb2N1czogbnVsbCxcbiAgdG9wSW5wdXQ6IG51bGwsXG4gIHRvcEludmFsaWQ6IG51bGwsXG4gIHRvcEtleURvd246IG51bGwsXG4gIHRvcEtleVByZXNzOiBudWxsLFxuICB0b3BLZXlVcDogbnVsbCxcbiAgdG9wTG9hZDogbnVsbCxcbiAgdG9wTG9hZGVkRGF0YTogbnVsbCxcbiAgdG9wTG9hZGVkTWV0YWRhdGE6IG51bGwsXG4gIHRvcExvYWRTdGFydDogbnVsbCxcbiAgdG9wTW91c2VEb3duOiBudWxsLFxuICB0b3BNb3VzZU1vdmU6IG51bGwsXG4gIHRvcE1vdXNlT3V0OiBudWxsLFxuICB0b3BNb3VzZU92ZXI6IG51bGwsXG4gIHRvcE1vdXNlVXA6IG51bGwsXG4gIHRvcFBhc3RlOiBudWxsLFxuICB0b3BQYXVzZTogbnVsbCxcbiAgdG9wUGxheTogbnVsbCxcbiAgdG9wUGxheWluZzogbnVsbCxcbiAgdG9wUHJvZ3Jlc3M6IG51bGwsXG4gIHRvcFJhdGVDaGFuZ2U6IG51bGwsXG4gIHRvcFJlc2V0OiBudWxsLFxuICB0b3BTY3JvbGw6IG51bGwsXG4gIHRvcFNlZWtlZDogbnVsbCxcbiAgdG9wU2Vla2luZzogbnVsbCxcbiAgdG9wU2VsZWN0aW9uQ2hhbmdlOiBudWxsLFxuICB0b3BTdGFsbGVkOiBudWxsLFxuICB0b3BTdWJtaXQ6IG51bGwsXG4gIHRvcFN1c3BlbmQ6IG51bGwsXG4gIHRvcFRleHRJbnB1dDogbnVsbCxcbiAgdG9wVGltZVVwZGF0ZTogbnVsbCxcbiAgdG9wVG91Y2hDYW5jZWw6IG51bGwsXG4gIHRvcFRvdWNoRW5kOiBudWxsLFxuICB0b3BUb3VjaE1vdmU6IG51bGwsXG4gIHRvcFRvdWNoU3RhcnQ6IG51bGwsXG4gIHRvcFRyYW5zaXRpb25FbmQ6IG51bGwsXG4gIHRvcFZvbHVtZUNoYW5nZTogbnVsbCxcbiAgdG9wV2FpdGluZzogbnVsbCxcbiAgdG9wV2hlZWw6IG51bGxcbn07XG5cbnZhciBFdmVudENvbnN0YW50cyA9IHtcbiAgdG9wTGV2ZWxUeXBlczogdG9wTGV2ZWxUeXBlc1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudENvbnN0YW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vbGliL0V2ZW50Q29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2Nzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE0IEZhY2Vib29rLCBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFRvdWNoRXZlbnRVdGlsc1xuICovXG5cbnZhciBUb3VjaEV2ZW50VXRpbHMgPSB7XG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIGZvciBjb21tb24gY2FzZSBvZiBleHRyYWN0aW5nIG91dCB0aGUgcHJpbWFyeSB0b3VjaCBmcm9tIGFcbiAgICogdG91Y2ggZXZlbnQuXG4gICAqIC0gYHRvdWNoRW5kYCBldmVudHMgdXN1YWxseSBkbyBub3QgaGF2ZSB0aGUgYHRvdWNoZXNgIHByb3BlcnR5LlxuICAgKiAgIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzY2NjkyOS9cbiAgICogICBtb2JpbGUtc2FyYWktdG91Y2hlbmQtZXZlbnQtbm90LWZpcmluZy13aGVuLWxhc3QtdG91Y2gtaXMtcmVtb3ZlZFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBuYXRpdmVFdmVudCBOYXRpdmUgZXZlbnQgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBhIHRvdWNoLlxuICAgKiBAcmV0dXJuIHtUb3VjaGVzT2JqZWN0P30gYW4gb2JqZWN0IHdpdGggcGFnZVggYW5kIHBhZ2VZIG9yIG51bGwuXG4gICAqL1xuICBleHRyYWN0U2luZ2xlVG91Y2g6IGZ1bmN0aW9uKG5hdGl2ZUV2ZW50KSB7XG4gICAgdmFyIHRvdWNoZXMgPSBuYXRpdmVFdmVudC50b3VjaGVzO1xuICAgIHZhciBjaGFuZ2VkVG91Y2hlcyA9IG5hdGl2ZUV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuICAgIHZhciBoYXNUb3VjaGVzID0gdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCA+IDA7XG4gICAgdmFyIGhhc0NoYW5nZWRUb3VjaGVzID0gY2hhbmdlZFRvdWNoZXMgJiYgY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMDtcblxuICAgIHJldHVybiAhaGFzVG91Y2hlcyAmJiBoYXNDaGFuZ2VkVG91Y2hlcyA/IGNoYW5nZWRUb3VjaGVzWzBdIDpcbiAgICAgICAgICAgaGFzVG91Y2hlcyA/IHRvdWNoZXNbMF0gOlxuICAgICAgICAgICBuYXRpdmVFdmVudDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb3VjaEV2ZW50VXRpbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10YXAtZXZlbnQtcGx1Z2luL3NyYy9Ub3VjaEV2ZW50VXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDY3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4vKipcbiAqIEFsbG93cyBleHRyYWN0aW9uIG9mIGEgbWluaWZpZWQga2V5LiBMZXQncyB0aGUgYnVpbGQgc3lzdGVtIG1pbmlmeSBrZXlzXG4gKiB3aXRob3V0IGxvc2luZyB0aGUgYWJpbGl0eSB0byBkeW5hbWljYWxseSB1c2Uga2V5IHN0cmluZ3MgYXMgdmFsdWVzXG4gKiB0aGVtc2VsdmVzLiBQYXNzIGluIGFuIG9iamVjdCB3aXRoIGEgc2luZ2xlIGtleS92YWwgcGFpciBhbmQgaXQgd2lsbCByZXR1cm5cbiAqIHlvdSB0aGUgc3RyaW5nIGtleSBvZiB0aGF0IHNpbmdsZSByZWNvcmQuIFN1cHBvc2UgeW91IHdhbnQgdG8gZ3JhYiB0aGVcbiAqIHZhbHVlIGZvciBhIGtleSAnY2xhc3NOYW1lJyBpbnNpZGUgb2YgYW4gb2JqZWN0LiBLZXkvdmFsIG1pbmlmaWNhdGlvbiBtYXlcbiAqIGhhdmUgYWxpYXNlZCB0aGF0IGtleSB0byBiZSAneGExMicuIGtleU9mKHtjbGFzc05hbWU6IG51bGx9KSB3aWxsIHJldHVyblxuICogJ3hhMTInIGluIHRoYXQgY2FzZS4gUmVzb2x2ZSBrZXlzIHlvdSB3YW50IHRvIHVzZSBvbmNlIGF0IHN0YXJ0dXAgdGltZSwgdGhlblxuICogcmV1c2UgdGhvc2UgcmVzb2x1dGlvbnMuXG4gKi9cbnZhciBrZXlPZiA9IGZ1bmN0aW9uIGtleU9mKG9uZUtleU9iaikge1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBvbmVLZXlPYmopIHtcbiAgICBpZiAoIW9uZUtleU9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5T2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIva2V5T2YuanNcbi8vIG1vZHVsZSBpZCA9IDY3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfQXBwQmFyID0gcmVxdWlyZSgnLi9BcHBCYXInKTtcblxudmFyIF9BcHBCYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXBwQmFyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0FwcEJhcjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9BcHBCYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2tleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTtcblxudmFyIF9rZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG5leHBvcnRzLmdldFN0eWxlcyA9IGdldFN0eWxlcztcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfSWNvbkJ1dHRvbiA9IHJlcXVpcmUoJy4uL0ljb25CdXR0b24nKTtcblxudmFyIF9JY29uQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ljb25CdXR0b24pO1xuXG52YXIgX21lbnUgPSByZXF1aXJlKCcuLi9zdmctaWNvbnMvbmF2aWdhdGlvbi9tZW51Jyk7XG5cbnZhciBfbWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZW51KTtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4uL1BhcGVyJyk7XG5cbnZhciBfUGFwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFwZXIpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIGFwcEJhciA9IF9jb250ZXh0JG11aVRoZW1lLmFwcEJhcixcbiAgICAgIGljb25CdXR0b25TaXplID0gX2NvbnRleHQkbXVpVGhlbWUuYnV0dG9uLmljb25CdXR0b25TaXplLFxuICAgICAgekluZGV4ID0gX2NvbnRleHQkbXVpVGhlbWUuekluZGV4O1xuXG5cbiAgdmFyIGZsYXRCdXR0b25TaXplID0gMzY7XG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogekluZGV4LmFwcEJhcixcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcEJhci5jb2xvcixcbiAgICAgIHBhZGRpbmdMZWZ0OiBhcHBCYXIucGFkZGluZyxcbiAgICAgIHBhZGRpbmdSaWdodDogYXBwQmFyLnBhZGRpbmdcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgZm9udFdlaWdodDogYXBwQmFyLnRpdGxlRm9udFdlaWdodCxcbiAgICAgIGNvbG9yOiBhcHBCYXIudGV4dENvbG9yLFxuICAgICAgaGVpZ2h0OiBhcHBCYXIuaGVpZ2h0LFxuICAgICAgbGluZUhlaWdodDogYXBwQmFyLmhlaWdodCArICdweCdcbiAgICB9LFxuICAgIG1haW5FbGVtZW50OiB7XG4gICAgICBib3hGbGV4OiAxLFxuICAgICAgZmxleDogJzEnXG4gICAgfSxcbiAgICBpY29uQnV0dG9uU3R5bGU6IHtcbiAgICAgIG1hcmdpblRvcDogKGFwcEJhci5oZWlnaHQgLSBpY29uQnV0dG9uU2l6ZSkgLyAyLFxuICAgICAgbWFyZ2luUmlnaHQ6IDgsXG4gICAgICBtYXJnaW5MZWZ0OiAtMTZcbiAgICB9LFxuICAgIGljb25CdXR0b25JY29uU3R5bGU6IHtcbiAgICAgIGZpbGw6IGFwcEJhci50ZXh0Q29sb3IsXG4gICAgICBjb2xvcjogYXBwQmFyLnRleHRDb2xvclxuICAgIH0sXG4gICAgZmxhdEJ1dHRvbjoge1xuICAgICAgY29sb3I6IGFwcEJhci50ZXh0Q29sb3IsXG4gICAgICBtYXJnaW5Ub3A6IChpY29uQnV0dG9uU2l6ZSAtIGZsYXRCdXR0b25TaXplKSAvIDIgKyAxXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBBcHBCYXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShBcHBCYXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFwcEJhcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBBcHBCYXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gQXBwQmFyLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShBcHBCYXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYW5kbGVUb3VjaFRhcExlZnRJY29uQnV0dG9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25MZWZ0SWNvbkJ1dHRvblRvdWNoVGFwKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTGVmdEljb25CdXR0b25Ub3VjaFRhcChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXBSaWdodEljb25CdXR0b24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblJpZ2h0SWNvbkJ1dHRvblRvdWNoVGFwKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uUmlnaHRJY29uQnV0dG9uVG91Y2hUYXAoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRpdGxlVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRpdGxlVG91Y2hUYXApIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25UaXRsZVRvdWNoVGFwKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoQXBwQmFyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCF0aGlzLnByb3BzLmljb25FbGVtZW50TGVmdCB8fCAhdGhpcy5wcm9wcy5pY29uQ2xhc3NOYW1lTGVmdCwgJ01hdGVyaWFsLVVJOiBQcm9wZXJ0aWVzIGljb25FbGVtZW50TGVmdFxcbiAgICAgIGFuZCBpY29uQ2xhc3NOYW1lTGVmdCBjYW5ub3QgYmUgc2ltdWx0YW5lb3VzbHkgZGVmaW5lZC4gUGxlYXNlIHVzZSBvbmUgb3IgdGhlIG90aGVyLicpIDogdm9pZCAwO1xuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCF0aGlzLnByb3BzLmljb25FbGVtZW50UmlnaHQgfHwgIXRoaXMucHJvcHMuaWNvbkNsYXNzTmFtZVJpZ2h0LCAnTWF0ZXJpYWwtVUk6IFByb3BlcnRpZXMgaWNvbkVsZW1lbnRSaWdodFxcbiAgICAgIGFuZCBpY29uQ2xhc3NOYW1lUmlnaHQgY2Fubm90IGJlIHNpbXVsdGFuZW91c2x5IGRlZmluZWQuIFBsZWFzZSB1c2Ugb25lIG9yIHRoZSBvdGhlci4nKSA6IHZvaWQgMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aXRsZSA9IF9wcm9wcy50aXRsZSxcbiAgICAgICAgICB0aXRsZVN0eWxlID0gX3Byb3BzLnRpdGxlU3R5bGUsXG4gICAgICAgICAgaWNvblN0eWxlTGVmdCA9IF9wcm9wcy5pY29uU3R5bGVMZWZ0LFxuICAgICAgICAgIGljb25TdHlsZVJpZ2h0ID0gX3Byb3BzLmljb25TdHlsZVJpZ2h0LFxuICAgICAgICAgIG9uVGl0bGVUb3VjaFRhcCA9IF9wcm9wcy5vblRpdGxlVG91Y2hUYXAsXG4gICAgICAgICAgc2hvd01lbnVJY29uQnV0dG9uID0gX3Byb3BzLnNob3dNZW51SWNvbkJ1dHRvbixcbiAgICAgICAgICBpY29uRWxlbWVudExlZnQgPSBfcHJvcHMuaWNvbkVsZW1lbnRMZWZ0LFxuICAgICAgICAgIGljb25FbGVtZW50UmlnaHQgPSBfcHJvcHMuaWNvbkVsZW1lbnRSaWdodCxcbiAgICAgICAgICBpY29uQ2xhc3NOYW1lTGVmdCA9IF9wcm9wcy5pY29uQ2xhc3NOYW1lTGVmdCxcbiAgICAgICAgICBpY29uQ2xhc3NOYW1lUmlnaHQgPSBfcHJvcHMuaWNvbkNsYXNzTmFtZVJpZ2h0LFxuICAgICAgICAgIG9uTGVmdEljb25CdXR0b25Ub3VjaFRhcCA9IF9wcm9wcy5vbkxlZnRJY29uQnV0dG9uVG91Y2hUYXAsXG4gICAgICAgICAgb25SaWdodEljb25CdXR0b25Ub3VjaFRhcCA9IF9wcm9wcy5vblJpZ2h0SWNvbkJ1dHRvblRvdWNoVGFwLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgekRlcHRoID0gX3Byb3BzLnpEZXB0aCxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWyd0aXRsZScsICd0aXRsZVN0eWxlJywgJ2ljb25TdHlsZUxlZnQnLCAnaWNvblN0eWxlUmlnaHQnLCAnb25UaXRsZVRvdWNoVGFwJywgJ3Nob3dNZW51SWNvbkJ1dHRvbicsICdpY29uRWxlbWVudExlZnQnLCAnaWNvbkVsZW1lbnRSaWdodCcsICdpY29uQ2xhc3NOYW1lTGVmdCcsICdpY29uQ2xhc3NOYW1lUmlnaHQnLCAnb25MZWZ0SWNvbkJ1dHRvblRvdWNoVGFwJywgJ29uUmlnaHRJY29uQnV0dG9uVG91Y2hUYXAnLCAnY2xhc3NOYW1lJywgJ3N0eWxlJywgJ3pEZXB0aCcsICdjaGlsZHJlbiddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcblxuICAgICAgdmFyIG1lbnVFbGVtZW50TGVmdCA9IHZvaWQgMDtcbiAgICAgIHZhciBtZW51RWxlbWVudFJpZ2h0ID0gdm9pZCAwO1xuXG4gICAgICAvLyBJZiB0aGUgdGl0bGUgaXMgYSBzdHJpbmcsIHdyYXAgaW4gYW4gaDEgdGFnLlxuICAgICAgLy8gSWYgbm90LCB3cmFwIGluIGEgZGl2IHRhZy5cbiAgICAgIHZhciB0aXRsZUNvbXBvbmVudCA9IHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgfHwgdGl0bGUgaW5zdGFuY2VvZiBTdHJpbmcgPyAnaDEnIDogJ2Rpdic7XG5cbiAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aXRsZUNvbXBvbmVudCwge1xuICAgICAgICBvblRvdWNoVGFwOiB0aGlzLmhhbmRsZVRpdGxlVG91Y2hUYXAsXG4gICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMudGl0bGUsIHN0eWxlcy5tYWluRWxlbWVudCwgdGl0bGVTdHlsZSkpXG4gICAgICB9LCB0aXRsZSk7XG5cbiAgICAgIHZhciBpY29uTGVmdFN0eWxlID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaWNvbkJ1dHRvblN0eWxlLCBpY29uU3R5bGVMZWZ0KTtcblxuICAgICAgaWYgKHNob3dNZW51SWNvbkJ1dHRvbikge1xuICAgICAgICBpZiAoaWNvbkVsZW1lbnRMZWZ0KSB7XG4gICAgICAgICAgdmFyIGljb25FbGVtZW50TGVmdFByb3BzID0ge307XG5cbiAgICAgICAgICBpZiAoaWNvbkVsZW1lbnRMZWZ0LnR5cGUubXVpTmFtZSA9PT0gJ0ljb25CdXR0b24nKSB7XG4gICAgICAgICAgICB2YXIgaWNvbkVsZW1MZWZ0Q2hpbGRyZW4gPSBpY29uRWxlbWVudExlZnQucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXIgaWNvbkJ1dHRvbkljb25TdHlsZSA9ICEoaWNvbkVsZW1MZWZ0Q2hpbGRyZW4gJiYgaWNvbkVsZW1MZWZ0Q2hpbGRyZW4ucHJvcHMgJiYgaWNvbkVsZW1MZWZ0Q2hpbGRyZW4ucHJvcHMuY29sb3IpID8gc3R5bGVzLmljb25CdXR0b25JY29uU3R5bGUgOiBudWxsO1xuXG4gICAgICAgICAgICBpY29uRWxlbWVudExlZnRQcm9wcy5pY29uU3R5bGUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGljb25CdXR0b25JY29uU3R5bGUsIGljb25FbGVtZW50TGVmdC5wcm9wcy5pY29uU3R5bGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaWNvbkVsZW1lbnRMZWZ0LnByb3BzLm9uVG91Y2hUYXAgJiYgdGhpcy5wcm9wcy5vbkxlZnRJY29uQnV0dG9uVG91Y2hUYXApIHtcbiAgICAgICAgICAgIGljb25FbGVtZW50TGVmdFByb3BzLm9uVG91Y2hUYXAgPSB0aGlzLmhhbmRsZVRvdWNoVGFwTGVmdEljb25CdXR0b247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVudUVsZW1lbnRMZWZ0ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoaWNvbkxlZnRTdHlsZSkgfSxcbiAgICAgICAgICAgICgwLCBfa2V5czIuZGVmYXVsdCkoaWNvbkVsZW1lbnRMZWZ0UHJvcHMpLmxlbmd0aCA+IDAgPyAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaWNvbkVsZW1lbnRMZWZ0LCBpY29uRWxlbWVudExlZnRQcm9wcykgOiBpY29uRWxlbWVudExlZnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbnVFbGVtZW50TGVmdCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX0ljb25CdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiBpY29uTGVmdFN0eWxlLFxuICAgICAgICAgICAgICBpY29uU3R5bGU6IHN0eWxlcy5pY29uQnV0dG9uSWNvblN0eWxlLFxuICAgICAgICAgICAgICBpY29uQ2xhc3NOYW1lOiBpY29uQ2xhc3NOYW1lTGVmdCxcbiAgICAgICAgICAgICAgb25Ub3VjaFRhcDogdGhpcy5oYW5kbGVUb3VjaFRhcExlZnRJY29uQnV0dG9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbkNsYXNzTmFtZUxlZnQgPyAnJyA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9tZW51Mi5kZWZhdWx0LCB7IHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5pY29uQnV0dG9uSWNvblN0eWxlKSB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGljb25SaWdodFN0eWxlID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaWNvbkJ1dHRvblN0eWxlLCB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAtMTYsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJ1xuICAgICAgfSwgaWNvblN0eWxlUmlnaHQpO1xuXG4gICAgICBpZiAoaWNvbkVsZW1lbnRSaWdodCkge1xuICAgICAgICB2YXIgaWNvbkVsZW1lbnRSaWdodFByb3BzID0ge307XG5cbiAgICAgICAgc3dpdGNoIChpY29uRWxlbWVudFJpZ2h0LnR5cGUubXVpTmFtZSkge1xuICAgICAgICAgIGNhc2UgJ0ljb25NZW51JzpcbiAgICAgICAgICBjYXNlICdJY29uQnV0dG9uJzpcbiAgICAgICAgICAgIHZhciBpY29uRWxlbVJpZ2h0Q2hpbGRyZW4gPSBpY29uRWxlbWVudFJpZ2h0LnByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyIF9pY29uQnV0dG9uSWNvblN0eWxlID0gIShpY29uRWxlbVJpZ2h0Q2hpbGRyZW4gJiYgaWNvbkVsZW1SaWdodENoaWxkcmVuLnByb3BzICYmIGljb25FbGVtUmlnaHRDaGlsZHJlbi5wcm9wcy5jb2xvcikgPyBzdHlsZXMuaWNvbkJ1dHRvbkljb25TdHlsZSA6IG51bGw7XG5cbiAgICAgICAgICAgIGljb25FbGVtZW50UmlnaHRQcm9wcy5pY29uU3R5bGUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIF9pY29uQnV0dG9uSWNvblN0eWxlLCBpY29uRWxlbWVudFJpZ2h0LnByb3BzLmljb25TdHlsZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0ZsYXRCdXR0b24nOlxuICAgICAgICAgICAgaWNvbkVsZW1lbnRSaWdodFByb3BzLnN0eWxlID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuZmxhdEJ1dHRvbiwgaWNvbkVsZW1lbnRSaWdodC5wcm9wcy5zdHlsZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWljb25FbGVtZW50UmlnaHQucHJvcHMub25Ub3VjaFRhcCAmJiB0aGlzLnByb3BzLm9uUmlnaHRJY29uQnV0dG9uVG91Y2hUYXApIHtcbiAgICAgICAgICBpY29uRWxlbWVudFJpZ2h0UHJvcHMub25Ub3VjaFRhcCA9IHRoaXMuaGFuZGxlVG91Y2hUYXBSaWdodEljb25CdXR0b247XG4gICAgICAgIH1cblxuICAgICAgICBtZW51RWxlbWVudFJpZ2h0ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhpY29uUmlnaHRTdHlsZSkgfSxcbiAgICAgICAgICAoMCwgX2tleXMyLmRlZmF1bHQpKGljb25FbGVtZW50UmlnaHRQcm9wcykubGVuZ3RoID4gMCA/ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShpY29uRWxlbWVudFJpZ2h0LCBpY29uRWxlbWVudFJpZ2h0UHJvcHMpIDogaWNvbkVsZW1lbnRSaWdodFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChpY29uQ2xhc3NOYW1lUmlnaHQpIHtcbiAgICAgICAgbWVudUVsZW1lbnRSaWdodCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9JY29uQnV0dG9uMi5kZWZhdWx0LCB7XG4gICAgICAgICAgc3R5bGU6IGljb25SaWdodFN0eWxlLFxuICAgICAgICAgIGljb25TdHlsZTogc3R5bGVzLmljb25CdXR0b25JY29uU3R5bGUsXG4gICAgICAgICAgaWNvbkNsYXNzTmFtZTogaWNvbkNsYXNzTmFtZVJpZ2h0LFxuICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMuaGFuZGxlVG91Y2hUYXBSaWdodEljb25CdXR0b25cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgIHJvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yb290LCBzdHlsZSksXG4gICAgICAgICAgekRlcHRoOiB6RGVwdGhcbiAgICAgICAgfSksXG4gICAgICAgIG1lbnVFbGVtZW50TGVmdCxcbiAgICAgICAgdGl0bGVFbGVtZW50LFxuICAgICAgICBtZW51RWxlbWVudFJpZ2h0LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEFwcEJhcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkFwcEJhci5tdWlOYW1lID0gJ0FwcEJhcic7XG5BcHBCYXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93TWVudUljb25CdXR0b246IHRydWUsXG4gIHRpdGxlOiAnJyxcbiAgekRlcHRoOiAxXG59O1xuQXBwQmFyLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5BcHBCYXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gcmVuZGVyIGEgdGFiIGluc2lkZSBhbiBhcHAgYmFyIGZvciBpbnN0YW5jZS5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBBcHBsaWVkIHRvIHRoZSBhcHAgYmFyJ3Mgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjbGFzc25hbWUgb2YgdGhlIGljb24gb24gdGhlIGxlZnQgb2YgdGhlIGFwcCBiYXIuXG4gICAqIElmIHlvdSBhcmUgdXNpbmcgYSBzdHlsZXNoZWV0IGZvciB5b3VyIGljb25zLCBlbnRlciB0aGUgY2xhc3MgbmFtZSBmb3IgdGhlIGljb24gdG8gYmUgdXNlZCBoZXJlLlxuICAgKi9cbiAgaWNvbkNsYXNzTmFtZUxlZnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogU2ltaWxpYXIgdG8gdGhlIGljb25DbGFzc05hbWVMZWZ0IHByb3AgZXhjZXB0IHRoYXRcbiAgICogaXQgYXBwbGllcyB0byB0aGUgaWNvbiBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IG9mIHRoZSBhcHAgYmFyLlxuICAgKi9cbiAgaWNvbkNsYXNzTmFtZVJpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjdXN0b20gZWxlbWVudCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIGxlZnQgc2lkZSBvZiB0aGVcbiAgICogYXBwIGJhciBzdWNoIGFzIGFuIFN2Z0ljb24uXG4gICAqL1xuICBpY29uRWxlbWVudExlZnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIFNpbWlsaWFyIHRvIHRoZSBpY29uRWxlbWVudExlZnQgcHJvcCBleGNlcHQgdGhhdCB0aGlzIGVsZW1lbnQgaXMgZGlzcGxheWVkIG9uIHRoZSByaWdodCBvZiB0aGUgYXBwIGJhci5cbiAgICovXG4gIGljb25FbGVtZW50UmlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBlbGVtZW50IGRpc3BsYXllZCBvbiB0aGUgbGVmdCBzaWRlIG9mIHRoZSBhcHAgYmFyLlxuICAgKi9cbiAgaWNvblN0eWxlTGVmdDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgZWxlbWVudCBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGFwcCBiYXIuXG4gICAqL1xuICBpY29uU3R5bGVSaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3Igd2hlbiB0aGUgbGVmdCBpY29uIGlzIHNlbGVjdGVkIHZpYSBhIHRvdWNoIHRhcC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgbGVmdCBgSWNvbkJ1dHRvbmAuXG4gICAqL1xuICBvbkxlZnRJY29uQnV0dG9uVG91Y2hUYXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZvciB3aGVuIHRoZSByaWdodCBpY29uIGlzIHNlbGVjdGVkIHZpYSBhIHRvdWNoIHRhcC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgcmlnaHQgYEljb25CdXR0b25gLlxuICAgKi9cbiAgb25SaWdodEljb25CdXR0b25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZm9yIHdoZW4gdGhlIHRpdGxlIHRleHQgaXMgc2VsZWN0ZWQgdmlhIGEgdG91Y2ggdGFwLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBgdGl0bGVgIG5vZGUuXG4gICAqL1xuICBvblRpdGxlVG91Y2hUYXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdG8gZGlzcGxheSB0aGUgTWVudSBpY29uIG5leHQgdG8gdGhlIHRpdGxlLlxuICAgKiBTZXR0aW5nIHRoaXMgcHJvcCB0byBmYWxzZSB3aWxsIGhpZGUgdGhlIGljb24uXG4gICAqL1xuICBzaG93TWVudUljb25CdXR0b246IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheSBvbiB0aGUgYXBwIGJhci5cbiAgICovXG4gIHRpdGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgYXBwIGJhcidzIHRpdGxlIGVsZW1lbnQuXG4gICAqL1xuICB0aXRsZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSB6RGVwdGggb2YgdGhlIGNvbXBvbmVudC5cbiAgICogVGhlIHNoYWRvdyBvZiB0aGUgYXBwIGJhciBpcyBhbHNvIGRlcGVuZGVudCBvbiB0aGlzIHByb3BlcnR5LlxuICAgKi9cbiAgekRlcHRoOiBfcHJvcFR5cGVzNC5kZWZhdWx0LnpEZXB0aFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwQmFyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0FwcEJhci9BcHBCYXIuanNcbi8vIG1vZHVsZSBpZCA9IDY4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMxS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=